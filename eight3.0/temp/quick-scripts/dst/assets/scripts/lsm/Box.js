
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/Box.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4QkM7UUEzQkcsVUFBSSxHQUFnQixJQUFJLENBQUMsQ0FBQSxNQUFNO1FBRy9CLGNBQVEsR0FBeUIsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUc5QyxvQkFBYyxHQUFrQixJQUFJLENBQUMsQ0FBQSxNQUFNO1FBRzNDLFFBQUUsR0FBVyxJQUFJLENBQUMsQ0FBQSxJQUFJO1FBR3RCLFVBQUksR0FBZ0IsSUFBSSxDQUFDLENBQUEsVUFBVTtRQUVuQyxZQUFNLEdBQVcsS0FBSyxDQUFDLENBQUEsUUFBUTs7SUFhbkMsQ0FBQztJQVhHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBLFdBQVc7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSxRQUFRO0lBQ25DLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBQyxFQUFDLFVBQVU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxTQUFTO1NBQ3REO0lBQ0wsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNFO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzs4Q0FDTTtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNZO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0E7SUFHbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDRTtJQWZSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QjVCO0lBQUQsZUFBQztDQTlCRCxBQThCQyxDQTlCcUMsRUFBRSxDQUFDLFNBQVMsR0E4QmpEO2tCQTlCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXHJcbiAgICBzZWxmOmNjLlJpZ2lkQm9keSA9IG51bGw7Ly/oh6rouqvliJrkvZNcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUGh5c2ljc0JveENvbGxpZGVyKVxyXG4gICAgc2VsZl9ib3g6Y2MuUGh5c2ljc0JveENvbGxpZGVyID0gbnVsbDsvL+iHqui6q+eJqeeQhueisOaSnlxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Cb3hDb2xsaWRlcilcclxuICAgIHNlbGZfY29sbGlzaW9uOmNjLkJveENvbGxpZGVyID0gbnVsbDsvL+iHqui6q+eisOaSnlxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWU6Y2MuTm9kZSA9IG51bGw7Ly/oh6rouqtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgbW92ZTpjYy5BbmltYXRpb24gPSBudWxsOy8v566x5a2Q56e75Yqo5pe255qE5Yqo55S7XHJcblxyXG4gICAgaXNkb3duOmJvb2xlYW4gPSBmYWxzZTsvL+aYr+WQpuWcqOWQkeS4i+mZjVxyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMuc2VsZi50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7Ly/lvIDlp4vml7bliJrkvZPmmK/pnZnmraLnmoRcclxuICAgICAgICB0aGlzLm1vdmUucGxheShcIm1vdmVcIik7Ly/mkq3mlL7np7vliqjliqjnlLtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICBpZih0aGlzLmlzZG93biA9PSB0cnVlKXsvL+WmguaenOeuseWtkOato+WcqOS4i+mZjVxyXG4gICAgICAgICAgICB0aGlzLnNlbGYudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYzsvL+WImuS9k+WPmOaIkOWKqOaAgeeahFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19