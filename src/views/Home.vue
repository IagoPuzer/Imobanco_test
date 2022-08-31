<template>
   <div class="text-container">
      <h1 class="title-home" >Imobanco</h1>
      <p class="text-home">O seu banco digital</p>
   </div>
</template>

<script>
   export default {
      name: 'Home'
      
   }
</script>

<style>
.text-container {
   @apply  md:flex  md:items-center md:justify-center flex-col mt-44;
}

.title-home {
   @apply  text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-cyan-200;
}

.text-home {
   @apply  text-2xl mt-10 text-slate-200;
}



</style>

