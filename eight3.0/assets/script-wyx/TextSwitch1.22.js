// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        textLabel:cc.Label,
    },

    onLoad () {
        this.init([
            {content:'达成结局：DDL克星'}
        ])
        cc.systemEvent.on('keydown',this.onKeyDown,this);//绑定键盘
    },

    onDestroy(){
        cc.systemEvent.off('keydown',this.onKeyDown,this);
    },
    onKeyDown(e){
        switch(e.keyCode){
            case cc.macro.KEY.space:{
                this.nextTextData();
                break;
            }
        }
    },

    init(textDateArr){
        this.nowText=null;
        this.textEnd=true;
        this.tt=0;//播放的总时长
        this.textIndex=-1;
        this.textDateArr=textDateArr;
        this.node.active=false;
        this.nextTextData()
    },

    nextTextData(){
        if(!this.textEnd)return;
        if(++this.textIndex< this.textDateArr.length){
            this.node.active=true;
            this.setTextData(this.textDateArr[this.textIndex]);
        }else{
            if(this.textIndex == this.textDateArr.length){
                cc.director.loadScene("home");
            }
            else{
                this.closeDialog();
            }
        }
    },

    setTextData(textDate){
        if(!this.textEnd)return;
        this.textEnd=false;
        this.textLabel.string='';
        this.nowText=textDate.content;
    },
    closeDialog(){
        this.node.active=false;
    },

    // start () {},

    update (dt) {
        if(!this.nowText)return;
        this.tt+=dt;
        if(this.tt>=0.1){
            if(this.textLabel.string.length<this.nowText.length){
                this.textLabel.string=this.nowText.slice(0,this.textLabel.string.length+1)
            }else{
                this.textEnd=true;
                this.nowText=null;
            }
            this.tt=0;
        }
    },

});
