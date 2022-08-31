<template>
  <div class="bg-white pt-6 shadow rounded-md mt-14 w-min m-auto">
    <div class="ml-2">
      <h4 class="font-medium text-gray-600 tracking-wider">
        Informações do cliente
      </h4>
    </div>
    <div class="payer-details mt-4 ml-2">
      <ul>
        <li>Nome:</li>
        <li>Documento:</li>
        <li>Telefone:</li>
        <li>Email:</li>
        <li>data de criação:</li>
        <li>id:</li>
      </ul>
      <h4 class="font-medium text-gray-600 tracking-wider mt-2">
        Transações do cliente:
      </h4>
    </div>
    <div class="mt-6 m-auto overflow-auto">
      <table class="w-full divide-y divide-gray-200">
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
            <th>id da transição</th>
          </tr>
        </thead>
        <tbody class="content-table bg-white divide-y divide-gray-200">
          <tr>
            <td>1</td>
            <td>R$ 14.733,34</td>
            <td>parcelas</td>
            <td>24/01/2023</td>
            <td>Quadra 1 - Lote 1</td>
            <td>e3b292c5e3a5</td>
            <td>em dia</td>
            <td>24/08/2022</td>
            <td>c2973401538f</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "payerdetails",

  components: {},
};
</script>

<style scoped>
.payer-details li {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider;
}

.title-table th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider;
}

.content-table td {
  @apply px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap;
}
</style>
