import{F as q,S as C,i as F,s as z,e as b,t as N,c as v,a as w,h as T,d as f,g as h,G as m,H as I,I as Y,l as p,k as $,w as j,J as B,m as k,x as G,b as x,y as H,K as J,L as K,M,q as D,o as E,B as P,N as L}from"../chunks/vendor-2e3255a9.js";import{g as V,l as A,s as O,a as Q,t as U,h as W,d as X}from"../chunks/plausible-396dba73.js";import"../chunks/preload-helper-1c85172a.js";function R(o){let t,l;return{c(){t=b("style"),l=N(`body {
				--before-color: #da3f8b;
				--correct-color: #64ba2e;
				--primary-color: #000;
				--secondary-color: #0e1118;
				--tertiary-color: #161a25;
			}
		`)},l(n){t=v(n,"STYLE",{});var a=w(t);l=T(a,`body {
				--before-color: #da3f8b;
				--correct-color: #64ba2e;
				--primary-color: #000;
				--secondary-color: #0e1118;
				--tertiary-color: #161a25;
			}
		`),a.forEach(f)},m(n,a){h(n,t,a),m(t,l)},d(n){n&&f(t)}}}function S(o){let t,l;return{c(){t=b("style"),l=N(`@font-face {
				font-family: 'OpenDyslexic-Regular';
				src: url('font/OpenDyslexic-Regular.woff') format('woff');
			}
			body {
				font-family: OpenDyslexic-Regular, var(--font-list);
				font-size: 0.9em;
			}`)},l(n){t=v(n,"STYLE",{});var a=w(t);l=T(a,`@font-face {
				font-family: 'OpenDyslexic-Regular';
				src: url('font/OpenDyslexic-Regular.woff') format('woff');
			}
			body {
				font-family: OpenDyslexic-Regular, var(--font-list);
				font-size: 0.9em;
			}`),a.forEach(f)},m(n,a){h(n,t,a),m(t,l)},d(n){n&&f(t)}}}function Z(o){let t,l,n,a,u,_,i,s=o[0]&&R(),r=o[1]&&S();u=new I({props:{options:{intro:{y:0},duration:2e3}}});const g=o[3].default,c=Y(g,o,o[2],null);return{c(){s&&s.c(),t=p(),r&&r.c(),l=p(),n=$(),a=b("div"),j(u.$$.fragment),_=$(),c&&c.c(),this.h()},l(e){const d=B('[data-svelte="svelte-1jw2no2"]',document.head);s&&s.l(d),t=p(),r&&r.l(d),l=p(),d.forEach(f),n=k(e),a=v(e,"DIV",{id:!0,class:!0});var y=w(a);G(u.$$.fragment,y),_=k(y),c&&c.l(y),y.forEach(f),this.h()},h(){x(a,"id","main"),x(a,"class","svelte-gtwdxa")},m(e,d){s&&s.m(document.head,null),m(document.head,t),r&&r.m(document.head,null),m(document.head,l),h(e,n,d),h(e,a,d),H(u,a,null),m(a,_),c&&c.m(a,null),i=!0},p(e,[d]){e[0]?s||(s=R(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),e[1]?r||(r=S(),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null),c&&c.p&&(!i||d&4)&&J(c,g,e,e[2],i?M(g,e[2],d,null):K(e[2]),null)},i(e){i||(D(u.$$.fragment,e),D(c,e),i=!0)},o(e){E(u.$$.fragment,e),E(c,e),i=!1},d(e){s&&s.d(e),f(t),r&&r.d(e),f(l),e&&f(n),e&&f(a),P(u),c&&c.d(e)}}}const nt=async()=>{let o=q(O);return o||(o=V()),A.get().includes(o)||(o="en"),O.set(o),await Q(o),{}};U();function tt(o,t,l){let n,a;L(o,W,i=>l(0,n=i)),L(o,X,i=>l(1,a=i));let{$$slots:u={},$$scope:_}=t;return o.$$set=i=>{"$$scope"in i&&l(2,_=i.$$scope)},[n,a,_,u]}class lt extends C{constructor(t){super();F(this,t,tt,Z,z,{})}}export{lt as default,nt as load};
