import AV from 'leancloud-storage';

let APP_ID = 'XkGYsWhtNpnkocVIOkOFjS6I-gzGzoHsz';
let APP_KEY = 'nrILDs94ESyXa17q1jl5PnJd';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


//
// export function fetch(resourceName) {
//   let query = new AV.Query(resourceName);
//   return query.find();
// },

export const TodoModel = {

  getByUser(user, successFn, errorFn) {
    let query = new AV.Query("TodoFolder");
    query.find().then(response=> {
      let array = response.map((t)=> {
        return {id: t.id, ...t.attributes}
      })
      successFn.call(null, array);
    }, error=> {
      // errorFn && errorFn.call(null, error)
    })

  },

  create({status, title, deleted}, successFn, errorFn) {
    let TodoFolder = AV.Object.extend("TodoFolder");
    let todoFolder = new TodoFolder();

    todoFolder.save({
      "title": title,
      "status": status,
      "delete": deleted
    }).then(response=> {
      successFn(response);
    }, error=> {
      errorFn(error);
    })
  }
}





export function saveNewTodo(newTodo) {




}






//
// // 声明类型
// let TodoFolder = AV.Object.extend("TodoFolder");
// // 新建对象
// let todoFolder = new TodoFolder();
// // 设置名称
// todoFolder.set('name','工作');
// // 设置优先级
// todoFolder.set('priority',1);
// todoFolder.save().then(function (todo) {
//   console.log('objectId is ' + todo.id);
// }, function (error) {
//   console.error(error);
// });






export default AV;

export function signUp(username, password, email, successFn, errorFn) {
  //生成 user 对象，并设置 username 和 password
  var user = new AV.User();

  if(!username) {
    alert("用户名不能为空")
  } else if(!password) {
    alert("密码不能为空")
  } else if(!email) {
    alert("邮箱不能为空")
  } else {
    user.setUsername(username);
    user.setPassword(password);
    user.setEmail(email);
    user.signUp().then(function (loginedUser) {
      let user = getUserFromAVUser(loginedUser);
      successFn.call(null, user);
    }, function (error) {
      errorFn(error);
    });
  }
}

export function signIn(username, password, successFn, errorFn) {
  if(!username) {
    alert("用户名不能为空")
  } else if(!password) {
    alert("密码不能为空")
  } else {
    AV.User.logIn(username, password).then(function(loginedUser) {
      let user = getUserFromAVUser(loginedUser);
      successFn.call(null, user);
    }, function(error) {
      errorFn.call(null, error);
    })
  }
}

export function signOut() {
  AV.User.logOut();
}

export function getCurrentUser(){
  let user = AV.User.current();
  if(user) {
    return getUserFromAVUser(user);
  } else {
    return null;
  }
}

export function sendPasswordResetEmail(email, successFn, errorFn) {
  AV.User.requestPasswordReset(email).then(()=> console.log(1), (error)=> alert(error));
}


function getUserFromAVUser(AVUser) {
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}
