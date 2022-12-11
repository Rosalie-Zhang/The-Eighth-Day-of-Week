
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/coward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85f2dH9HvhJcawBMeddnLqT', 'coward');
// scripts/zzy/coward.ts

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
var message_1 = require("./message");
var start_1 = require("./start");
//import jump_button from "./jump_button";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Message = /** @class */ (function () {
    function Message(content) {
        this.content = content;
    }
    return Message;
}());
var coward = /** @class */ (function (_super) {
    __extends(coward, _super);
    function coward() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Mscontrol = null;
        _this.start_control = null;
        //消息数组
        _this.msgs = null;
        _this.index = 0;
        return _this;
    }
    coward.prototype.start = function () {
        var _this = this;
        //初始化数组
        this.msgs = [
            new Message("你的手机四分五裂，达成结局——胆小鬼")
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
            if (_this.start_control.node.active == false) {
                _this.start_control.node.active = true;
            }
        });
    };
    coward.prototype.update = function (dt) {
    };
    __decorate([
        property(message_1.default)
    ], coward.prototype, "Mscontrol", void 0);
    __decorate([
        property(start_1.default)
    ], coward.prototype, "start_control", void 0);
    coward = __decorate([
        ccclass
    ], coward);
    return coward;
}(cc.Component));
exports.default = coward;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenp5XFxjb3dhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscUNBQWdDO0FBQ2hDLGlDQUE0QjtBQUM1QiwwQ0FBMEM7QUFDcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFHSyxpQkFBWSxPQUFjO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTixjQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFHRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTBDQztRQXZDRyxlQUFTLEdBQVMsSUFBSSxDQUFDO1FBR3ZCLG1CQUFhLEdBQU8sSUFBSSxDQUFDO1FBRXpCLE1BQU07UUFDTixVQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLFdBQUssR0FBUSxDQUFDLENBQUM7O0lBZ0NuQixDQUFDO0lBOUJHLHNCQUFLLEdBQUw7UUFBQSxpQkEwQkM7UUF6QkcsT0FBTztRQUNULElBQUksQ0FBQyxJQUFJLEdBQUM7WUFDSixJQUFJLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztTQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLFVBQUMsS0FBSztZQUM3QyxJQUFHLEtBQUksQ0FBQyxLQUFLLElBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQzdCLGNBQWM7Z0JBQ2QsSUFBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUUsS0FBSyxFQUFDO29CQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNyQztnQkFDRCxLQUFLO2dCQUNMLElBQUksR0FBRyxHQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixJQUFJLE9BQUssR0FBUSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksUUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dDQUMzQixDQUFDO29CQUNMLFVBQVUsQ0FBQzt3QkFDUCxPQUFLLElBQUksUUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFLLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxFQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUpkLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7NEJBQWxDLENBQUM7aUJBS1I7YUFDSDtZQUFBLElBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLEtBQUssRUFBQztnQkFDdkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUN0QztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVCQUFNLEdBQU4sVUFBUSxFQUFFO0lBRVYsQ0FBQztJQXRDRDtRQURDLFFBQVEsQ0FBQyxpQkFBTyxDQUFDOzZDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQztpREFDUztJQU5SLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwQzFCO0lBQUQsYUFBQztDQTFDRCxBQTBDQyxDQTFDbUMsRUFBRSxDQUFDLFNBQVMsR0EwQy9DO2tCQTFDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBtZXNzYWdlIGZyb20gXCIuL21lc3NhZ2VcIjtcclxuaW1wb3J0IHN0YXJ0IGZyb20gXCIuL3N0YXJ0XCI7XHJcbi8vaW1wb3J0IGp1bXBfYnV0dG9uIGZyb20gXCIuL2p1bXBfYnV0dG9uXCI7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuY2xhc3MgTWVzc2FnZXtcclxuICAgICBjb250ZW50OnN0cmluZztcclxuXHJcbiAgICAgY29uc3RydWN0b3IoY29udGVudDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY29udGVudD1jb250ZW50O1xyXG4gICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY293YXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KG1lc3NhZ2UpXHJcbiAgICBNc2NvbnRyb2w6bWVzc2FnZT1udWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShzdGFydClcclxuICAgIHN0YXJ0X2NvbnRyb2w6c3RhcnQ9bnVsbDtcclxuICAgIFxyXG4gICAgLy/mtojmga/mlbDnu4RcclxuICAgIG1zZ3M6TWVzc2FnZVtdPW51bGw7XHJcbiAgICBpbmRleDpudW1iZXI9MDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbmlbDnu4RcclxuICAgICAgdGhpcy5tc2dzPVtcclxuICAgICAgICAgICAgbmV3IE1lc3NhZ2UoXCLkvaDnmoTmiYvmnLrlm5vliIbkupToo4LvvIzovr7miJDnu5PlsYDigJTigJTog4blsI/prLxcIikgXTtcclxuICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sKGV2ZW50KT0+e1xyXG4gICAgICAgICBpZih0aGlzLmluZGV4PD10aGlzLm1zZ3MubGVuZ3RoKXtcclxuICAgICAgICAgICAgLy/lpoLmnpzlr7nor53pnaLmnb/msqHmmL7npLrvvIzmmL7npLpcclxuICAgICAgICAgICAgaWYodGhpcy5Nc2NvbnRyb2wubm9kZS5hY3RpdmU9PWZhbHNlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuTXNjb250cm9sLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+ivu+a2iOaBr1xyXG4gICAgICAgICAgICBsZXQgbWVzPXRoaXMubXNnc1t0aGlzLmluZGV4KytdO1xyXG4gICAgICAgICAgICAvL+aYvuekuua2iOaBr1xyXG4gICAgICAgICAgICAvL+aYvuekuua2iOaBr1xyXG4gICAgICAgICAgICBsZXQgd29ybGQ6c3RyaW5nPVwiXCI7XHJcbiAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBtZXMuY29udGVudC5zcGxpdChcIlwiKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1lcy5jb250ZW50Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZCArPSBsZXR0ZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Nc2NvbnRyb2wuc2V0TWVzc2FnZSh3b3JsZCk7XHJcbiAgICAgICAgICAgICAgICB9LDYwKihpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfWlmKHRoaXMuc3RhcnRfY29udHJvbC5ub2RlLmFjdGl2ZT09ZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0X2NvbnRyb2wubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgfVxyXG59Il19