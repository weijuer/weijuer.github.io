export class WError {
  constructor({ code = 999, message = '未知错误' }) {
    this.code = code;
    this.message = message;
  }
}

export default class IndexedDB {
  /**
   * IndexedDB构造器
   * @param dbName 数据库名称
   */
  constructor(dbName) {
    // iDB 实例
    this._db = null;
    // dbName -(iDB数据库名)
    this._dbName = dbName;
    // storeName
    this._storeName = null;
    // 数据库对象
    this._iDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
    // 事务对象
    this._iDBTrans = window.IDBTransaction || window.webkitIDBTransaction || window.mozIDBTransaction || window.msIDBTransaction;
    // 游标范围
    this._iDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.mozIDBKeyRange || window.msIDBKeyRange;
  }

  /**
   * 浏览器是否支持indexedDB,IDBTransaction,IDBKeyRange,Promise
   */
  get isSupported() {
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
   * 封装Promise事务异步操作方法
   * @param storeName
   * @param method
   * @param args
   * @returns {*}
   * @private
   */
  _toPromise(storeName, method, ...args) {
    try {
      // A.浏览器是否支持
      if (this.isSupported) return Promise.reject(new WError({code: 998, message: 'So Low, So Young!'}));

      return new Promise(async (resolve, reject) => {
        // B.获取数据库实例
        const db = await this._open(storeName);
        // C.获取事务
        const trans = db.transaction([storeName], this._iDBTrans.READ_WRITE || 'readwrite');
        // D.获取对象仓库
        const objectStore = trans.objectStore(storeName);
        // E.获得请求
        const request = objectStore[method](...args);

        // 请求成功
        request.onsuccess = () => {
          this.close();
          resolve(request.result);
        };
        // 请求阻塞
        request.onblocked = () => reject(request.error);
        // 请求失败
        request.onerror = () => reject(request.error);
        // 事务成功
        trans.onsuccess = () => resolve(request.result);
        // 事务完成
        trans.oncomplete = () => resolve(request.result);
        // 事务失败
        trans.onerror = () => reject(trans.error);
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }

  /**
   * 打开数据库，传入storeName判断objectStore是否存在
   * @param storeName
   * @returns {Promise<any>}
   */
  _open(storeName) {
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
          // reject(`IndexedDB's objectStore '${storeName}' isn't existed.`);
          reject(new WError({code: 1001, message: `IndexedDB's objectStore '${storeName}' isn't existed.`}));
        } else {
          this._db = request.result;
          console.log('连接数据库成功');
          resolve(request.result);
        }
      };
    });
  }

  /**
   * 关闭数据库
   */
  close() {
    if (this._db) {
      this._db.close();
      this._db = null;
      console.log('数据库已关闭');
    }
  }

  /**
   * 删除数据库
   * @returns {Promise}
   */
  delDB() {
    this.close();
    return new Promise((resolve, reject) => {
      const request = this._iDB.deleteDatabase(this._dbName);
      request.onsuccess = e => {
        resolve(e.target.readyState);
      };
      request.onerror = e => {
        reject(e.target.error);
      };
    })
  }

  /**
   * 判断数据库中是否存在objectStore
   * @param storeName
   * @returns {Promise}
   */
  hasStore(storeName) {
    return new Promise(async (resolve, reject) => {
      this.close();
      const request = this._iDB.open(this._dbName, Date.now());
      request.onsuccess = () => {
        this.db = request.result;
        resolve(request.result.objectStoreNames.contains(storeName));
      };
      request.onerror = () => {
        this.db = null;
        reject(request.error);
      };
    });
  }

  /**
   * 创建objectStore, 建议使用索引
   * @param storeName  必选. 需要创建的objectStore的名字
   * @param index  可选. 需要创建objectStore索引时传入,key为字段名,value为boolean表示是否允许重复
   * @param replace  可选. 如果表存在是否先删除再创建, 默认不删除不创建
   * @param keyPath  可选. 主键名, 如果有传入, 那么对应每条数据必须为包含keyPath属性的对象
   * @returns {Promise}
   */
  addStore(storeName, index, replace = false, keyPath) {
    return new Promise(async (resolve, reject) => {
      if (!storeName) {
        // reject(`The first param can't be empty!`)
        reject(new WError({code: 1002, message: `The first param can't be empty!`}));
      }
      // 关闭上次连接
      this.close();
      // 打开本次连接
      const request = this._iDB.open(this._dbName, Date.now());
      // 更新数据库版本时触发
      request.onupgradeneeded = () => {
        let db = request.result;
        // 是否先删除再创建
        if (db.objectStoreNames.contains(storeName)) {
          if (!replace) {
            return false;
          }
          db.deleteObjectStore(storeName);
        }
        // 创建对象仓库
        let objectStore = keyPath ? db.createObjectStore(storeName, {keyPath}) : db.createObjectStore(storeName);
        // 创建索引
        if (Object.prototype.toString.call(index) === '[object Object]') {
          for (let key in index) {
            if (index.hasOwnProperty(key)) {
              objectStore.createIndex(key, key, {unique: !!index[key]});
            }
          }
        }
      };
      request.onerror = () => {
        this._db = null;
        reject(request.error);
      };
      request.onsuccess = () => {
        this._db = request.result;
        resolve(request.result);
      };
    });
  }

