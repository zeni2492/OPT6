<template>
  <header>
    <div class="container">
      <nav>
        <NuxtLink to="/">
          <div class="Nav-link-container">
            <img src="../public/Logo.png">
          </div>
        </NuxtLink>
        <div class="Nav-link-container">
          <NuxtLink class="Nav-link" to="/EmptyPages/rate">Тарифы</NuxtLink>
        </div>
        <div class="Nav-link-container">
          <NuxtLink class="Nav-link" to="/EmptyPages/contact">Контакты</NuxtLink>
        </div>
      </nav>
      <div >
      <aside>
        <p class="PhoneNumber"> +7 495 118-44-22 </p>
        <div class="registration-container">
          <NuxtLink to="/EmptyPages/login">
            <button class="Login">Вход</button>
          </NuxtLink>
          <NuxtLink to="/EmptyPages/Registration">
            <button class="Registration">Регистрация</button>
          </NuxtLink>
        </div>
        <div class="ThreeStripes-container">
          <button class="ThreeStripes-button" @click="isMobile = !isMobile">
            <img  class="ThreeStripes" :src="ThreeStripes" alt="">
          </button>
        </div>
      </aside>
    </div>

    <div class="mobile-registration" v-if="isMobile">
      <div class="mobile-buttons-container">
        <NuxtLink to="/EmptyPages/login">
          <button class="Login">Вход</button>
        </NuxtLink>
        <NuxtLink to="/EmptyPages/Registration">
          <button class="Registration">Регистрация</button>
        </NuxtLink>
      </div>
      <p class="PhoneNumber-mobile"> +7 495 118-44-22 </p>
    </div>
  </div>
  </header>
  
</template>

<script setup lang="ts">
import ThreeStripes from '../public/three-line-horizontal-svgrepo-com.svg'

const isMobile = ref(false);



</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60px;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(to right, #000, #1C2734);
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 75%;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: start;
  max-width: 100%;
}

.Nav-link-container {
  display: flex;
  align-items: center;
}

.Nav-link {
  font-size: 18px;
  text-decoration: none;
  color: white;
  margin: 0 15px;
  transition: .2s all;
}

.Nav-link:hover{
  color: #0584FE;
}

.PhoneNumber {
  color: white;
}

aside {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.Login {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  margin: 0px 30px;
  cursor: pointer;
  outline: none;
  transition: .2s all;
}

.Login:hover {
  color: #0584FE;
} 

.Registration {
  background: #0584FE;
  width: 117px;
  max-width: 100%;
  height: 37px;
  border: none;
  color: white;
  font-size: 15px;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  transition: .2s all;
}

.registration-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  
}

.Registration:hover {
  background: inherit;
  color: #0584FE;
}

.ThreeStripes-container{
  height: 60px;
  display: none;
  margin-left: 10px;
}

.ThreeStripes{
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.ThreeStripes-button{
  background: none;
  outline: none;
  border: none;
}

.mobile-registration{
  position: absolute;
  top: 50px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  background-image: linear-gradient(to right, #000, #1C2734);
  justify-content: space-between;
}

.mobile-buttons-container{
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 27px;
  gap: 20px;
}
.PhoneNumber-mobile{
  color: white;
  margin-right: 20px;
}

@media screen and (max-width: 933px){
  .PhoneNumber{
    display: none;
  }
  .registration-container{
    flex-wrap: nowrap;

  }
  
}

@media screen and (max-width: 708px){
  .container{
    width: 90%;
  }
  .registration-container {
    display: none;
  }
  .ThreeStripes-container{
    display: flex;
  }
  .PhoneNumber-mobile{
    display: none;
  }
  .mobile-registration{
    justify-content: end;
    margin-right: 20px;
  }
}

@media screen and (max-width: 450px) {
  .Nav-link-container img{ 
    width: 90px;
    height: 30px;
  }
  .PhoneNumber {
    display: none;
  }

  nav {
    width: 100%; /* Make the navigation links full width */
    justify-content: space-between; /* Center items vertically */
    height: 60px;
    align-items: center;
  }

  .Nav-link {
    margin: 10px 0; /* Add spacing between navigation links */
  }
  aside {
    flex-direction: column; /* Stack aside items vertically */
    display: flex;
  }
  .Login {
    margin: 10px 0; /* Add spacing for the login button */
  }

  .Registration {
    margin: 10px 0; /* Add spacing for the registration button */
    width: 100%; /* Make the registration button full width */
  }
}
</style>