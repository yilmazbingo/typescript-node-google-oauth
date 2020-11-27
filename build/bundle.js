(()=>{"use strict";var e={692:(e,t,n)=>{const r=require("mongoose");var o=n.n(r);o().connect(process.env.DATABASE_URL,{useUnifiedTopology:!0,useNewUrlParser:!0}).catch((function(e){throw new Error(e.message)})).then((function(){console.log("connected to db")}));const i=require("passport-google-oauth20");var u=n.n(i);const c=require("passport");var a=n.n(c),s=new(0,o().Schema)({googleId:{type:String,required:!0}}),f=o().model("User",s);function l(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){l(i,r,o,u,c,"next",e)}function c(e){l(i,r,o,u,c,"throw",e)}u(void 0)}))}}a().serializeUser((function(e,t){t(null,e.id)})),a().deserializeUser(function(){var e=p(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.findById(t);case 2:(r=e.sent)&&n(null,r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),a().use(new(u().Strategy)({clientID:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET,callbackURL:"/auth/google/callback"},function(){var e=p(regeneratorRuntime.mark((function e(t,n,r,o){var i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.findOne({googleId:r.id});case 2:if(!(i=e.sent)){e.next=5;break}return e.abrupt("return",o(void 0,i));case 5:return e.next=7,new f({googleId:r.id}).save();case 7:u=e.sent,o(void 0,u);case 9:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}()));const y=require("express");var b=n.n(y);const d=require("cookie-session");var v=n.n(d);const m=require("body-parser");var h=n.n(m);const g=require("cors");var w=n.n(g);const O=require("joi");var R=n.n(O),x=new(o().Schema)({title:{type:String,minlength:3,maxlength:30,required:!0,trim:!0},numberInStock:{type:Number,min:0,max:255,required:!0},image:String});function S(e){return R().object({title:R().string().min(3).max(255).required(),numberInStock:R().number().min(0).max(255).required(),image:R().string()}).validate(e)}var _=o().model("Book",x);const j=require("multer");var k=n.n(j);const P=require("crypto");function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){var t="function"==typeof Map?new Map:void 0;return(q=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return C(e,arguments,L(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),A(r,e)})(e)}function C(e,t,n){return(C=D()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&A(o,n.prototype),o}).apply(null,arguments)}function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(o,e);var t,n,r=(t=o,n=D(),function(){var e,r=L(t);if(n){var o=L(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return I(this,e)});function o(e){var t,n,i,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),u=void 0,(i="statusCode")in(n=T(t=r.call(this,e)))?Object.defineProperty(n,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[i]=u,Object.setPrototypeOf(T(t),o.prototype),t}return o}(q(Error));function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).message=e,400,(r="statusCode")in(n=M(t))?Object.defineProperty(n,r,{value:400,enumerable:!0,configurable:!0,writable:!0}):n[r]=400,Object.setPrototypeOf(M(t),u.prototype),t}return t=u,(n=[{key:"serializeErrors",value:function(){return[{message:this.message}]}}])&&G(t.prototype,n),u}(U);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?Q(e):t}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),W(Q(e=i.call(this,"Error connecting to databaase")),"statusCode",500),W(Q(e),"reason","Error connecting to database"),Object.setPrototypeOf(Q(e),u.prototype),e}return t=u,(n=[{key:"serializeErrors",value:function(){return[{message:this.reason}]}}])&&$(t.prototype,n),u}(U);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?re(e):t}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=oe(r);if(o){var n=oe(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ne(this,e)});function u(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,"Invalid request parameters")).message=e,400,(r="statusCode")in(n=re(t))?Object.defineProperty(n,r,{value:400,enumerable:!0,configurable:!0,writable:!0}):n[r]=400,Object.setPrototypeOf(re(t),u.prototype),t}return t=u,(n=[{key:"serializeErrors",value:function(){return[{message:this.message}]}}])&&ee(t.prototype,n),u}(U);function ue(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}var ce=function(e){return function(){var t,n=(t=regeneratorRuntime.mark((function t(n,r,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(n,r);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),o(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(e){ue(i,r,o,u,c,"next",e)}function c(e){ue(i,r,o,u,c,"throw",e)}u(void 0)}))});return function(e,t,r){return n.apply(this,arguments)}}()};function ae(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function se(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){ae(i,r,o,u,c,"next",e)}function c(e){ae(i,r,o,u,c,"throw",e)}u(void 0)}))}}var fe=k().diskStorage({destination:function(e){function t(t,n,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,n){n(null,"images")})),filename:function(e,t,n){n(null,(0,P.randomBytes)(4).toString("hex")+"-"+t.originalname)}}),le=k()({fileFilter:function(e,t,n){if(!t.originalname.match(/\.(jpg|jpeg|png|gif)$/))return n(null,!1);n(null,!0)},storage:fe,limits:{fileSize:5242880}});const pe=require("winston-mongodb");var ye=n.n(pe);const be=require("winston");var de=n.n(be),ve=de().createLogger({level:"info",format:de().format.json(),defaultMeta:{service:"user-service"},transports:[new(de().transports.File)({filename:"error.log",level:"error"}),new(ye().MongoDB)({db:process.env.DATABASE_URL})]}),me=b()();me.use(h().json()),me.use(h().urlencoded({extended:!0})),me.use(w()()),me.use("/images",b().static("images")),me.use(v()({maxAge:2592e6,keys:[process.env.COOKIE_KEY]})),me.use(a().initialize()),me.use(a().session()),function(e){e.get("/auth/google",a().authenticate("google",{scope:["profile","email"]})),e.get("/auth/google/callback",a().authenticate("google"),(function(e,t){t.redirect("/")})),e.get("/auth/current_user",(function(e,t){t.send(e.user)})),e.get("/auth/logout",(function(e,t){e.logout(),t.json({user:e.user})}))}(me),function(e){e.get("/api/books",ce(function(){var e=se(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.find().sort("");case 2:if(o=e.sent){e.next=5;break}throw new X;case 5:n.send(o);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),e.get("/api/books/:id",ce(function(){var e=se(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.findById(t.params.id);case 2:if(!(r=e.sent)){e.next=5;break}throw new K("Invalid Id");case 5:n.send(r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())),e.post("/api/books",le.single("bookImage"),ce(function(){var e=se(regeneratorRuntime.mark((function e(t,n){var r,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t.file),console.log("req.body",t.body),r=S(t.body),!(o=r.error)){e.next=5;break}throw new ie(o.details[0].message);case 5:return i=new _({title:t.body.title,numberInStock:t.body.numberInStock,image:t.file}),e.next=8,i.save();case 8:i=e.sent,n.send(i);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())),e.put("/api/books/:id",ce(function(){var e=se(regeneratorRuntime.mark((function e(t,n){var r,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=S(t.body),!(o=r.error)){e.next=3;break}throw new ie(o.details[0].message);case 3:return e.next=5,_.findByIdAndUpdate(t.params.id,{title:t.body.title,numberInStock:t.body.numberInStock,dailyRentalRate:t.body.dailyRentalRate},{new:!0});case 5:if(i=e.sent){e.next=8;break}throw new X;case 8:return e.next=10,i.save();case 10:i=e.sent,n.send(i);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())),e.delete("/api/books/:id",ce(function(){var e=se(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.params.id){e.next=7;break}return e.next=3,_.findOneAndDelete({_id:t.params.id});case 3:if(r=e.sent){e.next=6;break}return e.abrupt("return",n.status(400).send("not found"));case 6:n.send(r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))}(me),me.get("/",(function(e,t){t.send("\n    <div>\n      <div>\n".concat(' <div>\n    <h1>This api set up to handle ssr</h1>\n    <a href="/auth/google">the Authentication Route</a>. You could\n    <a href="/api/books">Book Route</a>. You could\n\n    also look at details about yourself at <a href="/current_user">the Current User route</a>\n  </div>',"\n      </div>\n    </div>\n  "))})),me.use((function(e,t,n,r){ve.error(e),n.json({status:"Error",statusCode:e.statusCode,message:e.message})})),me.listen(process.env.PORT,(function(){console.log("listenint at ".concat(process.env.PORT," "))})),process.env.GOOGLE_CLIENT_ID&&process.env.GOOGLE_CLIENT_SECRET&&process.env.DATABASE_URL&&process.env.COOKIE_KEY||(console.log("check your env variables"),process.exit(1))},835:e=>{e.exports=require("regenerator-runtime/runtime")}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(835),n(692)})();