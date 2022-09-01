<template>
    <div class="payer-details mt-4 ml-2" v-for="client in clients" :key="client">
      <ul>
        <li>Nome: {{client.name}}</li>
        <li>Documento:</li>
        <li>Telefone:</li>
        <li>Email:</li>
        <li>data de criação:</li>
        <li>id:</li>
      </ul>  
    </div>
</template>

<script>
  import {mapState} from 'vuex'
export default {
    name: "payerinfo",

    computed: mapState([
        'clients'
    ]),
}
</script>

<style scoped>

.payer-details li {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider;
}

</style>