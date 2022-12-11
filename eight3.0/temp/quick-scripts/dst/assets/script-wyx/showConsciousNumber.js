
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script-wyx/showConsciousNumber.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8c8bt1TZhEY6hSobOxeT+J', 'showConsciousNumber');
// script/showConsciousNumber.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var conscious = require('globalVariable');

cc.Class({
  "extends": cc.Component,
  properties: {
    text: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.text.string = "理智值：" + conscious.consciousNumber.toString();
  } // start () {
  //     this.getComponent(cc.Label).String = "理智值：" + conscious.consciousNumber.toString();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzaG93Q29uc2Npb3VzTnVtYmVyLmpzIl0sIm5hbWVzIjpbImNvbnNjaW91cyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHQiLCJMYWJlbCIsIm9uTG9hZCIsInN0cmluZyIsImNvbnNjaW91c051bWJlciIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQXZCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFDSixFQUFFLENBQUNLO0FBREEsR0FIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTixTQUFLRixJQUFMLENBQVVHLE1BQVYsR0FBbUIsU0FBUVQsU0FBUyxDQUFDVSxlQUFWLENBQTBCQyxRQUExQixFQUEzQjtBQUNILEdBWEksQ0FhTDtBQUNBO0FBQ0E7QUFFQTs7QUFqQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG52YXIgY29uc2Npb3VzID0gcmVxdWlyZSgnZ2xvYmFsVmFyaWFibGUnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0OmNjLkxhYmVsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IFwi55CG5pm65YC877yaXCIrIGNvbnNjaW91cy5jb25zY2lvdXNOdW1iZXIudG9TdHJpbmcoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gc3RhcnQgKCkge1xyXG4gICAgLy8gICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5TdHJpbmcgPSBcIueQhuaZuuWAvO+8mlwiICsgY29uc2Npb3VzLmNvbnNjaW91c051bWJlci50b1N0cmluZygpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==