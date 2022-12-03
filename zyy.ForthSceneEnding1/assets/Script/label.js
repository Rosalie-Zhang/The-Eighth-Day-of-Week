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
    onLoad(){
        this.init([
            {content:'没想到你能来到这里，我的可悲的操纵者。'},
            {content:'你还记得你曾经多少次编错代码，'},
            {content:'有多少次让我失去平衡、重重倒地吗？'},
            {content:'你这样的人有什么资格继续做我的主宰呢？'},
            {content:'既然你来了，准备好迎接最后的挑战吧！'}
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
    //  start () {
    //     this.text.string = '';
    //     var str = '想要带你去看浪漫的土耳其';
    //     var j = 0;
    //     var interval = 0.2;// 以1秒为单位的时间间隔
    //     var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
    //     var delay = 1;// 我们在1秒后开始运行
    //     this.schedule(function() {
    //         this.text.string += str[j];
    //         j++;
    //     }, interval, repeat, delay);
    // },
    init(textDateArr){
        this.nowText=null;
        this.textEnd=true;
        this.tt=0;//播放的总时长
        this.textIndex=-1;
        this.textDateArr=textDateArr;
        this.node.active=true;
        this.nextTextData()
    },
    nextTextData(){
        if(!this.textEnd)return;
        if(++this.textIndex< this.textDateArr.length){
            this.setTextData(this.textDateArr[this.textIndex]);
        }else{
            this.closeDialog();
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
    update(dt){
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

    }
});
