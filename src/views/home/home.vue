<template>
  <div class="root overflow-y">
    <i-table :columns="infosColumn" :data="infos"/>
    <i-button @click="export2Excel" style="position:fixed;right:80px;bottom:80px">导出到excel</i-button>
  </div>

</template>

<script src="./home.js"></script>
<style> @import "./home.css" </style>
