import { defineComponent, h } from "@vue/runtime-core";
import endPageImg from "../../assets/end_page.jpg";
import restartBtn from "../../assets/restartBtn.png";

export default defineComponent({
  render(ctx) {
    //显示图片
    //<div><img src=""></img></div>
    return h("Container", [
      h("Sprite", { texture: endPageImg }),
      h("Sprite", {
        texture: restartBtn,
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
