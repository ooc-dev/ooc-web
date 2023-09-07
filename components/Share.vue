<template>
  <dt class="share">
      <dl>
          <dt>Share</dt>
      <dd class="share_twitter">
          <a href="https://twitter.com/intent/tweet?url=https://ooc.dev&text=Object-Oriented%20Conference&hashtags=ooc_2020&via=oocon_2020&related=oocon_2020" target="_blank">
            <img src="/img/twitter.svg" alt="Twitter">
          </a>
        </dd>
        <dd>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://ooc.dev" target="_blank">
                <img src="/img/facebook.svg" alt="Facebook">
            </a>
        </dd>
    </dl>
  </dt>
</template>

<style lang="scss" scoped>
.share {
    @include ff-en;
    font-weight: 600;
    margin: 0 auto;
    height: 70px;
    line-height: 70px;
    background: rgba($TextPrimary, 0.05);
    @include sm-screen {
        height: (124 / 750 * 100vw);
        line-height: (124 / 750 * 100vw);
    }
    > dl {
        display: flex;
        align-content: center;
        justify-content: center;
    }
    dt {
        font-size: 1.8rem;
        padding-right: 80px;
        position: relative;
        @include sm-screen {
            font-size: 3.0rem;
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
                right: 0;
            }
        }
    }
    dd {
        > a {
            color: $Link;
            text-decoration: none;
            padding: 0 10px;
            font-size: 1.6rem;
            @include sm-screen {
                padding: 0 0 0 (40 / 750 * 100vw);
            }
            > img {
                vertical-align: middle;
            }
        }
    }
    &_twitter {
        img {
            width: 26px;
            height: auto;
            @include sm-screen {
                width: (47 / 750 * 100vw);
            }
        }
    }
    &_facebook {
        img {
            height: auto;
            @include sm-screen {
                width: (50 / 750 * 100vw);
            }
        }
    }
}
</style>