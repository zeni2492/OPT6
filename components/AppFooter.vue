<template>
    <div>
      <footer>&copy;<slot></slot></footer>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  </script>
  
  <style scoped>

  footer{
      background: none;
      position: absolute;
      bottom: 0;
      right: 20px;
      height: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
  }

  </style>