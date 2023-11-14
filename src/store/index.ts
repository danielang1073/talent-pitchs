import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text: "hola mundo",
    subText: "jose daniel",
    vacancies: [],
  },

  getters: {
    mensaje({ text, subText }) {
      return text + " " + subText;
    },
  },
  mutations: {
    changeText(state) {
      state.text = "hola marte";
    },
    changeVacancies(state, payload) {
      state.vacancies = payload.vacancies;
    },
  },
  actions: {
    actionChangeText(context) {
      context.commit("changeText");
    },
    actionChangeVacancies(context, payload) {
      context.commit("changeVacancies", payload);
    },
  },
  modules: {},
});
