webpackJsonp([0],{190:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),l=n(10),u=n(7),s=n(196),d=n(199),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(){var e,n,o,i;r(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.checkoutCancelledHandler=function(){o.props.history.goBack()},o.checkoutContinuedHandler=function(){o.props.history.replace("/checkout/contact-data")},i=n,a(o,i)}return o(t,e),p(t,[{key:"render",value:function(){var e=c.a.createElement(l.c,{to:"/"});if(this.props.ings){var t=this.props.purchased?c.a.createElement(l.c,{to:"/"}):null;e=c.a.createElement("div",null,t,c.a.createElement(s.a,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),c.a.createElement(l.d,{path:this.props.match.path+"/contact-data",component:d.a}))}return e}}]),t}(i.Component),A=function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}};t.default=Object(u.b)(A)(m)},193:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(194),i=n.n(o),c=function(e){var t=null,n=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(i.a.Invalid),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:i.a.Input},a.a.createElement("label",{className:i.a.Label},e.label),t)};t.a=c},194:function(e,t,n){var r=n(195);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(189)(r,a);r.locals&&(e.exports=r.locals)},195:function(e,t,n){t=e.exports=n(188)(!0),t.push([e.i,".Input__Input__s67N0{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label___n-1m{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__2-aFx{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__2-aFx:focus{outline:none;background-color:#ccc}.Input__Invalid__1sl1p{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["/Users/prakashdas/Desktop/Tutorials/[FreeTutorials.Us] Udemy - react-the-complete-guide-incl-redux/19 Improving our Burger Project/burger-improvements--01-finished/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input {\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.Label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n}\n\n.InputElement {\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.InputElement:focus {\n    outline: none;\n    background-color: #ccc;\n}\n\n.Invalid {\n    border: 1px solid red;\n    background-color: #FDA49A;\n}"],sourceRoot:""}]),t.locals={Input:"Input__Input__s67N0",Label:"Input__Label___n-1m",InputElement:"Input__InputElement__2-aFx",Invalid:"Input__Invalid__1sl1p"}},196:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(60),i=n(57),c=n(197),l=n.n(c),u=function(e){return a.a.createElement("div",{className:l.a.CheckoutSummary},a.a.createElement("h1",null,"We hope it tastes well!"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(o.a,{ingredients:e.ingredients})),a.a.createElement(i.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),a.a.createElement(i.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))};t.a=u},197:function(e,t,n){var r=n(198);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(189)(r,a);r.locals&&(e.exports=r.locals)},198:function(e,t,n){t=e.exports=n(188)(!0),t.push([e.i,".CheckoutSummary__CheckoutSummary__1xBm4{text-align:center;width:80%;margin:auto}","",{version:3,sources:["/Users/prakashdas/Desktop/Tutorials/[FreeTutorials.Us] Udemy - react-the-complete-guide-incl-redux/19 Improving our Burger Project/burger-improvements--01-finished/src/components/Order/CheckoutSummary/CheckoutSummary.css"],names:[],mappings:"AAAA,yCACI,kBAAmB,AACnB,UAAW,AACX,WAAa,CAChB",file:"CheckoutSummary.css",sourcesContent:[".CheckoutSummary {\n    text-align: center;\n    width: 80%;\n    margin: auto;\n}"],sourceRoot:""}]),t.locals={CheckoutSummary:"CheckoutSummary__CheckoutSummary__1xBm4"}},199:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),l=n.n(c),u=n(7),s=n(57),d=n(58),p=n(200),m=n.n(p),A=n(14),f=n(193),h=n(59),b=n(13),C=n(15),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=function(e){function t(){var e,n,i,c;a(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},i.orderHandler=function(e){e.preventDefault();var t={};for(var n in i.state.orderForm)t[n]=i.state.orderForm[n].value;var r={ingredients:i.props.ings,price:i.props.price,orderData:t,userId:i.props.userId};i.props.onOrderBurger(r,i.props.token)},i.inputChangedHandler=function(e,t){var n=Object(C.b)(i.state.orderForm[t],{value:e.target.value,valid:Object(C.a)(e.target.value,i.state.orderForm[t].validation),touched:!0}),a=Object(C.b)(i.state.orderForm,r({},t,n)),o=!0;for(var c in a)o=a[c].valid&&o;i.setState({orderForm:a,formIsValid:o})},c=n,o(i,c)}return i(t,e),g(t,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=l.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return l.a.createElement(f.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}),l.a.createElement(s.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(r=l.a.createElement(d.a,null)),l.a.createElement("div",{className:m.a.ContactData},l.a.createElement("h4",null,"Enter your Contact Data"),r)}}]),t}(c.Component),y=function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},x=function(e){return{onOrderBurger:function(t,n){return e(b.g(t,n))}}};t.a=Object(u.b)(y,x)(Object(h.a)(v,A.a))},200:function(e,t,n){var r=n(201);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(189)(r,a);r.locals&&(e.exports=r.locals)},201:function(e,t,n){t=e.exports=n(188)(!0),t.push([e.i,".ContactData__ContactData__1J81r{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.ContactData__ContactData__1J81r{width:500px}}","",{version:3,sources:["/Users/prakashdas/Desktop/Tutorials/[FreeTutorials.Us] Udemy - react-the-complete-guide-incl-redux/19 Improving our Burger Project/burger-improvements--01-finished/src/containers/Checkout/ContactData/ContactData.css"],names:[],mappings:"AAAA,iCACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,yBACI,iCACI,WAAa,CAChB,CACJ",file:"ContactData.css",sourcesContent:[".ContactData {\n    margin: 20px auto;\n    width: 80%;\n    text-align: center;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    border: 1px solid #eee;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n@media (min-width: 600px) {\n    .ContactData {\n        width: 500px;\n    }\n}"],sourceRoot:""}]),t.locals={ContactData:"ContactData__ContactData__1J81r"}}});
//# sourceMappingURL=0.f302e435.chunk.js.map