cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        if (this.node.y < -cc.winSize.height/2 - 200) {
            this.node.destroy();
        }
    },
});
