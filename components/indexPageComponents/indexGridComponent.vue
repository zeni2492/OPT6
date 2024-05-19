<template>
    <div class="grid-container">
        <div class="grid">
                <div v-for="el in DataStorage" :key="el.id" class="grid-item">
                    <img :src="el.img" alt="">
                    <div class="grid-item-text">
                        <p class="grid-item-title">{{ el.title }}</p>
                        <p class="grid-item-description">{{ el.description }}</p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import InfinityImage from '@/public/InfinityImage.svg'
import MapImage from '@/public/MapImage.svg'
import SafetyImage from '@/public/SafetyImage.svg'
import Bell from '@/public/Bell.svg'
import Tax from '@/public/TaxImage.svg'
import HistoryTimeImage from '@/public/HistoryTimeImage.svg'

interface IData{
    id: number,
    img: string,
    title: string,
    description: string
}

const DataStorage: IData[] = [
    {
        id: 1,
        img: InfinityImage,
        title: 'Неограниченый автопарк',
        description: 'Можно добавить неограниченное кол-во машин и водителей',
    },
    {
        id: 2,
        img: MapImage,
        title: 'Сокращение затрат до 50%',
        description: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке',
    },
    {
        id: 3,
        img: SafetyImage,
        title: 'Безопасность',
        description: 'Данные передаются в зашифрованном виде, они доступны только получателю',
    },
    {
        id: 4,
        img: Bell,
        title: 'Безопасность',
        description: 'Данные передаются в зашифрованном виде, они доступны только получателю',
    },
    {
        id: 5,
        img: Tax,
        title: 'Квитанция об оплате',
        description: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.',
    },
    {
        id: 6,
        img: HistoryTimeImage,
        title: 'Все история сохраняется по каждой машине',
        description: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам',
    }
]
</script>

<style scoped lang="scss">
.grid-container {
    display: flex;
    justify-content: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    width: 75%;
    margin: 35px 0px;
}



.grid-item {
    width: calc(
        (100% - 60px)
    );
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #EEEFF1;
    background: #FBFCFD;
    border-radius: 10px;
    padding: 20px 20px;
    word-break: normal;
}


.grid-item-text {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    /* Add some spacing between the image and text */
}

.grid-item-title {
    color: #1253A2;
    font-size: 18px;
    font-weight: 700;
    margin: 0;
}

.grid-item-description {
    font-size: 15px;
    color: #666;
    margin: 0;
    margin-top: 10px;
}
</style>