(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{BhTZ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var o=n("mXGw"),r=n("/FXl"),a=n("TjRS"),i=n("ZFoC"),u=n("0q9g"),c=n("L3ex"),l=n("6vQ5");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docsSrc/components/Button/MoreButton/MoreButton.mdx"}});var d={_frontmatter:b},B=a.a;function p(e){var t,n=e.components,p=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(r.b)(B,s({},d,p,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"morebutton"},"MoreButton"),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(i.d,{of:u.a,mdxType:"Props"}),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)(i.c,{__position:1,__code:'() => {\n  const [isShow, setIsShow] = React.useState(false)\n  const toggle = () => setIsShow(!isShow)\n  return (\n    <>\n      <Container direction="column">\n        <div>MoreButton Show/Hide</div>\n        <Container direction="row">\n          <BaseButton color="black">\n            Show\n            <MoreButton />\n          </BaseButton>\n          <BaseButton color="black">\n            Hide\n            <MoreButton value />\n          </BaseButton>\n          <BaseButton fill>\n            Show\n            <MoreButton size="large" />\n          </BaseButton>\n          <BaseButton fill>\n            Hide\n            <MoreButton value size="large" />\n          </BaseButton>\n        </Container>\n      </Container>\n\n      <Container direction="column">\n        <div>MoreButton onClick Event Bind</div>\n        <Container direction="row">\n          <BaseButton fill onClick={toggle}>\n            {isShow ? \'Hide\' : \'Show\'}\n            <MoreButton size="large" value={isShow} />\n          </BaseButton>\n        </Container>\n      </Container>\n    </>\n  )\n}',__scope:(t={props:p,DefaultLayout:a.a,Playground:i.c,Props:i.d,MoreButton:u.a,BaseButton:c.a,Container:l.a},t.DefaultLayout=a.a,t._frontmatter=b,t),mdxType:"Playground"},(function(){var e=o.useState(!1),t=e[0],n=e[1];return Object(r.b)(o.Fragment,null,Object(r.b)(l.a,{direction:"column",mdxType:"Container"},Object(r.b)("div",null,"MoreButton Show/Hide"),Object(r.b)(l.a,{direction:"row",mdxType:"Container"},Object(r.b)(c.a,{color:"black",mdxType:"BaseButton"},"Show",Object(r.b)(u.a,{mdxType:"MoreButton"})),Object(r.b)(c.a,{color:"black",mdxType:"BaseButton"},"Hide",Object(r.b)(u.a,{value:!0,mdxType:"MoreButton"})),Object(r.b)(c.a,{fill:!0,mdxType:"BaseButton"},"Show",Object(r.b)(u.a,{size:"large",mdxType:"MoreButton"})),Object(r.b)(c.a,{fill:!0,mdxType:"BaseButton"},"Hide",Object(r.b)(u.a,{value:!0,size:"large",mdxType:"MoreButton"})))),Object(r.b)(l.a,{direction:"column",mdxType:"Container"},Object(r.b)("div",null,"MoreButton onClick Event Bind"),Object(r.b)(l.a,{direction:"row",mdxType:"Container"},Object(r.b)(c.a,{fill:!0,onClick:function(){return n(!t)},mdxType:"BaseButton"},t?"Hide":"Show",Object(r.b)(u.a,{size:"large",value:t,mdxType:"MoreButton"})))))})))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docsSrc/components/Button/MoreButton/MoreButton.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-button-more-button-more-button-mdx-1c37fb392413404a4db0.js.map