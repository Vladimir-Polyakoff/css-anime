<template>
  <div class="body">
    <div class="container">
      <div class="plate"></div>
      <div class="cup">
        <div class="top">
          <div class="vapour">
            <span style="--i:1;"></span>
            <span style="--i:17;"></span>
            <span style="--i:4;"></span>
            <span style="--i:5;"></span>
            <span style="--i:10;"></span>
            <span style="--i:9;"></span>
            <span style="--i:20;"></span>
            <span style="--i:6;"></span>
            <span style="--i:16;"></span>
            <span style="--i:8;"></span>
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <span style="--i:19;"></span>
            <span style="--i:14;"></span>
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:15;"></span>
            <span style="--i:13;"></span>
            <span style="--i:7;"></span>
            <span style="--i:18;"></span>
          </div>
          <div class="circle">
            <div class="tea"></div>
          </div>
        </div>
        <div class="handle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CupOfTea'
}
</script>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .body {
    display: flex;
    justify-content: center;
    align-items:center;
    min-height: 100vh;
  }
  .container {
    position: relative;
    top: 50px;

    .cup {
      position: absolute;
      top: -500px;
      width: 280px;
      height: 300px;
      background:linear-gradient(to right,#f9f9f9,#d9d9d9);
      border-bottom-left-radius: 45%;
      border-bottom-right-radius: 45%;
      .top {
        position: absolute;
        top: -30px;
        left: 0;
        width: 100%;
        height: 60px;
        background:linear-gradient(to right,#f9f9f9,#d9d9d9);
        border-radius: 50%;
        .vapour {
          position: relative;
          display: flex;
          z-index: 1;
          padding: 0 20px;
          & span {
            position: relative;
            bottom: 50px;
            display: block;
            margin: 0 2px 50px;
            min-width: 6px;
            height: 120px;
            background: #bbbbbb;
            border-radius:50% ;
            animation: animate 5s linear infinite;
            opacity: 0;
            filter: blur(8px);
            animation-delay: calc(var(--i) * 0.5s);
            @keyframes animate {
              0% {
                transform: translateY(0) scaleX(1);
                opacity: 0;
              }
              15% {
                opacity: 1;
              }
              50% {
                transform: translateY(-150px) scaleX(5);
              }
              95% {
                opacity: 0;
              }
              100% {
                transform: translateY(-300px) scaleX(10);
              }
            }
          }
        }
        .circle {
          position: absolute;
          top: 5px;
          left: 10px;
          width: calc(100% - 20px);
          height: 50px;
          background:linear-gradient(to left,#f9f9f9,#d9d9d9);
          border-radius: 50%;
          box-sizing: border-box;
          // скрыть часть чая
          overflow: hidden;
          .tea {
            position: absolute;
            // утопить чай
            top: 20px;
            left: 0;
            width: 100%;
            height: 100%;
            background:linear-gradient(#c57e65,#e28462);
            border-radius: 50%;
          }
        }
      }
      // ручка
      .handle{
        position: absolute;
        right: -70px;
        top: 40px;
        width: 160px;
        height: 180px;
        border: 27px solid #dcdcdc;
        // убрать цвет
        border-left: 25px solid transparent;
        border-bottom: 25px solid transparent;
        border-radius: 50%;
        transform: rotate(42deg);
      }
    }
       // тарелка
    .plate {
      position: absolute;
      bottom: 150px;
      left: 50%;
      transform: translateX(-20%);
      width: 500px;
      height: 200px;
      background:linear-gradient(to right,#f9f9f9,#d9d9d9);
      border-radius:50%;
      box-shadow: 0 35px 35px rgba(0,0,0,.2);
      // коёмка
      &::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        border-radius: 50%;
        background:linear-gradient(to left,#f9f9f9,#d9d9d9);
      }
      // тень кружки
      &::after {
        content: '';
        position: absolute;
        top: 30px;
        left: 30px;
        right: 30px;
        bottom: 30px;
        border-radius: 50%;
        background:radial-gradient(rgba(154, 150, 150, 0.3)25%, transparent, transparent);
        border-radius: 50%;
      }
    }
  }

</style>
