export const state = () => ({
  open: false,
  hero: true
})

export const mutations = {
  toggle (state, close) {
    if (close === 'close') {
      state.open = false
    } else {
      state.open = !state.open
    }
  },
  scroll (state) {
    if (window.innerWidth > 768) {
      if (window.innerHeight >= 770) {
        if (window.pageYOffset >= window.innerHeight) {
          state.hero = false
        } else {
          state.hero = true
        }
      } else {
        if (window.pageYOffset >= 770) {
          state.hero = false
        } else {
          state.hero = true
        }
      }
    } else {
      if (window.pageYOffset >= ((1324 + 123) / 750 * window.innerWidth)) {
        state.hero = false
      } else {
        state.hero = true
      }
    }
  }
}