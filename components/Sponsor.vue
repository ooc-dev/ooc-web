<template>
  <section class="sponsor" id="sponsor">
      <div class="sponsor_in">
        <h2 class="sponsor_ttl">Sponsor</h2>
        <div class="sponsor_main">
            <SponsorList :sponsor="sponsor" />
        </div>
      </div>
  </section>
</template>

<script>
import SponsorList from '~/components/SponsorList.vue'

export default {
  props: ['sponsor'],
  components: {
    SponsorList
  }
}
</script>

<style lang="scss" scoped>
.sponsor {
    position: relative;
    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 375px;
        background: linear-gradient(to bottom, rgba($Tertiary, 0.05), rgba($Tertiary, 0));
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    &_in {
      position: relative;
        width: 1040px;
        margin: 0 auto;
        padding: 60px 0 120px;
        display: flex;
        @include sm-screen {
          width: 100%;
          padding: (132 / 750 * 100vw) 0 (160 / 750 * 100vw);
          display: block;
        }
    }
    &_ttl {
        @include ff-en;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: rgba($Tertiary, 0.9);
        line-height: 250px;
        text-align: center;
        font-size: 3.0rem;
        font-weight: 600;
        @include sm-screen {
          background: none;
          width: auto;
          height: auto;
          border-radius: 0;
          line-height: 1;
          font-size: 5.6rem;
          text-align: left;
          margin: 0 (60 / 750 * 100vw);
          position: relative;
        }
        &:before {
          @include sm-screen {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            left: ((-147 + 110 - 60) / 750 * 100vw);
            background: rgba($Tertiary, 0.5);
            width: (147 / 750 * 100vw);
            height: (147 / 750 * 100vw);
            border-radius: 50%;
            z-index: -1;
          }
        }
    }
    &_main {
        width: (630px + 60px);
        padding-top: (180px - 60px);
        padding-left: 60px;
        @include sm-screen {
          width: 100%;
          padding: (60 / 750 * 100vw) (60 / 750 * 100vw) 0;
          display: block;
        }
    }
}
</style>