
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script-ywj/Arrow');
require('./assets/Script-ywj/Back');
require('./assets/Script-ywj/GameMgr');
require('./assets/Script-ywj/GameScore');
require('./assets/Script-ywj/Gamey');
require('./assets/Script-ywj/Item');
require('./assets/script-wyx/Choose1');
require('./assets/script-wyx/SearchScript');
require('./assets/script-wyx/Text2.2');
require('./assets/script-wyx/TextSwitch1.1');
require('./assets/script-wyx/TextSwitch1.21');
require('./assets/script-wyx/TextSwitch1.22');
require('./assets/script-wyx/TextSwitch1');
require('./assets/script-wyx/TextSwitch2.1');
require('./assets/script-wyx/TextSwitch2.31');
require('./assets/script-wyx/dizzySwitch');
require('./assets/script-wyx/globalVariable');
require('./assets/script-wyx/lookDiaryN');
require('./assets/script-wyx/lookDiaryO');
require('./assets/script-wyx/showConsciousNumber');
require('./assets/scripts/lsm/Box');
require('./assets/scripts/lsm/Collision');
require('./assets/scripts/lsm/CollisionCallback');
require('./assets/scripts/lsm/GoOutside');
require('./assets/scripts/lsm/MainController');
require('./assets/scripts/lsm/Physize');
require('./assets/scripts/lsm/Rigid body');
require('./assets/scripts/lsm/back');
require('./assets/scripts/lsm/desk');
require('./assets/scripts/lsm/win');
require('./assets/scripts/zyy/bad_ending');
require('./assets/scripts/zyy/fakegood_ending');
require('./assets/scripts/zyy/false_ans');
require('./assets/scripts/zyy/good_ending - 001');
require('./assets/scripts/zyy/good_ending');
require('./assets/scripts/zyy/label - test 1');
require('./assets/scripts/zyy/label - test 2');
require('./assets/scripts/zyy/label - test 3');
require('./assets/scripts/zyy/label - test 4');
require('./assets/scripts/zyy/label - test 5');
require('./assets/scripts/zyy/label');
require('./assets/scripts/zyy/label4.1');
require('./assets/scripts/zyy/login');
require('./assets/scripts/zyy/music');
require('./assets/scripts/zyy/over');
require('./assets/scripts/zyy/turnTo');
require('./assets/scripts/zzy/NewScript');
require('./assets/scripts/zzy/a');
require('./assets/scripts/zzy/b');
require('./assets/scripts/zzy/box');
require('./assets/scripts/zzy/canoon');
require('./assets/scripts/zzy/classdoor');
require('./assets/scripts/zzy/coward');
require('./assets/scripts/zzy/door');
require('./assets/scripts/zzy/elevator');
require('./assets/scripts/zzy/jump_button');
require('./assets/scripts/zzy/jump_choice');
require('./assets/scripts/zzy/jump_lingjian');
require('./assets/scripts/zzy/lingjian');
require('./assets/scripts/zzy/message');
require('./assets/scripts/zzy/start');
require('./assets/scripts/zzy/textbox');
require('./assets/scripts/zzy/textbox2');
require('./assets/scripts/zzy/textbox3');
require('./assets/scripts/zzy/textbox4');
require('./assets/scripts/zzy/textbox5');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script-ywj/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71e08U3p1tKXpKL9dPSFhDZ', 'Item');
// Script/Item.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    if (this.node.y < -cc.winSize.height / 2 - 200) {
      this.node.destroy();
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsIm5vZGUiLCJ5Iiwid2luU2l6ZSIsImhlaWdodCIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUw7QUFFQTtBQUVBQyxFQUFBQSxLQVZLLG1CQVVJLENBRVIsQ0FaSTtBQWNMQyxFQUFBQSxNQWRLLGtCQWNHQyxFQWRILEVBY087QUFDUixRQUFJLEtBQUtDLElBQUwsQ0FBVUMsQ0FBVixHQUFjLENBQUNSLEVBQUUsQ0FBQ1MsT0FBSCxDQUFXQyxNQUFaLEdBQW1CLENBQW5CLEdBQXVCLEdBQXpDLEVBQThDO0FBQzFDLFdBQUtILElBQUwsQ0FBVUksT0FBVjtBQUNIO0FBQ0o7QUFsQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAtY2Mud2luU2l6ZS5oZWlnaHQvMiAtIDIwMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/GoOutside.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1167dh0OcBNu6ejbEjqYEfS', 'GoOutside');
// scripts/lsm/GoOutside.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.GoOutside = function () {
        cc.director.loadScene("scen1");
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxHb091dHNpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvQkM7UUFqQkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQWF2QixpQkFBaUI7SUFDckIsQ0FBQztJQVpHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9CNUI7SUFBRCxlQUFDO0NBcEJELEFBb0JDLENBcEJxQyxFQUFFLENBQUMsU0FBUyxHQW9CakQ7a0JBcEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuICAgIEdvT3V0c2lkZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW4xXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/Choose1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f622rKlbFB5Jf2loQxnt5i', 'Choose1');
// script/Choose1.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.chooseTime = 1;
cc.Class({
  "extends": cc.Component,
  // properties: {
  //     music:cc.AudioSource,
  // },
  //当点击按钮时触发场景切换
  on_btn_onclick1: function on_btn_onclick1() {
    if (chooseTime < 3) {
      cc.director.loadScene("Scene 1.1"); //场景切换到Scene1.1

      cc.log("change to Scene 1.1");
      chooseTime++;
    }

    if (chooseTime == 3) {
      cc.director.loadScene("Scene 1.21"); //场景切换到Scene1.21

      cc.log("change to Scene 1.21");
    }
  },
  on_btn_onclick2: function on_btn_onclick2() {
    if (chooseTime < 3) {
      cc.director.loadScene("Scene 1.1"); //场景切换到Scene1.1

      cc.log("change to Scene 1.1");
      chooseTime++;
    }

    if (chooseTime == 3) {
      cc.director.loadScene("Scene 1.22"); //场景切换到Scene1.22

      cc.log("change to Scene 1.22");
    }
  } // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  // start () {
  // },
  // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDaG9vc2UxLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImNob29zZVRpbWUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25fYnRuX29uY2xpY2sxIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJsb2ciLCJvbl9idG5fb25jbGljazIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixDQUFwQjtBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMO0FBQ0E7QUFDQTtBQUVBO0FBQ0FDLEVBQUFBLGVBQWUsRUFBQywyQkFBVTtBQUN0QixRQUFHSixVQUFVLEdBQUcsQ0FBaEIsRUFBa0I7QUFDZEMsTUFBQUEsRUFBRSxDQUFDSSxRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEIsRUFEYyxDQUNxQjs7QUFDbkNMLE1BQUFBLEVBQUUsQ0FBQ00sR0FBSCxDQUFPLHFCQUFQO0FBQ0FQLE1BQUFBLFVBQVU7QUFDYjs7QUFDRCxRQUFJQSxVQUFVLElBQUksQ0FBbEIsRUFBb0I7QUFDaEJDLE1BQUFBLEVBQUUsQ0FBQ0ksUUFBSCxDQUFZQyxTQUFaLENBQXNCLFlBQXRCLEVBRGdCLENBQ29COztBQUNwQ0wsTUFBQUEsRUFBRSxDQUFDTSxHQUFILENBQU8sc0JBQVA7QUFDSDtBQUVKLEdBbkJJO0FBcUJMQyxFQUFBQSxlQUFlLEVBQUMsMkJBQVU7QUFDdEIsUUFBR1IsVUFBVSxHQUFHLENBQWhCLEVBQWtCO0FBQ2RDLE1BQUFBLEVBQUUsQ0FBQ0ksUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCLEVBRGMsQ0FDcUI7O0FBQ25DTCxNQUFBQSxFQUFFLENBQUNNLEdBQUgsQ0FBTyxxQkFBUDtBQUNBUCxNQUFBQSxVQUFVO0FBQ2I7O0FBQ0QsUUFBSUEsVUFBVSxJQUFJLENBQWxCLEVBQW9CO0FBQ2hCQyxNQUFBQSxFQUFFLENBQUNJLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixZQUF0QixFQURnQixDQUNvQjs7QUFDcENMLE1BQUFBLEVBQUUsQ0FBQ00sR0FBSCxDQUFPLHNCQUFQO0FBQ0g7QUFFSixHQWhDSSxDQWtDTDtBQUVBO0FBRUE7QUFFQTtBQUVBOztBQTFDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbndpbmRvdy5jaG9vc2VUaW1lID0gMVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIC8vIHByb3BlcnRpZXM6IHtcclxuICAgIC8vICAgICBtdXNpYzpjYy5BdWRpb1NvdXJjZSxcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy/lvZPngrnlh7vmjInpkq7ml7bop6blj5HlnLrmma/liIfmjaJcclxuICAgIG9uX2J0bl9vbmNsaWNrMTpmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGNob29zZVRpbWUgPCAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUgMS4xXCIpOy8v5Zy65pmv5YiH5o2i5YiwU2NlbmUxLjFcclxuICAgICAgICAgICAgY2MubG9nKFwiY2hhbmdlIHRvIFNjZW5lIDEuMVwiKTtcclxuICAgICAgICAgICAgY2hvb3NlVGltZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hvb3NlVGltZSA9PSAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUgMS4yMVwiKSAvL+WcuuaZr+WIh+aNouWIsFNjZW5lMS4yMVxyXG4gICAgICAgICAgICBjYy5sb2coXCJjaGFuZ2UgdG8gU2NlbmUgMS4yMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uX2J0bl9vbmNsaWNrMjpmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGNob29zZVRpbWUgPCAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUgMS4xXCIpOy8v5Zy65pmv5YiH5o2i5YiwU2NlbmUxLjFcclxuICAgICAgICAgICAgY2MubG9nKFwiY2hhbmdlIHRvIFNjZW5lIDEuMVwiKTtcclxuICAgICAgICAgICAgY2hvb3NlVGltZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hvb3NlVGltZSA9PSAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUgMS4yMlwiKSAvL+WcuuaZr+WIh+aNouWIsFNjZW5lMS4yMlxyXG4gICAgICAgICAgICBjYy5sb2coXCJjaGFuZ2UgdG8gU2NlbmUgMS4yMlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgLy8gc3RhcnQgKCkge1xyXG5cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/false_ans.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e73b3hh8mNAiI3+rF1tVtaZ', 'false_ans');
// scripts/zyy/false_ans.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '回答错误，再试试吧'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  //  start () {
  //     this.text.string = '';
  //     var str = '想要带你去看浪漫的土耳其';
  //     var j = 0;
  //     var interval = 0.2;// 以1秒为单位的时间间隔
  //     var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
  //     var delay = 1;// 我们在1秒后开始运行
  //     this.schedule(function() {
  //         this.text.string += str[j];
  //         j++;
  //     }, interval, repeat, delay);
  // },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      this.closeDialog();
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxmYWxzZV9hbnMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0TGFiZWwiLCJMYWJlbCIsIm9uTG9hZCIsImluaXQiLCJjb250ZW50Iiwic3lzdGVtRXZlbnQiLCJvbiIsIm9uS2V5RG93biIsIm9uRGVzdHJveSIsIm9mZiIsImUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJzcGFjZSIsIm5leHRUZXh0RGF0YSIsInRleHREYXRlQXJyIiwibm93VGV4dCIsInRleHRFbmQiLCJ0dCIsInRleHRJbmRleCIsIm5vZGUiLCJhY3RpdmUiLCJsZW5ndGgiLCJzZXRUZXh0RGF0YSIsImNsb3NlRGlhbG9nIiwidGV4dERhdGUiLCJzdHJpbmciLCJ1cGRhdGUiLCJkdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFDSixFQUFFLENBQUNLO0FBREwsR0FGUDtBQUtMQyxFQUFBQSxNQUxLLG9CQUtHO0FBQ0osU0FBS0MsSUFBTCxDQUFVLENBQ047QUFBQ0MsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FETSxDQUFWO0FBR0FSLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlQyxFQUFmLENBQWtCLFNBQWxCLEVBQTRCLEtBQUtDLFNBQWpDLEVBQTJDLElBQTNDLEVBSkksQ0FJNkM7QUFDcEQsR0FWSTtBQVdMQyxFQUFBQSxTQVhLLHVCQVdNO0FBQ1BaLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlSSxHQUFmLENBQW1CLFNBQW5CLEVBQTZCLEtBQUtGLFNBQWxDLEVBQTRDLElBQTVDO0FBQ0gsR0FiSTtBQWNMQSxFQUFBQSxTQWRLLHFCQWNLRyxDQWRMLEVBY087QUFDUixZQUFPQSxDQUFDLENBQUNDLE9BQVQ7QUFDSSxXQUFLZixFQUFFLENBQUNnQixLQUFILENBQVNDLEdBQVQsQ0FBYUMsS0FBbEI7QUFBd0I7QUFDcEIsZUFBS0MsWUFBTDtBQUNBO0FBQ0g7QUFKTDtBQU1ILEdBckJJO0FBc0JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBWixFQUFBQSxJQWxDSyxnQkFrQ0FhLFdBbENBLEVBa0NZO0FBQ2IsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtDLEVBQUwsR0FBUSxDQUFSLENBSGEsQ0FHSDs7QUFDVixTQUFLQyxTQUFMLEdBQWUsQ0FBQyxDQUFoQjtBQUNBLFNBQUtKLFdBQUwsR0FBaUJBLFdBQWpCO0FBQ0EsU0FBS0ssSUFBTCxDQUFVQyxNQUFWLEdBQWlCLElBQWpCO0FBQ0EsU0FBS1AsWUFBTDtBQUNILEdBMUNJO0FBMkNMQSxFQUFBQSxZQTNDSywwQkEyQ1M7QUFDVixRQUFHLENBQUMsS0FBS0csT0FBVCxFQUFpQjs7QUFDakIsUUFBRyxFQUFFLEtBQUtFLFNBQVAsR0FBa0IsS0FBS0osV0FBTCxDQUFpQk8sTUFBdEMsRUFBNkM7QUFDekMsV0FBS0MsV0FBTCxDQUFpQixLQUFLUixXQUFMLENBQWlCLEtBQUtJLFNBQXRCLENBQWpCO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS0ssV0FBTDtBQUNIO0FBQ0osR0FsREk7QUFtRExELEVBQUFBLFdBbkRLLHVCQW1ET0UsUUFuRFAsRUFtRGdCO0FBQ2pCLFFBQUcsQ0FBQyxLQUFLUixPQUFULEVBQWlCO0FBQ2pCLFNBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS2xCLFNBQUwsQ0FBZTJCLE1BQWYsR0FBc0IsRUFBdEI7QUFDQSxTQUFLVixPQUFMLEdBQWFTLFFBQVEsQ0FBQ3RCLE9BQXRCO0FBRUgsR0F6REk7QUEwRExxQixFQUFBQSxXQTFESyx5QkEwRFE7QUFDVCxTQUFLSixJQUFMLENBQVVDLE1BQVYsR0FBaUIsS0FBakI7QUFDSCxHQTVESTtBQTZETE0sRUFBQUEsTUE3REssa0JBNkRFQyxFQTdERixFQTZESztBQUNOLFFBQUcsQ0FBQyxLQUFLWixPQUFULEVBQWlCO0FBQ2pCLFNBQUtFLEVBQUwsSUFBU1UsRUFBVDs7QUFDQSxRQUFHLEtBQUtWLEVBQUwsSUFBUyxHQUFaLEVBQWdCO0FBQ1osVUFBRyxLQUFLbkIsU0FBTCxDQUFlMkIsTUFBZixDQUFzQkosTUFBdEIsR0FBNkIsS0FBS04sT0FBTCxDQUFhTSxNQUE3QyxFQUFvRDtBQUNoRCxhQUFLdkIsU0FBTCxDQUFlMkIsTUFBZixHQUFzQixLQUFLVixPQUFMLENBQWFhLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsS0FBSzlCLFNBQUwsQ0FBZTJCLE1BQWYsQ0FBc0JKLE1BQXRCLEdBQTZCLENBQWxELENBQXRCO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsYUFBS0wsT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFFSjtBQTFFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+WbnuetlOmUmeivr++8jOWGjeivleivleWQpyd9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gIHN0YXJ0ICgpIHtcclxuICAgIC8vICAgICB0aGlzLnRleHQuc3RyaW5nID0gJyc7XHJcbiAgICAvLyAgICAgdmFyIHN0ciA9ICfmg7PopoHluKbkvaDljrvnnIvmtarmvKvnmoTlnJ/ogLPlhbYnO1xyXG4gICAgLy8gICAgIHZhciBqID0gMDtcclxuICAgIC8vICAgICB2YXIgaW50ZXJ2YWwgPSAwLjI7Ly8g5LulMeenkuS4uuWNleS9jeeahOaXtumXtOmXtOmalFxyXG4gICAgLy8gICAgIHZhciByZXBlYXQgPSBzdHIubGVuZ3RoIC0gMTsvLyDph43lpI3mrKHmlbAgPSDlrZfnrKbkuLLplb/luqYgLSAxXHJcbiAgICAvLyAgICAgdmFyIGRlbGF5ID0gMTsvLyDmiJHku6zlnKgx56eS5ZCO5byA5aeL6L+Q6KGMXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyArPSBzdHJbal07XHJcbiAgICAvLyAgICAgICAgIGorKztcclxuICAgIC8vICAgICB9LCBpbnRlcnZhbCwgcmVwZWF0LCBkZWxheSk7XHJcbiAgICAvLyB9LFxyXG4gICAgaW5pdCh0ZXh0RGF0ZUFycil7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgdGhpcy50dD0wOy8v5pKt5pS+55qE5oC75pe26ZW/XHJcbiAgICAgICAgdGhpcy50ZXh0SW5kZXg9LTE7XHJcbiAgICAgICAgdGhpcy50ZXh0RGF0ZUFycj10ZXh0RGF0ZUFycjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgdGhpcy5uZXh0VGV4dERhdGEoKVxyXG4gICAgfSxcclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0VGV4dERhdGEodGV4dERhdGUpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD1mYWxzZTtcclxuICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9Jyc7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PXRleHREYXRlLmNvbnRlbnQ7XHJcblxyXG4gICAgfSxcclxuICAgIGNsb3NlRGlhbG9nKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZHQpe1xyXG4gICAgICAgIGlmKCF0aGlzLm5vd1RleHQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudHQrPWR0O1xyXG4gICAgICAgIGlmKHRoaXMudHQ+PTAuMSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGg8dGhpcy5ub3dUZXh0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9dGhpcy5ub3dUZXh0LnNsaWNlKDAsdGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aCsxKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50dD0wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/classdoor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c116egLl91KtZtoVnB3K0dj', 'classdoor');
// scripts/Scripts/classdoor.ts

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
var classdoor = /** @class */ (function (_super) {
    __extends(classdoor, _super);
    function classdoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    classdoor.prototype.start = function () {
    };
    classdoor.prototype.update = function (dt) { };
    classdoor.prototype.test = function () {
        cc.director.loadScene("scen2", function () {
        });
    };
    classdoor = __decorate([
        ccclass
    ], classdoor);
    return classdoor;
}(cc.Component));
exports.default = classdoor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcY2xhc3Nkb29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EOztJQVlBLENBQUM7SUFYRyx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBUSxFQUFFLElBQUcsQ0FBQztJQUVkLHdCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUM7UUFFOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBWGdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FZN0I7SUFBRCxnQkFBQztDQVpELEFBWUMsQ0Fac0MsRUFBRSxDQUFDLFNBQVMsR0FZbEQ7a0JBWm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsYXNzZG9vciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgdGVzdCgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW4yXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script-ywj/Gamey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54a06mhqCRC0ZsRL6jsaSE9', 'Gamey');
// Script-ywj/Gamey.js

"use strict";

// const score = require("GameScore");
cc.Class({
  "extends": cc.Component,
  properties: {
    arrowPrefab: {
      type: cc.Prefab,
      "default": null
    },
    targetPrefab: {
      type: cc.Prefab,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true; //开启物理引擎

    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this); //触摸开始

    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this); //触摸移动

    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this); //触摸结束，物体内部结束
  },
  start: function start() {
    this.createArrow();
    this.schedule(function () {
      this.createTarget();
    }, 2);
  },
  update: function update(dt) {},
  onTouchStart: function onTouchStart(event) {
    if (this.arrow) {
      this.arrow.updateArrowRotation(event.getLocation());
    }
  },
  onTouchMove: function onTouchMove(event) {
    if (this.arrow) {
      this.arrow.updateArrowRotation(event.getLocation());
    }
  },
  onTouchEnd: function onTouchEnd(event) {
    if (this.arrow) {
      this.arrow.shoot();
      this.arrow = null;
      this.scheduleOnce(function () {
        this.createArrow();
      }, 0.5);
    }
  },
  createArrow: function createArrow() {
    var arrowNode = cc.instantiate(this.arrowPrefab);
    arrowNode.x = -600;
    arrowNode.y = 250;
    arrowNode.zIndex = 1;
    arrowNode.parent = this.node;
    this.arrow = arrowNode.getComponent("Arrow");
  },
  createTarget: function createTarget() {
    var targetNode = cc.instantiate(this.targetPrefab);
    targetNode.x = this.randomInt(200, 750);
    targetNode.y = 0;
    targetNode.parent = this.node;
  },
  randomInt: function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0LXl3alxcR2FtZXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhcnJvd1ByZWZhYiIsInR5cGUiLCJQcmVmYWIiLCJ0YXJnZXRQcmVmYWIiLCJvbkxvYWQiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsIlRPVUNIX0VORCIsIm9uVG91Y2hFbmQiLCJzdGFydCIsImNyZWF0ZUFycm93Iiwic2NoZWR1bGUiLCJjcmVhdGVUYXJnZXQiLCJ1cGRhdGUiLCJkdCIsImV2ZW50IiwiYXJyb3ciLCJ1cGRhdGVBcnJvd1JvdGF0aW9uIiwiZ2V0TG9jYXRpb24iLCJzaG9vdCIsInNjaGVkdWxlT25jZSIsImFycm93Tm9kZSIsImluc3RhbnRpYXRlIiwieCIsInkiLCJ6SW5kZXgiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJ0YXJnZXROb2RlIiwicmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BREE7QUFFVCxpQkFBUztBQUZBLEtBREw7QUFLUkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1ZGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQURDO0FBRVYsaUJBQVM7QUFGQztBQUxOLEdBSFA7QUFjTDtBQUVBRSxFQUFBQSxNQWhCSyxvQkFnQks7QUFDTlIsSUFBQUEsRUFB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QyxDQUFQO0FBQ0g7QUExRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3Qgc2NvcmUgPSByZXF1aXJlKFwiR2FtZVNjb3JlXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFycm93UHJlZmFiOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFyZ2V0UHJlZmFiOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlOy8v5byA5ZCv54mp55CG5byV5pOOXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7Ly/op6bmkbjlvIDlp4tcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7Ly/op6bmkbjnp7vliqhcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpOy8v6Kem5pG457uT5p2f77yM54mp5L2T5YaF6YOo57uT5p2fXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFycm93KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUYXJnZXQoKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0IChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFycm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3cudXBkYXRlQXJyb3dSb3RhdGlvbihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hNb3ZlIChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFycm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3cudXBkYXRlQXJyb3dSb3RhdGlvbihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hFbmQgKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJyb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdy5zaG9vdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFycm93KCk7XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVBcnJvdyAoKSB7XHJcbiAgICAgICAgbGV0IGFycm93Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXJyb3dQcmVmYWIpO1xyXG4gICAgICAgIGFycm93Tm9kZS54ID0gLTYwMDtcclxuICAgICAgICBhcnJvd05vZGUueSA9IDI1MDtcclxuICAgICAgICBhcnJvd05vZGUuekluZGV4ID0gMTtcclxuICAgICAgICBhcnJvd05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuYXJyb3cgPSBhcnJvd05vZGUuZ2V0Q29tcG9uZW50KFwiQXJyb3dcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVRhcmdldCAoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhcmdldFByZWZhYik7XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS54ID0gdGhpcy5yYW5kb21JbnQoMjAwLCA3NTApO1xyXG4gICAgICAgIHRhcmdldE5vZGUueSA9IDA7XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICB9LFxyXG5cclxuICAgIHJhbmRvbUludCAobWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script-ywj/Arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3543anw16VCH7P+izHmvwhY', 'Arrow');
// Script/Arrow.js

"use strict";

var score = require('GameScore');

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.direction = cc.v2(0, 0);
    this.rigidBody = this.getComponent(cc.RigidBody);
    this.weldJoint = this.getComponent(cc.WeldJoint);
  },
  start: function start() {},
  update: function update(dt) {
    var velocity = this.rigidBody.linearVelocity;
    var speed = velocity.mag();
    if (speed === 0) return;
    var angle = velocity.signAngle(cc.v2(1, 0));
    this.node.angle = -(angle * 180 / Math.PI);
    var dragConstant = 0.1;
    var direction = velocity.normalize();
    var pointingDirection = this.rigidBody.getWorldVector(cc.v2(1, 0));
    var flightDirection = this.rigidBody.linearVelocity;
    var flightSpeed = flightDirection.mag();
    flightDirection.normalizeSelf();
    var dot = flightDirection.dot(pointingDirection);
    var dragForceMagnitude = (1 - Math.abs(dot)) * flightSpeed * flightSpeed * dragConstant * this.rigidBody.getMass();
    var arrowTailPosition = this.rigidBody.getWorldPoint(cc.v2(-68, 0));
    this.rigidBody.applyForce(flightDirection.mul(-dragForceMagnitude), arrowTailPosition, false);
  },
  updateArrowRotation: function updateArrowRotation(pos) {
    pos = this.node.parent.convertToNodeSpaceAR(pos);
    pos = pos.sub(this.node.position);
    this.direction = pos.normalize();
    var angle = pos.signAngle(cc.v2(1, 0));
    this.node.angle = -(angle * 180 / Math.PI);
  },
  shoot: function shoot() {
    this.rigidBody.type = 2;
    var velocity = this.direction.mulSelf(1800);
    this.rigidBody.linearVelocity = velocity;
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    var joint = this.weldJoint;

    if (joint.enabled) {
      contact.disabled = true;
    }
  },
  // 每次处理完碰撞体接触逻辑时被调用
  onPostSolve: function onPostSolve(contact, selfCollider, otherCollider) {
    score.scoreAdd(1);
    var impulse = contact.getImpulse(); // 获取冲量信息，注意这个信息只有在 onPostSolve 回调中才能获取到

    if (Math.abs(impulse.normalImpulses[0]) < cc.PhysicsManager.PTM_RATIO) return;
    var joint = this.weldJoint;

    if (joint.enabled) {
      joint.enabled = false;
      return;
    }

    if (otherCollider.node.name == "arrow" || otherCollider.tag == 1) {
      return;
    }

    var arrowBody = selfCollider.body;
    var targetBody = otherCollider.body;
    var worldManifold = contact.getWorldManifold(); // 将 arrowBody 本地坐标系下的点转换为世界坐标系下的点

    var points = worldManifold.points;
    var point = arrowBody.getLocalPoint(points[0]);

    if (point.x < 54) {
      return;
    }

    var worldCoordsAnchorPoint = arrowBody.getWorldPoint(cc.v2(0, 0));
    joint.connectedBody = targetBody;
    joint.anchor = arrowBody.getLocalPoint(worldCoordsAnchorPoint);
    joint.connectedAnchor = targetBody.getLocalPoint(worldCoordsAnchorPoint);
    joint.referenceAngle = arrowBody.node.angle - targetBody.node.angle;
    joint.enabled = true;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcnJvdy5qcyJdLCJuYW1lcyI6WyJzY29yZSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImRpcmVjdGlvbiIsInYyIiwicmlnaWRCb2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5Iiwid2VsZEpvaW50IiwiV2VsZEpvaW50Iiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInZlbG9jaXR5IiwibGluZWFyVmVsb2NpdHkiLCJzcGVlZCIsIm1hZyIsImFuZ2xlIiwic2lnbkFuZ2xlIiwibm9kZSIsIk1hdGgiLCJQSSIsImRyYWdDb25zdGFudCIsIm5vcm1hbGl6ZSIsInBvaW50aW5nRGlyZWN0aW9uIiwiZ2V0V29ybGRWZWN0b3IiLCJmbGlnaHREaXJlY3Rpb24iLCJmbGlnaHRTcGVlZCIsIm5vcm1hbGl6ZVNlbGYiLCJkb3QiLCJkcmFnRm9yY2VNYWduaXR1ZGUiLCJhYnMiLCJnZXRNYXNzIiwiYXJyb3dUYWlsUG9zaXRpb24iLCJnZXRXb3JsZFBvaW50IiwiYXBwbHlGb3JjZSIsIm11bCIsInVwZGF0ZUFycm93Um90YXRpb24iLCJwb3MiLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInN1YiIsInBvc2l0aW9uIiwic2hvb3QiLCJ0eXBlIiwibXVsU2VsZiIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJqb2ludCIsImVuYWJsZWQiLCJkaXNhYmxlZCIsIm9uUG9zdFNvbHZlIiwic2NvcmVBZGQiLCJpbXB1bHNlIiwiZ2V0SW1wdWxzZSIsIm5vcm1hbEltcHVsc2VzIiwiUGh5c2ljc01hbmFnZXIiLCJQVE1fUkFUSU8iLCJuYW1lIiwidGFnIiwiYXJyb3dCb2R5IiwiYm9keSIsInRhcmdldEJvZHkiLCJ3b3JsZE1hbmlmb2xkIiwiZ2V0V29ybGRNYW5pZm9sZCIsInBvaW50cyIsInBvaW50IiwiZ2V0TG9jYWxQb2ludCIsIngiLCJ3b3JsZENvb3Jkc0FuY2hvclBvaW50IiwiY29ubmVjdGVkQm9keSIsImFuY2hvciIsImNvbm5lY3RlZEFuY2hvciIsInJlZmVyZW5jZUFuZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEtBQUssR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBbkI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSztBQUNOLFNBQUtDLFNBQUwsR0FBaUJMLEVBQUUsQ0FBQ00sRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQWpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLQyxZQUFMLENBQWtCUixFQUFFLENBQUNTLFNBQXJCLENBQWpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLRixZQUFMLENBQWtCUixFQUFFLENBQUNXLFNBQXJCLENBQWpCO0FBQ0gsR0FiSTtBQWVMQyxFQUFBQSxLQWZLLG1CQWVJLENBQ1IsQ0FoQkk7QUFrQkxDLEVBQUFBLE1BbEJLLGtCQWtCR0MsRUFsQkgsRUFrQk87QUFDUixRQUFJQyxRQUFRLEdBQUcsS0FBS1IsU0FBTCxDQUFlUyxjQUE5QjtBQUNBLFFBQUlDLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxHQUFULEVBQVo7QUFDQSxRQUFJRCxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFFBQUlFLEtBQUssR0FBR0osUUFBUSxDQUFDSyxTQUFULENBQW1CcEIsRUFBRSxDQUFDTSxFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBbkIsQ0FBWjtBQUNBLFNBQUtlLElBQUwsQ0FBVUYsS0FBVixHQUFrQixFQUFFQSxLQUFLLEdBQUcsR0FBUixHQUFjRyxJQUFJLENBQUNDLEVBQXJCLENBQWxCO0FBQ0osUUFBSUMsWUFBWSxHQUFHLEdBQW5CO0FBQ0EsUUFBSW5CLFNBQVMs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Q0FBQ0MsT0FBTixHQUFnQixJQUFoQjtBQUVIO0FBOUZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzY29yZSA9IHJlcXVpcmUoJ0dhbWVTY29yZScpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLndlbGRKb2ludCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLldlbGRKb2ludCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCB2ZWxvY2l0eSA9IHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIGxldCBzcGVlZCA9IHZlbG9jaXR5Lm1hZygpO1xyXG4gICAgICAgIGlmIChzcGVlZCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSB2ZWxvY2l0eS5zaWduQW5nbGUoY2MudjIoMSwwKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IC0oYW5nbGUgKiAxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICBsZXQgZHJhZ0NvbnN0YW50ID0gMC4xO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSB2ZWxvY2l0eS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgbGV0IHBvaW50aW5nRGlyZWN0aW9uID0gdGhpcy5yaWdpZEJvZHkuZ2V0V29ybGRWZWN0b3IoIGNjLnYyKCAxLCAwICkgKTtcclxuICAgICAgICBsZXQgZmxpZ2h0RGlyZWN0aW9uID0gdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgbGV0IGZsaWdodFNwZWVkID0gZmxpZ2h0RGlyZWN0aW9uLm1hZygpO1xyXG4gICAgICAgIGZsaWdodERpcmVjdGlvbi5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRvdCA9IGZsaWdodERpcmVjdGlvbi5kb3QocG9pbnRpbmdEaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCBkcmFnRm9yY2VNYWduaXR1ZGUgPSAoMSAtIE1hdGguYWJzKGRvdCkpICogZmxpZ2h0U3BlZWQgKiBmbGlnaHRTcGVlZCAqIGRyYWdDb25zdGFudCAqIHRoaXMucmlnaWRCb2R5LmdldE1hc3MoKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgYXJyb3dUYWlsUG9zaXRpb24gPSB0aGlzLnJpZ2lkQm9keS5nZXRXb3JsZFBvaW50KCBjYy52MiggLTY4LCAwICkgKTtcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5hcHBseUZvcmNlKCBmbGlnaHREaXJlY3Rpb24ubXVsKC1kcmFnRm9yY2VNYWduaXR1ZGUpLCBhcnJvd1RhaWxQb3NpdGlvbiwgZmFsc2UgKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQXJyb3dSb3RhdGlvbihwb3MpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgcG9zID0gcG9zLnN1Yih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcG9zLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IHBvcy5zaWduQW5nbGUoY2MudjIoMSwwKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gLShhbmdsZSAqIDE4MCAvIE1hdGguUEkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG9vdCAoKSB7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkudHlwZSA9IDI7XHJcbiAgICAgICAgbGV0IHZlbG9jaXR5ID0gdGhpcy5kaXJlY3Rpb24ubXVsU2VsZigxODAwKTtcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdCAoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgbGV0IGpvaW50ID0gdGhpcy53ZWxkSm9pbnQ7XHJcbiAgICAgICAgaWYgKGpvaW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDmr4/mrKHlpITnkIblroznorDmkp7kvZPmjqXop6bpgLvovpHml7booqvosIPnlKhcclxuICAgIG9uUG9zdFNvbHZlIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBzY29yZS5zY29yZUFkZCgxKTtcclxuICAgICAgICBsZXQgaW1wdWxzZSA9IGNvbnRhY3QuZ2V0SW1wdWxzZSgpOy8vIOiOt+WPluWGsumHj+S/oeaBr++8jOazqOaEj+i/meS4quS/oeaBr+WPquacieWcqCBvblBvc3RTb2x2ZSDlm57osIPkuK3miY3og73ojrflj5bliLBcclxuICAgICAgICBpZiAoTWF0aC5hYnMoaW1wdWxzZS5ub3JtYWxJbXB1bHNlc1swXSkgPCBjYy5QaHlzaWNzTWFuYWdlci5QVE1fUkFUSU8pIHJldHVybjtcclxuICAgICAgICBsZXQgam9pbnQgPSB0aGlzLndlbGRKb2ludDtcclxuXHJcbiAgICAgICAgaWYgKGpvaW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgam9pbnQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJhcnJvd1wiIHx8IG90aGVyQ29sbGlkZXIudGFnID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFycm93Qm9keSA9IHNlbGZDb2xsaWRlci5ib2R5O1xyXG4gICAgICAgIGxldCB0YXJnZXRCb2R5ID0gb3RoZXJDb2xsaWRlci5ib2R5O1xyXG4gICAgICAgIGxldCB3b3JsZE1hbmlmb2xkID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCk7Ly8g5bCGIGFycm93Qm9keSDmnKzlnLDlnZDmoIfns7vkuIvnmoTngrnovazmjaLkuLrkuJbnlYzlnZDmoIfns7vkuIvnmoTngrlcclxuICAgICAgICBsZXQgcG9pbnRzID0gd29ybGRNYW5pZm9sZC5wb2ludHM7XHJcbiAgICAgICAgbGV0IHBvaW50ID0gYXJyb3dCb2R5LmdldExvY2FsUG9pbnQocG9pbnRzWzBdKTtcclxuICAgICAgICBpZiAocG9pbnQueCA8IDU0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3b3JsZENvb3Jkc0FuY2hvclBvaW50ID0gYXJyb3dCb2R5LmdldFdvcmxkUG9pbnQoY2MudjIoMCwgMCkpO1xyXG4gICAgXHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQm9keSA9IHRhcmdldEJvZHk7XHJcbiAgICAgICAgam9pbnQuYW5jaG9yID0gYXJyb3dCb2R5LmdldExvY2FsUG9pbnQod29ybGRDb29yZHNBbmNob3JQb2ludCk7XHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQW5jaG9yID0gdGFyZ2V0Qm9keS5nZXRMb2NhbFBvaW50KHdvcmxkQ29vcmRzQW5jaG9yUG9pbnQpO1xyXG4gICAgICAgIGpvaW50LnJlZmVyZW5jZUFuZ2xlID0gYXJyb3dCb2R5Lm5vZGUuYW5nbGUgLSB0YXJnZXRCb2R5Lm5vZGUuYW5nbGU7XHJcblxyXG4gICAgICAgIGpvaW50LmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/Text2.2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec0e7BB099N25+irOTsMn8d', 'Text2.2');
// script/Text2.2.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.active = false;
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.showText();
          break;
        }
    }
  },
  // init(){
  //     this.node.active = false;
  // },
  showText: function showText() {
    if (!this.node.active) {
      this.node.active = true;
    } else {
      cc.director.loadScene("Scene 2.3"); //场景切换到Scene2.3

      cc.log("change to Scene 2.3");
    }
  },
  // start () {},
  update: function update(dt) {}
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXh0Mi4yLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGV4dExhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJub2RlIiwiYWN0aXZlIiwic3lzdGVtRXZlbnQiLCJvbiIsIm9uS2V5RG93biIsIm9uRGVzdHJveSIsIm9mZiIsImUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJzcGFjZSIsInNob3dUZXh0IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJsb2ciLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0FSLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlQyxFQUFmLENBQWtCLFNBQWxCLEVBQTRCLEtBQUtDLFNBQWpDLEVBQTJDLElBQTNDLEVBRk0sQ0FFMkM7QUFDcEQsR0FaSTtBQWFMQyxFQUFBQSxTQWJLLHVCQWFNO0FBQ1BaLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlSSxHQUFmLENBQW1CLFNBQW5CLEVBQTZCLEtBQUtGLFNBQWxDLEVBQTRDLElBQTVDO0FBQ0gsR0FmSTtBQWdCTEEsRUFBQUEsU0FoQksscUJBZ0JLRyxDQWhCTCxFQWdCTztBQUNSLFlBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNJLFdBQUtmLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxLQUFsQjtBQUF3QjtBQUNwQixlQUFLQyxRQUFMO0FBQ0E7QUFDSDtBQUpMO0FBTUgsR0F2Qkk7QUF5Qkw7QUFDQTtBQUNBO0FBRUFBLEVBQUFBLFFBN0JLLHNCQTZCSztBQUNOLFFBQUcsQ0FBQyxLQUFLWixJQUFMLENBQVVDLE1BQWQsRUFBcUI7QUFDakIsV0FBS0QsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLElBQW5CO0FBQ0gsS0FGRCxNQUVLO0FBQ0RSLE1BQUFBLEVBQUUsQ0FBQ29CLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixXQUF0QixFQURDLENBQ21DOztBQUNwQ3JCLE1BQUFBLEVBQUUsQ0FBQ3NCLEdBQUgsQ0FBTyxxQkFBUDtBQUNIO0FBQ0osR0FwQ0k7QUFzQ0w7QUFFQUMsRUFBQUEsTUF4Q0ssa0JBd0NHQyxFQXhDSCxFQXdDTyxDQUFFO0FBeENULENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gaW5pdCgpe1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgc2hvd1RleHQoKXtcclxuICAgICAgICBpZighdGhpcy5ub2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlOyBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUgMi4zXCIpOyAvL+WcuuaZr+WIh+aNouWIsFNjZW5lMi4zXHJcbiAgICAgICAgICAgIGNjLmxvZyhcImNoYW5nZSB0byBTY2VuZSAyLjNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBzdGFydCAoKSB7fSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script-ywj/GameScore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e37c18Ant5D0rKmuJuKPg8/', 'GameScore');
// Script-ywj/GameScore.js

