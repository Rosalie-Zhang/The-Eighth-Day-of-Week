
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/CollisionCallback.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxDb2xsaXNpb25DYWxsYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUNuQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXFCQztRQWxCRyxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFDOztJQWdCckMsQ0FBQztJQWRDLG1DQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUMsSUFBSTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDL0IsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUMsRUFBQyxrQkFBa0I7WUFDM0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRCxTQUFTLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSxVQUFVO0lBQzVDLENBQUM7SUFoQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOytDQUNIO0lBSGIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFCNUI7SUFBRCxlQUFDO0NBckJELEFBcUJDLENBckJxQyxFQUFFLENBQUMsU0FBUyxHQXFCakQ7a0JBckJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5kZWNsYXJlIGNvbnN0IHJlcXVpcmUgOiBhbnlcclxudmFyIGNvbnNjaW91cyA9IHJlcXVpcmUoXCJnbG9iYWxWYXJpYWJsZVwiKVxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIG1vdmVTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbFxyXG4gICAgXHJcbiAgICBwdWJsaWMgc291bmRQbGF5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgb25Db2xsaXNpb25FbnRlcihvdGhlcixzZWxmKXsvL+W9k+eisOaSnuS6p+eUn+eahOaXtuWAmeiwg+eUqC8vb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2c2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uQ29sbGlzaW9uRW50ZXInKVxyXG4gICAgICAgIGlmKG90aGVyLm5vZGUubmFtZSA9PSBcImJveFwiKXsvL+WmguaenOeisOaSnueahOiKgueCueaYr2JveOa4uOaIj+Wwsee7k+adn1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubW92ZVNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIgLT0gMTtcclxuICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHYW1lT3Zlcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP57uT5p2f5LqGXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvc2VcIik7Ly/muLjmiI/nu5PmnZ/lnLrmma/ot7PovaxcclxuICAgIH1cclxuICAgXHJcbn1cclxuIl19