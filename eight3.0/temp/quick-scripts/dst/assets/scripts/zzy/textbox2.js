
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/textbox2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc4d84DqftO7qP5QakMlbGG', 'textbox2');
// scripts/Scripts/textbox2.ts

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var message_1 = require("./message");
var jump_button_1 = require("./jump_button");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Message = /** @class */ (function () {
    function Message(content) {
        this.content = content;
    }
    return Message;
}());
var textbox2 = /** @class */ (function (_super) {
    __extends(textbox2, _super);
    function textbox2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Mscontrol = null;
        _this.jump_button_control = null;
        //消息数组
        _this.msgs = null;
        _this.index = 0;
        return _this;
    }
    textbox2.prototype.start = function () {
        var _this = this;
        //初始化数组
        this.msgs = [
            new Message("这间教室的门好像打不开，看看其它地方吧")
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
            if (_this.jump_button_control.node.active == false) {
                _this.jump_button_control.node.active = true;
            }
        });
    };
    textbox2.prototype.update = function (dt) {
    };
    __decorate([
        property(message_1.default)
    ], textbox2.prototype, "Mscontrol", void 0);
    __decorate([
        property(jump_button_1.default)
    ], textbox2.prototype, "jump_button_control", void 0);
    textbox2 = __decorate([
        ccclass
    ], textbox2);
    return textbox2;
}(cc.Component));
exports.default = textbox2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcdGV4dGJveDIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEYscUNBQWdDO0FBQ2hDLDZDQUF3QztBQUNsQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUdLLGlCQUFZLE9BQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNOLGNBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMENDO1FBdkNHLGVBQVMsR0FBUyxJQUFJLENBQUM7UUFHdkIseUJBQW1CLEdBQWEsSUFBSSxDQUFDO1FBRXJDLE1BQU07UUFDTixVQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLFdBQUssR0FBUSxDQUFDLENBQUM7O0lBZ0NuQixDQUFDO0lBOUJHLHdCQUFLLEdBQUw7UUFBQSxpQkEwQkM7UUF6QkcsT0FBTztRQUNULElBQUksQ0FBQyxJQUFJLEdBQUM7WUFDSixJQUFJLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztTQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLFVBQUMsS0FBSztZQUM3QyxJQUFHLEtBQUksQ0FBQyxLQUFLLElBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQzdCLGNBQWM7Z0JBQ2QsSUFBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUUsS0FBSyxFQUFDO29CQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNyQztnQkFDRCxLQUFLO2dCQUNMLElBQUksR0FBRyxHQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixJQUFJLE9BQUssR0FBUSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksUUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dDQUMzQixDQUFDO29CQUNMLFVBQVUsQ0FBQzt3QkFDUCxPQUFLLElBQUksUUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFLLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxFQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUpkLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7NEJBQWxDLENBQUM7aUJBS1I7YUFDSDtZQUFBLElBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLElBQUUsS0FBSyxFQUFDO2dCQUM3QyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDNUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsaUJBQU8sQ0FBQzsrQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxxQkFBVyxDQUFDO3lEQUNlO0lBTnBCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwQzVCO0lBQUQsZUFBQztDQTFDRCxBQTBDQyxDQTFDcUMsRUFBRSxDQUFDLFNBQVMsR0EwQ2pEO2tCQTFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5pbXBvcnQganVtcF9idXR0b24gZnJvbSBcIi4vanVtcF9idXR0b25cIjtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jbGFzcyBNZXNzYWdle1xyXG4gICAgIGNvbnRlbnQ6c3RyaW5nO1xyXG5cclxuICAgICBjb25zdHJ1Y3Rvcihjb250ZW50OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5jb250ZW50PWNvbnRlbnQ7XHJcbiAgICAgfVxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXh0Ym94MiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShtZXNzYWdlKVxyXG4gICAgTXNjb250cm9sOm1lc3NhZ2U9bnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoanVtcF9idXR0b24pXHJcbiAgICBqdW1wX2J1dHRvbl9jb250cm9sOmp1bXBfYnV0dG9uPW51bGw7XHJcbiAgICBcclxuICAgIC8v5raI5oGv5pWw57uEXHJcbiAgICBtc2dzOk1lc3NhZ2VbXT1udWxsO1xyXG4gICAgaW5kZXg6bnVtYmVyPTA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5pWw57uEXHJcbiAgICAgIHRoaXMubXNncz1bXHJcbiAgICAgICAgICAgIG5ldyBNZXNzYWdlKFwi6L+Z6Ze05pWZ5a6k55qE6Zeo5aW95YOP5omT5LiN5byA77yM55yL55yL5YW25a6D5Zyw5pa55ZCnXCIpIF07XHJcbiAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLChldmVudCk9PntcclxuICAgICAgICAgaWYodGhpcy5pbmRleDw9dGhpcy5tc2dzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a+56K+d6Z2i5p2/5rKh5pi+56S677yM5pi+56S6XHJcbiAgICAgICAgICAgIGlmKHRoaXMuTXNjb250cm9sLm5vZGUuYWN0aXZlPT1mYWxzZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1zY29udHJvbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/or7vmtojmga9cclxuICAgICAgICAgICAgbGV0IG1lcz10aGlzLm1zZ3NbdGhpcy5pbmRleCsrXTtcclxuICAgICAgICAgICAgLy/mmL7npLrmtojmga9cclxuICAgICAgICAgICAgLy/mmL7npLrmtojmga9cclxuICAgICAgICAgICAgbGV0IHdvcmxkOnN0cmluZz1cIlwiO1xyXG4gICAgICAgICAgICBsZXQgbGV0dGVyID0gbWVzLmNvbnRlbnQuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtZXMuY29udGVudC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQgKz0gbGV0dGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTXNjb250cm9sLnNldE1lc3NhZ2Uod29ybGQpO1xyXG4gICAgICAgICAgICAgICAgfSw2MCooaSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1pZih0aGlzLmp1bXBfYnV0dG9uX2NvbnRyb2wubm9kZS5hY3RpdmU9PWZhbHNlKXtcclxuICAgICAgICAgICAgdGhpcy5qdW1wX2J1dHRvbl9jb250cm9sLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgIH1cclxufSJdfQ==