"use strict";

// let scoreInfo = {
//     time : 30,
//     hitscore : 0,
//     scoreAdd : function(k){
//         this.hitscore +=k;
//     },
// };
module.exports = {
  time: 40,
  hitscore: 0,
  scoreAdd: function scoreAdd(k) {
    this.hitscore += k;
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0LXl3alxcR2FtZVNjb3JlLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ0aW1lIiwiaGl0c2NvcmUiLCJzY29yZUFkZCIsImsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JDLEVBQUFBLElBQUksRUFBRyxFQURNO0FBRWJDLEVBQUFBLFFBQVEsRUFBRyxDQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRyxrQkFBU0MsQ0FBVCxFQUFXO0FBQ2xCLFNBQUtGLFFBQUwsSUFBZUUsQ0FBZjtBQUNIO0FBTFksQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxldCBzY29yZUluZm8gPSB7XHJcbi8vICAgICB0aW1lIDogMzAsXHJcbi8vICAgICBoaXRzY29yZSA6IDAsXHJcbi8vICAgICBzY29yZUFkZCA6IGZ1bmN0aW9uKGspe1xyXG4vLyAgICAgICAgIHRoaXMuaGl0c2NvcmUgKz1rO1xyXG4vLyAgICAgfSxcclxuLy8gfTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICB0aW1lIDogNDAsXHJcbiAgICBoaXRzY29yZSA6IDAsXHJcbiAgICBzY29yZUFkZCA6IGZ1bmN0aW9uKGspe1xyXG4gICAgICAgIHRoaXMuaGl0c2NvcmUrPWs7XHJcbiAgICB9XHJcbn07XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script-ywj/Back.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bb6ah5jlVNTpZPVSGED9qz', 'Back');
// Script/Back.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  toGamey: function toGamey() {
    cc.director.loadScene("Gamey");
  } // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYWNrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJ0b0dhbWV5IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQTtBQUVBQyxFQUFBQSxLQXpCSyxtQkF5QkksQ0FFUixDQTNCSTtBQTZCTEMsRUFBQUEsT0FBTyxFQUFDLG1CQUFVO0FBQ2RMLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLE9BQXRCO0FBQ0gsR0EvQkksQ0FpQ0w7O0FBakNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB0b0dhbWV5OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZXlcIilcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/TextSwitch1.22.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '286fdApVe5GLJ2JqTkdQHJA', 'TextSwitch1.22');
// script/TextSwitch1.22.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '达成结局：DDL克星'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = false;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.node.active = true;
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        cc.director.loadScene("home");
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  // start () {},
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXh0U3dpdGNoMS4yMi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImxlbmd0aCIsInNldFRleHREYXRhIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSztBQUNOLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sQ0FBVjtBQUdBUixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUMsRUFBZixDQUFrQixTQUFsQixFQUE0QixLQUFLQyxTQUFqQyxFQUEyQyxJQUEzQyxFQUpNLENBSTJDO0FBQ3BELEdBWkk7QUFjTEMsRUFBQUEsU0FkSyx1QkFjTTtBQUNQWixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUksR0FBZixDQUFtQixTQUFuQixFQUE2QixLQUFLRixTQUFsQyxFQUE0QyxJQUE1QztBQUNILEdBaEJJO0FBaUJMQSxFQUFBQSxTQWpCSyxxQkFpQktHLENBakJMLEVBaUJPO0FBQ1IsWUFBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0ksV0FBS2YsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWxCO0FBQXdCO0FBQ3BCLGVBQUtDLFlBQUw7QUFDQTtBQUNIO0FBSkw7QUFNSCxHQXhCSTtBQTBCTFosRUFBQUEsSUExQkssZ0JBMEJBYSxXQTFCQSxFQTBCWTtBQUNiLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxFQUFMLEdBQVEsQ0FBUixDQUhhLENBR0g7O0FBQ1YsU0FBS0MsU0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSxTQUFLSixXQUFMLEdBQWlCQSxXQUFqQjtBQUNBLFNBQUtLLElBQUwsQ0FBVUMsTUFBVixHQUFpQixLQUFqQjtBQUNBLFNBQUtQLFlBQUw7QUFDSCxHQWxDSTtBQW9DTEEsRUFBQUEsWUFwQ0ssMEJBb0NTO0FBQ1YsUUFBRyxDQUFDLEtBQUtHLE9BQVQsRUFBaUI7O0FBQ2pCLFFBQUcsRUFBRSxLQUFLRSxTQUFQLEdBQWtCLEtBQUtKLFdBQUwsQ0FBaUJPLE1BQXRDLEVBQTZDO0FBQ3pDLFdBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFpQixJQUFqQjtBQUNBLFdBQUtFLFdBQUwsQ0FBaUIsS0FBS1IsV0FBTCxDQUFpQixLQUFLSSxTQUF0QixDQUFqQjtBQUNILEtBSEQsTUFHSztBQUNELFVBQUcsS0FBS0EsU0FBTCxJQUFrQixLQUFLSixXQUFMLENBQWlCTyxNQUF0QyxFQUE2QztBQUN6QzNCLFFBQUFBLEVBQUUsQ0FBQzZCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNILE9BRkQsTUFHSTtBQUNBLGFBQUtDLFdBQUw7QUFDSDtBQUNKO0FBQ0osR0FqREk7QUFtRExILEVBQUFBLFdBbkRLLHVCQW1ET0ksUUFuRFAsRUFtRGdCO0FBQ2pCLFFBQUcsQ0FBQyxLQUFLVixPQUFULEVBQWlCO0FBQ2pCLFNBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS2xCLFNBQUwsQ0FBZTZCLE1BQWYsR0FBc0IsRUFBdEI7QUFDQSxTQUFLWixPQUFMLEdBQWFXLFFBQVEsQ0FBQ3hCLE9BQXRCO0FBQ0gsR0F4REk7QUF5REx1QixFQUFBQSxXQXpESyx5QkF5RFE7QUFDVCxTQUFLTixJQUFMLENBQVVDLE1BQVYsR0FBaUIsS0FBakI7QUFDSCxHQTNESTtBQTZETDtBQUVBUSxFQUFBQSxNQS9ESyxrQkErREdDLEVBL0RILEVBK0RPO0FBQ1IsUUFBRyxDQUFDLEtBQUtkLE9BQVQsRUFBaUI7QUFDakIsU0FBS0UsRUFBTCxJQUFTWSxFQUFUOztBQUNBLFFBQUcsS0FBS1osRUFBTCxJQUFTLEdBQVosRUFBZ0I7QUFDWixVQUFHLEtBQUtuQixTQUFMLENBQWU2QixNQUFmLENBQXNCTixNQUF0QixHQUE2QixLQUFLTixPQUFMLENBQWFNLE1BQTdDLEVBQW9EO0FBQ2hELGFBQUt2QixTQUFMLENBQWU2QixNQUFmLEdBQXNCLEtBQUtaLE9BQUwsQ0FBYWUsS0FBYixDQUFtQixDQUFuQixFQUFxQixLQUFLaEMsU0FBTCxDQUFlNkIsTUFBZixDQUFzQk4sTUFBdEIsR0FBNkIsQ0FBbEQsQ0FBdEI7QUFDSCxPQUZELE1BRUs7QUFDRCxhQUFLTCxPQUFMLEdBQWEsSUFBYjtBQUNBLGFBQUtELE9BQUwsR0FBYSxJQUFiO0FBQ0g7O0FBQ0QsV0FBS0UsRUFBTCxHQUFRLENBQVI7QUFDSDtBQUNKO0FBM0VJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+i+vuaIkOe7k+WxgO+8mkRETOWFi+aYnyd9XHJcbiAgICAgICAgXSlcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7Ly/nu5HlrprplK7nm5hcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCh0ZXh0RGF0ZUFycil7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgdGhpcy50dD0wOy8v5pKt5pS+55qE5oC75pe26ZW/XHJcbiAgICAgICAgdGhpcy50ZXh0SW5kZXg9LTE7XHJcbiAgICAgICAgdGhpcy50ZXh0RGF0ZUFycj10ZXh0RGF0ZUFycjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubmV4dFRleHREYXRhKClcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dERhdGEodGhpcy50ZXh0RGF0ZUFyclt0aGlzLnRleHRJbmRleF0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRJbmRleCA9PSB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJob21lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG4gICAgfSxcclxuICAgIGNsb3NlRGlhbG9nKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gc3RhcnQgKCkge30sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLm5vd1RleHQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudHQrPWR0O1xyXG4gICAgICAgIGlmKHRoaXMudHQ+PTAuMSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGg8dGhpcy5ub3dUZXh0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9dGhpcy5ub3dUZXh0LnNsaWNlKDAsdGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aCsxKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50dD0wO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/TextSwitch1.21.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c627fFpCgZCFr0mOZRqOAU/', 'TextSwitch1.21');
// script-wyx/TextSwitch1.21.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '你绞尽脑汁再次修改代码，又按下运行。'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        cc.director.loadScene("dizzy"); //场景切换到dizzy

        cc.log("change to Scene dizzy");
        this.textIndex++;
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  // start () {},
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0LXd5eFxcVGV4dFN3aXRjaDEuMjEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0TGFiZWwiLCJMYWJlbCIsIm9uTG9hZCIsImluaXQiLCJjb250ZW50Iiwic3lzdGVtRXZlbnQiLCJvbiIsIm9uS2V5RG93biIsIm9uRGVzdHJveSIsIm9mZiIsImUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJzcGFjZSIsIm5leHRUZXh0RGF0YSIsInRleHREYXRlQXJyIiwibm93VGV4dCIsInRleHRFbmQiLCJ0dCIsInRleHRJbmRleCIsIm5vZGUiLCJhY3RpdmUiLCJsZW5ndGgiLCJzZXRUZXh0RGF0YSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwibG9nIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0ZSIsInN0cmluZyIsInVwZGF0ZSIsImR0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0s7QUFETCxHQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUs7QUFDTixTQUFLQyxJQUFMLENBQVUsQ0FDTjtBQUFDQyxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQURNLENBQVY7QUFHQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVDLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsS0FBS0MsU0FBakMsRUFBMkMsSUFBM0MsRUFKTSxDQUkyQztBQUNwRCxHQVhJO0FBYUxDLEVBQUFBLFNBYkssdUJBYU07QUFDUFosSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FBbkIsRUFBNkIsS0FBS0YsU0FBbEMsRUFBNEMsSUFBNUM7QUFDSCxHQWZJO0FBZ0JMQSxFQUFBQSxTQWhCSyxxQkFnQktHLENBaEJMLEVBZ0JPO0FBQ1IsWUFBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0ksV0FBS2YsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWxCO0FBQXdCO0FBQ3BCLGVBQUtDLFlBQUw7QUFDQTtBQUNIO0FBSkw7QUFNSCxHQXZCSTtBQXlCTFosRUFBQUEsSUF6QkssZ0JBeUJBYSxXQXpCQSxFQXlCWTtBQUNiLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxFQUFMLEdBQVEsQ0FBUixDQUhhLENBR0g7O0FBQ1YsU0FBS0MsU0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSxTQUFLSixXQUFMLEdBQWlCQSxXQUFqQjtBQUNBLFNBQUtLLElBQUwsQ0FBVUMsTUFBVixHQUFpQixJQUFqQjtBQUNBLFNBQUtQLFlBQUw7QUFDSCxHQWpDSTtBQW1DTEEsRUFBQUEsWUFuQ0ssMEJBbUNTO0FBQ1YsUUFBRyxDQUFDLEtBQUtHLE9BQVQsRUFBaUI7O0FBQ2pCLFFBQUcsRUFBRSxLQUFLRSxTQUFQLEdBQWtCLEtBQUtKLFdBQUwsQ0FBaUJPLE1BQXRDLEVBQTZDO0FBQ3pDLFdBQUtDLFdBQUwsQ0FBaUIsS0FBS1IsV0FBTCxDQUFpQixLQUFLSSxTQUF0QixDQUFqQjtBQUNILEtBRkQsTUFFSztBQUNELFVBQUksS0FBS0EsU0FBTCxJQUFrQixLQUFLSixXQUFMLENBQWlCTyxNQUF2QyxFQUE4QztBQUMxQzNCLFFBQUFBLEVBQUUsQ0FBQzZCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixPQUF0QixFQUQwQyxDQUNWOztBQUNoQzlCLFFBQUFBLEVBQUUsQ0FBQytCLEdBQUgsQ0FBTyx1QkFBUDtBQUNBLGFBQUtQLFNBQUw7QUFDSCxPQUpELE1BSUs7QUFDRCxhQUFLUSxXQUFMO0FBQ0g7QUFDSjtBQUNKLEdBaERJO0FBa0RMSixFQUFBQSxXQWxESyx1QkFrRE9LLFFBbERQLEVBa0RnQjtBQUNqQixRQUFHLENBQUMsS0FBS1gsT0FBVCxFQUFpQjtBQUNqQixTQUFLQSxPQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUtsQixTQUFMLENBQWU4QixNQUFmLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS2IsT0FBTCxHQUFhWSxRQUFRLENBQUN6QixPQUF0QjtBQUNILEdBdkRJO0FBd0RMd0IsRUFBQUEsV0F4REsseUJBd0RRO0FBQ1QsU0FBS1AsSUFBTCxDQUFVQyxNQUFWLEdBQWlCLEtBQWpCO0FBQ0gsR0ExREk7QUE0REw7QUFFQVMsRUFBQUEsTUE5REssa0JBOERHQyxFQTlESCxFQThETztBQUNSLFFBQUcsQ0FBQyxLQUFLZixPQUFULEVBQWlCO0FBQ2pCLFNBQUtFLEVBQUwsSUFBU2EsRUFBVDs7QUFDQSxRQUFHLEtBQUtiLEVBQUwsSUFBUyxHQUFaLEVBQWdCO0FBQ1osVUFBRyxLQUFLbkIsU0FBTCxDQUFlOEIsTUFBZixDQUFzQlAsTUFBdEIsR0FBNkIsS0FBS04sT0FBTCxDQUFhTSxNQUE3QyxFQUFvRDtBQUNoRCxhQUFLdkIsU0FBTCxDQUFlOEIsTUFBZixHQUFzQixLQUFLYixPQUFMLENBQWFnQixLQUFiLENBQW1CLENBQW5CLEVBQXFCLEtBQUtqQyxTQUFMLENBQWU4QixNQUFmLENBQXNCUCxNQUF0QixHQUE2QixDQUFsRCxDQUF0QjtBQUNILE9BRkQsTUFFSztBQUNELGFBQUtMLE9BQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS0QsT0FBTCxHQUFhLElBQWI7QUFDSDs7QUFDRCxXQUFLRSxFQUFMLEdBQVEsQ0FBUjtBQUNIO0FBQ0o7QUExRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHRMYWJlbDpjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdChbXHJcbiAgICAgICAgICAgIHtjb250ZW50OifkvaDnu57lsL3ohJHmsYHlho3mrKHkv67mlLnku6PnoIHvvIzlj4jmjInkuIvov5DooYzjgIInfSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93bihlKXtcclxuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGV4dERhdGEoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KHRleHREYXRlQXJyKXtcclxuICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnR0PTA7Ly/mkq3mlL7nmoTmgLvml7bplb9cclxuICAgICAgICB0aGlzLnRleHRJbmRleD0tMTtcclxuICAgICAgICB0aGlzLnRleHREYXRlQXJyPXRleHREYXRlQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG5cclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRJbmRleCA9PSB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJkaXp6eVwiKTsgLy/lnLrmma/liIfmjaLliLBkaXp6eVxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY2hhbmdlIHRvIFNjZW5lIGRpenp5XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0SW5kZXgrKztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG4gICAgfSxcclxuICAgIGNsb3NlRGlhbG9nKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gc3RhcnQgKCkge30sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLm5vd1RleHQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudHQrPWR0O1xyXG4gICAgICAgIGlmKHRoaXMudHQ+PTAuMSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGg8dGhpcy5ub3dUZXh0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9dGhpcy5ub3dUZXh0LnNsaWNlKDAsdGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aCsxKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50dD0wO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/TextSwitch1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0494xtyPdJw5NhOER6rkKc', 'TextSwitch1');
// script/TextSwitch1.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.init([{
      content: '一个小时过去了，你依旧没搞定这个bug。'
    }, {
      content: '你还记得你曾经多少次编错代码，你开始怀疑自己加入机器人社团的决定。'
    }, {
      content: '虽说是儿时的梦想，可繁琐的代码和层出不穷的bug终究成为你的绊脚石。'
    }, {
      content: '和你组队的同学怨声载道，再坚持下去似乎只能成为大家的累赘。'
    }, {
      content: '你叹了口气，决定：'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.node.getChildByName("Button1").active = false;
    this.node.getChildByName("Button2").active = false;
    this.nextTextData();
  },
  // init(){
  //     this.node.getChildByName("Button1").active = false;
  //     this.node.getChildByName("Button2").active = false;
  // },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        this.node.getChildByName("Button1").active = true;
        this.node.getChildByName("Button2").active = true;
        this.textIndex++;
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  // start () {
  // },
  //     setText(){
  //         var str = this.getComponent(cc.Label).string;
  //         var j = 0;
  //         this.getComponent(cc.Label).string = "";
  //         this.schedule(function () {
  //             this.getComponent(cc.Label).string += str[j];
  //             j++;
  //         }, 0.1, str.length - 1, 0.2);
  // }
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXh0U3dpdGNoMS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0MsSUFBTCxDQUFVLENBQ047QUFBQ0MsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FETSxFQUVOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRk0sRUFHTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUhNLEVBSU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FKTSxFQUtOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBTE0sQ0FBVjtBQU9BUixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUMsRUFBZixDQUFrQixTQUFsQixFQUE0QixLQUFLQyxTQUFq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QUFMLENBQWU0QixNQUFmLENBQXNCSixNQUF0QixHQUE2QixDQUFsRCxDQUF0QjtBQUNILE9BRkQsTUFFSztBQUNELGFBQUtOLE9BQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS0QsT0FBTCxHQUFhLElBQWI7QUFDSDs7QUFDRCxXQUFLRSxFQUFMLEdBQVEsQ0FBUjtBQUNIO0FBQ0o7QUFuR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHRMYWJlbDpjYy5MYWJlbCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmluaXQoW1xyXG4gICAgICAgICAgICB7Y29udGVudDon5LiA5Liq5bCP5pe26L+H5Y675LqG77yM5L2g5L6d5pen5rKh5pCe5a6a6L+Z5LiqYnVn44CCJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifkvaDov5jorrDlvpfkvaDmm77nu4/lpJrlsJHmrKHnvJbplJnku6PnoIHvvIzkvaDlvIDlp4vmgIDnlpHoh6rlt7HliqDlhaXmnLrlmajkurrnpL7lm6LnmoTlhrPlrprjgIInfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+iZveivtOaYr+WEv+aXtueahOaipuaDs++8jOWPr+e5geeQkOeahOS7o+eggeWSjOWxguWHuuS4jeept+eahGJ1Z+e7iOeptuaIkOS4uuS9oOeahOe7iuiEmuefs+OAgid9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5ZKM5L2g57uE6Zif55qE5ZCM5a2m5oCo5aOw6L296YGT77yM5YaN5Z2a5oyB5LiL5Y675Ly85LmO5Y+q6IO95oiQ5Li65aSn5a6255qE57Sv6LWY44CCJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifkvaDlj7nkuoblj6PmsJTvvIzlhrPlrprvvJonfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGluaXQoKXtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24xXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbjJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRJbmRleCA9PSB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24xXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24yXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRJbmRleCsrO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0ZSl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPWZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz0nJztcclxuICAgICAgICB0aGlzLm5vd1RleHQ9dGV4dERhdGUuY29udGVudDtcclxuXHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBzdGFydCAoKSB7XHJcbiAgICAvLyB9LFxyXG5cclxuLy8gICAgIHNldFRleHQoKXtcclxuLy8gICAgICAgICB2YXIgc3RyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcclxuLy8gICAgICAgICB2YXIgaiA9IDA7XHJcbi8vICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbi8vICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgKz0gc3RyW2pdO1xyXG4vLyAgICAgICAgICAgICBqKys7XHJcbi8vICAgICAgICAgfSwgMC4xLCBzdHIubGVuZ3RoIC0gMSwgMC4yKTtcclxuLy8gfVxyXG5cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/lookDiaryN.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29b2c77DdRAYp7A2gxlccfS', 'lookDiaryN');
// script/lookDiaryN.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var diary = require('globalVariable');

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.getChildByName("diaryN big").active = false;
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.closeDiary();
          break;
        }
    }
  },
  onclick_diaryN: function onclick_diaryN() {
    //放大效果
    this.node.getChildByName("diaryN big").active = true;
    diary.diaryCollect = diary.diaryCollect + "N";
    cc.log("收集日记" + diary.diaryCollect);
  },
  closeDiary: function closeDiary() {
    if (this.node.getChildByName("diaryN big").active) {
      this.node.active = false;
    }
  },
  start: function start() {} // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb29rRGlhcnlOLmpzIl0sIm5hbWVzIjpbImRpYXJ5IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwic3lzdGVtRXZlbnQiLCJvbiIsIm9uS2V5RG93biIsIm9uRGVzdHJveSIsIm9mZiIsImUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJzcGFjZSIsImNsb3NlRGlhcnkiLCJvbmNsaWNrX2RpYXJ5TiIsImRpYXJ5Q29sbGVjdCIsImxvZyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQW5COztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTixTQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsWUFBekIsRUFBdUNDLE1BQXZDLEdBQWdELEtBQWhEO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxFQUFmLENBQWtCLFNBQWxCLEVBQTRCLEtBQUtDLFNBQWpDLEVBQTJDLElBQTNDLEVBRk0sQ0FFMkM7QUFDcEQsR0FaSTtBQWFMQyxFQUFBQSxTQWJLLHVCQWFNO0FBQ1BYLElBQUFBLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlSSxHQUFmLENBQW1CLFNBQW5CLEVBQTZCLEtBQUtGLFNBQWxDLEVBQTRDLElBQTVDO0FBQ0gsR0FmSTtBQWdCTEEsRUFBQUEsU0FoQksscUJBZ0JLRyxDQWhCTCxFQWdCTztBQUNSLFlBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNJLFdBQUtkLEVBQUUsQ0FBQ2UsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWxCO0FBQXdCO0FBQ3BCLGVBQUtDLFVBQUw7QUFDQTtBQUNIO0FBSkw7QUFNSCxHQXZCSTtBQXlCTEMsRUFBQUEsY0FBYyxFQUFDLDBCQUFVO0FBQ3JCO0FBQ0EsU0FBS2QsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFlBQXpCLEVBQXVDQyxNQUF2QyxHQUFnRCxJQUFoRDtBQUNBVCxJQUFBQSxLQUFLLENBQUNzQixZQUFOLEdBQXFCdEIsS0FBSyxDQUFDc0IsWUFBTixHQUFxQixHQUExQztBQUNBcEIsSUFBQUEsRUFBRSxDQUFDcUIsR0FBSCxDQUFPLFNBQU92QixLQUFLLENBQUNzQixZQUFwQjtBQUNILEdBOUJJO0FBZ0NMRixFQUFBQSxVQWhDSyx3QkFnQ087QUFDUixRQUFHLEtBQUtiLElBQUwsQ0FBVUMsY0FBVixDQUF5QixZQUF6QixFQUF1Q0MsTUFBMUMsRUFBaUQ7QUFDN0MsV0FBS0YsSUFBTCxDQUFVRSxNQUFWLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSixHQXBDSTtBQXNDTGUsRUFBQUEsS0F0Q0ssbUJBc0NJLENBRVIsQ0F4Q0ksQ0EwQ0w7O0FBMUNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxudmFyIGRpYXJ5ID0gcmVxdWlyZSgnZ2xvYmFsVmFyaWFibGUnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFyeU4gYmlnXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhcnkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbmNsaWNrX2RpYXJ5TjpmdW5jdGlvbigpe1xyXG4gICAgICAgIC8v5pS+5aSn5pWI5p6cXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZGlhcnlOIGJpZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGRpYXJ5LmRpYXJ5Q29sbGVjdCA9IGRpYXJ5LmRpYXJ5Q29sbGVjdCArIFwiTlwiO1xyXG4gICAgICAgIGNjLmxvZyhcIuaUtumbhuaXpeiusFwiK2RpYXJ5LmRpYXJ5Q29sbGVjdCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb3NlRGlhcnkoKXtcclxuICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFyeU4gYmlnXCIpLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/TextSwitch2.31.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a8f3H+ASNEH6Nbhw+1z2nH', 'TextSwitch2.31');
