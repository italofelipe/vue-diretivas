<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">
                {{fruta}}
            </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
    import frutasMixins from '../mixins/frutasMixins';
    export default {
        name: "Frutas",
        mixins: [frutasMixins],

    }

</script>

<style scoped>

    li {
        list-style: none;
    }
</style>
