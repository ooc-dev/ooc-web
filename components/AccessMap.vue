<template>
  <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.3020250896375!2d139.72994761525982!3d35.71878998018565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188da7f9b14899%3A0x8be4584bf2f85995!2z44GK6Iy244Gu5rC05aWz5a2Q5aSn5a2m!5e0!3m2!1sja!2sjp!4v1572764602845!5m2!1sja!2sjp" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
  </div>
</template>

<style lang="scss" scoped>
.map {
    > iframe {
        width: 100%;
        height: (524 / 1440 * 100vw);
        vertical-align: bottom;
        @include sm-screen {
            height: (524 / 750 * 100vw);
        }
    }
}
</style>