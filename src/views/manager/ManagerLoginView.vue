<template>
    <div class="wrap">
        <header>
            <a href="" class="home"><img src="@/assets/images/home_icon.png" alt=""></a>
        </header>
        <form class="loginBox" action="">
            <p>관리자 계정</p>
            <input type="password" name="password" id="pwInput" placeholder="비밀번호를 입력하세요.">

            <div class="btnBox">
                <button class="loginBtn" type="submit">로그인</button>
            </div>
        </form>
    </div>
</template>
<script>
import "@/assets/css/ManagerLogin.css"

export default {
    name: "ManagerLoginView",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>