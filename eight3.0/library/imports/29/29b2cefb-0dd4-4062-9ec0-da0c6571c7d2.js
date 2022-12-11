"use strict";
cc._RF.push(module, '29b2c77DdRAYp7A2gxlccfS', 'lookDiaryN');
// script/lookDiaryN.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var diary = require('globalVariable');

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.getChildByName("diaryN big").active = false;
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.closeDiary();
          break;
        }
    }
  },
  onclick_diaryN: function onclick_diaryN() {
    //放大效果
    this.node.getChildByName("diaryN big").active = true;
    diary.diaryCollect = diary.diaryCollect + "N";
    cc.log("收集日记" + diary.diaryCollect);
  },
  closeDiary: function closeDiary() {
    if (this.node.getChildByName("diaryN big").active) {
      this.node.active = false;
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();