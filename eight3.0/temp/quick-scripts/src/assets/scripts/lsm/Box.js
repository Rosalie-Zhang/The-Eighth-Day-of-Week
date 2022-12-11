"use strict";
cc._RF.push(module, 'ea81a0aVfNCnLHSfyLuV4bi', 'Box');
// scripts/lsm/Box.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.self = null; //自身刚体
        _this.self_box = null; //自身物理碰撞
        _this.self_collision = null; //自身碰撞
        _this.me = null; //自身
        _this.move = null; //箱子移动时的动画
        _this.isdown = false; //是否在向下降
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.self.type = cc.RigidBodyType.Static; //开始时刚体是静止的
        this.move.play("move"); //播放移动动画
    };
    NewClass.prototype.update = function () {
        if (this.isdown == true) { //如果箱子正在下降
            this.self.type = cc.RigidBodyType.Dynamic; //刚体变成动态的
        }
    };
    __decorate([
        property(cc.RigidBody)
    ], NewClass.prototype, "self", void 0);
    __decorate([
        property(cc.PhysicsBoxCollider)
    ], NewClass.prototype, "self_box", void 0);
    __decorate([
        property(cc.BoxCollider)
    ], NewClass.prototype, "self_collision", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "me", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "move", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();