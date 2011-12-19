/** http://github.com/foo123/MOD3
**
** AS3Mod port to javascript by Nikos M.
** http://nikos-web-development-netai.net/
**/
var MOD3=MOD3||{};MOD3.ModConstant={LEFT:-1,RIGHT:1,NONE:0,X:1,Y:2,Z:4};MOD3.Point=function(a,b){this.y=this.x=0;if(typeof a!="undefined")this.x=a;if(typeof b!="undefined")this.y=b};MOD3.Point.prototype.clone=function(){return new MOD3.Point(this.x,this.y)};MOD3.Matrix=function(a,b,c,d){this.m11=1;this.m21=this.m12=0;this.m22=1;if(typeof a!="undefined")this.m11=a;if(typeof b!="undefined")this.m12=b;if(typeof c!="undefined")this.m21=c;if(typeof d!="undefined")this.m22=d};
MOD3.Matrix.prototype.rotate=function(a){var b=Math.cos(a),a=Math.sin(a);this.m11=b;this.m12=-a;this.m21=a;this.m22=b;return this};MOD3.Matrix.prototype.scale=function(a,b){this.m21=this.m12=0;if(typeof a!="undefined")this.m22=this.m11=a;if(typeof b!="undefined")this.m22=b;return this};
MOD3.Matrix.prototype.multiply=function(a){var b=this.m11*a.m12+this.m12*a.m22,c=this.m21*a.m11+this.m22*a.m21,d=this.m21*a.m12+this.m22*a.m22;this.m11=this.m11*a.m11+this.m12*a.m21;this.m12=b;this.m21=c;this.m22=d;return this};MOD3.Matrix.prototype.transformPoint=function(a){return new MOD3.Point(this.m11*a.x+this.m12*a.y,this.m21*a.x+this.m22*a.y)};MOD3.Vector3=function(a,b,c){this.z=this.y=this.x=null;this.x=a;this.y=b;this.z=c};MOD3.Vector3.ZERO=new MOD3.Vector3(0,0,0);
MOD3.Vector3.prototype.clone=function(){return new MOD3.Vector3(this.x,this.y,this.z)};MOD3.Vector3.prototype.equals=function(a){return this.x==a.x&&this.y==a.y&&this.z==a.z};MOD3.Vector3.prototype.zero=function(){this.x=this.y=this.z=0};MOD3.Vector3.prototype.negate=function(){return new MOD3.Vector3(-this.x,-this.y,-this.z)};MOD3.Vector3.prototype.add=function(a){return new MOD3.Vector3(this.x+a.x,this.y+a.y,this.z+a.z)};
MOD3.Vector3.prototype.subtract=function(a){return new MOD3.Vector3(this.x-a.x,this.y-a.y,this.z-a.z)};MOD3.Vector3.prototype.multiplyScalar=function(a){return new MOD3.Vector3(this.x*a,this.y*a,this.z*a)};MOD3.Vector3.prototype.multiply=function(a){return new MOD3.Vector3(this.x*a.x,this.y*a.y,this.z*a.z)};MOD3.Vector3.prototype.divide=function(a){a=1/a;return new MOD3.Vector3(this.x*a,this.y*a,this.z*a)};
MOD3.Vector3.prototype.normalize=function(){var a=this.x*this.x+this.y*this.y+this.z*this.z;a>0&&(a=1/Math.sqrt(a),this.x*=a,this.y*=a,this.z*=a)};MOD3.Vector3.prototype.getMagnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)};MOD3.Vector3.prototype.setMagnitude=function(a){this.normalize();this.x*=a;this.y*=a;this.z*=a};MOD3.Vector3.prototype.toString=function(){return"["+this.x+" , "+this.y+" , "+this.z+"]"};MOD3.Vector3.prototype.sum=function(a,b){return a.add(b)};
MOD3.Vector3.prototype.dot=function(a,b){return a.x*b.x+a.y*b.y+a.z*b.z};MOD3.Vector3.prototype.cross=function(a,b){return new MOD3.Vector3(a.y*b.z-a.z*b.y,a.z*b.x-a.x*b.z,a.x*b.y-a.y*b.x)};MOD3.Vector3.prototype.distance=function(a,b){var c=a.x-b.x,d=a.y-b.y,f=a.z-b.z;return Math.sqrt(c*c+d*d+f*f)};
MOD3.Matrix4=function(a,b,c,d,f,e,h,i,g,k,j,n,l,o,m,p){this.n11=1;this.n21=this.n14=this.n13=this.n12=0;this.n22=1;this.n32=this.n31=this.n24=this.n23=0;this.n33=1;this.n43=this.n42=this.n41=this.n34=0;this.n44=1;if(typeof a!="undefined")this.n11=a;if(typeof b!="undefined")this.n12=b;if(typeof c!="undefined")this.n13=c;if(typeof d!="undefined")this.n14=d;if(typeof f!="undefined")this.n21=f;if(typeof e!="undefined")this.n22=e;if(typeof h!="undefined")this.n23=h;if(typeof i!="undefined")this.n24=i;
if(typeof g!="undefined")this.n31=g;if(typeof k!="undefined")this.n32=k;if(typeof j!="undefined")this.n33=j;if(typeof n!="undefined")this.n34=n;if(typeof l!="undefined")this.n41=l;if(typeof o!="undefined")this.n42=o;if(typeof m!="undefined")this.n43=m;if(typeof p!="undefined")this.n44=p};MOD3.Matrix4.prototype.translationMatrix=function(a,b,c){this.n14=a;this.n24=b;this.n34=c;return this};MOD3.Matrix4.prototype.scaleMatrix=function(a,b,c){this.n11=a;this.n22=b;this.n33=c;return this};
MOD3.Matrix4.prototype.rotationMatrix=function(a,b,c,d){var f=Math.cos(d),e=Math.sin(d),d=1-f,h=a*b*d,i=b*c*d,g=a*c*d,k=e*c,j=e*b;e*=a;this.n11=f+a*a*d;this.n12=-k+h;this.n13=j+g;this.n14=0;this.n21=k+h;this.n22=f+b*b*d;this.n23=-e+i;this.n24=0;this.n31=-j+g;this.n32=e+i;this.n33=f+c*c*d;this.n34=0;return this};
MOD3.Matrix4.prototype.calculateMultiply=function(a,b){var c=a.n11,d=b.n11,f=a.n21,e=b.n21,h=a.n31,i=b.n31,g=a.n12,k=b.n12,j=a.n22,n=b.n22,l=a.n32,o=b.n32,m=a.n13,p=b.n13,q=a.n23,s=b.n23,r=a.n33,t=b.n33,x=a.n14,u=b.n14,y=a.n24,v=b.n24,z=a.n34,w=b.n34;this.n11=c*d+g*e+m*i;this.n12=c*k+g*n+m*o;this.n13=c*p+g*s+m*t;this.n14=c*u+g*v+m*w+x;this.n21=f*d+j*e+q*i;this.n22=f*k+j*n+q*o;this.n23=f*p+j*s+q*t;this.n24=f*u+j*v+q*w+y;this.n31=h*d+l*e+r*i;this.n32=h*k+l*n+r*o;this.n33=h*p+l*s+r*t;this.n34=h*u+l*
v+r*w+z};MOD3.Matrix4.prototype.multiply=function(a,b){this.calculateMultiply(a,b);return this};MOD3.Matrix4.prototype.multiplyVector=function(a,b){var c=b.x,d=b.y,f=b.z;b.x=c*a.n11+d*a.n12+f*a.n13+a.n14;b.y=c*a.n21+d*a.n22+f*a.n23+a.n24;b.z=c*a.n31+d*a.n32+f*a.n33+a.n34};MOD3.VertexProxy=function(a){this.originalZ=this.originalY=this.originalX=this.ratioZ=this.ratioY=this.ratioX=null;if(typeof a!="undefined")this.vertex=a};MOD3.VertexProxy.prototype.setVertex=function(){};
MOD3.VertexProxy.prototype.setRatios=function(a,b,c){this.ratioX=a;this.ratioY=b;this.ratioZ=c};MOD3.VertexProxy.prototype.setOriginalPosition=function(a,b,c){this.originalX=a;this.originalY=b;this.originalZ=c};MOD3.VertexProxy.prototype.getX=function(){};MOD3.VertexProxy.prototype.getY=function(){};MOD3.VertexProxy.prototype.getZ=function(){};MOD3.VertexProxy.prototype.setX=function(){};MOD3.VertexProxy.prototype.setY=function(){};MOD3.VertexProxy.prototype.setZ=function(){};
MOD3.VertexProxy.prototype.getValue=function(a){switch(a){case MOD3.ModConstant.X:return this.getX();case MOD3.ModConstant.Y:return this.getY();case MOD3.ModConstant.Z:return this.getZ()}return 0};MOD3.VertexProxy.prototype.setValue=function(a,b){switch(a){case MOD3.ModConstant.X:this.setX(b);break;case MOD3.ModConstant.Y:this.setY(b);break;case MOD3.ModConstant.Z:this.setZ(b)}};
MOD3.VertexProxy.prototype.getRatio=function(a){switch(a){case MOD3.ModConstant.X:return this.ratioX;case MOD3.ModConstant.Y:return this.ratioY;case MOD3.ModConstant.Z:return this.ratioZ}return-1};MOD3.VertexProxy.prototype.getOriginalValue=function(a){switch(a){case MOD3.ModConstant.X:return this.originalX;case MOD3.ModConstant.Y:return this.originalY;case MOD3.ModConstant.Z:return this.originalZ}return 0};
MOD3.VertexProxy.prototype.reset=function(){this.setX(this.originalX);this.setY(this.originalY);this.setZ(this.originalZ)};MOD3.VertexProxy.prototype.collapse=function(){this.originalX=this.getX();this.originalY=this.getY();this.originalZ=this.getZ()};MOD3.VertexProxy.prototype.getVector=function(){return new MOD3.Vector3(this.getX(),this.getY(),this.getZ())};MOD3.VertexProxy.prototype.setVector=function(a){this.setX(a.x);this.setY(a.y);this.setZ(a.z)};
MOD3.VertexProxy.prototype.getRatioVector=function(){return new MOD3.Vector3(this.ratioX,this.ratioY,this.ratioZ)};MOD3.FaceProxy=function(){this.vertices=[]};MOD3.FaceProxy.prototype.addVertex=function(a){this.vertices.push(a)};MOD3.FaceProxy.prototype.getVertices=function(){return this.vertices};
MOD3.MeshProxy=function(){this.depth=this.height=this.width=this.minAxis=this.midAxis=this.maxAxis=this.minZ=this.minY=this.minX=this.maxZ=this.maxY=this.maxX=this.faces=this.vertices=null;this.vertices=[];this.faces=[];this.mesh=null};MOD3.MeshProxy.prototype.getVertices=function(){return this.vertices};MOD3.MeshProxy.prototype.getFaces=function(){return this.faces};
MOD3.MeshProxy.prototype.analyzeGeometry=function(){var a=this.getVertices().length,b,c;for(b=0;b<a;b++)c=this.getVertices()[b],b==0?(this.minX=this.maxX=c.getX(),this.minY=this.maxY=c.getY(),this.minZ=this.maxZ=c.getZ()):(this.minX=Math.min(this.minX,c.getX()),this.minY=Math.min(this.minY,c.getY()),this.minZ=Math.min(this.minZ,c.getZ()),this.maxX=Math.max(this.maxX,c.getX()),this.maxY=Math.max(this.maxY,c.getY()),this.maxZ=Math.max(this.maxZ,c.getZ())),c.setOriginalPosition(c.getX(),c.getY(),c.getZ());
this.width=this.maxX-this.minX;this.height=this.maxY-this.minY;this.depth=this.maxZ-this.minZ;b=Math.max(this.width,Math.max(this.height,this.depth));c=Math.min(this.width,Math.min(this.height,this.depth));if(b==this.width&&c==this.height)this.minAxis=MOD3.ModConstant.Y,this.midAxis=MOD3.ModConstant.Z,this.maxAxis=MOD3.ModConstant.X;else if(b==this.width&&c==this.depth)this.minAxis=MOD3.ModConstant.Z,this.midAxis=MOD3.ModConstant.Y,this.maxAxis=MOD3.ModConstant.X;else if(b==this.height&&c==this.width)this.minAxis=
MOD3.ModConstant.X,this.midAxis=MOD3.ModConstant.Z,this.maxAxis=MOD3.ModConstant.Y;else if(b==this.height&&c==this.depth)this.minAxis=MOD3.ModConstant.Z,this.midAxis=MOD3.ModConstant.X,this.maxAxis=MOD3.ModConstant.Y;else if(b==this.depth&&c==this.width)this.minAxis=MOD3.ModConstant.X,this.midAxis=MOD3.ModConstant.Y,this.maxAxis=MOD3.ModConstant.Z;else if(b==this.depth&&c==this.height)this.minAxis=MOD3.ModConstant.Y,this.midAxis=MOD3.ModConstant.X,this.maxAxis=MOD3.ModConstant.Z;for(b=0;b<a;b++)c=
this.getVertices()[b],c.setRatios((c.getX()-this.minX)/this.width,(c.getY()-this.minY)/this.height,(c.getZ()-this.minZ)/this.depth)};MOD3.MeshProxy.prototype.resetGeometry=function(){for(var a=this.getVertices().length,b=0;b<a;b++)this.getVertices()[b].reset()};MOD3.MeshProxy.prototype.collapseGeometry=function(){for(var a=this.getVertices().length,b=0;b<a;b++)this.getVertices()[b].collapse();this.analyzeGeometry()};
MOD3.MeshProxy.prototype.getMin=function(a){switch(a){case MOD3.ModConstant.X:return this.minX;case MOD3.ModConstant.Y:return this.minY;case MOD3.ModConstant.Z:return this.minZ}return-1};MOD3.MeshProxy.prototype.getMax=function(a){switch(a){case MOD3.ModConstant.X:return this.maxX;case MOD3.ModConstant.Y:return this.maxY;case MOD3.ModConstant.Z:return this.maxZ}return-1};
MOD3.MeshProxy.prototype.getSize=function(a){switch(a){case MOD3.ModConstant.X:return this.width;case MOD3.ModConstant.Y:return this.height;case MOD3.ModConstant.Z:return this.depth}return-1};MOD3.MeshProxy.prototype.setMesh=function(a){this.mesh=a;this.vertices=[];this.faces=[]};MOD3.MeshProxy.prototype.postApply=function(){};MOD3.MeshProxy.prototype.updateMeshPosition=function(){};MOD3.Modifier=function(){this.mod=null};MOD3.Modifier.prototype.setModifiable=function(a){this.mod=a};
MOD3.Modifier.prototype.getVertices=function(){return this.mod.getVertices()};MOD3.Modifier.prototype.apply=function(){};MOD3.Library3d=function(){this.id="";this.vertexClass=this.meshClass=null};MOD3.PluginFactory={};MOD3.PluginFactory.getMeshProxy=function(a){return new a.meshClass};MOD3.ModifierStack=function(a,b){this.lib3d=a;this.stack=this.baseMesh=null;this.baseMesh=MOD3.PluginFactory.getMeshProxy(a);this.baseMesh.setMesh(b);this.baseMesh.analyzeGeometry();this.stack=[]};
MOD3.ModifierStack.prototype.addModifier=function(a){a.setModifiable(this.baseMesh);this.stack.push(a)};MOD3.ModifierStack.prototype.apply=function(){this.baseMesh.resetGeometry();for(var a=0;a<this.stack.length;a++)this.stack[a].apply();this.baseMesh.postApply()};MOD3.ModifierStack.prototype.collapse=function(){this.apply();this.baseMesh.collapseGeometry();this.stack=[]};MOD3.ModifierStack.prototype.clear=function(){this.stack=[]};MOD3.ModifierStack.prototype.getMeshInfo=function(){return this.baseMesh};
MOD3.Pivot=function(a,b,c){this.pivot=null;this.pivot=new MOD3.Vector3(a,b,c)};MOD3.Pivot.prototype=new MOD3.Modifier;MOD3.Pivot.prototype.constructor=MOD3.Pivot;MOD3.Pivot.prototype.setMeshCenter=function(){this.pivot=new MOD3.Vector3(-(this.mod.minX+this.mod.width/2),-(this.mod.minY+this.mod.height/2),-(this.mod.minZ+this.mod.depth/2))};MOD3.Pivot.prototype.apply=function(){for(var a=this.mod.getVertices(),b=a.length,c=0;c<b;c++){var d=a[c],f=d.getVector().clone();d.setVector(f.add(this.pivot))}this.mod.updateMeshPosition(this.pivot.clone().negate())};
MOD3.Bend=function(a,b,c){this.diagAngle=this.angle=this.offset=this.force=null;this.constraint=MOD3.ModConstant.NONE;this.m2=this.m1=this.origin=this.height=this.width=this.mid=this.min=this.max=null;this.switchAxes=!1;this.force=a;this.offset=b;this.setAngle(c)};MOD3.Bend.prototype=new MOD3.Modifier;MOD3.Bend.prototype.constructor=MOD3.Bend;MOD3.Bend.prototype.setAngle=function(a){this.angle=a;this.m1=new MOD3.Matrix;this.m1.rotate(this.angle);this.m2=new MOD3.Matrix;this.m2.rotate(-this.angle)};
MOD3.Bend.prototype.setModifiable=function(a){MOD3.Modifier.prototype.setModifiable.call(this,a);this.max=this.switchAxes?this.mod.midAxis:this.mod.maxAxis;this.min=this.mod.minAxis;this.mid=this.switchAxes?this.mod.maxAxis:this.mod.midAxis;this.width=this.mod.getSize(this.max);this.height=this.mod.getSize(this.mid);this.origin=this.mod.getMin(this.max);this.diagAngle=Math.atan(this.width/this.height)};
MOD3.Bend.prototype.apply=function(){if(this.force!=0)for(var a=this.mod.getVertices(),b=a.length,c=this.origin+this.width*this.offset,d=this.width/Math.PI/this.force,f=Math.PI*2*(this.width/(d*Math.PI*2)),e=0;e<b;e++){var h=a[e],i=h.getValue(this.max),g=h.getValue(this.mid),k=h.getValue(this.min),g=this.m1.transformPoint(new MOD3.Point(i,g)),i=g.x,g=g.y,j=(i-this.origin)/this.width;this.constraint==MOD3.ModConstant.LEFT&&j<=this.offset||this.constraint==MOD3.ModConstant.RIGHT&&j>=this.offset||(i=
Math.PI/2-f*this.offset+f*j,j=Math.cos(i)*(d+k),k=Math.sin(i)*(d+k)-d,i=c-j);g=this.m2.transformPoint(new MOD3.Point(i,g));i=g.x;g=g.y;h.setValue(this.max,i);h.setValue(this.mid,g);h.setValue(this.min,k)}};MOD3.LibraryThree=function(){this.id="Three.js";this.meshClass=MOD3.MeshThree;this.vertexClass=MOD3.VertexThree};MOD3.LibraryThree.prototype=new MOD3.Library3d;MOD3.LibraryThree.prototype.constructor=MOD3.LibraryThree;MOD3.VertexThree=function(){};MOD3.VertexThree.prototype=new MOD3.VertexProxy;
MOD3.VertexThree.prototype.setVertex=function(a){this.vertex=a;this.originalX=a.position.x;this.originalY=a.position.y;this.originalZ=a.position.z};MOD3.VertexThree.prototype.getX=function(){return this.vertex.position.x};MOD3.VertexThree.prototype.getY=function(){return this.vertex.position.y};MOD3.VertexThree.prototype.getZ=function(){return this.vertex.position.z};MOD3.VertexThree.prototype.setX=function(a){this.vertex.position.x=a};
MOD3.VertexThree.prototype.setY=function(a){this.vertex.position.y=a};MOD3.VertexThree.prototype.setZ=function(a){this.vertex.position.z=a};MOD3.MeshThree=function(){};MOD3.MeshThree.prototype=new MOD3.MeshProxy;
MOD3.MeshThree.prototype.setMesh=function(a){MOD3.MeshProxy.prototype.setMesh.call(this,a);for(var a=[],b=this.mesh.geometry.vertices,c=this.mesh.geometry.faces,d=b.length,f=c.length,e=0;e<d;e++){var h=new MOD3.VertexThree;h.setVertex(b[e]);this.vertices.push(h);a[b[e]]=h}for(e=0;e<f;e++)d=new MOD3.FaceProxy,c[e]instanceof THREE.Face3?(d.addVertex(a[b[c[e].a]]),d.addVertex(a[b[c[e].b]]),d.addVertex(a[b[c[e].c]])):c[e]instanceof THREE.Face4&&(d.addVertex(a[b[c[e].a]]),d.addVertex(a[b[c[e].b]]),d.addVertex(a[b[c[e].c]]),
d.addVertex(a[b[c[e].d]])),this.faces.push(d);delete lookup};MOD3.MeshThree.prototype.updateMeshPosition=function(a){this.mesh.position.x+=a.x;this.mesh.position.y+=a.y;this.mesh.position.z+=a.z};
