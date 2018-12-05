(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{65:function(s,a,t){"use strict";t.r(a);var v=function(){var s=this.$createElement;this._self._c;return this._m(0)};v._withStripped=!0;var _=t(0),l=Object(_.a)({},v,[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"checkbox"},[t("h2",[s._v("Checkbox 复选框")]),s._v(" "),t("h3",[s._v("代码演示")]),s._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 示例数据")]),s._v("\n  data() {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value1")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value2")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value3")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value4")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value5")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value6")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value7")]),s._v(": ["),t("span",{attrs:{class:"hljs-string"}},[s._v("'b'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'c'")]),s._v("],\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value8")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value9")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    }\n  }\n}\n")])]),s._v(" "),t("h4",[s._v("简单用法")]),s._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value1"')]),s._v(">")]),s._v("{{ value1 }}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h4",[s._v("自定义颜色")]),s._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#49b683"')]),s._v(">")]),s._v("{{ value2 }}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h4",[s._v("自定义状态值")]),s._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":true-value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":false-value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(">")]),s._v("value: {{ value3 }}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h4",[s._v("禁用")]),s._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value4"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("a"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value5"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("b"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h4",[s._v("自定义图标")]),s._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value6"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"icon"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"props"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"props.value ? 'heart' : 'heart-o'\"")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"24px"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#ab97c3"')]),s._v(" />")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("{{ props.value }}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h4",[s._v("Checkbox 组")]),s._v(" "),t("p",[s._v("需要与"),t("code",[s._v("CheckboxGroup")]),s._v("搭配使用，选中值是一个数组，数组中的项是"),t("code",[s._v("Checkbox")]),s._v("上"),t("code",[s._v("name")]),s._v("属性设置的值，可以通过设置"),t("code",[s._v("max")]),s._v("属性来限制最大选中数量")]),s._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox-group")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value7"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"a"')]),s._v(">")]),s._v("a"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"b"')]),s._v(">")]),s._v("b"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"c"')]),s._v(">")]),s._v("c"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"d"')]),s._v(">")]),s._v("d"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox-group")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("当前选择：{{ value7 }}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h4",[s._v("搭配 Cell 使用")]),s._v(" "),t("p",[t("code",[s._v("Checkbox")]),s._v("提供了一个"),t("code",[s._v("toggle")]),s._v("方法用来切换选中状态，你可以搭配"),t("code",[s._v("Cell")]),s._v("组件一起使用")]),s._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",{attrs:{class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-cell-group")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-cell")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"A"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("is-link")]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_=>$refs.a.toggle()"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"right-icon"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value8"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"a"')]),s._v(" />")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-cell")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-cell")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"B"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("is-link")]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_=>$refs.b.toggle()"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"right-icon"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value9"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"b"')]),s._v(" />")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-cell")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i-cell-group")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",[s._v("CheckboxGroup Props")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("所有选中项"),t("code",[s._v("name")]),s._v("值集合")]),s._v(" "),t("td",[t("code",[s._v("Array")])]),s._v(" "),t("td",[t("code",[s._v("[]")])])]),s._v(" "),t("tr",[t("td",[s._v("disabled")]),s._v(" "),t("td",[s._v("是否禁用所有复选框")]),s._v(" "),t("td",[t("code",[s._v("Boolean")])]),s._v(" "),t("td",[t("code",[s._v("false")])])]),s._v(" "),t("tr",[t("td",[s._v("max")]),s._v(" "),t("td",[s._v("限制最大选中数量，"),t("code",[s._v("0")]),s._v("代表不限制")]),s._v(" "),t("td",[t("code",[s._v("Number")])]),s._v(" "),t("td",[t("code",[s._v("0")])])])])]),s._v(" "),t("h3",[s._v("Checkbox Props")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[s._v("标识符，与"),t("code",[s._v("CheckboxGroup")]),s._v("组件搭配使用")]),s._v(" "),t("td",[t("code",[s._v("String | Number")])]),s._v(" "),t("td",[t("code",[s._v("''")])])]),s._v(" "),t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("状态值")]),s._v(" "),t("td",[t("code",[s._v("Boolean | Number | String")])]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("true-value")]),s._v(" "),t("td",[s._v("设置选中状态的值")]),s._v(" "),t("td",[t("code",[s._v("Boolean | Number | String")])]),s._v(" "),t("td",[t("code",[s._v("true")])])]),s._v(" "),t("tr",[t("td",[s._v("false-value")]),s._v(" "),t("td",[s._v("设置未选中状态的值")]),s._v(" "),t("td",[t("code",[s._v("Boolean | Number | String")])]),s._v(" "),t("td",[t("code",[s._v("false")])])]),s._v(" "),t("tr",[t("td",[s._v("disabled")]),s._v(" "),t("td",[s._v("是否禁用该复选框")]),s._v(" "),t("td",[t("code",[s._v("Boolean")])]),s._v(" "),t("td",[t("code",[s._v("false")])])]),s._v(" "),t("tr",[t("td",[s._v("color")]),s._v(" "),t("td",[s._v("选中状态图标背景色")]),s._v(" "),t("td",[t("code",[s._v("String")])]),s._v(" "),t("td",[s._v("主题色")])])])]),s._v(" "),t("h3",[s._v("Checkbox Slots")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("名称")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("slot-scope")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("icon")]),s._v(" "),t("td",[s._v("自定义图标")]),s._v(" "),t("td",[s._v("value: 状态值")])])])]),s._v(" "),t("h3",[s._v("Checkbox Methods")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("方法名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("返回值")]),s._v(" "),t("th",[s._v("介绍")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("toggle")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("切换选中状态")])])])]),s._v(" "),t("h3",[s._v("CheckboxGroup Events")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("change")]),s._v(" "),t("td",[s._v("选中项改变时触发")]),s._v(" "),t("td",[s._v("所有选中项"),t("code",[s._v("name")]),s._v("值集合")])])])]),s._v(" "),t("h3",[s._v("Checkbox Events")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("change")]),s._v(" "),t("td",[s._v("切换时触发")]),s._v(" "),t("td",[s._v("状态值")])])])])])}],!1,null,null,null);l.options.__file="examples/docs/checkbox.md";a.default=l.exports}}]);