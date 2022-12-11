"use strict";
cc._RF.push(module, 'af2feGEwdFA1LEogFZe9Ai1', 'MainController');
// scripts/lsm/MainController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.box = null; //预制体 箱子
        _this.xiangji = null; //相机
        _this.boxParent = null; //箱子的父节点
        _this.box_self = null; //最开始的箱子自身
        _this.score_lb = null; //分数
        _this.lb_score = null; //分数
        _this.isok = true; //是否可以生成新的箱子
        _this.score = 0.5; //分数
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.xiangji.on(cc.Node.EventType.TOUCH_START, this.down, this); //给相机在触摸的时候添加点击事件
        this.xiangji.width = this.node.width; //相机的宽和高和屏幕的宽和高一样
        this.xiangji.height = this.node.height;
    };
    NewClass.prototype.update = function (dt) {
        this.score_lb.string = "高度:" + this.score.toString() + "米"; //每秒获取最新分数
        this.lb_score.y = this.xiangji.y + (this.xiangji.height / 2) - this.lb_score.height - 10; //介绍和分数的最佳位置
        //this.jieshao.y = this.xiangji.y-(this.xiangji.height/2)+this.jieshao.height+10;
        if (this.score == 2.5) { //如果高度达到
            console.log("成功！");
            this.win();
        }
    };
    NewClass.prototype.win = function () {
        console.log("通过游戏");
        this.scheduleOnce(function () {
            cc.director.loadScene("Win");
        }, 0.8);
        //游戏通关场景跳转
    };
    NewClass.prototype.down = function () {
        if (this.isok == true) {
            var box = this.boxParent.children[this.boxParent.childrenCount - 1].getComponent("Box"); //获取box组件
            box.isdown = true; //箱子开始下降
            box.move.stop("move"); //停止播放移动动画
            console.log("点击了相机");
            this.scheduleOnce(function () {
                this.shengcheng();
            }, 0.5); //为了防止箱子堆到一块，在0.5秒后生成新的箱子
            this.score += 0.5; //随机加分数
            this.isok = false;
            this.scheduleOnce(function () {
                this.isok = true;
            }, 0.5); //0.5秒后才可以继续生成新箱子
        }
    };
    NewClass.prototype.shengcheng = function () {
        var node = cc.instantiate(this.box); //你要复制的节点名称
        node.parent = this.boxParent; //复制节点的父节点是什么
        node.setPosition(cc.v2(0, (this.xiangji.y + this.xiangji.height / 2) - this.box_self.height - 50)); //复制的节点的位置
        var pos = [];
        pos.push(cc.v2(this.xiangji.position));
        pos.push(cc.v2(0, this.xiangji.y + this.box_self.height));
        console.log("生成了新的箱子");
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "box", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "xiangji", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boxParent", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "box_self", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "score_lb", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lb_score", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();