// script/TextSwitch2.31.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '达成结局：信仰之跃'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = false;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.node.active = true;
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        cc.director.loadScene("home");
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  // start () {},
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXh0U3dpdGNoMi4zMS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImxlbmd0aCIsInNldFRleHREYXRhIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSztBQUNOLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sQ0FBVjtBQUdBUixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUMsRUFBZixDQUFrQixTQUFsQixFQUE0QixLQUFLQyxTQUFqQyxFQUEyQyxJQUEzQyxFQUpNLENBSTJDO0FBQ3BELEdBWkk7QUFjTEMsRUFBQUEsU0FkSyx1QkFjTTtBQUNQWixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUksR0FBZixDQUFtQixTQUFuQixFQUE2QixLQUFLRixTQUFsQyxFQUE0QyxJQUE1QztBQUNILEdBaEJJO0FBaUJMQSxFQUFBQSxTQWpCSyxxQkFpQktHLENBakJMLEVBaUJPO0FBQ1IsWUFBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0ksV0FBS2YsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWxCO0FBQXdCO0FBQ3BCLGVBQUtDLFlBQUw7QUFDQTtBQUNIO0FBSkw7QUFNSCxHQXhCSTtBQTBCTFosRUFBQUEsSUExQkssZ0JBMEJBYSxXQTFCQSxFQTBCWTtBQUNiLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxFQUFMLEdBQVEsQ0FBUixDQUhhLENBR0g7O0FBQ1YsU0FBS0MsU0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSxTQUFLSixXQUFMLEdBQWlCQSxXQUFqQjtBQUNBLFNBQUtLLElBQUwsQ0FBVUMsTUFBVixHQUFpQixLQUFqQjtBQUNBLFNBQUtQLFlBQUw7QUFDSCxHQWxDSTtBQW9DTEEsRUFBQUEsWUFwQ0ssMEJBb0NTO0FBQ1YsUUFBRyxDQUFDLEtBQUtHLE9BQVQsRUFBaUI7O0FBQ2pCLFFBQUcsRUFBRSxLQUFLRSxTQUFQLEdBQWtCLEtBQUtKLFdBQUwsQ0FBaUJPLE1BQXRDLEVBQTZDO0FBQ3pDLFdBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFpQixJQUFqQjtBQUNBLFdBQUtFLFdBQUwsQ0FBaUIsS0FBS1IsV0FBTCxDQUFpQixLQUFLSSxTQUF0QixDQUFqQjtBQUNILEtBSEQsTUFHSztBQUNELFVBQUcsS0FBS0EsU0FBTCxJQUFrQixLQUFLSixXQUFMLENBQWlCTyxNQUF0QyxFQUE2QztBQUN6QzNCLFFBQUFBLEVBQUUsQ0FBQzZCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNILE9BRkQsTUFHSTtBQUNBLGFBQUtDLFdBQUw7QUFDSDtBQUNKO0FBQ0osR0FqREk7QUFtRExILEVBQUFBLFdBbkRLLHVCQW1ET0ksUUFuRFAsRUFtRGdCO0FBQ2pCLFFBQUcsQ0FBQyxLQUFLVixPQUFULEVBQWlCO0FBQ2pCLFNBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS2xCLFNBQUwsQ0FBZTZCLE1BQWYsR0FBc0IsRUFBdEI7QUFDQSxTQUFLWixPQUFMLEdBQWFXLFFBQVEsQ0FBQ3hCLE9BQXRCO0FBQ0gsR0F4REk7QUF5REx1QixFQUFBQSxXQXpESyx5QkF5RFE7QUFDVCxTQUFLTixJQUFMLENBQVVDLE1BQVYsR0FBaUIsS0FBakI7QUFDSCxHQTNESTtBQTZETDtBQUVBUSxFQUFBQSxNQS9ESyxrQkErREdDLEVBL0RILEVBK0RPO0FBQ1IsUUFBRyxDQUFDLEtBQUtkLE9BQVQsRUFBaUI7QUFDakIsU0FBS0UsRUFBTCxJQUFTWSxFQUFUOztBQUNBLFFBQUcsS0FBS1osRUFBTCxJQUFTLEdBQVosRUFBZ0I7QUFDWixVQUFHLEtBQUtuQixTQUFMLENBQWU2QixNQUFmLENBQXNCTixNQUF0QixHQUE2QixLQUFLTixPQUFMLENBQWFNLE1BQTdDLEVBQW9EO0FBQ2hELGFBQUt2QixTQUFMLENBQWU2QixNQUFmLEdBQXNCLEtBQUtaLE9BQUwsQ0FBYWUsS0FBYixDQUFtQixDQUFuQixFQUFxQixLQUFLaEMsU0FBTCxDQUFlNkIsTUFBZixDQUFzQk4sTUFBdEIsR0FBNkIsQ0FBbEQsQ0FBdEI7QUFDSCxPQUZELE1BRUs7QUFDRCxhQUFLTCxPQUFMLEdBQWEsSUFBYjtBQUNBLGFBQUtELE9BQUwsR0FBYSxJQUFiO0FBQ0g7O0FBQ0QsV0FBS0UsRUFBTCxHQUFRLENBQVI7QUFDSDtBQUNKO0FBM0VJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+i+vuaIkOe7k+WxgO+8muS/oeS7sOS5i+i3gyd9XHJcbiAgICAgICAgXSlcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7Ly/nu5HlrprplK7nm5hcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCh0ZXh0RGF0ZUFycil7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgdGhpcy50dD0wOy8v5pKt5pS+55qE5oC75pe26ZW/XHJcbiAgICAgICAgdGhpcy50ZXh0SW5kZXg9LTE7XHJcbiAgICAgICAgdGhpcy50ZXh0RGF0ZUFycj10ZXh0RGF0ZUFycjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubmV4dFRleHREYXRhKClcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dERhdGEodGhpcy50ZXh0RGF0ZUFyclt0aGlzLnRleHRJbmRleF0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRJbmRleCA9PSB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJob21lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG4gICAgfSxcclxuICAgIGNsb3NlRGlhbG9nKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gc3RhcnQgKCkge30sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLm5vd1RleHQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudHQrPWR0O1xyXG4gICAgICAgIGlmKHRoaXMudHQ+PTAuMSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGg8dGhpcy5ub3dUZXh0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9dGhpcy5ub3dUZXh0LnNsaWNlKDAsdGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aCsxKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50dD0wO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/globalVariable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53256xb2ftF46P3FPr9DnyQ', 'globalVariable');
// script/globalVariable.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
module.exports = {
  diaryCollect: "",
  //NOPE日记收集情况
  consciousNumber: 5 //初始理智值

};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnbG9iYWxWYXJpYWJsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZGlhcnlDb2xsZWN0IiwiY29uc2Npb3VzTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYkMsRUFBQUEsWUFBWSxFQUFFLEVBREQ7QUFDSztBQUNsQkMsRUFBQUEsZUFBZSxFQUFFLENBRkosQ0FFTTs7QUFGTixDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkaWFyeUNvbGxlY3Q6IFwiXCIsIC8vTk9QReaXpeiusOaUtumbhuaDheWGtVxyXG4gICAgY29uc2Npb3VzTnVtYmVyOiA1IC8v5Yid5aeL55CG5pm65YC8XHJcbn07XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/TextSwitch1.1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5b9dwZM+9IE4zmdO1LOxwZ', 'TextSwitch1.1');
// script/TextSwitch1.1.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label,
    music: cc.AudioSource
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.init([{
      content: '十分钟过去了……'
    }]);
    this.music.play();
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.node.getChildByName("Button1").active = false;
    this.node.getChildByName("Button2").active = false;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        this.node.getChildByName("Button1").active = true;
        this.node.getChildByName("Button2").active = true;
        this.textIndex++;
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  // start () {},
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXh0U3dpdGNoMS4xLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGV4dExhYmVsIiwiTGFiZWwiLCJtdXNpYyIsIkF1ZGlvU291cmNlIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJwbGF5Iiwic3lzdGVtRXZlbnQiLCJvbiIsIm9uS2V5RG93biIsIm9uRGVzdHJveSIsIm9mZiIsImUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJzcGFjZSIsIm5leHRUZXh0RGF0YSIsInRleHREYXRlQXJyIiwibm93VGV4dCIsInRleHRFbmQiLCJ0dCIsInRleHRJbmRleCIsIm5vZGUiLCJhY3RpdmUiLCJnZXRDaGlsZEJ5TmFtZSIsImxlbmd0aCIsInNldFRleHREYXRhIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0ZSIsInN0cmluZyIsInVwZGF0ZSIsImR0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0ssS0FETDtBQUVSQyxJQUFBQSxLQUFLLEVBQUNOLEVBQUUsQ0FBQ087QUFGRCxHQUhQO0FBUUw7QUFFQUMsRUFBQUEsTUFWSyxvQkFVSztBQUNOLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sQ0FBVjtBQUdBLFNBQUtKLEtBQUwsQ0FBV0ssSUFBWDtBQUNBWCxJQUFBQSxFQUFFLENBQUNZLFdBQUgsQ0FBZUMsRUFBZixDQUFrQixTQUFsQixFQUE0QixLQUFLQyxTQUFqQyxFQUEyQyxJQUEzQyxFQUxNLENBSzJDO0FBQ3BELEdBaEJJO0FBaUJMQyxFQUFBQSxT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QUFDRCxXQUFLRSxFQUFMLEdBQVEsQ0FBUjtBQUNIO0FBQ0o7QUFoRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHRMYWJlbDpjYy5MYWJlbCxcclxuICAgICAgICBtdXNpYzpjYy5BdWRpb1NvdXJjZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmluaXQoW1xyXG4gICAgICAgICAgICB7Y29udGVudDon5Y2B5YiG6ZKf6L+H5Y675LqG4oCm4oCmJ31cclxuICAgICAgICBdKVxyXG4gICAgICAgIHRoaXMubXVzaWMucGxheSgpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG5cclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRJbmRleCA9PSB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24xXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24yXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRJbmRleCsrO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0VGV4dERhdGEodGV4dERhdGUpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD1mYWxzZTtcclxuICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9Jyc7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PXRleHREYXRlLmNvbnRlbnQ7XHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBzdGFydCAoKSB7fSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/TextSwitch2.1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fccaxbF+FL46jDGs6J1etg', 'TextSwitch2.1');
// script/TextSwitch2.1.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '你从头晕中回过神来。'
    }, {
      content: '发生什么了？你竟睡了一夜？'
    }, {
      content: '机器人的程序还没修改完，今天怎么和队友交差?'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0;
    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        cc.director.loadScene("Scene 2.2"); //场景切换到Scene2.2

        cc.log("change to Scene 2.2");
        this.textIndex++;
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  // start () {},
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXh0U3dpdGNoMi4xLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGV4dExhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJpbml0IiwiY29udGVudCIsInN5c3RlbUV2ZW50Iiwib24iLCJvbktleURvd24iLCJvbkRlc3Ryb3kiLCJvZmYiLCJlIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwic3BhY2UiLCJuZXh0VGV4dERhdGEiLCJ0ZXh0RGF0ZUFyciIsIm5vd1RleHQiLCJ0ZXh0RW5kIiwidHQiLCJ0ZXh0SW5kZXgiLCJub2RlIiwiYWN0aXZlIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImxvZyIsImNsb3NlRGlhbG9nIiwidGV4dERhdGUiLCJzdHJpbmciLCJ1cGRhdGUiLCJkdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFDSixFQUFFLENBQUNLO0FBREwsR0FIUDtBQU9MQyxFQUFBQSxNQVBLLG9CQU9LO0FBQ04sU0FBS0MsSUFBTCxDQUFVLENBQ047QUFBQ0MsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FETSxFQUVOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRk0sRUFHTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUhNLENBQVY7QUFNQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVDLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsS0FBS0MsU0FBakMsRUFBMkMsSUFBM0MsRUFQTSxDQU8yQztBQUNwRCxHQWZJO0FBaUJMQyxFQUFBQSxTQWpCSyx1QkFpQk07QUFDUFosSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FBbkIsRUFBNkIsS0FBS0YsU0FBbEMsRUFBNEMsSUFBNUM7QUFDSCxHQW5CSTtBQW9CTEEsRUFBQUEsU0FwQksscUJBb0JLRyxDQXBCTCxFQW9CTztBQUNSLFlBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNJLFdBQUtmLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxLQUFsQjtBQUF3QjtBQUNwQixlQUFLQyxZQUFMO0FBQ0E7QUFDSDtBQUpMO0FBTUgsR0EzQkk7QUE2QkxaLEVBQUFBLElBN0JLLGdCQTZCQWEsV0E3QkEsRUE2Qlk7QUFDYixTQUFLQyxPQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsRUFBTCxHQUFRLENBQVI7QUFDQSxTQUFLQyxTQUFMLEdBQWUsQ0FBQyxDQUFoQjtBQUNBLFNBQUtKLFdBQUwsR0FBaUJBLFdBQWpCO0FBQ0EsU0FBS0ssSUFBTCxDQUFVQyxNQUFWLEdBQWlCLElBQWpCO0FBQ0EsU0FBS1AsWUFBTDtBQUNILEdBckNJO0FBdUNMQSxFQUFBQSxZQXZDSywwQkF1Q1M7QUFDVixRQUFHLENBQUMsS0FBS0csT0FBVCxFQUFpQjs7QUFDakIsUUFBRyxFQUFFLEtBQUtFLFNBQVAsR0FBa0IsS0FBS0osV0FBTCxDQUFpQk8sTUFBdEMsRUFBNkM7QUFDekMsV0FBS0MsV0FBTCxDQUFpQixLQUFLUixXQUFMLENBQWlCLEtBQUtJLFNBQXRCLENBQWpCO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsVUFBSSxLQUFLQSxTQUFMLElBQWtCLEtBQUtKLFdBQUwsQ0FBaUJPLE1BQXZDLEVBQThDO0FBQzFDM0IsUUFBQUEsRUFBRSxDQUFDNkIsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCLEVBRDBDLENBQ047O0FBQ3BDOUIsUUFBQUEsRUFBRSxDQUFDK0IsR0FBSCxDQUFPLHFCQUFQO0FBQ0EsYUFBS1AsU0FBTDtBQUNILE9BSkQsTUFJSztBQUNELGFBQUtRLFdBQUw7QUFDSDtBQUNKO0FBQ0osR0FwREk7QUFzRExKLEVBQUFBLFdBdERLLHVCQXNET0ssUUF0RFAsRUFzRGdCO0FBQ2pCLFFBQUcsQ0FBQyxLQUFLWCxPQUFULEVBQWlCO0FBQ2pCLFNBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS2xCLFNBQUwsQ0FBZThCLE1BQWYsR0FBc0IsRUFBdEI7QUFDQSxTQUFLYixPQUFMLEdBQWFZLFFBQVEsQ0FBQ3pCLE9BQXRCO0FBQ0gsR0EzREk7QUE0REx3QixFQUFBQSxXQTVESyx5QkE0RFE7QUFDVCxTQUFLUCxJQUFMLENBQVVDLE1BQVYsR0FBaUIsS0FBakI7QUFDSCxHQTlESTtBQWdFTDtBQUVBUyxFQUFBQSxNQWxFSyxrQkFrRUdDLEVBbEVILEVBa0VPO0FBQ1IsUUFBRyxDQUFDLEtBQUtmLE9BQVQsRUFBaUI7QUFDakIsU0FBS0UsRUFBTCxJQUFTYSxFQUFUOztBQUNBLFFBQUcsS0FBS2IsRUFBTCxJQUFTLEdBQVosRUFBZ0I7QUFDWixVQUFHLEtBQUtuQixTQUFMLENBQWU4QixNQUFmLENBQXNCUCxNQUF0QixHQUE2QixLQUFLTixPQUFMLENBQWFNLE1BQTdDLEVBQW9EO0FBQ2hELGFBQUt2QixTQUFMLENBQWU4QixNQUFmLEdBQXNCLEtBQUtiLE9BQUwsQ0FBYWdCLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsS0FBS2pDLFNBQUwsQ0FBZThCLE1BQWYsQ0FBc0JQLE1BQXRCLEdBQTZCLENBQWxELENBQXRCO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsYUFBS0wsT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFDSjtBQTlFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGV4dExhYmVsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdChbXHJcbiAgICAgICAgICAgIHtjb250ZW50OifkvaDku47lpLTmmZXkuK3lm57ov4fnpZ7mnaXjgIInfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+WPkeeUn+S7gOS5iOS6hu+8n+S9oOern+edoeS6huS4gOWknO+8nyd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5py65Zmo5Lq655qE56iL5bqP6L+Y5rKh5L+u5pS55a6M77yM5LuK5aSp5oCO5LmI5ZKM6Zif5Y+L5Lqk5beuPyd9XHJcblxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDtcclxuICAgICAgICB0aGlzLnRleHRJbmRleD0tMTtcclxuICAgICAgICB0aGlzLnRleHREYXRlQXJyPXRleHREYXRlQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG5cclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRJbmRleCA9PSB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTY2VuZSAyLjJcIik7IC8v5Zy65pmv5YiH5o2i5YiwU2NlbmUyLjJcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNoYW5nZSB0byBTY2VuZSAyLjJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRJbmRleCsrO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0VGV4dERhdGEodGV4dERhdGUpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD1mYWxzZTtcclxuICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9Jyc7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PXRleHREYXRlLmNvbnRlbnQ7XHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBzdGFydCAoKSB7fSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/lookDiaryO.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78346lY1ctF44rZiZKMhxP/', 'lookDiaryO');
// script/lookDiaryO.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var diary = require('globalVariable');

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.getChildByName("diaryO big").active = false;
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.closeDiary();
          break;
        }
    }
  },
  onclick_diaryO: function onclick_diaryO() {
    //放大效果
    this.node.getChildByName("diaryO big").active = true;
    diary.diaryCollect = diary.diaryCollect + "O";
    cc.log("收集日记" + diary.diaryCollect);
  },
  closeDiary: function closeDiary() {
    if (this.node.getChildByName("diaryO big").active) {
      this.node.active = false;
    }
  },
  start: function start() {} // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb29rRGlhcnlPLmpzIl0sIm5hbWVzIjpbImRpYXJ5IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwic3lzdGVtRXZlbnQiLCJvbiIsIm9uS2V5RG93biIsIm9uRGVzdHJveSIsIm9mZiIsImUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJzcGFjZSIsImNsb3NlRGlhcnkiLCJvbmNsaWNrX2RpYXJ5TyIsImRpYXJ5Q29sbGVjdCIsImxvZyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQW5COztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTixTQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsWUFBekIsRUFBdUNDLE1BQXZDLEdBQWdELEtBQWhEO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxFQUFmLENBQWtCLFNBQWxCLEVBQTRCLEtBQUtDLFNBQWpDLEVBQTJDLElBQTNDLEVBRk0sQ0FFMkM7QUFDcEQsR0FaSTtBQWFMQyxFQUFBQSxTQWJLLHVCQWFNO0FBQ1BYLElBQUFBLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlSSxHQUFmLENBQW1CLFNBQW5CLEVBQTZCLEtBQUtGLFNBQWxDLEVBQTRDLElBQTVDO0FBQ0gsR0FmSTtBQWdCTEEsRUFBQUEsU0FoQksscUJBZ0JLRyxDQWhCTCxFQWdCTztBQUNSLFlBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNJLFdBQUtkLEVBQUUsQ0FBQ2UsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWxCO0FBQXdCO0FBQ3BCLGVBQUtDLFVBQUw7QUFDQTtBQUNIO0FBSkw7QUFNSCxHQXZCSTtBQXlCTEMsRUFBQUEsY0FBYyxFQUFDLDBCQUFVO0FBQ3JCO0FBQ0EsU0FBS2QsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFlBQXpCLEVBQXVDQyxNQUF2QyxHQUFnRCxJQUFoRDtBQUNBVCxJQUFBQSxLQUFLLENBQUNzQixZQUFOLEdBQXFCdEIsS0FBSyxDQUFDc0IsWUFBTixHQUFxQixHQUExQztBQUNBcEIsSUFBQUEsRUFBRSxDQUFDcUIsR0FBSCxDQUFPLFNBQU92QixLQUFLLENBQUNzQixZQUFwQjtBQUNILEdBOUJJO0FBZ0NMRixFQUFBQSxVQWhDSyx3QkFnQ087QUFDUixRQUFHLEtBQUtiLElBQUwsQ0FBVUMsY0FBVixDQUF5QixZQUF6QixFQUF1Q0MsTUFBMUMsRUFBaUQ7QUFDN0MsV0FBS0YsSUFBTCxDQUFVRSxNQUFWLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSixHQXBDSTtBQXNDTGUsRUFBQUEsS0F0Q0ssbUJBc0NJLENBRVIsQ0F4Q0ksQ0EwQ0w7O0FBMUNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxudmFyIGRpYXJ5ID0gcmVxdWlyZSgnZ2xvYmFsVmFyaWFibGUnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFyeU8gYmlnXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhcnkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbmNsaWNrX2RpYXJ5TzpmdW5jdGlvbigpe1xyXG4gICAgICAgIC8v5pS+5aSn5pWI5p6cXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZGlhcnlPIGJpZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGRpYXJ5LmRpYXJ5Q29sbGVjdCA9IGRpYXJ5LmRpYXJ5Q29sbGVjdCArIFwiT1wiO1xyXG4gICAgICAgIGNjLmxvZyhcIuaUtumbhuaXpeiusFwiK2RpYXJ5LmRpYXJ5Q29sbGVjdCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb3NlRGlhcnkoKXtcclxuICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFyeU8gYmlnXCIpLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script-ywj/GameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbeb7RnNFJEkZxVZSsHgJ0X', 'GameMgr');
