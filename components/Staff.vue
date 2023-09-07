<template>
  <section class="staff" id="staff">
      <div class="staff_in">
        <h2 class="staff_ttl">Staff</h2>
        <div class="staff_main">
            <StaffList :staff="staff" />
        </div>
      </div>
  </section>
</template>

<script>
import StaffList from '~/components/StaffList.vue'

export default {
  props: ['staff'],
  components: {
    StaffList
  }
}
</script>

<style lang="scss" scoped>
.staff {
    position: relative;
    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 375px;
        background: linear-gradient(to bottom, rgba($Quaternary, 0.05), rgba($Quaternary, 0));
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
          padding: (132 / 750 * 100vw) 0 (180 / 750 * 100vw);
          display: block;
        }
    }
    &_ttl {
        @include ff-en;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: rgba($Quaternary, 0.9);
        line-height: 250px;
        text-align: center;
        font-size: 3.0rem;
        font-weight: 700;
        @include sm-screen {
          background: none;
          width: auto;
          height: auto;
          border-radius: 0;
          line-height: 1;
          font-size: 5.6rem;
          text-align: right;
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
            right: ((-147 + 110 - 60) / 750 * 100vw);
            background: rgba($Quaternary, 0.5);
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