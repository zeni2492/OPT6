<template>
    <form>
        <nav>
            <div class="form-container">
                <div class="wrapper">
                    <h1>Проверьте штрафы и зарегистрируйтесь в 1 клик</h1>
                    <div class="input-container">
                        <div class="Car-number-input">
                            <label for="CarId">Номер автомобиля</label>
                            <input 
                              v-model="CarNumber"
                              class="Car-number" 
                              id="CarId" 
                              type="text"
                              :class="{'Empty-input': emptyCarInput}"
                              >
                        </div>
                        <div class="Region-input">
                            <label for="Region">Регион</label>
                            <input
                             v-model="Region"
                              class="Region"
                               id="Region"
                                type="text"
                                :class="{'Empty-input': emptyRegionInput}"
                                >
                        </div>
                    </div>
                    <div class="input-transport-registration-container">
                        <label for="Transport-Registration">Свидетельство о регистрации ТС</label>
                        <input 
                        v-model="TransportRegistration" 
                        class="transport-registration" 
                        id="Transport-Registration" 
                        type="text"
                        :class="{'Empty-input': emptyRegistrationInput}"
                        >
                    </div>
                    <div class="buttons-container">
                        <button class="Check-penalties-button" @click="sendForm">
                            <span class="Check-penalties-button-text">Проверить штрафы</span> <img
                                src="@/public/Логистика-2.svg">
                        </button>
                        <button class="About-service-button" @click="openVideo">
                            <img src="@/public/VideoIcon.png">
                            <span class="About-service-button-text">О сервисе</span>
                            <span class="Video-length">(1 мин.35 сек)</span>
                        </button>
                    </div>
                    <p class="Privacy-policy">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
                        персональных данных и принимаете оферту</p>
                </div>
            </div>
            <div class="imagePc">
                <img class="image" src="@/public/PcImage.png" alt="">
            </div>
        </nav>
    </form>
    <article @click="closeVideo" class="PopUpVideo">
        <div v-if="openPopUpVideo" class="PopUpVideo-container">
            <div class="PopUpVideo-content">
                <p @click="closeVideo" class="PopUpVideo-close"><img src="@/public/CloseIcon.svg" alt=""></p>

                <video @click.stop src="@/public/ЧТО ПРОИЗОЙДЕТ В МИРЕ ЗА 1 МИНУТУ_.mp4" controls
                    @ended="openPopUpVideo = false"></video>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
let openPopUpVideo = ref<Boolean>(false)
let emptyCarInput = ref<Boolean>(false)
let emptyRegionInput = ref<Boolean>(false)
let emptyRegistrationInput = ref<Boolean>(false)

let CarNumber = ref<string>('')
let Region = ref<string>('')
let TransportRegistration = ref<string>('')



function openVideo(e: Event) {
    e.preventDefault()
    openPopUpVideo.value = true
}
function closeVideo(e: Event) {
    e.preventDefault()
    openPopUpVideo.value = false
}

function sendForm(e: Event) {
    e.preventDefault()
    if(CarNumber.value.length > 0 && Region.value.length > 0 && TransportRegistration.value.length > 0){
        alert("Данные были отправленны")
    }
    else{
        if(CarNumber.value.length == 0){
            emptyCarInput.value = true
        }
        if(Region.value.length == 0){
            emptyRegionInput.value = true
        }
        if(TransportRegistration.value.length == 0){
            emptyRegistrationInput.value = true
        }
    }

}

watchEffect(() => {
    if(CarNumber.value.length > 0){
        emptyCarInput.value = false
    }
    if(Region.value.length > 0){
        emptyRegionInput.value = false
    }
    if(TransportRegistration.value.length > 0){
        emptyRegistrationInput.value = false
    }
})
</script>
<style scoped lang="scss">
form {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 139px;
}

nav {
    width: 75%;
    display: flex;
    justify-content: center;
}


.wrapper {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}

h1 {
    font-size: 41px;
    margin: 0;
}

.input-container {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 25px;
}


label {
    font-size: 12px;
    margin-bottom: 5px;
}



.Car-number {
    width: 320px;
    height: 40px;
    outline: none;
    border-radius: 7px;
    outline: none;
    border: 1px solid #BCBCBC;
}



