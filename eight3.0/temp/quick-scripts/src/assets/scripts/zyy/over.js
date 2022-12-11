"use strict";
cc._RF.push(module, '3cbe1KeqfhNB6wd1t7huUoq', 'over');
// scripts/zyy/over.js

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
  onclick_ending: function onclick_ending() {
    if (diary.diaryCollect == 'NOPE') {
      cc.director.loadScene("good_ending");
    } else {
      cc.director.loadScene("fakegoodending");
    }
  },
  // onLoad () {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();