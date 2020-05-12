(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JBj1:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return m}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var a=t("mXGw"),r=t("/FXl"),o=t("TjRS"),u=t("ZFoC"),l=t("Ix+t"),i=t("Hp/r");t("aD51");function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/src/components/Input/DoubleInput/DoubleInput.mdx"}});var s={_frontmatter:c},b=o.a;function m(e){var n,t=e.components,m=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(r.b)(b,p({},s,m,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"doubleinput"},"DoubleInput"),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(u.d,{of:l.a,mdxType:"Props"}),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)(u.c,{__position:1,__code:'() => {\n  const [month, setMonth] = React.useState(\'\')\n  const [year, setYear] = React.useState(\'\')\n  return (\n    <Container>\n      <DoubleInput\n        label1="유효 기간"\n        value1={month}\n        value2={year}\n        name1="expiryDateMonth"\n        name2="expiryDateYear"\n        placeholder1="MM"\n        placeholder2="YY"\n        onChange1={e => {\n          setMonth(e.target.value)\n        }}\n        onChange2={e => {\n          setYear(e.target.value)\n        }}\n        validate={(_expiryDateMonth, _expiryDateYear) => {\n          if (_expiryDateMonth.length === 2 && _expiryDateYear.length === 2) {\n            return \'\'\n          }\n          return \'유효 기간은 2자리 숫자로 입력하세요\'\n        }}\n        maxLength={2}\n        onlyNumber\n      />\n    </Container>\n  )\n}',__scope:(n={props:m,DefaultLayout:o.a,Playground:u.c,Props:u.d,DoubleInput:l.a,Container:i.a},n.DefaultLayout=o.a,n._frontmatter=c,n),mdxType:"Playground"},(function(){var e=a.useState(""),n=e[0],t=e[1],o=a.useState(""),u=o[0],p=o[1];return Object(r.b)(i.a,{mdxType:"Container"},Object(r.b)(l.a,{label1:"유효 기간",value1:n,value2:u,name1:"expiryDateMonth",name2:"expiryDateYear",placeholder1:"MM",placeholder2:"YY",onChange1:function(e){t(e.target.value)},onChange2:function(e){p(e.target.value)},validate:function(e,n){return 2===e.length&&2===n.length?"":"유효 기간은 2자리 숫자로 입력하세요"},maxLength:2,onlyNumber:!0,mdxType:"DoubleInput"}))})))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/src/components/Input/DoubleInput/DoubleInput.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-input-double-input-double-input-mdx-bf34043e74e0413d296f.js.map