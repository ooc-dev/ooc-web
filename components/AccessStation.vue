<template>
  <div class="station">
      <h3 class="station_ttl">最寄り駅から</h3>
      <ul class="station_list">
          <li>東京メトロ丸ノ内線「茗荷谷」駅より徒歩7分</li>
          <li>東京メトロ有楽町線「護国寺」駅より徒歩8分</li>
          <li>都営バス「大塚2丁目」停留所下車徒歩1分</li>
      </ul>
  </div>
</template>

<style lang="scss" scoped>
.station {
    padding-left: 60px;
    @include sm-screen {
        padding: 0;
        margin-top: (80 / 750 * 100vw);
    }
    &_ttl {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1;
        @include sm-screen {
            font-size: 3.6rem;
        }
    }
    &_list {
        margin-top: 30px;
        font-size: 1.6rem;
        line-height: 1.8;
        list-style: none;
        @include sm-screen {
            font-size: 2.4rem;
            margin-top: (40 / 750 * 100vw);
        }
        > li {
            position: relative;
            padding-left: 14px;
            @include sm-screen {
                padding-left: ((16 + 8) / 750 * 100vw);
            }
            &:before {
                content: '';
                height: 4px;
                width: 4px;
                display: block;
                background: $Secondary;
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0;
                left: 0;
                border-radius: 50%;
                @include sm-screen {
                    height: (6 / 750 * 100vw);
                    width: (6 / 750 * 100vw);
                }
            }
        }
    }
}
</style>