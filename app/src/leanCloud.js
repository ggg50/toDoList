import AV from 'leancloud-storage';

let APP_ID = 'XkGYsWhtNpnkocVIOkOFjS6I-gzGzoHsz';
let APP_KEY = 'nrILDs94ESyXa17q1jl5PnJd';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


export default AV;


export function signUp(username, password, successFn, errorFn){
  //生成 user 对象，并设置 username 和 password
  var user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);

  user.signUp().then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user);
  }, function (error) {
  });
}

function getUserFromAVUser(AVUser) {
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
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
