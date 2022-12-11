
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsYWJlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImxlbmd0aCIsInNldFRleHREYXRhIiwiY2xvc2VEaWFsb2ciLCJ0ZXh0RGF0ZSIsInN0cmluZyIsInVwZGF0ZSIsImR0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0s7QUFETCxHQUZQO0FBS0xDLEVBQUFBLE1BTEssb0JBS0c7QUFDSixTQUFLQyxJQUFMLENBQVUsQ0FDTjtBQUFDQyxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQURNLEVBRU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FGTSxFQUdOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBSE0sRUFJTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUpNLEVBS047QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FMTSxFQU1OO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBTk0sRUFPTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQVBNLEVBUU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FSTSxFQVNOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBVE0sQ0FBVjtBQVdBUixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUMsRUFBZixDQUFrQixTQUFsQixFQUE0QixLQUFLQyxTQUFqQyxFQUEyQyxJQUEzQyxFQVpJLENBWTZDO0FBQ3BELEdBbEJJO0FBbUJMQyxFQUFBQSxTQW5CSyx1QkFtQk07QUFDUFosSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FBbkIsRUFBNkIsS0FBS0YsU0FBbEMsRUFBNEMsSUFBNUM7QUFDSCxHQXJCSTtBQXNCTEEsRUFBQUEsU0F0QksscUJBc0JLRyxDQXRCTCxFQXNCTztBQUNSLFlBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNJLFdBQUtmLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxLQUFsQjtBQUF3QjtBQUNwQixlQUFLQyxZQUFMO0FBQ0E7QUFDSDtBQUpMO0FBTUgsR0E3Qkk7QUE4Qkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FaLEVBQUFBLElBMUNLLGdCQTBDQWEsV0ExQ0EsRUEwQ1k7QUFDYixTQUFLQyxPQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsRUFBTCxHQUFRLENBQVIsQ0FIYSxDQUdIOztBQUNWLFNBQUtDLFNBQUwsR0FBZSxDQUFDLENBQWhCO0FBQ0EsU0FBS0osV0FBTCxHQUFpQkEsV0FBakI7QUFDQSxTQUFLSyxJQUFMLENBQVVDLE1BQVYsR0FBaUIsSUFBakI7QUFDQSxTQUFLUCxZQUFMO0FBQ0gsR0FsREk7QUFtRExBLEVBQUFBLFlBbkRLLDBCQW1EUztBQUNWLFFBQUcsQ0FBQyxLQUFLRyxPQUFULEVBQWlCOztBQUNqQixRQUFHLEVBQUUsS0FBS0UsU0FBUCxHQUFrQixLQUFLSixXQUFMLENBQWlCTyxNQUF0QyxFQUE2QztBQUN6QyxXQUFLQyxXQUFMLENBQWlCLEtBQUtSLFdBQUwsQ0FBaUIsS0FBS0ksU0FBdEIsQ0FBakI7QUFDSCxLQUZELE1BRUs7QUFDRCxXQUFLSyxXQUFMO0FBQ0g7QUFDSixHQTFESTtBQTJETEQsRUFBQUEsV0EzREssdUJBMkRPRSxRQTNEUCxFQTJEZ0I7QUFDakIsUUFBRyxDQUFDLEtBQUtSLE9BQVQsRUFBaUI7QUFDakIsU0FBS0EsT0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLbEIsU0FBTCxDQUFlMkIsTUFBZixHQUFzQixFQUF0QjtBQUNBLFNBQUtWLE9BQUwsR0FBYVMsUUFBUSxDQUFDdEIsT0FBdEI7QUFFSCxHQWpFSTtBQWtFTHFCLEVBQUFBLFdBbEVLLHlCQWtFUTtBQUNULFNBQUtKLElBQUwsQ0FBVUMsTUFBVixHQUFpQixLQUFqQjtBQUNILEdBcEVJO0FBcUVMTSxFQUFBQSxNQXJFSyxrQkFxRUVDLEVBckVGLEVBcUVLO0FBQ04sUUFBRyxDQUFDLEtBQUtaLE9BQVQsRUFBaUI7QUFDakIsU0FBS0UsRUFBTCxJQUFTVSxFQUFUOztBQUNBLFFBQUcsS0FBS1YsRUFBTCxJQUFTLEdBQVosRUFBZ0I7QUFDWixVQUFHLEtBQUtuQixTQUFMLENBQWUyQixNQUFmLENBQXNCSixNQUF0QixHQUE2QixLQUFLTixPQUFMLENBQWFNLE1BQTdDLEVBQW9EO0FBQ2hELGFBQUt2QixTQUFMLENBQWUyQixNQUFmLEdBQXNCLEtBQUtWLE9BQUwsQ0FBYWEsS0FBYixDQUFtQixDQUFuQixFQUFxQixLQUFLOUIsU0FBTCxDQUFlMkIsTUFBZixDQUFzQkosTUFBdEIsR0FBNkIsQ0FBbEQsQ0FBdEI7QUFDSCxPQUZELE1BRUs7QUFDRCxhQUFLTCxPQUFMLEdBQWEsSUFBYjtBQUNBLGFBQUtELE9BQUwsR0FBYSxJQUFiO0FBQ0g7O0FBQ0QsV0FBS0UsRUFBTCxHQUFRLENBQVI7QUFDSDtBQUVKO0FBbEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHRMYWJlbDpjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLmluaXQoW1xyXG4gICAgICAgICAgICB7Y29udGVudDon5L2g6aG6552A5qW85qKv5p2l5Yiw5pWZ5a2m5qW85LiA5qW8J30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifljbTnnIvliLDpl6jooqvkuIDkuKrmlL7lpKfmlbDlgI3nmoTnpL7lm6LmnLrlmajkurrmjKHkvY8nfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+S9oOaEo+WcqOWOn+WcsO+8jOWug+eci+WIsOS9oOern+eEtuW8gOWPo+ivtOivneS6hu+8mid9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon4oCc5rKh5oOz5Yiw5L2g6IO95p2l5Yiw6L+Z6YeM77yM5oiR5Y+v5oKy55qE5pON57q16ICF4oCdJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifigJzkvaDov5jorrDlvpfkvaDmm77nu4/mnInlpJrlsJHmrKHnvJbplJnku6PnoIHigJ0nfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+KAnOacieWkmuWwkeasoeiuqeaIkeWkseWOu+W5s+ihoeOAgemHjemHjeWAkuWcsOWQl+KAnSd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon4oCc5L2g6L+Z5qC355qE5Lq65pyJ5LuA5LmI6LWE5qC857un57ut5YGa5oiR55qE5Li75a6w5ZGi77yf4oCdJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifigJzml6LnhLbkvaDmnaXkuobigJ0nfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+KAnOWHhuWkh+Wlvei/juaOpeacgOWQjueahOaMkeaImOWQp++8geKAnSd9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gIHN0YXJ0ICgpIHtcclxuICAgIC8vICAgICB0aGlzLnRleHQuc3RyaW5nID0gJyc7XHJcbiAgICAvLyAgICAgdmFyIHN0ciA9ICfmg7PopoHluKbkvaDljrvnnIvmtarmvKvnmoTlnJ/ogLPlhbYnO1xyXG4gICAgLy8gICAgIHZhciBqID0gMDtcclxuICAgIC8vICAgICB2YXIgaW50ZXJ2YWwgPSAwLjI7Ly8g5LulMeenkuS4uuWNleS9jeeahOaXtumXtOmXtOmalFxyXG4gICAgLy8gICAgIHZhciByZXBlYXQgPSBzdHIubGVuZ3RoIC0gMTsvLyDph43lpI3mrKHmlbAgPSDlrZfnrKbkuLLplb/luqYgLSAxXHJcbiAgICAvLyAgICAgdmFyIGRlbGF5ID0gMTsvLyDmiJHku6zlnKgx56eS5ZCO5byA5aeL6L+Q6KGMXHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyArPSBzdHJbal07XHJcbiAgICAvLyAgICAgICAgIGorKztcclxuICAgIC8vICAgICB9LCBpbnRlcnZhbCwgcmVwZWF0LCBkZWxheSk7XHJcbiAgICAvLyB9LFxyXG4gICAgaW5pdCh0ZXh0RGF0ZUFycil7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgdGhpcy50dD0wOy8v5pKt5pS+55qE5oC75pe26ZW/XHJcbiAgICAgICAgdGhpcy50ZXh0SW5kZXg9LTE7XHJcbiAgICAgICAgdGhpcy50ZXh0RGF0ZUFycj10ZXh0RGF0ZUFycjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgdGhpcy5uZXh0VGV4dERhdGEoKVxyXG4gICAgfSxcclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0VGV4dERhdGEodGV4dERhdGUpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD1mYWxzZTtcclxuICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9Jyc7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PXRleHREYXRlLmNvbnRlbnQ7XHJcblxyXG4gICAgfSxcclxuICAgIGNsb3NlRGlhbG9nKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZHQpe1xyXG4gICAgICAgIGlmKCF0aGlzLm5vd1RleHQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudHQrPWR0O1xyXG4gICAgICAgIGlmKHRoaXMudHQ+PTAuMSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGg8dGhpcy5ub3dUZXh0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9dGhpcy5ub3dUZXh0LnNsaWNlKDAsdGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aCsxKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50dD0wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=