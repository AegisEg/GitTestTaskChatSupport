<template>
    <div class="container">
        <div class="chat-section row">
            <div class="col-3 dialogs-list">
                <div class="title text-center">Диалоги</div>
                <vue-custom-scrollbar
                    ref="scroll"
                    class="scroll-area chat-list-scroll py-5"
                    :settings="settings"
                >
                    <loading v-if="isLoadingDialogs" />
                    <div v-else>
                        <chat-item
                            v-for="(item, index) in dialogs"
                            @selectDialog="selectDialog"
                            v-show="item.last_message"
                            :key="index"
                            :dialog="item"
                        />
                    </div>
                </vue-custom-scrollbar>
            </div>
            <div class="col-9 message-box">
                <message-box />
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SocketController from "../controllers/SocketController";
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
const ChatItem = () => import("../components/ChatItem.vue");
const MessageBox = () => import("../components/MessageBox.vue");
const Loading = () => import("../components/Loading.vue");
export default {
    name: "ChatsPage",
    components: {
        vueCustomScrollbar,
        ChatItem,
        MessageBox,
        Loading,
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
    computed: {
        ...mapGetters({
            token: "auth/token",
            dialogs: "dialogs/dialogs",
            isLoadingDialogs: "dialogs/isLoadDialogs",
        }),
    },
    mounted() {
        SocketController.init(this.token);
        this.initDialogs();
    },
    methods: {
        ...mapActions({
            initDialogs: "dialogs/initDialogs",
        }),
        selectDialog(id) {},
    },
};
</script>
<style scoped>
.container {
    max-width: 1440px;
}
.chat-list-scroll {
    height: calc(100vh - 131px);
    max-height: calc(100vh - 131px);
}
.message-box,
.dialogs-list {
    background-color: #fff;
    padding: 10px;
    border: 1px solid rgb(155, 155, 155);
}
</style>
