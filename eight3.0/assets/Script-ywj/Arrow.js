var score = require('GameScore');
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.direction = cc.v2(0, 0);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.weldJoint = this.getComponent(cc.WeldJoint);
    },

    start () {
    },

    update (dt) {
        let velocity = this.rigidBody.linearVelocity;
        let speed = velocity.mag();
        if (speed === 0) return;
            let angle = velocity.signAngle(cc.v2(1,0));
            this.node.angle = -(angle * 180 / Math.PI);
        let dragConstant = 0.1;
        let direction = velocity.normalize();

        let pointingDirection = this.rigidBody.getWorldVector( cc.v2( 1, 0 ) );
        let flightDirection = this.rigidBody.linearVelocity;
        let flightSpeed = flightDirection.mag();
        flightDirection.normalizeSelf();
        
        let dot = flightDirection.dot(pointingDirection);
        let dragForceMagnitude = (1 - Math.abs(dot)) * flightSpeed * flightSpeed * dragConstant * this.rigidBody.getMass();
        
        let arrowTailPosition = this.rigidBody.getWorldPoint( cc.v2( -68, 0 ) );
        this.rigidBody.applyForce( flightDirection.mul(-dragForceMagnitude), arrowTailPosition, false );
    },

    updateArrowRotation(pos) {
        pos = this.node.parent.convertToNodeSpaceAR(pos);
        pos = pos.sub(this.node.position);
        this.direction = pos.normalize();
        let angle = pos.signAngle(cc.v2(1,0));
        this.node.angle = -(angle * 180 / Math.PI);
    },

    shoot () {
        this.rigidBody.type = 2;
        let velocity = this.direction.mulSelf(1800);
        this.rigidBody.linearVelocity = velocity;
    },

    onBeginContact (contact, selfCollider, otherCollider) {
        let joint = this.weldJoint;
        if (joint.enabled) {
            contact.disabled = true;
        }
    },

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve (contact, selfCollider, otherCollider) {
        score.scoreAdd(1);
        let impulse = contact.getImpulse();// 获取冲量信息，注意这个信息只有在 onPostSolve 回调中才能获取到
        if (Math.abs(impulse.normalImpulses[0]) < cc.PhysicsManager.PTM_RATIO) return;
        let joint = this.weldJoint;

        if (joint.enabled) {
            joint.enabled = false;
            return;
        }

        if (otherCollider.node.name == "arrow" || otherCollider.tag == 1) {
            return;
        }

        let arrowBody = selfCollider.body;
        let targetBody = otherCollider.body;
        let worldManifold = contact.getWorldManifold();// 将 arrowBody 本地坐标系下的点转换为世界坐标系下的点
        let points = worldManifold.points;
        let point = arrowBody.getLocalPoint(points[0]);
        if (point.x < 54) {
            return;
        }

        let worldCoordsAnchorPoint = arrowBody.getWorldPoint(cc.v2(0, 0));
    
        joint.connectedBody = targetBody;
        joint.anchor = arrowBody.getLocalPoint(worldCoordsAnchorPoint);
        joint.connectedAnchor = targetBody.getLocalPoint(worldCoordsAnchorPoint);
        joint.referenceAngle = arrowBody.node.angle - targetBody.node.angle;

        joint.enabled = true;

    }
});
