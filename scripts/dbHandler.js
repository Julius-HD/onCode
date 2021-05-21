const { query } = require('express');
var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'oncode' 
}); 
connection.connect();
 
var  sql = 'SELECT * FROM coder';
var addsql='INSERT INTO coder(username,uid, PASSWORD, email) VALUES(?,1,?,?)';
var addVal=['123', '123425', '@qqq.com'];
//插入：
q = connection.query(sql,function (err, result) {
        if(err){
          // console.log('[SELECT ERROR] - ',err.message);
          return;
        }

        //  console.log(result);
});
 

console.log(q);
connection.end();



//$$$
function getCoderInfo(){
  return [];
}

// //注册$$
function register(){
  var addsql='INSERT INTO coder(username,uid, PASSWORD, email) VALUES(?,1,?,?)';
  // var addVal=['123', '123425', '@qqq.com'];
  var addVal=getCoderInfo();//获取面试者信息
  //插入：
  connection.query(addsql, addVal,function (err, result) {
          if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
          }
  
         console.log(result);
  });
}

// 面试者登录：$$
function login(userInfo){
var  sql = 'SELECT * FROM coder';
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
      //  console.log(result[0].username);
      for (var i = 0;i<result.length;i++){
        if(result[i].username==userInfo.username){
          if(result[i].password==userInfo.password){
            //跳转登录
          }
          else{
            //return 密码错误
            //跳转
          }
        }
      }
      //return 用户名不存在
});
 
}