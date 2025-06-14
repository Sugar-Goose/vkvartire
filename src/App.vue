<template>
  <router-view />
</template>

<script>

export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Tektur:wght@400..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
* {
  font-family: Tektur;
}

h2 {
  color: #181D27;
  font-family: Tektur;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  margin: 0;
}

h4 {
  color: #181d27;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  margin: 0;
  padding: 0;
}

h5 {
  color: #181D27;
  font-family: Tektur;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin: 0;
}

h6 {
  color: #181d27;
  font-family: Tektur;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
}

.text_lg_regular {
  color: #535862;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  padding: 0;
}

.text_xl_regular {
  color: #0a0005;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin: 0;
}

.text_lg_meduim {
  color: #FFF;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

.cta__text {
  color: #915;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
}

body {
  margin: 0;
  background-color: #f5f5f5;
}

@media screen and (max-width: 732px) {
  body {
    padding: 8px;
  }

  .text_xl_regular {
    font-size: 18px;
  }

  .text_lg_regular {
    font-size: 18px;
  }

  h2 {
    font-size: 32px;
  }

  h4 {
    font-size: 32px;
  }

  h5 {
    font-size: 24px;
    font-weight: 600;
  }

  h6 {
    font-size: 24px;
  }
}
</style>
