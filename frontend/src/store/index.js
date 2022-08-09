import { createStore } from "vuex";

export default createStore({
  state: {
    gems: null
  },

  mutations: {
    loadGems(state, payload) {
      state.gems = payload?.data
    }
  },

  actions: {
    loadGems({ commit }) {
      fetch('https://poe.ninja/api/data/ItemOverview?league=Sentinel&type=SkillGem&language=en',
      {
        method: 'GET',
      })
      .then(response => {
        console.log(response)
        let a = response.text()
        console.log(a)
        a
      })
      .then(data => commit('loadGems', data))
    }
  },

  getters: {
    gems(state) {
      return state.gems
    }
  },
});
