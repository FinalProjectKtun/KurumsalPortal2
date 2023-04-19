import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      isModalOpen: false,
    };
  },

  mutations: {
    increment(state) {
      state.count++;
    },

    OPEN_MODAL(state) {
      state.isModalOpen = true;
    },

    CLOSE_MODAL(state) {
      state.isModalOpen = false;
    },
  },

  actions: {
    openModal({ commit }) {
      commit("OPEN_MODAL");
    },

    closeModal({ commit }) {
      commit("CLOSE_MODAL");
    },
  },
});

export default store;
