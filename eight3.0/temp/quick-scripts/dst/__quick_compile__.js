
(function () {
var scripts = [{"deps":{"./assets/Script-ywj/GameMgr":20,"./assets/Script-ywj/GameScore":9,"./assets/Script-ywj/Item":1,"./assets/Script-ywj/Gamey":6,"./assets/Script-ywj/Back":10,"./assets/script-wyx/SearchScript":23,"./assets/script-wyx/TextSwitch1":13,"./assets/script-wyx/TextSwitch1.1":17,"./assets/script-wyx/TextSwitch1.21":12,"./assets/script-wyx/Text2.2":8,"./assets/script-wyx/TextSwitch1.22":11,"./assets/script-wyx/TextSwitch2.1":18,"./assets/script-wyx/dizzySwitch":21,"./assets/script-wyx/globalVariable":16,"./assets/script-wyx/showConsciousNumber":25,"./assets/script-wyx/lookDiaryN":14,"./assets/script-wyx/TextSwitch2.31":15,"./assets/script-wyx/lookDiaryO":19,"./assets/script-wyx/Choose1":3,"./assets/Script-ywj/Arrow":7,"./assets/scripts/lsm/CollisionCallback":22,"./assets/scripts/lsm/MainController":33,"./assets/scripts/lsm/GoOutside":2,"./assets/scripts/lsm/Rigid body":28,"./assets/scripts/lsm/Physize":32,"./assets/scripts/lsm/back":26,"./assets/scripts/lsm/desk":31,"./assets/scripts/lsm/win":24,"./assets/scripts/lsm/Box":34,"./assets/scripts/zyy/false_ans":4,"./assets/scripts/zyy/good_ending - 001":37,"./assets/scripts/zyy/good_ending":29,"./assets/scripts/zyy/fakegood_ending":27,"./assets/scripts/zyy/label - test 1":30,"./assets/scripts/zyy/label - test 2":38,"./assets/scripts/zyy/label - test 5":44,"./assets/scripts/zyy/label - test 3":35,"./assets/scripts/zyy/label - test 4":39,"./assets/scripts/zyy/label":36,"./assets/scripts/zyy/label4.1":40,"./assets/scripts/zyy/over":43,"./assets/scripts/zyy/turnTo":47,"./assets/scripts/zyy/login":41,"./assets/scripts/zyy/music":46,"./assets/scripts/zyy/bad_ending":45,"./assets/scripts/zzy/NewScript":66,"./assets/scripts/zzy/b":49,"./assets/scripts/zzy/box":50,"./assets/scripts/zzy/classdoor":5,"./assets/scripts/zzy/canoon":51,"./assets/scripts/zzy/coward":48,"./assets/scripts/zzy/door":57,"./assets/scripts/zzy/elevator":53,"./assets/scripts/zzy/jump_button":52,"./assets/scripts/zzy/jump_choice":54,"./assets/scripts/zzy/jump_lingjian":58,"./assets/scripts/zzy/lingjian":59,"./assets/scripts/zzy/message":56,"./assets/scripts/zzy/textbox":60,"./assets/scripts/zzy/start":61,"./assets/scripts/zzy/textbox2":55,"./assets/scripts/zzy/textbox3":64,"./assets/scripts/zzy/textbox4":62,"./assets/scripts/zzy/textbox5":65,"./assets/scripts/zzy/a":42,"./assets/scripts/lsm/Collision":63},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/Script-ywj/Item.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lsm/GoOutside.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/Choose1.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/false_ans.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/classdoor.js"},{"deps":{},"path":"preview-scripts/assets/Script-ywj/Gamey.js"},{"deps":{"GameScore":9},"path":"preview-scripts/assets/Script-ywj/Arrow.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/Text2.2.js"},{"deps":{},"path":"preview-scripts/assets/Script-ywj/GameScore.js"},{"deps":{},"path":"preview-scripts/assets/Script-ywj/Back.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/TextSwitch1.22.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/TextSwitch1.21.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/TextSwitch1.js"},{"deps":{"globalVariable":16},"path":"preview-scripts/assets/script-wyx/lookDiaryN.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/TextSwitch2.31.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/globalVariable.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/TextSwitch1.1.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/TextSwitch2.1.js"},{"deps":{"globalVariable":16},"path":"preview-scripts/assets/script-wyx/lookDiaryO.js"},{"deps":{"GameScore":9,"globalVariable":16},"path":"preview-scripts/assets/Script-ywj/GameMgr.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/dizzySwitch.js"},{"deps":{"globalVariable":16},"path":"preview-scripts/assets/scripts/lsm/CollisionCallback.js"},{"deps":{},"path":"preview-scripts/assets/script-wyx/SearchScript.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lsm/win.js"},{"deps":{"globalVariable":16},"path":"preview-scripts/assets/script-wyx/showConsciousNumber.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lsm/back.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/fakegood_ending.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lsm/Rigid body.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/good_ending.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/label - test 1.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lsm/desk.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lsm/Physize.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lsm/MainController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lsm/Box.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/label - test 3.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/label.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/good_ending - 001.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/label - test 2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/label - test 4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/label4.1.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/login.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/a.js"},{"deps":{"globalVariable":16},"path":"preview-scripts/assets/scripts/zyy/over.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/label - test 5.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/bad_ending.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zyy/music.js"},{"deps":{"globalVariable":16},"path":"preview-scripts/assets/scripts/zyy/turnTo.js"},{"deps":{"./message":56,"./start":61},"path":"preview-scripts/assets/scripts/zzy/coward.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/b.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/box.js"},{"deps":{"./message":56,"./jump_choice":54},"path":"preview-scripts/assets/scripts/zzy/canoon.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/jump_button.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/elevator.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/jump_choice.js"},{"deps":{"./message":56,"./jump_button":52},"path":"preview-scripts/assets/scripts/zzy/textbox2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/message.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/door.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/jump_lingjian.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/lingjian.js"},{"deps":{"./message":56,"./jump_button":52},"path":"preview-scripts/assets/scripts/zzy/textbox.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/start.js"},{"deps":{"./message":56,"./jump_button":52},"path":"preview-scripts/assets/scripts/zzy/textbox4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lsm/Collision.js"},{"deps":{"./message":56,"./jump_button":52},"path":"preview-scripts/assets/scripts/zzy/textbox3.js"},{"deps":{"./message":56,"./jump_lingjian":58},"path":"preview-scripts/assets/scripts/zzy/textbox5.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zzy/NewScript.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    