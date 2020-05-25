(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1yly":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return m}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var i=t("mXGw"),o=t("/FXl"),s=t("TjRS"),a=t("ZFoC"),d=t("PBFu"),r=t("6vQ5"),c=t("L3ex"),l=t("TNKe");t("aD51");function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docsSrc/components/Modal/DesignedModal/DesignedModal.mdx"}});var p={_frontmatter:b},f=s.a;function m(e){var n,t=e.components,m=function(e,n){if(null==e)return{};var t,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(o.b)(f,u({},p,m,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"designedmodal"},"DesignedModal"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)(a.d,{of:d.a,mdxType:"Props"}),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)(a.c,{__position:1,__code:"() => {\n  const [isOpen1, setIsOpen1] = React.useState(false)\n  const [isProcessing, setIsProcessing] = React.useState(false)\n  const [radioId, setRadioId] = React.useState(1)\n  const setRadio = id => setRadioId(id)\n  const handleSubmit = () => {\n    alert('보냈습니다')\n  }\n  return (\n    <Container>\n      <BaseButton\n        fill\n        width={150}\n        size={'large'}\n        onClick={() => setIsOpen1(true)}\n      >\n        Open Designed Modal\n      </BaseButton>\n      <DesignedModal\n        isOpen={isOpen1}\n        title={`구매`}\n        subTitle={'이용권 구매하기'}\n        submitText=\"확인\"\n        closeText=\"취소\"\n        submit={() => handleSubmit()}\n        onClose={() => setIsOpen1(false)}\n        close={() => setIsOpen1(false)}\n        submitButtonDisabled={isProcessing}\n        isLoading={isProcessing}\n      >\n        <div\n          style={{\n            display: 'flex',\n            justifyContent: 'center',\n            flexDirection: 'column',\n            alignItems: 'center',\n          }}\n        >\n          <div>Radio onClick Event Bind</div>\n          <div>\n            <Radio isChecked={radioId === 1} onClick={() => setRadio(1)} />\n            <span>옵션1</span>\n            <Radio isChecked={radioId === 2} onClick={() => setRadio(2)} />\n            <span>옵션2</span>\n          </div>\n          <br />\n        </div>\n      </DesignedModal>\n    </Container>\n  )\n}",__scope:(n={props:m,DefaultLayout:s.a,Playground:a.c,Props:a.d,DesignedModal:d.a,Container:r.a,BaseButton:c.a,Radio:l.a},n.DefaultLayout=s.a,n._frontmatter=b,n),mdxType:"Playground"},(function(){var e=i.useState(!1),n=e[0],t=e[1],s=i.useState(!1),a=s[0],u=(s[1],i.useState(1)),b=u[0],p=u[1],f=function(e){return p(e)};return Object(o.b)(r.a,{mdxType:"Container"},Object(o.b)(c.a,{fill:!0,width:150,size:"large",onClick:function(){return t(!0)},mdxType:"BaseButton"},"Open Designed Modal"),Object(o.b)(d.a,{isOpen:n,title:"구매",subTitle:"이용권 구매하기",submitText:"확인",closeText:"취소",submit:function(){alert("보냈습니다")},onClose:function(){return t(!1)},close:function(){return t(!1)},submitButtonDisabled:a,isLoading:a,mdxType:"DesignedModal"},Object(o.b)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},Object(o.b)("div",null,"Radio onClick Event Bind"),Object(o.b)("div",null,Object(o.b)(l.a,{isChecked:1===b,onClick:function(){return f(1)},mdxType:"Radio"}),Object(o.b)("span",null,"옵션1"),Object(o.b)(l.a,{isChecked:2===b,onClick:function(){return f(2)},mdxType:"Radio"}),Object(o.b)("span",null,"옵션2")),Object(o.b)("br",null))))})))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docsSrc/components/Modal/DesignedModal/DesignedModal.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-modal-designed-modal-designed-modal-mdx-20e9078d819d6e27f0ef.js.map