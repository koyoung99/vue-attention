<template>
    <div class="wrap">
        <header class="chartMainHeader">
            <router-link to="/setting" class="home"><img src="@/assets/images/home_icon.png"></router-link>
            <ul>
                <li><router-link to="/chart/coffeeView">커피</router-link></li>
                <li><router-link to="">논커피</router-link></li>
                <li><router-link to="">밀크쉐이크</router-link></li>
                <li><router-link to="">스무디/프라페</router-link></li>
                <li><router-link to="">디저트</router-link></li>
            </ul>
        </header>
        <!-- <h1>매출현황</h1> -->

        <div>
            <div class="chartMainGorup">
                <div class="titleGroup">
                    <label>
                        <router-link to="/chart/main"> 일일매출현황</router-link>
                    </label>
                </div>
                <div class="chartMainGorup2">
                    <table>
                        <!-- <tr>
                                <td rowspan="8">총 매출액</td>
                            </tr> -->
                        <tr>
                            <td colspan="2">총매출</td>
                            <!-- <th>매출액</th> -->
                        </tr>
                        <tr>
                            <td colspan="2">10,000,000원</td>
                        </tr>
                        <tr>
                            <td>카테고리명</td>
                            <td>수량</td>
                            <td>금액</td>
                        </tr>
                        <tr>
                            <td>커피</td>
                            <td>133잔</td>
                            <td>5,000,000원</td>
                        </tr>
                        <tr>
                            <td>논커피</td>
                            <td>133잔</td>
                            <td>5,000,000원</td>
                        </tr>
                        <tr>
                            <td>밀크쉐이크</td>
                            <td>133잔</td>
                            <td>5,000,000원</td>
                        </tr>
                        <tr>
                            <td>스무디/프라페</td>
                            <td>133잔</td>
                            <td>5,000,000원</td>
                        </tr>
                        <tr>
                            <td>디저트</td>
                            <td>133잔</td>
                            <td>5,000,000원</td>
                        </tr>

                    </table>

                </div>

            </div> <!-- categoryGroup2 -->
        </div>

    </div>
</template>


<script>
import '@/assets/css/chartMain.css';

export default {
    name: "ChartMainView",
    components: {
    },
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>
