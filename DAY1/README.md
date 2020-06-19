序：
本文为实训类题材文档，讲述如何一步步用初始化的vue-cli来创建一个页面。

第一步：编写页面组件
在 src/components 下创建 Home.vue 文件，然后编写如下代码：
<template>
  <section>
    <div class="container">
      <div class="title">
        <img class="logo" :src="src" />
        <h1>{{ title }}</h1>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "home",
  data() {
    return {
      src: require('@/assets/image/my_logo.png'),
      title: "VUE第一个小训练"
    };
  }
};
</script>
<style src="@/assets/css/style.css"></style>

第二步：接入路由
找到 src/router/index.js 路由中将主页路由 / 所绑定的组件从默认的 HelloWorld 修改为刚才写好的 Home 组件：
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});

第三步：结束总结
data中的图片获取需要加require()：
src: require('@/assets/image/my_logo.png')；
vue-cli中还有个App.vue作为中转，内容为App.vue中的 <router-view>;
main.js中的el，牵起了vue的右手，也就是页面，
左手的资料：在Home.vue中的data里面；
故：我们可以删除App.vue，直接将Home.vue与main.js连接，这样中间就少了一层逻辑。
