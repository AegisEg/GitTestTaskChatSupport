<template>
    <v-app>
        <div id="appBody">
            <header v-if="auth">
                <ul class="head-menu">
                    <li>
                        <router-link to="users"
                            ><v-btn> Диалоги </v-btn></router-link
                        >
                    </li>

                    <li class="logout">
                        <v-btn @click="logoutUser"> Выход </v-btn>
                    </li>
                </ul>
            </header>
            <router-view></router-view>
        </div>
    </v-app>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "App",
    computed: {
        ...mapGetters({
            auth: "auth/user",
        }),
    },
    methods: {
        ...mapActions({
            logout: "auth/logout",
        }),
        logoutUser: function () {
            this.logout().then(() => {
                this.$cookies.remove("apiToken");
                this.$router.push("/login");
            });
        },
    },
};
</script>
<style>
#appBody {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(190, 255, 255, 0.4)
    );
    background-position: center;
    background-repeat: no-repeat;
    min-width: 100vw;
    min-height: 100vh;
    padding-top: 60px;
}
.head-menu {
    display: flex;
    justify-content: space-between;
}
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    padding: 10px 25px;
}
header a {
    color: #000;
    text-decoration: none;
}
header ul {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: flex-end;
    list-style: none;
    width: 100%;
    max-width: 1440px;
}
.logout {
    color: #1976d2;
    cursor: pointer;
}
</style>