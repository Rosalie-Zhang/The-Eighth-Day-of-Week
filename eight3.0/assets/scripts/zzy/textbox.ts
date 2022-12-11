// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import jump_button from "./jump_button";
import message from "./message";
const {ccclass, property} = cc._decorator;

class Message{
     content:string;

     constructor(content:string){
        this.content=content;
     }
}

@ccclass
export default class textbox extends cc.Component {
    
    @property(message)
    Mscontrol:message=null;

    @property(jump_button)
    jump_button_control:jump_button=null;
    
    //消息数组
    msgs:Message[]=null;
    index:number=0;
    

    start () {
    this.msgs=[
        new Message("来探索一下走廊吧") ];
     this.node.on(cc.Node.EventType.MOUSE_DOWN,(event)=>{
     if(this.index<=this.msgs.length){
        //如果对话面板没显示，显示
        if(this.Mscontrol.node.active==false){
            this.Mscontrol.node.active = true;
        }
        //读消息
        let mes=this.msgs[this.index++];
        //显示消息
        let world:string="";
        let letter = mes.content.split("");
        for(let i = 0; i < mes.content.length; i++){
            setTimeout(()=>{
                world += letter[i];
                this.Mscontrol.setMessage(world);
            },60*(i));
        }}
       if(this.jump_button_control.node.active==false){
        this.jump_button_control.node.active = true;
       }
     }); 
    }
}

    