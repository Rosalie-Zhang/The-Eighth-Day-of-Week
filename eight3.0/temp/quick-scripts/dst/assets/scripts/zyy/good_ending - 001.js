
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