<template>
    <div class="messages-list">
        <vue-custom-scrollbar
            ref="scroll"
            class="scroll-area"
            :settings="settings"
        >
            <div>
                <message
                    v-for="(item, index) in messages"
                    :user-id="userId"
                    :key="index"
                    :message="item"
                />
            </div>
        </vue-custom-scrollbar>
    </div>
</template>
<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
const Message = () => import("./Message.vue");
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
    name: "MessagesComponent",
    props: {
        messages: {
            type: Array,
            default: [],
        },
        userId: {
            type: Number,
        },
    },
    components: {
        vueCustomScrollbar,
        Message,
    },

    updated() {
        this.scrollToBottom();
    },
    methods: {
        scrollToBottom() {
            this.$refs.scroll.$el.scrollTop =
                this.$refs.scroll.$el.scrollHeight -
                this.$refs.scroll.$el.clientHeight;
        },
    },
    data() {
        return {
            settings: {
                suppressScrollY: false,
                suppressScrollX: true,
                wheelPropagation: false,
            },
        };
    },
};
</script>