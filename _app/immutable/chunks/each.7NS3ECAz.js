import{h as j,i as ee,j as w,s as k,k as ae,l as re,m as U,H as ne,n as F,o as b,p as H,I as M,q as X,t as Q,v as ie,w as fe,x as G,E as L,y as J,z as O,A as le,B as se,C as te,D as ue,F as W,G as ve,J as de,K as _e,L as oe,M as ce,N as K,O as he,P as Ee}from"./runtime.BS781kwU.js";function xe(l,e){return e}function pe(l,e,a,u){for(var v=[],_=e.length,t=0;t<_;t++)le(e[t].e,v,!0);var o=_>0&&v.length===0&&a!==null;if(o){var A=a.parentNode;se(A),A.append(a),u.clear(),m(l,e[0].prev,e[_-1].next)}te(v,()=>{for(var h=0;h<_;h++){var d=e[h];o||(u.delete(d.k),m(l,d.prev,d.next)),ue(d.e,!o)}})}function me(l,e,a,u,v,_=null){var t=l,o={flags:e,items:new Map,first:null},A=(e&W)!==0;if(A){var h=l;t=w?k(ve(h)):h.appendChild(j())}w&&ae();var d=null,C=!1;ee(()=>{var r=a(),s=re(r)?r:r==null?[]:U(r),f=s.length;if(C&&f===0)return;C=f===0;let T=!1;if(w){var E=t.data===ne;E!==(f===0)&&(t=F(),k(t),b(!1),T=!0)}if(w){for(var p=null,I,c=0;c<f;c++){if(H.nodeType===8&&H.data===de){t=H,T=!0,b(!1);break}var n=s[c],i=u(n,c);I=Z(H,o,p,null,n,i,c,v,e),o.items.set(i,I),p=I}f>0&&k(F())}if(!w){var R=_e;Ae(s,o,t,v,e,(R.f&M)!==0,u)}_!==null&&(f===0?d?X(d):d=Q(()=>_(t)):d!==null&&ie(d,()=>{d=null})),T&&b(!0),a()}),w&&(t=H)}function Ae(l,e,a,u,v,_,t){var q,B,V,Y;var o=(v&oe)!==0,A=(v&(L|O))!==0,h=l.length,d=e.items,C=e.first,r=C,s,f=null,T,E=[],p=[],I,c,n,i;if(o)for(i=0;i<h;i+=1)I=l[i],c=t(I,i),n=d.get(c),n!==void 0&&((q=n.a)==null||q.measure(),(T??(T=new Set)).add(n));for(i=0;i<h;i+=1){if(I=l[i],c=t(I,i),n=d.get(c),n===void 0){var R=r?r.e.nodes_start:a;f=Z(R,e,f,f===null?e.first:f.next,I,c,i,u,v),d.set(c,f),E=[],p=[],r=f.next;continue}if(A&&Ie(n,I,i,v),n.e.f&M&&(X(n.e),o&&((B=n.a)==null||B.unfix(),(T??(T=new Set)).delete(n))),n!==r){if(s!==void 0&&s.has(n)){if(E.length<p.length){var D=p[0],x;f=D.prev;var y=E[0],S=E[E.length-1];for(x=0;x<E.length;x+=1)P(E[x],D,a);for(x=0;x<p.length;x+=1)s.delete(p[x]);m(e,y.prev,S.next),m(e,f,y),m(e,S,D),r=D,f=S,i-=1,E=[],p=[]}else s.delete(n),P(n,r,a),m(e,n.prev,n.next),m(e,n,f===null?e.first:f.next),m(e,f,n),f=n;continue}for(E=[],p=[];r!==null&&r.k!==c;)(_||!(r.e.f&M))&&(s??(s=new Set)).add(r),p.push(r),r=r.next;if(r===null)continue;n=r}E.push(n),f=n,r=n.next}if(r!==null||s!==void 0){for(var N=s===void 0?[]:U(s);r!==null;)(_||!(r.e.f&M))&&N.push(r),r=r.next;var g=N.length;if(g>0){var $=v&W&&h===0?a:null;if(o){for(i=0;i<g;i+=1)(V=N[i].a)==null||V.measure();for(i=0;i<g;i+=1)(Y=N[i].a)==null||Y.fix()}pe(e,N,$,d)}}o&&fe(()=>{var z;if(T!==void 0)for(n of T)(z=n.a)==null||z.apply()}),G.first=e.first&&e.first.e,G.last=f&&f.e}function Ie(l,e,a,u){u&L&&J(l.v,e),u&O?J(l.i,a):l.i=a}function Z(l,e,a,u,v,_,t,o,A){var h=(A&L)!==0,d=(A&he)===0,C=h?d?ce(v):K(v):v,r=A&O?K(t):t,s={i:r,v:C,k:_,a:null,e:null,prev:a,next:u};try{return s.e=Q(()=>o(l,C,r),w),s.e.prev=a&&a.e,s.e.next=u&&u.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),u!==null&&(u.prev=s,u.e.prev=s.e),s}finally{}}function P(l,e,a){for(var u=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==u;){var t=Ee(_);v.before(_),_=t}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{me as e,xe as i};
