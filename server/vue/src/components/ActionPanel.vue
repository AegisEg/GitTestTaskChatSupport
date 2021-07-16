<template>
    <div class="action-panel">
        <form @submit="sendMessage">
            <input type="text" v-model="text" />
            <div class="send_btn" @click="sendMessage">
                <img :src="send" alt="" />
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import send from "../images/send.svg";
export default {
    name: "ActionPanel",
    data() {
        return {
            text: "",
            send: send,
        };
    },
    computed: {
        ...mapGetters({
            user: "auth/user",
            token: "auth/token",
            currentDialog: "dialogs/currentDialog",
        }),
    },
    methods: {
        ...mapActions({
            sendDialogMessage: "dialogs/sendMessage",
        }),
        async sendMessage(e) {
            e.preventDefault();console.log(new Date().getTime())
            let message = {
                author: this.user.name,
                content: this.text,
                date: new Date().getTime(),
                user_id: this.user.id,
            };
            this.sendDialogMessage({
                dialogId: this.currentDialog,
                message,
                token: this.token,
            });
            this.text = "";
        },
    },
};
</script>