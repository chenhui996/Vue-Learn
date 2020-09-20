# vue 个人学习总结笔记

- 个人向：
  - 学习笔记
  - 收集个人觉得有价值的知识文档
- 会不断迭代进 github

## vue 的优点

- 轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十 kb；
- 简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；
- 双向数据绑定：保留了 angular 的特点，在数据操作方面更为简单；
- 组件化：保留了 react 的优点，实现了 html 的封装和重用，在构建单页面应用方面有着独特的优势；
- 视图，数据，结构分离：
  - 使数据的更改更为简单;
  - 不需要进行逻辑代码的修改;
  - 只需要操作数据就能完成相关操作;
- 虚拟 DOM：
  - dom 操作是非常耗费性能的;
  - 不再使用原生的 dom 操作节点;
  - 极大解放 dom 操作;
  - 但具体操作的还是 dom:
    - 不过是换了另一种方式;
- 运行速度更快:
  - 相比较与 react 而言:
    - 同样是操作虚拟 dom:
      - 就性能而言，vue 存在很大的优势;

## MVVM

- MVVM 是 Model-View-ViewModel 缩写;
- 也就是把 MVC 中的:
  - Controller 演变成 ViewModel;
- Model 层代表数据模型;
- View 代表 UI 组件;
- ViewModel 是 View 和 Model 层的桥梁;
  - 数据会绑定到 viewModel 层:
    - 并自动将数据渲染到页面中;
  - 视图变化的时候:
    - 会通知 viewModel 层更新数据;

## Vue2.x 响应式数据原理

- Vue 在初始化数据时:
  - 会使用 Object.defineProperty 重新定义 data 中的所有属性;
  - 当页面使用对应属性时:
    - 首先会进行依赖收集;
    - 收集当前组件的 watcher;
    - 如果属性发生变化:
      - 会通知相关依赖进行更新操作(发布订阅);

## vue 生命周期

- 总共分为 8 个阶段:
  - 创建前/后
  - 载入前/后
  - 更新前/后
  - 销毁前/后

#### 创建前/后:

- 在 beforeCreate 阶段:
  - vue 实例的挂载元素 el 和数据对象 data:
    - 都为 undefined，还未初始化;
- 在 created 阶段:
  - vue 实例的数据对象 data 有了;
  - el 为 undefined，还未初始化;

#### 载入前/后：

- 在 beforeMount 阶段:
  - vue 实例的\$el 和 data 都初始化了;
  - 但还是挂载之前虚拟的 dom 节点;
    - data.message 还未替换;
- 在 mounted 阶段:
  - vue 实例挂载完成;
  - data.message 成功渲染;

#### 更新前/后

- 当 data 变化时:
  - 会触发 beforeUpdate 和 updated 方法;

#### 销毁前/后

- 在执行 destroy 方法后:
  - 对 data 的改变不会再触发周期函数;
  - 说明此时 vue 实例已经解除了:
    - 事件监听以及和 dom 的绑定;
  - 但是 dom 结构依然存在;

## 为什么 vue 组件中 data 必须是一个函数？

- 对象为引用类型:
  - 当复用组件时;
    - 由于数据对象都指向同一个 data 对象;
  - 当在一个组件中修改 data 时:
    - 其他重用的组件中的 data 会同时被修改;
  - 而使用返回对象的函数:
    - 由于每次返回的都是一个新对象（Object 的实例）;
  - 引用地址不同，则不会出现这个问题;

## voe-router 本质

- 一句话概况：
  - 建立 url 与页面视图之间的关系;

## vuex

### 什么是 vuex

- vuex 是专门为 vue 项目开发的一个状态管理工具(个人理解：store,对标 redux);
  - 所谓状态，可以简单理解成变量;
  - 管理就是存储;
- vuex 可以理解成一个'大仓库'，存放我们的变量;

### 为什么要使用 vuex

- 比如说，我有个状态（变量），很多组件都要用到它;
  - 这个状态（变量）的存储和读取等操作最好统一管理;
- 这时，我们就需要一个大仓库:
  - 放一些很多组件都要共享的变量;
- 这就是我们 vuex 的作用：
  - 存放共享的状态;
  - 让所有的组件都能使用到它;
- 而且还需要具有响应式：
  - 数据改变页面需要响应它的改变;

### 哪些状态需要放在 vuex 中

- 一般来讲多个组件需要共享的状态都可以放在 vuex 中;
- 但是并不是所有状态都往里面塞;
- 要是下面几种情况:
  - 用户的登录状态(token)，多个组件多个页面都会用到它;
  - 购物车中的信息等等;

## 使用 vuex

### 安装 vuex

- 使用插件:

```js
import vuex from "vuex";
import Vue from "vue";
Vue.use(vuex);
```

## vuex的几个核心概念

### state

- 这个地方就是存放状态（变量）的地方;
- 那么问题我们的组件怎么使用共享的状态呢？
- 刚刚调用Vue.use方法的时候:
    - 实际上，会调用vuex.install方法;
- 他会在Vue的原型对象prototype上:
    - 绑定一个$store属性;
- 会将这个创建的store实例赋值给这个属性;
- 那他是怎么获取到这个store实例的呢?
    - 因为在Vue实例中我们挂载了这个store实例
    - 他就是通过options.store获取到这个store实例的：
        - Vue.prototype.$store=根实例.options.store
- 所有的组件都继承Vue的原型:
    - 所以都会有$store属性;
    - 那我们使用仓库中状态的方法就出来了：
```js
cpn.$store.state.变量名
```

#### 单一状态树

- 这个概念就是说:
    - 不要创建多个仓库来分类存储变量;
    - 就创建一个仓库来存放状态;
    - 因为创建多个仓库不方便'管理'和'维护';(和redux一样呢)

### mutation

- mutation的作用就是修改state的;(牢记)
- 并且修改state的唯一途径就是提交mutation:
    - mutation中定义一系列'方法'，对state进行修改;(记住，是用方法修改！！！)
    - 并且这些方法'第一个参数'默认传入的就是state对象;(就是每次写方法的时候给的那个形参：state);
        - 免得我们使用this获取:

```js
// 最简易模型
// (个人建议：学习的时候不要死记某一个知识的复杂结构，可以选择记最建议模型，留个印象，然后需要复杂了，再去深入，提高效率，不要当愣头青)
const store = new Vue.Store({
    state:{
        age:18
    },
    mutations:{
        // 形参state，就代表了上面的state对象
        add(state){
            state.age++;
        }
    }
});
```

#### 使用mutation

- 通过.commit的形式
```js
cpn.$store.commit("add")//add是自定义方法
```
- 有点像$emit，第一个参数是自己的自定义事件;
- 比如这里我在app.vue中使用了它:
```html
// 也是最简易模型
<template>
    <div>
        cain的年龄：{{ $store.state.age }}
        <button @click="handleAgeAdd">年龄加一岁</button>
    </div>
</template>

<script>
    export default {
        name:"App",
        methods: {
            handleAgeAdd() {
                this.$store.commit("add");
            }
        },
    }
</script>

```

### actions...

- 留坑

### getters...

- 留坑

### modules...

- 留坑

# 会随着本人学习的深入，持续迭代本笔记;
