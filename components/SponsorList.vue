<template>
    <div class="sponsors">
        <div class="sponsors_none" v-if="sponsor.sponsor_plans.length === 0">
            <p class="sponsors_none_ttl">スポンサー絶賛募集中！</p>
            <p class="sponsors_none_btn"><a href="https://docs.google.com/document/d/1tOaZzFCYqtNM3h1Ebeoll7XOWaSxQ-ma1n1Mg8_bntc/edit">スポンサー<br>応募・概要</a></p>
        </div>
        <div v-for="(plan, index) in sponsor.sponsor_plans" class="sponsors_plan" v-else>
            <h3 class="sponsors_plan_ttl">{{plan.name}}</h3>
            <ul class="sponsors_plan_list">
                <li v-for="sponsor in plan.sponsors" :class="['sponsors_plan_item sponsors_plan_item-' + index, sponsor.avatar ? '' : 'sponsors_plan_item-txt']">
                    <a :href="sponsor.url" target="_blank" v-if="sponsor.avatar">
                        <img :src="sponsor.avatar" :alt="sponsor.name">
                    </a>
                    <a :href="sponsor.url" target="_blank" v-else>
                        {{sponsor.name}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: ['sponsor']
}
</script>

<style lang="scss" scoped>
.sponsors {
    &_none {
        text-align: center;
        &_ttl {
            font-weight: 700;
            font-size: 1.6rem;
            text-align: center;
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
        &_btn {
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
                margin: 22px auto 0;
                background: $White;
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
    &_plan {
        margin-top: 60px;
        @include sm-screen {
            margin-top: (115 / 750 * 100vw);
        }
        &:first-child {
            margin-top: 0;
        }
        &_ttl {
            font-size: 1.8rem;
            text-align: center;
            @include sm-screen {
                font-size: 4.0rem;
            }
        }
        &_list {
            margin-top: (30px - 20px);
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            margin-left: -20px;
            justify-content: center;
            @include sm-screen {
                margin: (40 / 750 * 100vw) 0 0 (-40 / 750 * 100vw);
                width: ((630 + 40) / 750 * 100vw);
            }
        }
        &_item {
            display: flex;
            align-items: center;
            > a {
                display: block;
                position: relative;
                width: 305px;
                margin-top: 20px;
                margin-left: 20px;
                color: $Link;
                text-decoration: none;
                font-size: 1.6rem;
                text-align: center;
                @include sm-screen {
                    margin: (40 / 750 * 100vw) 0 0 (40 / 750 * 100vw);
                    width: (295 / 750 * 100vw);
                    // max-height: (295 / 750 * 100vw);
                    font-size: 2.4rem;
                }
                > img {
                    max-width: 90%;
                    max-height: 90%;
                }
            }
            // &-0 {
            //     > a {
            //         width: 630px;
            //         @include sm-screen {
            //             width: (630 / 750 * 100vw);
            //         }
            //     }
            // }
            &-0 {
                > a {
                    width: 305px;
                    @include sm-screen {
                        width: ((630 - 40) / 2 / 750 * 100vw);
                    }
                }
            }
            &-1 {
                > a {
                    width: 196px;
                    @include sm-screen {
                        width: ((630 - (40 * 2)) / 3 / 750 * 100vw);
                    }
                }
            }
            &-2 {
                > a {
                    width: 142px;
                    @include sm-screen {
                        width: ((630 - (40 * 3)) / 4 / 750 * 100vw);
                    }
                }
            }
            &-3 {
                > a {
                    width: 110px;
                    @include sm-screen {
                        width: ((630 - (40 * 4)) / 5 / 750 * 100vw);
                    }
                }
            }
            &-4 {
              justify-content: center;
              > a {
                width: 110px;
                @include sm-screen {
                  width: ((630 - (40 * 4)) / 5 / 750 * 100vw);
                }
              }
            }
            // &-txt {
            //     > a {
            //         border: none;
            //         width: auto;
            //         height: auto;
            //     }
            // }
        }
    }
}
</style>
