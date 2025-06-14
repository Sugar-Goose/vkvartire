<template>
    <div class="main__header__container">
        <b2bHeader />
        <SpacerComp />
        <h4 class="cards__title">Проблемы, которые мы решаем для застройщика</h4>
        <CardsComp :cards="cardData" class="cardsComp">
        <template #default="{ card }">
            <div>
            <img :src="card.image" class="card-image" />
            <h6 v-html="card.title"></h6>
            <p class="text_lg_regular">{{ card.text }}</p>
            </div>
        </template>
        </CardsComp>
        <SpacerComp />
        <b2bHowWeWork />
        <SpacerComp />
        <footerComp
            :headerTitle="'Что сейчас'"
            :headerText="'Сейчас проект «Вквартирах» находится на этапе подготовки к выходу на рынок. Мы формируем базу планировок, каталогизируем лучшие решения и тестируем сценарии взаимодействия с девелоперами и управляющими компаниями.'"
            :ctaText="''"
            :ctaTitle="'Если вы хотите принять участие в проекте на ранней стадии, мы открыты к диалогу. Вы можете первыми:'"
            :ctaDescription="'- протестировать формат</br>- повлиять на архитектуру партнёрства</br>- получить доступ к аналитике и инсайтам потребительского поведения'"
            :buttonText="'Хочу дизайн под свою планировку'"
        /> 
    </div>
</template>

<script>
import b2bHeader from './b2bHeader.vue';
import SpacerComp from '../main/SpacerComp.vue';
import CardsComp from '../main/CardsComp.vue';
import b2bHowWeWork from './b2bHowWeWork.vue';
import footerComp from '../main/footerComp.vue';


export default {
  name: "B2BMainComp",
  components: {
    b2bHeader,
    SpacerComp,
    CardsComp,
    b2bHowWeWork,
    footerComp
  },
  data() {
    return {
      cardData: [
        {
          title: "Отделка «white box» или «чистовая» больше <span style='color: #915;'>не конкурентное</span> преимущество.",
          text: "Покупатели всё чаще ждут большего: не просто стены и штукатурку, а решение, которое облегчает их жизнь.",
        },
        {
          title: "Покупатель <span style='color: #915;'>теряется</span> в ремонте, делает «перепланировку»",
          text: "Мы предлагаем новый стандарт: дизайн-сценарии, которые можно внедрить на стадии сделки или сопровождения.",
        },
        {
          title: "Вы хотите <span style='color: #915;'>повышать ценность</span> объекта, но не всегда есть бюджет на show-room.",
          text: "Мы дадим визуальный и проектный контент под конкретные планировки — вы сможете использовать это в продаже, маркетинге и клиентском сопровождении.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main__header__container {
    padding: 24px;
}

.cards__title {
    text-align: center;
}

.cardsComp {
    margin-top: 40px;
}

@media screen and (max-width: 732px) {
  .main__header__container {
    padding: 8px;
  }
}
</style>
