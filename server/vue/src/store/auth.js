import axios from "axios";
import config from "../config";
export default {
    namespaced: true,
    state: {
        token: "",
        user: false,
    },
    mutations: {
        setUser: (state, { user, token }) => {
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = false;
            state.token = false;
        },
    },
    getters: {
        user: (state) => state.user,
        token: (state) => state.token
    },
    actions: {
        async log_in({ commit }, { email, password }) {
            return await axios
                .post(config.apiUrl + "/api/auth/login", {
                    email,
                    password
                })
                .then(({ data }) => data)
                .then((response) => {
                    commit("setUser", { user: response.user, token: response.access_token });
                    window.axios.defaults.headers.common["Authorization"] =
                        "Bearer " + response.access_token;
                    return {
                        error: false,
                        token: response.access_token,
                    };
                })
                .catch(() => {
                    return {
                        error: true,
                    };
                });
        },
        logout({ commit }) {
            commit("logout");
        },
        checkAuth({ commit }, token) {
            if (token) {
                window.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
                return axios
                    .get(config.apiUrl + "/api/auth/me")
                    .then(({ data }) => data)
                    .then((response) => {
                        commit("setUser", { user: response, token });
                        return {
                            error: false,
                            token
                        };
                    })
                    .catch(() => {
                        return {
                            error: true,
                        };
                    });
            }
        },
    },
};