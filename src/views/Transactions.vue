<template>
  <div class="container">
    
    <div>
      <h4>Transações</h4>
    </div>

    <div class="transactionTable-container">
      <TransactionTable />
    </div>
  </div>
</template>

<script>
import TransactionTable from "../components/TransactionTable.vue";
export default {
  name: "transactions",

  components: {
    TransactionTable,
  },

  //renderizando os dados vindos do vuex quando a pagina é criada
  created() {
    this.$store.dispatch("loadTransactions");
  },
};
</script>

<style scoped>
.container {
  @apply bg-white pt-6 shadow rounded-md mt-14 w-min mx-auto mb-10;
}

.container h4{
  @apply text-lg leading-6 font-medium text-gray-900
}

.transactionTable-container {
  @apply  mt-6 m-auto overflow-auto w-full
}
</style>
