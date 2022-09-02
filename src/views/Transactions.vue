<template>
  <div class="container">
    <div class="px-4">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Transações</h2>
    </div>

    <div class="mt-6 m-auto overflow-auto w-full">
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

  //Renderizando os dados do JSON transactions
  created() {
    this.$store.dispatch("loadTransactions");
  },
};
</script>

<style scoped>
.container {
  @apply bg-white pt-6 shadow rounded-md mt-14 w-min mx-auto mb-10;
}
</style>
