<template>
  <div class="main__comp__container">
    <B2cHeader />
    <CardsComp :cards="cardData" class="cardsComp">
      <template #default="{ card }">
        <div>
          <img :src="card.image" class="card-image" />
          <h6>{{ card.title }}</h6>
          <p class="text_lg_regular">{{ card.text }}</p>
        </div>
      </template>
    </CardsComp>
    <SpacerComp />
    <b2cHowWeWork />
    <SpacerComp />
    <footerComp />
  </div>
</template>

<script>
import CardsComp from "../main/CardsComp.vue";
import B2cHeader from "./b2cHeader.vue";
import SpacerComp from "../main/SpacerComp.vue";
import b2cHowWeWork from "./b2cHowWeWork.vue";
import footerComp from "../main/footerComp.vue";

import manImage from "../../assets/man.png";
import faceImage from "../../assets/face.png";
import moneyImage from "../../assets/money.png";

export default {
  name: "B2CMainComp",
  components: {
    CardsComp,
    B2cHeader,
    SpacerComp,
    b2cHowWeWork,
    footerComp
  },
  data() {
    return {
      cardData: [
        {
          title: "Тысячи вариантов — и ни один не уверен",
          text: "Каталоги, шоурумы, TikTok — всё красиво, но когда доходит до дела, выясняется, что ничего не подходит под твою квартиру.",
          image: manImage,
        },
        {
          title: "Дизайнеры берут 100 000+ только за проект",
          text: "А дальше — закупка, поиск, логистика, замеры, корректировки, новые расходы, ссоры, переделки...",
          image: moneyImage,
        },
        {
          title: "Планировка обычная, но идей под неё нет",
          text: "Мы собираем лучшее — реальные дизайн-решения от профи, адаптированные под каждый тип квартир.",
          image: faceImage,
        },
      ],
    };
  },
};
</script>

<style scoped>
.cardsComp {
  margin-top: 24px;
}

.card-image {
  background-color: #f5f5ff;
  padding: 12px;
  border-radius: 16px;
}

.main__comp__container {
  padding: 24px;
}

@media screen and (max-width: 915px) {
  .footer___container {
    min-height: 960px;
  }

  .main__comp__container {
    padding: 8px;
  }
}
</style>
