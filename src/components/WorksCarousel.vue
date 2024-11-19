<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const items = [
  {
    type: 'image', 
    media: 'https://via.placeholder.com/300x200?text=Image+1',
    title: 'Image 1',
    description: 'This is a description for the first image.',
  },
  {
    type: 'video',
    media: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Video 1',
    description: 'This is a description for the first video.',
  },
  {
    type: 'image',
    media: 'https://via.placeholder.com/300x200?text=Image+2',
    title: 'Image 2',
    description: 'This is a description for the second image.',
  },
  {
    type: 'video',
    media: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Video 2',
    description: 'This is a description for the second video.',
  },
  {
    type: 'image',
    media: 'https://via.placeholder.com/300x200?text=Image+3',
    title: 'Image 3',
    description: 'This is a description for the third image.',
  },
];

const config = {
  itemsToShow: 2.5,
  wrapAround: true,
};
</script>

<template>
  <Carousel v-bind="config">
    <Slide v-for="(item, index) in items" :key="index">
      <div class="carousel__item">
        <div class="media">
          <img v-if="item.type === 'image'" :src="item.media" :alt="item.title" />
          <video v-else-if="item.type === 'video'" :src="item.media" controls />
        </div>
        <div class="text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.media {
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
}

.media img,
.media video {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.text {
  text-align: center;
}

h3 {
  font-size: 1.2rem;
  margin: 10px 0;
}

p {
  font-size: 0.9rem;
  color: #555;
  margin: 0;
}
</style>
