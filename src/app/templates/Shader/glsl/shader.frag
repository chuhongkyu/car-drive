uniform float time;
uniform vec3 color;
varying vec2 vUv;
#pragma glslify: random = require(glsl-random)

void main() {
  float gradient = (1.0 - vUv.x + vUv.y) * 0.5;
  vec3 gradientColor = mix(color, color * 1.2, gradient);
  
  gl_FragColor.rgba = vec4(gradientColor, 1.0);
}
