(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{NJQZ:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return f})),t.d(n,"default",(function(){return g}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var a=t("mXGw"),o=t("/FXl"),i=t("TjRS"),l=t("ZFoC"),r=t("e/6O"),s=t("6vQ5"),u=t("L3ex"),c=t("TNKe"),d=t("MVnR"),b=t("L+in"),p=t("izla");t("aD51");function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var f={};void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docsSrc/components/Modal/MobileFullModal/MobileFullModal.mdx"}});var O={_frontmatter:f},y=i.a;function g(e){var n,t=e.components,g=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(o.b)(y,m({},O,g,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"mobilefullmodal"},"MobileFullModal"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)(l.d,{of:r.a,mdxType:"Props"}),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)(l.c,{__position:1,__code:'() => {\n  const [isOpen1, setIsOpen1] = React.useState(false)\n  const [isOpen2, setIsOpen2] = React.useState(false)\n  const [isProcessing, setIsProcessing] = React.useState(false)\n  const [radioId, setRadioId] = React.useState(1)\n  const setRadio = id => setRadioId(id)\n  const [buyerName, setBuyerName] = React.useState(\'\')\n  const handleSubmit = () => {\n    alert(\'보냈습니다\')\n    setIsOpen1(false)\n  }\n  return (\n    <Container>\n      <BaseButton\n        fill\n        width={250}\n        size={\'large\'}\n        onClick={() => setIsOpen1(true)}\n      >\n        Open Full Modal1\n      </BaseButton>\n      <BaseButton\n        fill\n        width={250}\n        size={\'large\'}\n        onClick={() => setIsOpen2(true)}\n      >\n        Open Full Modal2\n      </BaseButton>\n      <MobileFullModal\n        isOpen={isOpen1}\n        title="채용 포지션 저장"\n        subTitle="Donald. Patrick Sr."\n        headerButtonText="포지션 추가"\n        submitText="저장"\n        submit={() => handleSubmit()}\n        onHeaderButtonClick={() => {\n          alert(\'포지션 추가 버튼 클릭\')\n        }}\n        onClose={() => setIsOpen1(false)}\n        submitButtonDisabled={isProcessing}\n        isLoading={isProcessing}\n      >\n        <DoczContainer direction="row">\n          <div>Radio onClick Event Bind</div>\n          <Radio isChecked={radioId === 1} onClick={() => setRadio(1)} />\n          <span>옵션1</span>\n          <Radio isChecked={radioId === 2} onClick={() => setRadio(2)} />\n          <span>옵션2</span>\n        </DoczContainer>\n      </MobileFullModal>\n      <MobileFullModal\n        isOpen={isOpen2}\n        title="채용 포지션 저장"\n        subTitle="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"\n        onClose={() => setIsOpen2(false)}\n        submitButtonDisabled={isProcessing}\n        isLoading={isProcessing}\n      >\n        <DoczContainer direction="row">\n          <BaseInput\n            name="buyerName"\n            label="구매자"\n            placeholder="구매자명을 입력하세요"\n            value={buyerName}\n            onChange={e => setBuyerName(e.target.value)}\n            maxLength={150}\n            marginBottom={10}\n            autoFocus\n            required\n            useError\n            validate={name => {\n              if (!name) return \'구매자명을 입력하세요\'\n            }}\n          />\n        </DoczContainer>\n        <DoczContainer direction="row">\n          <Textarea\n            label={\'문의내용\'}\n            type="text"\n            name="message"\n            maxLength={1500}\n            placeholder={\'1500자 내로 문의 내용을 적어 주세요.\'}\n            required\n          />\n        </DoczContainer>\n      </MobileFullModal>\n    </Container>\n  )\n}',__scope:(n={props:g,DefaultLayout:i.a,Playground:l.c,Props:l.d,MobileFullModal:r.a,Container:s.a,BaseButton:u.a,Radio:c.a,BaseInput:d.a,Textarea:b.a,DoczContainer:p.a},n.DefaultLayout=i.a,n._frontmatter=f,n),mdxType:"Playground"},(function(){var e=a.useState(!1),n=e[0],t=e[1],i=a.useState(!1),l=i[0],m=i[1],f=a.useState(!1),O=f[0],y=(f[1],a.useState(1)),g=y[0],x=y[1],C=function(e){return x(e)},h=a.useState(""),j=h[0],M=h[1];return Object(o.b)(s.a,{mdxType:"Container"},Object(o.b)(u.a,{fill:!0,width:250,size:"large",onClick:function(){return t(!0)},mdxType:"BaseButton"},"Open Full Modal1"),Object(o.b)(u.a,{fill:!0,width:250,size:"large",onClick:function(){return m(!0)},mdxType:"BaseButton"},"Open Full Modal2"),Object(o.b)(r.a,{isOpen:n,title:"채용 포지션 저장",subTitle:"Donald. Patrick Sr.",headerButtonText:"포지션 추가",submitText:"저장",submit:function(){return alert("보냈습니다"),void t(!1)},onHeaderButtonClick:function(){alert("포지션 추가 버튼 클릭")},onClose:function(){return t(!1)},submitButtonDisabled:O,isLoading:O,mdxType:"MobileFullModal"},Object(o.b)(p.a,{direction:"row",mdxType:"DoczContainer"},Object(o.b)("div",null,"Radio onClick Event Bind"),Object(o.b)(c.a,{isChecked:1===g,onClick:function(){return C(1)},mdxType:"Radio"}),Object(o.b)("span",null,"옵션1"),Object(o.b)(c.a,{isChecked:2===g,onClick:function(){return C(2)},mdxType:"Radio"}),Object(o.b)("span",null,"옵션2"))),Object(o.b)(r.a,{isOpen:l,title:"채용 포지션 저장",subTitle:"abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",onClose:function(){return m(!1)},submitButtonDisabled:O,isLoading:O,mdxType:"MobileFullModal"},Object(o.b)(p.a,{direction:"row",mdxType:"DoczContainer"},Object(o.b)(d.a,{name:"buyerName",label:"구매자",placeholder:"구매자명을 입력하세요",value:j,onChange:function(e){return M(e.target.value)},maxLength:150,marginBottom:10,autoFocus:!0,required:!0,useError:!0,validate:function(e){if(!e)return"구매자명을 입력하세요"},mdxType:"BaseInput"})),Object(o.b)(p.a,{direction:"row",mdxType:"DoczContainer"},Object(o.b)(b.a,{label:"문의내용",type:"text",name:"message",maxLength:1500,placeholder:"1500자 내로 문의 내용을 적어 주세요.",required:!0,mdxType:"Textarea"}))))})))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docsSrc/components/Modal/MobileFullModal/MobileFullModal.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-modal-mobile-full-modal-mobile-full-modal-mdx-5e191b9cf53ab5c4abd8.js.map