// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
declare const require : any
var conscious = require("globalVariable")
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
   
    @property({ type: cc.AudioClip })
    moveSound: cc.AudioClip = null
    
    public soundPlay: boolean = true;

  onCollisionEnter(other,self){//当碰撞产生的时候调用//other 产生碰撞的另一个碰撞组件self  产生碰撞的自身的碰撞组件
        console.log('onCollisionEnter')
        if(other.node.name == "box"){//如果碰撞的节点是box游戏就结束
            cc.audioEngine.playEffect(this.moveSound, false);
            conscious.consciousNumber -= 1;
            this.GameOver();
        }
    }

    GameOver(){
        console.log("游戏结束了");
        cc.director.loadScene("Lose");//游戏结束场景跳转
    }
   
}
