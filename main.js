import Vue from 'vue';
import MeuComponente from './MeuComponente.vue';

Vue.config.productionTip = false;

Vue.component('meu-componente', MeuComponente);

new Vue({
    el: '#app'
});
