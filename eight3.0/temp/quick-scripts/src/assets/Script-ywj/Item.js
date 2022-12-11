"use strict";
cc._RF.push(module, '71e08U3p1tKXpKL9dPSFhDZ', 'Item');
// Script/Item.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    if (this.node.y < -cc.winSize.height / 2 - 200) {
      this.node.destroy();
    }
  }
});

cc._RF.pop();