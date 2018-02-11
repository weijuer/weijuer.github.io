class IndexedDB {

  /**
   * IndexedDB构造器
   * @param option 参数
   * @param callback
   */
  constructor (option, callback) {
    const _this = this
    _this.storeName = option.storeName
    const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB

    // 返回Promise实例对象
    return new Promise( (resolve, reject) => {

      const request = indexedDB.open(option.dbName, option.version)

      request.onsuccess = e => {
        _this.db = e.target.result
        console.log('Init indexedDB successfully')
        //callback(this.db)
        resolve(_this)
      }
      request.onupgradeneeded = e => {
        _this.db = e.target.result
        if (!_this.db.objectStoreNames.contains(option.storeName)) {
          _this.store = _this.db.createObjectStore(option.storeName)
        }
        console.log('DB version changed, db version: ', _this.db.version)
      }
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
  get (key, callback) {
    const transaction = this.db.transaction(this.storeName)
    const objectStore = transaction.objectStore(this.storeName)
    const request = objectStore.get(key)

    request.onerror = e => {
      console.info('Can not get value', e)
    }
    request.onsuccess = e => {
      callback(e.target.result)
    }
  }

  /**
   * 获取当前实例存储对象的所有数据集合
   * @param callback
   */
  getAll (callback) {
    const transaction = this.db.transaction(this.storeName)
    const objectStore = transaction.objectStore(this.storeName)
    const request = objectStore.getAll()

    request.onerror = e => {
      console.info('Can not get all data', e)
    }
    request.onsuccess = e => {
      callback(e.target.result)
    }
  }

  /**
   * 插入数据
   * @param value
   * @param key
   */
  set (value, key) {
    let oldValue

    if (key) {
      this.get(key, function (res) {
        oldValue = res
      })
    }

    if (oldValue) {
      console.info('You should use function update')
    } else {
      const transaction = this.db.transaction(this.storeName, 'readwrite')
      const objectStore = transaction.objectStore(this.storeName)
      const request = objectStore.add(value, key)

      request.onerror = e => {
        console.info('Can not add value', e)
      }
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
      const transaction = this.db.transaction(this.storeName, 'readwrite')
      const objectStore = transaction.objectStore(this.storeName)
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
    const request = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName).delete(key)
    request.onerror = e => {
      console.info('Can not remove value', e)
    }
  }

  /**
   * 关闭数据库
   */
  close () {
    this.db.close()
  }
}

export default IndexedDB
