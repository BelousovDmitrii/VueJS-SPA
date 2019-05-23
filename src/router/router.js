import Vue from 'vue'
import VueRouter from 'vue-router'
import TarifMounths from './../components/TarifMounths'
import TarifDetail from './../components/TarifDetail'
import Tarifs from './../components/Tarifs'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: '/',
      name: 'TarifsList',
      component: Tarifs
    },
    {
      path: '/tarifs/:Tid',
      name: 'TarifsMounthsList',
      component: TarifMounths
    },
    {
      path: '/tarifs/:Tid/:Mid',
      name: 'TarifsMounthsDetail',
      component: TarifDetail,
      props: true
    }
  ]
})
