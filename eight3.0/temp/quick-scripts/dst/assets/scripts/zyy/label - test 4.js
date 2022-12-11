
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsYWJlbCAtIHRlc3QgNC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLRztBQUNKLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sRUFHTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUhNLENBQVY7QUFLQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVDLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsS0FBS0MsU0FBakMsRUFBMkMsSUFBM0MsRUFOSSxDQU02QztBQUNwRCxHQVpJO0FBYUxDLEVBQUFBLFNBYkssdUJBYU07QUFDUFosSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FBbkIsRUFBNkIsS0FBS0YsU0FBbEMsRUFBNEMsSUFBNUM7QUFDSCxHQWZJO0FBZ0JMQSxFQUFBQSxTQWhCSyxxQkFnQktHLENBaEJMLEVBZ0JPO0FBQ1IsWUFBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0ksV0FBS2YsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWxCO0FBQXdCO0FBQ3BCLGVBQUtDLFlBQUw7QUFDQTtBQUNIO0FBSkw7QUFNSCxHQXZCSTtBQXlCTFosRUFBQUEsSUF6QkssZ0JBeUJBYSxXQXpCQSxFQXlCWTtBQUNiLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxFQUFMLEdBQVEsQ0FBUixDQUhhLENBR0g7O0FBQ1YsU0FBS0MsU0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSxTQUFLSixXQUFMLEdBQWlCQSxXQUFqQjtBQUNBLFNBQUtLLElBQUwsQ0FBVUMsTUFBVixHQUFpQixJQUFqQjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsY0FBVixDQUF5QixTQUF6QixFQUFvQ0QsTUFBcEMsR0FBMkMsS0FBM0M7QUFDQSxTQUFLRCxJQUFMLENBQVVFLGNBQVYsQ0FBeUIsU0FBekIsRUFBb0NELE1BQXBDLEdBQTJDLEtBQTNDO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxjQUFWLENBQXlCLFNBQXpCLEVBQW9DRCxNQUFwQyxHQUEyQyxLQUEzQztBQUVBLFNBQUtQLFlBQUw7QUFDSCxHQXJDSTtBQXNDTEEsRUFBQUEsWUF0Q0ssMEJBc0NTO0FBQ1YsUUFBRyxDQUFDLEtBQUtHLE9BQVQsRUFBaUI7O0FBQ2pCLFFBQUcsRUFBRSxLQUFLRSxTQUFQLEdBQWtCLEtBQUtKLFdBQUwsQ0FBaUJRLE1BQXRDLEVBQTZDO0FBQ3pDLFdBQUtDLFdBQUwsQ0FBaUIsS0FBS1QsV0FBTCxDQUFpQixLQUFLSSxTQUF0QixDQUFqQjtBQUNILEtBRkQsTUFFSztBQUNELFVBQUcsS0FBS0EsU0FBTCxJQUFnQixLQUFLSixXQUFMLENBQWlCUSxNQUFwQyxFQUEyQztBQUN2QyxhQUFLSCxJQUFMLENBQVVFLGNBQVYsQ0FBeUIsU0FBekIsRUFBb0NELE1BQXBDLEdBQTJDLElBQTNDO0FBQ0EsYUFBS0QsSUFBTCxDQUFVRSxjQUFWLENBQXlCLFNBQXpCLEVBQW9DRCxNQUFwQyxHQUEyQyxJQUEzQztBQUNBLGFBQUtELElBQUwsQ0FBVUUsY0FBVixDQUF5QixTQUF6QixFQUFvQ0QsTUFBcEMsR0FBMkMsSUFBM0M7QUFDQSxhQUFLRixTQUFMO0FBRUgsT0FORCxNQU1LO0FBQ0QsYUFBS00sV0FBTDtBQUNIO0FBQ0o7QUFDSixHQXJESTtBQXNETEQsRUFBQUEsV0F0REssdUJBc0RPRSxRQXREUCxFQXNEZ0I7QUFDakIsUUFBRyxDQUFDLEtBQUtULE9BQVQsRUFBaUI7QUFDakIsU0FBS0EsT0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLbEIsU0FBTCxDQUFlNEIsTUFBZixHQUFzQixFQUF0QjtBQUNBLFNBQUtYLE9BQUwsR0FBYVUsUUFBUSxDQUFDdkIsT0FBdEI7QUFFSCxHQTVESTtBQTZETHNCLEVBQUFBLFdBN0RLLHlCQTZEUTtBQUNULFNBQUtMLElBQUwsQ0FBVUMsTUFBVixHQUFpQixLQUFqQjtBQUNILEdBL0RJO0FBZ0VMTyxFQUFBQSxNQWhFSyxrQkFnRUVDLEVBaEVGLEVBZ0VLO0FBQ04sUUFBRyxDQUFDLEtBQUtiLE9BQVQsRUFBaUI7QUFDakIsU0FBS0UsRUFBTCxJQUFTVyxFQUFUOztBQUNBLFFBQUcsS0FBS1gsRUFBTCxJQUFTLEdBQVosRUFBZ0I7QUFDWixVQUFHLEtBQUtuQixTQUFMLENBQWU0QixNQUFmLENBQXNCSixNQUF0QixHQUE2QixLQUFLUCxPQUFMLENBQWFPLE1BQTdDLEVBQW9EO0FBQ2hELGFBQUt4QixTQUFMLENBQWU0QixNQUFmLEdBQXNCLEtBQUtYLE9BQUwsQ0FBYWMsS0FBYixDQUFtQixDQUFuQixFQUFxQixLQUFLL0IsU0FBTCxDQUFlNEIsTUFBZixDQUFzQkosTUFBdEIsR0FBNkIsQ0FBbEQsQ0FBdEI7QUFDSCxPQUZELE1BRUs7QUFDRCxhQUFLTixPQUFMLEdBQWEsSUFBYjtBQUNBLGFBQUtELE9BQUwsR0FBYSxJQUFiO0FBQ0g7O0FBQ0QsV0FBS0UsRUFBTCxHQUFRLENBQVI7QUFDSDtBQUVKO0FBN0VJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHRMYWJlbDpjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLmluaXQoW1xyXG4gICAgICAgICAgICB7Y29udGVudDon56ys5Zub6aKYJ30sXHJcblxyXG4gICAgICAgICAgICB7Y29udGVudDon5a6a5LmJ6LCT6K+NUHJvZ++8iHjvvInvvIx45piv6ZyA6KaB57yW56iL5bqP55qE6K++44CCTGlrZe+8iHgsee+8iXjllpzmrKJ544CC6LCT6K+N5YWs5byPUHJvZ++8iHjvvInihpJMaWtl77yIeW9177yMeO+8ieihqOekuueahOS6i+WunuS4uid9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBpbml0KHRleHREYXRlQXJyKXtcclxuICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnR0PTA7Ly/mkq3mlL7nmoTmgLvml7bplb9cclxuICAgICAgICB0aGlzLnRleHRJbmRleD0tMTtcclxuICAgICAgICB0aGlzLnRleHREYXRlQXJyPXRleHREYXRlQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25BXCIpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25CXCIpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25DXCIpLmFjdGl2ZT1mYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5uZXh0VGV4dERhdGEoKVxyXG4gICAgfSxcclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGV4dEluZGV4PT10aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25BXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uQlwiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkNcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0ZSl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPWZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz0nJztcclxuICAgICAgICB0aGlzLm5vd1RleHQ9dGV4dERhdGUuY29udGVudDtcclxuXHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==