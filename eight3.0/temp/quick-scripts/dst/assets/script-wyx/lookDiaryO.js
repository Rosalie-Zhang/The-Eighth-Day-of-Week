
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