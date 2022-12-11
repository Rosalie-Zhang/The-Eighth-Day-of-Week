"use strict";
cc._RF.push(module, '4b82eQHP+9P5Yl3ILyejqrm', 'CollisionCallback');
// scripts/lsm/CollisionCallback.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var conscious = require("globalVariable");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveSound = null;
        _this.soundPlay = true;
        return _this;
    }
    NewClass.prototype.onCollisionEnter = function (other, self) {
        console.log('onCollisionEnter');
        if (other.node.name == "box") { //如果碰撞的节点是box游戏就结束
            cc.audioEngine.playEffect(this.moveSound, false);
            conscious.consciousNumber -= 1;
            this.GameOver();
        }
    };
    NewClass.prototype.GameOver = function () {
        console.log("游戏结束了");
        cc.director.loadScene("Lose"); //游戏结束场景跳转
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "moveSound", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();