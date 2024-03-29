precision mediump float; 


uniform sampler2D uSampler;

// Color of pixel
uniform vec4 uPixelColor;  
uniform vec4 uGlobalAmbientColor; // this is shared globally
uniform float uGlobalAmbientIntensity;

// Light information
uniform bool uLightOn;
uniform vec4 uLightColor;
uniform vec3 uLightPosition;   // in pixel space!
uniform float uLightRadius;    // in pixel space!

varying vec2 vTexCoord;

void main(void)  {
    vec4 textureMapColor = texture2D(uSampler, vec2(vTexCoord.s, vTexCoord.t));
    vec4 lgtResults = uGlobalAmbientIntensity * uGlobalAmbientColor;
    if (uLightOn && (textureMapColor.a > 0.0)) {
        float dist = length(uLightPosition.xyz - gl_FragCoord.xyz);
        if (dist <= uLightRadius)
            lgtResults += uLightColor;
    }
    lgtResults *= textureMapColor;
    vec3 r = vec3(lgtResults) * (1.0-uPixelColor.a) + vec3(uPixelColor) * uPixelColor.a;
    vec4 result = vec4(r, textureMapColor.a);

    gl_FragColor = result;
}