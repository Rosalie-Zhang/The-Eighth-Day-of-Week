"use strict";
cc._RF.push(module, 'b8c8bt1TZhEY6hSobOxeT+J', 'showConsciousNumber');
// script/showConsciousNumber.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var conscious = require('globalVariable');

cc.Class({
  "extends": cc.Component,
  properties: {
    text: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.text.string = "理智值：" + conscious.consciousNumber.toString();
  } // start () {
  //     this.getComponent(cc.Label).String = "理智值：" + conscious.consciousNumber.toString();
  // },
  // update (dt) {},

});

cc._RF.pop();