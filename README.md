# Dynamic Transitions Portfolio

This project is a personal portfolio that uses web animations and transitions. This project is also used to investigate how to improve the page speed of a web page.

## Project set-up guide

### Requirements

Make sure you have the following installed: <br>
**Node.js** (version 18 recommended)<br>
**npm** (version 9 recommended)

### Node installation

Check your node version with <br> `node -v`<br>

If you don't have Node.js and npm installed, download and install the latest stable version from [Node.js official website](https://nodejs.org/en/download/package-manager)

### Dependency installation

To install the dependencies, run the following command <br> `npm install`

### Running the application

To start the development server, run <br>
`npm run dev`

To build server for production (import for minifying, compression, etc.) run <br>
`npm run build`

To view the website run <br>
`npm run serve`

## Linting and formatting

This project uses ESLint and Prettier for code linting and formatting <br><br>
To check for linting errors, run: <br>
`npm run lint`<br><br>
To fix formatting issues, run: <br>
`npm run format`

## References

1. **Creating .gitignore file**  
   Used gitignore.io to generate a suitable .gitignore file for a Node.js project.

2. **Initialising Vue project in existing project**  
   Used [How to guide: Adding VueJS to your existing project](https://www.codemotion.com/magazine/frontend/javascript/how-to-guide-adding-vuejs-to-your-existing-project/) to initialise Vue in my existing project

3. **Finding media screen width breakpoints**  
   Used [Media queries: How to target desktop, tablet and mobile?](https://stackoverflow.com/questions/6370690/media-queries-how-to-target-desktop-tablet-and-mobile) to find ideal breakpoints for different screen sizes, used in assets > \*

4. **Creating animated hamburger menu in Vue**  
   Used [Vue Tutorial: How to make a responsive hamburger menu](https://piboutique.com/vue-tutorial-how-to-make-a-responsive-burger-menu/) to create mobile menu in src > views > App.vue and in src > components > HamburgerMenu.vue

5. **Using transitions in Vue**  
   Used [Vue.js 3 GreenSock (GSAP) Animating Tutorial](https://www.koderhq.com/tutorial/vue/animation-greensock-gsap/) to use GSAP animations in Vue, in src > \*

6. **Adding a stagger to all list items inside an unordered list**  
   Used [ChatGPT](https://chatgpt.com/share/672de058-d320-8002-9968-b17f2d091bc4) to add a stagger to my mobile menu animation in src > App.vue

7. **Calculating viewportWidth and rootFontSize with JavaScript**  
   Used [ChatGPT](https://chatgpt.com/share/672e145c-8f94-8002-81ec-acec53bd13d6) to calculate width of specific elements that have padding based on the root font size in src > App.vue

8. **Creating SVG Shapes**  
   Used [SVG <polygon> - W3 Schools](https://www.w3schools.com/graphics/svg_polygon.asp) to create SVG shapes for my background elements in src > views > \*

9. **Creating SVG Shapes**  
   Used [How to make polygon in svg responsive (vw, vh) - stackoverflow](https://stackoverflow.com/questions/69175636/how-to-make-polygon-in-svg-responsive-vw-vh) to make my svg shapes responsive

10. **Creating Scroll triggered animations**  
    Used [ScrollTrigger - GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/?page=1) to make items appear and disappear when scrolling in src > views > \*

11. **Adding stagger to all elements of a section**  
    Used [ChatGPT](https://chatgpt.com/share/6735d162-9c10-8002-8963-ae1732fc5a18) to create efficient staggers on child elements of a div element in src > views > HomeView.vue

12. **Animating link underlines when hovering over navigation**  
    Used [Animating Link Underlines](https://tobiasahlin.com/blog/css-trick-animating-link-underlines/) to add animation to navigation links when hovering in src > assets > styles > nav.css

13. **Adding page transitions on router components**  
    Used [Vue Router: Transitions](https://router.vuejs.org/guide/advanced/transitions) to animate page navigations in single page web page in src > App.vue

14. **Examples Vue Router transitions**  
    Used [Awesome examples of Vue Router Transitions](https://learnvue.co/articles/vue-router-transitions) to create my own transition in src > assets > styles > pagetransitions.css

15. **Vue3 Carousel**  
    Used [Vue3-carousel: For your next awesome project](https://vue3-carousel.ismail9k.com/) to create a carousel for my works in src > components > WorksCarousel.vue

16. **Debouncing in JavaScript**  
    Used [Debounce - How to delay function in JavaScript](https://www.freecodecamp.org/news/javascript-debounce-example/) to debounce buttons in src > views > HomeView.vue

17. **Compressing text files**  
    Used [Vite plugin compression](https://github.com/vbenjs/vite-plugin-compression) to compress text files

18. **Preloading**  
    Used [mdn web docs: rel=preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload) to preload fonts in index.html