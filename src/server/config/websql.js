// 1.打开数据库
let db = openDatabase('weijuer_db', '1.0', 'Test DB', 2 * 1024 * 1024, function () {
  console.log("weijuer_db 创建成功！")
});

// 2.执行查询操作
db.transaction(function (tx) {
  // 2.1 创建weijuer_blog的表，字段为id UNIQUE, portrait,url, title, description, author, date, extra
  tx.executeSql('CREATE TABLE IF NOT EXISTS weijuer_blog (id UNIQUE, portrait,url, title, description, author, date, extra)');
  // 2.2 插入数据
  tx.executeSql('INSERT INTO weijuer_blog (id, portrait,url, title, description, author, date, extra) VALUES (1, "菜鸟教程")');
  tx.executeSql('INSERT INTO weijuer_blog (id, portrait,url, title, description, author, date, extra) VALUES (2, "www.runoob.com")');
});
