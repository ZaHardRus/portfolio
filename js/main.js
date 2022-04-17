!function(){"use strict";var __webpack_modules__={"./src/js/app.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger.js */ "./src/js/modules/burger.js");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs.js */ "./src/js/modules/tabs.js");\n/* harmony import */ var _modules_accordeon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeon.js */ "./src/js/modules/accordeon.js");\n/* harmony import */ var _modules_canvas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/canvas.js */ "./src/js/modules/canvas.js");\n/* harmony import */ var _modules_header_top_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/header-top.js */ "./src/js/modules/header-top.js");\n/* harmony import */ var _modules_observer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/observer.js */ "./src/js/modules/observer.js");\n\r\n\r\n\r\n\r\n\r\n\r\n//import \'./modules/modal.js\'\r\n\r\nconst swiper = new Swiper(\'.swiper\', {\r\n    loop: true,\r\n    slidesPerView: 1,\r\n    spaceBetween: 25,\r\n    navigation: {\r\n        nextEl: \'.circle-btn-next\',\r\n        prevEl: \'.circle-btn-prev\',\r\n    },\r\n    autoplay: {\r\n        delay: 3500\r\n    },\r\n    breakpoints: {\r\n        576: {\r\n            slidesPerView: 2,\r\n        },\r\n        768: {\r\n            slidesPerView: 2,\r\n        },\r\n        992: {\r\n            slidesPerView: 3,\r\n        },\r\n        1200: {\r\n            slidesPerView: 4,\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack://gulp-starter-2022/./src/js/app.js?')},"./src/js/modules/accordeon.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\ndocument.querySelectorAll('.accordion').forEach(el=>{\r\n    el.addEventListener('click',(e)=>{\r\n        console.log(e)\r\n        if(\r\n            e.target.closest( '.accordion__item-trigger-icon')\r\n            ||\r\n            e.target.closest( '.accordion__item-trigger-text'))\r\n        {\r\n            e.target.closest('.accordion__item').classList.toggle('active')\r\n        }\r\n    })\r\n})\n\n//# sourceURL=webpack://gulp-starter-2022/./src/js/modules/accordeon.js?")},"./src/js/modules/burger.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\nconst x = document.querySelector(".burger");\r\n\r\nx.addEventListener("click", myFunction);\r\n\r\nfunction myFunction() {\r\n    const element = document.querySelector(".menu");\r\n    element.classList.toggle("open");\r\n\r\n    x.classList.toggle("change");\r\n}\n\n//# sourceURL=webpack://gulp-starter-2022/./src/js/modules/burger.js?')},"./src/js/modules/canvas.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\nwindow.addEventListener("load", windowLoadHandler, false);\r\n\r\n//for debug messages\r\nvar Debugger = function() { };\r\nDebugger.log = function(message) {\r\n    try {\r\n        console.log(message);\r\n    }\r\n    catch (exception) {\r\n        return;\r\n    }\r\n}\r\n\r\nfunction windowLoadHandler() {\r\n    canvasApp();\r\n}\r\n\r\n// function canvasSupport() {\r\n// \treturn Modernizr.canvas;\r\n// }\r\n\r\nfunction canvasApp() {\r\n    // if (!canvasSupport()) {\r\n    // \treturn;\r\n    // }\r\n\r\n    var theCanvas = document.getElementById("canv");\r\n    var context = theCanvas.getContext("2d");\r\n\r\n    var displayWidth;\r\n    var displayHeight;\r\n    var timer;\r\n    var wait;\r\n    var count;\r\n    var numToAddEachFrame;\r\n    var particleList;\r\n    var recycleBin;\r\n    var particleAlpha;\r\n    var r,g,b;\r\n    var fLen;\r\n    var m;\r\n    var projCenterX;\r\n    var projCenterY;\r\n    var zMax;\r\n    var turnAngle;\r\n    var turnSpeed;\r\n    var sphereRad, sphereCenterX, sphereCenterY, sphereCenterZ;\r\n    var particleRad;\r\n    var zeroAlphaDepth;\r\n    var randAccelX, randAccelY, randAccelZ;\r\n    var gravity;\r\n    var rgbString;\r\n    //we are defining a lot of variables used in the screen update functions globally so that they don\'t have to be redefined every frame.\r\n    var p;\r\n    var outsideTest;\r\n    var nextParticle;\r\n    var sinAngle;\r\n    var cosAngle;\r\n    var rotX, rotZ;\r\n    var depthAlphaFactor;\r\n    var i;\r\n    var theta, phi;\r\n    var x0, y0, z0;\r\n\r\n    init();\r\n\r\n    function init() {\r\n        wait = 1;\r\n        count = wait - 1;\r\n        numToAddEachFrame = 8;\r\n\r\n        //particle color\r\n        r = 19;\r\n        g = 120;\r\n        b = 239;\r\n\r\n        rgbString = "rgba("+r+","+g+","+b+","; //partial string for color which will be completed by appending alpha value.\r\n        particleAlpha = 1; //maximum alpha\r\n\r\n        displayWidth = theCanvas.width;\r\n        displayHeight = theCanvas.height;\r\n\r\n        fLen = 320; //represents the distance from the viewer to z=0 depth.\r\n\r\n        //projection center coordinates sets location of origin\r\n        projCenterX = displayWidth/2;\r\n        projCenterY = displayHeight/2;\r\n\r\n        //we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).\r\n        zMax = fLen-2;\r\n\r\n        particleList = {};\r\n        recycleBin = {};\r\n\r\n        //random acceleration factors - causes some random motion\r\n        randAccelX = 0.1;\r\n        randAccelY = 0.1;\r\n        randAccelZ = 0.1;\r\n\r\n        gravity = 0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.\r\n\r\n        particleRad = 2.5;\r\n        sphereRad = 280;\r\n        sphereCenterX = 0;\r\n        sphereCenterY = 0;\r\n        sphereCenterZ = -3 - sphereRad;\r\n\r\n        //alpha values will lessen as particles move further back, causing depth-based darkening:\r\n        zeroAlphaDepth = -750;\r\n\r\n        turnSpeed = 2*Math.PI/1600; //the sphere will rotate at this speed (one complete rotation every 1600 frames).\r\n        turnAngle = 0; //initial angle\r\n\r\n        timer = setInterval(onTimer, 1000/24);\r\n    }\r\n\r\n    function onTimer() {\r\n        //if enough time has elapsed, we will add new particles.\r\n        count++;\r\n        if (count >= wait) {\r\n\r\n            count = 0;\r\n            for (i = 0; i < numToAddEachFrame; i++) {\r\n                theta = Math.random()*2*Math.PI;\r\n                phi = Math.acos(Math.random()*2-1);\r\n                x0 = sphereRad*Math.sin(phi)*Math.cos(theta);\r\n                y0 = sphereRad*Math.sin(phi)*Math.sin(theta);\r\n                z0 = sphereRad*Math.cos(phi);\r\n\r\n                //We use the addParticle function to add a new particle. The parameters set the position and velocity components.\r\n                //Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after\r\n                //it becomes unstuck).\r\n                var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002*x0, 0.002*y0, 0.002*z0);\r\n\r\n                //we set some "envelope" parameters which will control the evolving alpha of the particles.\r\n                p.attack = 50;\r\n                p.hold = 50;\r\n                p.decay = 160;\r\n                p.initValue = 0;\r\n                p.holdValue = particleAlpha;\r\n                p.lastValue = 0;\r\n\r\n                //the particle will be stuck in one place until this time has elapsed:\r\n                p.stuckTime = 80 + Math.random()*20;\r\n\r\n                p.accelX = 0;\r\n                p.accelY = gravity;\r\n                p.accelZ = 0;\r\n            }\r\n        }\r\n\r\n        //update viewing angle\r\n        turnAngle = (turnAngle + turnSpeed) % (2*Math.PI);\r\n        sinAngle = Math.sin(turnAngle);\r\n        cosAngle = Math.cos(turnAngle);\r\n\r\n        //background fill\r\n        context.clearRect(0,0,displayWidth,displayHeight);\r\n        context.fillStyle = "rgba(0,0,0,0)";\r\n        context.fillRect(0,0,displayWidth,displayHeight);\r\n\r\n        //update and draw particles\r\n        p = particleList.first;\r\n        while (p != null) {\r\n            //before list is altered record next particle\r\n            nextParticle = p.next;\r\n\r\n            //update age\r\n            p.age++;\r\n\r\n            //if the particle is past its "stuck" time, it will begin to move.\r\n            if (p.age > p.stuckTime) {\r\n                p.velX += p.accelX + randAccelX*(Math.random()*2 - 1);\r\n                p.velY += p.accelY + randAccelY*(Math.random()*2 - 1);\r\n                p.velZ += p.accelZ + randAccelZ*(Math.random()*2 - 1);\r\n\r\n                p.x += p.velX;\r\n                p.y += p.velY;\r\n                p.z += p.velZ;\r\n            }\r\n\r\n            /*\r\n            We are doing two things here to calculate display coordinates.\r\n            The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for\r\n            x and z (but the y coordinate will not change).\r\n            Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.\r\n            */\r\n            rotX = cosAngle*p.x + sinAngle*(p.z - sphereCenterZ);\r\n            rotZ = -sinAngle*p.x + cosAngle*(p.z - sphereCenterZ) + sphereCenterZ;\r\n            m = fLen/(fLen - rotZ);\r\n            p.projX = rotX*m + projCenterX;\r\n            p.projY = p.y*m + projCenterY;\r\n\r\n            //update alpha according to envelope parameters.\r\n            if (p.age < p.attack+p.hold+p.decay) {\r\n                if (p.age < p.attack) {\r\n                    p.alpha = (p.holdValue - p.initValue)/p.attack*p.age + p.initValue;\r\n                }\r\n                else if (p.age < p.attack+p.hold) {\r\n                    p.alpha = p.holdValue;\r\n                }\r\n                else if (p.age < p.attack+p.hold+p.decay) {\r\n                    p.alpha = (p.lastValue - p.holdValue)/p.decay*(p.age-p.attack-p.hold) + p.holdValue;\r\n                }\r\n            }\r\n            else {\r\n                p.dead = true;\r\n            }\r\n\r\n            //see if the particle is still within the viewable range.\r\n            if ((p.projX > displayWidth)||(p.projX<0)||(p.projY<0)||(p.projY>displayHeight)||(rotZ>zMax)) {\r\n                outsideTest = true;\r\n            }\r\n            else {\r\n                outsideTest = false;\r\n            }\r\n\r\n            if (outsideTest||p.dead) {\r\n                recycle(p);\r\n            }\r\n\r\n            else {\r\n                //depth-dependent darkening\r\n                depthAlphaFactor = (1-rotZ/zeroAlphaDepth);\r\n                depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor<0) ? 0 : depthAlphaFactor);\r\n                context.fillStyle = rgbString + depthAlphaFactor*p.alpha + ")";\r\n\r\n                //draw\r\n                context.beginPath();\r\n                context.arc(p.projX, p.projY, m*particleRad, 0, 2*Math.PI, false);\r\n                context.closePath();\r\n                context.fill();\r\n            }\r\n\r\n            p = nextParticle;\r\n        }\r\n    }\r\n\r\n    function addParticle(x0,y0,z0,vx0,vy0,vz0) {\r\n        var newParticle;\r\n        var color;\r\n\r\n        //check recycle bin for available drop:\r\n        if (recycleBin.first != null) {\r\n            newParticle = recycleBin.first;\r\n            //remove from bin\r\n            if (newParticle.next != null) {\r\n                recycleBin.first = newParticle.next;\r\n                newParticle.next.prev = null;\r\n            }\r\n            else {\r\n                recycleBin.first = null;\r\n            }\r\n        }\r\n        //if the recycle bin is empty, create a new particle (a new ampty object):\r\n        else {\r\n            newParticle = {};\r\n        }\r\n\r\n        //add to beginning of particle list\r\n        if (particleList.first == null) {\r\n            particleList.first = newParticle;\r\n            newParticle.prev = null;\r\n            newParticle.next = null;\r\n        }\r\n        else {\r\n            newParticle.next = particleList.first;\r\n            particleList.first.prev = newParticle;\r\n            particleList.first = newParticle;\r\n            newParticle.prev = null;\r\n        }\r\n\r\n        //initialize\r\n        newParticle.x = x0;\r\n        newParticle.y = y0;\r\n        newParticle.z = z0;\r\n        newParticle.velX = vx0;\r\n        newParticle.velY = vy0;\r\n        newParticle.velZ = vz0;\r\n        newParticle.age = 0;\r\n        newParticle.dead = false;\r\n        if (Math.random() < 0.5) {\r\n            newParticle.right = true;\r\n        }\r\n        else {\r\n            newParticle.right = false;\r\n        }\r\n        return newParticle;\r\n    }\r\n\r\n    function recycle(p) {\r\n        //remove from particleList\r\n        if (particleList.first == p) {\r\n            if (p.next != null) {\r\n                p.next.prev = null;\r\n                particleList.first = p.next;\r\n            }\r\n            else {\r\n                particleList.first = null;\r\n            }\r\n        }\r\n        else {\r\n            if (p.next == null) {\r\n                p.prev.next = null;\r\n            }\r\n            else {\r\n                p.prev.next = p.next;\r\n                p.next.prev = p.prev;\r\n            }\r\n        }\r\n        //add to recycle bin\r\n        if (recycleBin.first == null) {\r\n            recycleBin.first = p;\r\n            p.prev = null;\r\n            p.next = null;\r\n        }\r\n        else {\r\n            p.next = recycleBin.first;\r\n            recycleBin.first.prev = p;\r\n            recycleBin.first = p;\r\n            p.prev = null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://gulp-starter-2022/./src/js/modules/canvas.js?')},"./src/js/modules/header-top.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nlet lastScroll = 0;\r\nconst defaultOffset = 100;\r\nconst header = document.querySelector('.navbar');\r\nconst scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;\r\nconst containHide = () => header.classList.contains('hide');\r\n\r\nwindow.addEventListener('scroll', () => {\r\n    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {\r\n        //scroll down\r\n        header.classList.add('hide');\r\n        header.style.backgroundColor='#111111'\r\n    }\r\n    else if(scrollPosition() < lastScroll && containHide()){\r\n        //scroll up\r\n        header.classList.remove('hide');\r\n    }\r\n\r\n    lastScroll = scrollPosition();\r\n})\n\n//# sourceURL=webpack://gulp-starter-2022/./src/js/modules/header-top.js?")},"./src/js/modules/observer.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nfunction onEntry(entry) {\r\n    entry.forEach(el => {\r\n        if (el.isIntersecting) {\r\n            el.target.classList.add('element-show');\r\n        }\r\n    });\r\n}\r\nfunction onEntry2(entry) {\r\n    entry.forEach(el => {\r\n        if (el.isIntersecting) {\r\n            el.target.classList.add('element-show2');\r\n        }\r\n    });\r\n}\r\nfunction onEntry3(entry) {\r\n    entry.forEach(el => {\r\n        if (el.isIntersecting) {\r\n            el.target.classList.add('element-show3');\r\n        }\r\n    });\r\n}\r\n\r\nlet options = {\r\n    threshold: [0.5] };\r\nlet elements1 = document.querySelectorAll('.element-animation');\r\nlet observer1 = new IntersectionObserver(onEntry, options);\r\n\r\nlet elements2 = document.querySelectorAll('.element-animation2');\r\nlet observer2 = new IntersectionObserver(onEntry2, options);\r\n\r\n\r\nfor (let elem of elements1) {\r\n    observer1.observe(elem);\r\n}\r\nfor (let elem of elements2) {\r\n    observer2.observe(elem);\r\n}\n\n//# sourceURL=webpack://gulp-starter-2022/./src/js/modules/observer.js?")},"./src/js/modules/tabs.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nconst headers = document.querySelectorAll('.tabs__header-item') // ищем элемент с кнопками и записываем в константу\r\nconst content = document.querySelectorAll('.tabs__content-item') // ищем элемент с контентом и записываем в константу\r\n\r\n\r\nheaders.forEach(item=>{\r\n    item.addEventListener('click',function (e){\r\n        e.preventDefault()\r\n        const tabId = e.target.dataset.tab\r\n        document.querySelectorAll('.tabs__header-item').forEach(child=>child.classList.remove('active'))\r\n        document.querySelectorAll('.tabs__content-item').forEach(child=>child.classList.remove('active'))\r\n\r\n        item.classList.add('active')\r\n        content.forEach(el=>{\r\n            if(el.dataset.tab === tabId){\r\n                el.classList.add('active')\r\n            }\r\n        })\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack://gulp-starter-2022/./src/js/modules/tabs.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/js/app.js")}();