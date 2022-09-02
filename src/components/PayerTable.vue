<template>
  <table class="w-full divide-y divide-gray-200 table-auto">
    <thead class="title-table bg-gray-200">
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
    <tbody class="content-table bg-white divide-y divide-gray-200">
      <tr v-for="transaction in this.client_transactions" :key="transaction.id">
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
        <td>{{ transaction.id.slice(transaction.id.length - 12) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "payertable",

  //leitura dos dados vindo do store
  computed: mapState(["transactions"]),

  data() {
    return {
      payer_id: "",
      client_transactions: [],
    };
  },

  //tratamento para que seja realizado a leitura dos dados de acordo com o id específico do cliente. Utilizando query params.
  mounted() {
    if (this.$route.query.payer_id) {
      this.payer_id = this.$route.query.payer_id;
      this.client_transactions =
        this.$store.state.transactions.transactions?.filter(
          (item) => item.payer_id == this.payer_id
        );
    }
  },
};
</script>

<style scoped>
.title-table th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider;
}
.content-table td {
  @apply px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap;
}
</style>
