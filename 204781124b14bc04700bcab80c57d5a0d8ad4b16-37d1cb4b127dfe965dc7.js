(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1Mdp":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a("q1tI");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var r=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),o=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function l(e){if(7===e.length)return e;for(var t="#",a=1;a<4;a+=1)t+=e[a]+e[a];return t}function s(e,t,a,i,n){return function(e,t,a,i,n){var r=(e-a)/(t-a);if(0===r)return i;if(1===r)return n;for(var o="#",l=1;l<6;l+=2){var s=parseInt(i.substr(l,2),16),c=parseInt(n.substr(l,2),16),d=Math.round((1-r)*s+r*c).toString(16);1===d.length&&(d="0"+d),o+=d}return o}(e,t,a,l(i),l(n))}var c=function(e){function t(t){e.call(this,t);var a=t.height,i=t.width,n=t.checked;this.t=t.handleDiameter||a-2,this.i=Math.max(i-a,i-(a+this.t)/2),this.o=Math.max(0,(a-this.t)/2),this.state={s:n?this.i:this.o},this.n=0,this.e=0,this.h=this.h.bind(this),this.r=this.r.bind(this),this.a=this.a.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this)}return e&&(t.__proto__=e),((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({s:this.props.checked?this.i:this.o})},t.prototype.k=function(e){this.y.focus(),this.setState({C:e,M:!0,m:Date.now()})},t.prototype.x=function(e){var t=this.state,a=t.C,i=t.s,n=(this.props.checked?this.i:this.o)+e-a;t.R||e===a||this.setState({R:!0});var r=Math.min(this.i,Math.max(this.o,n));r!==i&&this.setState({s:r})},t.prototype.S=function(e){var t=this.state,a=t.s,i=t.R,n=t.m,r=this.props.checked,o=(this.i+this.o)/2,l=Date.now()-n;!i||l<250?this.T(e):r?o<a?this.setState({s:this.i}):this.T(e):a<o?this.setState({s:this.o}):this.T(e),this.setState({R:!1,M:!1}),this.n=Date.now()},t.prototype.h=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.k(e.clientX),window.addEventListener("mousemove",this.r),window.addEventListener("mouseup",this.a))},t.prototype.r=function(e){e.preventDefault(),this.x(e.clientX)},t.prototype.a=function(e){this.S(e),window.removeEventListener("mousemove",this.r),window.removeEventListener("mouseup",this.a)},t.prototype.c=function(e){this.$=null,this.k(e.touches[0].clientX)},t.prototype.l=function(e){this.x(e.touches[0].clientX)},t.prototype.u=function(e){e.preventDefault(),this.S(e)},t.prototype.p=function(e){50<Date.now()-this.n&&(this.T(e),50<Date.now()-this.e&&this.setState({M:!1}))},t.prototype.b=function(){this.e=Date.now()},t.prototype.g=function(){this.setState({M:!0})},t.prototype.v=function(){this.setState({M:!1})},t.prototype.w=function(e){this.y=e},t.prototype.f=function(e){e.preventDefault(),this.y.focus(),this.T(e),this.setState({M:!1})},t.prototype.T=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.disabled,a=e.className,r=e.offColor,o=e.onColor,l=e.offHandleColor,c=e.onHandleColor,d=e.checkedIcon,u=e.uncheckedIcon,f=e.boxShadow,h=e.activeBoxShadow,m=e.height,p=e.width,g=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(a[i]=e[i]);return a}(e,["disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","boxShadow","activeBoxShadow","height","width","handleDiameter"]),y=this.state,b=y.s,v=y.R,E=y.M,w={position:"relative",display:"inline-block",textAlign:"left",opacity:t?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},k={height:m,width:p,margin:Math.max(0,(this.t-m)/2),position:"relative",background:s(b,this.i,this.o,r,o),borderRadius:m/2,cursor:t?"default":"pointer",WebkitTransition:v?null:"background 0.25s",MozTransition:v?null:"background 0.25s",transition:v?null:"background 0.25s"},S={height:m,width:Math.min(1.5*m,p-(this.t+m)/2+1),position:"relative",opacity:(b-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:v?null:"opacity 0.25s",MozTransition:v?null:"opacity 0.25s",transition:v?null:"opacity 0.25s"},x={height:m,width:Math.min(1.5*m,p-(this.t+m)/2+1),position:"absolute",opacity:1-(b-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:v?null:"opacity 0.25s",MozTransition:v?null:"opacity 0.25s",transition:v?null:"opacity 0.25s"},I={height:this.t,width:this.t,background:s(b,this.i,this.o,l,c),display:"inline-block",cursor:t?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+b+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:E?h:f,border:0,WebkitTransition:v?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:v?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:v?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return i.createElement("div",{className:a,style:w},i.createElement("div",{className:"react-switch-bg",style:k,onClick:t?null:this.f,onMouseDown:function(e){return e.preventDefault()}},d&&i.createElement("div",{style:S},d),u&&i.createElement("div",{style:x},u)),i.createElement("div",{className:"react-switch-handle",style:I,onClick:function(e){return e.preventDefault()},onMouseDown:t?null:this.h,onTouchStart:t?null:this.c,onTouchMove:t?null:this.l,onTouchEnd:t?null:this.u,onTouchCancel:t?null:this.v}),i.createElement("input",n({},{type:"checkbox",role:"switch",disabled:t,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p})))},t}(i.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:r,checkedIcon:o,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},t.default=c},"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var n,r=i(a("PJYZ")),o=i(a("VbXa")),l=i(a("8OQS")),s=i(a("pVnL")),c=i(a("q1tI")),d=i(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=k([].concat(t.fluid))),t.fixed&&(t.fixed=k([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,a=e.fixed,i=m(t||a||[]);return i&&i.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),g=function(e){var t=u(e),a=h(t);return p[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),a&&c.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function k(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var C=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+o+l+a+i+t+r+n+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=c.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,n=e.generateSources,r=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(M,(0,s.default)({ref:t,src:a},r,{ariaHidden:o}));return i.length>1?c.default.createElement("picture",null,n(i),l):l})),M=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,h=e.ariaHidden,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":h,sizes:a,srcSet:i,src:n},m,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));M.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=h(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,h=e.placeholderClassName,p=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,k=e.loading,I=e.draggable,C=p||g;if(!C)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,s.default)({opacity:z?1:0,transition:T?"opacity "+b+"ms":"none"},l),R="boolean"==typeof y?"lightgray":y,P={transitionDelay:b+"ms"},_=(0,s.default)({opacity:this.state.imgLoaded?0:1},T&&P,l,f),O={title:t,alt:this.state.isVisible?"":a,style:_,className:h,itemProp:E},F=this.state.isHydrated?m(C):C[0];if(p)return c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:F.maxWidth?F.maxWidth+"px":null,maxHeight:F.maxHeight?F.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),R&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&P)}),F.base64&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:F.base64,spreadProps:O,imageVariants:C,generateSources:x}),F.tracedSVG&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:F.tracedSVG,spreadProps:O,imageVariants:C,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,w(C),c.default.createElement(M,{alt:a,title:t,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:k,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:a,title:t,loading:k},F,{imageVariants:C}))}}));if(g){var D=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},r);return"inherit"===r.display&&delete D.display,c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},R&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:R,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},T&&P)}),F.base64&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:F.base64,spreadProps:O,imageVariants:C,generateSources:x}),F.tracedSVG&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:F.tracedSVG,spreadProps:O,imageVariants:C,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,w(C),c.default.createElement(M,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:k,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:a,title:t,loading:k},F,{imageVariants:C}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),H=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function R(e){return function(t,a,i){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",i)}}z.propTypes={resolutions:T,sizes:H,fixed:R(d.default.oneOfType([T,d.default.arrayOf(T)])),fluid:R(d.default.oneOfType([H,d.default.arrayOf(H)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=z;t.default=P},D98b:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("vOnD"),o=a("dI71"),l=a("ohBo"),s=a.n(l),c=a("IP2g"),d=a("wHSu"),u=a("XHBK"),f=a.n(u),h=a("S+kE"),m=a.n(h),p=(a("GhkC"),function(e){function t(t){var a;return(a=e.call(this,t)||this).handleToggle=function(e){a.setState({checked:e}),a.props.onClick()},"dark"===m.a.defaultTheme?a.state={checked:!0}:a.state={checked:!1},a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){"dark"!==this.props.theme.mode?this.setState({checked:!1}):this.setState({checked:!0})},a.render=function(){return n.a.createElement("div",{className:"custom-switch"},n.a.createElement(s.a,{onChange:this.handleToggle,checked:this.state.checked,offColor:"#bbb",onColor:"#4a4a4a",uncheckedIcon:n.a.createElement(c.a,{className:"icon-moon",icon:d.g}),checkedIcon:n.a.createElement(f.a,{className:"icon-sun"}),handleDiameter:21,height:23,width:40,onHandleColor:"#333"}))},t}(i.Component)),g=Object(r.f)(p);t.a=function(e){return n.a.createElement(r.a,null,(function(e){return n.a.createElement(g,{onClick:function(t){return e.setTheme("dark"===e.mode?{mode:"light"}:{mode:"dark"})}})}))}},GhkC:function(e,t,a){},VuKL:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("vOnD"),o=a("Wbzz"),l=a("S+kE"),s=a.n(l),c=function(){return n.a.createElement(n.a.Fragment,null,l.enableAbout?n.a.createElement(d,{className:"main-card-name"},n.a.createElement("h2",null,n.a.createElement(o.Link,{to:"/about"},l.author))):n.a.createElement(u,null,n.a.createElement("h2",null,l.author)))},d=r.d.div.withConfig({displayName:"AboutLink__StyledMainCardName",componentId:"sc-1o9z4hy-0"})(["display:inline-block;cursor:pointer;h2{padding:0.2rem 0.4rem;}"]),u=r.d.div.withConfig({displayName:"AboutLink__StyledMainCardNameAboutDisabled",componentId:"sc-1o9z4hy-1"})(["display:inline-block;h2{padding:0.2rem 0rem;}"]),f=function(e){var t=e.accountInfo,a=e.mediaName,i=e.preHref;return n.a.createElement(n.a.Fragment,null,t&&""!==t&&n.a.createElement("a",{href:""+i+t,target:"_blank",rel:"noopener noreferrer"},a))},h=function(){return n.a.createElement(m,null,n.a.createElement(f,{accountInfo:l.socialMediaLinks.email.emailAddress,mediaName:"Email",preHref:"mailto:"}),n.a.createElement(f,{accountInfo:l.socialMediaLinks.github.accountName,mediaName:"GitHub",preHref:"https://github.com/"}),n.a.createElement(f,{accountInfo:l.socialMediaLinks.facebook.accountName,mediaName:"Facebook",preHref:"https://www.facebook.com/"}),n.a.createElement(f,{accountInfo:l.socialMediaLinks.instagram.accountName,mediaName:"Instagram",preHref:"https://instagram.com/"}),n.a.createElement(f,{accountInfo:l.socialMediaLinks.twitter.accountName,mediaName:"Twitter",preHref:"https://twitter.com/"}),n.a.createElement(f,{accountInfo:l.socialMediaLinks.linkedIn.accountName,mediaName:"LinkedIn",preHref:"https://linkedin.com/"}),n.a.createElement(f,{accountInfo:l.socialMediaLinks.medium.accountName,mediaName:"Medium",preHref:"https://medium.com/@"}))},m=r.d.div.withConfig({displayName:"MediaLinks__StyledMediaLinks",componentId:"b5cwuv-0"})(["display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;a{color:steelblue;margin:0 0.2rem;font-size:0.8rem;}"]),p=a("wHSu"),g=a("IP2g"),y=function(){return l.location?n.a.createElement(b,{className:"profile-texts-location"},n.a.createElement("a",{href:"https://www.google.com/maps/search/"+l.location,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(g.a,{className:"icon-fa icon-location",icon:p.f}),l.location)):null},b=r.d.p.withConfig({displayName:"ProfileLocation__StyledTextsLocation",componentId:"sc-31aj7i-0"})(["font-size:0.85rem;margin:0.3rem !important;.icon-location{font-size:0.8rem;}"]),v=function(e){var t=e.home;return n.a.createElement(n.a.Fragment,null,t?n.a.createElement(w,{className:"profile-texts"},n.a.createElement(c,null),n.a.createElement("p",null,l.profileDescription),n.a.createElement(y,null),n.a.createElement(h,null)):n.a.createElement(E,{className:"profile-texts"},n.a.createElement("h4",null,"WRITTEN BY"),n.a.createElement(c,null),n.a.createElement("p",null,l.profileDescription),n.a.createElement(y,null),n.a.createElement(h,null)))},E=r.d.div.withConfig({displayName:"ProfileTexts__StyledProfileTexts",componentId:"sc-1lyqxvp-0"})(["margin:0 1rem;flex:10;padding:1rem;h4{margin:0.3rem 0;font-size:0.9rem;}p{margin:0.5rem 0;}@media (max-width:500px){p{margin:0.3rem 0;}}"]),w=r.d.div.withConfig({displayName:"ProfileTexts__StyledProfileTextsHome",componentId:"sc-1lyqxvp-1"})(['display:flex;flex-direction:column;align-items:center;padding:1rem 3rem;text-align:center;h4{margin:0.3rem 0;font-size:0.9rem;text-align:"center";}p{margin:0.5rem 0;text-align:"center";}div:last-child{justify-content:center;}@media (max-width:500px){padding:1rem 0.5rem;p{margin:0.3rem 0;}}']),k=a("9eSz"),S=a.n(k),x=function(){var e=Object(o.useStaticQuery)("1703067421").images.edges.find((function(e){return e.node.relativePath.includes(s.a.profileImageName)}));return e?n.a.createElement(S.a,{className:"img-profile",fluid:e.node.childImageSharp.fluid}):null},I=a("DSs8"),C=function(e){var t=e.home;return n.a.createElement(n.a.Fragment,null,t?n.a.createElement(N,{className:"profile-image-home"},n.a.createElement(M,{className:"profile-image-inner"},n.a.createElement(z,{className:"profile-image-inner-inner"})),n.a.createElement(x,{objectFit:"cover",objectPosition:"50% 50%",alt:"profileImage"})):n.a.createElement(L,{className:"profile-image"},n.a.createElement(M,{className:"profile-image-inner"},n.a.createElement(z,{className:"profile-image-inner-inner"})),n.a.createElement(x,{objectFit:"cover",objectPosition:"50% 50%",alt:"profileImage"})))},L=r.d.div.withConfig({displayName:"ProfileImg__StyledImage",componentId:"sc-1ny6zvu-0"})(["position:relative;width:",";height:",";div{border-radius:50%;}"],"80px","80px"),N=r.d.div.withConfig({displayName:"ProfileImg__StyledImageHome",componentId:"sc-1ny6zvu-1"})(["position:absolute;top:-22%;left:50%;transform:translateX(-50%);width:",";height:",";div{border-radius:50%;}"],"80px","80px"),M=r.d.div.withConfig({displayName:"ProfileImg__StyledInner",componentId:"sc-1ny6zvu-2"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:94px;height:94px;border:1px solid ",";"],I.b.mintColor),z=r.d.div.withConfig({displayName:"ProfileImg__StyledInnerInner",componentId:"sc-1ny6zvu-3"})(["position:absolute;z-index:-1;top:50%;left:50%;transform:translate(-50%,-50%);width:100px;height:30px;border-radius:0 !important;"]),T=a("mCcy"),H=(t.a=function(e){var t=e.home;return n.a.createElement(n.a.Fragment,null,t?n.a.createElement(R,{className:"profile-home"},n.a.createElement(C,null),n.a.createElement(v,{home:!0})):n.a.createElement(H,{className:"profile"},n.a.createElement(C,null),n.a.createElement(v,null)))},r.d.div.withConfig({displayName:"Profile__StyledProfile",componentId:"sc-1nkb7il-0"})(["font-family:",";position:relative;display:flex;align-items:center;padding:0.1rem 0.5rem 0.5rem 0.5rem;"],T.fontProfile+T.fontsBackUp)),R=r.d.div.withConfig({displayName:"Profile__StyledProfileHome",componentId:"sc-1nkb7il-1"})(["font-family:",";display:flex;flex-direction:column;align-items:center;padding:0 3rem;@media (max-width:500px){padding:0rem 0.5rem;}"],T.fontProfile+T.fontsBackUp)},XHBK:function(e,t,a){var i=a("q1tI");function n(e){return i.createElement("svg",e,[i.createElement("path",{style:{fill:"#F2B303"},d:"M400.912,237.513L339.07,130.442c-5.199-8.995-14.777-14.541-25.182-14.541H190.243\r\n\tc-10.39,0-19.992,5.545-25.175,14.541l-61.85,107.079c-5.191,8.995-5.191,20.086,0,29.074l61.85,107.095\r\n\tc5.183,9.011,14.785,14.541,25.175,14.541H313.88c10.405,0,19.984-5.53,25.182-14.541l61.85-107.095\r\n\tC406.095,257.599,406.095,246.508,400.912,237.513z",key:0}),i.createElement("path",{style:{fill:"#FFC022"},d:"M299.567,115.901H190.243c-10.39,0-19.992,5.545-25.175,14.541l-61.85,107.079\r\n\tc-5.191,8.995-5.191,20.086,0,29.074l27.727,48.026h109.316c10.405,0,19.999-5.545,25.198-14.549l61.85-107.087\r\n\tc5.167-9.003,5.167-20.086,0-29.082L299.567,115.901z",key:1}),i.createElement("path",{style:{fill:"#F9D500"},d:"M190.243,115.901c-10.39,0-19.992,5.545-25.175,14.541l-61.85,107.079\r\n\tc-5.191,8.995-5.191,20.086,0,29.074l27.727,48.026",key:2}),i.createElement("g",{key:3},[i.createElement("path",{style:{fill:"#FFC022"},d:"M260.498,67.497c0,4.663-3.773,8.428-8.436,8.428l0,0c-4.663,0-8.436-3.773-8.436-8.428V8.436\r\n\t\tc0-4.663,3.773-8.436,8.436-8.436l0,0c4.663,0,8.436,3.773,8.436,8.436V67.497z",key:0}),i.createElement("path",{style:{fill:"#FFC022"},d:"M260.498,495.687c0,4.663-3.773,8.436-8.436,8.436l0,0c-4.663,0-8.436-3.773-8.436-8.436v-59.061\r\n\t\tc0-4.663,3.773-8.428,8.436-8.428l0,0c4.663,0,8.436,3.773,8.436,8.428V495.687z",key:1}),i.createElement("path",{style:{fill:"#FFC022"},d:"M388.529,127.52c-3.293,3.293-8.633,3.293-11.934,0l0,0c-3.293-3.3-3.293-8.641,0-11.934\r\n\t\tl41.771-41.748c3.293-3.316,8.625-3.316,11.934,0l0,0c3.293,3.285,3.293,8.617,0,11.918L388.529,127.52z",key:2}),i.createElement("path",{style:{fill:"#FFC022"},d:"M85.756,430.301c-3.293,3.293-8.633,3.293-11.934,0l0,0c-3.3-3.3-3.3-8.641,0-11.934l41.763-41.771\r\n\t\tc3.3-3.293,8.633-3.293,11.941,0l0,0c3.293,3.3,3.293,8.641-0.008,11.934L85.756,430.301z",key:3}),i.createElement("path",{style:{fill:"#FFC022"},d:"M436.626,260.498c-4.663,0-8.436-3.773-8.436-8.436l0,0c0-4.655,3.773-8.436,8.436-8.428h59.061\r\n\t\tc4.655-0.008,8.436,3.765,8.436,8.436l0,0c0,4.663-3.781,8.428-8.436,8.436L436.626,260.498z",key:4}),i.createElement("path",{style:{fill:"#FFC022"},d:"M8.436,260.498c-4.663,0-8.436-3.773-8.436-8.436l0,0c0-4.655,3.773-8.436,8.428-8.436l59.077-0.008\r\n\t\tc4.655,0.008,8.428,3.781,8.428,8.444l0,0c0,4.663-3.773,8.436-8.444,8.428L8.436,260.498z",key:5}),i.createElement("path",{style:{fill:"#FFC022"},d:"M376.604,388.529c-3.293-3.293-3.3-8.633,0-11.934l0,0c3.293-3.293,8.641-3.293,11.934,0.008\r\n\t\tl41.763,41.763c3.3,3.293,3.308,8.633,0,11.941l0,0c-3.3,3.293-8.633,3.285-11.934,0L376.604,388.529z",key:6}),i.createElement("path",{style:{fill:"#FFC022"},d:"M73.823,85.756c-3.3-3.293-3.3-8.625,0-11.934l0,0c3.3-3.285,8.641-3.293,11.934-0.008\r\n\t\tl41.771,41.771c3.293,3.3,3.293,8.641,0,11.941l0,0c-3.308,3.293-8.641,3.293-11.941-0.016L73.823,85.756z",key:7})]),i.createElement("g",{key:4}),i.createElement("g",{key:5}),i.createElement("g",{key:6}),i.createElement("g",{key:7}),i.createElement("g",{key:8}),i.createElement("g",{key:9}),i.createElement("g",{key:10}),i.createElement("g",{key:11}),i.createElement("g",{key:12}),i.createElement("g",{key:13}),i.createElement("g",{key:14}),i.createElement("g",{key:15}),i.createElement("g",{key:16}),i.createElement("g",{key:17}),i.createElement("g",{key:18})])}n.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 504.123 504.123",style:{enableBackground:"new 0 0 504.123 504.123"},xmlSpace:"preserve"},e.exports=n,n.default=n},ohBo:function(e,t,a){e.exports=a("1Mdp")}}]);
//# sourceMappingURL=204781124b14bc04700bcab80c57d5a0d8ad4b16-37d1cb4b127dfe965dc7.js.map