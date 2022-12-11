"use strict";
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