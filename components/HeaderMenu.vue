<template>
    <nav :class="['nav', {'is-open': state}]">
        <ul class="nav_parent">
            <li class="nav_parent_item">
                <nuxt-link v-if="cur === 'index'" :class="{ 'is-cur' : cur === 'index' }" @click.native="toggle()" v-scroll-to="'#hero'" to>Top</nuxt-link>
                <nuxt-link v-else :class="{ 'is-cur' : cur === 'index' }" @click.native="toggle()" v-scroll-to="'#hero'" to="/">Top</nuxt-link>
                <ul class="nav_child">
                    <li class="nav_child_item">
                        <nuxt-link v-if="cur === 'index'" @click.native="toggle()" v-scroll-to="'#about'" to>About</nuxt-link>
                        <nuxt-link v-else @click.native="toggle()" v-scroll-to="'#about'" to="/#about">About</nuxt-link>
                    </li>
                    <li class="nav_child_item">
                        <nuxt-link v-if="cur === 'index'" @click.native="toggle()" v-scroll-to="'#access'" to>Access</nuxt-link>
                        <nuxt-link v-else @click.native="toggle()" v-scroll-to="'#access'" to="/#access">Access</nuxt-link>
                    </li>
                    <li class="nav_child_item">
                        <nuxt-link v-if="cur === 'index'" @click.native="toggle()" v-scroll-to="'#sponsor'" to>Sponsor</nuxt-link>
                        <nuxt-link v-else @click.native="toggle()" v-scroll-to="'#sponsor'" to="/#sponsor">Sponsor</nuxt-link>
                    </li>
                    <li class="nav_child_item">
                        <nuxt-link v-if="cur === 'index'" @click.native="toggle()" v-scroll-to="'#staff'" to>Staff</nuxt-link>
                        <nuxt-link v-else @click.native="toggle()" v-scroll-to="'#staff'" to="/#staff">Staff</nuxt-link>
                    </li>
                </ul>
            </li>
            <!-- <li class="nav_parent_item">
                <a href="https://fortee.jp/pobject-oriented-conference-2020/timetable">Time Table</a>
            </li> -->
            <li class="nav_parent_item nav_parent_item-proposal">
                <a href="https://fortee.jp/object-oriented-conference-2020/proposal">プロポーザル一覧</a>
            </li>
            <li class="nav_parent_item nav_parent_item-policy">
                <nuxt-link :class="{ 'is-cur' : cur === 'policy' }"  @click.native="toggle()" to="/2020/policy/">個人情報保護方針</nuxt-link>
            </li>
        </ul>
        <div class="nav_twitter">
            <Twitter />
        </div>
    </nav>
</template>

<script>
import { mapMutations } from 'vuex'
import Twitter from '~/components/Twitter.vue'

export default {
  components: {
    Twitter
  },
  computed: {
    state () {
      return this.$store.state.header.open
    },
    cur () {
        return this.$route.name
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'header/toggle'
    })
  }
}
</script>

<style lang="scss" scoped>
.nav {
    background: $White;
    width: 100%;
    @include ff-en;
    font-weight: 400;
    font-size: 3.0rem;
    overflow: hidden;
    transition: .5s;
    height: 0;
    @include sm-screen {
        font-size: 4.0rem;
    }
    &.is-open {
        height: 100vh;
    }
    a {
        color: $TextPrimary;
        text-decoration: none;
        position: relative;
        padding-left: (20px + 16px);
        @include sm-screen {
            padding-left: ((53 + 60) / 750 * 100vw);
        }
        &.is-cur {
            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                height: 16px;
                width: 16px;
                background: $Primary;
                border-radius: 50%;
                left: 0;
                @include sm-screen {
                    height: (16 / 750 * 100vw);
                    width: (16 / 750 * 100vw);
                    left: (60 / 750 * 100vw);
                }
            }
        }
    }
    &_parent {
        width: 1040px;
        margin: 0 auto 0;
        padding-top: (180px - 80px);
        list-style: none;
        @include sm-screen {
            padding-top: (100 / 750 * 100vw);
            width: 100%;
        }
        &_item {
            padding-top: 80px;
            @include sm-screen {
                padding-top: (60 / 750 * 100vw);
            }
            &-policy {
                font-size: 1.6rem;
                @include sm-screen {
                    font-size: 2.4rem;
                }
            }
            &-proposal {
                font-size: 1.6rem;
                @include sm-screen {
                    font-size: 2.4rem;
                }
            }
        }
    }
    &_child {
        list-style: none;
        display: flex;
        padding-top: 40px;
        @include sm-screen {
            padding-top: 0;
            display: block;
        }
        &_item {
            @include sm-screen {
                padding-top: (60 / 750 * 100vw);
            }
            a {
                padding-left: 60px;
                @include sm-screen {
                    padding-left: (187 / 750 * 100vw);
                }
            }
        }
    }
    &_twitter {
        border-top: 1px solid rgba($TextPrimary, 0.2);
        width: 1040px;
        margin: 80px auto 0;
        padding-top: 20px;
        @include sm-screen {
            width: (630 / 750 * 100vw);
            margin: (100 / 750 * 100vw) auto 0;
        }
    }
}
</style>
