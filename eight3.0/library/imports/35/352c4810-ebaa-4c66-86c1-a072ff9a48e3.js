"use strict";
cc._RF.push(module, '352c4gQ66pMZobBoHL/mkjj', 'SearchScript');
// script-wyx/SearchScript.js

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
    Textindex: cc.Integer
  },
  onLoad: function onLoad() {
    this.Textindex = 0;
    this.node.active = false;
    this.node.getChildByName("Button1").active = false;
    this.node.getChildByName("Button2").active = false;
    this.node.getChildByName("Button3").active = false;
    this.node.getChildByName("Button4").active = false;
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.closeText();
          break;
        }
    }
  },
  on_btn_onclick_phone: function on_btn_onclick_phone() {
    this.node.active = true;
    var str = "怎么是星期八？信号也没了，破手机肯定是坏了，该换台新的了。";
    var j = 0;
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[j];
      j++;
    }, 0.1, str.length - 1, 0.2);
  },
  on_btn_onclick_laptop: function on_btn_onclick_laptop() {
    this.node.active = true;
    var str = "你的电脑烫得动不了，似乎在运行复杂的程序。";
    var j = 0;
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[j];
      j++;
    }, 0.1, str.length - 1, 0.2);
  },
  on_btn_onclick_door: function on_btn_onclick_door() {
    this.node.active = true;
    var str = "门被锁上了，需要钥匙才能打开。";
    var j = 0;
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[j];
      j++;
    }, 0.1, str.length - 1, 0.2);
  },
  on_btn_onclick_window2: function on_btn_onclick_window2() {
    this.node.active = true;
    var str = "窗户是打开的！但是太高了，没有办法出去呢。";
    var j = 0;
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[j];
      j++;
    }, 0.1, str.length - 1, 0.2);
  },
  on_btn_onclick_window: function on_btn_onclick_window() {
    this.Textindex = 0;
    this.node.active = true;
    var str = "窗户半开着。";
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[this.Textindex];
      this.Textindex++;
    }, 0.1, str.length - 1, 0.2);
  },
  on_btn_onclick_desk: function on_btn_onclick_desk() {
    this.Textindex = 0;
    this.node.active = true;
    var str = "试试把桌子堆在一起看看吧！";
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[this.Textindex];
      this.Textindex++;
    }, 0.1, str.length - 1, 0.2);
  },
  closeText: function closeText() {
    cc.log(this.Textindex);

    if (this.Textindex == 6) {
      this.node.getChildByName("Button1").active = true;
      this.node.getChildByName("Button2").active = true;
      this.node.getChildByName("Button3").active = true;
    } else {
      if (this.Textindex == 13) {
        this.node.getChildByName("Button4").active = true;
      } else {
        if (this.Textindex == 0) {
          this.node.active = false;
        }
      }
    }

    this.Textindex = 0;
  },
  onclick_Button4: function onclick_Button4() {
    //场景切换到堆桌子小游戏
    cc.director.loadScene("Game");
  },
  onclick_Button1: function onclick_Button1() {
    cc.director.loadScene("Scene 2.31"); //场景切换到Scene2.31

    cc.log("change to Scene 2.31");
  },
  onclick_Button2: function onclick_Button2() {
    this.node.getChildByName("Button1").active = false;
    this.node.getChildByName("Button2").active = false;
    this.node.getChildByName("Button3").active = false;
    var str = "没有人应答。";
    var j = 0;
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[j];
      j++;
    }, 0.1, str.length - 1, 0.2);
  },
  onclick_Button3: function onclick_Button3() {
    this.node.getChildByName("Button1").active = false;
    this.node.getChildByName("Button2").active = false;
    this.node.getChildByName("Button3").active = false;
    this.node.active = false;
  },
  // LIFE-CYCLE CALLBACKS:
  start: function start() {} // update (dt) {},

});

cc._RF.pop();