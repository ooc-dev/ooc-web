<template>
  <div class="container">
    <Header />
    <main class="main">
    <Hero />
      <About />
      <Access />
      <Sponsor :sponsor="sponsor" />
      <Staff :staff="staff" />
    </main>
    <Share />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Access from '~/components/Access.vue'
import Sponsor from '~/components/Sponsor.vue'
import Staff from '~/components/Staff.vue'
import Share from '~/components/Share.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Hero,
    About,
    Access,
    Sponsor,
    Staff,
    Share,
    Footer
  },
  data() {
    return {
        sponsor: '',
        staff: ''
    }
  },
  async asyncData({ app }) {
    //   スタッフ： https://fortee.jp/phpcon-2019/api/staff
    //   スポンサー： https://fortee.jp/phpcon-2019/api/sponsors
    // https://fortee.jp/object-oriented-conference-2020/api/staff
    const sponsor = await app.$axios.$get('https://fortee.jp/object-oriented-conference-2020/api/sponsors');
    const staff = await app.$axios.$get('https://fortee.jp/object-oriented-conference-2020/api/staff');
    return { sponsor: sponsor, staff: staff };
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  overflow: hidden;
}
</style>
