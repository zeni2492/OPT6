<template>
    <div class="slider">
        <div class="slider-item-container">
            <div class="arrow-left arrow" @click="slideLeft"><img src="@/public/arrow-left.svg" alt=""></div>
            <div v-for="item in visibleData" :key="item.Cardid" class="slider-item">
                <div class="slider-item-text">
                    <p class="slider-item-title">{{ item.CardTitle }}</p>
                    <p class="slider-item-description">{{ item.CartDescription }}</p>
                    <button @click="redirect.redirectToPage(item.CardTitle)">Перейти</button>
                </div>
            </div>
            <div class="arrow-right arrow" @click="slideRight"><img src="@/public/arrow-right.svg" alt=""></div>
        </div>
        <div class="slider-dots">
            <span :class="{ active: currentPage === 0 }"></span>
            <span :class="{ active: currentPage === 1 }"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import useRedirect from '@/customHooks/Redirect.js';

const redirect = useRedirect();

interface IData {
    Cardid: number;
    CardTitle: string;
    CartDescription: string;
}

const DataStorage: IData[] = [
    {
        Cardid: 1,
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
    },
    {
        Cardid: 4,
        CardTitle: 'Элемент слайдера 4',
        CartDescription: 'Текст элемента слайдера 4'
    },
    {
        Cardid: 5,
        CardTitle: 'Элемент слайдера 5',
        CartDescription: 'Текст элемента слайдера 5'
    },
    {
        Cardid: 6,
        CardTitle: 'Элемент слайдера 6',
        CartDescription: 'Текст элемента слайдера 6'
    },

];

let itemsPerPage = 3;
let currentPage = 0;

const checkScreenWidth = () => {
    if (window.innerWidth < 500) {
        itemsPerPage = 1;
    } else {
        itemsPerPage = 3;
    }
    updateVisibleData();
};



const visibleData = ref<IData[]>([]);

const updateVisibleData = () => {
    visibleData.value = DataStorage.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);
};

const slideRight = () => {
        currentPage++;
        if(currentPage === 2){
            currentPage = 0
        }
        updateVisibleData();
};

const slideLeft = () => {
    
        currentPage--;
        if(currentPage === -1){
            currentPage = 1
        }
        updateVisibleData();
};


onMounted(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenWidth);
});

</script>

<style lang="scss" scoped>
.slider-dots {
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    top: 480px;
}

.slider-dots span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ccc;
    margin: 0 5px;
    cursor: pointer;
}

.slider-dots span.active {
    background: #1253A2;
    transition: 0.5s all;
    transform: scale(1.4);
}

.slider {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    position: relative;
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
    transition: transform 0.5s ease;
}

.slider-item {
    width: 340px;
    height: 450px;
    border-radius: 7px;
    padding: 25px 25px 0px 25px;
    box-shadow: 0px 0px 20px 0px #0000001F;
    position: relative;
    animation: slideAnimation 0.5s forwards;
    /* Apply the exit animation */
    overflow: hidden;
}


@keyframes slideAnimation {

    /* Define your animation properties here, for example, you can translate the element */
    from {
        transform: translateX(40%);
    }

    to {
        transform: translateX(0);
    }
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
    user-select: none;
}

.arrow-left {
    left: -20px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    transition: .2s all;
}

.arrow-left:hover {
    background: #0045988d;
}

.arrow-right {
    right: -20px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
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

.slider-item:nth-of-type(3) {
    margin: 0 35px;
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

@media screen and (max-width: 450px) {
    .slider-dots {
        display: none;
    }
    .slider {
        width: 350px;
        display: flex;
        margin: 0px auto;
        margin-top: 86px;
        margin-bottom: 473px;
        justify-content: center;
    }
    .slider-item {
        width: 100%;
        overflow-x: hidden;
    }
}
</style>