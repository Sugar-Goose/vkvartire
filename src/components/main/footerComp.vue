<template>
    <div class="container">
        <div class="text__wrapper">
            <div class="header__wrapper">
                <h5>Что можно сделать сейчас</h5>
                <p class="text_xl_regular">Проект сейчас в разработке. Мы активно тестируем идею, собираем мнения, проверяем гипотезы и слушаем будущих пользователей — </p>
            </div>
            <h6 class="cta__text">Чтобы в 2026 году запустить платформу, которая действительно будет помогать.</h6>
        </div>
        <div class="cta__wrapper">
            <div class="cta__text__wrapper">
                <h6>Пройди короткий опрос в Telegram</h6>
                <p class="text_lg_regular">Это займёт 2 минуты, но реально поможет нам создать лучший сервис. Ты можешь повлиять на то, какие стили и решения попадут в каталог, какие функции будут первыми, и какие ошибки мы сможем избежать.</p>
            </div>
            <a href="#" class="cta__button text_lg_meduim">Хочу дизайн без боли и переплат</a>
        </div>
        <img class="Vector" src="../../assets/Vector.png">
    </div>
</template>

<script>
export default {
    name: "footerComp"
};
</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 32px;
    border-radius: 48px;
    border: 1px solid #E9EAEB;
    background: #FFF;
    gap: 32px;
    height: fit-content;
}

.Vector {
    position: absolute;
    top:0;
    z-index: 0;
}

.text__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
}

.header__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 12px;
}

.cta__wrapper {
    padding: 24px;
    border-radius: 32px;
    border: 1px solid #E9EAEB;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    gap: 32px;
    z-index: 1;
}

 .cta__button {
    display: flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 999px;
    background: #915;
    width: fit-content;
    text-decoration: none;
 }

 .cta__text__wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
 }

 @media screen and (max-width: 1280px) {
    .container {
        display: flex;
        flex-direction: column;
    }

    .text__wrapper {
        height: 268px;
        flex-direction: column;
        justify-content: space-between;
    }

    .cta__wrapper {
        width: 100%;
        box-sizing: border-box;
    }
 }

 @media screen and (max-width: 732px) {
    .cta__button {
        text-align: center;
        border-radius: 16px;
    }

    .cta__wrapper {
        border-radius: 24px;
    }

    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 848px;
        justify-content: space-between;
        padding: 32px;
        border-radius: 48px;
        border: 1px solid #E9EAEB;
        background: #FFF;
        gap: 32px;
        height: fit-content;
    }

    .container {
        border-radius: 32px;
        padding: 16px;
        height: max-content;
        box-sizing: content-box;
    }

    .Vector {
        display: none;
    }
 }
</style>