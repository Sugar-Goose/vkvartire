<template>
    <div class="main__header__container">
        <b2b2Header />
        <div class="text___wrapper">
            <h5>«Вквартирах» — это новое поколение заказов для тех, кто устал от бардака в ремонтах.</h5>
            <p class="text_xl_regular">Мы создаём маркетплейс дизайн-решений под типовые квартиры и формируем сеть проверенных подрядчиков по всей стране. Вам не нужно искать клиентов, объяснять, как делать ремонт, и спорить о цвете стен — всё уже спроектировано и утверждено. Вы просто делаете свою работу — качественно, по стандарту, в срок.</p>
        </div>
        <SpacerComp />
        <div class="cards__main__container">
            <ListCardComp class="card"
                :title="'Проблемы, которые мы решаем:'"
                :cardItems="customItems"
                />
                <ListCardComp  class="card"
                :title="'С нами вы:'"
                :cardItems="customItems2"
                />
                <div class="custom__card card">
                    <h6>Все проекты стандартизированы. Все условия прозрачны. Ваша задача — просто выполнить работу на уровне.</h6>
                    <div class="vector__container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="486" height="391" viewBox="0 0 486 391" fill="none">
                            <path d="M380.216 101.231C334.054 86.6369 287.866 77.2549 241.679 73.0851C195.492 68.9154 149.731 70.3053 103.77 76.9074C77.6609 80.7297 51.5266 85.942 25.4173 92.8916L21.8741 21.6579C81.4805 35.9046 141.062 53.6262 200.643 74.8226C260.224 96.0189 319.806 120.69 379.387 149.184C412.834 165.168 446.256 181.847 479.703 199.916C481.663 200.958 484.603 207.908 485.708 234.317C486.739 258.988 484.829 271.845 483.246 271.15C421.152 249.258 359.007 247.173 296.888 265.242C234.768 283.311 172.699 321.882 110.706 380.259C75.8767 412.922 41.0728 452.188 6.31915 497.708C4.43445 500.14 1.31845 487.283 0.313263 463.307C-0.792419 437.246 1.26822 428.211 2.77597 426.474C64.6189 345.511 126.613 284.354 188.656 243.351C250.7 202.348 312.845 181.847 374.964 181.499C409.869 181.499 444.773 187.407 479.677 199.916L483.221 271.15C423.664 238.834 364.083 210.34 304.502 184.974C244.921 159.956 185.339 138.064 125.758 119.995C92.3112 109.918 58.8391 100.536 25.3922 92.5441C23.4321 92.1966 20.4669 84.2046 19.3864 58.1434C18.3058 32.0823 20.291 21.6579 21.849 21.3104C68.0616 9.49602 114.224 2.1989 160.411 0.461494C206.599 -1.27591 252.359 1.85142 298.32 10.5385C324.429 15.4032 350.564 22.0054 376.673 30.3449C378.633 31.0399 381.598 38.6845 382.679 64.7456C383.709 89.4168 381.799 102.274 380.216 101.579V101.231Z" fill="#FFE5ED"/>
                        </svg>
                    </div>
                </div>
        </div>
        <SpacerComp />
        <HowItWorks />
        <SpacerComp />
        <footerComp
            :headerTitle="'Что сейчас'"
            :headerText="'Мы формируем партнёрскую сеть по регионам: Москва, Санкт-Петербург, Казань, Сочи, Новосибирск, Екатеринбург и др.</br>Если вы — бригада, мастер, студия или ИП с опытом, желанием работать по-честному и интересом к современному рынку — оставьте заявку и войдите в пул первичных подрядчиков.'"
            :ctaText="''"
            :ctaTitle="'Плюсы раннего подключения:'"
            :ctaDescription="'- Рейтинг партнёров с самого запуска</br>- Персональная карточка на платформе</br>- Первые заказы до выхода в открытую продажу</br>- Поддержка в формировании портфолио и рабочих процессов'"
            :buttonText="'Хочу получать понятные заказы на ремонт'"
        /> 
    </div>
</template>

<script>
import b2b2Header from './b2b2Header.vue';
import SpacerComp from '../main/SpacerComp.vue';
import ListCardComp from '../main/ListCardComp.vue';
import HowItWorks from '../main/HowItWorks.vue';
import footerComp from '../main/footerComp.vue';

export default {
  name: "B2B2MainComp",
  data() {
    return {
      customItems: [
        {
          image: require('@/assets/dislike.png'),
          text: 'Клиент не знает, чего хочет — правит на ходу, срывает сроки, не платит.'
        },
        {
          image: require('@/assets/dislike.png'),
          text: 'Нет стабильности — то густо, то пусто.'
        },
        {
          image: require('@/assets/dislike.png'),
          text: 'Слишком много времени уходит на обсуждение и согласование'
        },
        {
          image: require('@/assets/dislike.png'),
          text: 'Вы не можете масштабироваться, потому что всё завязано на "ручном управлении"'
        }
      ],
      customItems2: [
        {
          image: require('@/assets/like.png'),
          text: 'Получаете стабильные заказы на типовые проекты'
        },
        {
          image: require('@/assets/like.png'),
          text: 'Упрощаете логистику и закупку — мы укажем материалы и поставщиков'
        },
        {
          image: require('@/assets/like.png'),
          text: 'Видите заранее объёмы, бюджеты и сроки'
        },
        {
          image: require('@/assets/like.png'),
          text: 'Не тратите время на «проектирование» — только исполнение'
        }
      ]
    }
  },
  components: {
    b2b2Header,
    SpacerComp,
    ListCardComp,
    HowItWorks,
    footerComp
  }
};
</script>

<style scoped>
.main__header__container {
    padding: 24px;
}

.cards__main__container {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 16px;
    align-self: stretch;
}

.card {
    max-width: 30%;
}

.vector__container {
    position: absolute;
    bottom: 0;
    height: 100%;
}

.vector__container svg {
    height: 100%;
}

.custom__card {
    height: 406px;
    position: relative;
    display: flex;
    width: fit-content;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-radius: 32px;
    border: 1px solid #E9EAEB;
    background: #FFF;
}

.custom__card h6 {
    text-align: center;
    color: #915;
    z-index: 2;
}

.text___wrapper {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    border-radius: 32px;
    border: 1px solid #E9EAEB;
    background: #FFF;
    margin-top: 16px;
}

@media screen and (max-width: 1024px) {
  .cards__main__container {
    flex-direction: column;
  }

  .card__container, .card {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 732px) {
  .main__header__container {
    padding: 8px;
  }

  .card__container {
    height: fit-content;
  }

  .vector__container {
    display: none;
  }
}
</style>
