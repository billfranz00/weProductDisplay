import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import productService from "../services/product-service";

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  	async getProducts({ commit }) {
  		await productService()
        .then(res => {
          res.json().then(data => {
          	console.log(data);
          });
  			})
        .catch(err => {
          console.log(err);
        });
  	}
  },
  modules: {
  }
});
