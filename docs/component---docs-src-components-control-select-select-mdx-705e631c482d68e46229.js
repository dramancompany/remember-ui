(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"4bOk":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var a=t("mXGw"),l=t("/FXl"),o=t("TjRS"),r=t("ZFoC"),s=t("B0k3");t("aD51");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docsSrc/components/Control/Select/Select.mdx"}});var u={_frontmatter:i},b=o.a;function p(e){var n,t=e.components,p=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(l.b)(b,c({},u,p,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"select"},"Select"),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)(r.d,{of:s.a,mdxType:"Props"}),Object(l.b)("h2",{id:"basic-usage"},"Basic usage"),Object(l.b)(r.c,{__position:1,__code:"() => {\n  const options = [\n    {\n      id: 1,\n      label: '인재검색 50',\n      value: '50',\n    },\n    {\n      id: 2,\n      label: '인재검색 100',\n      value: '100',\n    },\n    {\n      id: 3,\n      label: '인재검색 200',\n      value: '200',\n    },\n    {\n      id: 4,\n      label: '인재검색 500',\n      value: '500',\n    },\n  ]\n  const [current, setCurrent] = React.useState(options[0].id)\n  return (\n    <>\n      <Select\n        className=\"pass-type\"\n        label=\"상품 종류\"\n        value={current}\n        onChange={setCurrent}\n        options={options}\n      />\n      <br />\n      <Select\n        className=\"pass-type2\"\n        label=\"상품 종류1\"\n        value={current}\n        onChange={setCurrent}\n        options={options}\n        required\n        isFixedSelect\n      />\n      <br />\n      <Select\n        className=\"pass-type2\"\n        label=\"상품 종류2\"\n        value={current}\n        onChange={setCurrent}\n        options={options}\n        required\n        maxHeight={100}\n      />\n    </>\n  )\n}",__scope:(n={props:p,DefaultLayout:o.a,Playground:r.c,Props:r.d,Select:s.a},n.DefaultLayout=o.a,n._frontmatter=i,n),mdxType:"Playground"},(function(){var e=[{id:1,label:"인재검색 50",value:"50"},{id:2,label:"인재검색 100",value:"100"},{id:3,label:"인재검색 200",value:"200"},{id:4,label:"인재검색 500",value:"500"}],n=a.useState(e[0].id),t=n[0],o=n[1];return Object(l.b)(a.Fragment,null,Object(l.b)(s.a,{className:"pass-type",label:"상품 종류",value:t,onChange:o,options:e,mdxType:"Select"}),Object(l.b)("br",null),Object(l.b)(s.a,{className:"pass-type2",label:"상품 종류1",value:t,onChange:o,options:e,required:!0,isFixedSelect:!0,mdxType:"Select"}),Object(l.b)("br",null),Object(l.b)(s.a,{className:"pass-type2",label:"상품 종류2",value:t,onChange:o,options:e,required:!0,maxHeight:100,mdxType:"Select"}))})))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docsSrc/components/Control/Select/Select.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-control-select-select-mdx-705e631c482d68e46229.js.map