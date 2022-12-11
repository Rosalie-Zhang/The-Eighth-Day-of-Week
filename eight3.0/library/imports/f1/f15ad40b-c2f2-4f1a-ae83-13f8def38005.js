"use strict";
cc._RF.push(module, 'f15adQLwvJPGq6DE/je84AF', 'turnTo');
// scripts/zyy/turnTo.js

"use strict";

var _cc$Class;

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var conscious = require('globalVariable');

var diary = require('globalVariable');

cc.Class((_cc$Class = {
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  toSceneTest1: function toSceneTest1() {
    cc.director.loadScene("scene_test1");
  },
  toSceneTest2: function toSceneTest2() {
    cc.director.loadScene("scene_test2");
  },
  toSceneTest3: function toSceneTest3() {
    cc.director.loadScene("scene_test3");
  },
  toSceneTest4: function toSceneTest4() {
    cc.director.loadScene("scene_test4");
  },
  toSceneTest5: function toSceneTest5() {
    cc.director.loadScene("scene_test5");
  },
  toScene4: function toScene4() {
    cc.director.loadScene("scene4");
  },
  towin: function towin() {
    cc.director.loadScene("Win");
  },
  toywj: function toywj() {
    cc.director.loadScene("Winy");
  },
  tohome: function tohome() {
    cc.director.loadScene("home");
  },
  toGoodending: function toGoodending() {
    cc.director.loadScene("good_ending");
  },
  toBadending: function toBadending() {
    cc.director.loadScene("bad_ending");
  },
  toFgoodending: function toFgoodending() {
    cc.director.loadScene("fakegood_ending");
  },
  torightanser: function torightanser() {
    cc.director.loadScene("right_anser");
  },
  towronganster: function towronganster() {
    conscious.consciousNumber -= 1;
    cc.director.loadScene("wrong_anser");
  },
  tosave: function tosave() {
    cc.director.loadScene("saveScene");
  },
  tohelp: function tohelp() {
    cc.director.loadScene("helping");
  },
  todiary_e: function todiary_e() {
    cc.director.loadScene("diary_e");
  },
  todiary_e1: function todiary_e1() {
    diary.diaryCollect = diary.diaryCollect + "E";
    cc.director.loadScene("diary_e1");
  },
  toscene1: function toscene1() {
    cc.director.loadScene("scene1");
  },
  toscenegoodending001: function toscenegoodending001() {
    cc.director.loadScene("good_ending1");
  },
  toscene4001: function toscene4001() {
    cc.director.loadScene("scene4.1");
  }
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser3");
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser4");
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser5");
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser6");
}, _cc$Class));

cc._RF.pop();