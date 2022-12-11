
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/TextSwitch2.31.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a8f3H+ASNEH6Nbhw+1z2nH', 'TextSwitch2.31');
// script/TextSwitch2.31.js

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
      content: '达成结局：信仰之跃'
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
    this.node.active = false;
    this.nextTextData();
  },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.node.active = true;
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        cc.director.loadScene("home");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXh0U3dpdGNoMi4zMS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImxlbmd0aCIsInNldFRleHREYXRhIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSztBQUNOLFNBQUtDLElBQUwsQ0FBVSxDQUNOO0FBQUNDLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRE0sQ0FBVjtBQUdBUixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUMsRUFBZixDQUFrQixTQUFsQixFQUE0QixLQUFLQyxTQUFqQyxFQUEyQyxJQUEzQyxFQUpNLENBSTJDO0FBQ3BELEdBWkk7QUFjTEMsRUFBQUEsU0FkSyx1QkFjTTtBQUNQWixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUksR0FBZixDQUFtQixTQUFuQixFQUE2QixLQUFLRixTQUFsQyxFQUE0QyxJQUE1QztBQUNILEdBaEJJO0FBaUJMQSxFQUFBQSxTQWpCSyxxQkFpQktHLENBakJMLEVBaUJPO0FBQ1IsWUFBT0EsQ0FBQyxDQUFDQyxPQUFUO0FBQ0ksV0FBS2YsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTQyxHQUFULENBQWFDLEtBQWxCO0FBQXdCO0FBQ3BCLGVBQUtDLFlBQUw7QUFDQTtBQUNIO0FBSkw7QUFNSCxHQXhCSTtBQTBCTFosRUFBQUEsSUExQkssZ0JBMEJBYSxXQTFCQSxFQTBCWTtBQUNiLFNBQUtDLE9BQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxFQUFMLEdBQVEsQ0FBUixDQUhhLENBR0g7O0FBQ1YsU0FBS0MsU0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSxTQUFLSixXQUFMLEdBQWlCQSxXQUFqQjtBQUNBLFNBQUtLLElBQUwsQ0FBVUMsTUFBVixHQUFpQixLQUFqQjtBQUNBLFNBQUtQLFlBQUw7QUFDSCxHQWxDSTtBQW9DTEEsRUFBQUEsWUFwQ0ssMEJBb0NTO0FBQ1YsUUFBRyxDQUFDLEtBQUtHLE9BQVQsRUFBaUI7O0FBQ2pCLFFBQUcsRUFBRSxLQUFLRSxTQUFQLEdBQWtCLEtBQUtKLFdBQUwsQ0FBaUJPLE1BQXRDLEVBQTZDO0FBQ3pDLFdBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFpQixJQUFqQjtBQUNBLFdBQUtFLFdBQUwsQ0FBaUIsS0FBS1IsV0FBTCxDQUFpQixLQUFLSSxTQUF0QixDQUFqQjtBQUNILEtBSEQsTUFHSztBQUNELFVBQUcsS0FBS0EsU0FBTCxJQUFrQixLQUFLSixXQUFMLENBQWlCTyxNQUF0QyxFQUE2QztBQUN6QzNCLFFBQUFBLEVBQUUsQ0FBQzZCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNILE9BRkQsTUFHSTtBQUNBLGFBQUtDLFdBQUw7QUFDSDtBQUNKO0FBQ0osR0FqREk7QUFtRExILEVBQUFBLFdBbkRLLHVCQW1ET0ksUUFuRFAsRUFtRGdCO0FBQ2pCLFFBQUcsQ0FBQyxLQUFLVixPQUFULEVBQWlCO0FBQ2pCLFNBQUtBLE9BQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS2xCLFNBQUwsQ0FBZTZCLE1BQWYsR0FBc0IsRUFBdEI7QUFDQSxTQUFLWixPQUFMLEdBQWFXLFFBQVEsQ0FBQ3hCLE9BQXRCO0FBQ0gsR0F4REk7QUF5REx1QixFQUFBQSxXQXpESyx5QkF5RFE7QUFDVCxTQUFLTixJQUFMLENBQVVDLE1BQVYsR0FBaUIsS0FBakI7QUFDSCxHQTNESTtBQTZETDtBQUVBUSxFQUFBQSxNQS9ESyxrQkErREdDLEVBL0RILEVBK0RPO0FBQ1IsUUFBRyxDQUFDLEtBQUtkLE9BQVQsRUFBaUI7QUFDakIsU0FBS0UsRUFBTCxJQUFTWSxFQUFUOztBQUNBLFFBQUcsS0FBS1osRUFBTCxJQUFTLEdBQVosRUFBZ0I7QUFDWixVQUFHLEtBQUtuQixTQUFMLENBQWU2QixNQUFmLENBQXNCTixNQUF0QixHQUE2QixLQUFLTixPQUFMLENBQWFNLE1BQTdDLEVBQW9EO0FBQ2hELGFBQUt2QixTQUFMLENBQWU2QixNQUFmLEdBQXNCLEtBQUtaLE9BQUwsQ0FBYWUsS0FBYixDQUFtQixDQUFuQixFQUFxQixLQUFLaEMsU0FBTCxDQUFlNkIsTUFBZixDQUFzQk4sTUFBdEIsR0FBNkIsQ0FBbEQsQ0FBdEI7QUFDSCxPQUZELE1BRUs7QUFDRCxhQUFLTCxPQUFMLEdBQWEsSUFBYjtBQUNBLGFBQUtELE9BQUwsR0FBYSxJQUFiO0FBQ0g7O0FBQ0QsV0FBS0UsRUFBTCxHQUFRLENBQVI7QUFDSDtBQUNKO0FBM0VJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0TGFiZWw6Y2MuTGFiZWwsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KFtcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+i+vuaIkOe7k+WxgO+8muS/oeS7sOS5i+i3gyd9XHJcbiAgICAgICAgXSlcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7Ly/nu5HlrprplK7nm5hcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZSl7XHJcbiAgICAgICAgc3dpdGNoKGUua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRleHREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCh0ZXh0RGF0ZUFycil7XHJcbiAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgdGhpcy50dD0wOy8v5pKt5pS+55qE5oC75pe26ZW/XHJcbiAgICAgICAgdGhpcy50ZXh0SW5kZXg9LTE7XHJcbiAgICAgICAgdGhpcy50ZXh0RGF0ZUFycj10ZXh0RGF0ZUFycjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMubmV4dFRleHREYXRhKClcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dFRleHREYXRhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgaWYoKyt0aGlzLnRleHRJbmRleDwgdGhpcy50ZXh0RGF0ZUFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dERhdGEodGhpcy50ZXh0RGF0ZUFyclt0aGlzLnRleHRJbmRleF0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRJbmRleCA9PSB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJob21lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFRleHREYXRhKHRleHREYXRlKXtcclxuICAgICAgICBpZighdGhpcy50ZXh0RW5kKXJldHVybjtcclxuICAgICAgICB0aGlzLnRleHRFbmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwuc3RyaW5nPScnO1xyXG4gICAgICAgIHRoaXMubm93VGV4dD10ZXh0RGF0ZS5jb250ZW50O1xyXG4gICAgfSxcclxuICAgIGNsb3NlRGlhbG9nKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gc3RhcnQgKCkge30sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLm5vd1RleHQpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudHQrPWR0O1xyXG4gICAgICAgIGlmKHRoaXMudHQ+PTAuMSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGV4dExhYmVsLnN0cmluZy5sZW5ndGg8dGhpcy5ub3dUZXh0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC5zdHJpbmc9dGhpcy5ub3dUZXh0LnNsaWNlKDAsdGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aCsxKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dUZXh0PW51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50dD0wO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=