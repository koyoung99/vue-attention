<template>
    <div class="wrap">
        <!-- <img class="hostImg" src="@/assets/images/logo.png"> -->
        <div id="settingMenuBtn">
            <span class="SettingHomeImg"><router-link to="" class="home">
                    <img src="@/assets/images/home_icon.png"></router-link>
            </span>
            <span class="backImg"><router-link to="">
                    <img src="@/assets/images/arrow.png"></router-link>
            </span>
            <div>
                <button><router-link to="/chart/main">통계</router-link></button>
                <button><router-link to="">메뉴등록</router-link></button>
            </div>
        </div>
    </div>
</template>


<script>
import '@/assets/css/settingMenu.css'

export default {
    name: "SettingMenuView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>
