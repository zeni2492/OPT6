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
          <NuxtLink class="Nav-link" to="/rate">Тарифы</NuxtLink>
        </div>
        <div class="Nav-link-container">
          <NuxtLink class="Nav-link" to="/contact">Контакты</NuxtLink>
        </div>
      </nav>
      <aside>
        <p class="PhoneNumber"> +7 495 118-44-22 </p>
        <div class="registration-container">
          <button class="Login">Вход</button>
          <button class="Registration">Регистрация</button>
        </div>
      </aside>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
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

.Registration:hover {
  background: inherit;
  color: #0584FE;
}


@media screen and (max-width: 450px) {
  .Nav-link-container img{ 
    width: 90px;
    height: 30px;
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

  .PhoneNumber {
    display: none; /* Hide the phone number on smaller screens */
  }

  aside {
    flex-direction: column; /* Stack aside items vertically */
  }

  .registration-container {
    display: none;
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