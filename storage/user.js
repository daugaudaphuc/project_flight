// src/store/user.js

const state = {
    userName: null,
};

const mutations = {
    setUserName(state, userName) {
        state.userName = userName;
    },
};

const actions = {
    setUserName({ commit }, userName) {
        commit("setUserName", userName);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
