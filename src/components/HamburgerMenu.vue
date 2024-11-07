<template>
    <div id="burger" :class="{ 'active': active }" @click="toggleActive">
      <button type="button" class="burger-button" title="Menu">
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HamburgerMenu',
    props: {
      active: {
        type: Boolean,
        required: true,
        default: false,
      }
    },
    methods: {
      toggleActive() {
        this.$emit('toggle-menu');
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  $burger-color: #ffffff;
  $primary: #B9A2CE;

  .hidden {
      visibility: hidden;
  }

  button {
      cursor: pointer;
  }

  button:focus {
      outline: 0;
  }

  .burger-button {
      position: relative;
      height: 30px;
      width: 40px;
      display: block;
      z-index: 99;
      border: 0;
      border-radius: 0;
      background-color: transparent;
      pointer-events: all;
      transition: transform .6s cubic-bezier(.165, .84, .44, 1);
  }

  .burger-bar {
      background-color: $burger-color;
      position: absolute;
      top: 50%;
      right: 6px;
      left: 6px;
      height: 3px;
      width: auto;
      margin-top: -1px;
      transition: transform .6s cubic-bezier(.165, .84, .44, 1), opacity .3s cubic-bezier(.165, .84, .44, 1), background-color .6s cubic-bezier(.165, .84, .44, 1);
  }
  @media screen and (max-width: 640px) {
      #burger {
          display: block;
      }
  }

  @media screen and (min-width: 641px) {
      #burger {
          display: none;
      }
  }
</style>