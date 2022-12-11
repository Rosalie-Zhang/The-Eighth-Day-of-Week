"use strict";
cc._RF.push(module, 'fbeb7RnNFJEkZxVZSsHgJ0X', 'GameMgr');
// Script-ywj/GameMgr.js

"use strict";

// import { hitscore } from "GameScore";
var score = require("GameScore");

var conscious = require('globalVariable');

cc.Class({
  "extends": cc.Component,
  properties: {
    score: {
      type: cc.Label,
      "default": null,
      tooltip: "得分显示Label组件"
    },
    timeBar: {
      type: cc.ProgressBar,
      "default": null,
      tooltip: "时间进度条"
    },
    losesound: {
      type: cc.AudioClip,
      "default": null
    },
    winsound: {
      type: cc.AudioClip,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var limitTime = score.time; //游戏限时总时间

    this.schedule(function () {
      if (score.time > 0) {
        score.time--; //倒计时

        this.timeBar.progress = score.time / limitTime;
      } else {
        if (score.hitscore >= 20) {
          // this.winsound.play();
          cc.audioEngine.play(this.winsound);
          cc.director.loadScene("Winy");
        } else {
          // this.losesound.play();
          conscious.consciousNumber -= 1;
          cc.audioEngine.play(this.losesound);
          cc.director.loadScene("Losey");
          score.time = limitTime;
          score.hitscore = 0;
        }
      }
    }, 1);
  },
  start: function start() {},
  update: function update(dt) {
    this.score.string = score.hitscore + "/20"; //加分
  }
});

cc._RF.pop();