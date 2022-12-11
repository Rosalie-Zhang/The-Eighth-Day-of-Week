
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/Rigid body.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2401dwqo75F8puDWg3VdWKO', 'Rigid body');
// scripts/lsm/Rigid body.ts

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
var demo2 = /** @class */ (function (_super) {
    __extends(demo2, _super);
    function demo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    demo2.prototype.onLoad = function () {
        //绘制调试信息
        cc.director.getPhysicsManager().enabled = true;
        //16 = cc.PhysicsManager.e_centerOfMassBit
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit | 16 | cc.PhysicsManager.DrawBits.e_jointBit;
        //重力
        cc.director.getPhysicsManager().gravity = cc.v2(0, -320);
        // 开启物理步长的设置
        var manager = cc.director.getPhysicsManager();
        manager.enabledAccumulator = true;
        // 物理步长，默认 FIXED_TIME_STEP 是 1/60
        cc.PhysicsManager.FIXED_TIME_STEP = 1 / 30;
        // 每次更新物理系统处理速度的迭代次数，默认为 10
        cc.PhysicsManager.VELOCITY_ITERATIONS = 8;
        // 每次更新物理系统处理位置的迭代次数，默认为 10
        cc.PhysicsManager.POSITION_ITERATIONS = 8;
    };
    demo2 = __decorate([
        ccclass
    ], demo2);
    return demo2;
}(cc.Component));
exports.default = demo2;
// update (dt) {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxSaWdpZCBib2R5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DOztJQXFCQSxDQUFDO0lBbkJHLHNCQUFNLEdBQU47UUFDSyxRQUFRO1FBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsMENBQTBDO1FBQzFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFFckksSUFBSTtRQUNKLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2RCxZQUFZO1FBQ2IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDbEMsaUNBQWlDO1FBQ2pDLEVBQUUsQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUM7UUFDekMsMkJBQTJCO1FBQzNCLEVBQUUsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLDJCQUEyQjtRQUMzQixFQUFFLENBQUMsY0FBYyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBcEJnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBcUJ6QjtJQUFELFlBQUM7Q0FyQkQsQUFxQkMsQ0FyQmtDLEVBQUUsQ0FBQyxTQUFTLEdBcUI5QztrQkFyQm9CLEtBQUs7QUF1QnRCLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG4gXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRlbW8yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuIFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgIC8v57uY5Yi26LCD6K+V5L+h5oGvXHJcbiAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgIC8vMTYgPSBjYy5QaHlzaWNzTWFuYWdlci5lX2NlbnRlck9mTWFzc0JpdFxyXG4gICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdCB8IDE2IHwgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9qb2ludEJpdDtcclxuIFxyXG4gICAgICAgIC8v6YeN5YqbXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwtMzIwKTtcclxuIFxyXG4gICAgICAgICAvLyDlvIDlkK/niannkIbmraXplb/nmoTorr7nva5cclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkQWNjdW11bGF0b3IgPSB0cnVlO1xyXG4gICAgICAgIC8vIOeJqeeQhuatpemVv++8jOm7mOiupCBGSVhFRF9USU1FX1NURVAg5pivIDEvNjBcclxuICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5GSVhFRF9USU1FX1NURVAgPSAxLzMwO1xyXG4gICAgICAgIC8vIOavj+asoeabtOaWsOeJqeeQhuezu+e7n+WkhOeQhumAn+W6pueahOi/reS7o+asoeaVsO+8jOm7mOiupOS4uiAxMFxyXG4gICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLlZFTE9DSVRZX0lURVJBVElPTlMgPSA4O1xyXG4gICAgICAgIC8vIOavj+asoeabtOaWsOeJqeeQhuezu+e7n+WkhOeQhuS9jee9rueahOi/reS7o+asoeaVsO+8jOm7mOiupOS4uiAxMFxyXG4gICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLlBPU0lUSU9OX0lURVJBVElPTlMgPSA4OyAgXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuIl19