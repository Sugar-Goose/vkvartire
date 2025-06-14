<template>
  <div class="main__works__container">
    <div class="cards__flex__container">
        <div class="card__with__number">
            <div class="number__wrapper">
                <div class="number">
                    <h4>1</h4>
                </div>
                <div class="divider"></div>
            </div>
            <div class="card__wrapper">
                <p class="text_lg_regular">Проект загружается в платформу — с визуализацией, планом работ и материалами</p>
            </div>
        </div>

        <div class="card__with__number">
            <div class="number__wrapper">
                <div class="number">
                    <h4>2</h4>
                </div>
                <div class="divider"></div>
            </div>
            <div class="card__wrapper">
                <p class="text_lg_regular">Покупатель выбирает исполнителя из списка рекомендованных подрядчиков</p>
            </div>
        </div>

        <div class="card__with__number">
            <div class="number__wrapper">
                <div class="number">
                    <h4>3</h4>
                </div>
                <div class="divider"></div>
            </div>
            <div class="card__wrapper">
                <p class="text_lg_regular">Вы получаете заказ — с чётким техническим заданием</p>
            </div>
        </div>

        <div class="card__with__number">
            <div class="number__wrapper">
                <div class="number">
                    <h4>4</h4>
                </div>
                <div class="divider"></div>
            </div>
            <div class="card__wrapper">
                <p class="text_lg_regular">Работаете по смете — заказчик всё уже видел, согласовал и оплатил</p>
            </div>
        </div>

        <div class="card__with__number">
            <div class="number__wrapper">
                <div class="number">
                    <h4>5</h4>
                </div>
            </div>
            <div class="card__wrapper">
                <p class="text_lg_regular">Мы следим за качеством и помогаем урегулировать вопросы</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowItWorks"
};
</script>

<style scoped>

.cards__flex__container {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
}
.card__wrapper {
    min-height: 100px;
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    border-radius: 24px;
    background: #FFF;
}

.card__with__number {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.number__wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
}

.number {
    display: flex;
    width: 72px;
    height: 72px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    aspect-ratio: 1/1;
    border-radius: 24px;
    background: #FFF;
}

.divider {
    height: 6px;
    border-radius: 16px;
    background: #FFF;
    width: 100%;
}

.number h4 {
    color: #915;
}

@media screen and (max-width: 732px) {
    .card__with__number {
        flex-direction: row-reverse;
    }

    .cards__flex__container {
        flex-direction: column;
    }

    .number__wrapper {
        flex-direction: column;
    }

    .divider {
        width: 6px;
        height: 100%;
    }
}
</style>