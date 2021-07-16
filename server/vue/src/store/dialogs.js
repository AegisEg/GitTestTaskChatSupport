import axios from "axios";
import store from ".";
import config from "../config";
import SocketController from "../controllers/SocketController";

export default {
    namespaced: true,
    state: {
        dialogs: [],
        isLoadMessages: false,
        isLoadDialogs: true,
        currentDialog: false
    },
    mutations: {
        setDialogs: (state, dialogs) => {
            state.dialogs = dialogs;
            state.isLoadDialogs = false
        },
        addNewChat: (state, dialog) => {
            state.dialogs = [dialog, ...state.dialogs];
        },
        addLastMessage: (state, { dialogId, message }) => {
            state.dialogs = state.dialogs.map((item) => {
                if (item.id === dialogId) {
                    return {
                        ...item,
                        last_message: message
                    }
                } else
                    return item;
            })
            console.log(state.dialogs)
        },
        addNewMessage: (state, { dialogId, message }) => {
            state.dialogs = state.dialogs.map((item) => {
                if (item.id === dialogId) {
                    return {
                        ...item,
                        messages: [...item.messages, message],
                        last_message: message
                    }
                } else
                    return item;
            })
        },
        setDialogMessages: (state, { dialogId, messages }) => {
            state.dialogs = state.dialogs.map((item) => {
                if (item.id === dialogId) {
                    return {
                        ...item,
                        messages,
                        isGetted: true
                    }
                } else
                    return item;
            })
        },
        setCurrentDialog: (state, id) => { state.currentDialog = id; },
        setLoadingMessage: (state, status) => { state.isLoadMessages = status; },

    },
    getters: {
        dialogs: (state) => state.dialogs,
        isLoadDialogs: (state) => state.isLoadDialogs,
        isLoadMessages: (state) => state.isLoadMessages,
        currentDialog: (state) => state.currentDialog,
    },
    actions: {
        setCurrentDialog({ commit, state }, dialogId) {
            let dialog = state.dialogs.find(item => item.id === dialogId);
            if (dialog) {
                commit("setCurrentDialog", dialogId);
                if (!dialog.isGetted) {
                    commit("setLoadingMessage", true);
                    axios.get(`${config.apiUrl}/api/dialog/messages`, {
                        params: {
                            dialog_id: dialogId
                        }
                    }).then(res => res.data).then((messages) => {
                        commit("setDialogMessages", { dialogId, messages });
                        commit("setLoadingMessage", false);
                    });
                }
            }
        },
        appendMessage({ commit, state }, { message, dialogId }) {
            let dialogState = state.dialogs.find(item => item.id == dialogId);
            if (dialogState) {
                if (dialogState.isGetted)
                    commit("addNewMessage", { dialogId, message })
                else
                    commit("addLastMessage", { dialogId, message })
            } else {
                let dialog = {
                    id: dialogId,
                    user: {
                        name: message.author,
                    },
                    last_message: message,

                }
                commit("addNewChat", dialog);
            }
        },
        sendMessage({ commit }, { dialogId, message, token }) {
            SocketController.sendMessage(SocketController.getSocketId(), dialogId, message, token);
            commit("addNewMessage", { dialogId, message })
        },
        initDialogs({ commit }) {
            return axios.get(`${config.apiUrl}/api/dialog/getAll`).then(res => res.data).then((dialogs) => {
                this.dialogs = dialogs;
                commit("setDialogs", dialogs)
            });
        }
    },
};