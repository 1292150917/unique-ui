export default [
  {
    groupName: '基本组件',
    list: [
      {
        name: 'Icon 图标',
        routePath: '/icon',
        doc: () => import('docs/icon'),
        demo: () => import('packages/icon/demo')
      },
      {
        name: 'Layout 布局',
        routePath: '/layout',
        doc: () => import('docs/layout'),
        demo: () => import('packages/row/demo')
      },
      {
        name: 'Button 按钮',
        routePath: '/button',
        doc: () => import('docs/button'),
        demo: () => import('packages/button/demo')
      },
      {
        name: 'NavBar 导航栏',
        routePath: '/nav-bar',
        doc: () => import('docs/nav-bar'),
        demo: () => import('packages/nav-bar/demo')
      },
      {
        name: 'Tabbar 标签栏',
        routePath: '/tab-bar',
        doc: () => import('docs/tabbar'),
        demo: () => import('packages/tabbar/demo')
      },
      {
        name: 'Loading 加载',
        routePath: '/loading',
        doc: () => import('docs/loading'),
        demo: () => import('packages/loading/demo')
      },
      {
        name: 'Tag 标记',
        routePath: '/tag',
        doc: () => import('docs/tag'),
        demo: () => import('packages/tag/demo')
      },
      {
        name: 'Slide 轮播图',
        routePath: '/slide',
        doc: () => import('docs/slide'),
        demo: () => import('packages/slide/demo')
      },
      {
        name: 'Sticky 粘性定位',
        routePath: '/sticky',
        doc: () => import('docs/sticky'),
        demo: () => import('packages/sticky/demo')
      },
      {
        name: 'Cell 单元格',
        routePath: '/cell',
        doc: () => import('docs/cell'),
        demo: () => import('packages/cell-group/demo')
      },
      {
        name: 'NoticeBar 通告栏',
        routePath: '/notice-bar',
        doc: () => import('docs/notice-bar'),
        demo: () => import('packages/notice-bar/demo')
      }
    ]
  },
  {
    groupName: '表单组件',
    list: [
      {
        name: 'Field 输入框',
        routePath: '/input',
        doc: () => import('docs/field'),
        demo: () => import('packages/field/demo')
      },
      {
        name: 'Switch 开关',
        routePath: '/switch',
        doc: () => import('docs/switch'),
        demo: () => import('packages/switch/demo')
      },
      {
        name: 'Checkbox 复选框',
        routePath: '/checkbox',
        doc: () => import('docs/checkbox'),
        demo: () => import('packages/checkbox/demo')
      },
      {
        name: 'Radio 单选框',
        routePath: '/radio',
        doc: () => import('docs/radio'),
        demo: () => import('packages/radio/demo')
      }
    ]
  }
]