// Script-ywj/GameMgr.js

"use strict";

// import { hitscore } from "GameScore";
var score = require("GameScore");

var conscious = require('globalVariable');

cc.Class({
  "extends": cc.Component,
  properties: {
    score: {
      type: cc.Label,
      "default": null,
      tooltip: "得分显示Label组件"
    },
    timeBar: {
      type: cc.ProgressBar,
      "default": null,
      tooltip: "时间进度条"
    },
    losesound: {
      type: cc.AudioClip,
      "default": null
    },
    winsound: {
      type: cc.AudioClip,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var limitTime = score.time; //游戏限时总时间

    this.schedule(function () {
      if (score.time > 0) {
        score.time--; //倒计时

        this.timeBar.progress = score.time / limitTime;
      } else {
        if (score.hitscore >= 20) {
          // this.winsound.play();
          cc.audioEngine.play(this.winsound);
          cc.director.loadScene("Winy");
        } else {
          // this.losesound.play();
          conscious.consciousNumber -= 1;
          cc.audioEngine.play(this.losesound);
          cc.director.loadScene("Losey");
          score.time = limitTime;
          score.hitscore = 0;
        }
      }
    }, 1);
  },
  start: function start() {},
  update: function update(dt) {
    this.score.string = score.hitscore + "/20"; //加分
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0LXl3alxcR2FtZU1nci5qcyJdLCJuYW1lcyI6WyJzY29yZSIsInJlcXVpcmUiLCJjb25zY2lvdXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJMYWJlbCIsInRvb2x0aXAiLCJ0aW1lQmFyIiwiUHJvZ3Jlc3NCYXIiLCJsb3Nlc291bmQiLCJBdWRpb0NsaXAiLCJ3aW5zb3VuZCIsIm9uTG9hZCIsImxpbWl0VGltZSIsInRpbWUiLCJzY2hlZHVsZSIsInByb2dyZXNzIiwiaGl0c2NvcmUiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImNvbnNjaW91c051bWJlciIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFJQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQW5COztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLGdCQUFELENBQXZCOztBQUNBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUk4sSUFBQUEsS0FBSyxFQUFHO0FBQ0pPLE1BQUFBLElBQUksRUFBQ0osRUFBRSxDQUFDSyxLQURKO0FBRUosaUJBQVEsSUFGSjtBQUdKQyxNQUFBQSxPQUFPLEVBQUM7QUFISixLQURBO0FBTVJDLElBQUFBLE9BQU8sRUFBRztBQUNOSCxNQUFBQSxJQUFJLEVBQUNKLEVBQUUsQ0FBQ1EsV0FERjtBQUVOLGlCQUFRLElBRkY7QUFHTkYsTUFBQUEsT0FBTyxFQUFDO0FBSEYsS0FORjtBQVdSRyxJQUFBQSxTQUFTLEVBQUc7QUFDUkwsTUFBQUEsSUFBSSxFQUFHSixFQUFFLENBQUNVLFNBREY7QUFFUixpQkFBVTtBQUZGLEtBWEo7QUFlUkMsSUFBQUEsUUFBUSxFQUFHO0FBQ1BQLE1BQUFBLElBQUksRUFBR0osRUFBRSxDQUFDVSxTQURIO0FBRVAsaUJBQVU7QUFGSDtBQWZILEdBSFA7QUF3Qkw7QUFFQUUsRUFBQUEsTUExQkssb0JBMEJLO0FBQ04sUUFBSUMsU0FBUyxHQUFHaEIsS0FBSyxDQUFDaUIsSUFBdEIsQ0FETSxDQUNxQjs7QUFDM0IsU0FBS0MsUUFBTCxDQUFjLFlBQVU7QUFDcEIsVUFBR2xCLEtBQUssQ0FBQ2lCLElBQU4sR0FBYSxDQUFoQixFQUFrQjtBQUNkakIsUUFBQUEsS0FBSyxDQUFDaUIsSUFBTixHQURjLENBQ0Q7O0FBQ2IsYUFBS1AsT0FBTCxDQUFhUyxRQUFiLEdBQXdCbkIsS0FBSyxDQUFDaUIsSUFBTixHQUFhRCxTQUFyQztBQUNILE9BSEQsTUFHSztBQUNELFlBQUdoQixLQUFLLENBQUNvQixRQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ25CO0FBQ0FqQixVQUFBQSxFQUFFLENBQUNrQixXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS1IsUUFBekI7QUFDQVgsVUFBQUEsRUFBRSxDQUFDb0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0gsU0FKRCxNQUlLO0FBQ0Q7QUFDQXRCLFVBQUFBLFNBQVMsQ0FBQ3VCLGVBQVYsSUFBNkIsQ0FBN0I7QUFDQXRCLFVBQUFBLEVBQUUsQ0FBQ2tCLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLVixTQUF6QjtBQUNBVCxVQUFBQSxFQUFFLENBQUNvQixRQUFILENBQVlDLFNBQVosQ0FBc0IsT0FBdEI7QUFDQXhCLFVBQUFBLEtBQUssQ0FBQ2lCLElBQU4sR0FBYUQsU0FBYjtBQUNBaEIsVUFBQUEsS0FBSyxDQUFDb0IsUUFBTixHQUFpQixDQUFqQjtBQUNIO0FBQ0o7QUFDSixLQWxCRCxFQWtCRSxDQWxCRjtBQW1CSCxHQS9DSTtBQWlETE0sRUFBQUEsS0FqREssbUJBaURJLENBRVIsQ0FuREk7QUFxRExDLEVBQUFBLE1BckRLLGtCQXFER0MsRUFyREgsRUFxRE87QUFDUixTQUFLNUIsS0FBTCxDQUFXNkIsTUFBWCxHQUFvQjdCLEtBQUssQ0FBQ29CLFFBQU4sR0FBZSxLQUFuQyxDQURRLENBQ2lDO0FBQzVDO0FBdkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGhpdHNjb3JlIH0gZnJvbSBcIkdhbWVTY29yZVwiO1xyXG52YXIgc2NvcmUgPSByZXF1aXJlKFwiR2FtZVNjb3JlXCIpO1xyXG52YXIgY29uc2Npb3VzID0gcmVxdWlyZSgnZ2xvYmFsVmFyaWFibGUnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzY29yZSA6IHtcclxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0b29sdGlwOlwi5b6X5YiG5pi+56S6TGFiZWznu4Tku7ZcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWVCYXIgOiB7XHJcbiAgICAgICAgICAgIHR5cGU6Y2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdG9vbHRpcDpcIuaXtumXtOi/m+W6puadoVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9zZXNvdW5kIDoge1xyXG4gICAgICAgICAgICB0eXBlIDogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2luc291bmQgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBsaW1pdFRpbWUgPSBzY29yZS50aW1lOy8v5ri45oiP6ZmQ5pe25oC75pe26Ze0XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZihzY29yZS50aW1lID4gMCl7XHJcbiAgICAgICAgICAgICAgICBzY29yZS50aW1lLS07Ly/lgJLorqHml7ZcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJhci5wcm9ncmVzcyA9IHNjb3JlLnRpbWUgLyBsaW1pdFRpbWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmUuaGl0c2NvcmUgPj0yMCl7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLndpbnNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMud2luc291bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIldpbnlcIik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvc2Vzb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc2Npb3VzLmNvbnNjaW91c051bWJlciAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5sb3Nlc291bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvc2V5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlLnRpbWUgPSBsaW1pdFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUuaGl0c2NvcmUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwxKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gc2NvcmUuaGl0c2NvcmUrXCIvMjBcIjsvL+WKoOWIhlxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/dizzySwitch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd373Fc8PBO1LqfC/bAAPBu', 'dizzySwitch');
// script/dizzySwitch.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextScene();
          break;
        }
    }
  },
  nextScene: function nextScene() {
    cc.director.loadScene("Scene 2.1"); //场景切换到Scene2.1
  },
  start: function start() {} // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkaXp6eVN3aXRjaC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInN5c3RlbUV2ZW50Iiwib24iLCJvbktleURvd24iLCJvbkRlc3Ryb3kiLCJvZmYiLCJlIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwic3BhY2UiLCJuZXh0U2NlbmUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTkosSUFBQUEsRUFBRSxDQUFDSyxXQUFILENBQWVDLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsS0FBS0MsU0FBakMsRUFBMkMsSUFBM0MsRUFETSxDQUMyQztBQUNwRCxHQVhJO0FBYUxDLEVBQUFBLFNBYkssdUJBYU07QUFDUFIsSUFBQUEsRUFBRSxDQUFDSyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FBbkIsRUFBNkIsS0FBS0YsU0FBbEMsRUFBNEMsSUFBNUM7QUFDSCxHQWZJO0FBZ0JMQSxFQUFBQSxTQWhCSyxxQkFnQktHLENBaEJMLEVBZ0JPO0FBQ1IsWUFBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0ksV0FBS1gsRUFBRSxDQUFDWSxLQUFILENBQVNDLEdBQVQsQ0FBYUMsS0FBbEI7QUFBd0I7QUFDcEIsZUFBS0MsU0FBTDtBQUNBO0FBQ0g7QUFKTDtBQU1ILEdBdkJJO0FBeUJMQSxFQUFBQSxTQXpCSyx1QkF5Qk07QUFDUGYsSUFBQUEsRUFBRSxDQUFDZ0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCLEVBRE8sQ0FDNkI7QUFDdkMsR0EzQkk7QUE2QkxDLEVBQUFBLEtBN0JLLG1CQTZCSSxDQUVSLENBL0JJLENBaUNMOztBQWpDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRTY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5leHRTY2VuZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNjZW5lIDIuMVwiKTsgLy/lnLrmma/liIfmjaLliLBTY2VuZTIuMVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/SearchScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '352c4gQ66pMZobBoHL/mkjj', 'SearchScript');
// script-wyx/SearchScript.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    Textindex: cc.Integer
  },
  onLoad: function onLoad() {
    this.Textindex = 0;
    this.node.active = false;
    this.node.getChildByName("Button1").active = false;
    this.node.getChildByName("Button2").active = false;
    this.node.getChildByName("Button3").active = false;
    this.node.getChildByName("Button4").active = false;
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.closeText();
          break;
        }
    }
  },
  on_btn_onclick_phone: function on_btn_onclick_phone() {
    this.node.active = true;
    var str = "怎么是星期八？信号也没了，破手机肯定是坏了，该换台新的了。";
    var j = 0;
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[j];
      j++;
    }, 0.1, str.length - 1, 0.2);
  },
  on_btn_onclick_laptop: function on_btn_onclick_laptop() {
    this.node.active = true;
    var str = "你的电脑烫得动不了，似乎在运行复杂的程序。";
    var j = 0;
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[j];
      j++;
    }, 0.1, str.length - 1, 0.2);
  },
  on_btn_onclick_door: function on_btn_onclick_door() {
    this.node.active = true;
    var str = "门被锁上了，需要钥匙才能打开。";
    var j = 0;
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[j];
      j++;
    }, 0.1, str.length - 1, 0.2);
  },
  on_btn_onclick_window2: function on_btn_onclick_window2() {
    this.node.active = true;
    var str = "窗户是打开的！但是太高了，没有办法出去呢。";
    var j = 0;
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[j];
      j++;
    }, 0.1, str.length - 1, 0.2);
  },
  on_btn_onclick_window: function on_btn_onclick_window() {
    this.Textindex = 0;
    this.node.active = true;
    var str = "窗户半开着。";
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[this.Textindex];
      this.Textindex++;
    }, 0.1, str.length - 1, 0.2);
  },
  on_btn_onclick_desk: function on_btn_onclick_desk() {
    this.Textindex = 0;
    this.node.active = true;
    var str = "试试把桌子堆在一起看看吧！";
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[this.Textindex];
      this.Textindex++;
    }, 0.1, str.length - 1, 0.2);
  },
  closeText: function closeText() {
    cc.log(this.Textindex);

    if (this.Textindex == 6) {
      this.node.getChildByName("Button1").active = true;
      this.node.getChildByName("Button2").active = true;
      this.node.getChildByName("Button3").active = true;
    } else {
      if (this.Textindex == 13) {
        this.node.getChildByName("Button4").active = true;
      } else {
        if (this.Textindex == 0) {
          this.node.active = false;
        }
      }
    }

    this.Textindex = 0;
  },
  onclick_Button4: function onclick_Button4() {
    //场景切换到堆桌子小游戏
    cc.director.loadScene("Game");
  },
  onclick_Button1: function onclick_Button1() {
    cc.director.loadScene("Scene 2.31"); //场景切换到Scene2.31

    cc.log("change to Scene 2.31");
  },
  onclick_Button2: function onclick_Button2() {
    this.node.getChildByName("Button1").active = false;
    this.node.getChildByName("Button2").active = false;
    this.node.getChildByName("Button3").active = false;
    var str = "没有人应答。";
    var j = 0;
    this.node.getChildByName("TextLabel").getComponent(cc.Label).string = "";
    this.schedule(function () {
      this.node.getChildByName("TextLabel").getComponent(cc.Label).string += str[j];
      j++;
    }, 0.1, str.length - 1, 0.2);
  },
  onclick_Button3: function onclick_Button3() {
    this.node.getChildByName("Button1").active = false;
    this.node.getChildByName("Button2").active = false;
    this.node.getChildByName("Button3").active = false;
    this.node.active = false;
  },
  // LIFE-CYCLE CALLBACKS:
  start: function start() {} // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0LXd5eFxcU2VhcmNoU2NyaXB0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiVGV4dGluZGV4IiwiSW50ZWdlciIsIm9uTG9hZCIsIm5vZGUiLCJhY3RpdmUiLCJnZXRDaGlsZEJ5TmFtZSIsInN5c3RlbUV2ZW50Iiwib24iLCJvbktleURvd24iLCJvbkRlc3Ryb3kiLCJvZmYiLCJlIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwic3BhY2UiLCJjbG9zZVRleHQiLCJvbl9idG5fb25jbGlja19waG9uZSIsInN0ciIsImoiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsInNjaGVkdWxlIiwibGVuZ3RoIiwib25fYnRuX29uY2xpY2tfbGFwdG9wIiwib25fYnRuX29uY2xpY2tfZG9vciIsIm9uX2J0bl9vbmNsaWNrX3dpbmRvdzIiLCJvbl9idG5fb25jbGlja193aW5kb3ciLCJvbl9idG5fb25jbGlja19kZXNrIiwibG9nIiwib25jbGlja19CdXR0b240IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJvbmNsaWNrX0J1dHRvbjEiLCJvbmNsaWNrX0J1dHRvbjIiLCJvbmNsaWNrX0J1dHRvbjMiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSztBQUNOLFNBQUtGLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLRyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLGNBQVYsQ0FBeUIsU0FBekIsRUFBb0NELE1B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Q0EsUUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxTQUFLaEIsSUFBTCxDQUFVRSxjQUFWLENBQXlCLFdBQXpCLEVBQXNDZSxZQUF0QyxDQUFtRHhCLEVBQUUsQ0FBQ3lCLEtBQXRELEVBQTZEQyxNQUE3RCxHQUFzRSxFQUF0RTtBQUNBLFNBQUtDLFFBQUwsQ0FBYyxZQUFVO0FBQ3BCLFdBQUtwQixJQUFMLENBQVVFLGNBQVYsQ0FBeUIsV0FBekIsRUFBc0NlLFlBQXRDLENBQW1EeEIsRUFBRSxDQUFDeUIsS0FBdEQsRUFBNkRDLE1BQTdELElBQXVFSixHQUFHLENBQUNDLENBQUQsQ0FBMUU7QUFDQUEsTUFBQUEsQ0FBQztBQUNKLEtBSEQsRUFHRyxHQUhILEVBR1FELEdBQUcsQ0FBQ00sTUFBSixHQUFXLENBSG5CLEVBR3NCLEdBSHRCO0FBSUgsR0F0SUk7QUF3SUxZLEVBQUFBLGVBQWUsRUFBQywyQkFBVTtBQUN0QixTQUFLakMsSUFBTCxDQUFVRSxjQUFWLENBQXlCLFNBQXpCLEVBQW9DRCxNQUFwQyxHQUE2QyxLQUE3QztBQUNBLFNBQUtELElBQUwsQ0FBVUUsY0FBVixDQUF5QixTQUF6QixFQUFvQ0QsTUFBcEMsR0FBNkMsS0FBN0M7QUFDQSxTQUFLRCxJQUFMLENBQVVFLGNBQVYsQ0FBeUIsU0FBekIsRUFBb0NELE1BQXBDLEdBQTZDLEtBQTdDO0FBQ0EsU0FBS0QsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsR0E3SUk7QUErSUw7QUFHQWlDLEVBQUFBLEtBbEpLLG1CQWtKSSxDQUVSLENBcEpJLENBc0pMOztBQXRKSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgVGV4dGluZGV4OmNjLkludGVnZXIsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5UZXh0aW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24xXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbjJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uM1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b240XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcblxyXG4gICAgb25fYnRuX29uY2xpY2tfcGhvbmU6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc3RyID0gXCLmgI7kuYjmmK/mmJ/mnJ/lhavvvJ/kv6Hlj7fkuZ/msqHkuobvvIznoLTmiYvmnLrogq/lrprmmK/lnY/kuobvvIzor6XmjaLlj7DmlrDnmoTkuobjgIJcIjtcclxuICAgICAgICB2YXIgaiA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGV4dExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRleHRMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyArPSBzdHJbal07XHJcbiAgICAgICAgICAgIGorKztcclxuICAgICAgICB9LCAwLjEsIHN0ci5sZW5ndGgtMSwgMC4yKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25fYnRuX29uY2xpY2tfbGFwdG9wOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIHN0ciA9IFwi5L2g55qE55S16ISR54Or5b6X5Yqo5LiN5LqG77yM5Ly85LmO5Zyo6L+Q6KGM5aSN5p2C55qE56iL5bqP44CCXCI7XHJcbiAgICAgICAgdmFyIGogPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRleHRMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUZXh0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgKz0gc3RyW2pdO1xyXG4gICAgICAgICAgICBqKys7XHJcbiAgICAgICAgfSwgMC4xLCBzdHIubGVuZ3RoLTEsIDAuMik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uX2J0bl9vbmNsaWNrX2Rvb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc3RyID0gXCLpl6jooqvplIHkuIrkuobvvIzpnIDopoHpkqXljJnmiY3og73miZPlvIDjgIJcIjtcclxuICAgICAgICB2YXIgaiA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGV4dExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRleHRMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyArPSBzdHJbal07XHJcbiAgICAgICAgICAgIGorKztcclxuICAgICAgICB9LCAwLjEsIHN0ci5sZW5ndGgtMSwgMC4yKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25fYnRuX29uY2xpY2tfd2luZG93MjpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzdHIgPSBcIueql+aIt+aYr+aJk+W8gOeahO+8geS9huaYr+WkqumrmOS6hu+8jOayoeacieWKnuazleWHuuWOu+WRouOAglwiO1xyXG4gICAgICAgIHZhciBqID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUZXh0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGV4dExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nICs9IHN0cltqXTtcclxuICAgICAgICAgICAgaisrO1xyXG4gICAgICAgIH0sIDAuMSwgc3RyLmxlbmd0aC0xLCAwLjIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbl9idG5fb25jbGlja193aW5kb3c6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLlRleHRpbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIHN0ciA9IFwi56qX5oi35Y2K5byA552A44CCXCI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGV4dExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRleHRMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyArPSBzdHJbdGhpcy5UZXh0aW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLlRleHRpbmRleCsrO1xyXG4gICAgICAgIH0sIDAuMSwgc3RyLmxlbmd0aC0xLCAwLjIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbl9idG5fb25jbGlja19kZXNrOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5UZXh0aW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzdHIgPSBcIuivleivleaKiuahjOWtkOWghuWcqOS4gOi1t+eci+eci+WQp++8gVwiO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRleHRMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUZXh0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgKz0gc3RyW3RoaXMuVGV4dGluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5UZXh0aW5kZXgrKztcclxuICAgICAgICB9LCAwLjEsIHN0ci5sZW5ndGgtMSwgMC4yKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2VUZXh0KCl7XHJcbiAgICAgICAgY2MubG9nKHRoaXMuVGV4dGluZGV4KTtcclxuICAgICAgICBpZih0aGlzLlRleHRpbmRleCA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24yXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbjNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5UZXh0aW5kZXggPT0gMTMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uNFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuVGV4dGluZGV4ID09IDAgKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5UZXh0aW5kZXggPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbmNsaWNrX0J1dHRvbjQ6ZnVuY3Rpb24oKXtcclxuICAgICAgICAvL+WcuuaZr+WIh+aNouWIsOWghuahjOWtkOWwj+a4uOaIj1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uY2xpY2tfQnV0dG9uMTpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNjZW5lIDIuMzFcIik7IC8v5Zy65pmv5YiH5o2i5YiwU2NlbmUyLjMxXHJcbiAgICAgICAgY2MubG9nKFwiY2hhbmdlIHRvIFNjZW5lIDIuMzFcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uY2xpY2tfQnV0dG9uMjpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24zXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBzdHIgPSBcIuayoeacieS6uuW6lOetlOOAglwiO1xyXG4gICAgICAgIHZhciBqID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUZXh0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGV4dExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nICs9IHN0cltqXTtcclxuICAgICAgICAgICAgaisrO1xyXG4gICAgICAgIH0sIDAuMSwgc3RyLmxlbmd0aC0xLCAwLjIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbmNsaWNrX0J1dHRvbjM6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24xXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbjJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uM1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/win.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c2f6AFoFNOm5NHt4GesP52', 'win');
