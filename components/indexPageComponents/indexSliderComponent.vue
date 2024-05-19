<template>
    <div class="slider">
        <div class="slider-item-container">
            <div class="arrow-left arrow"><img src="@/public/arrow-left.svg" alt=""></div>
            <div v-for="(item,index) in DataStorage" :key="item.Cardid" class="slider-item">
                <div class="slider-item-text">
                    <p class="slider-item-title">{{ item.CardTitle }}</p>
                    <p class="slider-item-description">{{ item.CartDescription }}</p>
                </div>
                <button @click="redirect.redirectToPage(index)">Перейти</button>
            </div>
            <div class="arrow-right arrow"><img src="@/public/arrow-right.svg" alt=""></div>
        </div>

    </div>
</template>

<script setup lang="ts">

import useRedirect from '@/customHooks/Redirect.js';


const redirect = useRedirect()


const DataStorage = [
    {
        Cardid: 1,
        page: 'licensePage',
        CardTitle: 'Лицензионный договор',
        CartDescription: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. '
    },
    {
        Cardid: 2,
        CardTitle: 'Политика обработки персональных данных',
        CartDescription: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.'
    },
    {
        Cardid: 3,
        CardTitle: 'Информация об оплате',
        CartDescription: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.'
    }
]
</script>

<style lang="scss" scoped>
.slider {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    margin-bottom: 496px;
    margin-top: 40px;
}

.slider-item-container {
    display: flex;
    width: 1250px;
    flex-direction: row;
    justify-content: center;
    position: relative;
}

.slider-item {
    width: 340px;
    height: 450px;
    border-radius: 7px;
    padding: 25px 25px 0px 25px;
    box-shadow: 0px 0px 20px 0px #0000001F;
    position: relative;
}

.slider-item button {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    height: 45px;
    width: 85%;
    border-radius: 7px;
    background: #0584FE;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: 0.3s all;
}

.arrow {
    cursor: pointer;
    position: absolute;
    top: 199px;
    width: 40px;
    height: 80px;
    background: #00204721;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.arrow-left {
    left: -20px;
    border-top-right-radius:50px;
    border-bottom-right-radius:50px;
    transition: .2s all;
}

.arrow-left:hover {
    background: #0045988d;
}

.arrow-right {
    right: -20px;
    border-top-left-radius:50px;
    border-bottom-left-radius:50px;
    transition: .2s all;
}

.arrow-right:hover {
    background: #0045988d;
}

.slider-item button:hover {
    background: #1253A2;
    box-shadow: #0584FE 0px 0px 20px 0px;
    transform: scale(.97) translateX(-52%);
}

.slider-item:nth-child(3) {
    margin: 0px 35px;
}

.slider-item-title {
    margin: 0;
    font-size: 31px;
    font-weight: 700;
    color: #1253A2;
}

.slider-item-description {
    margin-top: 15px;
    font-size: 18px;
}
</style>