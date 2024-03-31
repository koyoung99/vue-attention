<template>
    <div class="wrap">
        <header class="coffeeHeader">
            <router-link to="" class="home"><img src="@/assets/images/home_icon.png"></router-link>
            <ul>
                <li><router-link to="/chart/coffeeView">커피</router-link></li>
                <li><router-link to="/chart/nonCoffeeView">논커피</router-link></li>
                <li><router-link to="/chart/milkShakeView">밀크쉐이크</router-link></li>
                <li><router-link to="/chart/smoouthie">스무디/프라페</router-link></li>
                <li><router-link to="/chart/desert">디저트</router-link></li>
            </ul>
        </header>

        <div>
            <div class="categoryGroup02">
                <div class="titleGroup">
                    <label>
                        <router-link to="/chart/main"> 매출현황</router-link>
                    </label>
                </div>
                <div class="chartListGorup">
                    <table>
                        <thead>
                            <tr>
                                <th>no.</th>
                                <th>제품명</th>
                                <th>총 수량</th>
                                <th>총 금액</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>Hot카페라뗴</td>
                                <td>30</td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Hot카페라뗴</td>
                                <td>30</td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Hot카페라뗴</td>
                                <td>30</td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Hot카페라뗴</td>
                                <td>30</td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Hot카페라뗴</td>
                                <td>30</td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Hot카페라뗴</td>
                                <td>30</td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Hot카페라뗴</td>
                                <td>30</td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Hot카페라뗴</td>
                                <td>30</td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Hot카페라뗴</td>
                                <td>30</td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Hot카페라뗴</td>
                                <td>30</td>
                                <td>1,000,000</td>
                            </tr>
                            <tr>
                                <td colspan="2"> 총 금액</td>
                                <td colspan="2">10,000,000</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div> <!-- categoryGroup -->
        </div>

    </div>
</template>


<script>
import '@/assets/css/chartCategory.css';

export default {
    name: "CoffeeView",
    components: {
    },
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>
