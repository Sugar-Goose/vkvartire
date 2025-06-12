<template>
  <div class="card-list">
    <div v-for="(card, index) in cards" :key="index" class="card">
      <slot :card="card" :index="index">
        <img :src="card.image" :alt="card.title" class="card-image" />
        <h6>{{ card.title }}</h6>
        <p>{{ card.text }}</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsComp",
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  gap: 16px;
  justify-content: center;
}
.card {
  border-radius: 32px;
  border: #e9eaeb;
  background: #fff;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border: 1px solid #E9EAEB;
}

.card-image {
  background: #f5f5f5;
}

@media screen and (max-width: 732px) {
  .card-list {
    flex-wrap: wrap;
  }

  .card {
    padding: 16px;
    gap: 24px;
  }
}
</style>
