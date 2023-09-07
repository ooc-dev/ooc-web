<template>
  <section class="access" id="access">
      <div class="access_in">
        <h2 class="access_ttl">Access</h2>
        <div class="access_main">
            <AccessAddress />
            <AccessStation />
        </div>
      </div>
      <AccessMap />
  </section>
</template>

<script>
import AccessAddress from '~/components/AccessAddress.vue'
import AccessStation from '~/components/AccessStation.vue'
import AccessMap from '~/components/AccessMap.vue'

export default {
  components: {
    AccessAddress,
    AccessStation,
    AccessMap
  }
}
</script>

<style lang="scss" scoped>
.access {
    position: relative;
    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 375px;
        background: linear-gradient(to bottom, rgba($Secondary, .05), rgba($Secondary, 0));
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
        flex-direction: row-reverse;
        @include sm-screen {
          width: 100%;
          padding: (132 / 750 * 100vw) 0 (80 / 750 * 100vw);
          display: block;
        }
    }
    &_ttl {
        @include ff-en;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: rgba($Secondary, 0.9);
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
          text-align: right;
        }
        &:before {
          @include sm-screen {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            right: ((-147 + 110 - 60) / 750 * 100vw);
            background: rgba($Secondary, 0.5);
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
        padding-right: 60px;
        display: flex;
        @include sm-screen {
          width: 100%;
          padding: (60 / 750 * 100vw) (60 / 750 * 100vw) 0;
          display: block;
        }
    }
}
</style>