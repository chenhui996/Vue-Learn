# vue3

## 渲染机制

- template
- render()
- 虚拟 dom 树
  - 虚拟 dom 树 是一个树结构:
- 渲染成真正的 dom
- 添加到 dom 容器内渲染出来(可以看到)

### 虚拟节点树

```js
_createVNode("div", {id: "app"}, [
    _createVNode(...);
]);
```

### 在 vue3 中的虚拟节点树

- 解藕出 vue3 的 api:
  - defineComponent: 创建组件
  - h: 创建虚拟节点(本质就是引用`_createVNode`);

```js
import { createApp, defineComponent, h } from "vue";
const App = defineComponent({
  render() {
    const vnode = h("div", [h("div", "cain")]);
    return vnode;
  },
});
```

## custom render

- 允许用户'自定义'目标渲染平台:
  - 不局限于浏览器 dom 平台;
    - 可以把'vue 的开发模型'扩展到其他平台;

---

## vue3 初始化和更新流程

- 是理解 componsition:
  - 很重要的一个点

### componsition

- 要明白 vue3 的 componsition:

  - 要明白 vue3 的内部机制:
    - 怎么'收集依赖';
    - 怎么'触发依赖';

- vue3 源码:
  - 分模块的:
    - vue ->
      - @vue/compiler-dom ->
        - @vue/compiler-core
      - @vue/runtime-dom ->
        - @vue/runtime-core ->
          - @vue/reactivity
    - @vue/complier-sfc ->
      - @vue/compiler-dom ->
        - @vue/compiler-core;
      - @vue/compiler-core;

#### @vue/runtime-dom

- 基于 dom 的'自定义渲染器';
- 之前写过的 - 自定义渲染器:
  - runtime-canvas

#### @vue/runtime-core

- vue3 源码的一整个流程:
  - 最核心的一个库;

#### @vue/reactivity

- 整个 vue3 '响应式'所依赖的一个:
  - 最底层的一个基础库;
- componsition 这个 api:
  - 实际就是加工了:
    - @vue/reactivity
- 可以单独拎出来去用;
  - 可以脱离 vue，单独使用;

```
// 直接在普通文件中用npm i安装即可
npm i @vue/reactivity;
```

- 由于我们要在浏览器中用:
  - 所以我们引入@vue/reactivity 下的:
    - reactivity.esm-browser.js(记得在浏览器中用的,要加后缀,不然无法识别);
      - 然后可以从中引出(解藕出):
        - ref
        - reactive

---

- 所以要搞懂 componsition 这个点:
  - 必须去了解@vue/reactivity

#### @vue/compiler-dom 和 @vue/compiler-core

- 编译器
- 平时写的 template:
  - 就是用上面那'两个模块'编译成 dom 的;

#### @vue/complier-sfc

- 解析单文件组件的一个模块;

---

### 小结

- 上述几个模块是相互配合的:
  - 按照箭头指示方向;
- 流程:
  - compiler 的三个模块:
    - 从 temlate -> 编译成 render;
  - 再进到 runtime 的三个模块:
    - 进行一系列的处理(后面会讲到这些处理);

---

### vue2 中的'收集依赖'和'触发依赖'

- 首先通过'Object.defineProperty'进行'拦截'，然后进行:
  - 收集依赖
  - 触发依赖
- 但是，这个方式是:
  - vue2 时期的处理方式;
  - 我们现在是 vue3 了!!!

### vue3 中的'收集依赖'和'触发依赖'

- 其实，就是用了 effct 这个接口:
  - 进行访问、监听或修改时，都会调用;
  - 我们 vue2 中用的 computed、watch、watchEffect 的基础，就是 effct;
- 这时，就引出两个问题:
  - 什么时候'收集'的依赖呢？
  - 什么时候'触发'的依赖呢？

#### 什么时候收集的依赖呢？

- 触发 get 的时候:
  - 它把'当前包裹'的这个'函数'收集为'依赖';

```js
// 例子:
let a = ref(10);
effect(() => {
  console.log(a);
  // get访问，所以是收集依赖
  a.value;
});

// set改值，所以是触发依赖
a.value * 10;
```

- 当我们 get 时，就会自动:
  - 将 effect 这个函数收集为依赖(就像 webpack 打包一样，会递归遍历其引用的依赖，也可以借鉴垃圾回收原理);

#### 什么时候触发的依赖呢？

- 然后，当我们改 a 的值时，就触发依赖，即可触发 effect 这个函数(所以就造成了，多次打印的现象);

```js
// 来个'响应式视图'渲染的最简模型
function render(context) {
  // 构建我们的视图
  effect(() => {
    // 每次更新，先把之前的旧dom，清除掉
    document.querySelector("#appsome").innerHTML = "";

    // 构建一个文本
    const p = document.createElement("p");
    p.innerText = context.textValue.value;

    // 构建一个按钮
    const button = document.createElement("button");
    button.innerText = context.handleClick;

    // 添加到视图里
    document.querySelector("#appsome").append(p);
    document.querySelector("#appsome").append(button);
  });
}

function setup() {
  // 构建我们的响应式对象
  const textValue = ref("cain");

  const handleClick = () => {
    textValue.value = "snake";
  };

  return {
    textValue,
    handleClick,
  };
}

function mountApp() {
  render(setup());
}

mountApp();
```

- 优化的空间？
- 问题:
  - 1.这里的视图都是写死的
  - 2.直接全部清空太浪费，应该局部清空
    - 引入中间层来解决:
      - vdom、vnode
      - 虚拟节点
    - 每次更新前，将虚拟 dom 与真实 dom 进行检查对比，只修改不同之处(git 的冲突解决可以借鉴);
      - 当然我这里用的是大白话，便于理解;
      - 官方话:
        - 通过 diff 算法，进行最优解渲染;
