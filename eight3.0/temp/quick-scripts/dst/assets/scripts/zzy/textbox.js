
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/textbox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenp5XFx0ZXh0Ym94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGO0FBQ2xGLDZDQUF3QztBQUN4QyxxQ0FBZ0M7QUFDMUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFHSyxpQkFBWSxPQUFjO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTixjQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFHRDtJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXNDQztRQW5DRyxlQUFTLEdBQVMsSUFBSSxDQUFDO1FBR3ZCLHlCQUFtQixHQUFhLElBQUksQ0FBQztRQUVyQyxNQUFNO1FBQ04sVUFBSSxHQUFXLElBQUksQ0FBQztRQUNwQixXQUFLLEdBQVEsQ0FBQyxDQUFDOztJQTRCbkIsQ0FBQztJQXpCRyx1QkFBSyxHQUFMO1FBQUEsaUJBd0JDO1FBdkJELElBQUksQ0FBQyxJQUFJLEdBQUM7WUFDTixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxVQUFDLEtBQUs7WUFDaEQsSUFBRyxLQUFJLENBQUMsS0FBSyxJQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUM3QixjQUFjO2dCQUNkLElBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLEtBQUssRUFBQztvQkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDckM7Z0JBQ0QsS0FBSztnQkFDTCxJQUFJLEdBQUcsR0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO2dCQUNOLElBQUksT0FBSyxHQUFRLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxRQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7d0NBQzNCLENBQUM7b0JBQ0wsVUFBVSxDQUFDO3dCQUNQLE9BQUssSUFBSSxRQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25CLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQUssQ0FBQyxDQUFDO29CQUNyQyxDQUFDLEVBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBSmQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTs0QkFBbEMsQ0FBQztpQkFLUjthQUFDO1lBQ0gsSUFBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBRSxLQUFLLEVBQUM7Z0JBQzlDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUM1QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQWxDRDtRQURDLFFBQVEsQ0FBQyxpQkFBTyxDQUFDOzhDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLHFCQUFXLENBQUM7d0RBQ2U7SUFOcEIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXNDM0I7SUFBRCxjQUFDO0NBdENELEFBc0NDLENBdENvQyxFQUFFLENBQUMsU0FBUyxHQXNDaEQ7a0JBdENvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQganVtcF9idXR0b24gZnJvbSBcIi4vanVtcF9idXR0b25cIjtcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNsYXNzIE1lc3NhZ2V7XHJcbiAgICAgY29udGVudDpzdHJpbmc7XHJcblxyXG4gICAgIGNvbnN0cnVjdG9yKGNvbnRlbnQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQ9Y29udGVudDtcclxuICAgICB9XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRleHRib3ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkobWVzc2FnZSlcclxuICAgIE1zY29udHJvbDptZXNzYWdlPW51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGp1bXBfYnV0dG9uKVxyXG4gICAganVtcF9idXR0b25fY29udHJvbDpqdW1wX2J1dHRvbj1udWxsO1xyXG4gICAgXHJcbiAgICAvL+a2iOaBr+aVsOe7hFxyXG4gICAgbXNnczpNZXNzYWdlW109bnVsbDtcclxuICAgIGluZGV4Om51bWJlcj0wO1xyXG4gICAgXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgdGhpcy5tc2dzPVtcclxuICAgICAgICBuZXcgTWVzc2FnZShcIuadpeaOoue0ouS4gOS4i+i1sOW7iuWQp1wiKSBdO1xyXG4gICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLChldmVudCk9PntcclxuICAgICBpZih0aGlzLmluZGV4PD10aGlzLm1zZ3MubGVuZ3RoKXtcclxuICAgICAgICAvL+WmguaenOWvueivnemdouadv+ayoeaYvuekuu+8jOaYvuekulxyXG4gICAgICAgIGlmKHRoaXMuTXNjb250cm9sLm5vZGUuYWN0aXZlPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuTXNjb250cm9sLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/or7vmtojmga9cclxuICAgICAgICBsZXQgbWVzPXRoaXMubXNnc1t0aGlzLmluZGV4KytdO1xyXG4gICAgICAgIC8v5pi+56S65raI5oGvXHJcbiAgICAgICAgbGV0IHdvcmxkOnN0cmluZz1cIlwiO1xyXG4gICAgICAgIGxldCBsZXR0ZXIgPSBtZXMuY29udGVudC5zcGxpdChcIlwiKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWVzLmNvbnRlbnQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICB3b3JsZCArPSBsZXR0ZXJbaV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1zY29udHJvbC5zZXRNZXNzYWdlKHdvcmxkKTtcclxuICAgICAgICAgICAgfSw2MCooaSkpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICBpZih0aGlzLmp1bXBfYnV0dG9uX2NvbnRyb2wubm9kZS5hY3RpdmU9PWZhbHNlKXtcclxuICAgICAgICB0aGlzLmp1bXBfYnV0dG9uX2NvbnRyb2wubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgfVxyXG4gICAgIH0pOyBcclxuICAgIH1cclxufVxyXG5cclxuICAgICJdfQ==