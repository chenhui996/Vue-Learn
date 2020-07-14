//创建app组件
//将main.js里面的App组件抽离出来，因为代码乱了难受
import { defineComponent, h, computed,ref } from "@vue/runtime-core";
import StartPage from "./page/StartPage";
import GamePage from "./page/GamePage";
import EndPage from "./page/EndPage";

export default defineComponent({
  //defineComponent可使其有render提示,自动的类型提示
  setup() {
      //用ref创建响应式对象;
      //ref适合值类型使用：string、number;
      //最好打印看一下ref，其中value是核心属性，要理解；
    const currentPageName = ref("StartPage");
    // const currentPageName = ref("EndPage");

    //做计算函数：computed
    const currentPage = computed(() => {
      if (currentPageName.value === "StartPage") {
        return StartPage;
      }
      else if(currentPageName.value === "GamePage"){
        return GamePage;
      }
      else if(currentPageName.value === "EndPage"){
        return EndPage;
      }
    });
    return {
      currentPage,
      currentPageName,
    };
  },
  render(ctx) {
    //h会直接创建虚拟节点
    // const vnode = h("circle",{x:200,y:200},"阿辉nb");

    //第二天：
    return h("Container", [
      h(ctx.currentPage, {
        //onChangePage会检测emit,这里emit传过来的信息，就是page实参;
        onChangePage(page) {
          ctx.currentPageName = page;
          console.log(page);
        },
      }),
    ]);

    return h("Container", [h(GamePage)]);
  },
});
