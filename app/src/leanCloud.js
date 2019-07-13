import AV from 'leancloud-storage';

let APP_ID = 'XkGYsWhtNpnkocVIOkOFjS6I-gzGzoHsz';
let APP_KEY = 'nrILDs94ESyXa17q1jl5PnJd';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


export default AV;


export function signUp(username, password, successFn, errorFn){
  var user = new AV.User();
  // 设置用户名
  user.setUsername(username);
  // 设置密码
  user.setPassword(password);


  user.signUp().then(function (loginedUser) {
      console.log(loginedUser);
  }, function (error) {
  });
}






// 
//
// export function fetch(resourceName) {
//   let query = new AV.Query(resourceName);
//   return query.find();
// },
//
// export function saveNew(resourceName, newTodo) {
//   let Message = AV.Object.extend(resourceName);
//   let message = new Message();
//
//   return message.save({
//     "id": newTodo.id,
//     "title": newTodo.title,
//     "status": newTodo.status,
//     "delete": newTodo.delete
//   });
// }
