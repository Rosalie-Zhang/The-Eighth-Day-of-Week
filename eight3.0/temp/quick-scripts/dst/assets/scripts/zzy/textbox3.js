
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/textbox3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6f2fHjjtlJ4LdHwU6inxoV', 'textbox3');
// scripts/Scripts/textbox3.ts

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
var textbox3 = /** @class */ (function (_super) {
    __extends(textbox3, _super);
    function textbox3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Mscontrol = null;
        _this.jump_button_control = null;
        //消息数组
        _this.msgs = null;
        _this.index = 0;
        return _this;
    }
    textbox3.prototype.start = function () {
        var _this = this;
        //初始化数组
        this.msgs = [
            new Message("电梯没有反应,看上去是停电了")
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
    textbox3.prototype.update = function (dt) {
    };
    __decorate([
        property(message_1.default)
    ], textbox3.prototype, "Mscontrol", void 0);
    __decorate([
        property(jump_button_1.default)
    ], textbox3.prototype, "jump_button_control", void 0);
    textbox3 = __decorate([
        ccclass
    ], textbox3);
    return textbox3;
}(cc.Component));
exports.default = textbox3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcdGV4dGJveDMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEYscUNBQWdDO0FBQ2hDLDZDQUF3QztBQUNsQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUdLLGlCQUFZLE9BQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNOLGNBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMENDO1FBdkNHLGVBQVMsR0FBUyxJQUFJLENBQUM7UUFHdkIseUJBQW1CLEdBQWEsSUFBSSxDQUFDO1FBRXJDLE1BQU07UUFDTixVQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLFdBQUssR0FBUSxDQUFDLENBQUM7O0lBZ0NuQixDQUFDO0lBOUJHLHdCQUFLLEdBQUw7UUFBQSxpQkEwQkM7UUF6QkcsT0FBTztRQUNULElBQUksQ0FBQyxJQUFJLEdBQUM7WUFDSixJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztTQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLFVBQUMsS0FBSztZQUM3QyxJQUFHLEtBQUksQ0FBQyxLQUFLLElBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQzdCLGNBQWM7Z0JBQ2QsSUFBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUUsS0FBSyxFQUFDO29CQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNyQztnQkFDRCxLQUFLO2dCQUNMLElBQUksR0FBRyxHQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixJQUFJLE9BQUssR0FBUSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksUUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dDQUMzQixDQUFDO29CQUNMLFVBQVUsQ0FBQzt3QkFDUCxPQUFLLElBQUksUUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFLLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxFQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUpkLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7NEJBQWxDLENBQUM7aUJBS1I7YUFDSDtZQUFBLElBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLElBQUUsS0FBSyxFQUFDO2dCQUM3QyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDNUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsaUJBQU8sQ0FBQzsrQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxxQkFBVyxDQUFDO3lEQUNlO0lBTnBCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwQzVCO0lBQUQsZUFBQztDQTFDRCxBQTBDQyxDQTFDcUMsRUFBRSxDQUFDLFNBQVMsR0EwQ2pEO2tCQTFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCBtZXNzYWdlIGZyb20gXCIuL21lc3NhZ2VcIjtcclxuaW1wb3J0IGp1bXBfYnV0dG9uIGZyb20gXCIuL2p1bXBfYnV0dG9uXCI7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuY2xhc3MgTWVzc2FnZXtcclxuICAgICBjb250ZW50OnN0cmluZztcclxuXHJcbiAgICAgY29uc3RydWN0b3IoY29udGVudDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY29udGVudD1jb250ZW50O1xyXG4gICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGV4dGJveDMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkobWVzc2FnZSlcclxuICAgIE1zY29udHJvbDptZXNzYWdlPW51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGp1bXBfYnV0dG9uKVxyXG4gICAganVtcF9idXR0b25fY29udHJvbDpqdW1wX2J1dHRvbj1udWxsO1xyXG4gICAgXHJcbiAgICAvL+a2iOaBr+aVsOe7hFxyXG4gICAgbXNnczpNZXNzYWdlW109bnVsbDtcclxuICAgIGluZGV4Om51bWJlcj0wO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+WIneWni+WMluaVsOe7hFxyXG4gICAgICB0aGlzLm1zZ3M9W1xyXG4gICAgICAgICAgICBuZXcgTWVzc2FnZShcIueUteair+ayoeacieWPjeW6lCznnIvkuIrljrvmmK/lgZznlLXkuoZcIikgXTtcclxuICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sKGV2ZW50KT0+e1xyXG4gICAgICAgICBpZih0aGlzLmluZGV4PD10aGlzLm1zZ3MubGVuZ3RoKXtcclxuICAgICAgICAgICAgLy/lpoLmnpzlr7nor53pnaLmnb/msqHmmL7npLrvvIzmmL7npLpcclxuICAgICAgICAgICAgaWYodGhpcy5Nc2NvbnRyb2wubm9kZS5hY3RpdmU9PWZhbHNlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuTXNjb250cm9sLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+ivu+a2iOaBr1xyXG4gICAgICAgICAgICBsZXQgbWVzPXRoaXMubXNnc1t0aGlzLmluZGV4KytdO1xyXG4gICAgICAgICAgICAvL+aYvuekuua2iOaBr1xyXG4gICAgICAgICAgICAvL+aYvuekuua2iOaBr1xyXG4gICAgICAgICAgICBsZXQgd29ybGQ6c3RyaW5nPVwiXCI7XHJcbiAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBtZXMuY29udGVudC5zcGxpdChcIlwiKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1lcy5jb250ZW50Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZCArPSBsZXR0ZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Nc2NvbnRyb2wuc2V0TWVzc2FnZSh3b3JsZCk7XHJcbiAgICAgICAgICAgICAgICB9LDYwKihpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfWlmKHRoaXMuanVtcF9idXR0b25fY29udHJvbC5ub2RlLmFjdGl2ZT09ZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBfYnV0dG9uX2NvbnRyb2wubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgfVxyXG59Il19