<template>
    <div>
        <div class="header-chat">Вы общаетесь с Администратором</div>
        <messages-component :user-id="user.id" :messages="messages" />
        <action-panel />
    </div>
</template>
<script>
import axios from "axios";
const MessagesComponent = () => import("../components/MessagesComponent.vue");
const ActionPanel = () => import("../components/ActionPanel.vue");
export default {
    name: "ChatPage",
    components: {
        ActionPanel,
        MessagesComponent,
    },
    props: {
        initMessages: {
            type: Array,
            default: [],
        },
        user: {
            type: Object,
        },
        lastTransaction: {
            default: false,
        },
    },
    created() {
        this.messages = this.initMessages.map((item) => {
            return {
                ...item,
                date: new Date(item.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };
        });

        this.lastTransc = this.lastTransaction;
    },
    mounted() {
        this.longPollingMessages();
    },
    data: () => {
        return {
            messages: [],
            newMessage: null,
            lastTransc: false,
        };
    },
    methods: {
        longPollingMessages() {
            axios
                .get("/wait-messages", {
                    params: {
                        last_id: this.lastTransc,
                    },
                })
                .then((res) => res.data)
                .then((data) => {
                    if (data.messages.length != 0) {
                        this.lastTransc = data.lastTransaction;
                        data.messages.forEach((item) => {
                            let message = {
                                ...item,
                                date: new Date(item.date).toLocaleTimeString(
                                    [],
                                    {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    }
                                ),
                            };
                            this.messages.push(message);
                        });
                    }
                    this.longPollingMessages();
                });
        },
    },
};
</script>
