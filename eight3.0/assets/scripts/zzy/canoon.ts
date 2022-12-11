// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import jump_choice from "./jump_choice";
import message from "./message";
const {ccclass, property} = cc._decorator;

class Message{
     content:string;

     constructor(content:string){
        this.content=content;
     }
}

@ccclass
export default class canoon extends cc.Component {
    
    @property(message)
    Mscontrol:message=null;

    @property(jump_choice)
    jump_choice_control:jump_choice=null;
    
    //消息数组
    msgs:Message[]=null;
    index:number=0;

    start () {
        //初始化数组
      this.msgs=[
            new Message("突然，手机开始震动，震动的声响在寂静的走廊里格外刺耳") ];
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
         } if(this.jump_choice_control.node.active==false){
            this.jump_choice_control.node.active = true;
           }
      });
    }
    update (dt) {

    }
}