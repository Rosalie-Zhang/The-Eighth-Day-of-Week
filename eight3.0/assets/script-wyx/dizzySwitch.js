// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
     
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on('keydown',this.onKeyDown,this);//绑定键盘
    },

    onDestroy(){
        cc.systemEvent.off('keydown',this.onKeyDown,this);
    },
    onKeyDown(e){
        switch(e.keyCode){
            case cc.macro.KEY.space:{
                this.nextScene();
                break;
            }
        }
    },

    nextScene(){
        cc.director.loadScene("Scene 2.1"); //场景切换到Scene2.1
    },

    start () {

    },

    // update (dt) {},
});
