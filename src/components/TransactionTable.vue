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
                    <th>id da transição</th>
                </tr>
            </thead>
            <tbody class="content-table bg-white divide-y divide-gray-200">
                <tr>
                    <td> <router-link to="/payerdetails">1</router-link> </td>
                    <td> <router-link to="/payerdetails"> R$ 14.733,34</router-link> </td>
                    <td> <router-link to="/payerdetails">parcelas</router-link> </td>
                    <td> <router-link to="/payerdetails">24/01/2023</router-link> </td>
                    <td> <router-link to="/payerdetails">Quadra 1 - Lote 1</router-link> </td>
                    <td> <router-link to="/payerdetails">e3b292c5e3a5</router-link> </td>
                    <td> <router-link to="/payerdetails">em dia</router-link> </td>
                    <td> <router-link to="/payerdetails">24/08/2022</router-link> </td>
                    <td> <router-link to="/payerdetails">c2973401538f</router-link> </td>
                </tr>
            </tbody>
        </table>
</template>

<script>
export default {
    name: 'TransactionsTable'
}
</script>

<style scoped>
.title-table th {
    @apply  px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider;
}

.content-table td {
    @apply px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap ;
}

</style>