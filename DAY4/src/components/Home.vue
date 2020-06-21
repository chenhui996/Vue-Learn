<template>
  <section>
    <div class="container">
      <div class="title">
        <img class="logo" :src="src" />
        <h1>{{ title }}</h1>
        <div class="line_box">
          <div class="input" style="font-size:0px;">
            <div class="filter_box">
              <select class="filter_sec" v-model="input.type">
                <option>第一实训</option>
                <option>第二实训</option>
                <option>第三实训</option>
                <option>第X实训</option>
              </select>
              <input class="filter_text" type="text" v-model.trim="input.title" @keyup.enter="inputHandler" />
            </div>
          </div>
          <div class="menu">
            <div class="menuItem_box" v-for="(item, index) in menu" :key="index">
              <div class="menuItem_list">
                <span class="number">{{ index + 1 }}</span
                ><!--             
                    --><span class="type">{{ item.type }}</span
                ><!--             
                    --><a
                  class="title_list_box"
                  target="vue-iron"
                  :href="item.link"
                  >{{ item.title }}</a
                >
              </div>
            </div>
          </div>
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
      title: "用v-for渲染列表页面",
      index: 0,
      input:{
          type:'第一实训',
          title:''
      },
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
          title: "用v-for渲染列表页面",
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
  methods:{
      inputHandler(){
          if(this.input.title){
              this.menu.push({
                  type: this.input.type,
                  title: this.input.title,
                  link: "javascript:;"
              });
              this.input.title = '';
          }
      }
  }
};
</script>
<style src="@/assets/css/style.css"></style>
