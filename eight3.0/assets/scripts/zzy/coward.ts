// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import message from "./message";
import start from "./start";
//import jump_button from "./jump_button";
const {ccclass, property} = cc._decorator;

class Message{
     content:string;

     constructor(content:string){
        this.content=content;
     }
}

@ccclass
export default class coward extends cc.Component {
    
    @property(message)
    Mscontrol:message=null;

    @property(start)
    start_control:start=null;
    
    //消息数组
    msgs:Message[]=null;
    index:number=0;

    start () {
        //初始化数组
      this.msgs=[
            new Message("你的手机四分五裂，达成结局——胆小鬼") ];
      this.node.on(cc.Node.EventType.MOUSE_DOWN,(event)=>{
         if(this.index<=this.msgs.length){
            //如果对话面板没显示，显示
            if(this.Mscontrol.node.active==false){
                this.Mscontrol.node.active = true;
            }
            //读消息
            let mes=this.msgs[this.index++];
            //显示消息
            //显示消息
            let world:string="";
            let letter = mes.content.split("");
            for(let i = 0; i < mes.content.length; i++){
                setTimeout(()=>{
                    world += letter[i];
                    this.Mscontrol.setMessage(world);
                },60*(i));
            }
         }if(this.start_control.node.active==false){
            this.start_control.node.active = true;
           }
      });
    }
    update (dt) {

    }
}