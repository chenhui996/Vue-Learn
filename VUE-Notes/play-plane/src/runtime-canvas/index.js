// 自己创建基于 canvas 的入口文件
import { createRenderer } from "vue";
import { Text, Container, Sprite, Texture } from "pixi.js";

const KKBrender = createRenderer({
  createElement(type) {
    // 创建元素
    // template -> 虚拟dom树
    // 所以要在这里调用 pixi 的 api 创建不同类型的元素
    let element;
    switch (type) {
      case "container":
        element = new Container();
        break;
      case "sprite":
        element = new Sprite();
        break;
      default:
        break;
    }
    return element;
  },
  insert(el, parent) {
    if(el && parent){
      parent.addChild(el);
    }
  },
  nextSibling(node){
    return node
  },
  remove(el){
    if(el.parent){
      el.parent.removeChild(el);
    }
  },
  parentNode(node){
    return node.parent;
  },
  setElementText(node, text) {
    const canvasText = new Text(text);
    node.addChild(canvasText);
  },
  patchProp(el, key, prveValue, nextValue) {
    switch (key) {
      case "texture":
        // 单独处理
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        // 单独处理
        el.on("pointertap", nextValue);
        break;
      default:
        // key就是所有属性名了
        // nextValue就是属性值

        // 常规操作
        el[key] = nextValue;
        break;
    }
  },
  createText(text){
    console.log(text);
  },
  createComment(){
    // canvas 内不需要，只要让其不报错即可
  },

});

export function createApp(rootComponent) {
  return KKBrender.createApp(rootComponent);
}
