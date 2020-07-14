//引入createRenderer
import { createRenderer } from "@vue/runtime-core";
import { Graphics, Text, Container, Sprite, Texture } from "pixi.js";

//创建渲染器
//实现渲染接口
const renderer = createRenderer({
  //type 对应的是App.js里面的h('div')中的div字符串
  createElement(type) {
    //基于type,创建视图
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
    }

    return element;
  },
  insert(el, parent) {
    //el打印出来为一个Graphics,即为createElement创建的元素本身;
    parent.addChild(el);
  },
  patchProp(el, key, prveValue, nextValue) {
    switch (key) {
      case "texture":
        //设置图片
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        //设置图片
        el.on("pointertap", nextValue);
        break;
      default:
        el[key] = nextValue;
    }
  },
  setElementText(node, text) {
    const nodeText = new Text(text);
    node.addChild(nodeText);
  },
  createText(text) {
    return new Text(text);
  },
  //新加
  //处理注释
  createComment() {},
  //获取父节点
  parentNode() {},
  //获取兄弟节点
  nextSibling() {},
  //删除节点时调用
  remove(el) {
    const parent = el.parent;
    if (parent) {
      parent.removeChild(el);
    }
  },
});

export function createApp(rootComponent) {
  //调用renderer
  return renderer.createApp(rootComponent);
}
