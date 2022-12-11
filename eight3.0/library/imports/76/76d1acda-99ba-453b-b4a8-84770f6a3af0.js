"use strict";
cc._RF.push(module, '76d1azambpFO7SohHcPajrw', 'textbox');
// scripts/zzy/textbox.ts

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
var jump_button_1 = require("./jump_button");
var message_1 = require("./message");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Message = /** @class */ (function () {
    function Message(content) {
        this.content = content;
    }
    return Message;
}());
var textbox = /** @class */ (function (_super) {
    __extends(textbox, _super);
    function textbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Mscontrol = null;
        _this.jump_button_control = null;
        //消息数组
        _this.msgs = null;
        _this.index = 0;
        return _this;
    }
    textbox.prototype.start = function () {
        var _this = this;
        this.msgs = [
            new Message("来探索一下走廊吧")
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
    __decorate([
        property(message_1.default)
    ], textbox.prototype, "Mscontrol", void 0);
    __decorate([
        property(jump_button_1.default)
    ], textbox.prototype, "jump_button_control", void 0);
    textbox = __decorate([
        ccclass
    ], textbox);
    return textbox;
}(cc.Component));
exports.default = textbox;

cc._RF.pop();