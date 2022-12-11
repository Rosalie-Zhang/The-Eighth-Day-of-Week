
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script-ywj/GameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbeb7RnNFJEkZxVZSsHgJ0X', 'GameMgr');
// Script-ywj/GameMgr.js

"use strict";

// import { hitscore } from "GameScore";
var score = require("GameScore");

var conscious = require('globalVariable');

cc.Class({
  "extends": cc.Component,
  properties: {
    score: {
      type: cc.Label,
      "default": null,
      tooltip: "得分显示Label组件"
    },
    timeBar: {
      type: cc.ProgressBar,
      "default": null,
      tooltip: "时间进度条"
    },
    losesound: {
      type: cc.AudioClip,
      "default": null
    },
    winsound: {
      type: cc.AudioClip,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var limitTime = score.time; //游戏限时总时间

    this.schedule(function () {
      if (score.time > 0) {
        score.time--; //倒计时

        this.timeBar.progress = score.time / limitTime;
      } else {
        if (score.hitscore >= 20) {
          // this.winsound.play();
          cc.audioEngine.play(this.winsound);
          cc.director.loadScene("Winy");
        } else {
          // this.losesound.play();
          conscious.consciousNumber -= 1;
          cc.audioEngine.play(this.losesound);
          cc.director.loadScene("Losey");
          score.time = limitTime;
          score.hitscore = 0;
        }
      }
    }, 1);
  },
  start: function start() {},
  update: function update(dt) {
    this.score.string = score.hitscore + "/20"; //加分
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0LXl3alxcR2FtZU1nci5qcyJdLCJuYW1lcyI6WyJzY29yZSIsInJlcXVpcmUiLCJjb25zY2lvdXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJMYWJlbCIsInRvb2x0aXAiLCJ0aW1lQmFyIiwiUHJvZ3Jlc3NCYXIiLCJsb3Nlc291bmQiLCJBdWRpb0NsaXAiLCJ3aW5zb3VuZCIsIm9uTG9hZCIsImxpbWl0VGltZSIsInRpbWUiLCJzY2hlZHVsZSIsInByb2dyZXNzIiwiaGl0c2NvcmUiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImNvbnNjaW91c051bWJlciIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFJQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQW5COztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLGdCQUFELENBQXZCOztBQUNBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUk4sSUFBQUEsS0FBSyxFQUFHO0FBQ0pPLE1BQUFBLElBQUksRUFBQ0osRUFBRSxDQUFDSyxLQURKO0FBRUosaUJBQVEsSUFGSjtBQUdKQyxNQUFBQSxPQUFPLEVBQUM7QUFISixLQURBO0FBTVJDLElBQUFBLE9BQU8sRUFBRztBQUNOSCxNQUFBQSxJQUFJLEVBQUNKLEVBQUUsQ0FBQ1EsV0FERjtBQUVOLGlCQUFRLElBRkY7QUFHTkYsTUFBQUEsT0FBTyxFQUFDO0FBSEYsS0FORjtBQVdSRyxJQUFBQSxTQUFTLEVBQUc7QUFDUkwsTUFBQUEsSUFBSSxFQUFHSixFQUFFLENBQUNVLFNBREY7QUFFUixpQkFBVTtBQUZGLEtBWEo7QUFlUkMsSUFBQUEsUUFBUSxFQUFHO0FBQ1BQLE1BQUFBLElBQUksRUFBR0osRUFBRSxDQUFDVSxTQURIO0FBRVAsaUJBQVU7QUFGSDtBQWZILEdBSFA7QUF3Qkw7QUFFQUUsRUFBQUEsTUExQkssb0JBMEJLO0FBQ04sUUFBSUMsU0FBUyxHQUFHaEIsS0FBSyxDQUFDaUIsSUFBdEIsQ0FETSxDQUNxQjs7QUFDM0IsU0FBS0MsUUFBTCxDQUFjLFlBQVU7QUFDcEIsVUFBR2xCLEtBQUssQ0FBQ2lCLElBQU4sR0FBYSxDQUFoQixFQUFrQjtBQUNkakIsUUFBQUEsS0FBSyxDQUFDaUIsSUFBTixHQURjLENBQ0Q7O0FBQ2IsYUFBS1AsT0FBTCxDQUFhUyxRQUFiLEdBQXdCbkIsS0FBSyxDQUFDaUIsSUFBTixHQUFhRCxTQUFyQztBQUNILE9BSEQsTUFHSztBQUNELFlBQUdoQixLQUFLLENBQUNvQixRQUFOLElBQWlCLEVBQXBCLEVBQXVCO0FBQ25CO0FBQ0FqQixVQUFBQSxFQUFFLENBQUNrQixXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS1IsUUFBekI7QUFDQVgsVUFBQUEsRUFBRSxDQUFDb0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0gsU0FKRCxNQUlLO0FBQ0Q7QUFDQXRCLFVBQUFBLFNBQVMsQ0FBQ3VCLGVBQVYsSUFBNkIsQ0FBN0I7QUFDQXRCLFVBQUFBLEVBQUUsQ0FBQ2tCLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLVixTQUF6QjtBQUNBVCxVQUFBQSxFQUFFLENBQUNvQixRQUFILENBQVlDLFNBQVosQ0FBc0IsT0FBdEI7QUFDQXhCLFVBQUFBLEtBQUssQ0FBQ2lCLElBQU4sR0FBYUQsU0FBYjtBQUNBaEIsVUFBQUEsS0FBSyxDQUFDb0IsUUFBTixHQUFpQixDQUFqQjtBQUNIO0FBQ0o7QUFDSixLQWxCRCxFQWtCRSxDQWxCRjtBQW1CSCxHQS9DSTtBQWlETE0sRUFBQUEsS0FqREssbUJBaURJLENBRVIsQ0FuREk7QUFxRExDLEVBQUFBLE1BckRLLGtCQXFER0MsRUFyREgsRUFxRE87QUFDUixTQUFLNUIsS0FBTCxDQUFXNkIsTUFBWCxHQUFvQjdCLEtBQUssQ0FBQ29CLFFBQU4sR0FBZSxLQUFuQyxDQURRLENBQ2lDO0FBQzVDO0FBdkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGhpdHNjb3JlIH0gZnJvbSBcIkdhbWVTY29yZVwiO1xyXG52YXIgc2NvcmUgPSByZXF1aXJlKFwiR2FtZVNjb3JlXCIpO1xyXG52YXIgY29uc2Npb3VzID0gcmVxdWlyZSgnZ2xvYmFsVmFyaWFibGUnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzY29yZSA6IHtcclxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0b29sdGlwOlwi5b6X5YiG5pi+56S6TGFiZWznu4Tku7ZcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWVCYXIgOiB7XHJcbiAgICAgICAgICAgIHR5cGU6Y2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdG9vbHRpcDpcIuaXtumXtOi/m+W6puadoVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9zZXNvdW5kIDoge1xyXG4gICAgICAgICAgICB0eXBlIDogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2luc291bmQgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBsaW1pdFRpbWUgPSBzY29yZS50aW1lOy8v5ri45oiP6ZmQ5pe25oC75pe26Ze0XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZihzY29yZS50aW1lID4gMCl7XHJcbiAgICAgICAgICAgICAgICBzY29yZS50aW1lLS07Ly/lgJLorqHml7ZcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJhci5wcm9ncmVzcyA9IHNjb3JlLnRpbWUgLyBsaW1pdFRpbWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmUuaGl0c2NvcmUgPj0yMCl7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLndpbnNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMud2luc291bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIldpbnlcIik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvc2Vzb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc2Npb3VzLmNvbnNjaW91c051bWJlciAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5sb3Nlc291bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvc2V5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlLnRpbWUgPSBsaW1pdFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUuaGl0c2NvcmUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwxKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gc2NvcmUuaGl0c2NvcmUrXCIvMjBcIjsvL+WKoOWIhlxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==