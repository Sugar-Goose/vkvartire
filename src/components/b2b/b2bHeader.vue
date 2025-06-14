<template>
  <B2bHeaderComp />
  <div class="main__content"> 
    <div class="main__text__container">
            <div class="text__wrapper">
            <div class="text__container">
                <h6>Проект «Вквартирах» —</h6>
                <p class="text_xl_regular">Маркетплейс дизайнов интерьера, созданных специально под стандартные и массовые планировки жилых домов. Мы объединяем дизайн, аналитику и потребительский опыт — чтобы помочь девелоперам повысить ликвидность, ускорить сделки и вывести продукт на новый уровень.</p>
            </div>
            <div class="hint__wrapper">
                <p class="text_lg_regular">Запуск платформы — в 2026 году. Сейчас мы формируем пул партнёров и собираем заявки от компаний, которым важно не просто продавать метры, а создавать продукт с добавленной ценностью.</p>
            </div>
        </div>
        <h5>Конкретные интерьеры. Под конкретные квартиры. С конкретным бюджетом и мебелью из доступных поставок</h5>
    </div>
    <SliderComp :image-urls="customImages" class="slider"/>
  </div>
</template>

<script>
import B2bHeaderComp from '../main/B2bHeaderComp.vue';
import SliderComp from '../main/SliderComp.vue';

import Slider1 from '../../assets/slider1.jpg'
import Slider2 from '../../assets/slider2.png'
import Slider3 from '../../assets/slider3.png'

export default {
  name: "B2BHeader",
  data() {
    return {
      customImages: [
        Slider1,
        Slider2,
        Slider3
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
    width: 50%;
}

.text_lg_regular {
    color: #0A0005;
}

.hint__wrapper {
    border-radius: 24px;
    background: #F5F5F5;
    padding: 24px;
}

@media screen and (max-width: 1024px) {
  .main__content {
    flex-direction: column;
  }

  .text__wrapper {
    width: 100%;
    box-sizing: border-box;
  }

  .main__text__container {
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    gap: 56px;
  }

  .slider {
    width: 100%;
  }
}
</style>
