<template>
  <div id="app">
      <h2>Filtros e Mixins</h2>
      <hr>
      <strong><p>{{cpf | formatarCpf | inverter}}</p></strong>
      <input type="text" :value="cpf | formatarCpf">
      <hr>
      <Frutas/>
      <hr>

      <div>
          <ul>
              <li v-for="fruta in frutas" :key="fruta">
                  {{fruta}}
              </li>
          </ul>
          <input type="text" v-model="fruta" @keydown.enter="add">
      </div>
  </div>
</template>

<script>
    import Frutas from './components/Frutas'

export default {
  name: 'app',
    components: {Frutas},
    data() {
        return {
            cpf: '06265003119',
            fruta: '',
            frutas: ['Abacaxi', 'Laranja', 'Maracujá']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta);
            this.fruta = '';
        }
    },
    filters: {
        formatarCpf(valor) {
            const arr = valor.split('');
            arr.splice(3, 0, '.');
            arr.splice(7, 0, '.');
            arr.splice(11, 0, '-');
            return arr.join('')
        }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
    font-size: 1.45em;
}

input {
    font-size: 1.40em;
}
</style>
