"use strict";

MyGame.prototype._createALight = function (pos, color, n, f, intensity) {
    var light = new Light();
    light.setColor(color);
    light.setXPos(pos[0]);
    light.setYPos(pos[1]);
    light.setZPos(pos[2]);
    light.setNear(n);
    light.setFar(f);
    light.setIntensity(intensity);

    return light;
};

MyGame.prototype._initializeLights = function () {
    this.mGlobalLightSet = new LightSet();

    var l = this._createALight(
        [21, 58, 5],       // Hero
        [0.2, 0.2, 0.8, 1],  // some color
        20, 50,             // Near and Far
        5.5                // intensity
    );
    this.mGlobalLightSet.addToSet(l);

    l = this._createALight(
        [24, 24, 8],           // Left minion position
        [0.4, 0.7, 0.4, 1],    // color
        20, 45,                // near and far
        2.8                    // intensity
    );
    this.mGlobalLightSet.addToSet(l);

    l = this._createALight(
        [66, 23, 10],            // Right minion position
        [0.7, 0.7, 0.7, 1],     // color
        10, 35,                 // near and far
        3                       // intensity
    );
    this.mGlobalLightSet.addToSet(l);

    l = this._createALight(
        [72, 57, 6],            // Center of camera 
        [0.8, 0.6, 0.6, 1],     // color
        15, 40,                 // near and far
        3                       // intensity
    );
    this.mGlobalLightSet.addToSet(l);
};