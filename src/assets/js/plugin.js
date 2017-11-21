import XHeader from '../../components/Header.vue'

const XComponents = {
  XHeader: XHeader
}

export default {
  install (Vue) {
    Object.keys(XComponents).forEach((key) => {
      Vue.component(key, XComponents[key])
    })
  }
}
