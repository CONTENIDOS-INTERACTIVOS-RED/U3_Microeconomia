(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68aab251"],{3997:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"acordion"},[t._l(t.elements,(function(e,a){return i("div",{key:e.id,staticClass:"mb-3",class:t.cardClass(e.id)},[i("div",{staticClass:"acordion__header mb-0",class:{"acordion__header--active":t.selected===e.id},on:{click:function(i){t.selected=t.selected!=e.id?e.id:0},mouseover:function(e){t.mostrarIndicador=(!t.mostrarIndicador||1!==a)&&t.mostrarIndicador}}},[i("div",{staticClass:"d-flex align-items-center"},["a"===t.tipo?i("div",{staticClass:"acordion__accion"},[i("div",{staticClass:"acordion__accion__btn--a h3 mb-0 me-3"},[t.selected===e.id?i("i",{staticClass:"fas fa-minus"}):i("i",{staticClass:"fas fa-plus"}),t.mostrarIndicador&&1===a?i("div",{staticClass:"indicador__container"},[i("div",{staticClass:"indicador--click indicador--sm"})]):t._e()])]):t._e(),i("div",{staticClass:"acordion__titulo"},[i("h4",{staticClass:"mb-0",domProps:{innerHTML:t._s(e.titulo)}})])]),"b"===t.tipo?i("div",{staticClass:"acordion__accion"},[i("div",{staticClass:"acordion__accion__btn--b h3 mb-0"},[t.selected===e.id?i("i",{staticClass:"fas fa-angle-up"}):i("i",{staticClass:"fas fa-angle-down"}),t.mostrarIndicador&&1===a?i("div",{staticClass:"indicador__container indicador--left"},[i("div",{staticClass:"indicador--click indicador--sm"})]):t._e()])]):t._e()]),i("div",{staticClass:"acordion__contenido",style:{height:t.rendered&&t.selected===e.id?t.getActiveHeight(e.id):0}},[i("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"elm.elm"}],ref:e.id,refInFor:!0,staticClass:"acordion__contenido__item py-3 pb-md-4"})])])})),i("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},s=[],n=i("f480"),d={name:"AcordionA",mixins:[n["a"]],props:{claseTarjeta:{type:String,default:""},tipo:{type:String,default:"a"}},data:function(){return{mostrarIndicador:!0}},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.domUpdated()}),5e3)}))},methods:{cardClass:function(t){var e=[];return this.claseTarjeta.length?e.push(this.claseTarjeta):e.push("tarjeta tarjeta--blanca"),this.selected===t&&e.push("acordion__activo"),e}}},r=d,c=i("2877"),o=Object(c["a"])(r,a,s,!1,null,null,null);e["default"]=o.exports},a15b:function(t,e,i){"use strict";var a=i("23e7"),s=i("44ad"),n=i("fc6a"),d=i("a640"),r=[].join,c=s!=Object,o=d("join",",");a({target:"Array",proto:!0,forced:c||!o},{join:function(t){return r.call(n(this),void 0===t?",":t)}})},f480:function(t,e,i){"use strict";var a=i("5530");i("d81d"),i("a15b");e["a"]={data:function(){return{mainId:Math.floor(Math.random()*Math.pow(10,10)),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}},watch:{menuState:function(){this.domUpdated()}},created:function(){window.addEventListener("resize",this.domUpdated)},mounted:function(){var t=this;this.$nextTick((function(){t.crearElementos()}))},computed:{menuState:function(){return this.$store.getters.isMenuOpen},navObj:function(){if(!this.elements.length||!this.secuencial)return{};var t=this.elements.map((function(t){return t.id})),e=t.indexOf(this.selected);if(e<0)return{};var i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy:function(){window.removeEventListener("resize",this.domUpdated)},updated:function(){var t=this;this.$nextTick((function(){t.getStateStr()!=t.stateStr&&t.crearElementos()}))},methods:{crearElementos:function(){var t=this;return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((function(e,i){var s=e.data&&e.data.attrs?e.data.attrs:[];return Object(a["a"])({id:t.mainId+i+1,elm:e.elm},s)})),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight:function(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr:function(){return this.$slots.default.map((function(t){return t.elm.outerHTML})).join("")},domUpdated:function(){var t=this;this.rendered=!1,setTimeout((function(){t.rendered=!0}),100)}}}}}]);
//# sourceMappingURL=chunk-68aab251.89342da2.js.map