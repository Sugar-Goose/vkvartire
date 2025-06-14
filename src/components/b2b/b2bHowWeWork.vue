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

import IconCheck from '../svgs/IconCheck.vue';

export default {
  name: "B2BHowWeWork",
  components: {
    HowWeWork
  },
  data() {
        return {
            sectionTitle: 'Как это будет работать',
            pillItems: [
                {
                    text: 'Каталог решений под типовые планировки вашего ЖК',
                    icon: IconCheck,
                },
                {
                    text: 'Возможность внедрять маркетплейс в клиентские сценарии (сайт, личный кабинет, шоурум)',
                    icon: IconCheck,
                },
                {
                    text: 'Гибкая система партнёрства: white label, франшиза или внутренняя интеграция',
                    icon: IconCheck,
                },
                {
                    text: 'Все проекты адаптированы под реалии — реальные отделочные материалы, мебель, техника,</br>просчёт бюджета и визуальные материалы',
                    icon: IconCheck,
                },
                {
                    text: 'Возможность кастомизации под ваш бренд и стандарты',
                    icon: IconCheck,
                },
            ],
            hintContent: {
                text: 'Итог: покупатель получает готовую концепцию «под ключ», а вы — улучшенную воронку продаж, рост NPS и дифференциацию от конкурентов. ',
                image: require('../../assets/fire.png'),
            },
            backgroundImage: require('../../assets/what_we_do_3.jpg')
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
