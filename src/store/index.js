import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    clients: [],
    transactions: [],
  },

  mutations: {
    loadTransactions(state, transactions) {
      state.transactions = transactions;
    },

    loadClients(state, clients) {
      state.clients = clients;
    },
  },

  actions: {
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

  modules: {},
});
