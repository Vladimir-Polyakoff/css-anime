<template>
  <div class="body">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpringLoader'
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .loader {
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    transform: perspective(500px) rotateX(60deg);
  }
  .loader span {
    position: absolute;
    display: block;
    border: 5px solid #262626;
    box-shadow: 0 5px 0 rgb(155, 154, 154), inset 0 5px 0 rgb(151, 150, 150);
    box-sizing: border-box;
    border-radius:50%;
    animation: animate 3s ease-in-out infinite;
  }
  @keyframes animate {
    0%,100% {
      transform: translateZ(-100px);
    }
    50% {
      transform: translateZ(100px);
    }
  }

  .loader span:nth-child(1) {
    /* что б круг появился */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation-delay: 1.4s;
  }
  .loader span:nth-child(2) {
    /* что б круг появился */
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    animation-delay: 1.3s;
  }
  .loader span:nth-child(3) {
    /* что б круг появился */
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    animation-delay: 1.2s;
  }
  .loader span:nth-child(4) {
    /* что б круг появился */
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    animation-delay: 1.1s;
  }
  .loader span:nth-child(5) {
    /* что б круг появился */
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    animation-delay: 1s;
  }
  .loader span:nth-child(6) {
    /* что б круг появился */
    top: 50px;
    left: 50px;
    right: 50px;
    bottom: 50px;
    animation-delay: 0.9s;
  }
  .loader span:nth-child(7) {
    /* что б круг появился */
    top: 60px;
    left: 60px;
    right: 60px;
    bottom: 60px;
    animation-delay: 0.8s;
  }
  .loader span:nth-child(8) {
    /* что б круг появился */
    top: 70px;
    left: 70px;
    right: 70px;
    bottom: 70px;
    animation-delay: 0.7s;
  }
  .loader span:nth-child(9) {
    /* что б круг появился */
    top: 80px;
    left: 80px;
    right: 80px;
    bottom: 80px;
    animation-delay: 0.6s;
  }
  .loader span:nth-child(10) {
    /* что б круг появился */
    top: 90px;
    left: 90px;
    right: 90px;
    bottom: 90px;
    animation-delay: 0.5s;
  }
  .loader span:nth-child(11) {
    /* что б круг10появился */
    top: 100px;
    left: 100px;
    right: 100px;
    bottom: 100px;
    animation-delay: 0.4s;
  }
  .loader span:nth-child(12) {
    /* что б круг появился */
    top: 110px;
    left: 110px;
    right: 110px;
    bottom: 110px;
    animation-delay: 0.3s;
  }
  .loader span:nth-child(13) {
    /* что б круг появился */
    top: 120px;
    left: 120px;
    right: 120px;
    bottom: 120px;
    animation-delay: 0.2s;
  }
  .loader span:nth-child(14) {
    /* что б круг появился */
    top: 130px;
    left: 130px;
    right: 130px;
    bottom: 130px;
    animation-delay: 0.1s;
  }
  .loader span:nth-child(15) {
    /* что б круг появился */
    top: 140px;
    left: 140px;
    right: 140px;
    bottom: 140px;
    animation-delay: 0s;
  }
</style>
