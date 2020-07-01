<template>
  <div id="app">
    <TitleComponent :title="title" />
    <InputComponent :text="title" @textChange="changeHandler" />
    <!-- 子传父修改 ———— 也可用直接用':text.sync'，然后在子组件的$emit的第一参数用'update:text'。实现少写一点点代码(methods等)-->
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
//取名不要与原始tag冲突，例如：div、a、li...
import HelloWorld from "./components/HelloWorld.vue";
import TitleComponent from "./components/Title.vue";
import InputComponent from "./components/InputComponent/index.vue";

export default {
  name: "App",
  data() {
    return {
      title: "Hello CainOtakuWhat",
    };
  },
  components: {
    HelloWorld,
    TitleComponent,
    InputComponent,
  },
  methods: {
    changeHandler(val) {
      this.title = val;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
