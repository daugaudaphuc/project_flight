<template>
    <main>
        <nav :key="navKey" class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img src="https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png"
                    style="height: 60px;" class="navbar-brand" href="#">
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link exact-active-class="active" to="/" class="nav-item nav-link">Trang chủ</router-link>
                        <router-link exact-active-class="active" to="/flight" class="nav-item nav-link">Tra cứu vé máy
                            bay</router-link>
                    </div>
                    <div class="navbar-nav">
                        <router-link v-if="user" exact-active-class="" to="/" class="nav-item nav-link" @click="logout">Xin
                            chào, {{ user }}</router-link>


                        <a v-if="user" exact-active-class="" to="" class="nav-item nav-link" style="cursor:pointer"
                            @click="logout">Đăng xuất</a>
                        <div v-else>
                            <router-link exact-active-class="" to="/signin" class="nav-item nav-link" @click="logout">Đăng
                                nhập</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
export default {

    data() {
        return {
            user: null,
        };
    },
    created() {
        const authToken = localStorage.getItem('auth_token');
        this.user = authToken;
    },
    methods: {

        logout() {
            localStorage.removeItem('auth_token');
            location.reload();
            this.$router.push('/signin');

        },

    },
};
</script>
