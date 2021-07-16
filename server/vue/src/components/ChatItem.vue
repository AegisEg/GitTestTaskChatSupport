<template>
    <div
        class="dialog"
        @click="selectDialog"
        :class="{ active: currentDialog == dialog.id }"
    >
        <div class="name">{{ dialog.user.name }}</div>
        <div class="lastMessage">
            {{ dialog.last_message && dialog.last_message.content }}
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "ChatItem",
    props: {
        dialog: {
            typw: Object,
        },
    },
    computed: {
        ...mapGetters({
            currentDialog: "dialogs/currentDialog",
        }),
    },
    data() {
        return {};
    },
    methods: {
        ...mapActions({
            setCurrentDialog: "dialogs/setCurrentDialog",
        }),
        selectDialog() {
            this.setCurrentDialog(this.dialog.id);
        },
    },
};
</script>
<style>
.dialog {
    position: relative;
    padding: 5px 10px;
    border-bottom: 1px solid rgb(184, 184, 184);
    cursor: pointer;
    transition: background 0.3s;
}
.dialog:hover,
.dialog.active {
    background-color: rgb(242, 242, 242);
}
.dialog .name {
    font-weight: bold;
}
.dialog .lastMessage {
    font-size: 0.9rem;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>