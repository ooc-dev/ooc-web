<template>
  <section class="policy">
      <div class="policy_in">
        <h2 class="policy_ttl">個人情報保護方針</h2>
        <div class="policy_main">
            <p>Object Oriented Conference（以下、カンファレンス）は、下記の個人情報保護方針に則り、カンファレンスウェブサイト閲覧者、参加者、スポンサー等（以下、ユーザー）の個人情報を安全かつ適切に取り扱います。</p>
            <ol>
                <li>当個人情報保護方針は、カンファレンスがユーザーから取得した個人情報について適用されます。</li>
                <li>カンファレンスが取得した個人情報について、不正アクセス、紛失、漏洩等が発生しないよう、個人情報取扱規定を整備し、これらの危険に対する安全対策を積極的に実施します。</li>
                <li>カンファレンスが取得した個人情報はカンファレンスにて厳重に管理し、ユーザーの同意を得た場合又は法令により例外が認められる場合を除き、取得の際に予め明示した目的又は以下の利用目的の範囲内で利用いたします。
                    <ol>
                        <li>当カンファレンスの更新情報や規約変更等を通知する場合</li>
                        <li>当カンファレンスに関するご案内、お問い合わせ等へ対応する場合</li>
                        <li>ユーザーに対して当カンファレンスに対する意見、感想のご提供を求める場合</li>
                        <li>当カンファレンス各規約等に違反する行為又はその恐れのある行為を行ったユーザーに対して注意又は警告を行う場合</li>
                        <li>当カンファレンスに対する債務を有するユーザーに同債務の履行を要求する場合</li>
                    </ol>
                </li>
                <li>カンファレンスは、カンファレンスが取得した個人情報について、法令により例外が認められる場合を除き、ユーザーの同意を得ることなく第三者に提供することはございません。</li>
                <li>開示等のお申出、又は自己の個人情報の取扱いについてご指摘いただく場合、公式Twitter（<a href="https://twitter.com/oocon_2020">@oocon_2020</a>）にお問い合わせください。</li>
                <li>当カンファレンスのウェブサイトは、Cookie及び類似技術を利用します。これらの技術で、本ウェブサイトの利便性の向上および利用状況を分析するために、Cookieを利用して情報を収集しています。</li>
                <li>カンファレンスは、当個人情報保護方針をいつでも変更することができるものとします。</li>
            </ol>
            <p>令和元年11月8日制定</p>
        </div>
      </div>
  </section>
</template>

<script>
import AboutIntro from '~/components/AboutIntro.vue'
import AboutInfo from '~/components/AboutInfo.vue'

export default {
  components: {
    AboutIntro,
    AboutInfo
  }
}
</script>

<style lang="scss" scoped>
.policy {
    position: relative;
    // &:before {
    //     content: '';
    //     display: block;
    //     width: 100%;
    //     height: 375px;
    //     background: linear-gradient(to bottom, rgba($Primary, 0.10), rgba($Primary, 0));
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     margin: 0 auto;
    // }
    &_in {
      position: relative;
        width: 1040px;
        margin: 0 auto;
        padding: 60px 0 120px;
        display: flex;
        @include sm-screen {
          width: 100%;
          padding: (132 / 750 * 100vw) 0 (160 / 750 * 100vw);
          display: block;
        }
    }
    &_ttl {
        // @include ff-en;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: $Primary;
        line-height: 250px;
        text-align: center;
        font-size: 2.4rem;
        font-weight: 700;
        @include sm-screen {
          background: none;
          width: auto;
          height: auto;
          border-radius: 0;
          line-height: 1;
          font-size: 4.6rem;
          text-align: left;
          margin: (140 / 750 * 100vw) (60 / 750 * 100vw) 0;
          position: relative;
        }
        &:before {
          @include sm-screen {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            left: ((-147 + 110 - 60) / 750 * 100vw);
            background: rgba($Primary, 0.5);
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
        font-size: 1.6rem;
        line-height: 1.8;
        font-weight: 500;
        @include sm-screen {
          width: 100%;
          padding: (60 / 750 * 100vw) (60 / 750 * 100vw) 0;
          font-size: 2.4rem;
        }
        a {
            color: $Link;
            text-decoration: none;
        }
        * {
            margin-top: 1em;
        }
        ol {
            padding-left: 1.5em;
        }
    }
}
</style>