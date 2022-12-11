
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/canoon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d895j4FX5JMZY35Em4VIW0', 'canoon');
// scripts/Scripts/canoon.ts

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
var jump_choice_1 = require("./jump_choice");
var message_1 = require("./message");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Message = /** @class */ (function () {
    function Message(content) {
        this.content = content;
    }
    return Message;
}());
var canoon = /** @class */ (function (_super) {
    __extends(canoon, _super);
    function canoon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Mscontrol = null;
        _this.jump_choice_control = null;
        //消息数组
        _this.msgs = null;
        _this.index = 0;
        return _this;
    }
    canoon.prototype.start = function () {
        var _this = this;
        //初始化数组
        this.msgs = [
            new Message("突然，手机开始震动，震动的声响在寂静的走廊里格外刺耳")
        ];
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            if (_this.index <= _this.msgs.length) {
                //如果对话面板没显示，显示
                if (_this.Mscontrol.node.active == false) {
                    _this.Mscontrol.node.active = true;
                }
                //读消息
                var mes = _this.msgs[_this.index++];
                //显示消息
                //显示消息
                var world_1 = "";
                var letter_1 = mes.content.split("");
                var _loop_1 = function (i) {
                    setTimeout(function () {
                        world_1 += letter_1[i];
                        _this.Mscontrol.setMessage(world_1);
                    }, 60 * (i));
                };
                for (var i = 0; i < mes.content.length; i++) {
                    _loop_1(i);
                }
            }
            if (_this.jump_choice_control.node.active == false) {
                _this.jump_choice_control.node.active = true;
            }
        });
    };
    canoon.prototype.update = function (dt) {
    };
    __decorate([
        property(message_1.default)
    ], canoon.prototype, "Mscontrol", void 0);
    __decorate([
        property(jump_choice_1.default)
    ], canoon.prototype, "jump_choice_control", void 0);
    canoon = __decorate([
        ccclass
    ], canoon);
    return canoon;
}(cc.Component));
exports.default = canoon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcY2Fub29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDZDQUF3QztBQUN4QyxxQ0FBZ0M7QUFDMUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFHSyxpQkFBWSxPQUFjO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTixjQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFHRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTBDQztRQXZDRyxlQUFTLEdBQVMsSUFBSSxDQUFDO1FBR3ZCLHlCQUFtQixHQUFhLElBQUksQ0FBQztRQUVyQyxNQUFNO1FBQ04sVUFBSSxHQUFXLElBQUksQ0FBQztRQUNwQixXQUFLLEdBQVEsQ0FBQyxDQUFDOztJQWdDbkIsQ0FBQztJQTlCRyxzQkFBSyxHQUFMO1FBQUEsaUJBMEJDO1FBekJHLE9BQU87UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFDO1lBQ0osSUFBSSxPQUFPLENBQUMsNEJBQTRCLENBQUM7U0FBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxVQUFDLEtBQUs7WUFDN0MsSUFBRyxLQUFJLENBQUMsS0FBSyxJQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUM3QixjQUFjO2dCQUNkLElBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLEtBQUssRUFBQztvQkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDckM7Z0JBQ0QsS0FBSztnQkFDTCxJQUFJLEdBQUcsR0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO2dCQUNQLE1BQU07Z0JBQ04sSUFBSSxPQUFLLEdBQVEsRUFBRSxDQUFDO2dCQUNwQixJQUFJLFFBQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzt3Q0FDM0IsQ0FBQztvQkFDTCxVQUFVLENBQUM7d0JBQ1AsT0FBSyxJQUFJLFFBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBSyxDQUFDLENBQUM7b0JBQ3JDLENBQUMsRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFKZCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFOzRCQUFsQyxDQUFDO2lCQUtSO2FBQ0Y7WUFBQyxJQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLEtBQUssRUFBQztnQkFDOUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQzVDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsdUJBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLGlCQUFPLENBQUM7NkNBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMscUJBQVcsQ0FBQzt1REFDZTtJQU5wQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMEMxQjtJQUFELGFBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ21DLEVBQUUsQ0FBQyxTQUFTLEdBMEMvQztrQkExQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQganVtcF9jaG9pY2UgZnJvbSBcIi4vanVtcF9jaG9pY2VcIjtcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNsYXNzIE1lc3NhZ2V7XHJcbiAgICAgY29udGVudDpzdHJpbmc7XHJcblxyXG4gICAgIGNvbnN0cnVjdG9yKGNvbnRlbnQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQ9Y29udGVudDtcclxuICAgICB9XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhbm9vbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShtZXNzYWdlKVxyXG4gICAgTXNjb250cm9sOm1lc3NhZ2U9bnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoanVtcF9jaG9pY2UpXHJcbiAgICBqdW1wX2Nob2ljZV9jb250cm9sOmp1bXBfY2hvaWNlPW51bGw7XHJcbiAgICBcclxuICAgIC8v5raI5oGv5pWw57uEXHJcbiAgICBtc2dzOk1lc3NhZ2VbXT1udWxsO1xyXG4gICAgaW5kZXg6bnVtYmVyPTA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5pWw57uEXHJcbiAgICAgIHRoaXMubXNncz1bXHJcbiAgICAgICAgICAgIG5ldyBNZXNzYWdlKFwi56qB54S277yM5omL5py65byA5aeL6ZyH5Yqo77yM6ZyH5Yqo55qE5aOw5ZON5Zyo5a+C6Z2Z55qE6LWw5buK6YeM5qC85aSW5Yi66ICzXCIpIF07XHJcbiAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLChldmVudCk9PntcclxuICAgICAgICAgaWYodGhpcy5pbmRleDw9dGhpcy5tc2dzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a+56K+d6Z2i5p2/5rKh5pi+56S677yM5pi+56S6XHJcbiAgICAgICAgICAgIGlmKHRoaXMuTXNjb250cm9sLm5vZGUuYWN0aXZlPT1mYWxzZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1zY29udHJvbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/or7vmtojmga9cclxuICAgICAgICAgICAgbGV0IG1lcz10aGlzLm1zZ3NbdGhpcy5pbmRleCsrXTtcclxuICAgICAgICAgICAgLy/mmL7npLrmtojmga9cclxuICAgICAgICAgICAvL+aYvuekuua2iOaBr1xyXG4gICAgICAgICAgIGxldCB3b3JsZDpzdHJpbmc9XCJcIjtcclxuICAgICAgICAgICBsZXQgbGV0dGVyID0gbWVzLmNvbnRlbnQuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1lcy5jb250ZW50Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgd29ybGQgKz0gbGV0dGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5Nc2NvbnRyb2wuc2V0TWVzc2FnZSh3b3JsZCk7XHJcbiAgICAgICAgICAgICAgIH0sNjAqKGkpKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH0gaWYodGhpcy5qdW1wX2Nob2ljZV9jb250cm9sLm5vZGUuYWN0aXZlPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcF9jaG9pY2VfY29udHJvbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICB9XHJcbn0iXX0=