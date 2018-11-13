import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import packages from '../packages'

const install = function(Vue) {
  if (install.installed) return

  for (const key in packages) {
    if (packages.hasOwnProperty(key)) {
      const pack = packages[key]
      Vue.component(pack.name, pack)
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...packages
}
