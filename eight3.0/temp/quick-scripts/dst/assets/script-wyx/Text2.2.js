
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