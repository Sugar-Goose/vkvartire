<template>
    <B2c2HeaderComp />
    <SpacerComp />
    <div class="block_padding_container">
      <h4 style="text-align: center;">Проблемы, которые мы решаем</h4>
      <CardsComp :cards="cardData" class="cardsComp">
        <template #default="{ card }">
          <div>
            <img :src="card.image" class="card-image" />
            <h6>{{ card.title }}</h6>
            <p class="text_lg_regular">{{ card.text }}</p>
          </div>
        </template>
      </CardsComp>
      <h5 class="under__cards__header">Мы собрали опыт десятков семей и дизайнеров — и решили сделать то, чего не хватает рынку: простой и честный инструмент, чтобы увидеть, что получится до того, как ты потратишь деньги.</h5>
    </div>
    <SpacerComp />
    <div class="block_padding_container">
      <b2c2HowWeWork />
    </div>
    <SpacerComp />
    <div class="block_padding_container">
      <footerComp
        :headerTitle="'Что сейчас'"
        :headerText="'Сейчас мы готовим запуск и собираем идеи, мнения и обратную связь. Нам важно, чтобы ты — реальный будущий пользователь — уже сейчас мог сказать, чего ждёшь от такого сервиса.'"
        :ctaText="''"
        :ctaTitle="'Пройди короткий опрос в Telegram'"
        :ctaDescription="'В Telegram-боте тебя ждёт короткий опрос. Там ты можешь оставить свои ожидания, задать вопрос или просто сказать «я хочу быть в числе первых».'"
        :buttonText="'Хочу дизайн под свою планировку'"
      />
    </div>
    
</template>

<script>
import B2c2HeaderComp from './b2c2HeaderComp.vue';
import CardsComp from "../main/CardsComp.vue";
import SpacerComp from '../main/SpacerComp.vue';
import b2c2HowWeWork from './b2c2HowWeWork.vue';
import footerComp from '../main/footerComp.vue';

import manImage from "../../assets/man.png";
import ToolsImage from "../../assets/tools.png"
import DislikeImage from "../../assets/dislike.png"
import moneyImage from "../../assets/money.png";

export default {
  name: "B2C2MainComp",
  components: {
    B2c2HeaderComp,
    CardsComp,
    SpacerComp,
    b2c2HowWeWork,
    footerComp
  },
  data() {
    return {
      cardData: [
        {
          title: "«Потратили кучу денег на проект, но всё пошло не по плану»",
          text: "",
          image: moneyImage,
        },
        {
          title: "«Картинки красивые, но на практике — неудобно и не влезло»",
          text: "",
          image: DislikeImage,
        },
        {
          title: "«Наняли дизайнера, но всё затянулось и получилось не то»",
          text: "",
          image: manImage,
        },
        {
          title: "«Сами делали — и устали, и переделывали по три раза»",
          text: "",
          image: ToolsImage,
        },
      ],
    };
  },
};
</script>

<style scoped>

.block_padding_container {
  padding: 16px;
  box-sizing: border-box;
}
.cardsComp {
  margin-top: 40px;
  margin-bottom: 24px;
}

.under__cards__header {
   text-align: center;
   padding: 32px;
   background-color: #FFF;
   border-radius: 32px;
   border: 1px solid #E9EAEB;
}

.card-image {
  background-color: #f5f5ff;
  padding: 12px;
  border-radius: 16px;
}

@media screen and (max-width: 915px) {
  .block_padding_container {
    padding: 8px;
  }
}

.footer___container {
  min-height: auto;
}
</style>
