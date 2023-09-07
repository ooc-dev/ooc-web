<template>
  <div class="info">
      <h3 class="info_ttl">開催概要</h3>
      <dl class="info_list">
          <div class="info_item">
            <dt>開催日時</dt>
            <dd>2020/02/16(日) 10:00-17:00</dd>
          </div>
          <div class="info_item">
            <dt>参加費</dt>
            <dd>無料</dd>
          </div>
          <div class="info_item">
            <dt>場所</dt>
            <dd>お茶の水女子大学<br>共通講義棟1号館 301, 302, 303<br>共通講義棟2号館 101, 102, 201</dd>
          </div>
          <div class="info_item">
            <dt>Twitter</dt>
            <dd><a href="https://twitter.com/hashtag/ooc_2020?src=hash" target="_blank">#ooc_2020</a>&nbsp;<a href="https://twitter.com/oocon_2020" target="_blank">@oocon_2020</a></dd>
          </div>
          <div class="info_item">
            <dt>主催</dt>
            <dd>ObjectOrientedConference運営委員会</dd>
          </div>
      </dl>
  </div>
</template>

<style lang="scss" scoped>
.info {
    margin-top: 60px;
    @include sm-screen {
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
        display: table;
        margin-top: (30px - ((1.8 / 4) * 20));
        @include sm-screen {
          margin-top: (40 / 750 * 100vw);
        }
    }
    &_item {
        display: table-row;
        font-size: 1.6rem;
        @include sm-screen {
          font-size: 2.4rem;
        }
        > dt {
            font-weight: 700;
            display: table-cell;
            padding-right: 20px;
            padding-top: (20px - ((1.8 / 4) * 20));
            line-height: 1.8;
            text-align: right;
            @include sm-screen {
              padding-right: (30 / 750 * 100vw);
              padding-top: (20 / 750 * 100vw);
            }
        }
        > dd {
            display: table-cell;
            padding-top: (20px - ((1.8 / 4) * 20));
            line-height: 1.8;
            @include sm-screen {
              padding-top: (20 / 750 * 100vw);
            }
            > a {
                color: $Link;
                text-decoration: none;
            }
        }
    }
}
</style>