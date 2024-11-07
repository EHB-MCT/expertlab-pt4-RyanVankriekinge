<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HamburgerMenu from './components/HamburgerMenu.vue';

const menuActive = ref(false);

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};
</script>

<template>
  <header>
    <div class="outer-wrapper">
      <div class="wrapper">
        <HamburgerMenu @toggle-menu="toggleMenu" :active="menuActive" />

        <nav>
          <ul v-show="menuActive" class="mobile-nav">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">More About Me</RouterLink></li>
            <li><RouterLink to="/works">My Works</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>

          <ul class="desktop-nav">
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
