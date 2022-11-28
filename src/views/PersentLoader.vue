<template>
  <body >
    <div id="preloader" class="preloader">
      <div class="preloader__loader">
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="preloader__persent">
          <span id="percent">{{ percent }}</span>%
        </span>
      </div>
    </div>
    <main style="display: none">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque vel, vero cum ratione repellat voluptatibus.</p>
      <img src="https://wallpapershome.ru/images/wallpapers/more-3840x2160-4k-hd-solnce-zakat-kamni-priroda-5191.jpg" alt="">
      <img src="https://wallpapershome.ru/images/wallpapers/more-3840x2160-4k-hd-solnce-zakat-kamni-priroda-5191.jpg" alt="">
      <img src="https://wallpapershome.ru/images/wallpapers/more-3840x2160-4k-hd-solnce-zakat-kamni-priroda-5191.jpg" alt="">
    </main>
  </body>
</template>

<script>
export default {
  name: 'PersentLoader',
  data () {
    return {
      percent: 0
    }
  },
  mounted () {
    this.preloader()
  },
  methods: {
    preloader () {
      document.addEventListener('DOMContentLoaded', () => {
        const mediaFiles = document.querySelectorAll('img')
        console.log(mediaFiles)
        const preloader = document.getElementById('preloader')

        let i = 0

        mediaFiles.forEach(el => {
          el.onload = () => {
            i++

            this.percent = ((i * 100) / mediaFiles.length).toFixed(1)

            if (i === mediaFiles.length) {
              preloader.classList.add('preloader--hide')
              this.percent = 100
            }
          }
        })
      })
    }
  }
}

</script>

<style scoped>
  * {
    margin :0;
    padding: 0;
  }
  body {
    font-size: 16px;
    overflow-x: hidden;
  }
  img {
    width: 100%;
  }
  .preloader {
    left: 0;
    top: 0;
    width: 100%;
    width: 100%;
    z-index: 100;
    transition: all .9s ease-out;
  }
  .preloader--hide {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
  .preloader__persent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, sans-serif;
    font-size: 24px;
    font-weight: bold;
  }

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  /* выровнять по центру обьект */
  width: 150px;
  height: 150px;
  border: 10px solid rgba(129, 18, 151, 0.559);
  /* box-shadow: 0 -2px 2px rgba(0, 0, 0, .2); */
  border-bottom: 10px solid #ffffff;
  border-radius: 50%;
  animation: animate 0s linear infinite;
}
@keyframes animate {

  0% {
      transform: rotate(0deg); /* X,Y */
  }
  100% {
      transform: rotate(360deg);
  }
}
</style>
