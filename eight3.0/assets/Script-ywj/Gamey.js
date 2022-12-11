// const score = require("GameScore");
cc.Class({
    extends: cc.Component,

    properties: {
        arrowPrefab: {
            type: cc.Prefab,
            default: null
        },
        targetPrefab: {
            type: cc.Prefab,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;//开启物理引擎
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);//触摸开始
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);//触摸移动
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);//触摸结束，物体内部结束
    },

    start () {
        this.createArrow();
        this.schedule(function() {
            this.createTarget();
        }, 2);
    },

    update (dt) {

    },

    onTouchStart (event) {
        if (this.arrow) {
            this.arrow.updateArrowRotation(event.getLocation());
        }
    },

    onTouchMove (event) {
        if (this.arrow) {
            this.arrow.updateArrowRotation(event.getLocation());
        }
    },

    onTouchEnd (event) {
        if (this.arrow) {
            this.arrow.shoot();
            this.arrow = null;
            this.scheduleOnce(function() {
                this.createArrow();
            }, 0.5);
        }
    },

    createArrow () {
        let arrowNode = cc.instantiate(this.arrowPrefab);
        arrowNode.x = -600;
        arrowNode.y = 250;
        arrowNode.zIndex = 1;
        arrowNode.parent = this.node;
        this.arrow = arrowNode.getComponent("Arrow");
    },

    createTarget () {
        let targetNode = cc.instantiate(this.targetPrefab);
        targetNode.x = this.randomInt(200, 750);
        targetNode.y = 0;
        targetNode.parent = this.node;
    },

    randomInt (min, max) {
        return Math.floor(Math.random()*(max - min + 1) + min);
    }
});
