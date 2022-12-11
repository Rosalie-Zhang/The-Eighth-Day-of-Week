"use strict";
cc._RF.push(module, 'ec0e7BB099N25+irOTsMn8d', 'Text2.2');
// script/Text2.2.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.active = false;
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.showText();
          break;
        }
    }
  },
  // init(){
  //     this.node.active = false;
  // },
  showText: function showText() {
    if (!this.node.active) {
      this.node.active = true;
    } else {
      cc.director.loadScene("Scene 2.3"); //场景切换到Scene2.3

      cc.log("change to Scene 2.3");
    }
  },
  // start () {},
  update: function update(dt) {}
});

cc._RF.pop();