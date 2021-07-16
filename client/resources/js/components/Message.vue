<template>
    <div class="message" :class="{ 'my-message': userId == message.user_id }">
        <div class="content">
            <div class="message-head">
                <div class="name">
                    {{ message.author }}
                </div>
                <div class="time">
                    {{ message.date }}
                </div>
            </div>
            <div class="text">
                {{ message.content }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Messages",
    props: {
        message: {
            type: Object,
        },
        userId: {
            type: Number,
        },
    },
};
</script>