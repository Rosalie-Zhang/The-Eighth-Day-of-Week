
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/label - test 2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd103b/Z5gNJW7BUHDwADDh3', 'label - test 2');
// scripts/zyy/label - test 2.js

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
      content: '第二题'
    }, {
      content: '那么机器人如何存储这间教室的门牌号309的呢'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFxsYWJlbCAtIHRlc3QgMi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLRztBQUNKLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sRUFFTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUZNLENBQVY7QUFJQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVDLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNEIsS0FBS0MsU0FBakMsRUFBMkMsSUFBM0MsRUFMSSxDQUs2QztBQUNwRCxHQVhJO0FBWUxDLEVBQUFBLFNBWkssdUJBWU07QUFDUFosSUFBQUEsRUFBRSxDQUFDUyxXQUFILENBQWVJLEdBQWYsQ0FBbUIsU0FB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Q0QsYUFBS04sT0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLRCxPQUFMLEdBQWEsSUFBYjtBQUNIOztBQUNELFdBQUtFLEVBQUwsR0FBUSxDQUFSO0FBQ0g7QUFFSjtBQTVFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+esrOS6jOmimCd9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon6YKj5LmI5py65Zmo5Lq65aaC5L2V5a2Y5YKo6L+Z6Ze05pWZ5a6k55qE6Zeo54mM5Y+3MzA555qE5ZGiJ30sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLHRoaXMub25LZXlEb3duLHRoaXMpOy8v57uR5a6a6ZSu55uYXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkFcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkJcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkNcIikuYWN0aXZlPWZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHREYXRhKHRoaXMudGV4dERhdGVBcnJbdGhpcy50ZXh0SW5kZXhdKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0SW5kZXg9PXRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbkFcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b25CXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uQ1wiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG5cclxuICAgIH0sXHJcbiAgICBjbG9zZURpYWxvZygpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBpZighdGhpcy5ub3dUZXh0KXJldHVybjtcclxuICAgICAgICB0aGlzLnR0Kz1kdDtcclxuICAgICAgICBpZih0aGlzLnR0Pj0wLjEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoPHRoaXMubm93VGV4dC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPXRoaXMubm93VGV4dC5zbGljZSgwLHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGgrMSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRFbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHQ9MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19