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
          <div class="menuItem white">
            <span class="number">{{ index + 1 }}</span
            ><!--             
            --><span class="type">{{ today.type }}</span
            ><!--             
            --><a class="subtitle" target="vue-iron" :href="today.link">{{
              today.title
            }}</a>
          </div>
          <a v-if="index != (total - 1)" class="arrow right" v-on:click="changeIndex(1)"
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
      title: "VUE第二个小训练",
      index: 0,
      menu: [
        {
          type: "第一实训",
          title: "用vue-cli制作一个简单页面",
          link: "javascript:;"
        },
        {
          type: "第一实训",
          title: "新添运用methods、computed、v-on、v-if作一个页面",
          link: "javascript:;"
        },
        {
          type: "第X实训",
          title: "未知内容，学习中",
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
  computed:{
      today(){
          return this.menu[this.index];
      },
      total(){
          return this.menu.length;
      }
  },
  methods: {
    changeIndex(change) {
      return this.index =(this.total + change + this.index) % this.total;
    }
  }
};
</script>
<style src="@/assets/css/style.css"></style>
