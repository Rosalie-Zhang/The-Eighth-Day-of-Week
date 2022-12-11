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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init([
            {content:'一个小时过去了，你依旧没搞定这个bug。'},
            {content:'你还记得你曾经多少次编错代码，你开始怀疑自己加入机器人社团的决定。'},
            {content:'虽说是儿时的梦想，可繁琐的代码和层出不穷的bug终究成为你的绊脚石。'},
            {content:'和你组队的同学怨声载道，再坚持下去似乎只能成为大家的累赘。'},
            {content:'你叹了口气，决定：'}
        ]);
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
        this.node.active=true;
        this.node.getChildByName("Button1").active = false;
        this.node.getChildByName("Button2").active = false;
        this.nextTextData()
    },

    // init(){
    //     this.node.getChildByName("Button1").active = false;
    //     this.node.getChildByName("Button2").active = false;
    // },

    nextTextData(){
        if(!this.textEnd)return;
        if(++this.textIndex< this.textDateArr.length){
            this.setTextData(this.textDateArr[this.textIndex]);
        }else{
            if (this.textIndex == this.textDateArr.length){
                this.node.getChildByName("Button1").active = true;
                this.node.getChildByName("Button2").active = true;
                this.textIndex++;
            }else{
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

    // start () {
    // },

//     setText(){
//         var str = this.getComponent(cc.Label).string;
//         var j = 0;
//         this.getComponent(cc.Label).string = "";
//         this.schedule(function () {
//             this.getComponent(cc.Label).string += str[j];
//             j++;
//         }, 0.1, str.length - 1, 0.2);
// }


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