// scripts/lsm/win.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '似乎可以爬出去了！'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  //  start () {
  //     this.text.string = '';
  //     var str = '想要带你去看浪漫的土耳其';
  //     var j = 0;
  //     var interval = 0.2;// 以1秒为单位的时间间隔
  //     var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
  //     var delay = 1;// 我们在1秒后开始运行
  //     this.schedule(function() {
  //         this.text.string += str[j];
  //         j++;
  //     }, interval, repeat, delay);
  // },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      this.closeDialog();
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFx3aW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0TGFiZWwiLCJMYWJlbCIsIm9uTG9hZCIsImluaXQiLCJjb250ZW50Iiwic3lzdGVtRXZlbnQiLCJvbiIsIm9uS2V5RG93biIsIm9uRGVzdHJveSIsIm9mZiIsImUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJzcGFjZSIsIm5leHRUZXh0RGF0YSIsInRleHREYXRlQXJyIiwibm93VGV4dCIsInRleHRFbmQiLCJ0dCIsInRleHRJbmRleCIsIm5vZGUiLCJhY3RpdmUiLCJsZW5ndGgiLCJzZXRUZXh0RGF0YSIsImNsb3NlRGlhbG9nIiwidGV4dERhdGUiLCJzdHJpbmciLCJ1cGRhdGUiLCJkdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFDSixFQUFFLENBQUNLO0FBREwsR0FGUDtBQUtMQyxFQUFBQSxNQUxLLG9CQUtHO0FBQ0osU0FBS0MsSUFBTCxDQUFVLENBQ047QUFBQ0MsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FETSxDQUFWO0FBSUFSLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlQyxFQUFmLENBQWtCLFNBQWxCLEVBQTRCLEtBQUtDLFNBQWpDLEVBQTJDLElBQTNDLEVBTEksQ0FLNkM7QUFDcEQsR0FYSTtBQVlMQyxFQUFBQSxTQVpLLHVCQVlNO0FBQ1BaLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlSSxHQUFmLENBQW1CLFNBQW5CLEVBQTZCLEtBQUtGLFNBQWxDLEVBQTRDLElBQTVDO0FBQ0gsR0FkSTtBQWVMQSxFQUFBQSxTQWZLLHFCQWVLRyxDQWZMLEVBZU87QUFDUixZQUFPQSxDQUFDLENBQUNDLE9BQVQ7QUFDSSxXQUFLZixFQUFFLENBQUNnQixLQUFILENBQVNDLEdBQVQsQ0FBYUMsS0FBbEI7QUFBd0I7QUFDcEIsZUFBS0MsWUFBTDtBQUNBO0FBQ0g7QUFKTDtBQU1ILEdBdEJJO0FBdUJMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBWixFQUFBQSxJQW5DSyxnQkFtQ0FhLFdBbkNBLEVBbUNZO0FBQ2IsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtDLEVBQUwsR0FBUSxDQUFSLENBSGEsQ0FHSDs7QUFDVixTQUFLQyxTQUFMLEdBQWUsQ0FBQyxDQUFoQjtBQUNBLFNBQUtKLFdBQUwsR0FBaUJBLFdBQWpCO0FBQ0EsU0FBS0ssSUFBTCxDQUFVQyxNQUFWLEdBQWlCLElBQWpCO0FBQ0EsU0FBS1AsWUFBTDtBQUNILEdBM0NJO0FBNENMQSxFQUFBQSxZQTVDSywwQkE0Q1M7QUFDVixRQUFHLENBQUMsS0FBS0csT0FBVCxFQUFpQjs7QUFDakIsUUFBRyxFQUFFLEtBQUtFLFNBQVAsR0FBa0IsS0FBS0osV0FBTCxDQUFpQk8sTUFBdEMsRUFBNkM7QUFDekMsV0FBS0MsV0FBTCxDQUFpQixLQUFLUixXQUFMLENBQWlCLEtBQUtJLFNBQXRCLENBQWpCO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS0ssV0FBTDtBQUNIO0FBQ0osR0FuREk7QUFvRExELEVBQUFBLFdBcERLLHVCQW9ET0UsUUFwRFAsRUFvRGdCO0FBQ2pCLFFBQUcsQ0FBQyxLQUFLUixPQUFULEVBQWlCO0FBQ2pCLFNBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS2xCLFNBQUwsQ0FBZTJCLE1BQWYsR0FBc0IsRUFBdEI7QUFDQSxTQUFLVixPQUFMLEdBQWFTLFFBQVEsQ0FBQ3RCLE9BQXRCO0FBRUgsR0ExREk7QUEyRExxQixFQUFBQSxXQTNESyx5QkEyRFE7QUFDVCxTQUFLSixJQUFMLENBQVVDLE1BQVYsR0FBaUIsS0FBakI7QUFDSCxHQTdESTtBQThETE0sRUFBQUEsTUE5REssa0JBOERFQyxFQTlERixFQThESztBQUNOLFFBQUcsQ0FBQyxLQUFLWixPQUFULEVBQWlCO0FBQ2pCLFNBQUtFLEVBQUwsSUFBU1UsRUFBVDs7QUFDQSxRQUFHLEtBQUtWLEVBQUwsSUFBUyxHQUFaLEVBQWdCO0FBQ1osVUFBRyxLQUFLbkIsU0FBTCxDQUFlMkIsTUFBZixDQUFzQkosTUFBdEIsR0FBNkIsS0FBS04sT0FBTCxDQUFhTSxNQUE3QyxFQUFvRDtBQUNoRCxhQUFLdkIsU0FBTCxDQUFlMkIsTUFBZixHQUFzQixLQUFLVixPQUFMLENBQWFhLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsS0FBSzlCLFNBQUwsQ0FBZTJCLE1BQWYsQ0FBc0JKLE1BQXRCLEdBQTZCLENBQWxELENBQXRCO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsYUFBS0wsT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFFSjtBQTNFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+S8vOS5juWPr+S7peeIrOWHuuWOu+S6hu+8gSd9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyAgc3RhcnQgKCkge1xyXG4gICAgLy8gICAgIHRoaXMudGV4dC5zdHJpbmcgPSAnJztcclxuICAgIC8vICAgICB2YXIgc3RyID0gJ+aDs+imgeW4puS9oOWOu+eci+a1qua8q+eahOWcn+iAs+WFtic7XHJcbiAgICAvLyAgICAgdmFyIGogPSAwO1xyXG4gICAgLy8gICAgIHZhciBpbnRlcnZhbCA9IDAuMjsvLyDku6Ux56eS5Li65Y2V5L2N55qE5pe26Ze06Ze06ZqUXHJcbiAgICAvLyAgICAgdmFyIHJlcGVhdCA9IHN0ci5sZW5ndGggLSAxOy8vIOmHjeWkjeasoeaVsCA9IOWtl+espuS4sumVv+W6piAtIDFcclxuICAgIC8vICAgICB2YXIgZGVsYXkgPSAxOy8vIOaIkeS7rOWcqDHnp5LlkI7lvIDlp4vov5DooYxcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRleHQuc3RyaW5nICs9IHN0cltqXTtcclxuICAgIC8vICAgICAgICAgaisrO1xyXG4gICAgLy8gICAgIH0sIGludGVydmFsLCByZXBlYXQsIGRlbGF5KTtcclxuICAgIC8vIH0sXHJcbiAgICBpbml0KHRleHREYXRlQXJyKXtcclxuICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnR0PTA7Ly/mkq3mlL7nmoTmgLvml7bplb9cclxuICAgICAgICB0aGlzLnRleHRJbmRleD0tMTtcclxuICAgICAgICB0aGlzLnRleHREYXRlQXJyPXRleHREYXRlQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHREYXRhKHRoaXMudGV4dERhdGVBcnJbdGhpcy50ZXh0SW5kZXhdKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0ZSl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPWZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz0nJztcclxuICAgICAgICB0aGlzLm5vd1RleHQ9dGV4dERhdGUuY29udGVudDtcclxuXHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/showConsciousNumber.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8c8bt1TZhEY6hSobOxeT+J', 'showConsciousNumber');
// script/showConsciousNumber.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var conscious = require('globalVariable');

