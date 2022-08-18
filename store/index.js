export const state = () => ({
    items: [
        {
          icon: 'mdi-apps',
          title: '和合本 讀經',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '舊約',
          to: '/ot'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '新約',
          to: '/nt'
        }
    ]
  }
)
  
export const mutations = {
  SET_USERITEMS (state, items) {
    // console.warn(items)
    items.forEach((item) => {
    state.userItems.push(item)
    })
  }
}
  
  export const actions = {
    onAuthStateChangedAction (state, { authUser, claims }) {
    //   console.log(authUser)
      if (!authUser) {
        // console.warn(this.$router)
        this.$router.push('/')
      }
    },
    setUid ({ commit }, uid) {
      commit('SET_UID', uid)
    },
    setUserObj ({ commit }, userObj) {
      commit('SET_USEROBJ', userObj)
    },
    setUserData ({ commit }, userData) {
      commit('SET_USERDATA', userData)
    },
    async getUserData ({ commit }, email) {
      const res = await this.$fire.firestore.collection('-video_user').where('email', '==', email).get()
      // console.log(res)
      res.forEach((item) => {
        // console.log(item.data())
        const displayName = item.data().displayName
        const membership = item.data().membership
        const school = item.data().school
        const classes = item.data().classes
        commit('SET_USERDATA', { displayName, membership, school, classes })
      })
    }
  }
  
  // This error usually occurs if you're watching the passed in value somewhere
  // which causes an infinite update loop but if you're not watching, it could be
  // due to you passing in the original value rather than a copy.
  
  // IINDEX page
  // check if registered
  // yes: show app icon
  // no : direct to ACCOUNT page
  