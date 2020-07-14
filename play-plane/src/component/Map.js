import { defineComponent, h, ref } from "@vue/runtime-core";
import MapImg from "../../assets/map.jpg";
import {getGame} from "../Game"

export default defineComponent({
  setup() {
    const mapHeight = 1080;
    const mapY1 = ref(0);
    const mapY2 = ref(-mapHeight);

    //做循环，让地图动起来：y++
    //PIXI的循环API
    const speed = 3;
    getGame().ticker.add(() => {
        //ref创建的响应式对象，要加value;
        mapY1.value+=speed;
        mapY2.value+=speed;
        if(mapY1.value >= mapHeight){
            mapY1.value = -mapHeight;
        }
        if(mapY2.value >= mapHeight){
            mapY2.value = -mapHeight;
        }
    });


    return {
      mapY1,
      mapY2,
    };
  },
  render(ctx) {
    return h("Container", [
      h("Sprite", { texture: MapImg, y: ctx.mapY1 }),
      h("Sprite", { texture: MapImg, y: ctx.mapY2 }),
    ]);
  },
});
