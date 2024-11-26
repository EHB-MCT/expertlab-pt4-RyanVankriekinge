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
              width="100%"
              height="100%"
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
                width="100%"
                height="100%"
              >
                <polygon points="-500,0 -500,35 20,35 0,0" fill="#57378B" />
              </svg>
              <p class="jobtitle">Portfolio</p>
            </div>
            <div class="welcome-text-skills"></div>
          </div>
        </div>
        <div class="section-about-me">
          <div class="about-me-description">
            <h2 class="title">About me</h2>
            <p>
              Ever since I was a child, I have been passionate about content creation and multimedia
              tools. When I was 9, I made my first edited videos and created blogs and websites for
              my classmates. Later, I managed various YouTube channels and learned to use graphic
              software to design my own logos, thumbnails, and video elements. Driven by this
              passion, I chose to study Multimedia and Creative Technology, where I further
              developed my skills. <br /><br />
              Alongside my studies, I've been working as a teacher for several years and organized
              activities for a youth organization. These experiences strengthened my communication
              and organizational skills and gave me a high sense of responsibility. I enjoy working
              in a team, but I am also able to work independently and take initiative.
              <br /><br />
              I constantly seek ways to further develop my creativity and technical skills. My goal
              is to create innovative and impactful content and tools that resonate with the right
              audience. With my drive and eagerness to learn, I am convinced that I can be a
              valuable addition to any team.
            </p>
            <button class="button-small">More about me</button>
          </div>
          <div class="about-me-image-group">
            <div class="about-me-image-container">
              <img src="../assets/img/ryanvankriekinge.png" loading="lazy"/>
            </div>
            <div class="about-me-shape"></div>
          </div>
        </div>
        <div class="section-works">
          <div class="works-container">
            <h2 class="title">My works</h2>
            <WorksCarousel></WorksCarousel>
            <button class="button-small" style="margin: auto; width: 140px;">All my works</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WorksCarousel from '@/components/WorksCarousel.vue';

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.name-svg', {
    x: '50vw',
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  })
    .to({}, {})
    .from('.welcome-text-name', {
      x: '20vw',
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    })
    .to({}, { duration: 0.5 })
    .from(['.function-svg', '.jobtitle'], {
      x: '-50vw',
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      stagger: 0,
    })
    const defaultDuration = 1.5;
    const defaultEase = 'power3.out';
  
    const animateOnScroll = (selector, transformX) => {
    gsap.fromTo(selector, 
      {
        opacity: 0,
        x: transformX,
      },
      {
        opacity: 1,
        x: 0,
        duration: defaultDuration,
        ease: defaultEase,
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
          lazy: true,
        },
      }
    );
  };

  animateOnScroll('.about-me-description *', '-50vw');
  animateOnScroll('.about-me-image-group *', '50vw');
  animateOnScroll('.works-container *', '50vw');})
</script>
