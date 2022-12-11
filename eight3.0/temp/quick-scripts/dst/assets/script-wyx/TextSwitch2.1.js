
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/TextSwitch2.1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fccaxbF+FL46jDGs6J1etg', 'TextSwitch2.1');
// script/TextSwitch2.1.js

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
      content: '你从头晕中回过神来。'
    }, {
      content: '发生什么了？你竟睡了一夜？'
    }, {
      content: '机器人的程序还没修改完，今天怎么和队友交差?'
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
    this.tt = 0;
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
        cc.director.loadScene("Scene 2.2"); //场景切换到Scene2.2

        cc.log("change to Scene 2.2");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXh0U3dpdGNoMi4xLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGV4dExhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJpbml0IiwiY29udGVudCIsInN5c3RlbUV2ZW50Iiwib24iLCJvbktleURvd24iLCJvbkRlc3Ryb3kiLCJvZmYiLCJlIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwic3BhY2UiLCJuZXh0VGV4dERhdGEiLCJ0ZXh0RGF0ZUFyciIsIm5vd1RleHQiLCJ0ZXh0RW5kIiwidHQiLCJ0ZXh0SW5kZXgiLCJub2RlIiwiYWN0aXZlIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImxvZyIsImNsb3NlRGlhbG9nIiwidGV4dERhdGUiLCJzdHJpbmciLCJ1cGRhdGUiLCJkdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFDSixFQUFFLENBQUNLO0FBREwsR0FIUDtBQU9MQyxFQUFBQSxNQVBLLG9CQU9LO0FBQ04sU0FBS0MsSUFBTCxDQUFVLENBQ047QUFBQ0MsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FETSxFQUVOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRk0sRUFHTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUhNLENBQVY7QUFNQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVDLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsS0FBS0MsU0FBakMsRUFBMkMsSUFBM0MsRUFQTSxDQU8yQztBQUNwRCxHQWZJO0FBaUJMQyxFQUFBQSxTQWpCSyx1QkFpQk07QUFDUFosSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FBbkIsRUFBNkIsS0FBS0YsU0FBbEMsRUFBNEMsSUFBNUM7QUFDSCxHQW5CSTtBQW9CTEEsRUFBQUEsU0FwQksscUJBb0JLRyxDQXBCTCxFQW9CTztBQUNSLFlBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNJLFdBQUtmLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxLQUFsQjtBQUF3QjtBQUNwQixlQUFLQyxZQUFMO0FBQ0E7QUFDSDtBQUpMO0FBTUgsR0EzQkk7QUE2QkxaLEVBQUFBLElBN0JLLGdCQTZCQWEsV0E3QkEsRUE2Qlk7QUFDYixTQUFLQyxPQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsRUFBTCxHQUFRLENBQVI7QUFDQSxTQUFLQyxTQUFMLEdBQWUsQ0FBQyxDQUFoQjtBQUNBLFNBQUtKLFdBQUwsR0FBaUJBLFdBQWpCO0FBQ0EsU0FBS0ssSUFBTCxDQUFVQyxNQUFWLEdBQWlCLElBQWpCO0FBQ0EsU0FBS1AsWUFBTDtBQUNILEdBckNJO0FBdUNMQSxFQUFBQSxZQXZDSywwQkF1Q1M7QUFDVixRQUFHLENBQUMsS0FBS0csT0FBVCxFQUFpQjs7QUFDakIsUUFBRyxFQUFFLEtBQUtFLFNBQVAsR0FBa0IsS0FBS0osV0FBTCxDQUFpQk8sTUFBdEMsRUFBNkM7QUFDekMsV0FBS0MsV0FBTCxDQUFpQixLQUFLUixXQUFMLENBQWlCLEtBQUtJLFNBQXRCLENBQWpCO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsVUFBSSxLQUFLQSxTQUFMLElBQWtCLEtBQUtKLFdBQUwsQ0FBaUJPLE1BQXZDLEVBQThDO0FBQzFDM0IsUUFBQUEsRUFBRSxDQUFDNkIsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCLEVBRDBDLENBQ047O0FBQ3BDOUIsUUFBQUEsRUFBRSxDQUFDK0IsR0FBSCxDQUFPLHFCQUFQO0FBQ0EsYUFBS1AsU0FBTDtBQUNILE9BSkQsTUFJSztBQUNELGFBQUtRLFdBQUw7QUFDSDtBQUNKO0FBQ0osR0FwREk7QUFzRExKLEVBQUFBLFdBdERLLHVCQXNET0ssUUF0RFAsRUFzRGdCO0FBQ2pCLFFBQUcsQ0FBQyxLQUFLWCxPQUFULEVBQWlCO0FBQ2pCLFNBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS2xCLFNBQUwsQ0FBZThCLE1BQWYsR0FBc0IsRUFBdEI7QUFDQSxTQUFLYixPQUFMLEdBQWFZLFFBQVEsQ0FBQ3pCLE9BQXRCO0FBQ0gsR0EzREk7QUE0REx3QixFQUFBQSxXQTVESyx5QkE0RFE7QUFDVCxTQUFLUCxJQUFMLENBQVVDLE1BQVYsR0FBaUIsS0FBakI7QUFDSCxHQTlESTtBQWdFTDtBQUVBUyxFQUFBQSxNQWxFSyxrQkFrRUdDLEVBbEVILEVBa0VPO0FBQ1IsUUFBRyxDQUFDLEtBQUtmLE9BQVQsRUFBaUI7QUFDakIsU0FBS0UsRUFBTCxJQUFTYSxFQUFUOztBQUNBLFFBQUcsS0FBS2IsRUFBTCxJQUFTLEdBQVosRUFBZ0I7QUFDWixVQUFHLEtBQUtuQixTQUFMLENBQWU4QixNQUFmLENBQXNCUCxNQUF0QixHQUE2QixLQUFLTixPQUFMLENBQWFNLE1BQTdDLEVBQW9EO0FBQ2hELGFBQUt2QixTQUFMLENBQWU4QixNQUFmLEdBQXNCLEtBQUtiLE9BQUwsQ0FBYWdCLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsS0FBS2pDLFNBQUwsQ0FBZThCLE1BQWYsQ0FBc0JQLE1BQXRCLEdBQTZCLENBQWxELENBQXRCO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsYUFBS0wsT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFDSjtBQTlFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGV4dExhYmVsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdChbXHJcbiAgICAgICAgICAgIHtjb250ZW50OifkvaDku47lpLTmmZXkuK3lm57ov4fnpZ7mnaXjgIInfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+WPkeeUn+S7gOS5iOS6hu+8n+S9oOern+edoeS6huS4gOWknO+8nyd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5py65Zmo5Lq655qE56iL5bqP6L+Y5rKh5L+u5pS55a6M77yM5LuK5aSp5oCO5LmI5ZKM6Zif5Y+L5Lqk5beuPyd9XHJcblxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDtcclxuICAgICAgICB0aGlzLnRleHRJbmRleD0tMTtcclxuICAgICAgICB0aGlzLnRleHREYXRlQXJyPXRleHREYXRlQXJyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG5cclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRJbmRleCA9PSB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTY2VuZSAyLjJcIik7IC8v5Zy65pmv5YiH5o2i5YiwU2NlbmUyLjJcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNoYW5nZSB0byBTY2VuZSAyLjJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRJbmRleCsrO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0VGV4dERhdGEodGV4dERhdGUpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD1mYWxzZTtcclxuICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9Jyc7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PXRleHREYXRlLmNvbnRlbnQ7XHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBzdGFydCAoKSB7fSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcclxufSk7XHJcbiJdfQ==