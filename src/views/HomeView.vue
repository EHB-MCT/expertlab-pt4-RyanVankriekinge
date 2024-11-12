<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('.name-svg', {
    x: '100vw',
    duration: 1.5,
    ease: 'power3.out',
  })
  gsap.from('.function-svg', {
    x: '-100vw',
    duration: 1.5,
    ease: 'power3.out',
  })
})
</script>

<template>
  <main>
    <div class="outer-wrapper">
      <div class="wrapper">
        <div class="section-welcome">
          <div class="welcome-text-namegroup">
            <div class="welcome-text-name">
              <p class="title welcome-ryan">Ryan</p>
              <p class="title welcome-vankriekinge">Vankriekinge</p>
            </div>
            <svg
              class="name-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              width="100vw"
              height="auto"
            >
              <polygon points="50,10 0,75 500,75 500,10" fill="#57378B" />
            </svg>
          </div>
          <div class="welcome-text-career">
            <div class="welcome-text-jobtitle">
              <svg
                class="function-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                width="100vw"
                height="auto"
              >
                <polygon points="-500,0 -500,35 85,35 70,0" fill="#57378B" />
              </svg>
              <p class="jobtitle">Multimedia developer</p>
            </div>
            <div class="welcome-text-skills"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
