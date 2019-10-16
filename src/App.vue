<template>
  <div id="app">
      <h2>Filtros e Mixins</h2>
      <hr>
      <strong><p>{{cpf | formatarCpf}}</p></strong>

  </div>
</template>

<script>


export default {
  name: 'app',
    data() {
        return {
            cpf: '06265003119'
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
</style>
