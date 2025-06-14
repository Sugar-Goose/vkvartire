<template>
  <div class="card__container">
    <h5>{{ title }}</h5>
    <div class="card__list__container">
      <div class="pill" v-for="(item, index) in cardItems" :key="index">
        <img :src="item.image" :alt="item.text">
        <p class="text_lg_regular">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCardComp",
  props: {
    title: {
      type: String,
      default: "Проблемы, которые мы решаем:"
    },
    cardItems: {
      type: Array,
      default: () => [
        {
          image: require("../../assets/dislike.png"),
          text: "Клиент не знает, чего хочет — правит на ходу, срывает сроки, не платит."
        },
        {
          image: require("../../assets/dislike.png"),
          text: "Нет стабильности — то густо, то пусто."
        },
        {
          image: require("../../assets/dislike.png"),
          text: "Слишком много времени уходит на обсуждение и согласование"
        },
        {
          image: require("../../assets/dislike.png"),
          text: "Вы не можете масштабироваться, потому что всё завязано на 'ручном управлении'"
        }
      ]
    }
  }
};
</script>

<style scoped>
.card__container {
  display: flex;
  height: 406px;
  width: fit-content;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  border-radius: 32px;
  border: 1px solid #E9EAEB;
  background: #FFF;
}

.card__list__container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pill {
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}

.pill img {
  width: 24px;
  padding: 12px;
  border-radius: 16px;
  background: #F5F5F5;
}

.text_lg_regular {
  color: #414651;
}

@media screen and (max-width: 732px) {
  .pill {
    flex-direction: column;
    align-items: start;
  }
}
</style>