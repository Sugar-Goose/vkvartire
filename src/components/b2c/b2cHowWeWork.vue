<template>
    <div class="main__container">
        <div class="header__container">
            <h4>Мы хотим, чтобы интерьер стал не головной болью</h4>
            <p class="text_lg_regular">А удобной, быстрой и понятной услугой — как доставка еды или подписка на музыку.</p>
        </div>
        <HowWeWork
            :title="sectionTitle"
            :pills="pillItems"
            :hint="hintContent"
        />
    </div>
</template>

<script>
import HowWeWork from '../main/HowWeWork.vue';

import IconHouse from '../svgs/IconHouse.vue';
import IconHuge from '../svgs/IconHuge.vue';
import IconList from '../svgs/IconList.vue';
import IconSearch from '../svgs/IconSearch.vue';

export default {
  name: "B2CHowWeWork",
  components: {
    HowWeWork
  },
  data() {
        return {
            sectionTitle: 'Как будет работать наш сервис',
            pillItems: [
                {
                    text: 'Ты выбираешь свою планировку из списка (или загружаешь свою)',
                    icon: IconHouse,
                },
                {
                    text: 'Ставишь галочки: любимый стиль, привычки (любишь сидеть у окна? Готовишь дома? Часто приходят гости?)',
                    icon: IconList,
                },
                {
                    text: 'Смотришь подборку готовых интерьеров: с фото, ценами, списком мебели и даже ссылками на товары',
                    icon: IconHuge,
                },
                {
                    text: 'Готовый план можно будет купить, адаптировать и реализовать шаг за шагом',
                    icon: IconSearch,
                },
            ],
            hintContent: {
                text: 'Всё продумано: от розеток до того, куда ставить сушилку и где хранить обувь',
                image: require('../../assets/bulb.png'),
            },
        };
    },
};
</script>

<style scoped>
.header__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.main__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

</style>
