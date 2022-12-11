
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/Choose1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f622rKlbFB5Jf2loQxnt5i', 'Choose1');
// script/Choose1.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.chooseTime = 1;
cc.Class({
  "extends": cc.Component,
  // properties: {
  //     music:cc.AudioSource,
  // },
  //当点击按钮时触发场景切换
  on_btn_onclick1: function on_btn_onclick1() {
    if (chooseTime < 3) {
      cc.director.loadScene("Scene 1.1"); //场景切换到Scene1.1

      cc.log("change to Scene 1.1");
      chooseTime++;
    }

    if (chooseTime == 3) {
      cc.director.loadScene("Scene 1.21"); //场景切换到Scene1.21

      cc.log("change to Scene 1.21");
    }
  },
  on_btn_onclick2: function on_btn_onclick2() {
    if (chooseTime < 3) {
      cc.director.loadScene("Scene 1.1"); //场景切换到Scene1.1

      cc.log("change to Scene 1.1");
      chooseTime++;
    }

    if (chooseTime == 3) {
      cc.director.loadScene("Scene 1.22"); //场景切换到Scene1.22

      cc.log("change to Scene 1.22");
    }
  } // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  // start () {
  // },
  // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDaG9vc2UxLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImNob29zZVRpbWUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25fYnRuX29uY2xpY2sxIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJsb2ciLCJvbl9idG5fb25jbGljazIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixDQUFwQjtBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMO0FBQ0E7QUFDQTtBQUVBO0FBQ0FDLEVBQUFBLGVBQWUsRUFBQywyQkFBVTtBQUN0QixRQUFHSixVQUFVLEdBQUcsQ0FBaEIsRUFBa0I7QUFDZEMsTUFBQUEsRUFBRSxDQUFDSSxRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEIsRUFEYyxDQUNxQjs7QUFDbkNMLE1BQUFBLEVBQUUsQ0FBQ00sR0FBSCxDQUFPLHFCQUFQO0FBQ0FQLE1BQUFBLFVBQVU7QUFDYjs7QUFDRCxRQUFJQSxVQUFVLElBQUksQ0FBbEIsRUFBb0I7QUFDaEJDLE1BQUFBLEVBQUUsQ0FBQ0ksUUFBSCxDQUFZQyxTQUFaLENBQXNCLFlBQXRCLEVBRGdCLENBQ29COztBQUNwQ0wsTUFBQUEsRUFBRSxDQUFDTSxHQUFILENBQU8sc0JBQVA7QUFDSDtBQUVKLEdBbkJJO0FBcUJMQyxFQUFBQSxlQUFlLEVBQUMsMkJBQVU7QUFDdEIsUUFBR1IsVUFBVSxHQUFHLENBQWhCLEVBQWtCO0FBQ2RDLE1BQUFBLEVBQUUsQ0FBQ0ksUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCLEVBRGMsQ0FDcUI7O0FBQ25DTCxNQUFBQSxFQUFFLENBQUNNLEdBQUgsQ0FBTyxxQkFBUDtBQUNBUCxNQUFBQSxVQUFVO0FBQ2I7O0FBQ0QsUUFBSUEsVUFBVSxJQUFJLENBQWxCLEVBQW9CO0FBQ2hCQyxNQUFBQSxFQUFFLENBQUNJLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixZQUF0QixFQURnQixDQUNvQjs7QUFDcENMLE1BQUFBLEVBQUUsQ0FBQ00sR0FBSCxDQUFPLHNCQUFQO0FBQ0g7QUFFSixHQWhDSSxDQWtDTDtBQUVBO0FBRUE7QUFFQTtBQUVBOztBQTFDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbndpbmRvdy5jaG9vc2VUaW1lID0gMVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIC8vIHByb3BlcnRpZXM6IHtcclxuICAgIC8vICAgICBtdXNpYzpjYy5BdWRpb1NvdXJjZSxcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy/lvZPngrnlh7vmjInpkq7ml7bop6blj5HlnLrmma/liIfmjaJcclxuICAgIG9uX2J0bl9vbmNsaWNrMTpmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGNob29zZVRpbWUgPCAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUgMS4xXCIpOy8v5Zy65pmv5YiH5o2i5YiwU2NlbmUxLjFcclxuICAgICAgICAgICAgY2MubG9nKFwiY2hhbmdlIHRvIFNjZW5lIDEuMVwiKTtcclxuICAgICAgICAgICAgY2hvb3NlVGltZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hvb3NlVGltZSA9PSAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUgMS4yMVwiKSAvL+WcuuaZr+WIh+aNouWIsFNjZW5lMS4yMVxyXG4gICAgICAgICAgICBjYy5sb2coXCJjaGFuZ2UgdG8gU2NlbmUgMS4yMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uX2J0bl9vbmNsaWNrMjpmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGNob29zZVRpbWUgPCAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUgMS4xXCIpOy8v5Zy65pmv5YiH5o2i5YiwU2NlbmUxLjFcclxuICAgICAgICAgICAgY2MubG9nKFwiY2hhbmdlIHRvIFNjZW5lIDEuMVwiKTtcclxuICAgICAgICAgICAgY2hvb3NlVGltZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hvb3NlVGltZSA9PSAzKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUgMS4yMlwiKSAvL+WcuuaZr+WIh+aNouWIsFNjZW5lMS4yMlxyXG4gICAgICAgICAgICBjYy5sb2coXCJjaGFuZ2UgdG8gU2NlbmUgMS4yMlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgLy8gc3RhcnQgKCkge1xyXG5cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=