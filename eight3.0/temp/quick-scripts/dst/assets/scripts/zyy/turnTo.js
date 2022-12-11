
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zyy/turnTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f15adQLwvJPGq6DE/je84AF', 'turnTo');
// scripts/zyy/turnTo.js

"use strict";

var _cc$Class;

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var conscious = require('globalVariable');

var diary = require('globalVariable');

cc.Class((_cc$Class = {
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  toSceneTest1: function toSceneTest1() {
    cc.director.loadScene("scene_test1");
  },
  toSceneTest2: function toSceneTest2() {
    cc.director.loadScene("scene_test2");
  },
  toSceneTest3: function toSceneTest3() {
    cc.director.loadScene("scene_test3");
  },
  toSceneTest4: function toSceneTest4() {
    cc.director.loadScene("scene_test4");
  },
  toSceneTest5: function toSceneTest5() {
    cc.director.loadScene("scene_test5");
  },
  toScene4: function toScene4() {
    cc.director.loadScene("scene4");
  },
  towin: function towin() {
    cc.director.loadScene("Win");
  },
  toywj: function toywj() {
    cc.director.loadScene("Winy");
  },
  tohome: function tohome() {
    cc.director.loadScene("home");
  },
  toGoodending: function toGoodending() {
    cc.director.loadScene("good_ending");
  },
  toBadending: function toBadending() {
    cc.director.loadScene("bad_ending");
  },
  toFgoodending: function toFgoodending() {
    cc.director.loadScene("fakegood_ending");
  },
  torightanser: function torightanser() {
    cc.director.loadScene("right_anser");
  },
  towronganster: function towronganster() {
    conscious.consciousNumber -= 1;
    cc.director.loadScene("wrong_anser");
  },
  tosave: function tosave() {
    cc.director.loadScene("saveScene");
  },
  tohelp: function tohelp() {
    cc.director.loadScene("helping");
  },
  todiary_e: function todiary_e() {
    cc.director.loadScene("diary_e");
  },
  todiary_e1: function todiary_e1() {
    diary.diaryCollect = diary.diaryCollect + "E";
    cc.director.loadScene("diary_e1");
  },
  toscene1: function toscene1() {
    cc.director.loadScene("scene1");
  },
  toscenegoodending001: function toscenegoodending001() {
    cc.director.loadScene("good_ending1");
  },
  toscene4001: function toscene4001() {
    cc.director.loadScene("scene4.1");
  }
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser3");
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser4");
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser5");
}, _cc$Class["towronganster"] = function towronganster() {
  conscious.consciousNumber -= 1;
  cc.director.loadScene("wrong_anser6");
}, _cc$Class));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcenl5XFx0dXJuVG8uanMiXSwibmFtZXMiOlsiY29uc2Npb3VzIiwicmVxdWlyZSIsImRpYXJ5IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsInRvU2NlbmVUZXN0MSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwidG9TY2VuZVRlc3QyIiwidG9TY2VuZVRlc3QzIiwidG9TY2VuZVRlc3Q0IiwidG9TY2VuZVRlc3Q1IiwidG9TY2VuZTQiLCJ0b3dpbiIsInRveXdqIiwidG9ob21lIiwidG9Hb29kZW5kaW5nIiwidG9CYWRlbmRpbmciLCJ0b0Znb29kZW5kaW5nIiwidG9yaWdodGFuc2VyIiwidG93cm9uZ2Fuc3RlciIsImNvbnNjaW91c051bWJlciIsInRvc2F2ZSIsInRvaGVscCIsInRvZGlhcnlfZSIsInRvZGlhcnlfZTEiLCJkaWFyeUNvbGxlY3QiLCJ0b3NjZW5lMSIsInRvc2NlbmVnb29kZW5kaW5nMDAxIiwidG9zY2VuZTQwMDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUF2Qjs7QUFDQSxJQUFJQyxLQUFLLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUFuQjs7QUFDQUUsRUFBRSxDQUFDQyxLQUFIO0FBQ0ksYUFBU0QsRUFBRSxDQUFDRSxTQURoQjtBQUdJQyxFQUFBQSxVQUFVLEVBQUUsRUFIaEI7QUFPSTtBQUVBO0FBRUFDLEVBQUFBLEtBWEosbUJBV2EsQ0FFUixDQWJMO0FBY0dDLEVBQUFBLFlBQVksRUFBRSx3QkFBVTtBQUNyQkwsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsYUFBdEI7QUFDQSxHQWhCTjtBQWlCR0MsRUFBQUEsWUFBWSxFQUFFLHdCQUFVO0FBQ3JCUixJQUFBQSxFQUFFLENBQUNNLFFBQUgs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QXRCO0FBQ0YsR0EzRUo7QUE0RUdzQixFQUFBQSxXQUFXLEVBQUUsdUJBQVU7QUFDcEI3QixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QjtBQUNGO0FBOUVKLGdDQStFa0IseUJBQVU7QUFDdEJWLEVBQUFBLFNBQVMsQ0FBQ3dCLGVBQVYsSUFBNkIsQ0FBN0I7QUFDQXJCLEVBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLGNBQXRCO0FBQ0YsQ0FsRkosK0JBbUZrQix5QkFBVTtBQUN0QlYsRUFBQUEsU0FBUyxDQUFDd0IsZUFBVixJQUE2QixDQUE3QjtBQUNBckIsRUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsY0FBdEI7QUFDRixDQXRGSiwrQkF1RmtCLHlCQUFVO0FBQ3RCVixFQUFBQSxTQUFTLENBQUN3QixlQUFWLElBQTZCLENBQTdCO0FBQ0FyQixFQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixjQUF0QjtBQUNGLENBMUZKLCtCQTJGa0IseUJBQVU7QUFDdEJWLEVBQUFBLFNBQVMsQ0FBQ3dCLGVBQVYsSUFBNkIsQ0FBN0I7QUFDQXJCLEVBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLGNBQXRCO0FBQ0YsQ0E5RkoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG52YXIgY29uc2Npb3VzID0gcmVxdWlyZSgnZ2xvYmFsVmFyaWFibGUnKTtcclxudmFyIGRpYXJ5ID0gcmVxdWlyZSgnZ2xvYmFsVmFyaWFibGUnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICB0b1NjZW5lVGVzdDE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lX3Rlc3QxXCIpXHJcbiAgICAgfSxcclxuICAgdG9TY2VuZVRlc3QyOiBmdW5jdGlvbigpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuZV90ZXN0MlwiKVxyXG4gICB9LFxyXG4gICB0b1NjZW5lVGVzdDM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lX3Rlc3QzXCIpXHJcbiAgIH0sXHJcbiAgIHRvU2NlbmVUZXN0NDogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmVfdGVzdDRcIilcclxuICAgfSxcclxuICAgdG9TY2VuZVRlc3Q1OiBmdW5jdGlvbigpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuZV90ZXN0NVwiKVxyXG4gICB9LFxyXG4gICB0b1NjZW5lNDogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmU0XCIpXHJcbiAgICAgfSxcclxuICAgICB0b3dpbjogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiV2luXCIpXHJcbiAgICAgfSxcclxuICAgICB0b3l3ajogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiV2lueVwiKVxyXG4gICAgIH0sXHJcbiAgIHRvaG9tZTogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaG9tZVwiKVxyXG4gICAgIH0sXHJcbiAgIHRvR29vZGVuZGluZzogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ29vZF9lbmRpbmdcIilcclxuICAgfSxcclxuICAgdG9CYWRlbmRpbmc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJhZF9lbmRpbmdcIilcclxuICAgfSxcclxuICAgdG9GZ29vZGVuZGluZzogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmFrZWdvb2RfZW5kaW5nXCIpXHJcbiAgIH0sXHJcbiAgIHRvcmlnaHRhbnNlcjogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicmlnaHRfYW5zZXJcIilcclxuICAgfSxcclxuICAgdG93cm9uZ2Fuc3RlcjogZnVuY3Rpb24oKXtcclxuICAgICAgY29uc2Npb3VzLmNvbnNjaW91c051bWJlciAtPSAxO1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJ3cm9uZ19hbnNlclwiKVxyXG4gICB9LFxyXG4gICB0b3NhdmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNhdmVTY2VuZVwiKVxyXG4gICB9LFxyXG4gICB0b2hlbHA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhlbHBpbmdcIilcclxuICAgfSxcclxuICAgdG9kaWFyeV9lOiBmdW5jdGlvbigpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJkaWFyeV9lXCIpXHJcbiAgIH0sXHJcbiAgIHRvZGlhcnlfZTE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGRpYXJ5LmRpYXJ5Q29sbGVjdCA9IGRpYXJ5LmRpYXJ5Q29sbGVjdCArIFwiRVwiO1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJkaWFyeV9lMVwiKVxyXG4gICB9LFxyXG4gICB0b3NjZW5lMTogZnVuY3Rpb24oKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmUxXCIpXHJcbiAgIH0sXHJcbiAgIHRvc2NlbmVnb29kZW5kaW5nMDAxOiBmdW5jdGlvbigpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnb29kX2VuZGluZzFcIilcclxuICAgfSxcclxuICAgdG9zY2VuZTQwMDE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lNC4xXCIpXHJcbiAgIH0sXHJcbiAgIHRvd3JvbmdhbnN0ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIgLT0gMTtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwid3JvbmdfYW5zZXIzXCIpXHJcbiAgIH0sXHJcbiAgIHRvd3JvbmdhbnN0ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIgLT0gMTtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwid3JvbmdfYW5zZXI0XCIpXHJcbiAgIH0sXHJcbiAgIHRvd3JvbmdhbnN0ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIgLT0gMTtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwid3JvbmdfYW5zZXI1XCIpXHJcbiAgIH0sXHJcbiAgIHRvd3JvbmdhbnN0ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIgLT0gMTtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwid3JvbmdfYW5zZXI2XCIpXHJcbiAgIH0sXHJcbn0pO1xyXG4iXX0=