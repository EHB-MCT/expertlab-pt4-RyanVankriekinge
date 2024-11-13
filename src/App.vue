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

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useRoute } from 'vue-router'
import HamburgerMenu from './components/HamburgerMenu.vue'

const menuActive = ref(false)
const globalOverlay = ref({ active: false })
let enterTween = null

const toggleMenu = () => {
  menuActive.value = !menuActive.value
  globalOverlay.value.active = menuActive.value
}

const beforeEnter = (el) => {
  const listItems = el.querySelectorAll('li')
  const viewportWidth = window.innerWidth
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
  const remValue = rootFontSize
  const distance = viewportWidth - remValue
  gsap.set(listItems, { x: `-${distance}` })
}

const enter = (el, done) => {
  const listItems = el.querySelectorAll('li')
  enterTween = gsap.to(listItems, {
    x: '0%',
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.1,
    onComplete: done,
  })
}

const leave = (el, done) => {
  if (enterTween) {
    enterTween.reverse()
  }
}

onMounted(() => {
  const desktopNavItems = document.querySelectorAll('.desktop-nav li')
  gsap.from(desktopNavItems, {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: 'power2.out',
    delay: 0.5,
    stagger: 0.1,
  })
})
</script>
