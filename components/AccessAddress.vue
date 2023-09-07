<template>
  <div class="address">
      <h3 class="address_ttl">住所</h3>
      <div class="address_txt">
        <p>〒112-8610<br>東京都文京区大塚2-1-1</p>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.address {
    &_ttl {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1;
        @include sm-screen {
            font-size: 3.6rem;
        }
    }
    &_txt {
        // margin-top: (30 - (16 * (1.8 / 2)));
        margin-top: 30px;
        font-size: 1.6rem;
        line-height: 1.8;
        @include sm-screen {
            font-size: 2.4rem;
            margin-top: (40 / 750 * 100vw);
        }
        > p {
            margin-top: 1em;
        }
    }
}
</style>