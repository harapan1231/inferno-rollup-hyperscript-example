import replace from "rollup-plugin-replace";
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
// uncomment this to uglify source code
// import uglify from 'rollup-plugin-uglify';

export default {
  moduleName: "Chalk Words",
  entry: "src/main.js",
  dest: "dest/app.js",
  format: "iife",
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    nodeResolve({
      jsnext: true,
      browser: true
    }),
    commonjs(),
    buble({
      // uncomment this to use `import createElement from 'inferno-create-element';` with jsx
      // jsx: 'createElement',
      objectAssign: 'Object.assign'
    })
    // uncomment this to uglify source code
    // uglify()
  ]
}
