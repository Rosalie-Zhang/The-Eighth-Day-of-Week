// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var conscious = require('globalVariable');
var diary = require('globalVariable');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
   toSceneTest1: function(){
      cc.director.loadScene("scene_test1")
     },
   toSceneTest2: function(){
      cc.director.loadScene("scene_test2")
   },
   toSceneTest3: function(){
      cc.director.loadScene("scene_test3")
   },
   toSceneTest4: function(){
      cc.director.loadScene("scene_test4")
   },
   toSceneTest5: function(){
      cc.director.loadScene("scene_test5")
   },
   toScene4: function(){
      cc.director.loadScene("scene4")
     },
     towin: function(){
      cc.director.loadScene("Win")
     },
     toywj: function(){
      cc.director.loadScene("Winy")
     },
   tohome: function(){
      cc.director.loadScene("home")
     },
   toGoodending: function(){
      cc.director.loadScene("good_ending")
   },
   toBadending: function(){
      cc.director.loadScene("bad_ending")
   },
   toFgoodending: function(){
      cc.director.loadScene("fakegood_ending")
   },
   torightanser: function(){
      cc.director.loadScene("right_anser")
   },
   towronganster: function(){
      conscious.consciousNumber -= 1;
      cc.director.loadScene("wrong_anser")
   },
   tosave: function(){
      cc.director.loadScene("saveScene")
   },
   tohelp: function(){
      cc.director.loadScene("helping")
   },
   todiary_e: function(){
      cc.director.loadScene("diary_e")
   },
   todiary_e1: function(){
      diary.diaryCollect = diary.diaryCollect + "E";
      cc.director.loadScene("diary_e1")
   },
   toscene1: function(){
      cc.director.loadScene("scene1")
   },
   toscenegoodending001: function(){
      cc.director.loadScene("good_ending1")
   },
   toscene4001: function(){
      cc.director.loadScene("scene4.1")
   },
   towronganster: function(){
      conscious.consciousNumber -= 1;
      cc.director.loadScene("wrong_anser3")
   },
   towronganster: function(){
      conscious.consciousNumber -= 1;
      cc.director.loadScene("wrong_anser4")
   },
   towronganster: function(){
      conscious.consciousNumber -= 1;
      cc.director.loadScene("wrong_anser5")
   },
   towronganster: function(){
      conscious.consciousNumber -= 1;
      cc.director.loadScene("wrong_anser6")
   },
});
