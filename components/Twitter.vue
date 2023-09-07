<template>
  <dt class="twitter">
      <dl>
          <dt>Twitter</dt>
        <dd><a href="https://twitter.com/hashtag/ooc_2020?src=hash" target="_blank">#ooc_2020</a></dd>
        <dd><a href="https://twitter.com/oocon_2020" target="_blank">@oocon_2020</a></dd>
      </dl>
  </dt>
</template>

<style lang="scss" scoped>
.twitter {
    > dl {
        display: flex;
        align-content: center;
        justify-content: center;
        @include ff-en;
        font-weight: 600;
        margin: 0 auto;
        height: 70px;
        line-height: 70px;
        @include sm-screen {
            height: (124 / 750 * 100vw);
            line-height: (124 / 750 * 100vw);
        }
    }
    dt {
        font-size: 1.8rem;
        background: url(/img/twitter.svg) no-repeat left center;
        padding-left: 30px;
        padding-right: 80px;
        position: relative;
        @include sm-screen {
            font-size: 3.0rem;
            background-size: (36 / 750 * 100vw) (32 / 750 * 100vw);
            padding-left: ((36 + 16) / 750 * 100vw);
            padding-right: (100 / 750 * 100vw);
        }
        &:after {
            content: '';
            display: block;
            background: $TextPrimary;
            height: 1px;
            width: 50px;
            position: absolute;
            right: 10px;
            top: 0;
            bottom: 0;
            margin: auto 0;
            @include sm-screen {
                width: (60 / 750 * 100vw);
                right: (30 / 750 * 100vw);
            }
        }
    }
    dd {
        > a {
            color: $Link;
            text-decoration: none;
            padding: 0 10px;
            font-size: 1.6rem;
            vertical-align: middle;
            @include sm-screen {
                font-size: 2.4rem;
                padding: 0 (10 / 750 * 100vw);
            }
        }
    }
}
</style>