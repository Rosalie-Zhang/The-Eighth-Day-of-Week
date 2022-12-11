
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script-ywj/Gamey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54a06mhqCRC0ZsRL6jsaSE9', 'Gamey');
// Script-ywj/Gamey.js

"use strict";

// const score = require("GameScore");
cc.Class({
  "extends": cc.Component,
  properties: {
    arrowPrefab: {
      type: cc.Prefab,
      "default": null
    },
    targetPrefab: {
      type: cc.Prefab,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true; //开启物理引擎

    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this); //触摸开始

    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this); //触摸移动

    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this); //触摸结束，物体内部结束
  },
  start: function start() {
    this.createArrow();
    this.schedule(function () {
      this.createTarget();
    }, 2);
  },
  update: function update(dt) {},
  onTouchStart: function onTouchStart(event) {
    if (this.arrow) {
      this.arrow.updateArrowRotation(event.getLocation());
    }
  },
  onTouchMove: function onTouchMove(event) {
    if (this.arrow) {
      this.arrow.updateArrowRotation(event.getLocation());
    }
  },
  onTouchEnd: function onTouchEnd(event) {
    if (this.arrow) {
      this.arrow.shoot();
      this.arrow = null;
      this.scheduleOnce(function () {
        this.createArrow();
      }, 0.5);
    }
  },
  createArrow: function createArrow() {
    var arrowNode = cc.instantiate(this.arrowPrefab);
    arrowNode.x = -600;
    arrowNode.y = 250;
    arrowNode.zIndex = 1;
    arrowNode.parent = this.node;
    this.arrow = arrowNode.getComponent("Arrow");
  },
  createTarget: function createTarget() {
    var targetNode = cc.instantiate(this.targetPrefab);
    targetNode.x = this.randomInt(200, 750);
    targetNode.y = 0;
    targetNode.parent = this.node;
  },
  randomInt: function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0LXl3alxcR2FtZXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhcnJvd1ByZWZhYiIsInR5cGUiLCJQcmVmYWIiLCJ0YXJnZXRQcmVmYWIiLCJvbkxvYWQiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsIlRPVUNIX0VORCIsIm9uVG91Y2hFbmQiLCJzdGFydCIsImNyZWF0ZUFycm93Iiwic2NoZWR1bGUiLCJjcmVhdGVUYXJnZXQiLCJ1cGRhdGUiLCJkdCIsImV2ZW50IiwiYXJyb3ciLCJ1cGRhdGVBcnJvd1JvdGF0aW9uIiwiZ2V0TG9jYXRpb24iLCJzaG9vdCIsInNjaGVkdWxlT25jZSIsImFycm93Tm9kZSIsImluc3RhbnRpYXRlIiwieCIsInkiLCJ6SW5kZXgiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJ0YXJnZXROb2RlIiwicmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BREE7QUFFVCxpQkFBUztBQUZBLEtBREw7QUFLUkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1ZGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQURDO0FBRVYsaUJBQVM7QUFGQztBQUxOLEdBSFA7QUFjTDtBQUVBRSxFQUFBQSxNQWhCSyxvQkFnQks7QUFDTlIsSUFBQUEsRUFB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QyxDQUFQO0FBQ0g7QUExRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3Qgc2NvcmUgPSByZXF1aXJlKFwiR2FtZVNjb3JlXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFycm93UHJlZmFiOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFyZ2V0UHJlZmFiOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlOy8v5byA5ZCv54mp55CG5byV5pOOXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7Ly/op6bmkbjlvIDlp4tcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7Ly/op6bmkbjnp7vliqhcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpOy8v6Kem5pG457uT5p2f77yM54mp5L2T5YaF6YOo57uT5p2fXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFycm93KCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUYXJnZXQoKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0IChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFycm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3cudXBkYXRlQXJyb3dSb3RhdGlvbihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hNb3ZlIChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFycm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3cudXBkYXRlQXJyb3dSb3RhdGlvbihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hFbmQgKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJyb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdy5zaG9vdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFycm93KCk7XHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVBcnJvdyAoKSB7XHJcbiAgICAgICAgbGV0IGFycm93Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXJyb3dQcmVmYWIpO1xyXG4gICAgICAgIGFycm93Tm9kZS54ID0gLTYwMDtcclxuICAgICAgICBhcnJvd05vZGUueSA9IDI1MDtcclxuICAgICAgICBhcnJvd05vZGUuekluZGV4ID0gMTtcclxuICAgICAgICBhcnJvd05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuYXJyb3cgPSBhcnJvd05vZGUuZ2V0Q29tcG9uZW50KFwiQXJyb3dcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVRhcmdldCAoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhcmdldFByZWZhYik7XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS54ID0gdGhpcy5yYW5kb21JbnQoMjAwLCA3NTApO1xyXG4gICAgICAgIHRhcmdldE5vZGUueSA9IDA7XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICB9LFxyXG5cclxuICAgIHJhbmRvbUludCAobWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=