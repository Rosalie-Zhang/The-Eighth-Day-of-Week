"use strict";
cc._RF.push(module, 'e37c18Ant5D0rKmuJuKPg8/', 'GameScore');
// Script-ywj/GameScore.js

"use strict";

// let scoreInfo = {
//     time : 30,
//     hitscore : 0,
//     scoreAdd : function(k){
//         this.hitscore +=k;
//     },
// };
module.exports = {
  time: 40,
  hitscore: 0,
  scoreAdd: function scoreAdd(k) {
    this.hitscore += k;
  }
};

cc._RF.pop();