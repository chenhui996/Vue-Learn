<template>
  <section>
    <div class="container">
      <div class="title">
        <img class="logo" :src="src" />
        <h1>{{ title }}</h1>
        <div class="input">
          {{ name }}、{{ sex }}性、年龄为{{ age }}，<br />{{favor.length ? "喜欢" : ''}}
          {{ favor.join("、") }}{{favor.length ? "，" : ''}}{{ member ? '已' : '未' }}成为频道会员
        </div>
        <div class="menu">
          <table class="table1">
            <tr>
              <td class="title3">
                姓名：
              </td>
              <td>
                <input value="Cain" v-model="name" />
              </td>
            </tr>
            <tr>
              <td class="title3">
                性别：
              </td>
              <td>
                <input value="女" type="radio" v-model="sex" />女
                <input value="男" type="radio" v-model="sex" />男
              </td>
            </tr>
            <tr>
              <td class="title3">
                年龄：
              </td>
              <td>
                <select  v-model="age">
                  <option>20岁以下</option>
                  <option>20-30岁之间</option>
                  <option>30-40岁之间</option>
                  <option>40岁以上</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="title3">
                兴趣：
              </td>
              <td>
                <input value="游泳" type="checkbox" v-model="favor" />游泳
                <input value="看电影" type="checkbox" v-model="favor" />看电影
                <input value="旅游" type="checkbox" v-model="favor" />旅游
              </td>
            </tr>
            <tr>
              <td class="title3">
                会员：
              </td>
              <td><input type="checkbox" v-model="member" />加入</td>
            </tr>
          </table>
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
      title: "VUE的DAY3",
      src: require("@/assets/image/my_logo.png"),
      name: "Cain",
      sex: "男",
      age: "30-40岁之间",
      favor: ["游泳", "看电影", "旅游"],
      member: true
    };
  }
};
</script>
<style src="@/assets/css/style.css"></style>
