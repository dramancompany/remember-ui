(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{jkI4:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return l})),t.d(e,"default",(function(){return p}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var o=t("mXGw"),i=t("/FXl"),a=t("TjRS"),r=t("ZFoC"),d=t("TNKe"),c=t("6vQ5");t("aD51");function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docsSrc/components/Control/Radio/Radio.mdx"}});var b={_frontmatter:l},u=a.a;function p(n){var e,t=n.components,p=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,["components"]);return Object(i.b)(u,s({},b,p,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"radio"},"Radio"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)(r.d,{of:d.a,mdxType:"Props"}),Object(i.b)("h2",{id:"basic-usage"},"Basic usage"),Object(i.b)(r.c,{__position:1,__code:'() => {\n  const [radioId, setRadioId] = React.useState(1)\n  const setRadio = id => setRadioId(id)\n  return (\n    <>\n      <Container direction="column">\n        <div>Radio on/off</div>\n        <Container direction="row">\n          <Radio isChecked />\n          <Radio />\n        </Container>\n      </Container>\n\n      <Container direction="column">\n        <div>Radio onClick Event Bind</div>\n        <div style={{ display: \'flex\', alignItems: \'center\' }}>\n          <Radio isChecked={radioId === 1} onClick={() => setRadio(1)} />\n          <span>옵션1</span>\n          <Radio isChecked={radioId === 2} onClick={() => setRadio(2)} />\n          <span>옵션2</span>\n        </div>\n      </Container>\n    </>\n  )\n}',__scope:(e={props:p,DefaultLayout:a.a,Playground:r.c,Props:r.d,Radio:d.a,Container:c.a},e.DefaultLayout=a.a,e._frontmatter=l,e),mdxType:"Playground"},(function(){var n=o.useState(1),e=n[0],t=n[1],a=function(n){return t(n)};return Object(i.b)(o.Fragment,null,Object(i.b)(c.a,{direction:"column",mdxType:"Container"},Object(i.b)("div",null,"Radio on/off"),Object(i.b)(c.a,{direction:"row",mdxType:"Container"},Object(i.b)(d.a,{isChecked:!0,mdxType:"Radio"}),Object(i.b)(d.a,{mdxType:"Radio"}))),Object(i.b)(c.a,{direction:"column",mdxType:"Container"},Object(i.b)("div",null,"Radio onClick Event Bind"),Object(i.b)("div",{style:{display:"flex",alignItems:"center"}},Object(i.b)(d.a,{isChecked:1===e,onClick:function(){return a(1)},mdxType:"Radio"}),Object(i.b)("span",null,"옵션1"),Object(i.b)(d.a,{isChecked:2===e,onClick:function(){return a(2)},mdxType:"Radio"}),Object(i.b)("span",null,"옵션2"))))})))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docsSrc/components/Control/Radio/Radio.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-control-radio-radio-mdx-19fead645034fff065b0.js.map