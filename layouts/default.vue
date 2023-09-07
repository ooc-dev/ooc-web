<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
  font-weight: 500;
    font-size: 10px;
    color: $TextPrimary;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  min-width: 1040px;
  position:relative;
  @include sm-screen {
    min-width: 320px;
    width: 100%;
    font-size: (10 / 750 * 100vw);
  }
}
body {
  @include sm-screen {
    overflow-x: hidden;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page-enter-active, .page-leave-active {
  transition: 0.5s ease-in-out
}
.page-enter, .page-leave-active {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
