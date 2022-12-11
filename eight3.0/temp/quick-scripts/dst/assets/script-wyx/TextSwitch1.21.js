
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