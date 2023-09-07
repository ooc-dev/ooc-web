<template>
  <header :class="['header', {'is-on' : !hero}]">
      <transition>
            <p class="header_logo" v-if="!hero || state || cur !== 'index'">
                <nuxt-link v-scroll-to="'#hero'" to="/" @click.native="toggle('close')">
                    <img src="/img/logo_small.svg" alt="Object Oriented Conference ">
                </nuxt-link>
            </p>
      </transition>    
        <button :class="['header_toggle', {'is-open' : state}, {'is-on' : !hero || cur !== 'index'} ]" type="button" @click="toggle()">
            <span class="header_toggle_item"></span>
            <span class="header_toggle_item"></span>
            <span class="header_toggle_item"></span>
        </button>
        <HeaderMenu />
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
import HeaderMenu from '~/components/HeaderMenu.vue'

export default {
  components: {
    HeaderMenu
  },
  computed: {
    state () {
      return this.$store.state.header.open
    },
    hero () {
      return this.$store.state.header.hero
    },
    cur () {
        return this.$route.name
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'header/toggle',
      scroll: 'header/scroll'
    })
  },
    created () {
        if (process.browser) { 
            window.addEventListener('scroll', this.scroll);
        }
    },
    destroyed () {
        if (process.browser) { 
            window.removeEventListener('scroll', this.scroll);
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: 1;
    width: 100%;
    // height: (30px + 48px + 30px);
    // @include sm-screen {
    //     height: ((96 + 24 + 24) / 750 * 100vw);
    // }
    // &.is-on {
    //     background: $White;
    // }
    &_logo {
        position: fixed;
        top: 36px;
        left: 30px;
        @include sm-screen {
            top: (54 / 750 * 100vw);
            left: (60 / 750 * 100vw);
            width: (110 / 750 * 100vw);
        }
        img {
            @include sm-screen {
                width: 100%;
                height: auto;
            }
        }
    }
    &_toggle {
        outline: none;
        background: none;
        border: 1px solid $TextPrimary;
        width: (96px / 2);
        height: (96px / 2);
        position: fixed;
        top: 30px;
        right: 30px;
        border-radius: 50%;
        cursor: pointer;
        @include sm-screen {
            top: (24 / 750 * 100vw);
            right: (24 / 750 * 100vw);
            width: (96 / 750 * 100vw);
            height: (96 / 750 * 100vw);
        }
        &_item {
            position: absolute;
            display: block;
            width: (30px / 2);
            height: 1px;
            left: 0;
            right: 0;
            margin: 0 auto;
            background: $TextPrimary;
            transition: .2s;
            @include sm-screen {
                width: (30 / 750 * 100vw);
            }
            &:nth-child(1) {
                top: ((38px / 2) - 2px);
                @include sm-screen {
                    top: ((38 - 2) / 750 * 100vw);
                }
            }
            &:nth-child(2) {
                top: ((50px / 2) - 2px);
                @include sm-screen {
                    top: ((50 - 2) / 750 * 100vw);
                }
            }
            &:nth-child(3) {
                top: ((62px / 2) - 2px);
                @include sm-screen {
                    top: ((62 - 2) / 750 * 100vw);
                }
            }
        }
        $this: &;
        &.is-on {
            background: $White;
        }
        &.is-open {
            #{$this}_item {
                width: 16px;   
                @include sm-screen {
                    width: (32 / 750 * 100vw);
                }
                &:nth-child(1) {
                    top: 50%;
                    transform: translateY(-50%) rotate(45deg);
                }
                &:nth-child(2) {
                    width: 0;
                    top: 50%;
                    transform: translateY(-50%) rotate(45deg);
                }
                &:nth-child(3) {
                    top: 50%;
                    transform: translateY(-50%) rotate(-45deg);
                }
            }
        }
    }
}
.v-enter-active,
.v-leave-active {
    transition: opacity .2s ease-out;
}

.v-enter,
.v-leave-to {
    opacity: 0;
}
</style>