cc.Class({
  "extends": cc.Component,
  properties: {
    text: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.text.string = "理智值：" + conscious.consciousNumber.toString();
  } // start () {
  //     this.getComponent(cc.Label).String = "理智值：" + conscious.consciousNumber.toString();
  // },
  // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzaG93Q29uc2Npb3VzTnVtYmVyLmpzIl0sIm5hbWVzIjpbImNvbnNjaW91cyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHQiLCJMYWJlbCIsIm9uTG9hZCIsInN0cmluZyIsImNvbnNjaW91c051bWJlciIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQXZCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFDSixFQUFFLENBQUNLO0FBREEsR0FIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTixTQUFLRixJQUFMLENBQVVHLE1BQVYsR0FBbUIsU0FBUVQsU0FBUyxDQUFDVSxlQUFWLENBQTBCQyxRQUExQixFQUEzQjtBQUNILEdBWEksQ0FhTDtBQUNBO0FBQ0E7QUFFQTs7QUFqQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG52YXIgY29uc2Npb3VzID0gcmVxdWlyZSgnZ2xvYmFsVmFyaWFibGUnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0OmNjLkxhYmVsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IFwi55CG5pm65YC877yaXCIrIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIudG9TdHJpbmcoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gc3RhcnQgKCkge1xyXG4gICAgLy8gICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5TdHJpbmcgPSBcIueQhuaZuuWAvO+8mlwiICsgY29uc2Npb3VzLmNvbnNjaW91c051bWJlci50b1N0cmluZygpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/back.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b59faxO++hJnpuu9mguEOi9', 'back');
// scripts/lsm/back.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.ToScene = function () {
        cc.director.loadScene("Game");
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "start", null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxiYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUJDO1FBaEJHLFdBQUssR0FBYSxJQUFJLENBQUM7O1FBZXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBWkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBYkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQVF2QjtRQU5DLFFBQVE7eUNBUVI7SUFiZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1CNUI7SUFBRCxlQUFDO0NBbkJELEFBbUJDLENBbkJxQyxFQUFFLENBQUMsU0FBUyxHQW1CakQ7a0JBbkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgVG9TY2VuZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/fakegood_ending.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f2feogdXhEOanpI/sdGkNu', 'fakegood_ending');
// scripts/zyy/fakegood_ending.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '你点点头,快步地走出了教学楼'
    }, {
      content: '暗自庆幸，终于逃出了这个可怕的世界'
    }, {
      content: '或许……………………'
    }, {
      content: '（达成结局：逃出生天）'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  //  start () {
  //     this.text.string = '';
  //     var str = '想要带你去看浪漫的土耳其';
  //     var j = 0;
  //     var interval = 0.2;// 以1秒为单位的时间间隔
  //     var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
  //     var delay = 1;// 我们在1秒后开始运行
  //     this.schedule(function() {
  //         this.text.string += str[j];
  //         j++;
  //     }, interval, repeat, delay);
  // },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      this.closeDialog();
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxmYWtlZ29vZF9lbmRpbmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0TGFiZWwiLCJMYWJlbCIsIm9uTG9hZCIsImluaXQiLCJjb250ZW50Iiwic3lzdGVtRXZlbnQiLCJvbiIsIm9uS2V5RG93biIsIm9uRGVzdHJveSIsIm9mZiIsImUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJzcGFjZSIsIm5leHRUZXh0RGF0YSIsInRleHREYXRlQXJyIiwibm93VGV4dCIsInRleHRFbmQiLCJ0dCIsInRleHRJbmRleCIsIm5vZGUiLCJhY3RpdmUiLCJsZW5ndGgiLCJzZXRUZXh0RGF0YSIsImNsb3NlRGlhbG9nIiwidGV4dERhdGUiLCJzdHJpbmciLCJ1cGRhdGUiLCJkdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFDSixFQUFFLENBQUNLO0FBREwsR0FGUDtBQUtMQyxFQUFBQSxNQUxLLG9CQUtHO0FBQ0osU0FBS0MsSUFBTCxDQUFVLENBQ047QUFBQ0MsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FETSxFQUVOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRk0sRUFHTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUhNLEVBSU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FKTSxDQUFWO0FBTUFSLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlQyxFQUFmLENBQWtCLFNBQWxCLEVBQTRCLEtBQUtDLFNBQWpDLEVBQTJDLElBQTNDLEVBUEksQ0FPNkM7QUFDcEQsR0FiSTtBQWNMQyxFQUFBQSxTQWRLLHVCQWNNO0FBQ1BaLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlSSxHQUFmLENBQW1CLFNBQW5CLEVBQTZCLEtBQUtGLFNBQWxDLEVBQTRDLElBQTVDO0FBQ0gsR0FoQkk7QUFpQkxBLEVBQUFBLFNBakJLLHFCQWlCS0csQ0FqQkwsRUFpQk87QUFDUixZQUFPQSxDQUFDLENBQUNDLE9BQVQ7QUFDSSxXQUFLZixFQUFFLENBQUNnQixLQUFILENBQVNDLEdBQVQsQ0FBYUMsS0FBbEI7QUFBd0I7QUFDcEIsZUFBS0MsWUFBTDtBQUNBO0FBQ0g7QUFKTDtBQU1ILEdBeEJJO0FBeUJMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBWixFQUFBQSxJQXJDSyxnQkFxQ0FhLFdBckNBLEVBcUNZO0FBQ2IsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtDLEVBQUwsR0FBUSxDQUFSLENBSGEsQ0FHSDs7QUFDVixTQUFLQyxTQUFMLEdBQWUsQ0FBQyxDQUFoQjtBQUNBLFNBQUtKLFdBQUwsR0FBaUJBLFdBQWpCO0FBQ0EsU0FBS0ssSUFBTCxDQUFVQyxNQUFWLEdBQWlCLElBQWpCO0FBQ0EsU0FBS1AsWUFBTDtBQUNILEdBN0NJO0FBOENMQSxFQUFBQSxZQTlDSywwQkE4Q1M7QUFDVixRQUFHLENBQUMsS0FBS0csT0FBVCxFQUFpQjs7QUFDakIsUUFBRyxFQUFFLEtBQUtFLFNBQVAsR0FBa0IsS0FBS0osV0FBTCxDQUFpQk8sTUFBdEMsRUFBNkM7QUFDekMsV0FBS0MsV0FBTCxDQUFpQixLQUFLUixXQUFMLENBQWlCLEtBQUtJLFNBQXRCLENBQWpCO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS0ssV0FBTDtBQUNIO0FBQ0osR0FyREk7QUFzRExELEVBQUFBLFdBdERLLHVCQXNET0UsUUF0RFAsRUFzRGdCO0FBQ2pCLFFBQUcsQ0FBQyxLQUFLUixPQUFULEVBQWlCO0FBQ2pCLFNBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS2xCLFNBQUwsQ0FBZTJCLE1BQWYsR0FBc0IsRUFBdEI7QUFDQSxTQUFLVixPQUFMLEdBQWFTLFFBQVEsQ0FBQ3RCLE9BQXRCO0FBRUgsR0E1REk7QUE2RExxQixFQUFBQSxXQTdESyx5QkE2RFE7QUFDVCxTQUFLSixJQUFMLENBQVVDLE1BQVYsR0FBaUIsS0FBakI7QUFDSCxHQS9ESTtBQWdFTE0sRUFBQUEsTUFoRUssa0JBZ0VFQyxFQWhFRixFQWdFSztBQUNOLFFBQUcsQ0FBQyxLQUFLWixPQUFULEVBQWlCO0FBQ2pCLFNBQUtFLEVBQUwsSUFBU1UsRUFBVDs7QUFDQSxRQUFHLEtBQUtWLEVBQUwsSUFBUyxHQUFaLEVBQWdCO0FBQ1osVUFBRyxLQUFLbkIsU0FBTCxDQUFlMkIsTUFBZixDQUFzQkosTUFBdEIsR0FBNkIsS0FBS04sT0FBTCxDQUFhTSxNQUE3QyxFQUFvRDtBQUNoRCxhQUFLdkIsU0FBTCxDQUFlMkIsTUFBZixHQUFzQixLQUFLVixPQUFMLENBQWFhLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsS0FBSzlCLFNBQUwsQ0FBZTJCLE1BQWYsQ0FBc0JKLE1BQXRCLEdBQTZCLENBQWxELENBQXRCO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsYUFBS0wsT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFFSjtBQTdFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+S9oOeCueeCueWktCzlv6vmraXlnLDotbDlh7rkuobmlZnlrabmpbwnfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+aal+iHquW6huW5uO+8jOe7iOS6jumAg+WHuuS6hui/meS4quWPr+aAleeahOS4lueVjCd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5oiW6K644oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCmJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifvvIjovr7miJDnu5PlsYDvvJrpgIPlh7rnlJ/lpKnvvIknfSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7Ly/nu5HlrprplK7nm5hcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93bihlKXtcclxuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGV4dERhdGEoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vICBzdGFydCAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy50ZXh0LnN0cmluZyA9ICcnO1xyXG4gICAgLy8gICAgIHZhciBzdHIgPSAn5oOz6KaB5bim5L2g5Y6755yL5rWq5ryr55qE5Zyf6ICz5YW2JztcclxuICAgIC8vICAgICB2YXIgaiA9IDA7XHJcbiAgICAvLyAgICAgdmFyIGludGVydmFsID0gMC4yOy8vIOS7pTHnp5LkuLrljZXkvY3nmoTml7bpl7Tpl7TpmpRcclxuICAgIC8vICAgICB2YXIgcmVwZWF0ID0gc3RyLmxlbmd0aCAtIDE7Ly8g6YeN5aSN5qyh5pWwID0g5a2X56ym5Liy6ZW/5bqmIC0gMVxyXG4gICAgLy8gICAgIHZhciBkZWxheSA9IDE7Ly8g5oiR5Lus5ZyoMeenkuWQjuW8gOWni+i/kOihjFxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudGV4dC5zdHJpbmcgKz0gc3RyW2pdO1xyXG4gICAgLy8gICAgICAgICBqKys7XHJcbiAgICAvLyAgICAgfSwgaW50ZXJ2YWwsIHJlcGVhdCwgZGVsYXkpO1xyXG4gICAgLy8gfSxcclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubmV4dFRleHREYXRhKClcclxuICAgIH0sXHJcbiAgICBuZXh0VGV4dERhdGEoKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICBpZigrK3RoaXMudGV4dEluZGV4PCB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dERhdGEodGhpcy50ZXh0RGF0ZUFyclt0aGlzLnRleHRJbmRleF0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG5cclxuICAgIH0sXHJcbiAgICBjbG9zZURpYWxvZygpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBpZighdGhpcy5ub3dUZXh0KXJldHVybjtcclxuICAgICAgICB0aGlzLnR0Kz1kdDtcclxuICAgICAgICBpZih0aGlzLnR0Pj0wLjEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoPHRoaXMubm93VGV4dC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPXRoaXMubm93VGV4dC5zbGljZSgwLHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGgrMSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHQ9MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/good_ending.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7aba6geZcJFJ4Bkdjpul4fI', 'good_ending');
// scripts/zyy/good_ending.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '你的不甘从心头涌出'
    }, {
      content: '你从小将人工智能视为梦想，为此付出了巨大的努力'
    }, {
      content: '终于站在了梦寐以求的机器人面前。'
    }, {
      content: '尽管艰难坎坷，可你在社团中学习知识、锻炼能力，已经在一点点地进步了。'
    }, {
      content: '你不想放弃，你对机器人说：'
    }, {
      content: '“不！我要继续坚持下去!!!”'
    }, {
      content: '“总有一天，我会搞明白每一行代码'
    }, {
      content: '“让每一个机器人跟着我的指令起舞！”'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  //  start () {
  //     this.text.string = '';
  //     var str = '想要带你去看浪漫的土耳其';
  //     var j = 0;
  //     var interval = 0.2;// 以1秒为单位的时间间隔
  //     var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
  //     var delay = 1;// 我们在1秒后开始运行
  //     this.schedule(function() {
  //         this.text.string += str[j];
  //         j++;
  //     }, interval, repeat, delay);
  // },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      this.closeDialog();
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxnb29kX2VuZGluZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImxlbmd0aCIsInNldFRleHREYXRhIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0ZSIsInN0cmluZyIsInVwZGF0ZSIsImR0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0s7QUFETCxHQUZQO0FBS0xDLEVBQUFBLE1BTEssb0JBS0c7QUFDSixTQUFLQyxJQUFMLENBQVUsQ0FDTjtBQUFDQyxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQURNLEVBRU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FGTSxFQUdOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBSE0sRUFJTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUpNLEVBS047QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FMTSxFQU1OO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBTk0sRUFPTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQVBNLEVBUU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FSTSxDQUFWO0FBVUFSLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlQyxFQUFmLENBQWtCLFNBQWxCLEVBQTRCLEtBQUtDLFNBQWpDLEVBQTJDLElBQTNDLEVBWEksQ0FXNkM7QUFDcEQsR0FqQkk7QUFrQkxDLEVBQUFBLFNBbEJLLHVCQWtCTTtBQUNQWixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUksR0FBZixDQUFtQixTQUFuQixFQUE2QixLQUFLRixTQUFsQyxFQUE0QyxJQUE1QztBQUNILEdBcEJJO0FBcUJMQSxFQUFBQSxTQXJCSyxxQkFxQktHLENBckJMLEVBcUJPO0FBQ1IsWUFBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0ksV0FBS2YsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWxCO0FBQXdCO0FBQ3BCLGVBQUtDLFlBQUw7QUFDQTtBQUNIO0FBSkw7QUFNSCxHQTVCSTtBQTZCTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVosRUFBQUEsSUF6Q0ssZ0JBeUNBYSxXQXpDQSxFQXlDWTtBQUNiLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxFQUFMLEdBQVEsQ0FBUixDQUhhLENBR0g7O0FBQ1YsU0FBS0MsU0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSxTQUFLSixXQUFMLEdBQWlCQSxXQUFqQjtBQUNBLFNBQUtLLElBQUwsQ0FBVUMsTUFBVixHQUFpQixJQUFqQjtBQUNBLFNBQUtQLFlBQUw7QUFDSCxHQWpESTtBQWtETEEsRUFBQUEsWUFsREssMEJBa0RTO0FBQ1YsUUFBRyxDQUFDLEtBQUtHLE9BQVQsRUFBaUI7O0FBQ2pCLFFBQUcsRUFBRSxLQUFLRSxTQUFQLEdBQWtCLEtBQUtKLFdBQUwsQ0FBaUJPLE1BQXRDLEVBQTZDO0FBQ3pDLFdBQUtDLFdBQUwsQ0FBaUIsS0FBS1IsV0FBTCxDQUFpQixLQUFLSSxTQUF0QixDQUFqQjtBQUNILEtBRkQsTUFFSztBQUNELFdBQUtLLFdBQUw7QUFDSDtBQUNKLEdBekRJO0FBMERMRCxFQUFBQSxXQTFESyx1QkEwRE9FLFFBMURQLEVBMERnQjtBQUNqQixRQUFHLENBQUMsS0FBS1IsT0FBVCxFQUFpQjtBQUNqQixTQUFLQSxPQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUtsQixTQUFMLENBQWUyQixNQUFmLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS1YsT0FBTCxHQUFhUyxRQUFRLENBQUN0QixPQUF0QjtBQUVILEdBaEVJO0FBaUVMcUIsRUFBQUEsV0FqRUsseUJBaUVRO0FBQ1QsU0FBS0osSUFBTCxDQUFVQyxNQUFWLEdBQWlCLEtBQWpCO0FBQ0gsR0FuRUk7QUFvRUxNLEVBQUFBLE1BcEVLLGtCQW9FRUMsRUFwRUYsRUFvRUs7QUFDTixRQUFHLENBQUMsS0FBS1osT0FBVCxFQUFpQjtBQUNqQixTQUFLRSxFQUFMLElBQVNVLEVBQVQ7O0FBQ0EsUUFBRyxLQUFLVixFQUFMLElBQVMsR0FBWixFQUFnQjtBQUNaLFVBQUcsS0FBS25CLFNBQUwsQ0FBZTJCLE1BQWYsQ0FBc0JKLE1BQXRCLEdBQTZCLEtBQUtOLE9BQUwsQ0FBYU0sTUFBN0MsRUFBb0Q7QUFDaEQsYUFBS3ZCLFNBQUwsQ0FBZTJCLE1BQWYsR0FBc0IsS0FBS1YsT0FBTCxDQUFhYSxLQUFiLENBQW1CLENBQW5CLEVBQXFCLEtBQUs5QixTQUFMLENBQWUyQixNQUFmLENBQXNCSixNQUF0QixHQUE2QixDQUFsRCxDQUF0QjtBQUNILE9BRkQsTUFFSztBQUNELGFBQUtMLE9BQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS0QsT0FBTCxHQUFhLElBQWI7QUFDSDs7QUFDRCxXQUFLRSxFQUFMLEdBQVEsQ0FBUjtBQUNIO0FBRUo7QUFqRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGV4dExhYmVsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMuaW5pdChbXHJcbiAgICAgICAgICAgIHtjb250ZW50OifkvaDnmoTkuI3nlJjku47lv4PlpLTmtozlh7onfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+S9oOS7juWwj+WwhuS6uuW3peaZuuiDveinhuS4uuaipuaDs++8jOS4uuatpOS7mOWHuuS6huW3qOWkp+eahOWKquWKmyd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon57uI5LqO56uZ5Zyo5LqG5qKm5a+Q5Lul5rGC55qE5py65Zmo5Lq66Z2i5YmN44CCJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OiflsL3nrqHoibDpmr7lnY7lnbfvvIzlj6/kvaDlnKjnpL7lm6LkuK3lrabkuaDnn6Xor4bjgIHplLvngrzog73lipvvvIzlt7Lnu4/lnKjkuIDngrnngrnlnLDov5vmraXkuobjgIInfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+S9oOS4jeaDs+aUvuW8g++8jOS9oOWvueacuuWZqOS6uuivtO+8mid9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon4oCc5LiN77yB5oiR6KaB57un57ut5Z2a5oyB5LiL5Y67ISEh4oCdJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifigJzmgLvmnInkuIDlpKnvvIzmiJHkvJrmkJ7mmI7nmb3mr4/kuIDooYzku6PnoIEnfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+KAnOiuqeavj+S4gOS4quacuuWZqOS6uui3n+edgOaIkeeahOaMh+S7pOi1t+iInu+8geKAnSd9LCBcclxuICAgICAgICBdKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7Ly/nu5HlrprplK7nm5hcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93bihlKXtcclxuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGV4dERhdGEoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vICBzdGFydCAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy50ZXh0LnN0cmluZyA9ICcnO1xyXG4gICAgLy8gICAgIHZhciBzdHIgPSAn5oOz6KaB5bim5L2g5Y6755yL5rWq5ryr55qE5Zyf6ICz5YW2JztcclxuICAgIC8vICAgICB2YXIgaiA9IDA7XHJcbiAgICAvLyAgICAgdmFyIGludGVydmFsID0gMC4yOy8vIOS7pTHnp5LkuLrljZXkvY3nmoTml7bpl7Tpl7TpmpRcclxuICAgIC8vICAgICB2YXIgcmVwZWF0ID0gc3RyLmxlbmd0aCAtIDE7Ly8g6YeN5aSN5qyh5pWwID0g5a2X56ym5Liy6ZW/5bqmIC0gMVxyXG4gICAgLy8gICAgIHZhciBkZWxheSA9IDE7Ly8g5oiR5Lus5ZyoMeenkuWQjuW8gOWni+i/kOihjFxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudGV4dC5zdHJpbmcgKz0gc3RyW2pdO1xyXG4gICAgLy8gICAgICAgICBqKys7XHJcbiAgICAvLyAgICAgfSwgaW50ZXJ2YWwsIHJlcGVhdCwgZGVsYXkpO1xyXG4gICAgLy8gfSxcclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubmV4dFRleHREYXRhKClcclxuICAgIH0sXHJcbiAgICBuZXh0VGV4dERhdGEoKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICBpZigrK3RoaXMudGV4dEluZGV4PCB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dERhdGEodGhpcy50ZXh0RGF0ZUFyclt0aGlzLnRleHRJbmRleF0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG5cclxuICAgIH0sXHJcbiAgICBjbG9zZURpYWxvZygpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBpZighdGhpcy5ub3dUZXh0KXJldHVybjtcclxuICAgICAgICB0aGlzLnR0Kz1kdDtcclxuICAgICAgICBpZih0aGlzLnR0Pj0wLjEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoPHRoaXMubm93VGV4dC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPXRoaXMubm93VGV4dC5zbGljZSgwLHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGgrMSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHQ9MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/label - test 1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16c5bdiCAlBfot801QGM5Lt', 'label - test 1');
// scripts/zyy/label - test 1.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '请听题'
    }, {
      content: '第一题'
    }, {
      content: '机器人的脑海中是如何处理信息和存储信息呢?'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.node.getChildByName("ButtonA").active = false;
    this.node.getChildByName("ButtonB").active = false;
    this.node.getChildByName("ButtonC").active = false;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        this.node.getChildByName("ButtonA").active = true;
        this.node.getChildByName("ButtonB").active = true;
        this.node.getChildByName("ButtonC").active = true;
        this.textIndex++;
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsYWJlbCAtIHRlc3QgMS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLRztBQUNKLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sRUFFTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUZNLEVBR047QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FITSxDQUFWO0FBS0FSLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlQyxFQUFmLENBQWtCLFNBQWxCLEVBQTRCLEtBQUtDLFNBQWpDLEVBQTJDLElBQTNDLEVBTkksQ0FNNkM7QUFDcEQsR0FaSTtBQWFMQyxFQUFBQSxTQWJLLHVCQWFNO0FBQ1BaLElBQUFB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LE1BQXRCLEdBQTZCLENBQWxELENBQXRCO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsYUFBS04sT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFFSjtBQTdFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+ivt+WQrOmimCd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon56ys5LiA6aKYJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifmnLrlmajkurrnmoTohJHmtbfkuK3mmK/lpoLkvZXlpITnkIbkv6Hmga/lkozlrZjlgqjkv6Hmga/lkaI/J30sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkFcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkJcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkNcIikuYWN0aXZlPWZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHREYXRhKHRoaXMudGV4dERhdGVBcnJbdGhpcy50ZXh0SW5kZXhdKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0SW5kZXg9PXRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkFcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25CXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uQ1wiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG5cclxuICAgIH0sXHJcbiAgICBjbG9zZURpYWxvZygpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBpZighdGhpcy5ub3dUZXh0KXJldHVybjtcclxuICAgICAgICB0aGlzLnR0Kz1kdDtcclxuICAgICAgICBpZih0aGlzLnR0Pj0wLjEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoPHRoaXMubm93VGV4dC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPXRoaXMubm93VGV4dC5zbGljZSgwLHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGgrMSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHQ9MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/desk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9eba35liEBIbp94c5tF6pPf', 'desk');
// scripts/lsm/desk.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '桌子倒了，理智值-1'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  //  start () {
  //     this.text.string = '';
  //     var str = '想要带你去看浪漫的土耳其';
  //     var j = 0;
  //     var interval = 0.2;// 以1秒为单位的时间间隔
  //     var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
  //     var delay = 1;// 我们在1秒后开始运行
  //     this.schedule(function() {
  //         this.text.string += str[j];
  //         j++;
  //     }, interval, repeat, delay);
  // },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      this.closeDialog();
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxkZXNrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGV4dExhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJpbml0IiwiY29udGVudCIsInN5c3RlbUV2ZW50Iiwib24iLCJvbktleURvd24iLCJvbkRlc3Ryb3kiLCJvZmYiLCJlIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwic3BhY2UiLCJuZXh0VGV4dERhdGEiLCJ0ZXh0RGF0ZUFyciIsIm5vd1RleHQiLCJ0ZXh0RW5kIiwidHQiLCJ0ZXh0SW5kZXgiLCJub2RlIiwiYWN0aXZlIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLRztBQUNKLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sQ0FBVjtBQUlBUixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUMsRUFBZixDQUFrQixTQUFsQixFQUE0QixLQUFLQyxTQUFqQyxFQUEyQyxJQUEzQyxFQUxJLENBSzZDO0FBQ3BELEdBWEk7QUFZTEMsRUFBQUEsU0FaSyx1QkFZTTtBQUNQWixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUksR0FBZixDQUFtQixTQUFuQixFQUE2QixLQUFLRixTQUFsQyxFQUE0QyxJQUE1QztBQUNILEdBZEk7QUFlTEEsRUFBQUEsU0FmSyxxQkFlS0csQ0FmTCxFQWVPO0FBQ1IsWUFBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0ksV0FBS2YsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWxCO0FBQXdCO0FBQ3BCLGVBQUtDLFlBQUw7QUFDQTtBQUNIO0FBSkw7QUFNSCxHQXRCSTtBQXVCTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVosRUFBQUEsSUFuQ0ssZ0JBbUNBYSxXQW5DQSxFQW1DWTtBQUNiLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxFQUFMLEdBQVEsQ0FBUixDQUhhLENBR0g7O0FBQ1YsU0FBS0MsU0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSxTQUFLSixXQUFMLEdBQWlCQSxXQUFqQjtBQUNBLFNBQUtLLElBQUwsQ0FBVUMsTUFBVixHQUFpQixJQUFqQjtBQUNBLFNBQUtQLFlBQUw7QUFDSCxHQTNDSTtBQTRDTEEsRUFBQUEsWUE1Q0ssMEJBNENTO0FBQ1YsUUFBRyxDQUFDLEtBQUtHLE9BQVQsRUFBaUI7O0FBQ2pCLFFBQUcsRUFBRSxLQUFLRSxTQUFQLEdBQWtCLEtBQUtKLFdBQUwsQ0FBaUJPLE1BQXRDLEVBQTZDO0FBQ3pDLFdBQUtDLFdBQUwsQ0FBaUIsS0FBS1IsV0FBTCxDQUFpQixLQUFLSSxTQUF0QixDQUFqQjtBQUNILEtBRkQsTUFFSztBQUNELFdBQUtLLFdBQUw7QUFDSDtBQUNKLEdBbkRJO0FBb0RMRCxFQUFBQSxXQXBESyx1QkFvRE9FLFFBcERQLEVBb0RnQjtBQUNqQixRQUFHLENBQUMsS0FBS1IsT0FBVCxFQUFpQjtBQUNqQixTQUFLQSxPQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUtsQixTQUFMLENBQWUyQixNQUFmLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS1YsT0FBTCxHQUFhUyxRQUFRLENBQUN0QixPQUF0QjtBQUVILEdBMURJO0FBMkRMcUIsRUFBQUEsV0EzREsseUJBMkRRO0FBQ1QsU0FBS0osSUFBTCxDQUFVQyxNQUFWLEdBQWlCLEtBQWpCO0FBQ0gsR0E3REk7QUE4RExNLEVBQUFBLE1BOURLLGtCQThERUMsRUE5REYsRUE4REs7QUFDTixRQUFHLENBQUMsS0FBS1osT0FBVCxFQUFpQjtBQUNqQixTQUFLRSxFQUFMLElBQVNVLEVBQVQ7O0FBQ0EsUUFBRyxLQUFLVixFQUFMLElBQVMsR0FBWixFQUFnQjtBQUNaLFVBQUcsS0FBS25CLFNBQUwsQ0FBZTJCLE1BQWYsQ0FBc0JKLE1BQXRCLEdBQTZCLEtBQUtOLE9BQUwsQ0FBYU0sTUFBN0MsRUFBb0Q7QUFDaEQsYUFBS3ZCLFNBQUwsQ0FBZTJCLE1BQWYsR0FBc0IsS0FBS1YsT0FBTCxDQUFhYSxLQUFiLENBQW1CLENBQW5CLEVBQXFCLEtBQUs5QixTQUFMLENBQWUyQixNQUFmLENBQXNCSixNQUF0QixHQUE2QixDQUFsRCxDQUF0QjtBQUNILE9BRkQsTUFFSztBQUNELGFBQUtMLE9BQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS0QsT0FBTCxHQUFhLElBQWI7QUFDSDs7QUFDRCxXQUFLRSxFQUFMLEdBQVEsQ0FBUjtBQUNIO0FBRUo7QUEzRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGV4dExhYmVsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMuaW5pdChbXHJcbiAgICAgICAgICAgIHtjb250ZW50OifmoYzlrZDlgJLkuobvvIznkIbmmbrlgLwtMSd9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyAgc3RhcnQgKCkge1xyXG4gICAgLy8gICAgIHRoaXMudGV4dC5zdHJpbmcgPSAnJztcclxuICAgIC8vICAgICB2YXIgc3RyID0gJ+aDs+imgeW4puS9oOWOu+eci+a1qua8q+eahOWcn+iAs+WFtic7XHJcbiAgICAvLyAgICAgdmFyIGogPSAwO1xyXG4gICAgLy8gICAgIHZhciBpbnRlcnZhbCA9IDAuMjsvLyDku6Ux56eS5Li65Y2V5L2N55qE5pe26Ze06Ze06ZqUXHJcbiAgICAvLyAgICAgdmFyIHJlcGVhdCA9IHN0ci5sZW5ndGggLSAxOy8vIOmHjeWkjeasoeaVsCA9IOWtl+espuS4sumVv+W6piAtIDFcclxuICAgIC8vICAgICB2YXIgZGVsYXkgPSAxOy8vIOaIkeS7rOWcqDHnp5LlkI7lvIDlp4vov5DooYxcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRleHQuc3RyaW5nICs9IHN0cltqXTtcclxuICAgIC8vICAgICAgICAgaisrO1xyXG4gICAgLy8gICAgIH0sIGludGVydmFsLCByZXBlYXQsIGRlbGF5KTtcclxuICAgIC8vIH0sXHJcbiAgICBpbml0KHRleHREYXRlQXJyKXtcclxuICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnR0PTA7Ly/mkq3mlL7nmoTmgLvml7bplb9cclxuICAgICAgICB0aGlzLnRleHRJbmRleD0tMTtcclxuICAgICAgICB0aGlzLnRleHREYXRlQXJyPXRleHREYXRlQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHREYXRhKHRoaXMudGV4dERhdGVBcnJbdGhpcy50ZXh0SW5kZXhdKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0ZSl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPWZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz0nJztcclxuICAgICAgICB0aGlzLm5vd1RleHQ9dGV4dERhdGUuY29udGVudDtcclxuXHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/Physize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da5a82I4MlGbJ03vu1lh0HJ', 'Physize');
// scripts/lsm/Physize.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getPhysicsManager(); //声明变量
        manager.enabled = true; //开启物理引擎
        manager.gravity = cc.v2(0, -1000); //下落速度
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxQaHlzaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0JDO1FBbkJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFldkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFkRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBLE1BQU07UUFDbEQsT0FBTyxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsQ0FBQSxRQUFRO1FBQzdCLE9BQU8sQ0FBQyxPQUFPLEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLE1BQU07SUFDNUMsQ0FBQztJQUdFLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBaEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNCNUI7SUFBRCxlQUFDO0NBdEJELEFBc0JDLENBdEJxQyxFQUFFLENBQUMsU0FBUyxHQXNCakQ7a0JBdEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgbGV0IG1hbmFnZXI9Y2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTsvL+WjsOaYjuWPmOmHj1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZD10cnVlOy8v5byA5ZCv54mp55CG5byV5pOOXHJcbiAgICAgICAgbWFuYWdlci5ncmF2aXR5PWNjLnYyKDAsLTEwMDApOy8v5LiL6JC96YCf5bqmXHJcbiB9XHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/MainController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af2feGEwdFA1LEogFZe9Ai1', 'MainController');
// scripts/lsm/MainController.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.box = null; //预制体 箱子
        _this.xiangji = null; //相机
        _this.boxParent = null; //箱子的父节点
        _this.box_self = null; //最开始的箱子自身
        _this.score_lb = null; //分数
        _this.lb_score = null; //分数
        _this.isok = true; //是否可以生成新的箱子
        _this.score = 0.5; //分数
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.xiangji.on(cc.Node.EventType.TOUCH_START, this.down, this); //给相机在触摸的时候添加点击事件
        this.xiangji.width = this.node.width; //相机的宽和高和屏幕的宽和高一样
        this.xiangji.height = this.node.height;
    };
    NewClass.prototype.update = function (dt) {
        this.score_lb.string = "高度:" + this.score.toString() + "米"; //每秒获取最新分数
        this.lb_score.y = this.xiangji.y + (this.xiangji.height / 2) - this.lb_score.height - 10; //介绍和分数的最佳位置
        //this.jieshao.y = this.xiangji.y-(this.xiangji.height/2)+this.jieshao.height+10;
        if (this.score == 2.5) { //如果高度达到
            console.log("成功！");
            this.win();
        }
    };
    NewClass.prototype.win = function () {
        console.log("通过游戏");
        this.scheduleOnce(function () {
            cc.director.loadScene("Win");
        }, 0.8);
        //游戏通关场景跳转
    };
    NewClass.prototype.down = function () {
        if (this.isok == true) {
            var box = this.boxParent.children[this.boxParent.childrenCount - 1].getComponent("Box"); //获取box组件
            box.isdown = true; //箱子开始下降
            box.move.stop("move"); //停止播放移动动画
            console.log("点击了相机");
            this.scheduleOnce(function () {
                this.shengcheng();
            }, 0.5); //为了防止箱子堆到一块，在0.5秒后生成新的箱子
            this.score += 0.5; //随机加分数
            this.isok = false;
            this.scheduleOnce(function () {
                this.isok = true;
            }, 0.5); //0.5秒后才可以继续生成新箱子
        }
    };
    NewClass.prototype.shengcheng = function () {
        var node = cc.instantiate(this.box); //你要复制的节点名称
        node.parent = this.boxParent; //复制节点的父节点是什么
        node.setPosition(cc.v2(0, (this.xiangji.y + this.xiangji.height / 2) - this.box_self.height - 50)); //复制的节点的位置
        var pos = [];
        pos.push(cc.v2(this.xiangji.position));
        pos.push(cc.v2(0, this.xiangji.y + this.box_self.height));
        console.log("生成了新的箱子");
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "box", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "xiangji", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boxParent", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "box_self", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "score_lb", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lb_score", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxNYWluQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlGQztRQTlFRyxTQUFHLEdBQWEsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUc3QixhQUFPLEdBQVcsSUFBSSxDQUFDLENBQUEsSUFBSTtRQUczQixlQUFTLEdBQVcsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUdqQyxjQUFRLEdBQVcsSUFBSSxDQUFDLENBQUEsVUFBVTtRQUdsQyxjQUFRLEdBQVksSUFBSSxDQUFDLENBQUEsSUFBSTtRQUc3QixjQUFRLEdBQVcsSUFBSSxDQUFDLENBQUEsSUFBSTtRQUU1QixVQUFJLEdBQVcsSUFBSSxDQUFDLENBQUEsWUFBWTtRQUVoQyxXQUFLLEdBQVUsR0FBRyxDQUFDLENBQUEsSUFBSTs7SUEyRDNCLENBQUM7SUF6REcseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsaUJBQWlCO1FBQy9FLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsaUJBQWlCO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNDLENB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QUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUl2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUE1RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDQztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFsQlAsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlGNUI7SUFBRCxlQUFDO0NBakZELEFBaUZDLENBakZxQyxFQUFFLENBQUMsU0FBUyxHQWlGakQ7a0JBakZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJveDpjYy5QcmVmYWIgPSBudWxsOy8v6aKE5Yi25L2TIOeuseWtkFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgeGlhbmdqaTpjYy5Ob2RlID0gbnVsbDsvL+ebuOaculxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94UGFyZW50OmNjLk5vZGUgPSBudWxsOy8v566x5a2Q55qE54i26IqC54K5XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib3hfc2VsZjpjYy5Ob2RlID0gbnVsbDsvL+acgOW8gOWni+eahOeuseWtkOiHqui6q1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlX2xiOmNjLkxhYmVsID0gbnVsbDsvL+WIhuaVsFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGJfc2NvcmU6Y2MuTm9kZSA9IG51bGw7Ly/liIbmlbBcclxuXHJcbiAgICBpc29rOmJvb2xlYW4gPSB0cnVlOy8v5piv5ZCm5Y+v5Lul55Sf5oiQ5paw55qE566x5a2QXHJcblxyXG4gICAgc2NvcmU6bnVtYmVyID0gMC41Oy8v5YiG5pWwXHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy54aWFuZ2ppLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMuZG93bix0aGlzKTsvL+e7meebuOacuuWcqOinpuaRuOeahOaXtuWAmea3u+WKoOeCueWHu+S6i+S7tlxyXG4gICAgICAgIHRoaXMueGlhbmdqaS53aWR0aCA9IHRoaXMubm9kZS53aWR0aDsvL+ebuOacuueahOWuveWSjOmrmOWSjOWxj+W5leeahOWuveWSjOmrmOS4gOagt1xyXG4gICAgICAgIHRoaXMueGlhbmdqaS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuc2NvcmVfbGIuc3RyaW5nID0gXCLpq5jluqY6XCIgKyB0aGlzLnNjb3JlLnRvU3RyaW5nKCkgKyBcIuexs1wiOy8v5q+P56eS6I635Y+W5pyA5paw5YiG5pWwXHJcbiAgICAgICAgdGhpcy5sYl9zY29yZS55ID0gdGhpcy54aWFuZ2ppLnkrKHRoaXMueGlhbmdqaS5oZWlnaHQvMiktdGhpcy5sYl9zY29yZS5oZWlnaHQtMTA7Ly/ku4vnu43lkozliIbmlbDnmoTmnIDkvbPkvY3nva5cclxuICAgICAgICAvL3RoaXMuamllc2hhby55ID0gdGhpcy54aWFuZ2ppLnktKHRoaXMueGlhbmdqaS5oZWlnaHQvMikrdGhpcy5qaWVzaGFvLmhlaWdodCsxMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5zY29yZSA9PSAyLjUpey8v5aaC5p6c6auY5bqm6L6+5YiwXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkOWKn++8gVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy53aW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHdpbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumAmui/h+a4uOaIj1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJXaW5cIik7XHJcbiAgICAgICAgICAgIH0sMC44KTtcclxuICAgICAgICAgICAgLy/muLjmiI/pgJrlhbPlnLrmma/ot7PovaxcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICBkb3duKCl7Ly/nrrHlrZDkuIvpmY1cclxuICAgICAgICBpZih0aGlzLmlzb2sgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLmJveFBhcmVudC5jaGlsZHJlblt0aGlzLmJveFBhcmVudC5jaGlsZHJlbkNvdW50LTFdLmdldENvbXBvbmVudChcIkJveFwiKTsvL+iOt+WPlmJveOe7hOS7tlxyXG4gICAgICAgICAgICBib3guaXNkb3duID0gdHJ1ZTsvL+euseWtkOW8gOWni+S4i+mZjVxyXG4gICAgICAgICAgICBib3gubW92ZS5zdG9wKFwibW92ZVwiKTsvL+WBnOatouaSreaUvuenu+WKqOWKqOeUu1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+S6huebuOaculwiKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoZW5nY2hlbmcoKTtcclxuICAgICAgICAgICAgfSwwLjUpOy8v5Li65LqG6Ziy5q2i566x5a2Q5aCG5Yiw5LiA5Z2X77yM5ZyoMC4156eS5ZCO55Sf5oiQ5paw55qE566x5a2QXHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMC41Oy8v6ZqP5py65Yqg5YiG5pWwXHJcbiAgICAgICAgICAgIHRoaXMuaXNvayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNvayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sMC41KTsvLzAuNeenkuWQjuaJjeWPr+S7pee7p+e7reeUn+aIkOaWsOeuseWtkFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaGVuZ2NoZW5nKCl7Ly/nlJ/miJDmlrDnrrHlrZBcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm94KS8v5L2g6KaB5aSN5Yi255qE6IqC54K55ZCN56ewXHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJveFBhcmVudDsvL+WkjeWItuiKgueCueeahOeItuiKgueCueaYr+S7gOS5iFxyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwodGhpcy54aWFuZ2ppLnkrdGhpcy54aWFuZ2ppLmhlaWdodC8yKS10aGlzLmJveF9zZWxmLmhlaWdodC01MCkpOy8v5aSN5Yi255qE6IqC54K555qE5L2N572uXHJcblxyXG4gICAgICAgIGxldCBwb3MgOiBjYy5WZWMyW10gPSBbXTtcclxuICAgICAgICBwb3MucHVzaChjYy52Mih0aGlzLnhpYW5namkucG9zaXRpb24pKTtcclxuICAgICAgICBwb3MucHVzaChjYy52MigwLHRoaXMueGlhbmdqaS55K3RoaXMuYm94X3NlbGYuaGVpZ2h0KSk7XHJcblxyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi55Sf5oiQ5LqG5paw55qE566x5a2QXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/Box.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea81a0aVfNCnLHSfyLuV4bi', 'Box');
// scripts/lsm/Box.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.self = null; //自身刚体
        _this.self_box = null; //自身物理碰撞
        _this.self_collision = null; //自身碰撞
        _this.me = null; //自身
        _this.move = null; //箱子移动时的动画
        _this.isdown = false; //是否在向下降
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.self.type = cc.RigidBodyType.Static; //开始时刚体是静止的
        this.move.play("move"); //播放移动动画
    };
    NewClass.prototype.update = function () {
        if (this.isdown == true) { //如果箱子正在下降
            this.self.type = cc.RigidBodyType.Dynamic; //刚体变成动态的
        }
    };
    __decorate([
        property(cc.RigidBody)
    ], NewClass.prototype, "self", void 0);
    __decorate([
        property(cc.PhysicsBoxCollider)
    ], NewClass.prototype, "self_box", void 0);
    __decorate([
        property(cc.BoxCollider)
    ], NewClass.prototype, "self_collision", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "me", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "move", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4QkM7UUEzQkcsVUFBSSxHQUFnQixJQUFJLENBQUMsQ0FBQSxNQUFNO1FBRy9CLGNBQVEsR0FBeUIsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUc5QyxvQkFBYyxHQUFrQixJQUFJLENBQUMsQ0FBQSxNQUFNO1FBRzNDLFFBQUUsR0FBVyxJQUFJLENBQUMsQ0FBQSxJQUFJO1FBR3RCLFVBQUksR0FBZ0IsSUFBSSxDQUFDLENBQUEsVUFBVTtRQUVuQyxZQUFNLEdBQVcsS0FBSyxDQUFDLENBQUEsUUFBUTs7SUFhbkMsQ0FBQztJQVhHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBLFdBQVc7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSxRQUFRO0lBQ25DLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBQyxFQUFDLFVBQVU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxTQUFTO1NBQ3REO0lBQ0wsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNFO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzs4Q0FDTTtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNZO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0E7SUFHbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDRTtJQWZSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QjVCO0lBQUQsZUFBQztDQTlCRCxBQThCQyxDQTlCcUMsRUFBRSxDQUFDLFNBQVMsR0E4QmpEO2tCQTlCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXHJcbiAgICBzZWxmOmNjLlJpZ2lkQm9keSA9IG51bGw7Ly/oh6rouqvliJrkvZNcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUGh5c2ljc0JveENvbGxpZGVyKVxyXG4gICAgc2VsZl9ib3g6Y2MuUGh5c2ljc0JveENvbGxpZGVyID0gbnVsbDsvL+iHqui6q+eJqeeQhueisOaSnlxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Cb3hDb2xsaWRlcilcclxuICAgIHNlbGZfY29sbGlzaW9uOmNjLkJveENvbGxpZGVyID0gbnVsbDsvL+iHqui6q+eisOaSnlxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWU6Y2MuTm9kZSA9IG51bGw7Ly/oh6rouqtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgbW92ZTpjYy5BbmltYXRpb24gPSBudWxsOy8v566x5a2Q56e75Yqo5pe255qE5Yqo55S7XHJcblxyXG4gICAgaXNkb3duOmJvb2xlYW4gPSBmYWxzZTsvL+aYr+WQpuWcqOWQkeS4i+mZjVxyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMuc2VsZi50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7Ly/lvIDlp4vml7bliJrkvZPmmK/pnZnmraLnmoRcclxuICAgICAgICB0aGlzLm1vdmUucGxheShcIm1vdmVcIik7Ly/mkq3mlL7np7vliqjliqjnlLtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICBpZih0aGlzLmlzZG93biA9PSB0cnVlKXsvL+WmguaenOeuseWtkOato+WcqOS4i+mZjVxyXG4gICAgICAgICAgICB0aGlzLnNlbGYudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYzsvL+WImuS9k+WPmOaIkOWKqOaAgeeahFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/label - test 3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15118rlqIVKALxkVOgi3q3M', 'label - test 3');
// scripts/zyy/label - test 3.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '第三题'
    }, {
      content: '上面哪个语句会让机器人无限循环下去？'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.node.getChildByName("ButtonA").active = false;
    this.node.getChildByName("ButtonB").active = false;
    this.node.getChildByName("ButtonC").active = false;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        this.node.getChildByName("ButtonA").active = true;
        this.node.getChildByName("ButtonB").active = true;
        this.node.getChildByName("ButtonC").active = true;
        this.textIndex++;
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsYWJlbCAtIHRlc3QgMy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLRztBQUNKLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sRUFFTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUZNLENBQVY7QUFJQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVDLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsS0FBS0MsU0FBakMsRUFBMkMsSUFBM0MsRUFMSSxDQUs2QztBQUNwRCxHQVhJO0FBWUxDLEVBQUFBLFNBWkssdUJBWU07QUFDUFosSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FB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Q0QsYUFBS04sT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFFSjtBQTVFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+esrOS4iemimCd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5LiK6Z2i5ZOq5Liq6K+t5Y+l5Lya6K6p5py65Zmo5Lq65peg6ZmQ5b6q546v5LiL5Y6777yfJ30sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkFcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkJcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkNcIikuYWN0aXZlPWZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHREYXRhKHRoaXMudGV4dERhdGVBcnJbdGhpcy50ZXh0SW5kZXhdKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0SW5kZXg9PXRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkFcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25CXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uQ1wiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG5cclxuICAgIH0sXHJcbiAgICBjbG9zZURpYWxvZygpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBpZighdGhpcy5ub3dUZXh0KXJldHVybjtcclxuICAgICAgICB0aGlzLnR0Kz1kdDtcclxuICAgICAgICBpZih0aGlzLnR0Pj0wLjEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoPHRoaXMubm93VGV4dC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPXRoaXMubm93VGV4dC5zbGljZSgwLHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGgrMSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHQ9MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/label.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b517wCIqtICIGkuEuO/d6E', 'label');
// scripts/zyy/label.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '你顺着楼梯来到教学楼一楼'
    }, {
      content: '却看到门被一个放大数倍的社团机器人挡住'
    }, {
      content: '你愣在原地，它看到你竟然开口说话了：'
    }, {
      content: '“没想到你能来到这里，我可悲的操纵者”'
    }, {
      content: '“你还记得你曾经有多少次编错代码”'
    }, {
      content: '“有多少次让我失去平衡、重重倒地吗”'
    }, {
      content: '“你这样的人有什么资格继续做我的主宰呢？”'
    }, {
      content: '“既然你来了”'
    }, {
      content: '“准备好迎接最后的挑战吧！”'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  //  start () {
  //     this.text.string = '';
  //     var str = '想要带你去看浪漫的土耳其';
  //     var j = 0;
  //     var interval = 0.2;// 以1秒为单位的时间间隔
  //     var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
  //     var delay = 1;// 我们在1秒后开始运行
  //     this.schedule(function() {
  //         this.text.string += str[j];
  //         j++;
  //     }, interval, repeat, delay);
  // },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      this.closeDialog();
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsYWJlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImxlbmd0aCIsInNldFRleHREYXRhIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0ZSIsInN0cmluZyIsInVwZGF0ZSIsImR0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0s7QUFETCxHQUZQO0FBS0xDLEVBQUFBLE1BTEssb0JBS0c7QUFDSixTQUFLQyxJQUFMLENBQVUsQ0FDTjtBQUFDQyxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQURNLEVBRU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FGTSxFQUdOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBSE0sRUFJTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUpNLEVBS047QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FMTSxFQU1OO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBTk0sRUFPTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQVBNLEVBUU47QUFBQ0EsTUFBQUEsT0FB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L2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHRMYWJlbDpjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLmluaXQoW1xyXG4gICAgICAgICAgICB7Y29udGVudDon5L2g6aG6552A5qW85qKv5p2l5Yiw5pWZ5a2m5qW85LiA5qW8J30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifljbTnnIvliLDpl6jooqvkuIDkuKrmlL7lpKfmlbDlgI3nmoTnpL7lm6LmnLrlmajkurrmjKHkvY8nfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+S9oOaEo+WcqOWOn+WcsO+8jOWug+eci+WIsOS9oOern+eEtuW8gOWPo+ivtOivneS6hu+8mid9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon4oCc5rKh5oOz5Yiw5L2g6IO95p2l5Yiw6L+Z6YeM77yM5oiR5Y+v5oKy55qE5pON57q16ICF4oCdJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifigJzkvaDov5jorrDlvpfkvaDmm77nu4/mnInlpJrlsJHmrKHnvJbplJnku6PnoIHigJ0nfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+KAnOacieWkmuWwkeasoeiuqeaIkeWkseWOu+W5s+ihoeOAgemHjemHjeWAkuWcsOWQl+KAnSd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon4oCc5L2g6L+Z5qC355qE5Lq65pyJ5LuA5LmI6LWE5qC857un57ut5YGa5oiR55qE5Li75a6w5ZGi77yf4oCdJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifigJzml6LnhLbkvaDmnaXkuobigJ0nfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+KAnOWHhuWkh+Wlvei/juaOpeacgOWQjueahOaMkeaImOWQp++8geKAnSd9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gIHN0YXJ0ICgpIHtcclxuICAgIC8vICAgICB0aGlzLnRleHQuc3RyaW5nID0gJyc7XHJcbiAgICAvLyAgICAgdmFyIHN0ciA9ICfmg7PopoHluKbkvaDljrvnnIvmtarmvKvnmoTlnJ/ogLPlhbYnO1xyXG4gICAgLy8gICAgIHZhciBqID0gMDtcclxuICAgIC8vICAgICB2YXIgaW50ZXJ2YWwgPSAwLjI7Ly8g5LulMeenkuS4uuWNleS9jeeahOaXtumXtOmXtOmalFxyXG4gICAgLy8gICAgIHZhciByZXBlYXQgPSBzdHIubGVuZ3RoIC0gMTsvLyDph43lpI3mrKHmlbAgPSDlrZfnrKbkuLLplb/luqYgLSAxXHJcbiAgICAvLyAgICAgdmFyIGRlbGF5ID0gMTsvLyDmiJHku6zlnKgx56eS5ZCO5byA5aeL6L+Q6KGMXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyArPSBzdHJbal07XHJcbiAgICAvLyAgICAgICAgIGorKztcclxuICAgIC8vICAgICB9LCBpbnRlcnZhbCwgcmVwZWF0LCBkZWxheSk7XHJcbiAgICAvLyB9LFxyXG4gICAgaW5pdCh0ZXh0RGF0ZUFycil7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgdGhpcy50dD0wOy8v5pKt5pS+55qE5oC75pe26ZW/XHJcbiAgICAgICAgdGhpcy50ZXh0SW5kZXg9LTE7XHJcbiAgICAgICAgdGhpcy50ZXh0RGF0ZUFycj10ZXh0RGF0ZUFycjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgdGhpcy5uZXh0VGV4dERhdGEoKVxyXG4gICAgfSxcclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0VGV4dERhdGEodGV4dERhdGUpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD1mYWxzZTtcclxuICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9Jyc7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PXRleHREYXRlLmNvbnRlbnQ7XHJcblxyXG4gICAgfSxcclxuICAgIGNsb3NlRGlhbG9nKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZHQpe1xyXG4gICAgICAgIGlmKCF0aGlzLm5vd1RleHQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudHQrPWR0O1xyXG4gICAgICAgIGlmKHRoaXMudHQ+PTAuMSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGg8dGhpcy5ub3dUZXh0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9dGhpcy5ub3dUZXh0LnNsaWNlKDAsdGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aCsxKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50dD0wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/good_ending - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99c9130GOdPD5NiKtwDhtFK', 'good_ending - 001');
// scripts/zyy/good_ending - 001.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '队友对你说：“别走神呀！看我发现了什么”'
    }, {
      content: '“bug就在这里，一个不起眼的小错误”'
    }, {
      content: '“改完我又跑了一遍，机器人的动作简直完美！”'
    }, {
      content: '“我们明年继续参赛吧，一定能拿一个好成绩！”'
    }, {
      content: '你看向队友，露出了久违的笑容'
    }, {
      content: '达成结局：N.O.P.E.'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  //  start () {
  //     this.text.string = '';
  //     var str = '想要带你去看浪漫的土耳其';
  //     var j = 0;
  //     var interval = 0.2;// 以1秒为单位的时间间隔
  //     var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
  //     var delay = 1;// 我们在1秒后开始运行
  //     this.schedule(function() {
  //         this.text.string += str[j];
  //         j++;
  //     }, interval, repeat, delay);
  // },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      this.closeDialog();
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxnb29kX2VuZGluZyAtIDAwMS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImxlbmd0aCIsInNldFRleHREYXRhIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0ZSIsInN0cmluZyIsInVwZGF0ZSIsImR0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0s7QUFETCxHQUZQO0FBS0xDLEVBQUFBLE1BTEssb0JBS0c7QUFDSixTQUFLQyxJQUFMLENBQVUsQ0FDTjtBQUFDQyxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQURNLEVBRU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FGTSxFQUdOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBSE0sRUFJTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUpNLEVBS047QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FMTSxFQU1OO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBTk0sQ0FBVjtBQVFBUixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUMsRUFBZixDQUFrQixTQUFsQixFQUE0QixLQUFLQyxTQUFqQyxFQUEyQyxJQUEzQyxFQVRJLENBUzZDO0FBQ3BELEdBZkk7QUFnQkxDLEVBQUFBLFNBaEJLLHVCQWdCTTtBQUNQWixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUksR0FBZixDQUFtQixTQUFuQixFQUE2QixLQUFLRixTQUFsQyxFQUE0QyxJQUE1QztBQUNILEdBbEJJO0FBbUJMQSxFQUFBQSxTQW5CSyxxQkFtQktHLENBbkJMLEVBbUJPO0FBQ1IsWUFBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0ksV0FBS2YsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWxCO0FBQXdCO0FBQ3BCLGVBQUtDLFlBQUw7QUFDQTtBQUNIO0FBSkw7QUFNSCxHQTFCSTtBQTJCTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVosRUFBQUEsSUF2Q0ssZ0JBdUNBYSxXQXZDQSxFQXVDWTtBQUNiLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxFQUFMLEdBQVEsQ0FBUixDQUhhLENBR0g7O0FBQ1YsU0FBS0MsU0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSxTQUFLSixXQUFMLEdBQWlCQSxXQUFqQjtBQUNBLFNBQUtLLElBQUwsQ0FBVUMsTUFBVixHQUFpQixJQUFqQjtBQUNBLFNBQUtQLFlBQUw7QUFDSCxHQS9DSTtBQWdETEEsRUFBQUEsWUFoREssMEJBZ0RTO0FBQ1YsUUFBRyxDQUFDLEtBQUtHLE9BQVQsRUFBaUI7O0FBQ2pCLFFBQUcsRUFBRSxLQUFLRSxTQUFQLEdBQWtCLEtBQUtKLFdBQUwsQ0FBaUJPLE1BQXRDLEVBQTZDO0FBQ3pDLFdBQUtDLFdBQUwsQ0FBaUIsS0FBS1IsV0FBTCxDQUFpQixLQUFLSSxTQUF0QixDQUFqQjtBQUNILEtBRkQsTUFFSztBQUNELFdBQUtLLFdBQUw7QUFDSDtBQUNKLEdBdkRJO0FBd0RMRCxFQUFBQSxXQXhESyx1QkF3RE9FLFFBeERQLEVBd0RnQjtBQUNqQixRQUFHLENBQUMsS0FBS1IsT0FBVCxFQUFpQjtBQUNqQixTQUFLQSxPQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUtsQixTQUFMLENBQWUyQixNQUFmLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS1YsT0FBTCxHQUFhUyxRQUFRLENBQUN0QixPQUF0QjtBQUVILEdBOURJO0FBK0RMcUIsRUFBQUEsV0EvREsseUJBK0RRO0FBQ1QsU0FBS0osSUFBTCxDQUFVQyxNQUFWLEdBQWlCLEtBQWpCO0FBQ0gsR0FqRUk7QUFrRUxNLEVBQUFBLE1BbEVLLGtCQWtFRUMsRUFsRUYsRUFrRUs7QUFDTixRQUFHLENBQUMsS0FBS1osT0FBVCxFQUFpQjtBQUNqQixTQUFLRSxFQUFMLElBQVNVLEVBQVQ7O0FBQ0EsUUFBRyxLQUFLVixFQUFMLElBQVMsR0FBWixFQUFnQjtBQUNaLFVBQUcsS0FBS25CLFNBQUwsQ0FBZTJCLE1BQWYsQ0FBc0JKLE1BQXRCLEdBQTZCLEtBQUtOLE9BQUwsQ0FBYU0sTUFBN0MsRUFBb0Q7QUFDaEQsYUFBS3ZCLFNBQUwsQ0FBZTJCLE1BQWYsR0FBc0IsS0FBS1YsT0FBTCxDQUFhYSxLQUFiLENBQW1CLENBQW5CLEVBQXFCLEtBQUs5QixTQUFMLENBQWUyQixNQUFmLENBQXNCSixNQUF0QixHQUE2QixDQUFsRCxDQUF0QjtBQUNILE9BRkQsTUFFSztBQUNELGFBQUtMLE9BQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS0QsT0FBTCxHQUFhLElBQWI7QUFDSDs7QUFDRCxXQUFLRSxFQUFMLEdBQVEsQ0FBUjtBQUNIO0FBRUo7QUEvRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGV4dExhYmVsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMuaW5pdChbXHJcbiAgICAgICAgICAgIHtjb250ZW50OifpmJ/lj4vlr7nkvaDor7TvvJrigJzliKvotbDnpZ7lkYDvvIHnnIvmiJHlj5HnjrDkuobku4DkuYjigJ0nfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+KAnGJ1Z+WwseWcqOi/memHjO+8jOS4gOS4quS4jei1t+ecvOeahOWwj+mUmeivr+KAnSd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon4oCc5pS55a6M5oiR5Y+I6LeR5LqG5LiA6YGN77yM5py65Zmo5Lq655qE5Yqo5L2c566A55u05a6M576O77yB4oCdJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifigJzmiJHku6zmmI7lubTnu6fnu63lj4LotZvlkKfvvIzkuIDlrprog73mi7/kuIDkuKrlpb3miJDnu6nvvIHigJ0nfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+S9oOeci+WQkemYn+WPi++8jOmcsuWHuuS6huS5hei/neeahOeskeWuuSd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon6L6+5oiQ57uT5bGA77yaTi5PLlAuRS4nfSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7Ly/nu5HlrprplK7nm5hcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93bihlKXtcclxuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGV4dERhdGEoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vICBzdGFydCAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy50ZXh0LnN0cmluZyA9ICcnO1xyXG4gICAgLy8gICAgIHZhciBzdHIgPSAn5oOz6KaB5bim5L2g5Y6755yL5rWq5ryr55qE5Zyf6ICz5YW2JztcclxuICAgIC8vICAgICB2YXIgaiA9IDA7XHJcbiAgICAvLyAgICAgdmFyIGludGVydmFsID0gMC4yOy8vIOS7pTHnp5LkuLrljZXkvY3nmoTml7bpl7Tpl7TpmpRcclxuICAgIC8vICAgICB2YXIgcmVwZWF0ID0gc3RyLmxlbmd0aCAtIDE7Ly8g6YeN5aSN5qyh5pWwID0g5a2X56ym5Liy6ZW/5bqmIC0gMVxyXG4gICAgLy8gICAgIHZhciBkZWxheSA9IDE7Ly8g5oiR5Lus5ZyoMeenkuWQjuW8gOWni+i/kOihjFxyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudGV4dC5zdHJpbmcgKz0gc3RyW2pdO1xyXG4gICAgLy8gICAgICAgICBqKys7XHJcbiAgICAvLyAgICAgfSwgaW50ZXJ2YWwsIHJlcGVhdCwgZGVsYXkpO1xyXG4gICAgLy8gfSxcclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubmV4dFRleHREYXRhKClcclxuICAgIH0sXHJcbiAgICBuZXh0VGV4dERhdGEoKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICBpZigrK3RoaXMudGV4dEluZGV4PCB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dERhdGEodGhpcy50ZXh0RGF0ZUFyclt0aGlzLnRleHRJbmRleF0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG5cclxuICAgIH0sXHJcbiAgICBjbG9zZURpYWxvZygpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBpZighdGhpcy5ub3dUZXh0KXJldHVybjtcclxuICAgICAgICB0aGlzLnR0Kz1kdDtcclxuICAgICAgICBpZih0aGlzLnR0Pj0wLjEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoPHRoaXMubm93VGV4dC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPXRoaXMubm93VGV4dC5zbGljZSgwLHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGgrMSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHQ9MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/label - test 2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd103b/Z5gNJW7BUHDwADDh3', 'label - test 2');
// scripts/zyy/label - test 2.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '第二题'
    }, {
      content: '那么机器人如何存储这间教室的门牌号309的呢'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.node.getChildByName("ButtonA").active = false;
    this.node.getChildByName("ButtonB").active = false;
    this.node.getChildByName("ButtonC").active = false;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        this.node.getChildByName("ButtonA").active = true;
        this.node.getChildByName("ButtonB").active = true;
        this.node.getChildByName("ButtonC").active = true;
        this.textIndex++;
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsYWJlbCAtIHRlc3QgMi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLRztBQUNKLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sRUFFTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUZNLENBQVY7QUFJQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVDLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsS0FBS0MsU0FBakMsRUFBMkMsSUFBM0MsRUFMSSxDQUs2QztBQUNwRCxHQVhJO0FBWUxDLEVBQUFBLFNBWkssdUJBWU07QUFDUFosSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FB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Q0QsYUFBS04sT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFFSjtBQTVFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+esrOS6jOmimCd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon6YKj5LmI5py65Zmo5Lq65aaC5L2V5a2Y5YKo6L+Z6Ze05pWZ5a6k55qE6Zeo54mM5Y+3MzA555qE5ZGiJ30sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkFcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkJcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkNcIikuYWN0aXZlPWZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHREYXRhKHRoaXMudGV4dERhdGVBcnJbdGhpcy50ZXh0SW5kZXhdKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0SW5kZXg9PXRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkFcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25CXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uQ1wiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG5cclxuICAgIH0sXHJcbiAgICBjbG9zZURpYWxvZygpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBpZighdGhpcy5ub3dUZXh0KXJldHVybjtcclxuICAgICAgICB0aGlzLnR0Kz1kdDtcclxuICAgICAgICBpZih0aGlzLnR0Pj0wLjEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoPHRoaXMubm93VGV4dC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPXRoaXMubm93VGV4dC5zbGljZSgwLHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGgrMSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHQ9MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/label - test 4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b203bc/QMRITpjwO69oyj8u', 'label - test 4');
// scripts/zyy/label - test 4.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '第四题'
    }, {
      content: '定义谓词Prog（x），x是需要编程序的课。Like（x,y）x喜欢y。谓词公式Prog（x）→Like（you，x）表示的事实为'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.node.getChildByName("ButtonA").active = false;
    this.node.getChildByName("ButtonB").active = false;
    this.node.getChildByName("ButtonC").active = false;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        this.node.getChildByName("ButtonA").active = true;
        this.node.getChildByName("ButtonB").active = true;
        this.node.getChildByName("ButtonC").active = true;
        this.textIndex++;
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsYWJlbCAtIHRlc3QgNC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLRztBQUNKLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sRUFHTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUhNLENBQVY7QUFLQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVDLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsS0FBS0MsU0FBakMsRUFBMkMsSUFBM0MsRUFOSSxDQU02QztBQUNwRCxHQVpJO0FBYUxDLEVBQUFBLFNBYkssdUJBYU07QUFDUFosSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FB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RUs7QUFDRCxhQUFLTixPQUFMLEdBQWEsSUFBYjtBQUNBLGFBQUtELE9BQUwsR0FBYSxJQUFiO0FBQ0g7O0FBQ0QsV0FBS0UsRUFBTCxHQUFRLENBQVI7QUFDSDtBQUVKO0FBN0VJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHRMYWJlbDpjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLmluaXQoW1xyXG4gICAgICAgICAgICB7Y29udGVudDon56ys5Zub6aKYJ30sXHJcblxyXG4gICAgICAgICAgICB7Y29udGVudDon5a6a5LmJ6LCT6K+NUHJvZ++8iHjvvInvvIx45piv6ZyA6KaB57yW56iL5bqP55qE6K++44CCTGlrZe+8iHgsee+8iXjllpzmrKJ544CC6LCT6K+N5YWs5byPUHJvZ++8iHjvvInihpJMaWtl77yIeW9177yMeO+8ieihqOekuueahOS6i+WunuS4uid9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBpbml0KHRleHREYXRlQXJyKXtcclxuICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnR0PTA7Ly/mkq3mlL7nmoTmgLvml7bplb9cclxuICAgICAgICB0aGlzLnRleHRJbmRleD0tMTtcclxuICAgICAgICB0aGlzLnRleHREYXRlQXJyPXRleHREYXRlQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25BXCIpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25CXCIpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25DXCIpLmFjdGl2ZT1mYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5uZXh0VGV4dERhdGEoKVxyXG4gICAgfSxcclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGV4dEluZGV4PT10aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25BXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uQlwiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkNcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0ZSl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPWZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz0nJztcclxuICAgICAgICB0aGlzLm5vd1RleHQ9dGV4dERhdGUuY29udGVudDtcclxuXHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/label4.1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '460c8KTptpNPpBbE/+zK49j', 'label4.1');
// scripts/zyy/label4.1.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '你的计算机基础扎实，辑能力也不差'
    }, {
      content: '将来会是个合格的程序员。'
    }, {
      content: '只是答应我，别再碰机器人了，'
    }, {
      content: '那超出了你的能力范围，'
    }, {
      content: '是你永远无法企及的高度！'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  //  start () {
  //     this.text.string = '';
  //     var str = '想要带你去看浪漫的土耳其';
  //     var j = 0;
  //     var interval = 0.2;// 以1秒为单位的时间间隔
  //     var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
  //     var delay = 1;// 我们在1秒后开始运行
  //     this.schedule(function() {
  //         this.text.string += str[j];
  //         j++;
  //     }, interval, repeat, delay);
  // },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      this.closeDialog();
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsYWJlbDQuMS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImxlbmd0aCIsInNldFRleHREYXRhIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0ZSIsInN0cmluZyIsInVwZGF0ZSIsImR0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0s7QUFETCxHQUZQO0FBS0xDLEVBQUFBLE1BTEssb0JBS0c7QUFDSixTQUFLQyxJQUFMLENBQVUsQ0FDTjtBQUFDQyxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQURNLEVBRU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FGTSxFQUdOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBSE0sRUFJTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUpNLEVBS047QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FMTSxDQUFWO0FBT0FSLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlQyxFQUFmLENBQWtCLFNBQWxCLEVBQTRCLEtBQUtDLFNBQWpDLEVBQTJDLElBQTNDLEVBUkksQ0FRNkM7QUFDcEQsR0FkSTtBQWVMQyxFQUFBQSxTQWZLLHVCQWVNO0FBQ1BaLElBQUFBLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlSSxHQUFmLENBQW1CLFNBQW5CLEVBQTZCLEtBQUtGLFNBQWxDLEVBQTRDLElBQTVDO0FBQ0gsR0FqQkk7QUFrQkxBLEVBQUFBLFNBbEJLLHFCQWtCS0csQ0FsQkwsRUFrQk87QUFDUixZQUFPQSxDQUFDLENBQUNDLE9BQVQ7QUFDSSxXQUFLZixFQUFFLENBQUNnQixLQUFILENBQVNDLEdBQVQsQ0FBYUMsS0FBbEI7QUFBd0I7QUFDcEIsZUFBS0MsWUFBTDtBQUNBO0FBQ0g7QUFKTDtBQU1ILEdBekJJO0FBMEJMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBWixFQUFBQSxJQXRDSyxnQkFzQ0FhLFdBdENBLEVBc0NZO0FBQ2IsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtDLEVBQUwsR0FBUSxDQUFSLENBSGEsQ0FHSDs7QUFDVixTQUFLQyxTQUFMLEdBQWUsQ0FBQyxDQUFoQjtBQUNBLFNBQUtKLFdBQUwsR0FBaUJBLFdBQWpCO0FBQ0EsU0FBS0ssSUFBTCxDQUFVQyxNQUFWLEdBQWlCLElBQWpCO0FBQ0EsU0FBS1AsWUFBTDtBQUNILEdBOUNJO0FBK0NMQSxFQUFBQSxZQS9DSywwQkErQ1M7QUFDVixRQUFHLENBQUMsS0FBS0csT0FBVCxFQUFpQjs7QUFDakIsUUFBRyxFQUFFLEtBQUtFLFNBQVAsR0FBa0IsS0FBS0osV0FBTCxDQUFpQk8sTUFBdEMsRUFBNkM7QUFDekMsV0FBS0MsV0FBTCxDQUFpQixLQUFLUixXQUFMLENBQWlCLEtBQUtJLFNBQXRCLENBQWpCO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS0ssV0FBTDtBQUNIO0FBQ0osR0F0REk7QUF1RExELEVBQUFBLFdBdkRLLHVCQXVET0UsUUF2RFAsRUF1RGdCO0FBQ2pCLFFBQUcsQ0FBQyxLQUFLUixPQUFULEVBQWlCO0FBQ2pCLFNBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS2xCLFNBQUwsQ0FBZTJCLE1BQWYsR0FBc0IsRUFBdEI7QUFDQSxTQUFLVixPQUFMLEdBQWFTLFFBQVEsQ0FBQ3RCLE9BQXRCO0FBRUgsR0E3REk7QUE4RExxQixFQUFBQSxXQTlESyx5QkE4RFE7QUFDVCxTQUFLSixJQUFMLENBQVVDLE1BQVYsR0FBaUIsS0FBakI7QUFDSCxHQWhFSTtBQWlFTE0sRUFBQUEsTUFqRUssa0JBaUVFQyxFQWpFRixFQWlFSztBQUNOLFFBQUcsQ0FBQyxLQUFLWixPQUFULEVBQWlCO0FBQ2pCLFNBQUtFLEVBQUwsSUFBU1UsRUFBVDs7QUFDQSxRQUFHLEtBQUtWLEVBQUwsSUFBUyxHQUFaLEVBQWdCO0FBQ1osVUFBRyxLQUFLbkIsU0FBTCxDQUFlMkIsTUFBZixDQUFzQkosTUFBdEIsR0FBNkIsS0FBS04sT0FBTCxDQUFhTSxNQUE3QyxFQUFvRDtBQUNoRCxhQUFLdkIsU0FBTCxDQUFlMkIsTUFBZixHQUFzQixLQUFLVixPQUFMLENBQWFhLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsS0FBSzlCLFNBQUwsQ0FBZTJCLE1BQWYsQ0FBc0JKLE1BQXRCLEdBQTZCLENBQWxELENBQXRCO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsYUFBS0wsT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFFSjtBQTlFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+S9oOeahOiuoeeul+acuuWfuuehgOaJjuWunu+8jOi+keiDveWKm+S5n+S4jeW3rid9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5bCG5p2l5Lya5piv5Liq5ZCI5qC855qE56iL5bqP5ZGY44CCJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50Oiflj6rmmK/nrZTlupTmiJHvvIzliKvlho3norDmnLrlmajkurrkuobvvIwnfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+mCo+i2heWHuuS6huS9oOeahOiDveWKm+iMg+WbtO+8jCd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5piv5L2g5rC46L+c5peg5rOV5LyB5Y+K55qE6auY5bqm77yBJ30sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyAgc3RhcnQgKCkge1xyXG4gICAgLy8gICAgIHRoaXMudGV4dC5zdHJpbmcgPSAnJztcclxuICAgIC8vICAgICB2YXIgc3RyID0gJ+aDs+imgeW4puS9oOWOu+eci+a1qua8q+eahOWcn+iAs+WFtic7XHJcbiAgICAvLyAgICAgdmFyIGogPSAwO1xyXG4gICAgLy8gICAgIHZhciBpbnRlcnZhbCA9IDAuMjsvLyDku6Ux56eS5Li65Y2V5L2N55qE5pe26Ze06Ze06ZqUXHJcbiAgICAvLyAgICAgdmFyIHJlcGVhdCA9IHN0ci5sZW5ndGggLSAxOy8vIOmHjeWkjeasoeaVsCA9IOWtl+espuS4sumVv+W6piAtIDFcclxuICAgIC8vICAgICB2YXIgZGVsYXkgPSAxOy8vIOaIkeS7rOWcqDHnp5LlkI7lvIDlp4vov5DooYxcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRleHQuc3RyaW5nICs9IHN0cltqXTtcclxuICAgIC8vICAgICAgICAgaisrO1xyXG4gICAgLy8gICAgIH0sIGludGVydmFsLCByZXBlYXQsIGRlbGF5KTtcclxuICAgIC8vIH0sXHJcbiAgICBpbml0KHRleHREYXRlQXJyKXtcclxuICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnR0PTA7Ly/mkq3mlL7nmoTmgLvml7bplb9cclxuICAgICAgICB0aGlzLnRleHRJbmRleD0tMTtcclxuICAgICAgICB0aGlzLnRleHREYXRlQXJyPXRleHREYXRlQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHREYXRhKHRoaXMudGV4dERhdGVBcnJbdGhpcy50ZXh0SW5kZXhdKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0ZSl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPWZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz0nJztcclxuICAgICAgICB0aGlzLm5vd1RleHQ9dGV4dERhdGUuY29udGVudDtcclxuXHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cebecqj8WNOR5u+qNdW9m+i', 'login');
// scripts/zyy/login.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var progress = progressBar.progress;

    if (progress > 0) {
      progress += dt;
    } else {
      progress = 1;
    }

    progressBar.progress = progress;
  },
  start: function start() {} // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsb2dpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInByb2dyZXNzIiwicHJvZ3Jlc3NCYXIiLCJkdCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUFDLEVBQUFBLE1BdkJLLG9CQXVCSztBQUNOLFFBQUlDLFFBQVEsR0FBR0MsV0FBVyxDQUFDRCxRQUEzQjs7QUFDSixRQUFJQSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNkQSxNQUFBQSxRQUFRLElBQUlFLEVBQVo7QUFDSCxLQUZELE1BR0s7QUFDREYsTUFBQUEsUUFBUSxHQUFHLENBQVg7QUFDSDs7QUFDREMsSUFBQUEsV0FBVyxDQUFDRCxRQUFaLEdBQXVCQSxRQUF2QjtBQUNDLEdBaENJO0FBa0NMRyxFQUFBQSxLQWxDSyxtQkFrQ0ksQ0FFUixDQXBDSSxDQXNDTDs7QUF0Q0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHByb2dyZXNzQmFyLnByb2dyZXNzO1xyXG4gICAgaWYgKHByb2dyZXNzID4gMCkge1xyXG4gICAgICAgIHByb2dyZXNzICs9IGR0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcHJvZ3Jlc3MgPSAxO1xyXG4gICAgfVxyXG4gICAgcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/a.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08d19+7bJxPI5P8MVqYWQhE', 'a');
