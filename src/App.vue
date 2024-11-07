<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="outer-wrapper">
      <div class="wrapper">
        <nav>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">More About Me</RouterLink></li>
            <li><RouterLink to="/works">My Works</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