.Region {
    width: 213px;
    height: 40px;
    border-radius: 7px;
    outline: none;
    border: 1px solid #BCBCBC;
    margin-left: 20px;
}

.Car-number-input,
.Region-input {
    display: flex;
    flex-direction: column;
}


.input-transport-registration-container {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
}

.transport-registration {
    width: 563px;
    height: 40px;
    border: 1px solid #BCBCBC;
    border-radius: 7px;
    outline: none;
}

input {
    padding: 0px 0px 0px 10px;
    font-size: 15px;
    transition: 0.3s all;
}

input:focus {
    outline: none;
    box-shadow: 0px 0px 10px 0px #0584FE;
    border: #0584FE 1px solid;
}

.Empty-input {
    outline: none;
    box-shadow: 0px 0px 10px 0px #fe1e05;
    border: #fe1e05 1px solid;
}

.buttons-container {
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
}

.Check-penalties-button {
    height: 45px;
    border-radius: 7px;
    background: #0584FE;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    transition: 0.3s all;
    cursor: pointer;
}

.Check-penalties-button-text {
    margin-right: 10px;
    font-size: 18px;
    white-space: nowrap;
}

.Check-penalties-button:hover {
    background-color: #036fd3;
    box-shadow: #0584FE 0px 0px 20px 0px;

}

.About-service-button {
    border: 1px solid #0584FE;
    background: none;
    padding: 11px 20px;
    height: 45px;
    width: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 7px;
    margin-left: 21px;
    transition: 0.3s all;
    cursor: pointer;
    white-space: nowrap;
}

.About-service-button-text {
    font-size: 18px;
    margin-left: 5px;
    margin-right: 4px;
    display: flex;
    align-items: end;
}

.About-service-button:hover {
    border: 1px solid #0584FE;
    box-shadow: #0584FE 0px 0px 20px 0px;
}

.Video-length{
    color: #1253A2;
    font-size: 15px;
}

.imagePc {
    max-width: 100%;
    width: 532px;
    margin-bottom: 24px;
}

img {
    height: auto;
}

.PopUpVideo-close {
    display: flex;
    justify-content: end;
    cursor: pointer;
    margin-bottom: 8px;
    margin-right: 20px;
}


.PopUpVideo-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
}

.Privacy-policy {
    width: 100%;
    font-size: 13px;
    margin-top: 16px;
    color: #8F8F8F;
    font-weight: 400;
}

@media screen and (max-width: 1214px) {
    .image{
        max-width: 100%;
        display: flex;
        align-items: center;
    }
    .imagePc{
        max-width: 100%;
    }
    nav{
        flex-direction: column-reverse;
        align-items: center;
    }
    
}

@media (max-width: 720px) {
    .buttons-container{
        flex-direction: column;
        width: 100%;
    }

    .About-service-button {
        margin-top: 10px;
        margin-left: 0;
        justify-content: center;
    }

    .Car-number-input{
        width: 70%;
    }

    .Region-input{
        width: 44%;
    }
    .Region{
        width: 98%;
    }

    .input-container{
        width: 100%;
    }

    .transport-registration{
        width: 98%;
    }
}

@media (max-width: 508px) {
    .form-container{
        width: 100%;
        flex-direction: column;
        display: flex;
    }
    h1 {
        font-size: 30px;
        width: 300px
    }

    .input-container {
        flex-direction: column;
        width: 90%;
        display: flex;
        justify-content: start;
        align-items: start;
        margin-top: 10px;
    }

    input{
        width: 200px;
    }

    .Region-input{
        margin-top: 10px;
    }
    .Region{
        margin: 0;
        width: 260px;
    }

    .Car-number{
        width: 260px;
    }
    .transport-registration{
        width: 260px;
    }

    .Check-penalties-button,
    .About-service-button {
        width: 270px;
        justify-content: center;
  }

  .buttons-container{
    margin-left: 0;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    justify-content: center;
}
  

    .About-service-button {
        margin-left: 0;
        margin-top: 10px;
    }
    video{
        width: 90%;
        height: auto;
    }
}
</style>