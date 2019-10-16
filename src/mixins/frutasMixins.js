export default {
    data() {
        return {
            fruta: '',
            frutas: ['Abacaxi', 'Laranja', 'Maracujá']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta);
            this.fruta = '';
        }
    }
}
