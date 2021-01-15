(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"0foT":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return p})),t.d(n,"default",(function(){return d}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var a=t("mXGw"),o=t("/FXl"),r=t("TjRS"),u=t("ZFoC"),s=t("MVnR"),c=t("lKGG"),i=t("izla");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docsSrc/components/Input/BaseInput/BaseInput.mdx"}});var m={_frontmatter:p},b=r.a;function d(e){var n,t=e.components,d=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(o.b)(b,l({},m,d,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"baseinput"},"BaseInput"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)(u.d,{of:s.a,mdxType:"Props"}),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)(u.c,{__position:1,__code:'() => {\n  const [buyerName, setBuyerName] = React.useState(\'\')\n  const [phoneNo, setPhoneNo] = React.useState()\n  return (\n    <>\n      <DoczContainer direction="row">\n        <BaseInput type="text" name="test1" />\n        <BaseInput name="test2" readOnly />\n        <BaseInput name="test2" disabled />\n      </DoczContainer>\n      <br />\n      <DoczContainer direction="row">\n        <BaseInput\n          name="test2"\n          label="제목"\n          placeholder="제목을 입력하세요 (최대 50자)"\n          maxLength={50}\n          marginBottom={10}\n        />\n        <BaseInput\n          name="buyerName"\n          label="구매자"\n          placeholder="구매자명을 입력하세요"\n          value={buyerName}\n          onChange={e => setBuyerName(e.target.value)}\n          maxLength={150}\n          marginBottom={10}\n          autoFocus\n          required\n          useError\n          validate={name => {\n            if (!name) return \'구매자명을 입력하세요\'\n          }}\n        />\n        <BaseInput\n          name="phoneNo"\n          label="핸드폰"\n          placeholder="핸드폰 번호를 입력하세요"\n          value={phoneNo}\n          onChange={e => setPhoneNo(e.target.value)}\n          maxLength={150}\n          marginBottom={10}\n          required\n          useError\n          onlyNumber\n          validate={phone => {\n            if (!phone) return \'핸드폰 번호를 입력하세요\'\n          }}\n        />\n        <BaseInput\n          name="email"\n          label="이메일"\n          placeholder="이메일"\n          footer={\n            <div style={{ display: \'flex\', alignItems: \'center\' }}>\n              <Checkbox state="on" />\n              <span className="notify-text">알림메일을 수신합니다</span>\n            </div>\n          }\n        />\n      </DoczContainer>\n    </>\n  )\n}',__scope:(n={props:d,DefaultLayout:r.a,Playground:u.c,Props:u.d,BaseInput:s.a,Checkbox:c.a,DoczContainer:i.a},n.DefaultLayout=r.a,n._frontmatter=p,n),mdxType:"Playground"},(function(){var e=a.useState(""),n=e[0],t=e[1],r=a.useState(),u=r[0],l=r[1];return Object(o.b)(a.Fragment,null,Object(o.b)(i.a,{direction:"row",mdxType:"DoczContainer"},Object(o.b)(s.a,{type:"text",name:"test1",mdxType:"BaseInput"}),Object(o.b)(s.a,{name:"test2",readOnly:!0,mdxType:"BaseInput"}),Object(o.b)(s.a,{name:"test2",disabled:!0,mdxType:"BaseInput"})),Object(o.b)("br",null),Object(o.b)(i.a,{direction:"row",mdxType:"DoczContainer"},Object(o.b)(s.a,{name:"test2",label:"제목",placeholder:"제목을 입력하세요 (최대 50자)",maxLength:50,marginBottom:10,mdxType:"BaseInput"}),Object(o.b)(s.a,{name:"buyerName",label:"구매자",placeholder:"구매자명을 입력하세요",value:n,onChange:function(e){return t(e.target.value)},maxLength:150,marginBottom:10,autoFocus:!0,required:!0,useError:!0,validate:function(e){if(!e)return"구매자명을 입력하세요"},mdxType:"BaseInput"}),Object(o.b)(s.a,{name:"phoneNo",label:"핸드폰",placeholder:"핸드폰 번호를 입력하세요",value:u,onChange:function(e){return l(e.target.value)},maxLength:150,marginBottom:10,required:!0,useError:!0,onlyNumber:!0,validate:function(e){if(!e)return"핸드폰 번호를 입력하세요"},mdxType:"BaseInput"}),Object(o.b)(s.a,{name:"email",label:"이메일",placeholder:"이메일",footer:Object(o.b)("div",{style:{display:"flex",alignItems:"center"}},Object(o.b)(c.a,{state:"on",mdxType:"Checkbox"}),Object(o.b)("span",{className:"notify-text"},"알림메일을 수신합니다")),mdxType:"BaseInput"})))})))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docsSrc/components/Input/BaseInput/BaseInput.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-input-base-input-base-input-mdx-77b230073590adaac09f.js.map