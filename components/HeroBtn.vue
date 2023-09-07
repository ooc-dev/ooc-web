<template>
  <ul class="btn">
      <!-- TODO:タイムテーブル or セッション・スポンサー募集どっちかにする -->
      <!-- <li class="btn_item"><a href="https://fortee.jp/pobject-oriented-conference-2020/timetable" target="_blank">タイムテーブル</a></li> -->
      <li class="btn_item">
          <div class="btn_recruit">
              <p class="btn_recruit_ttl">当日スタッフ絶賛募集中！</p>
              <div class="btn_recruit_list">
                <p class="btn_recruit_item"><a href="https://esa-pages.io/p/sharing/13679/posts/26/784afe35d5c31ee15731.html" target="_blank">当日スタッフ<br>応募</a></p>
                <p class="btn_recruit_item"><a href="https://fortee.jp/object-oriented-conference-2020/timetable" target="_blank">タイムテーブル</a></p>
              </div>
          </div>
      </li>
      <li class="btn_item"><a href="https://ooc.connpass.com/event/157193/" target="">イベントに申し込む</a></li>
  </ul>
</template>

<style lang="scss" scoped>
.btn {
    display: flex;
    margin: 0 auto;
    list-style: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    // top: calc(50% - (140px / 2) + (140px / 2) + 313px - 70px);
    bottom: 70px;
    left: 0;
    right: 0;
    @include sm-screen {
        bottom: (80 / 750 * 100vw);
        flex-wrap: wrap;
        // flex-wrap: wrap-reverse; // TODO:タイムテーブル表示のときはタイムテーブルが下になるようにする
    }
    &_item {
        position: relative;
        > a {
            position: relative;
            display: block;
            border-radius: 100px;
            border: 1px solid $TextPrimary;
            color: $TextPrimary;
            text-align: center;
            text-decoration: none;
            font-weight: 700;
        }
        &:nth-child(1) {
            > a {
                width: 240px;
                height: 70px;
                line-height: 70px;
                font-size: 1.8rem;
                @include sm-screen {
                    margin-top: (60 / 750 * 100vw);
                    width: (450 / 750 * 100vw);
                    font-size: 3.6rem;
                    height: (100 / 750 * 100vw);
                    line-height: (100 / 750 * 100vw);
                }
            }
        }
        &:nth-child(2) {
            > a {
                margin-left: 35px;
                width: 500px;
                height: 100px;
                line-height: 100px;
                font-size: 2.4rem;
                // background: $White; // TODO:タイムテーブル表示のときは白にする
                background: $TextPrimary;
                color: $White; // TODO:タイムテーブル表示のときは黒にする
                @include sm-screen {
                    width: (630 / 750 * 100vw);
                    font-size: 3.6rem;
                    margin: 0;
                    height: (130 / 750 * 100vw);
                    line-height: (130 / 750 * 100vw);
                }
            }
            &:before {
                content: '';
                position: absolute;
                top: 20px;
                left: 0;
                right: 0;
                margin: 0 auto;
                display: block;
                width: 400px;
                height: 90px;
                background: #111111;
                opacity: 0.15;
                filter: blur(50px);
                border-radius: 100px;
                @include sm-screen {
                    width: (500 / 750 * 100vw);
                    height: (100 / 750 * 100vw);
                    top: (44 / 750 * 100vw);
                }
            }
        }
    }
    &_recruit {
        text-align: center;
        &_ttl {
            font-weight: 700;
            font-size: 1.6rem;
            text-align: center;
            margin-top: -11px;
            position: relative;
            display: inline-block;
            @include sm-screen {
                font-size: 2.4rem;
                margin-top: ((22 / 2) / 750 * 100vw);
            }
            &:before {
                content: '';
                display: block;
                width: 16px;
                height: 2px;
                background: $TextPrimary;
                transform: rotate(60deg);
                position: absolute;
                top: 0;
                bottom: 0;
                left: -22px;
                margin: auto 0;
                @include sm-screen {
                    width: (33 / 750 * 100vw);
                    left: (-(20 + 33) / 750 * 100vw);
                }
            }
            &:after {
                content: '';
                display: block;
                width: 16px;
                height: 2px;
                background: $TextPrimary;
                transform: rotate(-60deg);
                position: absolute;
                top: 0;
                bottom: 0;
                right: -22px;
                margin: auto 0;
                @include sm-screen {
                    width: (33 / 750 * 100vw);
                    right: (-(20 + 33) / 750 * 100vw);
                }
            }
        }
        &_list {
            display: flex;
            width: 500px;
            margin-top: 22px;
            justify-content: space-between;
            @include sm-screen {
                width: (630 / 750 * 100vw);
                margin-top: (22 / 750 * 100vw);
                margin-bottom: (50 / 750 * 100vw);
            }
        }
        &_item {
            > a {
                display: block;
                background: $White;
                color: $TextPrimary;
                text-decoration: none;
                border: 1px solid $TextPrimary;
                font-size: 1.6rem;
                border-radius: 100px;
                height: 70px;
                width: 240px;
                text-align: center;
                line-height: 70px;
                font-weight: 700;
                @include sm-screen {
                    height: auto;
                    padding: (16 / 750 * 100vw) 0;
                    width: (305 / 750 * 100vw);
                    font-size: 2.4rem;
                    line-height: 1.4;
                }
                > br {
                    display: none;
                    @include sm-screen {
                        display: block;
                    }
                }
            }
        }
    }
}
</style>
