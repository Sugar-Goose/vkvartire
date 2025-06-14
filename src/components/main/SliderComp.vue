<template>
  <div class="wrapper">
    <!-- Radio inputs for slide control -->
    <input
      v-for="index in numOfSlides"
      :key="'slide' + index"
      :id="'slide' + index"
      type="radio"
      name="slider"
      :checked="index === 1"
    />

    <!-- Slider content -->
    <div class="slider-wrapper">
      <div class="inner">
        <article v-for="(slide, index) in slides" :key="'article' + index">
          <div :class="['info', slide.infoPosition]">
            <h3>{{ slide.title }}</h3>
          </div>
          <img :src="slide.image" :alt="slide.title" />
        </article>
      </div>
    </div>

    <!-- Previous/Next controls -->
    <div class="slider-prev-next-control">
      <label v-for="index in numOfSlides" :key="'nav' + index" :for="'slide' + index"></label>
    </div>

    <!-- Dot controls -->
    <div class="slider-dot-control">
      <label v-for="index in numOfSlides" :key="'dot' + index" :for="'slide' + index"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderComp',
  data() {
    return {
      numOfSlides: 3,
      slides: [
        {
          title: '',
          image: 'https://i.ibb.co/DfZBPcFW/slider1.jpg',
          infoPosition: 'top-left',
        },
        {
          title: '',
          image: 'https://i.ibb.co/SD2Lj15v/slider2.png',
          infoPosition: 'bottom-right',
        },
        {
          title: '',
          image: 'https://i.ibb.co/vCcwJJb7/slider3.png',
          infoPosition: 'bottom-left',
        }
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 60em;
  width: 100%;
  margin: 0;
  position: relative;
}

input {
  display: none;
}

.inner {
  width: calc(100% * 5);
  line-height: 0;
}

article {
  width: calc(100% / 5);
  float: left;
  position: relative;
}

article img {
  width: 100%;
  display: block;
}

/*---- SET UP CONTROL ----*/
.slider-prev-next-control {
  height: 50px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  transform: translateY(-50%);
}

.slider-prev-next-control label {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.7;
  cursor: pointer;
}

.slider-prev-next-control label:hover {
  opacity: 1;
}

.slider-dot-control {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  bottom: 16px;
  text-align: center;
}

.slider-dot-control label {
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #FFF;
  opacity: 0.6;
  transition: all 0.3s;
}

.slider-dot-control label:hover {
  background: #FFF;
  opacity: 1;
}

/* Info Box */
.info {
  position: absolute;
  font-style: italic;
  line-height: 20px;
  opacity: 0;
  color: #000;
  text-align: left;
  transition: all 1000ms ease-out 600ms;
}

.info h3 {
  color: #fcfff4;
  margin: 0 0 5px;
  font-weight: normal;
  font-size: 1.5em;
  font-style: normal;
}

.info.top-left {
  top: 30px;
  left: 30px;
}

.info.top-right {
  top: 30px;
  right: 30px;
}

.info.bottom-left {
  bottom: 30px;
  left: 30px;
}

.info.bottom-right {
  bottom: 30px;
  right: 30px;
}

/* Slider Styling */
.slider-wrapper {
  width: 100%;
  overflow: hidden;
  border-radius: 32px;
  background: #fcfff4;
  transform: translateZ(0);
  transition: all 500ms ease-out;
}

.slider-wrapper .inner {
  transform: translateZ(0);
  transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
}

/*---- SET POSITION FOR SLIDE ----*/
#slide1:checked ~ .slider-wrapper .inner {
  margin-left: calc(-100% * 0);
}

#slide1:checked ~ .slider-dot-control label:nth-child(1) {
  background: #FFF;
  opacity: 1;
}

#slide1:checked ~ .slider-wrapper article:nth-child(1) .info {
  opacity: 1;
}

#slide2:checked ~ .slider-wrapper .inner {
  margin-left: calc(-100% * 1);
}

#slide2:checked ~ .slider-dot-control label:nth-child(2) {
  background: #FFF;
  opacity: 1;
}

#slide2:checked ~ .slider-wrapper article:nth-child(2) .info {
  opacity: 1;
}

#slide3:checked ~ .slider-wrapper .inner {
  margin-left: calc(-100% * 2);
}

#slide3:checked ~ .slider-dot-control label:nth-child(3) {
  background: #FFF;
  opacity: 1;
}

#slide3:checked ~ .slider-wrapper article:nth-child(3) .info {
  opacity: 1;
}

#slide4:checked ~ .slider-wrapper .inner {
  margin-left: calc(-100% * 3);
}

#slide4:checked ~ .slider-dot-control label:nth-child(4) {
  background: #FFF;
}

#slide4:checked ~ .slider-wrapper article:nth-child(4) .info {
  opacity: 1;
}

