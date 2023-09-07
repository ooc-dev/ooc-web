<template>
  <div class="intro">
      <h3 class="intro_ttl">オブジェクト指向のあれこれ、話して、知って、新たな発見を！</h3>
      <div class="intro_txt">
        <p>Object-Oriented Conference はオブジェクト指向をテーマに、あれこれ共有したり、セッションを聴講することで、みなさんの知見を深めるためのイベントです。</p>
        <p>オブジェクト指向といっても、分析設計から、現場で活かすためのプラクティスなど様々なテーマがあります。セッションやラウンドテーブルなどを通じて、参加者の皆様が新たな発見を持ち帰っていただけるようなイベントを目指しています。</p>
        <p>オブジェクト指向についてまったく知らない方やオブジェクト指向を完全に理解した方、そして普段オブジェクト指向以外のパラダイムを利用している方もお気軽にご参加ください！</p>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
    &_ttl {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1;
        @include sm-screen {
            font-size: 3.6rem;
            line-height: (57.6 / 36);
        }
    }
    &_txt {
        // margin-top: (30 - (16 * (1.8 / 2)));
        margin-top: 30px;
        font-size: 1.6rem;
        line-height: 1.8;
        @include justify;
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