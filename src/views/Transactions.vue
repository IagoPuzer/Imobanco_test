<template>
  <div class=" container">
    <div class="px-4">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Transações</h2>
    </div>
    <div class="mt-6 m-auto overflow-auto">
       <TransactionTable />
    </div>
  </div>
</template>

<script>
import TransactionTable from '../components/TransactionTable.vue'

export default {
    name: "transactions",

    components: {
        TransactionTable,
    }

};
</script>

<style>
    .container {
        @apply bg-white pt-6 shadow rounded-md mt-14 w-min m-auto;
    }

    .div-safada {
        border: 1px solid red;
    }
</style>