import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";

export default createStore({
  state: {
    clients: [],
    transactions: [],
  },

  mutations: {
    //setando os dados nas variáveis clients e transactions
    loadTransactions(state, transactions) {
      state.transactions = transactions;
    },

    loadClients(state, clients) {
      state.clients = clients;
    },
  },

  actions: {
    //Realizando a importação dos dados JSON
    loadTransactions({ commit }) {
      axios.get("../../public/env/transactions.json").then((response) => {
        commit("loadTransactions", response.data);
      });
    },

    loadClients({ commit }) {
      axios.get("../../public/env/clients.json").then((response) => {
        commit("loadClients", response.data);
      });
    },
  },

  //pluggin que faz o salvamento dos dados no local storage para que os dados não se percam ao atualizar a pagina
  plugins: [
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ],

  

  modules: {},
});
