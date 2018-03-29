export default class IndexedDB {
  /**
   * IndexedDB构造器
   * @param dbName 数据库名称
   */
  constructor(dbName) {
    // iDB 实例
    this._db = null;
    // dbName-（iDB数据库名）
    this._dbName = dbName;
    // storeName
    this._storeName = null;
    // 数据库对象
    this._iDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
    // 事务对象
    this._iDBTrans = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    // 游标范围
    this._iDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
  }

  /**
   * 浏览器是否支持indexedDB,IDBTransaction,IDBKeyRange,Promise
   */
  static isSuport() {
    return !!(this._iDB && this._iDBTrans && this._iDBKeyRange && Promise);
  }

  /**
   * 获得事务对象
   * @returns {*|void|IDBTransaction}
   */
  get transaction() {
    return this._db.transaction([this._storeName], this._iDBTrans.READ_WRITE || 'readwrite');
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
        let trans = this.transaction;
        // 获得请求
        let req = trans.objectStore(this._storeName)[method](...args);

        // 游标
        if (['openCursor', 'openKeyCursor'].indexOf(method) >= 0 && suc) {
          req.onsuccess = function (event) {
            //suc(event)
          };
          trans.oncomplete = function () {
            return resolve()
          };
          trans.onsuccess = function () {
            return resolve()
          };
        } else {
          // 如果是onsuccess 就返回，只表示请求成功，当大文件存储的时候，并不是已经写入完毕才返回
          // req.onsuccess = event => resolve(event.target.result)
          trans.oncomplete = function () {
            return resolve(req.result)
          };
          trans.onsuccess = function () {
            return resolve(req.result)
          };
        }

        // 请求阻塞
        req.onblocked = () => reject(req.error);
        // 请求失败
        req.onerror = () => reject(req.error);
        // 事务失败
        trans.onerror = () => reject(trans.error);
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }

  /**
   * 打开数据库
   * @param storeName
   * @returns {Promise<any>}
   */
  open(storeName) {
    return new Promise((resolve, reject) => {
      // A.关闭数据库连接
      this.close();
      // B.打开新的数据库连接
      const request = this._iDB.open(this._dbName, Date.now());

      request.onerror = () => {
        this._db = null;
        reject(request.error);
      };

      request.onsuccess = () => {
        if (storeName && !request.result.objectStoreNames.contains(storeName)) {
          reject(`IndexedDB's objectStore '${storeName}' isn't existed.`);
        } else {
          this._db = request.result;
          resolve(request.result);
        }
      };

      request.onupgradeneeded = event => {
        event.target.result.createObjectStore(storeName)
      }
    });
  }

  /**
   * 关闭数据库
   */
  close() {
    if (this._db) {
      this._db.close();
      this._db = null;
    }
  }

  insert(storeName, data) {
    if (!data || data.length === 0) {
      return Promise.resolve();
    }

    let transaction = this.db.transaction(storeName, 'readwrite');
    let store = transaction.objectStore(storeName);

    return new Promise((resolve, reject) => {

      // 插入
      data.forEach(row => {
        store.add(row);
      });

      transaction.oncomplete = resolve;
      transaction.onerror = reject;
    }).catch((error) => {
      console.error('添加' + storeName + '表数据失败', error);
      return Promise.reject(error);
    });

  }

  /**
   * 获取文件
   * @param path 路径
   */
  getFile(path) {
    return this._toPromise('get', path);
  }

}


