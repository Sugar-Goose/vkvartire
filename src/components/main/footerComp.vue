<template>
    <div class="footer___container">
        <div class="text__wrapper">
            <div class="header__wrapper">
                <h5>{{ headerTitle }}</h5>
                <p class="text_xl_regular" v-html="headerText"></p>
            </div>
            <h6 class="cta__text">{{ ctaText }}</h6>
        </div>
        <div class="cta__wrapper">
            <div class="cta__text__wrapper">
                <h6>{{ ctaTitle }}</h6>
                <p class="text_lg_regular" v-html="ctaDescription"></p>
            </div>
            <a href="#" class="cta__button text_lg_meduim">{{ buttonText }}</a>
        </div>
        <img class="Vector" src="../../assets/Vector.png">
    </div>
</template>

<script>
export default {
    name: "footerComp",
    props: {
        headerTitle: {
            type: String,
            default: "Что можно сделать сейчас",
        },
        headerText: {
            type: String,
            default: "Проект сейчас в разработке. Мы активно тестируем идею, собираем мнения, проверяем гипотезы и слушаем будущих пользователей —",
        },
        ctaText: {
            type: String,
            default: "Чтобы в 2026 году запустить платформу, которая действительно будет помогать.",
        },
        ctaTitle: {
            type: String,
            default: "Пройди короткий опрос в Telegram",
        },
        ctaDescription: {
            type: String,
            default: "Это займёт 2 минуты, но реально поможет нам создать лучший сервис. Ты можешь повлиять на то, какие стили и решения попадут в каталог, какие функции будут первыми, и какие ошибки мы сможем избежать.",
        },
        buttonText: {
            type: String,
            default: "Хочу дизайн без боли и переплат",
        },
    },
};
</script>

<style scoped>
.footer___container {
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
    top: 0;
    z-index: 0;
    min-height: 100%;
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
    transition: all 0.25s;
}

.cta__button:hover {
    background: transparent;
    color: #915;
    transition: all 0.25s;
}

.cta__text__wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

@media screen and (max-width: 1280px) {
    .footer___container {
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

@media screen and (max-width: 1024px) {
    .Vector {
        display: none;
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

    .footer___container {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 848px;
        height: fit-content;
        justify-content: space-between;
        padding: 32px;
        border-radius: 48px;
        border: 1px solid #E9EAEB;
        background: #FFF;
        gap: 32px;
        height: fit-content;
    }

    .footer___container {
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