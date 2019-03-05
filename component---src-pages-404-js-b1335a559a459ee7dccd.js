(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(159),o=n(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist..."))}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m}),n.d(t,"useStaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(145),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(147),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){r.a.useContext;var t=r.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(52),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,n){e.exports=n.p+"static/JR Logo_Colour-ca483b42c5f8ba04cc1458692016b157.png"},150:function(e,t,n){e.exports=n.p+"static/JR Logo_Black-6347e4d651bcf67431d97df87ec5d2b9.png"},151:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(146),c=(n(34),n(154)),l=n.n(c),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}r()(t,e);var n=t.prototype;return n.handleClick=function(){this.setState({open:!this.state.open})},n.render=function(){return o.a.createElement("div",{className:"mobile-menu"},o.a.createElement(l.a,{isOpen:this.state.open,menuClicked:this.handleClick.bind(this),width:30,height:30,strokeWidth:2,rotate:0,color:"black",borderRadius:0,animationDuration:.5}),this.state.open&&o.a.createElement("div",{className:"mobile-menu-links"},o.a.createElement(s.Link,{to:"/",style:{textDecoration:"none",display:"block"}},"Home"),o.a.createElement(s.Link,{to:"/about/",style:{textDecoration:"none",display:"block"}},"About"),o.a.createElement(s.Link,{to:"/projects/",style:{textDecoration:"none",display:"block"}},"Projects"),o.a.createElement(s.Link,{to:"/contact/",style:{textDecoration:"none",display:"block"}},"Contact")))},t}(o.a.Component);t.a=u},152:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(155),l=n.n(c),u=n(146);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Jishnu Ramesh",description:"Portfolio website for Jishnu Ramesh",author:"@jishnuRamesh"}}}}},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Jishnu Ramesh"}}}}},159:function(e,t,n){"use strict";var a=n(158),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(146),l=n(149),u=n.n(l),d=n(150),p=n.n(d),m=function(e){e.siteTitle;return i.a.createElement("header",{style:{margin:"10px"}},i.a.createElement("div",null,i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/"},i.a.createElement("span",{className:"logo-orange"}," ",i.a.createElement("img",{src:u.a,alt:"logo",height:"60px"})),i.a.createElement("span",{className:"logo-black"}," ",i.a.createElement("img",{src:p.a,alt:"logo",height:"60px"}))))))};m.propTypes={siteTitle:s.a.string},m.defaultProps={siteTitle:""};var h=m,f=n(151),y=(n(162),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"home"},i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"container"},i.a.createElement("main",null,t)),i.a.createElement("div",{className:"mobile-menu"},i.a.createElement(f.a,null))))},data:a})});y.propTypes={children:s.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-pages-404-js-b1335a559a459ee7dccd.js.map