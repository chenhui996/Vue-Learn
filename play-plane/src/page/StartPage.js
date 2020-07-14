import { defineComponent, h } from "@vue/runtime-core";
import startPageImg from "../../assets/start_page.jpg";
import startBtn from "../../assets/startBtn.png";

export default defineComponent({
  render(ctx) {
    //显示图片
    //<div><img src=""></img></div>
    return h("Container", [
      h("Sprite", { texture: startPageImg }),
      h("Sprite", {
        texture: startBtn,
        x: 210,
        y: 500,
        interactive: true,
        onClick() {
          //emit第一个参数为事件名称，第二个参数为要传递的信息
          ctx.$emit("changePage", "GamePage");
        },
      }),
    ]);
  },
});
