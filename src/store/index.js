import { createStore } from 'vuex'
import { loginRequest } from '@/utils/api';
import { registrationRequest } from '@/utils/api';

export default createStore({
  state: {
    token: localStorage.getItem('user-token') || '',
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  mutations: {
    AUTH_SUCCESS: (state, token) => {
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.token = '';
    }
  },
  actions: {
    REG_REQUEST: ({ commit, rootState }, user) => {
      rootState.status = 'loading';
      return new Promise((resolve, reject) => {
        registrationRequest(user)
            .then((token) => {
              commit('AUTH_SUCCESS', token);
              localStorage.setItem('user-token', token);
              resolve();
            })
            .catch(() => {
              commit('AUTH_ERROR');
              localStorage.removeItem('user-token');
              reject();
            });
          rootState.status = '';
      });
    },

    AUTH_REQUEST: ({ commit }, user) => {
      return new Promise((resolve, reject) => {
        loginRequest(user)
            .then((token) => {
              commit('AUTH_SUCCESS', token);
              localStorage.setItem('user_token', token);
              resolve();
            })
            .catch (() => {
              commit('AUTH_ERROR');
              localStorage.removeItem('user_token');
              reject();
            });
      });
    },
  },
  modules: {
  }
})
