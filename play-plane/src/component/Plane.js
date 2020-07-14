//飞机
import {
  defineComponent,
  h,
  watch,
  reactive,
  onMounted,
  onUnmounted,
  toRefs
} from "@vue/runtime-core";
import PlaneImg from "../../assets/plane.png";

export default defineComponent({
  props: ["x", "y"],
  setup(props,ctx) {
    //发子弹
    //按空格
    const handleAttack = (e) => {
      if (e.code === "Space") {
        // console.log("ds");
        //使用处记得加onAttack
        ctx.emit("attack",{x:props.x,y:props.y});
      }
    };
    onMounted(() => {
      window.addEventListener("keydown", handleAttack);
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleAttack);
    });

    //观察props
    //发现props是一个'仅读'的响应式对象(readonly);
    //所用我们用reactive创建可改的响应式对象;

    //除了用reactive创建可改的响应式对象，咱们也可以将props改成一个响应式对象；
    //若直接改props，不行，这被称为“响应式丢失”;
    //故用toRefs()，即可将props改成一个toRefs类型的响应式对象，这样就可以改props内的值了;
    //toRefs()是一个工具函数；
    // const point = reactive({
    //   x: props.x,
    //   y: props.y,
    // });
    // watch(props, (value) => {
    //   point.x = value.x;
    //   point.y = value.y;
    // });

    // return {
    //   point,
    // };
    const { x, y } = toRefs(props);
    return {
      x,
      y,
    };
  },
  render(ctx) {
    return h("Container", { x: ctx.x, y: ctx.y }, [
      h("Sprite", { texture: PlaneImg }),
    ]);
  },
});