  /**
   * 删除objectStore
   * @param storeName
   * @returns {Promise}
   */
  delStore(storeName) {
    return new Promise(async (resolve, reject) => {
      this.close();
      const request = this._iDB.open(this._dbName, Date.now());
      request.onupgradeneeded = () => {
        let db = request.result;
        if (db.objectStoreNames.contains(storeName)) {
          db.deleteObjectStore(storeName);
        }
      };
      request.onerror = () => {
        this._db = null;
        reject(request.error);
      };
      request.onsuccess = () => {
        this._db = request.result;
        resolve(request.result);
      };
    });
  }

  /**
   * 返回游标范围
   * @param start  索引的起始值
   * @param end  索引的结束值
   * @returns {*}
   * @private
   */
  _getRange(start, end) {
    if (typeof start === 'undefined' && typeof end === 'undefined') {
      return undefined;
    }
    if (typeof start !== 'undefined' && typeof end === 'undefined') {
      return this._iDBKeyRange.upperBound(start);
    }
    if (typeof start === 'undefined' && typeof end !== 'undefined') {
      return this._iDBKeyRange.lowerBound(end);
    }
    if (typeof end === 'boolean') {
      return end ? this._iDBKeyRange.upperBound(start) : this._iDBKeyRange.lowerBound(start);
    }
    return end === start ? this._iDBKeyRange.only(start) : this._iDBKeyRange.bound(start, end);
  }

  /**
   * 根据主键值key来获取数据, resolve查到的数据
   * @param storeName
   * @param key
   * @returns {Promise}
   */
  get(storeName, key) {
    return this._toPromise(storeName, 'get', key);
  }

  /**
   * 通过游标来获取指定索引跟范围的值,成功会resolve查到的数据(Array)
   * 对有建立索引的objectStore, 建议使用游标来查询
   * @param store   必选. 需要查询数据的objectStore名
   * @param index  必选. 索引名
   * @param start  可选. 索引的起始值, 查询表中所有数据start和end都不传即可; 只查询大于start的数据, end不传即可
   * @param end  可选. 索引结束值, 只查单个索引,传入跟start相同的值即可;
   * 查询所有小于end的数据, start传入undefined或start传入结束值,同时end传入false
   * @param direction 可选, 默认next. 光标的遍历方向,
   * 值为以下4个: 'next'(下一个),'nextunique'(下一个不包括重复值),'prev'(上一个),'prevunique'(上一个不包括重复值)
   * @returns {Promise}
   */
  find(store, index, start, end, direction) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await this._open(store);
        const transaction = db.transaction([store], 'readonly');
        const objectStore = transaction.objectStore(store);
        const indexObj = objectStore.index(index);

