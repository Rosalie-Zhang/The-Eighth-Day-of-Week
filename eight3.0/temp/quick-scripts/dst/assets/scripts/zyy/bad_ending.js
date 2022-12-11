
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/bad_ending.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ec28JVSaJH/qj+CiYcDR53', 'bad_ending');
// scripts/zyy/bad_ending.js

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
      content: '您的结局是：'
    }, {
      content: '您的理智已被逐渐侵蚀'
    }, {
      content: '你转身跑回教室'
    }, {
      content: '脑海里只剩下一件事'
    }, {
      content: '编程！ 编程！！ 编程！！！'
    }, {
      content: '你打开电脑不停地键入，'
    }, {
      content: 'bug越来越多,你的绝望也越来越深'
    }, {
      content: '你不再感到饥饿和疲倦'
    }, {
      content: '你成了程序的奴隶'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxiYWRfZW5kaW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGV4dExhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJpbml0IiwiY29udGVudCIsInN5c3RlbUV2ZW50Iiwib24iLCJvbktleURvd24iLCJvbkRlc3Ryb3kiLCJvZmYiLCJlIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwic3BhY2UiLCJuZXh0VGV4dERhdGEiLCJ0ZXh0RGF0ZUFyciIsIm5vd1RleHQiLCJ0ZXh0RW5kIiwidHQiLCJ0ZXh0SW5kZXgiLCJub2RlIiwiYWN0aXZlIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLRztBQUNKLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sRUFFTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUZNLEVBR047QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FITSxFQUlOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBSk0sRUFLTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUxNLEVBTU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FOTSxFQU9OO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBUE0sRUFRTjtBQUFDQSxNQUFB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dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGV4dExhYmVsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMuaW5pdChbXHJcbiAgICAgICAgICAgIHtjb250ZW50OifmgqjnmoTnu5PlsYDmmK/vvJonfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+aCqOeahOeQhuaZuuW3suiiq+mAkOa4kOS+teiagCd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5L2g6L2s6Lqr6LeR5Zue5pWZ5a6kJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifohJHmtbfph4zlj6rliankuIvkuIDku7bkuosnfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+e8lueoi++8gSDnvJbnqIvvvIHvvIEg57yW56iL77yB77yB77yBJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifkvaDmiZPlvIDnlLXohJHkuI3lgZzlnLDplK7lhaXvvIwnfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J2J1Z+i2iuadpei2iuWkmizkvaDnmoTnu53mnJvkuZ/otormnaXotormt7EnfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+S9oOS4jeWGjeaEn+WIsOmlpemlv+WSjOeWsuWApid9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5L2g5oiQ5LqG56iL5bqP55qE5aW06Zq2J30sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyAgc3RhcnQgKCkge1xyXG4gICAgLy8gICAgIHRoaXMudGV4dC5zdHJpbmcgPSAnJztcclxuICAgIC8vICAgICB2YXIgc3RyID0gJ+aDs+imgeW4puS9oOWOu+eci+a1qua8q+eahOWcn+iAs+WFtic7XHJcbiAgICAvLyAgICAgdmFyIGogPSAwO1xyXG4gICAgLy8gICAgIHZhciBpbnRlcnZhbCA9IDAuMjsvLyDku6Ux56eS5Li65Y2V5L2N55qE5pe26Ze06Ze06ZqUXHJcbiAgICAvLyAgICAgdmFyIHJlcGVhdCA9IHN0ci5sZW5ndGggLSAxOy8vIOmHjeWkjeasoeaVsCA9IOWtl+espuS4sumVv+W6piAtIDFcclxuICAgIC8vICAgICB2YXIgZGVsYXkgPSAxOy8vIOaIkeS7rOWcqDHnp5LlkI7lvIDlp4vov5DooYxcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRleHQuc3RyaW5nICs9IHN0cltqXTtcclxuICAgIC8vICAgICAgICAgaisrO1xyXG4gICAgLy8gICAgIH0sIGludGVydmFsLCByZXBlYXQsIGRlbGF5KTtcclxuICAgIC8vIH0sXHJcbiAgICBpbml0KHRleHREYXRlQXJyKXtcclxuICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnR0PTA7Ly/mkq3mlL7nmoTmgLvml7bplb9cclxuICAgICAgICB0aGlzLnRleHRJbmRleD0tMTtcclxuICAgICAgICB0aGlzLnRleHREYXRlQXJyPXRleHREYXRlQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHREYXRhKHRoaXMudGV4dERhdGVBcnJbdGhpcy50ZXh0SW5kZXhdKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0ZSl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPWZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz0nJztcclxuICAgICAgICB0aGlzLm5vd1RleHQ9dGV4dERhdGUuY29udGVudDtcclxuXHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==