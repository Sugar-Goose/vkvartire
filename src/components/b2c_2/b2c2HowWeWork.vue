<template>
    <div class="main__container">
        <HowWeWork
            :title="sectionTitle"
            :pills="pillItems"
            :hint="hintContent"
            :backgroundImage="backgroundImage"
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
                    text: 'Ты указываешь свою планировку или выбираешь из типовых серий',
                    icon: IconHouse,
                },
                {
                    text: 'Ставишь фильтры: стиль, бюджет, цветовые предпочтения',
                    icon: IconList,
                },
                {
                    text: 'Смотришь реальные интерьеры с мебелью, светом, материалами и полным списком',
                    icon: IconHuge,
                },
                {
                    text: 'Видишь цену и можешь постепенно собрать проект «под себя» ',
                    icon: IconSearch,
                },
            ],
            hintContent: {
                text: 'Внутри каждого проекта — уже готовая структура: как расставить мебель, как освещается комната, что куда подключается, где купить и какие есть аналоги',
                image: require('../../assets/bulb.png'),
            },
            backgroundImage: require('../../assets/what_we_do_2.jpg')
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
