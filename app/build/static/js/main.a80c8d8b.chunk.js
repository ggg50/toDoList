(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(7),r=n.n(i),o=(n(16),n(2)),l=n(3),c=n(5),u=n(4),d=n(6),m=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("input",{type:"text",className:"todoInput",placeholder:"\u270f\ufe0f",value:this.props.content,onChange:this.change.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(e){"Enter"===e.key&&this.props.onSubmit(e)}},{key:"change",value:function(e){this.props.onChange(e)}}]),t}(s.a.Component),h=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"todoItem"},s.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.item.status,onChange:this.toggle.bind(this)}),s.a.createElement("span",{className:"title "+this.props.item.status},this.props.item.title),s.a.createElement("button",{onClick:this.delete.bind(this)}))}},{key:"toggle",value:function(e){this.props.onToggle(e,this.props.item)}},{key:"delete",value:function(e){this.props.onDelete(e,this.props.item)}}]),t}(s.a.Component),p=n(8),f=n(1),g=n.n(f);g.a.init({appId:"XkGYsWhtNpnkocVIOkOFjS6I-gzGzoHsz",appKey:"nrILDs94ESyXa17q1jl5PnJd"});var v=function(e,t,n){new g.a.Query("TodoFolder").find().then(function(e){var n=e.map(function(e){return Object(p.a)({id:e.id},e.attributes)});t.call(null,n)},function(e){n&&n.call(null,e)})},b=function(e,t,n){var a=e.status,s=e.title,i=e.deleted,r=new(g.a.Object.extend("TodoFolder")),o=new g.a.ACL;o.setPublicReadAccess(!1),o.setReadAccess(g.a.User.current(),!0),o.setWriteAccess(g.a.User.current(),!0),r.setACL(o),r.save({title:s,status:a,delete:i}).then(function(e){t(e)},function(e){n(e)})},E=function(e,t,n){g.a.Object.createWithoutData("TodoFolder",e).destroy().then(function(e){t&&t.call(null)},function(e){n&&n.call(null)})},S=function(e,t,n){var a=e.id,s=e.title,i=e.status,r=e.deleted,o=g.a.Object.createWithoutData("TodoFolder",a);void 0!==s&&o.set("title",s),void 0!==i&&o.set("status",i),void 0!==r&&o.set("deleted",r),o.save().then(function(e){t&&t.call(null)},function(){n&&n.call(null)})};g.a;function O(){var e=g.a.User.current();return e?y(e):null}function y(e){return Object(p.a)({id:e.id},e.attributes)}var k=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"forgotPassword"},s.a.createElement("h3",null,"\u91cd\u7f6e\u5bc6\u7801"),s.a.createElement("form",{className:"forgotPassword",onSubmit:this.props.onSubmit},s.a.createElement("div",{className:"inputWrapper"},s.a.createElement("div",{className:"iconWrapper"},s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-youxiang1"})),s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-fs-line"}))),s.a.createElement("input",{type:"text",value:this.props.formData.email,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1",onChange:this.props.onChange.bind(null,"email")})),s.a.createElement("div",{className:"actions"},s.a.createElement("button",{type:"submit"},"\u53d1\u9001\u91cd\u7f6e\u90ae\u7bb1")),s.a.createElement("div",{className:"switcher"},s.a.createElement("a",{className:"toRight",href:"#",onClick:this.props.onSignIn},"\u8fd4\u56de\u767b\u5f55"))))}}]),t}(s.a.Component),w=function(e){return s.a.createElement("form",{className:"signUp",onSubmit:e.onSubmit},s.a.createElement("div",{className:"inputWrapper"},s.a.createElement("div",{className:"iconWrapper"},s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-denglu-copy"})),s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-fs-line"}))),s.a.createElement("input",{type:"text",value:e.formData.username,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u8d26\u53f7",onChange:e.onChange.bind(null,"username")})),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement("div",{className:"iconWrapper"},s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-mima"})),s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-fs-line"}))),s.a.createElement("input",{type:"password",value:e.formData.password,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801",onChange:e.onChange.bind(null,"password")})),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement("div",{className:"iconWrapper"},s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-youxiang1"})),s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-fs-line"}))),s.a.createElement("input",{type:"text",value:e.formData.email,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1",onChange:e.onChange.bind(null,"email")})),s.a.createElement("div",{className:"actions"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c")),s.a.createElement("div",{className:"switcher"},s.a.createElement("a",{className:"toRight",href:"#",onClick:e.onSwitch.bind(null,"signIn")},"\u8fd4\u56de\u6ce8\u518c")))},N=function(e){return s.a.createElement("form",{className:"signIn",onSubmit:e.onSubmit},s.a.createElement("div",{className:"inputWrapper"},s.a.createElement("div",{className:"iconWrapper"},s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-denglu-copy"})),s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-fs-line"}))),s.a.createElement("input",{type:"text",value:e.formData.username,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u8d26\u53f7",onChange:e.onChange.bind(null,"username")})),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement("div",{className:"iconWrapper"},s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-mima"})),s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-fs-line"}))),s.a.createElement("input",{type:"password",value:e.formData.password,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801",onChange:e.onChange.bind(null,"password")})),s.a.createElement("div",{className:"actions"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55")),s.a.createElement("div",{className:"switcher"},s.a.createElement("a",{className:"toLeft",href:"#",onClick:e.onForgetPassword},"\u5fd8\u8bb0\u5bc6\u7801\u4e86\uff1f"),s.a.createElement("span",{className:"toRight"},"\u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f",s.a.createElement("a",{href:"#",onClick:e.onSwitch.bind(null,"signUp")},"\u6ce8\u518c"))))},j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:"signIn"},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"switch",value:function(e){this.setState({selected:e})}},{key:"tt",value:function(e,t,n){console.log(e),console.log(t),console.log(n)}},{key:"render",value:function(){return s.a.createElement("div",{className:"signInOrSignUp"},s.a.createElement("h1",null,"Justdo"),s.a.createElement("div",{className:"panes"},"signUp"===this.state.selected?s.a.createElement(w,{formData:this.props.formData,tt:this.tt.bind(this),onSubmit:this.props.onSignUp,onChange:this.props.onChange,onSwitch:this.switch.bind(this)}):s.a.createElement(N,{formData:this.props.formData,onSubmit:this.props.onSignIn,onChange:this.props.onChange,onForgetPassword:this.props.onForgetPassword,onSwitch:this.switch.bind(this)})))}}]),t}(s.a.Component),C=(n(18),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selectedTab:"signInOrSignUp",formData:{username:"",password:"",email:""}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"changeFormData",value:function(e,t){var n=JSON.parse(JSON.stringify(this.state));n.formData[e]=t.target.value,this.setState(n)}},{key:"signUp",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a,s){var i=new g.a.User;e?t?n?/@/.test(n)?(i.setUsername(e),i.setPassword(t),i.setEmail(n),i.signUp().then(function(e){var t=y(e);a.call(null,t)},function(e){s(e)})):alert("\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef"):alert("\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a"):alert("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"):alert("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a")}(n.username,n.password,n.email,function(e){t.props.onSignUp.call(null,e)},function(e){202===e.code?alert("\u7528\u6237\u540d\u5df2\u7ecf\u88ab\u5360\u7528"):alert(e)})}},{key:"signIn",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){e?t?g.a.User.logIn(e,t).then(function(e){var t=y(e);n.call(null,t)},function(e){a.call(null,e)}):alert("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"):alert("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a")}(n.username,n.password,function(e){t.props.onSignIn.call(null,e)},function(e){console.log(e),211===e.code?alert("\u627e\u4e0d\u5230\u7528\u6237"):210===e.code?alert("\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u4e0d\u5339\u914d"):alert(e)})}},{key:"showForgotPassword",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="forgotPassword",this.setState(e)}},{key:"resetPassword",value:function(e){e.preventDefault();var t,n,a;t=this.state.formData.email,n=function(){alert("\u90ae\u4ef6\u5df2\u53d1\u9001\uff0c\u8bf7\u5728\u90ae\u7bb1\u4e2d\u67e5\u770b\u5e76\u4fee\u6539\u5bc6\u7801")},a=function(e){alert(e)},t?/@/.test(t)?g.a.User.requestPasswordReset(t).then(function(e){n&&n(e)},function(e){return a&&a()}):alert("\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef"):alert("\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a")}},{key:"returnToSignIn",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="signInOrSignUp",this.setState(e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"userDialogWrapper"},s.a.createElement("div",{className:"userDialog"},"signInOrSignUp"===this.state.selectedTab?s.a.createElement(j,{formData:this.state.formData,onChange:this.changeFormData.bind(this),onSignUp:this.signUp.bind(this),onSignIn:this.signIn.bind(this),onForgetPassword:this.showForgotPassword.bind(this)}):s.a.createElement(k,{formData:this.state.formData,onChange:this.changeFormData.bind(this),onSubmit:this.resetPassword.bind(this),onSignIn:this.returnToSignIn.bind(this)})))}}]),t}(s.a.Component)),D=(n(19),n(20),n(21),n(22),n(23),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:O()||{},newTodo:"",todoList:[]},O&&n.getUserTodoLists(),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todoList.filter(function(e){return!e.deleted}).map(function(t){return s.a.createElement("li",{key:t.id},s.a.createElement(h,{item:t,onToggle:e.toggle.bind(e),onDelete:e.delete.bind(e)}))});return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("h1",null,this.state.user.username||"\u6211","\u7684\u5f85\u529e"),this.state.user.id?s.a.createElement("span",{onClick:this.userSignOut.bind(this)},s.a.createElement("svg",{class:"icon","aria-hidden":"true"},s.a.createElement("use",{xlinkHref:"#icon-logout"}))):null),s.a.createElement(m,{content:this.state.newTodo,onChange:this.changeTitle.bind(this),onSubmit:this.addTodo.bind(this)}),s.a.createElement("ul",{className:"todoList"},t),this.state.user.id?null:s.a.createElement(C,{onSignUp:this.onSignUpOrSignIn.bind(this),onSignIn:function(t){e.onSignUpOrSignIn.bind(e).call(null,t),e.getUserTodoLists.bind(e).call(null,t)}}))}},{key:"getUserTodoLists",value:function(e){var t=this;v(e,function(e){var n=JSON.parse(JSON.stringify(t.state));n.todoList=e,t.setState(n)})}},{key:"onSignUpOrSignIn",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"userSignOut",value:function(){g.a.User.logOut();var e=JSON.parse(JSON.stringify(this.state));e.user={},this.setState(e)}},{key:"addTodo",value:function(e){var t=this,n={title:e.target.value,status:"uncomplete",deleted:!1};b(n,function(e){n.id=e.id,t.state.todoList.push(n),t.setState({newTodo:"",todoList:t.state.todoList})},function(e){console.log(e)})}},{key:"toggle",value:function(e,t){var n=this,a=t.status;t.status="completed"===t.status?"uncomplete":"completed",S(t,function(){n.setState(n.state)},function(){t.status=a,n.setState(n.state)})}},{key:"delete",value:function(e,t){var n=this;E(t.id,function(){t.deleted=!0,n.setState(n.state)})}},{key:"changeTitle",value:function(e,t){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}}]),t}(s.a.Component));r.a.render(s.a.createElement(D,null),document.querySelector("#root"));var I=D;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.a80c8d8b.chunk.js.map