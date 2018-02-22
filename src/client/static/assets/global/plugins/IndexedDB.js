const _indexedDB_ = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB
const _dBTransaction_ = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction
const _dBKeyRange_ = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

class IndexedDB {
  /**
   * IndexedDB构造器
   * @param option 参数
   */
  constructor (option) {

    // 实例
    this._instance = null
    // DB
    this._db = null
    // dbName
    this._dbName = option.dbName
    // store
    this._store = null
    // storeName
    this._storeName = option.storeName
    // 初始化
    return this._dbInit(option)
  }

  /**
   * 获得事务对象
   * @returns {*|void|IDBTransaction}
   */
  get transaction () {
    return this._db.transaction([this._storeName], _dBTransaction_.READ_WRITE || 'readwrite')
  }

  /**
   * 获得事务对象
   * @returns {*|void|IDBTransaction}
   */
  get request () {
    return this.transaction.objectStore(this._storeName)[method](...args)
  }

  /**
   * 封装异步操作方法
   * @param method
   * @param args
   * @returns {Promise<any>}
   * @private
   */
  _toPromise(method, ...args) {
    try {
      return new Promise((resolve, reject) => {
        // 获得事务
        let trans = this.transaction
        // 获得请求
        let req = trans.objectStore(this._storeName)[method](...args)
        // 请求成功
        req.onsuccess = event => resolve(event.target.result)
        // 请求失败
        req.onerror = event => reject(req.error)
        // 事务失败
        trans.onerror = event => reject(trans.error)
      })
    } catch (err) {
      Promise.reject(err)
    }
  }

  /**
   * 初始化
   * @param option
   * @returns {Promise<any>}
   * @private
   */
  _dbInit (option) {
    return this.getInstance(option).then( (db) => {
      this._db = db
      return this
    })
  }

  /**
   * 获取实例
   * @param option
   * @returns {Promise<any>}
   */
  getInstance (option) {
    if (this._instance) {
      Promise.resolve(this._instance)
    }

    return new Promise((resolve, reject) => {
      let request = _indexedDB_.open(this._dbName, option.dbVersion)

      // 执行成功
      request.onsuccess = event => {
        this._db = request.result
        console.log('Init indexedDB successfully')
        return resolve(this._db)
      }

      // 设置升级操作
      request.onupgradeneeded = event => {
        this._db = request.result || event.target.result
        if (!this._db.objectStoreNames.contains(option.storeName)) {
          this._store = this._db.createObjectStore(option.storeName)
        }
        console.log('DB version changed, db version: ', this._db.version)
      }

      // 执行失败
      request.onerror = event => {
        console.info('Can not open indexedDB', event)
        return reject(event)
      }

    })
  }

  /**
   * 获取文件
   * @param path 路径
   */
  getFile (path) {
    return this._toPromise('get', path)
  }

  /**
   * 写入文件
   * @param {*String} path 路径
   * @param {*String|Blob} content 内容
   * @param {*String} type
   * @param {*String} append 暂无用
   */
  async writeToFile(path, content, type = null, append = false) {
    let data = content
    // 不是blob，转为blob
    if (content instanceof ArrayBuffer) {
      data = new Blob([new Uint8Array(content)], { type })
    } else if (typeof content === 'string') {
      data = new Blob([content], { type: 'text/plain' })
    } else {
      data = new Blob([content])
    }
    await this._toPromise('put', data, path)
    return this.getFile(path)

  }

  readEntries (path = '') {
    if (!path) {
      return this.readAllEntries()
    }
    return this._toPromise('getAllKeys', IDBKeyRange.lowerBound(path)).then(r => r.filter(p => {
      // 以当前路径开头 && （截断当前为空字符串，或者截断后以/开头）
      return p.indexOf(path) === 0 && (p.substring(path.length) === '' || p.substring(path.length).indexOf('/') === 0)
    }))
  }

  readAllEntries () {
    return this._toPromise('getAllKeys')
  }

  ensureDirectory (directory = '') {
    return Promise.resolve(directory)
  }

  clear() {
    return this._toPromise('clear').then(r => true)
  }

  /**
   * 加工处理path，比如特殊字符，比如以/开头等等
   * @param {*String} path
   */
  _handlePath (path) {
    return path
  }

  _open (option) {

    const _this = this

    // 返回Promise实例对象
    return new Promise((resolve, reject) => {
      const request = _indexedDB_.open(option.dbName, option.version)

      // indexedDB执行成功
      request.onsuccess = e => {
        _this.db = e.target.result
        console.log('Init indexedDB successfully')
        resolve(e.target.result)
      }

      // 设置升级操作
      request.onupgradeneeded = e => {
        _this.db = e.target.result
        if (!_this.db.objectStoreNames.contains(option.storeName)) {
          _this.store = _this.db.createObjectStore(option.storeName)
        }
        console.log('DB version changed, db version: ', _this.db.version)
      }

      // indexedDB执行失败
      request.onerror = e => {
        console.info('Can not open indexedDB', e)
        reject(e)
      }
    })
  }

  /**
   * 根据key获取单条记录信息
   * @param key
   * @param callback
   */
  get (key) {
    const transaction = this.transaction
    const objectStore = transaction.objectStore(this._storeName)
    const request = objectStore.get(key)

    // 返回Promise实例对象
    return new Promise((resolve, reject) => {

      request.onsuccess = event => {
        resolve(event.target.result)
      }
      request.onerror = event => {
        console.info('Can not get value', event)
        reject(event)
      }
    })
  }

  /**
   * 获取当前实例存储对象的所有数据集合
   * @param callback
   */
  getAll () {
    const transaction = this.transaction
    const objectStore = transaction.objectStore(this._storeName)

    // 返回Promise实例对象
    return new Promise((resolve, reject) => {

      const request = objectStore.getAll()

      request.onerror = e => {
        console.info('Can not get all data', e)
        reject(e)
      }
      request.onsuccess = e => {
        console.info('Get all data success! dataList.length:===>', e.target.result.length)
        resolve(e.target.result)
      }
    })
  }

  /**
   * 插入数据
   * @param value
   * @param key
   */
  set (value, key) {
    let oldValue

    if (key) {
      this.get(key).then((res) =>{
        oldValue = res

        if (oldValue) {
          console.info('You should use function update')
        } else {
          const transaction = this.transaction
          const objectStore = transaction.objectStore(this._storeName)
          const request = objectStore.add(value, key)

          request.onerror = e => {
            console.info('Can not add value', e)
          }
        }

      }).catch((error)=>{

      })
    }
  }

  /**
   * 根据文件数据添加多条记录
   * @param dataArr
   */
  insertFileData (dataArr) {
    for (let i = 0; i < dataArr.length; i++) {
      this.set(dataArr[i], i + 1)
    }
  }

  /**
   * 根据key更新单条记录
   * @param newValue
   * @param key
   */
  update (newValue, key) {
    const oldValue = this.get(key)

    if (!oldValue) {
      console.info('You should use function set')
    } else {
      const transaction = this.transaction
      const objectStore = transaction.objectStore(this._storeName)
      const request = objectStore.put(newValue, key)

      request.onerror = e => {
        console.info('Can not update value', e)
      }
    }
  }

  /**
   * 根据key删除某条记录
   * @param key
   */
  remove (key) {
    const request = this.transaction.objectStore(this._storeName).delete(key)
    request.onerror = e => {
      console.info('Can not remove value', e)
    }
  }

  /**
   * 关闭数据库
   */
  close () {
    this._db.close()
  }
}

export default IndexedDB
