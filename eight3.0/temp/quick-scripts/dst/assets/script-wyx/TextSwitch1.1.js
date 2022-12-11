
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