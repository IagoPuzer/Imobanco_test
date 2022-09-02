<template>
  <div
    class="payer-details mt-4 ml-2"
    v-for="client in this.client_info"
    :key="client.id"
  >
    <ul class="grid grid-rows-2 grid-flow-col gap-2">
      <li>Nome: {{ client.name }}</li>
      <li>Documento: {{ client.document}}</li>
      <li>Telefone: {{ client.phone }}</li>
      <li>Email: {{ client.email }}</li>
      <li>
        data de criação:
        {{ client.created_at.substring(0, 10).split("-").reverse().join("/") }}
      </li>
      <li>id: {{ client.id.slice(client.id.length - 12) }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "payerinfo",

  computed: mapState(["clients"]),

  data() {
    return {
      id: "",
      client_info: [],
      
    };
  },

  mounted() {
    if (this.$route.query.payer_id) {
      this.id = this.$route.query.payer_id;
      this.client_info = this.$store.state.clients.client_client?.filter(
        (item) => item.id == this.id
      );
    }
  },

  methods: {
    validatorCpfCnpj(){
      if(this.clients.client_clients.document == 11){  
        return this.clients.client_clients.document?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
      } else{
        return this.clients.client_clients.document?.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5")
      }
    },
  },
};
</script>

<style scoped>
.payer-details li {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider;
}
</style>
