<template>
    <div class="wrap">
        <header>
            <a href="" class="home"><img src="@/assets/images/home_icon.png" alt=""></a>
        </header>
        <form class="loginBox" action="" v-on:submit.prevent="managerLogin">
            <p>관리자 계정</p>
            <input  type="password" name="password" v-model="password" id="pwInput" placeholder="비밀번호를 입력하세요.">
            


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
        return {
            password:""
        };
    },
    methods: {
        managerLogin(){
            if(this.password=='1234'){
                this.$router.push("/setting");
                this.password="";
            }else{
                alert("비밀번호를 확인해주세요");
                this.password="";
            }
        }
    },
    created() { }
};
</script>