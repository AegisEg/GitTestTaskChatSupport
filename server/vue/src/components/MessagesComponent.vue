<template>
    <div class="messages-list">
        <vue-custom-scrollbar
            ref="scroll"
            class="scroll-area"
            :settings="settings"
        >
            <message
                v-for="(item, index) in messages"
                :key="index"
                :message="item"
            />
        </vue-custom-scrollbar>
    </div>
</template>
<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
const Message = () => import("./Message.vue");
import "vue-custom-scrollbar/dist/vueScrollbar.css";
import { mapGetters } from "vuex";
export default {
    name: "MessagesComponent",
    components: {
        vueCustomScrollbar,
        Message,
    },
    computed: {
        ...mapGetters({
            currentDialog: "dialogs/currentDialog",
            dialogs: "dialogs/dialogs",
        }),
        messages() {
            return this.dialogs.find((item) => item.id == this.currentDialog)
                .messages;
        },
    },
    mounted() {
        this.scrollToBottom();
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