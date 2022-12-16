"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[519],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),c=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(r.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,h=u["".concat(r,".").concat(m)]||u[m]||p[m]||l;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=u;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),i=t(6010);const l="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,s),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),i=t(7294),l=t(6010),s=t(2389),o=t(7392),r=t(7094),c=t(2466);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){var n;const{lazy:t,block:s,defaultValue:u,values:m,groupId:h,className:b}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??y.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,o.l)(f,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===u?u:u??(null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)??y[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,r.U)(),[C,_]=(0,i.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==C&&f.some((n=>n.value===e))&&_(e)}const N=e=>{const n=e.currentTarget,t=E.indexOf(n),a=f[t].value;a!==C&&(T(n),_(a),null!=h&&w(h,String(a)))},I=e=>{var n;let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},f.map((e=>{let{value:n,label:t,attributes:s}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>E.push(e),onKeyDown:I,onClick:N},s,{className:(0,l.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":C===n})}),t??n)}))),t?(0,i.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function m(e){const n=(0,s.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(7462),i=(t(7294),t(3905)),l=t(5488),s=t(5162);const o={sidebar_position:6},r="Dependency Inversion Principle (DIP)",c={unversionedId:"solid-principles/dependency_inversion_principle",id:"solid-principles/dependency_inversion_principle",title:"Dependency Inversion Principle (DIP)",description:"The Dependency Inversion Principle (DIP) is a principle of object-oriented design that states that high-level modules should not depend on low-level modules, but rather both should depend on abstractions. This means that instead of directly depending on concrete implementations of classes, modules should depend on abstract interfaces or contracts. This allows for better code organization and maintainability, as well as flexibility to accommodate future changes in requirements. To implement the DIP, developers can use techniques such as abstraction, inversion of control, and dependency injection.",source:"@site/docs/solid-principles/05_dependency_inversion_principle.md",sourceDirName:"solid-principles",slug:"/solid-principles/dependency_inversion_principle",permalink:"/para_ruby/docs/solid-principles/dependency_inversion_principle",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Interface Segregation Principle (ISP)",permalink:"/para_ruby/docs/solid-principles/interface_segregation_principle"},next:{title:"Glossary",permalink:"/para_ruby/docs/category/glossary"}},d={},p=[{value:"Code examples",id:"code-examples",level:2}],u={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dependency-inversion-principle-dip"},"Dependency Inversion Principle (DIP)"),(0,i.kt)("p",null,"The Dependency Inversion Principle (DIP) is a principle of object-oriented design that states that high-level modules should not depend on low-level modules, but rather both should depend on abstractions. This means that instead of directly depending on concrete implementations of classes, modules should depend on abstract interfaces or contracts. This allows for better code organization and maintainability, as well as flexibility to accommodate future changes in requirements. To implement the DIP, developers can use techniques such as ",(0,i.kt)("a",{parentName:"p",href:"/para_ruby/docs/glossary/abstraction"},"abstraction"),", ",(0,i.kt)("a",{parentName:"p",href:"/para_ruby/docs/glossary/inversion%20of%20control"},"inversion of control"),", and dependency injection."),(0,i.kt)("admonition",{title:"Explain Dependency Inversion Principle (DIP) like I'm five",type:"info"},(0,i.kt)("blockquote",{parentName:"admonition"},(0,i.kt)("p",{parentName:"blockquote"},"The Dependency Inversion Principle is like a toy robot. A toy robot can do different things, like walk and talk and dance. And even though the robot can do all these different things, it doesn't have to do them all by itself. Instead, it can use other things to help it do the things it wants to do. For example, the robot might use batteries to make it move, and a speaker to make it talk. And even though the robot is using batteries and a speaker, it doesn't have to know how the batteries and the speaker work. It just has to know what they can do for it. In object-oriented programming, the toy robot is like a high-level module, and the batteries and the speaker are like low-level modules. The Dependency Inversion Principle says that high-level modules should use low-level modules without knowing how they work, so that the high-level modules can be more flexible and reusable."))),(0,i.kt)("h2",{id:"code-examples"},"Code examples"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"bad",label:"Bad",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"class User\n  def send_email\n    email_client = EmailClient.new\n    email_client.send_email(to: 'user@example.com', subject: 'Hello', body: 'Hello, how are you?')\n  end\nend\n\nclass EmailClient\n  def send_email(to:, subject:, body:)\n    # Send the email using a third-party email service\n  end\nend\n\n")),(0,i.kt)("p",null,"In this example, the User class depends on the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailClient")," class to send emails. This creates a tight coupling between the two classes, because the User class is directly dependent on the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailClient")," class for its functionality."),(0,i.kt)("p",null,"This violates the Dependency Inversion Principle because it means that any changes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailClient")," class will also affect the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," class. For example, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailClient")," class changes the way it sends emails, the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," class will also be affected."),(0,i.kt)("p",null,"A better design would be to invert the dependency between the two classes by introducing an abstraction between them. For example, you could create an ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailService")," interface with a send_email method, and have the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailClient")," class implement this interface. The User class could then depend on the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailService")," interface, rather than the concrete ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailClient")," class. This would allow you to change the implementation of the email service without affecting the User class.")),(0,i.kt)(s.Z,{value:"good",label:"Good",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"class User\n  def initialize(email_service: EmailClient.new)\n    @email_service = email_service\n  end\n\n  def send_email\n    @email_service.send_email(to: 'user@example.com', subject: 'Hello', body: 'Hello, how are you?')\n  end\nend\n\nclass EmailClient\n  def send_email(to:, subject:, body:)\n    # Send the email using a third-party email service\n  end\nend\n\nclass MockEmailClient\n  def send_email(to:, subject:, body:)\n    # Do nothing, just return success\n  end\nend\n\n# In the User class, you can now pass in any object that responds to the `send_email` method\nuser = User.new(email_service: MockEmailClient.new)\nuser.send_email\n\n")),(0,i.kt)("p",null,"In this example, the User class depends on the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailService")," interface, rather than the concrete ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailClient")," class. This allows you to change the implementation of the email service without affecting the User class."),(0,i.kt)("p",null,"You can also see how the MockEmailClient class, which is a stub implementation of the EmailService interface, can be used to test the User class without actually sending any emails. This can be useful for testing or debugging purposes."),(0,i.kt)("p",null,"By inverting the dependency between the User class and the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailClient")," class, you can make the code more flexible and easier to maintain. It also makes it easier to test and debug the code, as you can swap out different implementations of the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailService")," interface as needed.")),(0,i.kt)(s.Z,{value:"specs",label:"Specs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'describe User do\n  describe "#send_email" do\n    let(:email_service) { double(\'EmailService\') }\n    subject { described_class.new(email_service: email_service) }\n\n    it "sends an email using the email service" do\n      expect(email_service).to receive(:send_email).with(to: \'user@example.com\', subject: \'Hello\', body: \'Hello, how are you?\')\n      subject.send_email\n    end\n  end\nend\n\ndescribe EmailClient do\n  describe "#send_email" do\n    it "sends an email using a third-party email service" do\n      # Add tests to verify that the email is actually sent using the third-party email service\n    end\n  end\nend\n\ndescribe MockEmailClient do\n  describe "#send_email" do\n    it "does nothing, just returns success" do\n      # Add tests to verify that the mock email client does not actually send any emails\n    end\n  end\nend\n')),(0,i.kt)("p",null,"These tests cover the basic behavior of the ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailClient"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"MockEmailClient")," classes. They verify that the User class sends an email using the email service, and that the EmailClient class actually sends the email using a third-party email service. They also verify that the ",(0,i.kt)("inlineCode",{parentName:"p"},"MockEmailClient")," class does not actually send any emails."),(0,i.kt)("p",null,"You may want to add additional tests to cover other aspects of the code, such as testing the error handling or other functionality of the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailClient")," class. You could also add tests for any other methods or functionality that you want to include in your code."))))}m.isMDXComponent=!0}}]);