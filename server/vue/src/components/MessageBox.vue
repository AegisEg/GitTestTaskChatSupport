<template>
    <div v-if="currentDialog !== false">
        <div class="header-chat">Вы общаетесь с Администратором</div>
        <loading v-if="isLoadMessages" />
        <messages-component v-else />
        <action-panel />
    </div>
</template>
<script>
import { mapGetters } from "vuex";
const Loading = () => import("./Loading.vue");
const MessagesComponent = () => import("./MessagesComponent.vue");
const ActionPanel = () => import("./ActionPanel.vue");
export default {
    name: "MessageBox",

    components: {
        ActionPanel,
        MessagesComponent,
        Loading,
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            dialogs: "dialogs/dialogs",
            isLoadMessages: "dialogs/isLoadMessages",
            currentDialog: "dialogs/currentDialog",
        }),
    },
};
</script>
<style>
.header-chat {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5694ce;
    min-height: 60px;
    color: #fff;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}
.messages-list {
    background-color: #fff;
}
.messages-list .scroll-area {
    position: relative;
    margin: auto;
    height: calc(100vh - 225px);
    padding: 10px 20px;
}
.messages-list .scroll-area .message.my-message {
    text-align: right;
}
.messages-list .scroll-area .message .content {
    text-align: left;
    display: inline-block;
    padding: 10px;
    width: auto;
    min-width: 160px;
    background-color: #dadada;
    border-radius: 15px;
    margin-bottom: 20px;
}
.messages-list .scroll-area .message .content .message-head {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -3px;
}
.messages-list .scroll-area .message .content .message-head div {
    padding: 0 3px;
}
.action-panel {
    margin-top: 15px;
    position: relative;
}
.action-panel .send_btn {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30px;
    height: 30px;
    right: 15px;
    background-color: #dadada;
    border-radius: 50%;
    margin: auto;
    padding: 5px;
    padding-left: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.action-panel .send_btn img {
    width: 100%;
}
.action-panel input {
    width: 100%;
    height: 42px;
    border-radius: 10px;
    outline: none;
    border: 1px solid #dadada;
    padding-right: 60px;
    padding-left: 15px;
}
</style>