// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

window.chooseTime = 1

cc.Class({
    extends: cc.Component,

    // properties: {
    //     music:cc.AudioSource,
    // },

    //当点击按钮时触发场景切换
    on_btn_onclick1:function(){
        if(chooseTime < 3){
            cc.director.loadScene("Scene 1.1");//场景切换到Scene1.1
            cc.log("change to Scene 1.1");
            chooseTime++;
        }
        if (chooseTime == 3){
            cc.director.loadScene("Scene 1.21") //场景切换到Scene1.21
            cc.log("change to Scene 1.21");
        }
        
    },

    on_btn_onclick2:function(){
        if(chooseTime < 3){
            cc.director.loadScene("Scene 1.1");//场景切换到Scene1.1
            cc.log("change to Scene 1.1");
            chooseTime++;
        }
        if (chooseTime == 3){
            cc.director.loadScene("Scene 1.22") //场景切换到Scene1.22
            cc.log("change to Scene 1.22");
        }

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {

    // },

    // update (dt) {},
});
