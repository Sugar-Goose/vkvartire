<template>
    <div class="main__header__container">
        <b2fHeader />
        <SpacerComp />
        <h4 style="text-align: center; margin-bottom: 40px;">Почему это важно</h4>
        <div class="cards__main__container">
            <ListCardComp class="card"
                :title="'Рынок дизайна перегрет точечными заказами:'"
                :cardItems="customItems"
                />
                <ListCardComp  class="card"
                :title="'Мы предлагаем новый формат:'"
                :cardItems="customItems2"
                />
        </div>
        <SpacerComp />
        <b2fHowWeWork />
        <SpacerComp />
        <footerComp
            :headerTitle="'Что сейчас'"
            :headerText="'Мы готовим инфраструктуру платформы и формируем первую линейку проектов</br></br>Сейчас нельзя купить проект, но можно уже стать частью команды, заложить свою экспертизу в платформу и участвовать в создании нового рынка массового дизайна.'"
            :ctaText="''"
            :ctaTitle="'Если ты дизайнер, визуализатор или подрядчик — мы приглашаем тебя:'"
            :ctaDescription="'- Протестировать формат</br>- Стать автором первых проектов</br>- Получить доступ к аналитике и инструментам раньше всех</br>- Зарабатывать, не ограничивая себя по времени и месту'"
            :buttonText="'Хочу создавать дизайны, которые покупают тысячи'"
        />
    </div>
</template>

<script>
import b2fHeader from './b2fHeader.vue';
import SpacerComp from '../main/SpacerComp.vue';
import ListCardComp from '../main/ListCardComp.vue';
import b2fHowWeWork from './b2fHowWeWork.vue';
import footerComp from '../main/footerComp.vue';

export default {
  name: "B2FMainComp",
  components: {
    b2fHeader,
    SpacerComp,
    ListCardComp,
    b2fHowWeWork,
    footerComp
  },
  data() {
    return {
      customItems: [
        {
          image: require('@/assets/dislike.png'),
          text: 'Клиенты выматывают, бюджеты не сходятся, правки бесконечны'
        },
        {
          image: require('@/assets/dislike.png'),
          text: 'Время на один проект — недели, а выхлоп не всегда оправдан'
        },
        {
          image: require('@/assets/dislike.png'),
          text: 'Одна и та же работа повторяется снова и снова'
        },
        {
          image: require('@/assets/dislike.png'),
          text: 'Еще одна проблема'
        }
      ],
      customItems2: [
        {
          image: require('@/assets/like.png'),
          text: 'Делаешь один раз — продаёшь много раз'
        },
        {
          image: require('@/assets/like.png'),
          text: 'Работаешь на массовую аудиторию'
        },
        {
          image: require('@/assets/like.png'),
          text: 'Получаешь пассивный доход с каждого заказа'
        },
        {
          image: require('@/assets/like.png'),
          text: 'Входишь в пул авторов федеральной платформы'
        }
      ]
    }
  },
};
</script>

<style scoped>
.main__header__container {
    padding: 24px;
}

.cards__main__container {
    display: flex;
    justify-content: center;
    gap: 16px;
}

.card {
    width: 100%;
}

@media screen and (max-width: 1024px) {
    .cards__main__container {
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 732px) {
    .main__header__container {
        padding: 8px;
    }

    .card {
        height: fit-content;
    }

    .footer___container {
        min-height: 900px;
    }

}
</style>
