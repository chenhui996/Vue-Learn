<template>
  <section>
    <div class="container">
      <div class="title">
        <img class="logo" :src="src" />
        <h1>{{ title }}</h1>
        <div class="description">
          <a v-if="index != 0" class="arrow left" v-on:click="changeIndex(-1)"
            ><i class="fa fa-2x fa-caret-left"></i
          ></a>
          <transition
            @before-enter="beforeEnterHandler"
            @enter="enterHandler"
            @after-enter="afterEnterHandler"
            @enter-cancelled="afterEnterHandler"
            @before-leave="beforeLeaveHandler"
            @leave="leaveHandler"
            @after-leave="afterLeaveHandler"
            mode="out-in"
            :css="false"
            appear
          >
            <div
              class="menuItem white"
              v-for="(item, i) in menu"
              :key="i"
              v-if="index === i"
            >
              <span class="number">{{ i + 1 }}</span
              ><!--             
            --><span class="type">{{ item.type }}</span
              ><!--             
            --><a class="subtitle" target="vue-iron" :href="item.link">{{
                item.title
              }}</a>
            </div>
          </transition>
          <a
            v-if="index != total - 1"
            class="arrow right"
            v-on:click="changeIndex(1)"
            ><i class="fa fa-2x fa-caret-right"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      src: require("@/assets/image/my_logo.png"),
      title: "JQ为基础，套vue结构，实现动画",
      index: 0,
      menu: [
        {
          type: "第一实训",
          title: "用vue-cli制作一个简单页面",
          link: "javascript:;"
        },
        {
          type: "第一实训",
          title: "新添运用methods、computed、v-on、v-if",
          link: "javascript:;"
        },
        {
          type: "第一实训",
          title: "学习用v-modal实现表单双向绑定",
          link: "javascript:;"
        },
        {
          type: "第一实训",
          title: "用v-for渲染列表页面,且实现添加列表条目",
          link: "javascript:;"
        },
        {
          type: "第一实训",
          title: "用computed实现组合筛选(按顺序)",
          link: "javascript:;"
        },
        {
          type: "第一实训",
          title: "处理数据结构,绑定数据，筛选列表",
          link: "javascript:;"
        },
        {
          type: "第二实训",
          title: "css为基础，套vue结构，实现动画",
          link: "javascript:;"
        },
        {
          type: "第二实训",
          title: "JQ为基础，套vue结构，实现动画",
          link: "javascript:;"
        },
        {
          type: "第X实训",
          title: "未知内容，学习中",
          link: "javascript:;"
        }
      ]
    };
  },
  computed: {
    today() {
      return this.menu[this.index];
    },
    total() {
      return this.menu.length;
    }
  },
  methods: {
    changeIndex(change) {
      return (this.index = (this.total + change + this.index) % this.total);
    },
    beforeEnterHandler(el) {
      $(el).css({ opacity: 0 });
    },
    enterHandler(el, done) {
      $(el).animate({ opacity: 1 },1000, done);
    },
    afterEnterHandler(el) {
      $(el).css({ opacity: "" });
    },
    beforeLeaveHandler(el) {
      $(el).css({ opacity: 1 });
    },
    leaveHandler(el, done) {
      $(el).animate({ opacity: 0 },1000, done);
    },
    afterLeaveHandler(el) {
      $(el).css({ opacity: "" });
    }
  }
};
</script>
<style src="@/assets/css/style.css"></style>
