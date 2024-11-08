<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'
import { RouterLink, RouterView } from 'vue-router'
import HamburgerMenu from './components/HamburgerMenu.vue'

const menuActive = ref(false)
const globalOverlay = ref({ active: false })

const toggleMenu = () => {
  menuActive.value = !menuActive.value
  globalOverlay.value.active = menuActive.value
}

const beforeEnter = (el) => {
  gsap.set(el, { x: '-100%' })
}

const enter = (el, done) => {
  gsap.to(el, { x: '0%', duration: 0.5, ease: 'power2.out', onComplete: done })
}

const leave = (el, done) => {
  gsap.to(el, { x: '-100%', duration: 0.5, ease: 'power2.in', onComplete: done })
}
</script>

<template>
  <header>
    <div class="outer-wrapper">
      <div class="wrapper">
        <HamburgerMenu @toggle-menu="toggleMenu" :active="menuActive" />
        <div v-show="globalOverlay.active" class="global-overlay" @click="toggleMenu"></div>
        <nav>
          <transition name="menu-slide" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <ul v-if="menuActive" class="mobile-nav">
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/about">More About Me</RouterLink></li>
              <li><RouterLink to="/works">My Works</RouterLink></li>
              <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
          </transition>
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

<style scoped></style>
