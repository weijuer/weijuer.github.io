// 1.加载本地数据blog.json文件
const appData = require('./blog.json')
// 获取日志数据集合
const blog = appData.blogList

// 2.获取window.indexedDB对象
const IndexedDB = {
  dataBase: {
    name: 'weijuer_db',
    version: 1,
    db: null,
    objStore: {
      name: 'blog', // 存储空间表名称
      keypath: 'id' // 主键
    }
  },
  indexedDB: window.indexedDB || window.webkitindexedDB,
  IDBKeyRange: window.IDBKeyRange || window.webkitIDBKeyRange, // 键范围
  openDB: function (dbName, dbVersion, callback) {
    // 1.建立或打开数据库，建立对象存储空间(ObjectStore)
    let self = this
    let version = dbVersion || 1
    let request = self.indexedDB.open(dbName, version)
    request.onerror = function (e) {
      console.log('建立并打开数据库出错:error===>' + e.currentTarget.error.message)
    }
    request.onsuccess = function (e) {
      IndexedDB.dataBase.db = e.target.result
      console.log('成功建立并打开数据库:name===>' + IndexedDB.dataBase.name + ', version:' + dbVersion)
    }
    request.onupgradeneeded = function (e) {
      let db, transaction, store
      db = e.target.result
      transaction = e.target.transaction

      if (!db.objectStoreNames.contains(IndexedDB.dataBase.objStore.name)) {
        // 没有该对象空间时创建该对象空间
        store = db.createObjectStore(IndexedDB.dataBase.objStore.name, {keyPath: IndexedDB.dataBase.objStore.keypath})
        console.log('成功建立对象存储空间：' + IndexedDB.dataBase.objStore.name)
      }
    }
  },

  deletedb: function (dbName) {
    // 删除数据库
    let self = this
    self.indexedDB.deleteDatabase(dbName)
    console.log(dbName + '数据库已删除')
  },

  closeDB: function (db) {
    // 关闭数据库
    db.close()
    console.log('数据库已关闭')
  },

  addData: function (db, storeName, data) {
    // 添加数据，重复添加会报错
    let store, request
    store = db.transaction(storeName, 'readwrite').objectStore(storeName)

    for (let i = 0; i < data.length; i++) {
      request = store.add(data[i])
      request.onerror = function () {
        console.error('add添加数据库中已有该数据')
      }
      request.onsuccess = function () {
        console.log('add添加数据已存入数据库')
      }
    }
  },

  putData: function (db, storeName, data) {
    // 添加数据，重复添加会更新原有数据
    let store, request
    store = db.transaction(storeName, 'readwrite').objectStore(storeName)

    for (let i = 0; i < data.length; i++) {
      request = store.put(data[i])
      request.onerror = function () {
        console.error('put添加数据库中已有该数据')
      }
      request.onsuccess = function () {
        console.log('put添加数据已存入数据库')
      }
    }
  },

  getDataByKey: function (db, storeName, key) {
    // 根据存储空间的键找到对应数据
    let store = db.transaction(storeName, 'readwrite').objectStore(storeName)
    let request = store.get(key)
    request.onerror = function (e) {
      console.error('getDataByKey error' + e.currentTarget.error.message)
    }

    request.onsuccess = function (e) {
      let result = e.target.result
      console.log('查找数据成功')
      console.log(result)
    }
  },

  getAllData: function (db, storeName, callback) {
    // 根据存储空间的键找到对应数据
    let store = db.transaction(storeName, 'readwrite').objectStore(storeName)
    let request = store.getAll()
    request.onerror = function (e) {
      console.error('getAllData error' + e.currentTarget.error.message)
    }

    request.onsuccess = function (e) {
      let result = e.target.result
      console.log('查找所有数据成功！result===>' + result)
      callback(result)
    }
  },

  deleteData: function (db, storeName, key) {
    // 删除某一条记录
    let store = db.transaction(storeName, 'readwrite').objectStore(storeName)
    store.delete(key)
    console.log('已删除存储空间' + storeName + '中' + key + '记录')
  },

  clearData: function (db, storeName) {
    // 删除存储空间全部记录
    let store = db.transaction(storeName, 'readwrite').objectStore(storeName)
    store.clear()
    console.log('已删除存储空间' + storeName + '全部记录')
  }
}

module.exports = IndexedDB
