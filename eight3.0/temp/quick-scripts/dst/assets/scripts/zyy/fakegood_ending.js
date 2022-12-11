
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