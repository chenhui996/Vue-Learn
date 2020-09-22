# 个人学习总结 vue2

## vue 的开发方式

- 渐进式开发方式：
  - 声明式
    - 由于把所有东西都放在一起，不好维护，于是开发方式渐进到了组件式;
  - 组件系统(组件式)
    - 有了一个个组件后，需要将组件(最好式一个组件即一个页面):
      - 设置分配其 url 与页面组件直接的关系;
      - 于是我们用上了路由系统(vue-router);
  - 用户路由系统
    - vue-router
    - 然后随着应用越来越大，越来越复杂，'状态'不好管理，不好给某一个，于是便用上了状态管理(Vuex);
  - 状态管理系统
    - vuex
      - 遵循 mvvm 设计模式:
        - 初始化在 state;
        - 想修改用 mutations 下的方法;
        - 异步处理用 actions;
        - ...
    - 最后，为了整体上方便开发环境，我们用上了辅助构建系统(vue-cli)，也叫脚手架;
  - 辅助构建系统
    - vue-cli
      - 帮助我们初始化项目:
        - 必要依赖
        - 配置可选
        - ...
      - 主要目的:
        - 让开发者专注于 code，不要被环境等次要因素影响了效率;

## 小步走

- 开发方式:
  - 小步走
    - 每做一小步，即测试做的小功能是否完成;
    - 虽然不像写一个测试那么严谨，但是也能大幅度帮助我们提高开发效率:
    - 日常开发中，若未遵循小步走，那么当完成多项功能后回头来检测:
      - 若出了 bug，将会无法准确定位 bug 位置，调试成本大，降低了开发效率;

## axios 封装的请求 api

- 简单封装:
  - get
  - post
- 用最简易模型，以后方便查阅和加深记忆
  - 也可以直接给 vue 引用

### 引用 axios

```js
// 引用axios
import axios from "axios";
```

### 引用自己的axios

- 创建一个文件，然后引用axios;
    - 再在此文件中配置axios的各种配置;
    - 然后导出，在其他文件中引用'具体路径'即可;
```js
import axios from 'axios';

axios.defaults.timeout = 5000;

export default axios;
// 这个导出的axios就是经过我们配置后的axios;
```

### get 方法

```js
// get 方法
export function getAxios() {
  return axios.get("api/getCustomData");
}
```

### post 方法

```js
// post 方法

// 用fetch抓取登陆账号和密码(用户鉴权)
export function fetchLogin({ username, password }) {
  return axios.post("/api/login", {
    username,
    password,
  });
}
```

#### post 更新数据

```js
export function uploadPhoto(file, onUploadProgress) {
  // FormData就是创建一个文件
  const formData = new FormData();
  // 把内容塞进去
  formData.append("img", file);

  // post提交
  return axios.post("api/upload", formData, {
    onUploadProgress,
  });
}
```

## 用户鉴权

### 登陆界面调用 fetchLogin 的接口

- 目的：
  - 为了获得 token;
  - 然后将 token 存进 vuex 里的 state 进行保存;

...
