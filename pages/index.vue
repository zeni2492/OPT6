<template>
            <div class="index-form-wrapper">
                <indexFormComponent />
            </div>
            
            <div class="Intro-container">
                <h2 class="Intro">Плюсы использования сервиса «Компас» для анализа штрафов</h2>
            </div>

            <div class="index-grid-container">
                <div class="index-grid-wrapper">
                    <indexGridComponent />
                </div>
            </div>

            <h2 class="Documents">Документы</h2>
            <indexSliderComponent />
</template>

<script setup lang="ts">
import indexFormComponent from '../components/indexPageComponents/indexFormComponent.vue';
import indexGridComponent from '~/components/indexPageComponents/indexGridComponent.vue';
import indexSliderComponent from '~/components/indexPageComponents/indexSliderComponent.vue';
</script>

<style scoped>

.index-container{
    width: 100%;
    display: flex;
    justify-content: center;
}

.index-wrapper{
    width: 100%;
}

.Intro-container{
    display: flex;
    justify-content: center;
}

.Intro {
    font-size: 34px;
    font-weight: 700;
    width: 80%;
    text-align: center
}

.index-grid-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.Documents {
    font-size: 34px;
    margin: 0px;
    font-weight: 700;
    margin-top: 85px;
    text-align: center
}

@media screen and (max-width: 508px) {
    .container {
        display: flex;
        flex-direction: column;
    }

    .index-form-wrapper{
        width: 100%;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 20px;
    }
}
</style>