(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4bOk":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return u}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("mXGw"),r=n("/FXl"),l=n("TjRS"),o=n("ZFoC"),s=n("B0k3");n("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docsSrc/components/Control/Select/Select.mdx"}});var i={_frontmatter:p},b=l.a;function u(e){var t,n=e.components,u=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(r.b)(b,c({},i,u,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"select"},"Select"),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(o.d,{of:s.a,mdxType:"Props"}),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)(o.c,{__position:1,__code:'() => {\n  const options = [\n    {\n      id: 1,\n      label: \'인재검색 50\',\n      value: \'50\',\n    },\n    {\n      id: 2,\n      label: \'인재검색 100\',\n      value: \'100\',\n    },\n    {\n      id: 3,\n      label: \'인재검색 200\',\n      value: \'200\',\n    },\n    {\n      id: 4,\n      label: \'인재검색 500\',\n      value: \'500\',\n    },\n    {\n      id: 5,\n      label:\n        \'인재검색 500 인재검색 500 text overflow test example 인재검색 500 인재검색 500 text overflow test example 인재검색 500 인재검색 500 text overflow test example\',\n      value:\n        \'인재검색 500 인재검색 500 text overflow test example 인재검색 500 인재검색 500 text overflow test example 인재검색 500 인재검색 500 text overflow test example\',\n    },\n  ]\n  const [current, setCurrent] = React.useState(options[0].id)\n  return (\n    <>\n      <Select\n        className="pass-type"\n        label="상품 종류"\n        value={current}\n        onChange={setCurrent}\n        options={options}\n      />\n      <br />\n      <Select\n        className="pass-type2"\n        label="상품 종류1"\n        value={current}\n        onChange={setCurrent}\n        options={options}\n        required\n        isFixedSelect\n      />\n      <br />\n      <Select\n        className="pass-type2"\n        label="상품 종류2"\n        value={current}\n        onChange={setCurrent}\n        options={options}\n        required\n        maxHeight={100}\n      />\n      <br />\n      <Select\n        className="pass-type3"\n        label="상품 종류3"\n        value={current}\n        onChange={setCurrent}\n        options={options}\n        maxHeight={100}\n        error\n      />\n      <br />\n      <Select\n        className="pass-type4"\n        label="상품 종류4"\n        value={current}\n        onChange={setCurrent}\n        options={options}\n        maxHeight={100}\n        errorMessage="error meesage만 설정 할 수 있습니다."\n      />\n      <br />\n      <Select\n        className="pass-type5"\n        label="상품 종류5"\n        value={current}\n        onChange={setCurrent}\n        options={options}\n        maxHeight={100}\n        error\n        errorMessage="border와 error message 둘 다 설정 할 수 있습니다."\n      />\n    </>\n  )\n}',__scope:(t={props:u,DefaultLayout:l.a,Playground:o.c,Props:o.d,Select:s.a},t.DefaultLayout=l.a,t._frontmatter=p,t),mdxType:"Playground"},(function(){var e=[{id:1,label:"인재검색 50",value:"50"},{id:2,label:"인재검색 100",value:"100"},{id:3,label:"인재검색 200",value:"200"},{id:4,label:"인재검색 500",value:"500"},{id:5,label:"인재검색 500 인재검색 500 text overflow test example 인재검색 500 인재검색 500 text overflow test example 인재검색 500 인재검색 500 text overflow test example",value:"인재검색 500 인재검색 500 text overflow test example 인재검색 500 인재검색 500 text overflow test example 인재검색 500 인재검색 500 text overflow test example"}],t=a.useState(e[0].id),n=t[0],l=t[1];return Object(r.b)(a.Fragment,null,Object(r.b)(s.a,{className:"pass-type",label:"상품 종류",value:n,onChange:l,options:e,mdxType:"Select"}),Object(r.b)("br",null),Object(r.b)(s.a,{className:"pass-type2",label:"상품 종류1",value:n,onChange:l,options:e,required:!0,isFixedSelect:!0,mdxType:"Select"}),Object(r.b)("br",null),Object(r.b)(s.a,{className:"pass-type2",label:"상품 종류2",value:n,onChange:l,options:e,required:!0,maxHeight:100,mdxType:"Select"}),Object(r.b)("br",null),Object(r.b)(s.a,{className:"pass-type3",label:"상품 종류3",value:n,onChange:l,options:e,maxHeight:100,error:!0,mdxType:"Select"}),Object(r.b)("br",null),Object(r.b)(s.a,{className:"pass-type4",label:"상품 종류4",value:n,onChange:l,options:e,maxHeight:100,errorMessage:"error meesage만 설정 할 수 있습니다.",mdxType:"Select"}),Object(r.b)("br",null),Object(r.b)(s.a,{className:"pass-type5",label:"상품 종류5",value:n,onChange:l,options:e,maxHeight:100,error:!0,errorMessage:"border와 error message 둘 다 설정 할 수 있습니다.",mdxType:"Select"}))})))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docsSrc/components/Control/Select/Select.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-control-select-select-mdx-e0127ffa72fb00aad204.js.map