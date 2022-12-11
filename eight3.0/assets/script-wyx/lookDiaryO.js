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

    onLoad () {
        this.node.getChildByName("diaryO big").active = false;
        cc.systemEvent.on('keydown',this.onKeyDown,this);//绑定键盘
    },
    onDestroy(){
        cc.systemEvent.off('keydown',this.onKeyDown,this);
    },
    onKeyDown(e){
        switch(e.keyCode){
            case cc.macro.KEY.space:{
                this.closeDiary();
                break;
            }
        }
    },

    onclick_diaryO:function(){
        //放大效果
        this.node.getChildByName("diaryO big").active = true;
        diary.diaryCollect = diary.diaryCollect + "O";
        cc.log("收集日记"+diary.diaryCollect);
    },

    closeDiary(){
        if(this.node.getChildByName("diaryO big").active){
            this.node.active = false;
        }
    },

    start () {

    },

    // update (dt) {},
});
