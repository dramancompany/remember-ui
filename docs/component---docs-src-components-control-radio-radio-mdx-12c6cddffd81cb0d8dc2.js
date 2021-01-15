(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{jkI4:function(n,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return b})),o.d(e,"default",(function(){return l}));o("5hJT"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("PJhk");var t=o("mXGw"),i=o("/FXl"),a=o("TjRS"),r=o("ZFoC"),c=o("TNKe"),d=o("izla");o("aD51");function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docsSrc/components/Control/Radio/Radio.mdx"}});var u={_frontmatter:b},p=a.a;function l(n){var e,o=n.components,l=function(n,e){if(null==n)return{};var o,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(i[o]=n[o]);return i}(n,["components"]);return Object(i.b)(p,s({},u,l,{components:o,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"radio"},"Radio"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)(r.d,{of:c.a,mdxType:"Props"}),Object(i.b)("h2",{id:"basic-usage"},"Basic usage"),Object(i.b)(r.c,{__position:1,__code:'() => {\n  const [radioId, setRadioId] = React.useState(1)\n  const setRadio = id => setRadioId(id)\n  return (\n    <>\n      <DoczContainer direction="column">\n        <DoczContainer direction="row">Radio on/off( Static )</DoczContainer>\n        <DoczContainer direction="row">\n          <Radio isChecked />\n          <Radio />\n        </DoczContainer>\n      </DoczContainer>\n\n      <DoczContainer direction="column">\n        <DoczContainer direction="row">\n          Radio onClick Event Bind( Dynamic )\n        </DoczContainer>\n        <DoczContainer direction="row">\n          <Radio isChecked={radioId === 1} onClick={() => setRadio(1)} />\n          <span>옵션1</span>\n          <Radio isChecked={radioId === 2} onClick={() => setRadio(2)} />\n          <span>옵션2</span>\n        </DoczContainer>\n      </DoczContainer>\n    </>\n  )\n}',__scope:(e={props:l,DefaultLayout:a.a,Playground:r.c,Props:r.d,Radio:c.a,DoczContainer:d.a},e.DefaultLayout=a.a,e._frontmatter=b,e),mdxType:"Playground"},(function(){var n=t.useState(1),e=n[0],o=n[1],a=function(n){return o(n)};return Object(i.b)(t.Fragment,null,Object(i.b)(d.a,{direction:"column",mdxType:"DoczContainer"},Object(i.b)(d.a,{direction:"row",mdxType:"DoczContainer"},"Radio on/off( Static )"),Object(i.b)(d.a,{direction:"row",mdxType:"DoczContainer"},Object(i.b)(c.a,{isChecked:!0,mdxType:"Radio"}),Object(i.b)(c.a,{mdxType:"Radio"}))),Object(i.b)(d.a,{direction:"column",mdxType:"DoczContainer"},Object(i.b)(d.a,{direction:"row",mdxType:"DoczContainer"},"Radio onClick Event Bind( Dynamic )"),Object(i.b)(d.a,{direction:"row",mdxType:"DoczContainer"},Object(i.b)(c.a,{isChecked:1===e,onClick:function(){return a(1)},mdxType:"Radio"}),Object(i.b)("span",null,"옵션1"),Object(i.b)(c.a,{isChecked:2===e,onClick:function(){return a(2)},mdxType:"Radio"}),Object(i.b)("span",null,"옵션2"))))})))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docsSrc/components/Control/Radio/Radio.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-control-radio-radio-mdx-12c6cddffd81cb0d8dc2.js.map