// scripts/zzy/a.ts

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
var a = /** @class */ (function (_super) {
    __extends(a, _super);
    function a() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    a.prototype.start = function () {
    };
    a.prototype.update = function (dt) { };
    a.prototype.test = function () {
        cc.director.loadScene("Gamey", function () {
        });
    };
    a = __decorate([
        ccclass
    ], a);
    return a;
}(cc.Component));
exports.default = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenp5XFxhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLHFCQUFZO0lBQTNDOztJQVlBLENBQUM7SUFWRyxpQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtCQUFNLEdBQU4sVUFBUSxFQUFFLElBQUcsQ0FBQztJQUVkLGdCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBWGdCLENBQUM7UUFEckIsT0FBTztPQUNhLENBQUMsQ0FZckI7SUFBRCxRQUFDO0NBWkQsQUFZQyxDQVo4QixFQUFFLENBQUMsU0FBUyxHQVkxQztrQkFab0IsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHRlc3QoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1leVwiLGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/over.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cbe1KeqfhNB6wd1t7huUoq', 'over');
// scripts/zyy/over.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var diary = require('globalVariable');

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onclick_ending: function onclick_ending() {
    if (diary.diaryCollect == 'NOPE') {
      cc.director.loadScene("good_ending");
    } else {
      cc.director.loadScene("fakegoodending");
    }
  },
  // onLoad () {},
  start: function start() {} // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxvdmVyLmpzIl0sIm5hbWVzIjpbImRpYXJ5IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25jbGlja19lbmRpbmciLCJkaWFyeUNvbGxlY3QiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQW5COztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBRUFDLEVBQUFBLGNBQWMsRUFBQywwQkFBVTtBQUNyQixRQUFHTixLQUFLLENBQUNPLFlBQU4sSUFBc0IsTUFBekIsRUFBZ0M7QUFDNUJMLE1BQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLGFBQXRCO0FBQ0gsS0FGRCxNQUVLO0FBQ0RQLE1BQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLGdCQUF0QjtBQUNIO0FBQ0osR0FmSTtBQWlCTDtBQUVBQyxFQUFBQSxLQW5CSyxtQkFtQkksQ0FFUixDQXJCSSxDQXVCTDs7QUF2QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG52YXIgZGlhcnkgPSByZXF1aXJlKCdnbG9iYWxWYXJpYWJsZScpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbmNsaWNrX2VuZGluZzpmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGRpYXJ5LmRpYXJ5Q29sbGVjdCA9PSAnTk9QRScpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnb29kX2VuZGluZ1wiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmFrZWdvb2RlbmRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/label - test 5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b07bCA3ABP46D2rSMGHEOa', 'label - test 5');
