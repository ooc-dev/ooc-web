<template>
  <div class="container">
    <Header />
    <main>
        <Policy />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Policy from '~/components/Policy.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Policy,
    Footer
  },
  head () {
    return {
      title: '個人情報保護方針 | Object Oriented Conference'
    }
  }
}
</script>