        let range = this._getRange(start, end);
        const directionArr = ['next', 'nextunique', 'prev', 'prevunique'];
        if (!directionArr.includes(direction)) {
          direction = 'next';
        }
        let request = indexObj.openCursor(range, direction);
        let result = [];
        request.onsuccess = e => {
          let cursor = e.target.result;
          if (cursor) {
            result.push(cursor.value);
            cursor.continue();
          } else {
            this.close();
            resolve(result);
          }
        };
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * 通过游标来获取指定索引跟范围的值,成功会resolve({total: Number //总条数, list: Array //列表数据})
   * @param storeName   必选. 需要查询数据的objectStore名
   * @param index  必选. 索引名
   * @param start  可选. 索引的起始值, 查询表中所有数据start和end都不传即可; 只查询大于start的数据, end不传即可
   * @param end  可选. 索引结束值, 只查单个索引,传入跟start相同的值即可;查询所有小于end的数据, start不传即可
   * @param page 可选, 默认1. 页码, Number
   * @param num 可选, 默认10. 每页有多少条数据, Number
   * @param direction 可选, 光标的遍历方向,
   * 值为以下4个: 'next'(下一个),'nextunique'(下一个不包括重复值),'prev'(上一个),'prevunique'(上一个不包括重复值)
   * @returns {Promise}
   */
  findPage({storeName, index, start, end, page = 1, num = 10, direction}) {
    return new Promise(async (resolve, reject) => {
      try {
        page = parseInt(page);
        num = parseInt(num);
        if (isNaN(page) || isNaN(num) || page < 1 || num < 1) {
          // reject('The page and num parameters must be number and greater than 0');
          reject(new WError({code: 1002, message: 'The page and num parameters must be number and greater than 0'}));
        }
        const db = await this._open(storeName);
        const transaction = db.transaction([storeName], 'readonly');
        const objectStore = transaction.objectStore(storeName);
        const indexObj = objectStore.index(index);
        let range = this._getRange(start, end);
        const directionArr = ['next', 'nextunique', 'prev', 'prevunique'];
        if (!directionArr.includes(direction)) {
          direction = 'next';
        }
        let request = indexObj.openCursor(range, direction);
        let requestCount = indexObj.count();
        let total = 0;
        requestCount.onerror = e => {
          reject(e.target.error);
        };
        requestCount.onsuccess = e => {
          total = e.target.result;
          if (total <= num * (page - 1)) {
            this.close();
            resolve({total, list: []});
          }
        };
        let cursorNum = 0;
        let list = [];
        request.onsuccess = e => {
          let cursor = e.target.result;
          cursorNum++;
          if (cursor && cursorNum <= page * num) {
            if (cursorNum > num * (page - 1)) {
              list.push(cursor.value);
            }
            cursor.continue();
          } else {
            this.close();
            resolve({total, list});
          }
        };
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * 添加/修改数据, 成功会resolve添加/修改的key
   * @param objectStore
   * @param val
   * @param key
   * @returns {Promise}
   * @private
   */
  _set(objectStore, val, key) {
    return new Promise(async (resolve, reject) => {
      let request = null;
      if (objectStore.keyPath === null) {
        request = Object.prototype.toString.call(val) === '[object Object]' && Reflect.has(val, key) ? objectStore.put(val, val[key]) : objectStore.put(val, key);
      } else {
        if (Object.prototype.toString.call(val) === '[object Object]' && Reflect.has(val, objectStore.keyPath)) {
          request = objectStore.put(val);
        } else {
          // reject(`The object store uses in-line keys and the key parameter was provided`);
          reject(new WError({code: 1003, message: `The object store uses in-line keys and the key parameter was provided`}));
        }
      }
      request.onsuccess = (e) => {
        resolve(e.target.result);
      };
      request.onerror = (e) => {
        reject(e.target.error);
      };
    });
  }

  /**
   * 添加/修改数据, 成功会resolve添加/修改的key
   * @param storeName  必选. 需要添加/修改数据的objectStore名
   * @param val  必选. 添加/修改的数据, 如果为数组会遍历该数组, 每个元素作为一条数据进行添加/修改.
   * 如果添加objectStore有指定主键,那么val必须为包含主键属性的对象或数组中每个元素都为为包含主键属性的对象
   * @param key  如果有指定keyPath, 该值会被忽略, 否则必选. 如果val为对象或数组中元素为对象, 可以是其中的属性名
   * @param arrSpread 数组是否遍历后存储
   * @returns {Promise}
   */
  set(storeName, val, key, arrSpread = true) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await this._open(storeName);
        const transaction = db.transaction([storeName], 'readwrite');
        const objectStore = transaction.objectStore(storeName);

        if (Object.prototype.toString.call(val) === '[object Array]' && arrSpread) {
          let result = [];
          for (let item of val) {
            result.push(await this._set(objectStore, item, key));
          }
          this.close();
          resolve(result);
        } else {
          let result = await this._set(objectStore, val, key);
          this.close();
          resolve(result);
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * 删除objectStore中的数据, 成功会resolve('done')
   * @param store  必选. 需要删除数据的objectStore名
   * @param start  必选. 主键的值(end不传)/起始值(end传入true)/结束值(end传入false)
   * @param end  可选. 主键结束值
   * @returns {Promise}
   */
  del(store, start, end) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await this._open(store);
        const transaction = db.transaction([store], 'readwrite');
        const objectStore = transaction.objectStore(store);
        let request = typeof end === 'undefined' ? objectStore.delete(start) : objectStore.delete(this._getRange(start, end));
        request.onsuccess = e => {
          this.close();
          resolve(e.target.readyState);
        };
        request.onerror = e => {
          reject(e.target.error);
        };
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * 清空objectStore中的数据, 成功会resolve('done')
   * @param store
   * @returns {Promise}
   */
  clear(store) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await this._open(store);
        const transaction = db.transaction([store], 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.clear();
        request.onsuccess = e => {
          this.close();
          resolve(e.target.readyState);
        };
        request.onerror = e => {
          reject(e.target.error);
        };
      } catch (err) {
        reject(err);
      }
    });
  }
}
