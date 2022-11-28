<template>
  <div class="slaider-container">
    <input id="slider-input-1" name="css-slider"
      checked type="radio" class="slider-input">
    <input id="slider-input-2" name="css-slider"
      type="radio" class="slider-input">
    <input id="slider-input-3" name="css-slider"
      type="radio" class="slider-input">
    <input id="slider-input-4" name="css-slider"
      type="radio" class="slider-input">
    <input id="slider-input-5" name="css-slider"
      checked type="radio" class="slider-input">
    <input id="slider-input-6" name="css-slider"
      type="radio" class="slider-input">
    <input id="slider-input-7" name="css-slider"
      type="radio" class="slider-input">
    <input id="slider-input-8" name="css-slider"
      type="radio" class="slider-input">
    <div class="slider-body">
      <div class="slider-tabs">
        <label for="slider-input-1" class="slider-label">
          <img src="assets/img/1.jpeg" alt="" class="slider-img">
        </label>
        <label for="slider-input-2" class="slider-label">
          <img src="assets/img/2.jpg" alt="" class="slider-img">
        </label>
        <label for="slider-input-3" class="slider-label">
          <img src="assets/img/3.jpg" alt="" class="slider-img">
        </label>
        <label for="slider-input-4" class="slider-label">
          <img src="assets/img/4.jpg" alt="" class="slider-img">
        </label>
        <!-- <label for="slider-input-5" class="slider-label">
            <img src="assets/img/1.jpeg" alt="" class="slider-img">
        </label>
        <label for="slider-input-6" class="slider-label">
            <img src="assets/img/2.jpg" alt="" class="slider-img">
        </label>
        <label for="slider-input-7" class="slider-label">
            <img src="assets/img/3.jpg" alt="" class="slider-img">
        </label>
        <label for="slider-input-8" class="slider-label">
            <img src="assets/img/4.jpg" alt="" class="slider-img">
        </label> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.slider-input {
  display: none;
  opacity: 0;
  visibility: hidden;
}
.slider-body {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
}
.slider-body::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 26%;
  background: linear-gradient(transparent 0%, #000 100%);
}
.slider-label {
  display: block;
  max-width: 180px;
  max-height: 122px;
  background: #fff;
  cursor: pointer;
  border: 4px solid #fff;
  border-radius: 15px;
  overflow: hidden;
  opacity: 0.8;
  transition: opacity 0.4s linear, transform 0.1s linear;
}
.slider-label:hover {
  opacity: 1;
  transform: scale(1.1);
}
.slider-img {
  display: block;
  width: 100%;
  height: 100%;
}
.slider-tabs {
  position: relative;
  z-index: 2;
  padding-bottom: 120px;
  margin: 0 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
}
 /* #slider-input-1:checked ~ .slider-body {
  background: url(assets//img/1.jpeg) no-repeat center top/cover;
} */
/*#slider-input-2:checked ~ .slider-body {
  background: url(assets//img/2.jpg) no-repeat center top/cover;
}
#slider-input-3:checked ~ .slider-body {
  background: url(assets//img/3.jpg) no-repeat center top/cover;
}
#slider-input-4:checked ~ .slider-body {
  background: url(assets/img/4.jpg) no-repeat center top/cover;
} */
/* #slider-input-5:checked ~ .slider-body {
  background: url(assets/img/1.jpeg) no-repeat center top/cover;
}
#slider-input-6:checked ~ .slider-body {
  background: url(assets/img/2.jpg) no-repeat center top/cover;
}
#slider-input-7:checked ~ .slider-body {
  background: url(assets/img/3.jpg) no-repeat center top/cover;
}
#slider-input-8:checked ~ .slider-body {
  background: url(assets/img/4.jpg) no-repeat center top/cover;
} */
</style>
