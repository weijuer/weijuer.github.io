class IndexedDB {
  /**
   * IndexedDB构造器
   * @param option 参数
   */
  constructor (option, callback) {
    this.storeName = option.storeName
    const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB
    const request = indexedDB.open(option.dbName, option.version)

    request.onsuccess = e => {
      this.db = e.target.result
      console.log('Init indexedDB successfully')
      callback(this.db)
    }
    request.onupgradeneeded = e => {
      this.db = e.target.result
      if (!this.db.objectStoreNames.contains(option.storeName)) {
        this.store = this.db.createObjectStore(option.storeName)
      }
      console.log('DB version changed, db version: ', this.db.version)
    }
    request.onerror = e => {
      console.info('Can not open indexedDB', e)
    }
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
