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
import send from "../images/send.svg";
export default {
    name: "ActionPanel",
    data() {
        return {
            text: "",
            send: send,
        };
    },
    methods: {
        async sendMessage(e) {
            e.preventDefault();
            await axios.post("/send-message", {
                message: this.text,
                date: new Date().getTime(),
            });
            this.text = "";
        },
    },
};
</script>