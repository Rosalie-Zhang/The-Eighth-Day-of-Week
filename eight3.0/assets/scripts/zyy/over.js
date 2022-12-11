// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var diary = require('globalVariable');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onclick_ending:function(){
        if(diary.diaryCollect == 'NOPE'){
            cc.director.loadScene("good_ending");
        }else{
            cc.director.loadScene("fakegoodending");
        }
    },

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
