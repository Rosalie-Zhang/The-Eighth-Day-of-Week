
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