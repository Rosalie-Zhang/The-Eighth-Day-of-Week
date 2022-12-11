"use strict";
cc._RF.push(module, '78346lY1ctF44rZiZKMhxP/', 'lookDiaryO');
// script/lookDiaryO.js

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
    this.node.getChildByName("diaryO big").active = false;
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
  onclick_diaryO: function onclick_diaryO() {
    //放大效果
    this.node.getChildByName("diaryO big").active = true;
    diary.diaryCollect = diary.diaryCollect + "O";
    cc.log("收集日记" + diary.diaryCollect);
  },
  closeDiary: function closeDiary() {
    if (this.node.getChildByName("diaryO big").active) {
      this.node.active = false;
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();