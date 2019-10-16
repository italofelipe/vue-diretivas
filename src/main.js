import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Primeiro parâmetro é uma string contendo o idenitificador referente ao filtro
Vue.filter('inverter', function (valor) {
    return valor.split('').reverse().join('')
});

new Vue({
  render: h => h(App),
}).$mount('#app');
