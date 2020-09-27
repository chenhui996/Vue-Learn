// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// 自己创建基于 canvas 入口文件
import { createApp } from "./runtime-canvas";
import { getRootContainer } from "./game";
import App from "./App.vue";

// 根组件
// 需要根容器
// eslint-disable-next-line no-debugger
const app = createApp(App)
app.mount(getRootContainer())
// createApp(App).mount(getRootContainer());

window.console.warn = () => {};
