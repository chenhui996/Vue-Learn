# Vue3

# 为什么要学：

- 更快;
- 更好;
- 2020 前端 er 必须掌握的技术(money);

# 创建

- 将 vue2 升级至 vue3:
  - \$vue add vue-next
- 注意：@vue/cli 版本记得更新到最新,不然报错;

# 特性

- template 不需要根结点;

# Composition Api

- 整个是基于"函数式";
  - 之前的 options 是基于对象的：
    - data、mothods、component 等组件内容全部写在一个对象里;
    - 但是 composition api 可以抽离出来,正常的在外侧写函数;
  - onMounted:
    - composition api 处理生命周期的一个函数;
    - 需要从 vue 导入使用;
      - import { onMounted } from 'vue';
  - 用法：
    - const useTest = () => {
      - onMounted(() => {
        - console.log("mounted");
      - });
    - }
    - 当在外侧写完函数对象后,还需要在组件对象中调用;
    - 这里,composition api 还提供一个 setup 函数
      - 用来调用 composition api 在外部定义的函数对象;
    - export default {
      - name:"HelloWorld",
      - props: {
        - msg: String
      - },
      - //setup 来了
      - setup(){ - //这里调用外部之前定义好的函数对象; - userTest()
        }
    - }

# Custom Renderer API

- 新技术：解决什么问题？

  - 渲染进不同平台的技术;

- API：
  - createRenderer : 创建渲染器;
    - createRenderer(redererOptions);
      - redererOptions 代表接口,需要我们自己去实现;
    - 接口：
        - createElement;
        - insert;
        - patchProp;

# 飞机大战例子

# 构建飞机大战第一步：

- 把代码渲染到 canvas 上面去;

# 第一天目标(一共三天完成)

- canvas和vue3的碰撞;
- canvas -> pixi.js;
- 目标：vue3结合canvas实现把图形绘制到canvas上;
    - 也可以说成：vue3结合pixi.js实现把图形绘制到canvas上;
    - 原因:canvas比较底层，用起来比较困难，这里用一个基于canvas的游戏引擎库：pixi.js;

# setup环境(配置环境)

- 配置webpack;
- 配置scripts;
    - build;
    - serve;

# 配置webpack；

- 创建play-plane文件夹(项目文件全塞在这里)：
  - mkdir play-plane
- 进入：
  - cd play-plane

- 初始化文件：
  - npm init -y

- 初始化完成后，创建文件main.js：
  - touch main.js

- 创建webpack文件webpack.config.js：
  - 进入：写webpack的'配置文件':
    - 内容：网址待定，稍后马上补充;

- 安装webpack和webpack-cli:
  - $ npm i webpack webpack-cli -D
- 改package.json:
  - 添加个启动webpack的build命令:
    - "build":"webpack"
- 尝试打包：
  - 成功生成dist文件夹，且里面仅含有之前定义的build.js文件，即代表打包成功完成;

- 运行，查看浏览器，即可看到打印出了main;

- 至此，setup第一步：成功;

- 再配置一个启动服务器命令吧：
  - 进入webpack.config.js加路径：
    - devServer:{
      - contentBase:path.resolve(__dirname, "./dist"),
    - }
  - 然后下载webpack-dev-server:
    - $ npm i webpack-dev-server -D
  - 下载安装完成后，进入package.json配置启动命令：serve;
    - "serve": "webpack-dev-server --open"
  - 配置完成;

# 引入createRenderer

- 安装库：
  - @vue/runtime-core
  - $npm i @vue/runtime-core

- 安装完成后，即可进入main.js引入createRenderer;
  - import {createRenderer} from "@vue/runtime-core";
- 利用createRenderer，我们即可创建一个render对象(渲染器)；
  - 创建的renderer，打印出来是一个object对象;

# 参考初始化版本的main.js，创建组件

- vue初始化默认版本的渲染器，是基于dom的;
- 我们要做的是基于canvas的渲染器,所以，咱们新建个文件:
  - 把两类组件清晰的区分开来，可读性更高;

//目标：将代码渲染到canvas上

//首先，用createApp创建一个组件App,详情可看App.js;
//根组件是返回一个虚拟节点，这时候，还没办法让浏览器跑起来，因为还没有mount；
//但是要mount。需要有一个根容器来支撑，对应的就是平时的"#App"这个vue常用的根容器名称（大家都是这个习惯命名：<div id="#App"></div）;
//于是，咱们去创建不同于基于正常dom，而是基于canvas的根容器！
//这里，我们选择用PIXI这个js库来帮助我们完成————基于canvas的根容器；
//初始化一个PIXI实例化对象：game;
//然后通过打印查看，我们需要了解到PIXI实例化对象，也就是game的两个属性：
    //view:根节点(也就是dom)；
    //stage:整个根容器,根节点canvas是需要塞进这里面的;




# 第二天：

# 随笔

# composition API来袭

- 把视图渲染到canvas上；
  - 正常的vue只能渲染到dom树上；
  - 实现了基于canvas的渲染器；

- 认识composition api
  - 使用compostion api完成《飞机大战》的编写；

# 动机

- options API
- composition API