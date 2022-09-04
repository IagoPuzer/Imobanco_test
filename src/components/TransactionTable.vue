<template>
  <table class="table-container">
    <thead class="content-thead bg-gray-200">
      <tr>
        <th>parcela</th>
        <th>valor</th>
        <th>descrição</th>
        <th>data de vencimento</th>
        <th>Nome</th>
        <th>id do pagador</th>
        <th>status</th>
        <th>data de criação</th>
        <th>id da transação</th>
      </tr>
    </thead>
    <tbody
      class="content-tbody"
    >
      <tr
        v-for="transaction in transactions.transactions"
        :key="transaction.id"
        @click="routerPayer(transaction.payer_id)"
      >
        <td>{{ transaction.parcela }}</td>
        <td>
          {{
            transaction.amount.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.due_date.split("-").reverse().join("/") }}</td>
        <td>{{ transaction.name }}</td>
        <td>
          {{ transaction.payer_id.slice(transaction.payer_id.length - 12) }}
        </td>
        <td>{{ transaction.status }}</td>
        <td>
          {{
            transaction.created_at
              .substring(0, 10)
              .split("-")
              .reverse()
              .join("/")
          }}
        </td>
        <td>
          {{ transaction.id.slice(transaction.id.length - 12) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";
import router from "../router";
export default {
  name: "TransactionsTable",

  //Chamando os dados salvos no store vuex
  computed: mapState(["transactions"]),

  //definindo a rota com o parametro payer_id
  methods: {
    routerPayer(payer) {
      router.push({ path: "/payerdetails", query: { payer_id: payer } });
    },
  },
};
</script>

<style scoped>

.table-container {
  @apply w-full divide-y divide-gray-200 table-auto
}
.content-thead th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider;
}
.content-tbody{
  @apply  bg-white divide-y divide-gray-200 cursor-pointer
}
.content-tbody td {
  @apply px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap;
}
</style>
