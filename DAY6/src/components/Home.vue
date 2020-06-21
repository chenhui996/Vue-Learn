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
                <option :value="null">请选择</option>
                <option v-for="(item,index) in typeList.sort" :key="index">{{item}}</option>
              </select>
              <select class="filter_text" v-model="input.title">
                <option :value="null">请选择</option>
                <option v-for="(item,index) in titleList.sort" :key="index">{{item}}</option>
              </select>
            </div>
          </div>
          <div class="menu">
              <div class="menuItem_box">
                <div v-if="content" class="menuItem_list">
                  <span class="number">{{ content.index + 1}}</span
                  ><!--             
                    --><a
                    class="title_list_box"
                    target="vue-iron"
                    href="content.link"
                    >{{content.link}}</a
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
      title: "处理数据结构,绑定数据，筛选列表",
      // index: 0,
      input: {
        type: null,
        title: null
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
          type: "第X实训",
          title: "未知内容，学习中",
          link: "javascript:;"
        }
      ]
    };
  },
  methods: {},
  computed: {
    typeList() {
      let obj = {
        sort: [],
        map: {}
      };
      this.menu.forEach(({type,title,link}, index) => {
        if (!obj.map[type]) {
          obj.sort.push(type);
          obj.map[type] = {
            sort: [],
            map: {}
          };
        }
        obj.map[type].sort.push(title);
        obj.map[type].map[title] = { index, link };
      });
      return obj;
    },
    titleList(){
      if(this.input.type){
        return this.typeList.map[this.input.type];
      }
      else{
        return [];
      }
    },
    content(){
      if(this.input.title){
        return this.titleList.map[this.input.title];
      }
      else{
        return null;
      }
    }
  }
};
</script>
<style src="@/assets/css/style.css"></style>
