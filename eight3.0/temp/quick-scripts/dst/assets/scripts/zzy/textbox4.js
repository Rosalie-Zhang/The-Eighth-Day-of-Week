
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/textbox4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a033dpXRJlM2KVBQjNSc452', 'textbox4');
// scripts/Scripts/textbox4.ts

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
var textbox4 = /** @class */ (function (_super) {
    __extends(textbox4, _super);
    function textbox4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Mscontrol = null;
        _this.jump_button_control = null;
        //消息数组
        _this.msgs = null;
        _this.index = 0;
        return _this;
    }
    textbox4.prototype.start = function () {
        var _this = this;
        //初始化数组
        this.msgs = [
            new Message("走廊的门被锁住了，无法开启")
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
    textbox4.prototype.update = function (dt) {
    };
    __decorate([
        property(message_1.default)
    ], textbox4.prototype, "Mscontrol", void 0);
    __decorate([
        property(jump_button_1.default)
    ], textbox4.prototype, "jump_button_control", void 0);
    textbox4 = __decorate([
        ccclass
    ], textbox4);
    return textbox4;
}(cc.Component));
exports.default = textbox4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcdGV4dGJveDQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEYscUNBQWdDO0FBQ2hDLDZDQUF3QztBQUNsQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUdLLGlCQUFZLE9BQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNOLGNBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMENDO1FBdkNHLGVBQVMsR0FBUyxJQUFJLENBQUM7UUFHdkIseUJBQW1CLEdBQWEsSUFBSSxDQUFDO1FBRXJDLE1BQU07UUFDTixVQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLFdBQUssR0FBUSxDQUFDLENBQUM7O0lBZ0NuQixDQUFDO0lBOUJHLHdCQUFLLEdBQUw7UUFBQSxpQkEwQkM7UUF6QkcsT0FBTztRQUNULElBQUksQ0FBQyxJQUFJLEdBQUM7WUFDSixJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUM7U0FBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxVQUFDLEtBQUs7WUFDN0MsSUFBRyxLQUFJLENBQUMsS0FBSyxJQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUM3QixjQUFjO2dCQUNkLElBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLEtBQUssRUFBQztvQkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDckM7Z0JBQ0QsS0FBSztnQkFDTCxJQUFJLEdBQUcsR0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO2dCQUNOLE1BQU07Z0JBQ04sSUFBSSxPQUFLLEdBQVEsRUFBRSxDQUFDO2dCQUNwQixJQUFJLFFBQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzt3Q0FDM0IsQ0FBQztvQkFDTCxVQUFVLENBQUM7d0JBQ1AsT0FBSyxJQUFJLFFBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBSyxDQUFDLENBQUM7b0JBQ3JDLENBQUMsRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFKZCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFOzRCQUFsQyxDQUFDO2lCQUtSO2FBQ0g7WUFBQSxJQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLEtBQUssRUFBQztnQkFDN0MsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQzVDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLGlCQUFPLENBQUM7K0NBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMscUJBQVcsQ0FBQzt5REFDZTtJQU5wQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEM1QjtJQUFELGVBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMENqRDtrQkExQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCBtZXNzYWdlIGZyb20gXCIuL21lc3NhZ2VcIjtcclxuaW1wb3J0IGp1bXBfYnV0dG9uIGZyb20gXCIuL2p1bXBfYnV0dG9uXCI7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuY2xhc3MgTWVzc2FnZXtcclxuICAgICBjb250ZW50OnN0cmluZztcclxuXHJcbiAgICAgY29uc3RydWN0b3IoY29udGVudDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY29udGVudD1jb250ZW50O1xyXG4gICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGV4dGJveDQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkobWVzc2FnZSlcclxuICAgIE1zY29udHJvbDptZXNzYWdlPW51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGp1bXBfYnV0dG9uKVxyXG4gICAganVtcF9idXR0b25fY29udHJvbDpqdW1wX2J1dHRvbj1udWxsO1xyXG4gICAgXHJcbiAgICAvL+a2iOaBr+aVsOe7hFxyXG4gICAgbXNnczpNZXNzYWdlW109bnVsbDtcclxuICAgIGluZGV4Om51bWJlcj0wO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+WIneWni+WMluaVsOe7hFxyXG4gICAgICB0aGlzLm1zZ3M9W1xyXG4gICAgICAgICAgICBuZXcgTWVzc2FnZShcIui1sOW7iueahOmXqOiiq+mUgeS9j+S6hu+8jOaXoOazleW8gOWQr1wiKSBdO1xyXG4gICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwoZXZlbnQpPT57XHJcbiAgICAgICAgIGlmKHRoaXMuaW5kZXg8PXRoaXMubXNncy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAvL+WmguaenOWvueivnemdouadv+ayoeaYvuekuu+8jOaYvuekulxyXG4gICAgICAgICAgICBpZih0aGlzLk1zY29udHJvbC5ub2RlLmFjdGl2ZT09ZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Nc2NvbnRyb2wubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6K+75raI5oGvXHJcbiAgICAgICAgICAgIGxldCBtZXM9dGhpcy5tc2dzW3RoaXMuaW5kZXgrK107XHJcbiAgICAgICAgICAgIC8v5pi+56S65raI5oGvXHJcbiAgICAgICAgICAgIC8v5pi+56S65raI5oGvXHJcbiAgICAgICAgICAgIGxldCB3b3JsZDpzdHJpbmc9XCJcIjtcclxuICAgICAgICAgICAgbGV0IGxldHRlciA9IG1lcy5jb250ZW50LnNwbGl0KFwiXCIpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWVzLmNvbnRlbnQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkICs9IGxldHRlcltpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk1zY29udHJvbC5zZXRNZXNzYWdlKHdvcmxkKTtcclxuICAgICAgICAgICAgICAgIH0sNjAqKGkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9aWYodGhpcy5qdW1wX2J1dHRvbl9jb250cm9sLm5vZGUuYWN0aXZlPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcF9idXR0b25fY29udHJvbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICB9XHJcbn0iXX0=