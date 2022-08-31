<template>
    <nav class="nav-container">
      <div class="content-nav">
        <router-link class=" links-nav" to="/">Home</router-link>
        <router-link class=" links-nav" to="/transactions">Transações</router-link>
      </div> 
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
  .nav-container {
    @apply  p-5 shadow md:flex md:items-center md:justify-center text-zinc-100 text-lg; 
  }

  .content-nav {
    @apply  md:flex md:items-center;
  }

  .links-nav {
    @apply text-lg hover:text-teal-300 duration-500 cursor-pointer mx-4;
  }


</style>