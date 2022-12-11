
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/textbox5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '598d4RPa2dOnJVjBoF+B7IC', 'textbox5');
// scripts/Scripts/textbox5.ts

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
var jump_lingjian_1 = require("./jump_lingjian");
var message_1 = require("./message");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Message = /** @class */ (function () {
    function Message(content) {
        this.content = content;
    }
    return Message;
}());
var textbox5 = /** @class */ (function (_super) {
    __extends(textbox5, _super);
    function textbox5() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Mscontrol = null;
        _this.jump_lingjian_control = null;
        //消息数组
        _this.msgs = null;
        _this.index = 0;
        return _this;
    }
    textbox5.prototype.start = function () {
        var _this = this;
        //初始化数组
        this.msgs = [
            new Message("保险丝烧焦断裂，无法复原,保险箱上好像有一个零件"),
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
            if (_this.jump_lingjian_control.node.active == false) {
                _this.jump_lingjian_control.node.active = true;
            }
        });
    };
    textbox5.prototype.update = function (dt) {
    };
    __decorate([
        property(message_1.default)
    ], textbox5.prototype, "Mscontrol", void 0);
    __decorate([
        property(jump_lingjian_1.default)
    ], textbox5.prototype, "jump_lingjian_control", void 0);
    textbox5 = __decorate([
        ccclass
    ], textbox5);
    return textbox5;
}(cc.Component));
exports.default = textbox5;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcdGV4dGJveDUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEYsaURBQTRDO0FBQzVDLHFDQUFnQztBQUMxQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUdLLGlCQUFZLE9BQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNOLGNBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNENJO1FBekNBLGVBQVMsR0FBUyxJQUFJLENBQUM7UUFHdkIsMkJBQXFCLEdBQWUsSUFBSSxDQUFDO1FBRXpDLE1BQU07UUFDTixVQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLFdBQUssR0FBUSxDQUFDLENBQUM7O0lBa0NoQixDQUFDO0lBaENBLHdCQUFLLEdBQUw7UUFBQSxpQkE0QkM7UUEzQkcsT0FBTztRQUNULElBQUksQ0FBQyxJQUFJLEdBQUM7WUFDSixJQUFJLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztTQUN2QyxDQUFDO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLFVBQUMsS0FBSztZQUM3QyxJQUFHLEtBQUksQ0FBQyxLQUFLLElBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQzdCLGNBQWM7Z0JBQ2QsSUFBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUUsS0FBSyxFQUFDO29CQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNyQztnQkFDRCxLQUFLO2dCQUNMLElBQUksR0FBRyxHQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07Z0JBQ1AsTUFBTTtnQkFDTixJQUFJLE9BQUssR0FBUSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksUUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dDQUMzQixDQUFDO29CQUNMLFVBQVUsQ0FBQzt3QkFDUCxPQUFLLElBQUksUUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFLLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxFQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUpkLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7NEJBQWxDLENBQUM7aUJBS1I7YUFDRDtZQUFBLElBQUcsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLElBQUUsS0FBSyxFQUFDO2dCQUNoRCxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDOUM7UUFFTixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUF4Q0Q7UUFEQyxRQUFRLENBQUMsaUJBQU8sQ0FBQzsrQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyx1QkFBYSxDQUFDOzJEQUNpQjtJQU54QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNEN6QjtJQUFELGVBQUM7Q0E1Q0osQUE0Q0ksQ0E1Q2tDLEVBQUUsQ0FBQyxTQUFTLEdBNEM5QztrQkE1Q2lCLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCBqdW1wX2xpbmdqaWFuIGZyb20gXCIuL2p1bXBfbGluZ2ppYW5cIjtcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNsYXNzIE1lc3NhZ2V7XHJcbiAgICAgY29udGVudDpzdHJpbmc7XHJcblxyXG4gICAgIGNvbnN0cnVjdG9yKGNvbnRlbnQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQ9Y29udGVudDtcclxuICAgICB9XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRleHRib3g1IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KG1lc3NhZ2UpXHJcbiAgICBNc2NvbnRyb2w6bWVzc2FnZT1udWxsO1xyXG4gIFxyXG4gICAgQHByb3BlcnR5KGp1bXBfbGluZ2ppYW4pXHJcbiAgICBqdW1wX2xpbmdqaWFuX2NvbnRyb2w6anVtcF9saW5namlhbj1udWxsO1xyXG5cclxuICAgIC8v5raI5oGv5pWw57uEXHJcbiAgICBtc2dzOk1lc3NhZ2VbXT1udWxsO1xyXG4gICAgaW5kZXg6bnVtYmVyPTA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5pWw57uEXHJcbiAgICAgIHRoaXMubXNncz1bXHJcbiAgICAgICAgICAgIG5ldyBNZXNzYWdlKFwi5L+d6Zmp5Lid54On54Sm5pat6KOC77yM5peg5rOV5aSN5Y6fLOS/nemZqeeuseS4iuWlveWDj+acieS4gOS4qumbtuS7tlwiKSxcclxuICAgICAgICAgICBdO1xyXG4gICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwoZXZlbnQpPT57XHJcbiAgICAgICAgIGlmKHRoaXMuaW5kZXg8PXRoaXMubXNncy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAvL+WmguaenOWvueivnemdouadv+ayoeaYvuekuu+8jOaYvuekulxyXG4gICAgICAgICAgICBpZih0aGlzLk1zY29udHJvbC5ub2RlLmFjdGl2ZT09ZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Nc2NvbnRyb2wubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6K+75raI5oGvXHJcbiAgICAgICAgICAgIGxldCBtZXM9dGhpcy5tc2dzW3RoaXMuaW5kZXgrK107XHJcbiAgICAgICAgICAgIC8v5pi+56S65raI5oGvXHJcbiAgICAgICAgICAgLy/mmL7npLrmtojmga9cclxuICAgICAgICAgICBsZXQgd29ybGQ6c3RyaW5nPVwiXCI7XHJcbiAgICAgICAgICAgbGV0IGxldHRlciA9IG1lcy5jb250ZW50LnNwbGl0KFwiXCIpO1xyXG4gICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtZXMuY29udGVudC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgIHdvcmxkICs9IGxldHRlcltpXTtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMuTXNjb250cm9sLnNldE1lc3NhZ2Uod29ybGQpO1xyXG4gICAgICAgICAgICAgICB9LDYwKihpKSk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgfWlmKHRoaXMuanVtcF9saW5namlhbl9jb250cm9sLm5vZGUuYWN0aXZlPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcF9saW5namlhbl9jb250cm9sLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgIH1cclxuICAgfSJdfQ==