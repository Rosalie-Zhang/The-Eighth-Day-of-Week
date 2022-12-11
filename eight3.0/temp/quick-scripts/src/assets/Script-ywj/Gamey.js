"use strict";
cc._RF.push(module, '54a06mhqCRC0ZsRL6jsaSE9', 'Gamey');
// Script-ywj/Gamey.js

"use strict";

// const score = require("GameScore");
cc.Class({
  "extends": cc.Component,
  properties: {
    arrowPrefab: {
      type: cc.Prefab,
      "default": null
    },
    targetPrefab: {
      type: cc.Prefab,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true; //开启物理引擎

    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this); //触摸开始

    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this); //触摸移动

    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this); //触摸结束，物体内部结束
  },
  start: function start() {
    this.createArrow();
    this.schedule(function () {
      this.createTarget();
    }, 2);
  },
  update: function update(dt) {},
  onTouchStart: function onTouchStart(event) {
    if (this.arrow) {
      this.arrow.updateArrowRotation(event.getLocation());
    }
  },
  onTouchMove: function onTouchMove(event) {
    if (this.arrow) {
      this.arrow.updateArrowRotation(event.getLocation());
    }
  },
  onTouchEnd: function onTouchEnd(event) {
    if (this.arrow) {
      this.arrow.shoot();
      this.arrow = null;
      this.scheduleOnce(function () {
        this.createArrow();
      }, 0.5);
    }
  },
  createArrow: function createArrow() {
    var arrowNode = cc.instantiate(this.arrowPrefab);
    arrowNode.x = -600;
    arrowNode.y = 250;
    arrowNode.zIndex = 1;
    arrowNode.parent = this.node;
    this.arrow = arrowNode.getComponent("Arrow");
  },
  createTarget: function createTarget() {
    var targetNode = cc.instantiate(this.targetPrefab);
    targetNode.x = this.randomInt(200, 750);
    targetNode.y = 0;
    targetNode.parent = this.node;
  },
  randomInt: function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
});

cc._RF.pop();