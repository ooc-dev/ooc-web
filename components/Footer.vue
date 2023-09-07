<template>
    <footer class="footer">
        <div class="footer_in">
            <p class="footer_policy"><nuxt-link to="/policy/">個人情報保護方針</nuxt-link></p>
            <p class="footer_contact">Object-Oriented Conference へのお問い合わせは公式Twitter(<a href="https://twitter.com/oocon_2020">@oocon_2020</a>）までお願い致します。</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: $TextPrimary;
    color: $White;
    font-size: 1.6rem;
    @include sm-screen {
        font-size: 2.4rem;
    }
    &_in {
      position: relative;
        width: 1040px;
        margin: 0 auto;
        padding: 25px;
        @include sm-screen {
            width: 100%;
            padding: (68 / 750 * 100vw) (60 / 750 * 100vw);
        }
    }
    a {
        color: $White;
    }
    &_contact {
        margin-top: 10px;
        @include sm-screen {
            margin-top: (68 / 750 * 100vw)
        }
    }
}
</style>