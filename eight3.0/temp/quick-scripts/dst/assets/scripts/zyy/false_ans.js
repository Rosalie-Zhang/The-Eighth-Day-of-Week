
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