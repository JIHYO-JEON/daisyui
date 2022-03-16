import{S as R,i as z,s as L,e as E,k as O,w as q,c as w,a as y,d as $,m as S,x as A,O as J,b as u,g as T,F as m,y as B,q as I,o as D,B as F,t as N,h as Q,j as W,p as X,J as Y,K as Z,n as ee}from"../../chunks/vendor-06da85d3.js";import{p as te}from"../../chunks/stores-179fce3d.js";import{T as H}from"../../chunks/Translate-3760eec8.js";import{S as se}from"../../chunks/SEO-13f7e066.js";import"../../chunks/index-3d615c6b.js";function K(c,s,o){const a=c.slice();return a[2]=s[o].slug,a[3]=s[o].meta,a}function M(c){let s,o,a,i,f,b,d,g,h,j,x,p,k,v,_;return h=new H({props:{text:c[3].title}}),p=new H({props:{text:c[3].desc||""}}),{c(){s=E("a"),o=E("figure"),a=E("img"),b=O(),d=E("div"),g=E("h2"),q(h.$$.fragment),j=O(),x=E("p"),q(p.$$.fragment),k=O(),this.h()},l(n){s=w(n,"A",{class:!0,href:!0});var t=y(s);o=w(t,"FIGURE",{class:!0});var C=y(o);a=w(C,"IMG",{src:!0,class:!0,alt:!0}),C.forEach($),b=S(t),d=w(t,"DIV",{class:!0});var e=y(d);g=w(e,"H2",{class:!0});var l=y(g);A(h.$$.fragment,l),l.forEach($),j=S(e),x=w(e,"P",{class:!0});var r=y(x);A(p.$$.fragment,r),r.forEach($),e.forEach($),k=S(t),t.forEach($),this.h()},h(){J(a.src,i=`/images/components/${c[2]}.jpg`)||u(a,"src",i),u(a,"class","border-base-content bg-base-300 rounded-lg border border-opacity-5"),u(a,"alt",f=c[3].title),u(o,"class","px-4 pt-4"),u(g,"class","card-title"),u(x,"class","text-xs opacity-60"),u(d,"class","card-body"),u(s,"class","card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"),u(s,"href",v=`${c[1].url.pathname.replace(/\/$/,"")}/${c[2]}`)},m(n,t){T(n,s,t),m(s,o),m(o,a),m(s,b),m(s,d),m(d,g),B(h,g,null),m(d,j),m(d,x),B(p,x,null),m(s,k),_=!0},p(n,t){(!_||t&1&&!J(a.src,i=`/images/components/${n[2]}.jpg`))&&u(a,"src",i),(!_||t&1&&f!==(f=n[3].title))&&u(a,"alt",f);const C={};t&1&&(C.text=n[3].title),h.$set(C);const e={};t&1&&(e.text=n[3].desc||""),p.$set(e),(!_||t&3&&v!==(v=`${n[1].url.pathname.replace(/\/$/,"")}/${n[2]}`))&&u(s,"href",v)},i(n){_||(I(h.$$.fragment,n),I(p.$$.fragment,n),_=!0)},o(n){D(h.$$.fragment,n),D(p.$$.fragment,n),_=!1},d(n){n&&$(s),F(h),F(p)}}}function ae(c){let s,o,a,i,f,b,d,g,h=Object.keys(c[0]).length+"",j,x,p,k,v,_;s=new se({props:{title:"Components",desc:"Components"}}),b=new H({props:{text:"All daisyUI components"}}),p=new H({props:{text:"components"}});let n=c[0],t=[];for(let e=0;e<n.length;e+=1)t[e]=M(K(c,n,e));const C=e=>D(t[e],1,1,()=>{t[e]=null});return{c(){q(s.$$.fragment),o=O(),a=E("div"),i=E("div"),f=E("h1"),q(b.$$.fragment),d=O(),g=E("p"),j=N(h),x=O(),q(p.$$.fragment),k=O(),v=E("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){A(s.$$.fragment,e),o=S(e),a=w(e,"DIV",{class:!0});var l=y(a);i=w(l,"DIV",{class:!0});var r=y(i);f=w(r,"H1",{});var V=y(f);A(b.$$.fragment,V),V.forEach($),d=S(r),g=w(r,"P",{});var G=y(g);j=Q(G,h),x=S(G),A(p.$$.fragment,G),G.forEach($),r.forEach($),k=S(l),v=w(l,"DIV",{class:!0});var U=y(v);for(let P=0;P<t.length;P+=1)t[P].l(U);U.forEach($),l.forEach($),this.h()},h(){u(i,"class","prose max-w-4xl flex-grow"),u(v,"class","not-prose grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"),u(a,"class","flex flex-col gap-6")},m(e,l){B(s,e,l),T(e,o,l),T(e,a,l),m(a,i),m(i,f),B(b,f,null),m(i,d),m(i,g),m(g,j),m(g,x),B(p,g,null),m(a,k),m(a,v);for(let r=0;r<t.length;r+=1)t[r].m(v,null);_=!0},p(e,[l]){if((!_||l&1)&&h!==(h=Object.keys(e[0]).length+"")&&W(j,h),l&3){n=e[0];let r;for(r=0;r<n.length;r+=1){const V=K(e,n,r);t[r]?(t[r].p(V,l),I(t[r],1)):(t[r]=M(V),t[r].c(),I(t[r],1),t[r].m(v,null))}for(ee(),r=n.length;r<t.length;r+=1)C(r);X()}},i(e){if(!_){I(s.$$.fragment,e),I(b.$$.fragment,e),I(p.$$.fragment,e);for(let l=0;l<n.length;l+=1)I(t[l]);_=!0}},o(e){D(s.$$.fragment,e),D(b.$$.fragment,e),D(p.$$.fragment,e),t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)D(t[l]);_=!1},d(e){F(s,e),e&&$(o),e&&$(a),F(b),F(p),Y(t,e)}}}async function fe({fetch:c}){return{props:{posts:await c("/api/components.json").then(o=>o.json())}}}function re(c,s,o){let a;Z(c,te,f=>o(1,a=f));let{posts:i}=s;return i.forEach(f=>{console.log(f.meta.desc)}),c.$$set=f=>{"posts"in f&&o(0,i=f.posts)},[i,a]}class pe extends R{constructor(s){super();z(this,s,re,ae,L,{posts:0})}}export{pe as default,fe as load};
