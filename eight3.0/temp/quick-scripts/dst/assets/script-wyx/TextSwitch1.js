
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/TextSwitch1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0494xtyPdJw5NhOER6rkKc', 'TextSwitch1');
// script/TextSwitch1.js

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
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.init([{
      content: '一个小时过去了，你依旧没搞定这个bug。'
    }, {
      content: '你还记得你曾经多少次编错代码，你开始怀疑自己加入机器人社团的决定。'
    }, {
      content: '虽说是儿时的梦想，可繁琐的代码和层出不穷的bug终究成为你的绊脚石。'
    }, {
      content: '和你组队的同学怨声载道，再坚持下去似乎只能成为大家的累赘。'
    }, {
      content: '你叹了口气，决定：'
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
    this.node.getChildByName("Button1").active = false;
    this.node.getChildByName("Button2").active = false;
    this.nextTextData();
  },
  // init(){
  //     this.node.getChildByName("Button1").active = false;
  //     this.node.getChildByName("Button2").active = false;
  // },
  nextTextData: function nextTextData() {
    if (!this.textEnd) return;

    if (++this.textIndex < this.textDateArr.length) {
      this.setTextData(this.textDateArr[this.textIndex]);
    } else {
      if (this.textIndex == this.textDateArr.length) {
        this.node.getChildByName("Button1").active = true;
        this.node.getChildByName("Button2").active = true;
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
  // start () {
  // },
  //     setText(){
  //         var str = this.getComponent(cc.Label).string;
  //         var j = 0;
  //         this.getComponent(cc.Label).string = "";
  //         this.schedule(function () {
  //             this.getComponent(cc.Label).string += str[j];
  //             j++;
  //         }, 0.1, str.length - 1, 0.2);
  // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxUZXh0U3dpdGNoMS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHRMYWJlbCIsIkxhYmVsIiwib25Mb2FkIiwiaW5pdCIsImNvbnRlbnQiLCJzeXN0ZW1FdmVudCIsIm9uIiwib25LZXlEb3duIiwib25EZXN0cm95Iiwib2ZmIiwiZSIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwibmV4dFRleHREYXRhIiwidGV4dERhdGVBcnIiLCJub3dUZXh0IiwidGV4dEVuZCIsInR0IiwidGV4dEluZGV4Iiwibm9kZSIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwibGVuZ3RoIiwic2V0VGV4dERhdGEiLCJjbG9zZURpYWxvZyIsInRleHREYXRlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURMLEdBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0MsSUFBTCxDQUFVLENBQ047QUFBQ0MsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FETSxFQUVOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBRk0sRUFHTjtBQUFDQSxNQUFBQSxPQUFPLEVBQUM7QUFBVCxLQUhNLEVBSU47QUFBQ0EsTUFBQUEsT0FBTyxFQUFDO0FBQVQsS0FKTSxFQUtOO0FBQUNBLE1BQUFBLE9BQU8sRUFBQztBQUFULEtBTE0sQ0FBVjtBQU9BUixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUMsRUFBZixDQUFrQixTQUFsQixFQUE0QixLQUFLQyxTQUFq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QUFMLENBQWU0QixNQUFmLENBQXNCSixNQUF0QixHQUE2QixDQUFsRCxDQUF0QjtBQUNILE9BRkQsTUFFSztBQUNELGFBQUtOLE9BQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS0QsT0FBTCxHQUFhLElBQWI7QUFDSDs7QUFDRCxXQUFLRSxFQUFMLEdBQVEsQ0FBUjtBQUNIO0FBQ0o7QUFuR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHRMYWJlbDpjYy5MYWJlbCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmluaXQoW1xyXG4gICAgICAgICAgICB7Y29udGVudDon5LiA5Liq5bCP5pe26L+H5Y675LqG77yM5L2g5L6d5pen5rKh5pCe5a6a6L+Z5LiqYnVn44CCJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifkvaDov5jorrDlvpfkvaDmm77nu4/lpJrlsJHmrKHnvJbplJnku6PnoIHvvIzkvaDlvIDlp4vmgIDnlpHoh6rlt7HliqDlhaXmnLrlmajkurrnpL7lm6LnmoTlhrPlrprjgIInfSxcclxuICAgICAgICAgICAge2NvbnRlbnQ6J+iZveivtOaYr+WEv+aXtueahOaipuaDs++8jOWPr+e5geeQkOeahOS7o+eggeWSjOWxguWHuuS4jeept+eahGJ1Z+e7iOeptuaIkOS4uuS9oOeahOe7iuiEmuefs+OAgid9LFxyXG4gICAgICAgICAgICB7Y29udGVudDon5ZKM5L2g57uE6Zif55qE5ZCM5a2m5oCo5aOw6L296YGT77yM5YaN5Z2a5oyB5LiL5Y675Ly85LmO5Y+q6IO95oiQ5Li65aSn5a6255qE57Sv6LWY44CCJ30sXHJcbiAgICAgICAgICAgIHtjb250ZW50OifkvaDlj7nkuoblj6PmsJTvvIzlhrPlrprvvJonfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5RG93bix0aGlzKTsvL+e7keWumumUruebmFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZigna2V5ZG93bicsdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duKGUpe1xyXG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTp7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQodGV4dERhdGVBcnIpe1xyXG4gICAgICAgIHRoaXMubm93VGV4dD1udWxsO1xyXG4gICAgICAgIHRoaXMudGV4dEVuZD10cnVlO1xyXG4gICAgICAgIHRoaXMudHQ9MDsvL+aSreaUvueahOaAu+aXtumVv1xyXG4gICAgICAgIHRoaXMudGV4dEluZGV4PS0xO1xyXG4gICAgICAgIHRoaXMudGV4dERhdGVBcnI9dGV4dERhdGVBcnI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbjFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQnV0dG9uMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5leHRUZXh0RGF0YSgpXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGluaXQoKXtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24xXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1dHRvbjJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIG5leHRUZXh0RGF0YSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRleHRFbmQpcmV0dXJuO1xyXG4gICAgICAgIGlmKCsrdGhpcy50ZXh0SW5kZXg8IHRoaXMudGV4dERhdGVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0RGF0YSh0aGlzLnRleHREYXRlQXJyW3RoaXMudGV4dEluZGV4XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRJbmRleCA9PSB0aGlzLnRleHREYXRlQXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24xXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCdXR0b24yXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRJbmRleCsrO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0RGF0YSh0ZXh0RGF0ZSl7XHJcbiAgICAgICAgaWYoIXRoaXMudGV4dEVuZClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50ZXh0RW5kPWZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz0nJztcclxuICAgICAgICB0aGlzLm5vd1RleHQ9dGV4dERhdGUuY29udGVudDtcclxuXHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBzdGFydCAoKSB7XHJcbiAgICAvLyB9LFxyXG5cclxuLy8gICAgIHNldFRleHQoKXtcclxuLy8gICAgICAgICB2YXIgc3RyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcclxuLy8gICAgICAgICB2YXIgaiA9IDA7XHJcbi8vICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbi8vICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgKz0gc3RyW2pdO1xyXG4vLyAgICAgICAgICAgICBqKys7XHJcbi8vICAgICAgICAgfSwgMC4xLCBzdHIubGVuZ3RoIC0gMSwgMC4yKTtcclxuLy8gfVxyXG5cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMubm93VGV4dClyZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCs9ZHQ7XHJcbiAgICAgICAgaWYodGhpcy50dD49MC4xKXtcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0TGFiZWwuc3RyaW5nLmxlbmd0aDx0aGlzLm5vd1RleHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dExhYmVsLnN0cmluZz10aGlzLm5vd1RleHQuc2xpY2UoMCx0aGlzLnRleHRMYWJlbC5zdHJpbmcubGVuZ3RoKzEpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1RleHQ9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnR0PTA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==