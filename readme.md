#MOD3 

## Further development on this project has stopped!!


__As3dMod 3D Modifier Library port for JavaScript and Three.js, Pre3d, J3D, Copperlicht and CubicVR__

This is a port of the [AS3DMod Modifier Library for ActionScript 3](http://code.google.com/p/as3dmod/) to JavaScript.  

[![MOD3.js](/examples/flipbook3/assets/flipbook2.png)](http://foo123.github.com/examples/flipbook3/)

It is named *MOD3* to signify that it has support for [Three.js](https://github.com/mrdoob/three.js/)

It is a complete port (up to limitations between the 2 frameworks)  
Not all Modifiers of AS3DMod can be ported but most can.  
However the structure is ready for more modifiers to be added (even custom ones)

__Complete source code and minified version__

###Contents

* [Live Examples](#live-examples)
* [3D Engines Support](#support-for-3d-javascript-engines)
* [3D Modifiers Support](#modifiers-supported-up-to-present)
* [Issues](#issues)
* [Todo](#todo)
* [ChangeLog](#changelog)


###Live Examples

* [3D flipbook](http://foo123.github.com/examples/flipbook3/) (Three.js, MOD3.js (bend and pivot) and Tween.js)
* [Dancing Box](http://foo123.github.com/examples/dancing-box/)  (a blend of 3D manipulation and sound visualization)


###Support for 3D JavaScript engines
* Three.js with examples (r58)
* J3D with examples
* Copperlicht with examples
* CubicVR with examples
* Pre3d with examples (my pre3d examples are a liitle blurry but you'll get the picture)



###Modifiers supported (up to present)  
* Pivot (note: Pivot does not work with Pre3d)  
* Bend
* Twist
* Taper
* Skew
* Noise
* Wheel
* Bloat
* Break



###Issues
* There seems to be a problem when adding modifiers to multiple objects [SOLVED see MeshProxy.js]
(the modifiers for each successive object are run together with the modifiers of the previous object see Bend2-problem example), 
* build if having problems with encoding set -enc option in build.bat  


###TODO
* optimize (math ops, caching etc..)
* keep up with javascript engine updates (will try)

  

###Changelog
* added support for CubicVR.js 3D Engine, minor optimizations for all engines
* added support for Three.js revision (r58)
* added support for Three.js revision (r53)


*URL* [Nikos Web Development](http://nikos-web-development.netai.net/ "Nikos Web Development")  
*URL* [MOD3 blog post](http://nikos-web-development.netai.net/blog/mod3-a-javascript-port-of-as3mod-for-three-js/ "MOD3 blog post")  
*URL* [WorkingClassCode](http://workingclasscode.uphero.com/ "Working Class Code")  
