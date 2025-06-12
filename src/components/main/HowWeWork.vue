<template>
    <div class="container">
        <div class="text__wrapper">
            <h5>{{ title }}</h5>
            <div class="pills__container">
                <div class="pill" v-for="(item, index) in pills" :key="index">
                    <div class="image__container">
                        <component :is="item.icon" v-if="item.icon" />
                    </div>
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
        <div class="image__wrapper">
            <div class="hint__wrapper">
                <div class="hint__image__container">
                    <img :src="hint.image" width="24" height="24" v-if="hint.image" />
                </div>
                <p class="text_lg_regular">{{ hint.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HowWeWorkComp",
    props: {
        title: {
            type: String,
            default: "Как будет работать наш сервис",
        },
        pills: {
            type: Array,
            default: () => [],
            validator: (pills) => {
                return pills.every(
                    (pill) => typeof pill.text === "string" && (pill.icon === undefined || typeof pill.icon === "object")
                );
            },
        },
        hint: {
            type: Object,
            default: () => ({
                text: "Всё продумано: от розеток до того, куда ставить сушилку и где хранить обувь",
                image: "",
            }),
            validator: (hint) => typeof hint.text === "string" && typeof hint.image === "string",
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    padding: 32px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 32px;
    align-self: stretch;
    flex-wrap: wrap;
    border-radius: 48px;
    border: 1px solid #E9EAEB;
    background: #FFF;
    align-items: stretch;
}

.text__wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.image__wrapper {
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    background: url(../../assets/what_we_do_img.jpg) lightgray 50% / cover no-repeat;
    border-radius: 32px;
}

.hint__wrapper {
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.70);
    backdrop-filter: blur(8px);
}

.pills__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
}

.pill {
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
}

.image__container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 16px;
    background: #F5F5F5;
    border-radius: 16px;
}

.hint__image__container {
    padding: 16px;
    background: #FFF;
    border-radius: 16px;
}

@media screen and (max-width: 1641px) {
    .container {
        flex-direction: column;
        height: fit-content;
    }

    .image__wrapper {
        width: 100%;
        box-sizing: border-box;
        min-height: 440px;
    }
}

@media screen and (max-width: 732px) {
    .image__wrapper {
        min-height: 304px;
    }

    .hint__image__container {
        display: none;
    }

    .text_lg_regular {
        font-size: 16px;
    }
}
</style>