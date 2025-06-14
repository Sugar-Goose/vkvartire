<template>
  <B2bHeaderComp 
  :headerTitle="'Стабильная загрузка. Понятные задачи. Без бесконечных правок.'"
  :headerText="'Присоединяйтесь к платформе «Вквартирах» и получайте типовые заказы на ремонт и сборку интерьеров по готовым дизайн-проектам.'"
  />
  <div class="main__content"> 
    <SliderComp :image-urls="customImages" class="Slider"/>
  </div>
</template>

<script>
import B2bHeaderComp from '../main/B2bHeaderComp.vue';
import SliderComp from '../main/SliderComp.vue';

import BigSlider1 from '../../assets/big_slider_1.png'
import BigSlider2 from '../../assets/big_slider_2.png'
import BigSlider3 from '../../assets/big_slider_3.png'

export default {
  name: "B2BHeader",
  data() {
    return {
      customImages: [
        BigSlider1,
        BigSlider2,
        BigSlider3
      ]
    };
  },
  components: {
    B2bHeaderComp,
    SliderComp
  }
};
</script>

<style scoped>

.main__content {
    margin-top: 24px;
    gap: 24px;
    display: flex;
    justify-content:  space-between;
    box-sizing: border-box;
}

.Slider {
    min-width: 100%;
    box-sizing: border-box;
}

.main__text__container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.text__wrapper {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-radius: 32px;
    border: 1px solid #E9EAEB;
    background: #FFF;
}

.slider {
    width: 100%;
}

.text_lg_regular {
    color: #0A0005;
}

.hint__wrapper {
    border-radius: 24px;
    background: #F5F5F5;
    padding: 24px;
}
</style>
