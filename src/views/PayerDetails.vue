<template>
  <div class="container">
    
    <div class="ml-2">
      <h4>
        Informações do cliente:
      </h4>
    </div>
    
    <PayerInfo />
    
    <div class="ml-2">
      <h4>
        Transações do cliente:
      </h4>
    </div>
    
    <div class="mt-6 m-auto overflow-auto">
      <PayerTable />
    </div>
    
  </div>

</template>

<script>

import PayerInfo from '../components/PayerInfo.vue'
import PayerTable from '../components/PayerTable.vue'

export default {
  name: "payerdetails",

  components: {
    PayerInfo,
    PayerTable,
  },

  created(){
    this.$store.dispatch('loadClients')
    }
};
</script>

<style scoped>
  .container {
    @apply bg-white pt-6 shadow rounded-md mt-14 w-min m-auto;
  }

  .container h4 {
    @apply text-lg leading-6 font-medium text-gray-900
  }

</style>
