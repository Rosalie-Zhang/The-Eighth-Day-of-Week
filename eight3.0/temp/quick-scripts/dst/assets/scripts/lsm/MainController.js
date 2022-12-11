
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/MainController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxNYWluQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlGQztRQTlFRyxTQUFHLEdBQWEsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUc3QixhQUFPLEdBQVcsSUFBSSxDQUFDLENBQUEsSUFBSTtRQUczQixlQUFTLEdBQVcsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUdqQyxjQUFRLEdBQVcsSUFBSSxDQUFDLENBQUEsVUFBVTtRQUdsQyxjQUFRLEdBQVksSUFBSSxDQUFDLENBQUEsSUFBSTtRQUc3QixjQUFRLEdBQVcsSUFBSSxDQUFDLENBQUEsSUFBSTtRQUU1QixVQUFJLEdBQVcsSUFBSSxDQUFDLENBQUEsWUFBWTtRQUVoQyxXQUFLLEdBQVUsR0FBRyxDQUFDLENBQUEsSUFBSTs7SUEyRDNCLENBQUM7SUF6REcseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsaUJBQWlCO1FBQy9FLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsaUJBQWlCO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNDLENB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QUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUl2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUE1RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDQztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFsQlAsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlGNUI7SUFBRCxlQUFDO0NBakZELEFBaUZDLENBakZxQyxFQUFFLENBQUMsU0FBUyxHQWlGakQ7a0JBakZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJveDpjYy5QcmVmYWIgPSBudWxsOy8v6aKE5Yi25L2TIOeuseWtkFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgeGlhbmdqaTpjYy5Ob2RlID0gbnVsbDsvL+ebuOaculxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94UGFyZW50OmNjLk5vZGUgPSBudWxsOy8v566x5a2Q55qE54i26IqC54K5XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib3hfc2VsZjpjYy5Ob2RlID0gbnVsbDsvL+acgOW8gOWni+eahOeuseWtkOiHqui6q1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlX2xiOmNjLkxhYmVsID0gbnVsbDsvL+WIhuaVsFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGJfc2NvcmU6Y2MuTm9kZSA9IG51bGw7Ly/liIbmlbBcclxuXHJcbiAgICBpc29rOmJvb2xlYW4gPSB0cnVlOy8v5piv5ZCm5Y+v5Lul55Sf5oiQ5paw55qE566x5a2QXHJcblxyXG4gICAgc2NvcmU6bnVtYmVyID0gMC41Oy8v5YiG5pWwXHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy54aWFuZ2ppLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMuZG93bix0aGlzKTsvL+e7meebuOacuuWcqOinpuaRuOeahOaXtuWAmea3u+WKoOeCueWHu+S6i+S7tlxyXG4gICAgICAgIHRoaXMueGlhbmdqaS53aWR0aCA9IHRoaXMubm9kZS53aWR0aDsvL+ebuOacuueahOWuveWSjOmrmOWSjOWxj+W5leeahOWuveWSjOmrmOS4gOagt1xyXG4gICAgICAgIHRoaXMueGlhbmdqaS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuc2NvcmVfbGIuc3RyaW5nID0gXCLpq5jluqY6XCIgKyB0aGlzLnNjb3JlLnRvU3RyaW5nKCkgKyBcIuexs1wiOy8v5q+P56eS6I635Y+W5pyA5paw5YiG5pWwXHJcbiAgICAgICAgdGhpcy5sYl9zY29yZS55ID0gdGhpcy54aWFuZ2ppLnkrKHRoaXMueGlhbmdqaS5oZWlnaHQvMiktdGhpcy5sYl9zY29yZS5oZWlnaHQtMTA7Ly/ku4vnu43lkozliIbmlbDnmoTmnIDkvbPkvY3nva5cclxuICAgICAgICAvL3RoaXMuamllc2hhby55ID0gdGhpcy54aWFuZ2ppLnktKHRoaXMueGlhbmdqaS5oZWlnaHQvMikrdGhpcy5qaWVzaGFvLmhlaWdodCsxMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5zY29yZSA9PSAyLjUpey8v5aaC5p6c6auY5bqm6L6+5YiwXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkOWKn++8gVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy53aW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHdpbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumAmui/h+a4uOaIj1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJXaW5cIik7XHJcbiAgICAgICAgICAgIH0sMC44KTtcclxuICAgICAgICAgICAgLy/muLjmiI/pgJrlhbPlnLrmma/ot7PovaxcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICBkb3duKCl7Ly/nrrHlrZDkuIvpmY1cclxuICAgICAgICBpZih0aGlzLmlzb2sgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLmJveFBhcmVudC5jaGlsZHJlblt0aGlzLmJveFBhcmVudC5jaGlsZHJlbkNvdW50LTFdLmdldENvbXBvbmVudChcIkJveFwiKTsvL+iOt+WPlmJveOe7hOS7tlxyXG4gICAgICAgICAgICBib3guaXNkb3duID0gdHJ1ZTsvL+euseWtkOW8gOWni+S4i+mZjVxyXG4gICAgICAgICAgICBib3gubW92ZS5zdG9wKFwibW92ZVwiKTsvL+WBnOatouaSreaUvuenu+WKqOWKqOeUu1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+S6huebuOaculwiKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoZW5nY2hlbmcoKTtcclxuICAgICAgICAgICAgfSwwLjUpOy8v5Li65LqG6Ziy5q2i566x5a2Q5aCG5Yiw5LiA5Z2X77yM5ZyoMC4156eS5ZCO55Sf5oiQ5paw55qE566x5a2QXHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMC41Oy8v6ZqP5py65Yqg5YiG5pWwXHJcbiAgICAgICAgICAgIHRoaXMuaXNvayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNvayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sMC41KTsvLzAuNeenkuWQjuaJjeWPr+S7pee7p+e7reeUn+aIkOaWsOeuseWtkFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaGVuZ2NoZW5nKCl7Ly/nlJ/miJDmlrDnrrHlrZBcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm94KS8v5L2g6KaB5aSN5Yi255qE6IqC54K55ZCN56ewXHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJveFBhcmVudDsvL+WkjeWItuiKgueCueeahOeItuiKgueCueaYr+S7gOS5iFxyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwodGhpcy54aWFuZ2ppLnkrdGhpcy54aWFuZ2ppLmhlaWdodC8yKS10aGlzLmJveF9zZWxmLmhlaWdodC01MCkpOy8v5aSN5Yi255qE6IqC54K555qE5L2N572uXHJcblxyXG4gICAgICAgIGxldCBwb3MgOiBjYy5WZWMyW10gPSBbXTtcclxuICAgICAgICBwb3MucHVzaChjYy52Mih0aGlzLnhpYW5namkucG9zaXRpb24pKTtcclxuICAgICAgICBwb3MucHVzaChjYy52MigwLHRoaXMueGlhbmdqaS55K3RoaXMuYm94X3NlbGYuaGVpZ2h0KSk7XHJcblxyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi55Sf5oiQ5LqG5paw55qE566x5a2QXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19