#slide5:checked ~ .slider-wrapper .inner {
  margin-left: calc(-100% * 4);
}

#slide5:checked ~ .slider-dot-control label:nth-child(5) {
  background: #FFF;
}

#slide5:checked ~ .slider-wrapper article:nth-child(5) .info {
  opacity: 1;
}

/*---- PREV/NEXT BUTTONS ----*/
#slide1:checked ~ .slider-prev-next-control label:nth-child(2) {
  display: block;
  float: right;
  margin-right: 5px;
}

#slide1:checked ~ .slider-prev-next-control label:nth-child(2)::after {
  content: url('../../assets/carousel__arrow_right.png');
  font-size: 2em;
  display: block;
  text-align: center;
  line-height: 40px;
  color: #777;
}

#slide2:checked ~ .slider-prev-next-control label:nth-child(3) {
  display: block;
  float: right;
  margin-right: 5px;
}

#slide2:checked ~ .slider-prev-next-control label:nth-child(3)::after {
  content: url('../../assets/carousel__arrow_right.png');
  font-size: 2em;
  display: block;
  text-align: center;
  line-height: 40px;
  color: #777;
}

#slide3:checked ~ .slider-prev-next-control label:nth-child(4) {
  display: block;
  float: right;
  margin-right: 5px;
}

#slide3:checked ~ .slider-prev-next-control label:nth-child(4)::after {
  content: url('../../assets/carousel__arrow_right.png');
  font-size: 2em;
  display: block;
  text-align: center;
  line-height: 40px;
  color: #777;
}

#slide4:checked ~ .slider-prev-next-control label:nth-child(5) {
  display: block;
  float: right;
  margin-right: 5px;
}

#slide4:checked ~ .slider-prev-next-control label:nth-child(5)::after {
  content: url('../../assets/carousel__arrow_right.png');
  font-size: 2em;
  display: block;
  text-align: center;
  line-height: 40px;
  color: #777;
}

#slide5:checked ~ .slider-prev-next-control label:nth-child(1) {
  display: block;
  float: right;
  margin-right: 5px;
}

#slide5:checked ~ .slider-prev-next-control label:nth-child(1)::after {
  content: url('../../assets/carousel__arrow_right.png');
  font-size: 2em;
  display: block;
  text-align: center;
  line-height: 40px;
  color: #777;
}

#slide2:checked ~ .slider-prev-next-control label:nth-child(1) {
  display: block;
  float: left;
  margin-left: 5px;
}

#slide2:checked ~ .slider-prev-next-control label:nth-child(1)::after {
  content: url('../../assets/carousel__arrow__left.png');
  font-size: 2em;
  display: block;
  text-align: center;
  line-height: 40px;
  color: #777;
}

#slide3:checked ~ .slider-prev-next-control label:nth-child(2) {
  display: block;
  float: left;
  margin-left: 5px;
}

#slide3:checked ~ .slider-prev-next-control label:nth-child(2)::after {
  content: url('../../assets/carousel__arrow__left.png');
  font-size: 2em;
  display: block;
  text-align: center;
  line-height: 40px;
  color: #777;
}

#slide4:checked ~ .slider-prev-next-control label:nth-child(3) {
  display: block;
  float: left;
  margin-left: 5px;
}

#slide4:checked ~ .slider-prev-next-control label:nth-child(3)::after {
  content: url('../../assets/carousel__arrow__left.png');
  font-size: 2em;
  display: block;
  text-align: center;
  line-height: 40px;
  color: #777;
}

#slide5:checked ~ .slider-prev-next-control label:nth-child(4) {
  display: block;
  float: left;
  margin-left: 5px;
}

#slide5:checked ~ .slider-prev-next-control label:nth-child(4)::after {
  content: url('../../assets/carousel__arrow__left.png');
  font-size: 2em;
  display: block;
  text-align: center;
  line-height: 40px;
  color: #777;
}

#slide1:checked ~ .slider-prev-next-control label:nth-child(5) {
  display: block;
  float: left;
  margin-left: 5px;
}

#slide1:checked ~ .slider-prev-next-control label:nth-child(5)::after {
  content: url('../../assets/carousel__arrow__left.png');
  font-size: 2em;
  display: block;
  text-align: center;
  line-height: 40px;
  color: #777;
}

/*---- RESPONSIVE ----*/
@media only screen and (max-width: 850px) and (min-width: 450px) {
  .slider-wrapper {
    border-radius: 0;
  }
}

@media only screen and (max-width: 450px) {
  .slider-wrapper {
    border-radius: 0;
  }

  .info {
    opacity: 0;
  }
}

@media only screen and (min-width: 850px) {
  body {
    padding: 0 80px;
  }
}
</style>