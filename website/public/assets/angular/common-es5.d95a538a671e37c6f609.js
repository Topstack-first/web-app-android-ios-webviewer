!function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{TVUz:function(n,e,r){"use strict";r.d(e,"a",function(){return s});var a=r("VJzw"),i=r("fXoL"),o=r("tk/3"),s=function(){var n=function(){function n(t){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.http=t}var e,r,i;return e=n,(r=[{key:"getInvester",value:function(t){return this.http.get(a.a.API_BASE_URL+"/api/investers/"+t)}},{key:"getBriefcases",value:function(){return this.http.get(a.a.API_BASE_URL+"/api/briefcases")}},{key:"sendTransaction",value:function(t){return this.http.post(a.a.API_BASE_URL+"/api/transactions",t)}},{key:"postUser",value:function(t){return this.http.post(a.a.API_BASE_URL+"/api/investers",t)}},{key:"postBriefcase",value:function(t){return this.http.post(a.a.API_BASE_URL+"/api/briefcases",t)}},{key:"postTransaction",value:function(t){return this.http.post(a.a.API_BASE_URL+"/api/transactions",t)}}])&&t(e.prototype,r),i&&t(e,i),n}();return n.\u0275fac=function(t){return new(t||n)(i.Yb(o.b))},n.\u0275prov=i.Kb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()}}])}();