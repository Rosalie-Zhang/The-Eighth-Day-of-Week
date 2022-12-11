
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script-ywj/Arrow');
require('./assets/Script-ywj/Back');
require('./assets/Script-ywj/GameMgr');
require('./assets/Script-ywj/GameScore');
require('./assets/Script-ywj/Gamey');
require('./assets/Script-ywj/Item');
require('./assets/script-wyx/Choose1');
require('./assets/script-wyx/SearchScript');
require('./assets/script-wyx/Text2.2');
require('./assets/script-wyx/TextSwitch1.1');
require('./assets/script-wyx/TextSwitch1.21');
require('./assets/script-wyx/TextSwitch1.22');
require('./assets/script-wyx/TextSwitch1');
require('./assets/script-wyx/TextSwitch2.1');
require('./assets/script-wyx/TextSwitch2.31');
require('./assets/script-wyx/dizzySwitch');
require('./assets/script-wyx/globalVariable');
require('./assets/script-wyx/lookDiaryN');
require('./assets/script-wyx/lookDiaryO');
require('./assets/script-wyx/showConsciousNumber');
require('./assets/scripts/lsm/Box');
require('./assets/scripts/lsm/Collision');
require('./assets/scripts/lsm/CollisionCallback');
require('./assets/scripts/lsm/GoOutside');
require('./assets/scripts/lsm/MainController');
require('./assets/scripts/lsm/Physize');
require('./assets/scripts/lsm/Rigid body');
require('./assets/scripts/lsm/back');
require('./assets/scripts/lsm/desk');
require('./assets/scripts/lsm/win');
require('./assets/scripts/zyy/bad_ending');
require('./assets/scripts/zyy/fakegood_ending');
require('./assets/scripts/zyy/false_ans');
require('./assets/scripts/zyy/good_ending - 001');
require('./assets/scripts/zyy/good_ending');
require('./assets/scripts/zyy/label - test 1');
require('./assets/scripts/zyy/label - test 2');
require('./assets/scripts/zyy/label - test 3');
require('./assets/scripts/zyy/label - test 4');
require('./assets/scripts/zyy/label - test 5');
require('./assets/scripts/zyy/label');
require('./assets/scripts/zyy/label4.1');
require('./assets/scripts/zyy/login');
require('./assets/scripts/zyy/music');
require('./assets/scripts/zyy/over');
require('./assets/scripts/zyy/turnTo');
require('./assets/scripts/zzy/NewScript');
require('./assets/scripts/zzy/a');
require('./assets/scripts/zzy/b');
require('./assets/scripts/zzy/box');
require('./assets/scripts/zzy/canoon');
require('./assets/scripts/zzy/classdoor');
require('./assets/scripts/zzy/coward');
require('./assets/scripts/zzy/door');
require('./assets/scripts/zzy/elevator');
require('./assets/scripts/zzy/jump_button');
require('./assets/scripts/zzy/jump_choice');
require('./assets/scripts/zzy/jump_lingjian');
require('./assets/scripts/zzy/lingjian');
require('./assets/scripts/zzy/message');
require('./assets/scripts/zzy/start');
require('./assets/scripts/zzy/textbox');
require('./assets/scripts/zzy/textbox2');
require('./assets/scripts/zzy/textbox3');
require('./assets/scripts/zzy/textbox4');
require('./assets/scripts/zzy/textbox5');

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