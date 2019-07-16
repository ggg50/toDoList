import AV from 'leancloud-storage';

let APP_ID = 'XkGYsWhtNpnkocVIOkOFjS6I-gzGzoHsz';
let APP_KEY = 'nrILDs94ESyXa17q1jl5PnJd';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export const TodoModel = {

  getByUser(user, successFn, errorFn) {
    let query = new AV.Query("TodoFolder");
    query.find().then(response=> {
      let array = response.map((t)=> {
        return {id: t.id, ...t.attributes}
      })
      successFn.call(null, array);
    }, error=> {
      errorFn && errorFn.call(null, error)
    })

  },

  create({status, title, deleted}, successFn, errorFn) {
    let TodoFolder = AV.Object.extend("TodoFolder");
    let todo = new TodoFolder();

    let acl = new AV.ACL();
    acl.setPublicReadAccess(false);
    acl.setReadAccess(AV.User.current(), true);
    acl.setWriteAccess(AV.User.current(), true);

    todo.setACL(acl);

    todo.save({
      "title": title,
      "status": status,
      "delete": deleted
    }).then(response=> {
      successFn(response);
    }, error=> {
      errorFn(error);
    })
  },

  destroy(todoId, successFn, errorFn){
    let todo = AV.Object.createWithoutData("TodoFolder", todoId);
    todo.destroy().then(response=> {
      successFn && successFn.call(null)
    }, error=> {
      errorFn && errorFn.call(null)
    })
  },

  update({id, title, status, deleted}, successFn, errorFn) {
    let todo = AV.Object.createWithoutData("TodoFolder", id);
    title !== undefined && todo.set("title", title);
    status !== undefined && todo.set("status", status);
    deleted !== undefined && todo.set("deleted", deleted);
    todo.save().then(response=>{
      successFn && successFn.call(null);
    }, ()=> {
      errorFn && errorFn.call(null);
    })
  }
}


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
  } else if(!/@/.test(email)){
    alert("邮箱格式错误")
  }
  else {
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
  if(!email) {
    alert("邮箱不能为空")
  } else if(!/@/.test(email)){
    alert("邮箱格式错误")
  } else {
    AV.User.requestPasswordReset(email).then((response)=> {
      successFn && successFn(response);
    }, (error) => errorFn && errorFn());
  }
}


function getUserFromAVUser(AVUser) {
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}