// scripts/zyy/label - test 5.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '最后一题'
    }, {
      content: '上面哪项是上海财经大学机器人社团的名称呢？'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.node.getChildByName("ButtonA").active = false;
    this.node.getChildByName("ButtonB").active = false;
    this.node.getChildByName("ButtonC").active = false;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        this.node.getChildByName("ButtonA").active = true;
        this.node.getChildByName("ButtonB").active = true;
        this.node.getChildByName("ButtonC").active = true;
        this.textIndex++;
      } else {
        this.closeDialog();
      }
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsYWJlbCAtIHRlc3QgNS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLRztBQUNKLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sRUFFTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUZNLENBQVY7QUFJQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVDLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsS0FBS0MsU0FBakMsRUFBMkMsSUFBM0MsRUFMSSxDQUs2QztBQUNwRCxHQVhJO0FBWUxDLEVBQUFBLFNBWkssdUJBWU07QUFDUFosSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FB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Q0QsYUFBS04sT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFFSjtBQTVFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+acgOWQjuS4gOmimCd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5LiK6Z2i5ZOq6aG55piv5LiK5rW36LSi57uP5aSn5a2m5py65Zmo5Lq656S+5Zui55qE5ZCN56ew5ZGi77yfJ30sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkFcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkJcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkNcIikuYWN0aXZlPWZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHREYXRhKHRoaXMudGV4dERhdGVBcnJbdGhpcy50ZXh0SW5kZXhdKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0SW5kZXg9PXRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkFcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25CXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uQ1wiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG5cclxuICAgIH0sXHJcbiAgICBjbG9zZURpYWxvZygpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBpZighdGhpcy5ub3dUZXh0KXJldHVybjtcclxuICAgICAgICB0aGlzLnR0Kz1kdDtcclxuICAgICAgICBpZih0aGlzLnR0Pj0wLjEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoPHRoaXMubm93VGV4dC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPXRoaXMubm93VGV4dC5zbGljZSgwLHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGgrMSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHQ9MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/bad_ending.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ec28JVSaJH/qj+CiYcDR53', 'bad_ending');
// scripts/zyy/bad_ending.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    textLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.init([{
      content: '您的结局是：'
    }, {
      content: '您的理智已被逐渐侵蚀'
    }, {
      content: '你转身跑回教室'
    }, {
      content: '脑海里只剩下一件事'
    }, {
      content: '编程！ 编程！！ 编程！！！'
    }, {
      content: '你打开电脑不停地键入，'
    }, {
      content: 'bug越来越多,你的绝望也越来越深'
    }, {
      content: '你不再感到饥饿和疲倦'
    }, {
      content: '你成了程序的奴隶'
    }]);
    cc.systemEvent.on('keydown', this.onKeyDown, this); //绑定键盘
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off('keydown', this.onKeyDown, this);
  },
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.space:
        {
          this.nextTextData();
          break;
        }
    }
  },
  //  start () {
  //     this.text.string = '';
  //     var str = '想要带你去看浪漫的土耳其';
  //     var j = 0;
  //     var interval = 0.2;// 以1秒为单位的时间间隔
  //     var repeat = str.length - 1;// 重复次数 = 字符串长度 - 1
  //     var delay = 1;// 我们在1秒后开始运行
  //     this.schedule(function() {
  //         this.text.string += str[j];
  //         j++;
  //     }, interval, repeat, delay);
  // },
  init: function init(textDateArr) {
    this.nowText = null;
    this.textEnd = true;
    this.tt = 0; //播放的总时长

    this.textIndex = -1;
    this.textDateArr = textDateArr;
    this.node.active = true;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      this.closeDialog();
    }
  },
  setTextData: function setTextData(textDate) {
    if (!this.textEnd) return;
    this.textEnd = false;
    this.textLabel.string = '';
    this.nowText = textDate.content;
  },
  closeDialog: function closeDialog() {
    this.node.active = false;
  },
  update: function update(dt) {
    if (!this.nowText) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      if (this.textLabel.string.length < this.nowText.length) {
        this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
      } else {
        this.textEnd = true;
        this.nowText = null;
      }

      this.tt = 0;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxiYWRfZW5kaW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGV4dExhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJpbml0IiwiY29udGVudCIsInN5c3RlbUV2ZW50Iiwib24iLCJvbktleURvd24iLCJvbkRlc3Ryb3kiLCJvZmYiLCJlIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwic3BhY2UiLCJuZXh0VGV4dERhdGEiLCJ0ZXh0RGF0ZUFyciIsIm5vd1RleHQiLCJ0ZXh0RW5kIiwidHQiLCJ0ZXh0SW5kZXgiLCJub2RlIiwiYWN0aXZlIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLRztBQUNKLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sRUFFTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUZNLEVBR047QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FITSxFQUlOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBSk0sRUFLTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUxNLEVBTU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FOTSxFQU9OO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBUE0sRUFRTjtBQUFDQSxNQUFB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dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGV4dExhYmVsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMuaW5pdChbXHJcbiAgICAgICAgICAgIHtjb250ZW50OifmgqjnmoTnu5PlsYDmmK/vvJonfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+aCqOeahOeQhuaZuuW3suiiq+mAkOa4kOS+teiagCd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5L2g6L2s6Lqr6LeR5Zue5pWZ5a6kJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifohJHmtbfph4zlj6rliankuIvkuIDku7bkuosnfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+e8lueoi++8gSDnvJbnqIvvvIHvvIEg57yW56iL77yB77yB77yBJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifkvaDmiZPlvIDnlLXohJHkuI3lgZzlnLDplK7lhaXvvIwnfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J2J1Z+i2iuadpei2iuWkmizkvaDnmoTnu53mnJvkuZ/otormnaXotormt7EnfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+S9oOS4jeWGjeaEn+WIsOmlpemlv+WSjOeWsuWApid9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5L2g5oiQ5LqG56iL5bqP55qE5aW06Zq2J30sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyAgc3RhcnQgKCkge1xyXG4gICAgLy8gICAgIHRoaXMudGV4dC5zdHJpbmcgPSAnJztcclxuICAgIC8vICAgICB2YXIgc3RyID0gJ+aDs+imgeW4puS9oOWOu+eci+a1qua8q+eahOWcn+iAs+WFtic7XHJcbiAgICAvLyAgICAgdmFyIGogPSAwO1xyXG4gICAgLy8gICAgIHZhciBpbnRlcnZhbCA9IDAuMjsvLyDku6Ux56eS5Li65Y2V5L2N55qE5pe26Ze06Ze06ZqUXHJcbiAgICAvLyAgICAgdmFyIHJlcGVhdCA9IHN0ci5sZW5ndGggLSAxOy8vIOmHjeWkjeasoeaVsCA9IOWtl+espuS4sumVv+W6piAtIDFcclxuICAgIC8vICAgICB2YXIgZGVsYXkgPSAxOy8vIOaIkeS7rOWcqDHnp5LlkI7lvIDlp4vov5DooYxcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRleHQuc3RyaW5nICs9IHN0cltqXTtcclxuICAgIC8vICAgICAgICAgaisrO1xyXG4gICAgLy8gICAgIH0sIGludGVydmFsLCByZXBlYXQsIGRlbGF5KTtcclxuICAgIC8vIH0sXHJcbiAgICBpbml0KHRleHREYXRlQXJyKXtcclxuICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnR0PTA7Ly/mkq3mlL7nmoTmgLvml7bplb9cclxuICAgICAgICB0aGlzLnRleHRJbmRleD0tMTtcclxuICAgICAgICB0aGlzLnRleHREYXRlQXJyPXRleHREYXRlQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHREYXRhKHRoaXMudGV4dERhdGVBcnJbdGhpcy50ZXh0SW5kZXhdKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0ZSl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPWZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz0nJztcclxuICAgICAgICB0aGlzLm5vd1RleHQ9dGV4dERhdGUuY29udGVudDtcclxuXHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/music.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fe7fuNtzdBTbUH9oWp7NkB', 'music');
// scripts/zyy/music.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxtdXNpYy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MO0FBRUE7QUFFQUMsRUFBQUEsS0FWSyxtQkFVSSxDQUVSLENBWkksQ0FjTDs7QUFkSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/turnTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f15adQLwvJPGq6DE/je84AF', 'turnTo');
// scripts/zyy/turnTo.js

"use strict";

var _cc$Class;

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var conscious = require('globalVariable');

var diary = require('globalVariable');

cc.Class((_cc$Class = {
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  toSceneTest1: function toSceneTest1() {
    cc.director.loadScene("scene_test1");
  },
  toSceneTest2: function toSceneTest2() {
    cc.director.loadScene("scene_test2");
  },
  toSceneTest3: function toSceneTest3() {
    cc.director.loadScene("scene_test3");
  },
  toSceneTest4: function toSceneTest4() {
    cc.director.loadScene("scene_test4");
  },
  toSceneTest5: function toSceneTest5() {
    cc.director.loadScene("scene_test5");
  },
  toScene4: function toScene4() {
    cc.director.loadScene("scene4");
  },
  towin: function towin() {
    cc.director.loadScene("Win");
  },
  toywj: function toywj() {
    cc.director.loadScene("Winy");
  },
  tohome: function tohome() {
    cc.director.loadScene("home");
  },
  toGoodending: function toGoodending() {
    cc.director.loadScene("good_ending");
  },
  toBadending: function toBadending() {
    cc.director.loadScene("bad_ending");
  },
  toFgoodending: function toFgoodending() {
    cc.director.loadScene("fakegood_ending");
  },
  torightanser: function torightanser() {
    cc.director.loadScene("right_anser");
  },
  towronganster: function towronganster() {
    conscious.consciousNumber -= 1;
    cc.director.loadScene("wrong_anser");
  },
  tosave: function tosave() {
    cc.director.loadScene("saveScene");
  },
  tohelp: function tohelp() {
    cc.director.loadScene("helping");
  },
  todiary_e: function todiary_e() {
    cc.director.loadScene("diary_e");
  },
  todiary_e1: function todiary_e1() {
    diary.diaryCollect = diary.diaryCollect + "E";
    cc.director.loadScene("diary_e1");
  },
  toscene1: function toscene1() {
    cc.director.loadScene("scene1");
  },
  toscenegoodending001: function toscenegoodending001() {
    cc.director.loadScene("good_ending1");
  },
  toscene4001: function toscene4001() {
    cc.director.loadScene("scene4.1");
  }
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser3");
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser4");
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser5");
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser6");
}, _cc$Class));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFx0dXJuVG8uanMiXSwibmFtZXMiOlsiY29uc2Npb3VzIiwicmVxdWlyZSIsImRpYXJ5IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsInRvU2NlbmVUZXN0MSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwidG9TY2VuZVRlc3QyIiwidG9TY2VuZVRlc3QzIiwidG9TY2VuZVRlc3Q0IiwidG9TY2VuZVRlc3Q1IiwidG9TY2VuZTQiLCJ0b3dpbiIsInRveXdqIiwidG9ob21lIiwidG9Hb29kZW5kaW5nIiwidG9CYWRlbmRpbmciLCJ0b0Znb29kZW5kaW5nIiwidG9yaWdodGFuc2VyIiwidG93cm9uZ2Fuc3RlciIsImNvbnNjaW91c051bWJlciIsInRvc2F2ZSIsInRvaGVscCIsInRvZGlhcnlfZSIsInRvZGlhcnlfZTEiLCJkaWFyeUNvbGxlY3QiLCJ0b3NjZW5lMSIsInRvc2NlbmVnb29kZW5kaW5nMDAxIiwidG9zY2VuZTQwMDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUF2Qjs7QUFDQSxJQUFJQyxLQUFLLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUFuQjs7QUFDQUUsRUFBRSxDQUFDQyxLQUFIO0FBQ0ksYUFBU0QsRUFBRSxDQUFDRSxTQURoQjtBQUdJQyxFQUFBQSxVQUFVLEVBQUUsRUFIaEI7QUFPSTtBQUVBO0FBRUFDLEVBQUFBLEtBWEosbUJBV2EsQ0FFUixDQWJMO0FBY0dDLEVBQUFBLFlBQVksRUFBRSx3QkFBVTtBQUNyQkwsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsYUFBdEI7QUFDQSxHQWhCTjtBQWlCR0MsRUFBQUEsWUFBWSxFQUFFLHdCQUFVO0FBQ3JCUixJQUFBQSxFQUFFLENBQUNNLFFBQUgs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QXRCO0FBQ0YsR0EzRUo7QUE0RUdzQixFQUFBQSxXQUFXLEVBQUUsdUJBQVU7QUFDcEI3QixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QjtBQUNGO0FBOUVKLGdDQStFa0IseUJBQVU7QUFDdEJWLEVBQUFBLFNBQVMsQ0FBQ3dCLGVBQVYsSUFBNkIsQ0FBN0I7QUFDQXJCLEVBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLGNBQXRCO0FBQ0YsQ0FsRkosK0JBbUZrQix5QkFBVTtBQUN0QlYsRUFBQUEsU0FBUyxDQUFDd0IsZUFBVixJQUE2QixDQUE3QjtBQUNBckIsRUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsY0FBdEI7QUFDRixDQXRGSiwrQkF1RmtCLHlCQUFVO0FBQ3RCVixFQUFBQSxTQUFTLENBQUN3QixlQUFWLElBQTZCLENBQTdCO0FBQ0FyQixFQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixjQUF0QjtBQUNGLENBMUZKLCtCQTJGa0IseUJBQVU7QUFDdEJWLEVBQUFBLFNBQVMsQ0FBQ3dCLGVBQVYsSUFBNkIsQ0FBN0I7QUFDQXJCLEVBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLGNBQXRCO0FBQ0YsQ0E5RkoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG52YXIgY29uc2Npb3VzID0gcmVxdWlyZSgnZ2xvYmFsVmFyaWFibGUnKTtcclxudmFyIGRpYXJ5ID0gcmVxdWlyZSgnZ2xvYmFsVmFyaWFibGUnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICB0b1NjZW5lVGVzdDE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lX3Rlc3QxXCIpXHJcbiAgICAgfSxcclxuICAgdG9TY2VuZVRlc3QyOiBmdW5jdGlvbigpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuZV90ZXN0MlwiKVxyXG4gICB9LFxyXG4gICB0b1NjZW5lVGVzdDM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lX3Rlc3QzXCIpXHJcbiAgIH0sXHJcbiAgIHRvU2NlbmVUZXN0NDogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmVfdGVzdDRcIilcclxuICAgfSxcclxuICAgdG9TY2VuZVRlc3Q1OiBmdW5jdGlvbigpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuZV90ZXN0NVwiKVxyXG4gICB9LFxyXG4gICB0b1NjZW5lNDogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmU0XCIpXHJcbiAgICAgfSxcclxuICAgICB0b3dpbjogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiV2luXCIpXHJcbiAgICAgfSxcclxuICAgICB0b3l3ajogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiV2lueVwiKVxyXG4gICAgIH0sXHJcbiAgIHRvaG9tZTogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaG9tZVwiKVxyXG4gICAgIH0sXHJcbiAgIHRvR29vZGVuZGluZzogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ29vZF9lbmRpbmdcIilcclxuICAgfSxcclxuICAgdG9CYWRlbmRpbmc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJhZF9lbmRpbmdcIilcclxuICAgfSxcclxuICAgdG9GZ29vZGVuZGluZzogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmFrZWdvb2RfZW5kaW5nXCIpXHJcbiAgIH0sXHJcbiAgIHRvcmlnaHRhbnNlcjogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicmlnaHRfYW5zZXJcIilcclxuICAgfSxcclxuICAgdG93cm9uZ2Fuc3RlcjogZnVuY3Rpb24oKXtcclxuICAgICAgY29uc2Npb3VzLmNvbnNjaW91c051bWJlciAtPSAxO1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJ3cm9uZ19hbnNlclwiKVxyXG4gICB9LFxyXG4gICB0b3NhdmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNhdmVTY2VuZVwiKVxyXG4gICB9LFxyXG4gICB0b2hlbHA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhlbHBpbmdcIilcclxuICAgfSxcclxuICAgdG9kaWFyeV9lOiBmdW5jdGlvbigpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJkaWFyeV9lXCIpXHJcbiAgIH0sXHJcbiAgIHRvZGlhcnlfZTE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGRpYXJ5LmRpYXJ5Q29sbGVjdCA9IGRpYXJ5LmRpYXJ5Q29sbGVjdCArIFwiRVwiO1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJkaWFyeV9lMVwiKVxyXG4gICB9LFxyXG4gICB0b3NjZW5lMTogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmUxXCIpXHJcbiAgIH0sXHJcbiAgIHRvc2NlbmVnb29kZW5kaW5nMDAxOiBmdW5jdGlvbigpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnb29kX2VuZGluZzFcIilcclxuICAgfSxcclxuICAgdG9zY2VuZTQwMDE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lNC4xXCIpXHJcbiAgIH0sXHJcbiAgIHRvd3JvbmdhbnN0ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIgLT0gMTtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwid3JvbmdfYW5zZXIzXCIpXHJcbiAgIH0sXHJcbiAgIHRvd3JvbmdhbnN0ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIgLT0gMTtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwid3JvbmdfYW5zZXI0XCIpXHJcbiAgIH0sXHJcbiAgIHRvd3JvbmdhbnN0ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIgLT0gMTtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwid3JvbmdfYW5zZXI1XCIpXHJcbiAgIH0sXHJcbiAgIHRvd3JvbmdhbnN0ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIgLT0gMTtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwid3JvbmdfYW5zZXI2XCIpXHJcbiAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/b.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b537dCcmmBP3JNVtht7dw2X', 'b');
// scripts/Scripts/b.ts

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
var b = /** @class */ (function (_super) {
    __extends(b, _super);
    function b() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    b.prototype.start = function () {
    };
    b.prototype.update = function (dt) { };
    b.prototype.test = function () {
        cc.director.loadScene("coward", function () {
        });
    };
    b = __decorate([
        ccclass
    ], b);
    return b;
}(cc.Component));
exports.default = b;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQixxQkFBWTtJQUEzQzs7SUFhQSxDQUFDO0lBVkcsaUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxrQkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUFFZCxnQkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVpnQixDQUFDO1FBRHJCLE9BQU87T0FDYSxDQUFDLENBYXJCO0lBQUQsUUFBQztDQWJELEFBYUMsQ0FiOEIsRUFBRSxDQUFDLFNBQVMsR0FhMUM7a0JBYm9CLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHRlc3QoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJjb3dhcmRcIixmdW5jdGlvbigpeyBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/box.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '219d4/fL0lBAqZH8xbr/cVu', 'box');
// scripts/Scripts/box.ts

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
var box = /** @class */ (function (_super) {
    __extends(box, _super);
    function box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    box.prototype.start = function () {
    };
    box.prototype.update = function (dt) { };
    box.prototype.test = function () {
        cc.director.loadScene("scen5", function () {
        });
    };
    box = __decorate([
        ccclass
    ], box);
    return box;
}(cc.Component));
exports.default = box;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDOztJQWtCQSxDQUFDO0lBZEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixtQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELG9CQUFNLEdBQU4sVUFBUSxFQUFFLElBQUcsQ0FBQztJQUNkLGtCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUM7UUFFOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakJnQixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBa0J2QjtJQUFELFVBQUM7Q0FsQkQsQUFrQkMsQ0FsQmdDLEVBQUUsQ0FBQyxTQUFTLEdBa0I1QztrQkFsQm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJveCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG4gICAgdGVzdCgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW41XCIsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/jump_button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e14c8eyq0FMcYGOAGVlV8z4', 'jump_button');
// scripts/Scripts/jump_button.ts

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
var jump_button = /** @class */ (function (_super) {
    __extends(jump_button, _super);
    function jump_button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jump_button.prototype.start = function () {
    };
    jump_button.prototype.update = function (dt) { };
    jump_button.prototype.test = function () {
        cc.director.loadScene("button", function () {
        });
    };
    jump_button = __decorate([
        ccclass
    ], jump_button);
    return jump_button;
}(cc.Component));
exports.default = jump_button;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcanVtcF9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBYUEsQ0FBQztJQVhHLDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFRLEVBQUUsSUFBRyxDQUFDO0lBRWQsMEJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBQztRQUUvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFaZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWEvQjtJQUFELGtCQUFDO0NBYkQsQUFhQyxDQWJ3QyxFQUFFLENBQUMsU0FBUyxHQWFwRDtrQkFib0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MganVtcF9idXR0b24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge31cclxuXHJcbiAgICB0ZXN0KCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYnV0dG9uXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/elevator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5386b5I+QlIN5HmhS3Y+Xvr', 'elevator');
// scripts/Scripts/elevator.ts

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
var elevator = /** @class */ (function (_super) {
    __extends(elevator, _super);
    function elevator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    elevator.prototype.start = function () {
    };
    elevator.prototype.update = function (dt) { };
    elevator.prototype.test = function () {
        cc.director.loadScene("scen3", function () {
        });
    };
    elevator = __decorate([
        ccclass
    ], elevator);
    return elevator;
}(cc.Component));
exports.default = elevator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcZWxldmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBYUEsQ0FBQztJQVhHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUUsSUFBRyxDQUFDO0lBRWQsdUJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBQztRQUU5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFaZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWE1QjtJQUFELGVBQUM7Q0FiRCxBQWFDLENBYnFDLEVBQUUsQ0FBQyxTQUFTLEdBYWpEO2tCQWJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBlbGV2YXRvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHRlc3QoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuM1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/jump_choice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfe5fwqYc1Coq7CQ+edfq0u', 'jump_choice');
// scripts/Scripts/jump_choice.ts

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
var jump_choice = /** @class */ (function (_super) {
    __extends(jump_choice, _super);
    function jump_choice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jump_choice.prototype.start = function () {
    };
    jump_choice.prototype.update = function (dt) { };
    jump_choice.prototype.test = function () {
        cc.director.loadScene("choice", function () {
        });
    };
    jump_choice = __decorate([
        ccclass
    ], jump_choice);
    return jump_choice;
}(cc.Component));
exports.default = jump_choice;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcanVtcF9jaG9pY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBYUEsQ0FBQztJQVhHLDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFRLEVBQUUsSUFBRyxDQUFDO0lBRWQsMEJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBQztRQUUvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFaZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWEvQjtJQUFELGtCQUFDO0NBYkQsQUFhQyxDQWJ3QyxFQUFFLENBQUMsU0FBUyxHQWFwRDtrQkFib0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MganVtcF9jaG9pY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge31cclxuXHJcbiAgICB0ZXN0KCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiY2hvaWNlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/message.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6eb379DyGdOKbKxnNuReKSY', 'message');
// scripts/Scripts/message.ts

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
var message = /** @class */ (function (_super) {
    __extends(message, _super);
    function message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    message.prototype.start = function () {
    };
    message.prototype.update = function (dt) {
    };
    message.prototype.setMessage = function (content) {
        this.node.children[0].getComponent(cc.Label).string = content;
    };
    message = __decorate([
        ccclass
    ], message);
    return message;
}(cc.Component));
exports.default = message;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDs7SUFhQSxDQUFDO0lBWEcsdUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUFDRCw0QkFBVSxHQUFWLFVBQVcsT0FBYztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBQyxPQUFPLENBQUM7SUFDakUsQ0FBQztJQVhnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBYTNCO0lBQUQsY0FBQztDQWJELEFBYUMsQ0Fib0MsRUFBRSxDQUFDLFNBQVMsR0FhaEQ7a0JBYm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1lc3NhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgIH1cclxuICAgIHNldE1lc3NhZ2UoY29udGVudDpzdHJpbmcpe1xyXG4gICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y29udGVudDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/door.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18b5aMMirZCTZCzg89fiAAo', 'door');
// scripts/Scripts/door.ts

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
var door = /** @class */ (function (_super) {
    __extends(door, _super);
    function door() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    door.prototype.start = function () {
    };
    door.prototype.update = function (dt) { };
    door.prototype.test = function () {
        cc.director.loadScene("scen4", function () {
        });
    };
    door = __decorate([
        ccclass
    ], door);
    return door;
}(cc.Component));
exports.default = door;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcZG9vci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5Qzs7SUFhQSxDQUFDO0lBWEcsb0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxxQkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUFFZCxtQkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFDO1FBRTlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVpnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBYXhCO0lBQUQsV0FBQztDQWJELEFBYUMsQ0FiaUMsRUFBRSxDQUFDLFNBQVMsR0FhN0M7a0JBYm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRvb3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge31cclxuXHJcbiAgICB0ZXN0KCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbjRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/jump_lingjian.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac8e9b6iJRM358yxc4QYSSF', 'jump_lingjian');
// scripts/Scripts/jump_lingjian.ts

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
var jump_lingjian = /** @class */ (function (_super) {
    __extends(jump_lingjian, _super);
    function jump_lingjian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jump_lingjian.prototype.start = function () {
    };
    jump_lingjian.prototype.update = function (dt) { };
    jump_lingjian.prototype.test = function () {
        cc.director.loadScene("lingjian", function () {
        });
    };
    jump_lingjian = __decorate([
        ccclass
    ], jump_lingjian);
    return jump_lingjian;
}(cc.Component));
exports.default = jump_lingjian;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcanVtcF9saW5namlhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDs7SUFhQSxDQUFDO0lBWEcsNkJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUFFZCw0QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDO1FBRWpDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVpnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBYWpDO0lBQUQsb0JBQUM7Q0FiRCxBQWFDLENBYjBDLEVBQUUsQ0FBQyxTQUFTLEdBYXREO2tCQWJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqdW1wX2xpbmdqaWFuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgdGVzdCgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxpbmdqaWFuXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/lingjian.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'feaf9we+ddPm5BXjNBkpHVt', 'lingjian');
// scripts/Scripts/lingjian.ts

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
var lingjian = /** @class */ (function (_super) {
    __extends(lingjian, _super);
    function lingjian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    lingjian.prototype.start = function () {
    };
    lingjian.prototype.update = function (dt) { };
    lingjian.prototype.test = function () {
        cc.director.loadScene("canoon", function () {
        });
    };
    lingjian = __decorate([
        ccclass
    ], lingjian);
    return lingjian;
}(cc.Component));
exports.default = lingjian;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcbGluZ2ppYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBWUEsQ0FBQztJQVZHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUUsSUFBRyxDQUFDO0lBRWQsdUJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFYZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVk1QjtJQUFELGVBQUM7Q0FaRCxBQVlDLENBWnFDLEVBQUUsQ0FBQyxTQUFTLEdBWWpEO2tCQVpvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaW5namlhbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHRlc3QoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJjYW5vb25cIixmdW5jdGlvbigpeyBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/start.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba69fnnR/pBYITuG4Wp18Q8', 'start');
// scripts/zzy/start.ts

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
var start = /** @class */ (function (_super) {
    __extends(start, _super);
    function start() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    start.prototype.start = function () {
    };
    start.prototype.update = function (dt) { };
    start.prototype.test = function () {
        cc.director.loadScene("home", function () {
        });
    };
    start = __decorate([
        ccclass
    ], start);
    return start;
}(cc.Component));
exports.default = start;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenp5XFxzdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQzs7SUFhQSxDQUFDO0lBWEcscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUFFZCxvQkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDO1FBRTdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVpnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBYXpCO0lBQUQsWUFBQztDQWJELEFBYUMsQ0Fia0MsRUFBRSxDQUFDLFNBQVMsR0FhOUM7a0JBYm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXJ0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgdGVzdCgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhvbWVcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lsm/Collision.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9c77OsfXVFwLyMOoqGwbYx', 'Collision');
// scripts/lsm/Collision.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager(); //获取碰撞引擎
        manager.enabled = true; //开启碰撞引擎
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbHNtXFxDb2xsaXNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvQkM7UUFqQkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQWF2QixpQkFBaUI7SUFDckIsQ0FBQztJQVpHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUEsUUFBUTtRQUN4RCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBLFFBQVE7SUFDdEMsQ0FBQztJQUVFLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBZEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0I1QjtJQUFELGVBQUM7Q0FwQkQsQUFvQkMsQ0FwQnFDLEVBQUUsQ0FBQyxTQUFTLEdBb0JqRDtrQkFwQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTsvL+iOt+WPlueisOaSnuW8leaTjlxyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7Ly/lvIDlkK/norDmkp7lvJXmk45cclxuIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zzy/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2290asxEGFOIZ0KGj/wN2+S', 'NewScript');
// scripts/Scripts/NewScript.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var diary = require('glolalVari');

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    diary.diaryCollect = diaryCollect + "P";
  },
  totext: function totext() {
    cc.director.loadScene("dairy_text");
  } // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NyaXB0c1xcTmV3U2NyaXB0LmpzIl0sIm5hbWVzIjpbImRpYXJ5IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJkaWFyeUNvbGxlY3QiLCJ0b3RleHQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxLQUFLLEdBQUNDLE9BQU8sQ0FBQyxZQUFELENBQWpCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJO0FBQ0xOLElBQUFBLEtBQUssQ0FBQ08sWUFBTixHQUFtQkEsWUFBWSxHQUFDLEdBQWhDO0FBQ0gsR0EzQkk7QUE0QkxDLEVBQUFBLE1BQU0sRUFBQyxrQkFBVTtBQUNiTixJQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixZQUF0QjtBQUNILEdBOUJJLENBZ0NMOztBQWhDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxudmFyIGRpYXJ5PXJlcXVpcmUoJ2dsb2xhbFZhcmknKVxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGRpYXJ5LmRpYXJ5Q29sbGVjdD1kaWFyeUNvbGxlY3QrXCJQXCJcclxuICAgIH0sXHJcbiAgICB0b3RleHQ6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJkYWlyeV90ZXh0XCIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
