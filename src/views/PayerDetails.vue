<template>
  <div class="container">
    
    <div>
      <h4>Informações do cliente</h4>
    </div>

    <div class="payerInfo-container">
      <PayerInfo />
    </div>

    <div>
      <h4>Transações do cliente</h4>
    </div>

    <div class="payerTable-container">
      <PayerTable />
    </div>
  </div>
</template>

<script>
import PayerInfo from "../components/PayerInfo.vue";
import PayerTable from "../components/PayerTable.vue";

export default {
  name: "payerdetails",

  components: {
    PayerTable,
    PayerInfo,
  },

  //renderizando os dados vindos do vuex quando a pagina é criada
  created() {
    this.$store.dispatch("loadClients");
  },
};
</script>

<style scoped>
.container {
  @apply bg-white pt-6 shadow rounded-md mt-14 w-min m-auto;
}

.container h4 {
  @apply text-lg leading-6 font-medium text-gray-900;
}

.payerInfo-container {
  @apply  p-10 border m-4 shadow;
}

.payerTable-container {
  @apply  mt-6 m-auto overflow-auto w-full;
}


</style>
