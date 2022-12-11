
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script-ywj/Arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3543anw16VCH7P+izHmvwhY', 'Arrow');
// Script/Arrow.js

"use strict";

var score = require('GameScore');

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.direction = cc.v2(0, 0);
    this.rigidBody = this.getComponent(cc.RigidBody);
    this.weldJoint = this.getComponent(cc.WeldJoint);
  },
  start: function start() {},
  update: function update(dt) {
    var velocity = this.rigidBody.linearVelocity;
    var speed = velocity.mag();
    if (speed === 0) return;
    var angle = velocity.signAngle(cc.v2(1, 0));
    this.node.angle = -(angle * 180 / Math.PI);
    var dragConstant = 0.1;
    var direction = velocity.normalize();
    var pointingDirection = this.rigidBody.getWorldVector(cc.v2(1, 0));
    var flightDirection = this.rigidBody.linearVelocity;
    var flightSpeed = flightDirection.mag();
    flightDirection.normalizeSelf();
    var dot = flightDirection.dot(pointingDirection);
    var dragForceMagnitude = (1 - Math.abs(dot)) * flightSpeed * flightSpeed * dragConstant * this.rigidBody.getMass();
    var arrowTailPosition = this.rigidBody.getWorldPoint(cc.v2(-68, 0));
    this.rigidBody.applyForce(flightDirection.mul(-dragForceMagnitude), arrowTailPosition, false);
  },
  updateArrowRotation: function updateArrowRotation(pos) {
    pos = this.node.parent.convertToNodeSpaceAR(pos);
    pos = pos.sub(this.node.position);
    this.direction = pos.normalize();
    var angle = pos.signAngle(cc.v2(1, 0));
    this.node.angle = -(angle * 180 / Math.PI);
  },
  shoot: function shoot() {
    this.rigidBody.type = 2;
    var velocity = this.direction.mulSelf(1800);
    this.rigidBody.linearVelocity = velocity;
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    var joint = this.weldJoint;

    if (joint.enabled) {
      contact.disabled = true;
    }
  },
  // 每次处理完碰撞体接触逻辑时被调用
  onPostSolve: function onPostSolve(contact, selfCollider, otherCollider) {
    score.scoreAdd(1);
    var impulse = contact.getImpulse(); // 获取冲量信息，注意这个信息只有在 onPostSolve 回调中才能获取到

    if (Math.abs(impulse.normalImpulses[0]) < cc.PhysicsManager.PTM_RATIO) return;
    var joint = this.weldJoint;

    if (joint.enabled) {
      joint.enabled = false;
      return;
    }

    if (otherCollider.node.name == "arrow" || otherCollider.tag == 1) {
      return;
    }

    var arrowBody = selfCollider.body;
    var targetBody = otherCollider.body;
    var worldManifold = contact.getWorldManifold(); // 将 arrowBody 本地坐标系下的点转换为世界坐标系下的点

    var points = worldManifold.points;
    var point = arrowBody.getLocalPoint(points[0]);

    if (point.x < 54) {
      return;
    }

    var worldCoordsAnchorPoint = arrowBody.getWorldPoint(cc.v2(0, 0));
    joint.connectedBody = targetBody;
    joint.anchor = arrowBody.getLocalPoint(worldCoordsAnchorPoint);
    joint.connectedAnchor = targetBody.getLocalPoint(worldCoordsAnchorPoint);
    joint.referenceAngle = arrowBody.node.angle - targetBody.node.angle;
    joint.enabled = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcnJvdy5qcyJdLCJuYW1lcyI6WyJzY29yZSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImRpcmVjdGlvbiIsInYyIiwicmlnaWRCb2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5Iiwid2VsZEpvaW50IiwiV2VsZEpvaW50Iiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInZlbG9jaXR5IiwibGluZWFyVmVsb2NpdHkiLCJzcGVlZCIsIm1hZyIsImFuZ2xlIiwic2lnbkFuZ2xlIiwibm9kZSIsIk1hdGgiLCJQSSIsImRyYWdDb25zdGFudCIsIm5vcm1hbGl6ZSIsInBvaW50aW5nRGlyZWN0aW9uIiwiZ2V0V29ybGRWZWN0b3IiLCJmbGlnaHREaXJlY3Rpb24iLCJmbGlnaHRTcGVlZCIsIm5vcm1hbGl6ZVNlbGYiLCJkb3QiLCJkcmFnRm9yY2VNYWduaXR1ZGUiLCJhYnMiLCJnZXRNYXNzIiwiYXJyb3dUYWlsUG9zaXRpb24iLCJnZXRXb3JsZFBvaW50IiwiYXBwbHlGb3JjZSIsIm11bCIsInVwZGF0ZUFycm93Um90YXRpb24iLCJwb3MiLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInN1YiIsInBvc2l0aW9uIiwic2hvb3QiLCJ0eXBlIiwibXVsU2VsZiIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJqb2ludCIsImVuYWJsZWQiLCJkaXNhYmxlZCIsIm9uUG9zdFNvbHZlIiwic2NvcmVBZGQiLCJpbXB1bHNlIiwiZ2V0SW1wdWxzZSIsIm5vcm1hbEltcHVsc2VzIiwiUGh5c2ljc01hbmFnZXIiLCJQVE1fUkFUSU8iLCJuYW1lIiwidGFnIiwiYXJyb3dCb2R5IiwiYm9keSIsInRhcmdldEJvZHkiLCJ3b3JsZE1hbmlmb2xkIiwiZ2V0V29ybGRNYW5pZm9sZCIsInBvaW50cyIsInBvaW50IiwiZ2V0TG9jYWxQb2ludCIsIngiLCJ3b3JsZENvb3Jkc0FuY2hvclBvaW50IiwiY29ubmVjdGVkQm9keSIsImFuY2hvciIsImNvbm5lY3RlZEFuY2hvciIsInJlZmVyZW5jZUFuZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEtBQUssR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBbkI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSztBQUNOLFNBQUtDLFNBQUwsR0FBaUJMLEVBQUUsQ0FBQ00sRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQWpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLQyxZQUFMLENBQWtCUixFQUFFLENBQUNTLFNBQXJCLENBQWpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLRixZQUFMLENBQWtCUixFQUFFLENBQUNXLFNBQXJCLENBQWpCO0FBQ0gsR0FiSTtBQWVMQyxFQUFBQSxLQWZLLG1CQWVJLENBQ1IsQ0FoQkk7QUFrQkxDLEVBQUFBLE1BbEJLLGtCQWtCR0MsRUFsQkgsRUFrQk87QUFDUixRQUFJQyxRQUFRLEdBQUcsS0FBS1IsU0FBTCxDQUFlUyxjQUE5QjtBQUNBLFFBQUlDLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxHQUFULEVBQVo7QUFDQSxRQUFJRCxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFFBQUlFLEtBQUssR0FBR0osUUFBUSxDQUFDSyxTQUFULENBQW1CcEIsRUFBRSxDQUFDTSxFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBbkIsQ0FBWjtBQUNBLFNBQUtlLElBQUwsQ0FBVUYsS0FBVixHQUFrQixFQUFFQSxLQUFLLEdBQUcsR0FBUixHQUFjRyxJQUFJLENBQUNDLEVBQXJCLENBQWxCO0FBQ0osUUFBSUMsWUFBWSxHQUFHLEdBQW5CO0FBQ0EsUUFBSW5CLFNBQVMs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Q0FBQ0MsT0FBTixHQUFnQixJQUFoQjtBQUVIO0FBOUZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzY29yZSA9IHJlcXVpcmUoJ0dhbWVTY29yZScpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLndlbGRKb2ludCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLldlbGRKb2ludCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCB2ZWxvY2l0eSA9IHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIGxldCBzcGVlZCA9IHZlbG9jaXR5Lm1hZygpO1xyXG4gICAgICAgIGlmIChzcGVlZCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSB2ZWxvY2l0eS5zaWduQW5nbGUoY2MudjIoMSwwKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IC0oYW5nbGUgKiAxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICBsZXQgZHJhZ0NvbnN0YW50ID0gMC4xO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSB2ZWxvY2l0eS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgbGV0IHBvaW50aW5nRGlyZWN0aW9uID0gdGhpcy5yaWdpZEJvZHkuZ2V0V29ybGRWZWN0b3IoIGNjLnYyKCAxLCAwICkgKTtcclxuICAgICAgICBsZXQgZmxpZ2h0RGlyZWN0aW9uID0gdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgbGV0IGZsaWdodFNwZWVkID0gZmxpZ2h0RGlyZWN0aW9uLm1hZygpO1xyXG4gICAgICAgIGZsaWdodERpcmVjdGlvbi5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRvdCA9IGZsaWdodERpcmVjdGlvbi5kb3QocG9pbnRpbmdEaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCBkcmFnRm9yY2VNYWduaXR1ZGUgPSAoMSAtIE1hdGguYWJzKGRvdCkpICogZmxpZ2h0U3BlZWQgKiBmbGlnaHRTcGVlZCAqIGRyYWdDb25zdGFudCAqIHRoaXMucmlnaWRCb2R5LmdldE1hc3MoKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgYXJyb3dUYWlsUG9zaXRpb24gPSB0aGlzLnJpZ2lkQm9keS5nZXRXb3JsZFBvaW50KCBjYy52MiggLTY4LCAwICkgKTtcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5hcHBseUZvcmNlKCBmbGlnaHREaXJlY3Rpb24ubXVsKC1kcmFnRm9yY2VNYWduaXR1ZGUpLCBhcnJvd1RhaWxQb3NpdGlvbiwgZmFsc2UgKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQXJyb3dSb3RhdGlvbihwb3MpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgcG9zID0gcG9zLnN1Yih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcG9zLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IHBvcy5zaWduQW5nbGUoY2MudjIoMSwwKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gLShhbmdsZSAqIDE4MCAvIE1hdGguUEkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG9vdCAoKSB7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkudHlwZSA9IDI7XHJcbiAgICAgICAgbGV0IHZlbG9jaXR5ID0gdGhpcy5kaXJlY3Rpb24ubXVsU2VsZigxODAwKTtcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdCAoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgbGV0IGpvaW50ID0gdGhpcy53ZWxkSm9pbnQ7XHJcbiAgICAgICAgaWYgKGpvaW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDmr4/mrKHlpITnkIblroznorDmkp7kvZPmjqXop6bpgLvovpHml7booqvosIPnlKhcclxuICAgIG9uUG9zdFNvbHZlIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBzY29yZS5zY29yZUFkZCgxKTtcclxuICAgICAgICBsZXQgaW1wdWxzZSA9IGNvbnRhY3QuZ2V0SW1wdWxzZSgpOy8vIOiOt+WPluWGsumHj+S/oeaBr++8jOazqOaEj+i/meS4quS/oeaBr+WPquacieWcqCBvblBvc3RTb2x2ZSDlm57osIPkuK3miY3og73ojrflj5bliLBcclxuICAgICAgICBpZiAoTWF0aC5hYnMoaW1wdWxzZS5ub3JtYWxJbXB1bHNlc1swXSkgPCBjYy5QaHlzaWNzTWFuYWdlci5QVE1fUkFUSU8pIHJldHVybjtcclxuICAgICAgICBsZXQgam9pbnQgPSB0aGlzLndlbGRKb2ludDtcclxuXHJcbiAgICAgICAgaWYgKGpvaW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgam9pbnQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJhcnJvd1wiIHx8IG90aGVyQ29sbGlkZXIudGFnID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFycm93Qm9keSA9IHNlbGZDb2xsaWRlci5ib2R5O1xyXG4gICAgICAgIGxldCB0YXJnZXRCb2R5ID0gb3RoZXJDb2xsaWRlci5ib2R5O1xyXG4gICAgICAgIGxldCB3b3JsZE1hbmlmb2xkID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCk7Ly8g5bCGIGFycm93Qm9keSDmnKzlnLDlnZDmoIfns7vkuIvnmoTngrnovazmjaLkuLrkuJbnlYzlnZDmoIfns7vkuIvnmoTngrlcclxuICAgICAgICBsZXQgcG9pbnRzID0gd29ybGRNYW5pZm9sZC5wb2ludHM7XHJcbiAgICAgICAgbGV0IHBvaW50ID0gYXJyb3dCb2R5LmdldExvY2FsUG9pbnQocG9pbnRzWzBdKTtcclxuICAgICAgICBpZiAocG9pbnQueCA8IDU0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3b3JsZENvb3Jkc0FuY2hvclBvaW50ID0gYXJyb3dCb2R5LmdldFdvcmxkUG9pbnQoY2MudjIoMCwgMCkpO1xyXG4gICAgXHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQm9keSA9IHRhcmdldEJvZHk7XHJcbiAgICAgICAgam9pbnQuYW5jaG9yID0gYXJyb3dCb2R5LmdldExvY2FsUG9pbnQod29ybGRDb29yZHNBbmNob3JQb2ludCk7XHJcbiAgICAgICAgam9pbnQuY29ubmVjdGVkQW5jaG9yID0gdGFyZ2V0Qm9keS5nZXRMb2NhbFBvaW50KHdvcmxkQ29vcmRzQW5jaG9yUG9pbnQpO1xyXG4gICAgICAgIGpvaW50LnJlZmVyZW5jZUFuZ2xlID0gYXJyb3dCb2R5Lm5vZGUuYW5nbGUgLSB0YXJnZXRCb2R5Lm5vZGUuYW5nbGU7XHJcblxyXG4gICAgICAgIGpvaW50LmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==