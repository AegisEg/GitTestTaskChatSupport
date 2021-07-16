<template>
    <div class="message" :class="{ 'my-message': user.id == message.user_id }">
        <div class="content">
            <div class="message-head">
                <div class="name">
                    {{ message.author }}
                </div>
                <div class="time">
                    {{
                        new Date(message.date).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })
                    }}
                </div>
            </div>
            <div class="text">
                {{ message.content }}
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: "Messages",
    props: {
        message: {
            type: Object,
        },
    },
    computed: {
        ...mapGetters({
            user: "auth/user",
        }),
    },
};
</script>
<style>
.messages-list .message .text {
    word-break: break-word;
}
</style>