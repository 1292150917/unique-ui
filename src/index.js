import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import Icon from 'packages/icon'
import Button from 'packages/button'
import NavBar from 'packages/nav-bar'
import Tabbar from 'packages/tabbar'
import TabbarItem from 'packages/tabbar-item'
import Loading from 'packages/loading'
import Tag from 'packages/tag'
import Row from 'packages/row'
import Col from 'packages/col'
import Slide from 'packages/slide'
import SlideItem from 'packages/slide-item'
import Sticky from 'packages/sticky'
import CellGroup from 'packages/cell-group'
import Cell from 'packages/cell'
import Switch from 'packages/switch'
import CheckboxGroup from 'packages/checkbox-group'
import Checkbox from 'packages/checkbox'
import NoticeBar from 'packages/notice-bar'
import RadioGroup from 'packages/radio-group'
import Radio from 'packages/radio'
import Field from 'packages/field'

const components = [
  Icon,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Loading,
  Tag,
  Row,
  Col,
  Slide,
  SlideItem,
  Sticky,
  CellGroup,
  Cell,
  Switch,
  CheckboxGroup,
  Checkbox,
  NoticeBar,
  RadioGroup,
  Radio,
  Field
]

export {
  Icon,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Loading,
  Tag,
  Row,
  Col,
  Slide,
  SlideItem,
  Sticky,
  CellGroup,
  Cell,
  Switch,
  CheckboxGroup,
  Checkbox,
  NoticeBar,
  RadioGroup,
  Radio,
  Field
}

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
