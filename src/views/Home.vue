<template>
   <div class="container">
      <img src="../assets/imobanco-logo-branco.png" alt="">
      <p class="text-home">O seu banco digital</p>
   </div>
</template>

<script>
   export default {
      name: 'Home'
      
   }
</script>

<style>
.container {
   @apply md:flex  md:items-center md:justify-center flex-col mt-44 mx-auto;
}

.text-home {
   @apply  text-2xl mt-10 text-slate-200;
}

</style>

