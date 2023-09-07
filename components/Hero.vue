<template>
    <div class="hero" id="hero">
        <div class="mainvisual">
            <h1 class="mainvisual_logo">
                <img src="/img/logo.svg" alt="Object Oriented Conference">
            </h1>
            <p class="mainvisual_date">2020.02.16 SUN<br>10:00 - 17:00</p>
            <p class="mainvisual_place">お茶の水女子大学</p>
            <HeroBtn />
            <HeroAnimate />
        </div>
    <Twitter />
    </div>
</template>

<script>
import HeroAnimate from '~/components/HeroAnimate.vue'
import HeroBtn from '~/components/HeroBtn.vue'
import Twitter from '~/components/Twitter.vue'

export default {
  components: {
    HeroAnimate,
    HeroBtn,
    Twitter
  }
}
</script>

<style lang="scss" scoped>
.mainvisual {
    position: relative;
    height: calc(100vh - 70px);
    min-height: 700px;
    width: 100vw;
    @include md-screen {
        width: 100%;
    }
    @include sm-screen {
        height: (1324 / 750 * 100vw);
        min-height: 0;
    }
    &_logo {
        position: absolute;
        top: calc(50% - (140px / 2) - (140px / 2) - 70px);
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 600px;
        height: 140px;
        // opacity: 0.5;
        @include sm-screen {
            width: (630 / 750 * 100vw);
            top: (320 / 750 * 100vw);
            height: auto;
        }
        img {
            width: 100%;
            height: auto;
        }
    }
    &_date {
        @include ff-en;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: (28.8 / 14);
        width: 600px;
        margin: 0 auto;
        position: absolute;
        top: calc(50% - (140px / 2) + (140px / 2) + 83px - 70px);
        left: 0;
        right: 0;
        padding-left: 464px;
        @include sm-screen {
            top: (587 / 750 * 100vw);
            font-size: 2.4rem;
            padding-left: (60 / 750 * 100vw);
            line-height: (43.2 / 24);
            width: auto;
        }
    }
    &_place {
        font-size: 1.4rem;
        font-weight: 700;
        margin-top: 20px;
        background: url(/img/pin.svg) no-repeat 464px center;
        width: 600px;
        margin: 0 auto;
        position: absolute;
        top: calc(50% - (140px / 2) + (140px / 2) + 160px - 70px);
        left: 0;
        right: 0;
        padding-left: (464px + 19px);
        @include sm-screen {
            width: auto;
            top: (694 / 750 * 100vw);
            background-position: (60 / 750 * 100vw) center;
            background-size: (24 / 750 * 100vw) (32 / 750 * 100vw);
            font-size: 2.4rem;
            padding-left: ((60 + 24 + 10) / 750 * 100vw);
        }
    }
}
</style>