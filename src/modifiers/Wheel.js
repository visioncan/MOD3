/**
*
* MOD3  Wheel Modifier
*
*
**/
/**
 *  <b>Wheel modifier.</b> Use it with vehicle models for wheels.
 *  <br>
 *  <p>The usual problem with a 3d wheel in a vahicle is that if it is 
 *  supposed to turn (steer) and roll in the same time. So, this code:
 *  <br>
 *  <br><code><pre>
 *  wheel.rotationY = 10; // Steer 10deg to the left
 *  wheel.rotationZ +- 5; // Roll with a speed of 5
 *  </pre></code><br>
 *  This will make the wheel roll incorectly.</p>
 *  
 *  <p>A usual way to solve this problem is to put the wheel in another DisplayObject3D/Mesh, 
 *  turn the parent and roll the child, like that:
 *  <br><code><pre>
 *  steer.rotationY = 10; // Steer 10deg to the left
 *  steer.wheel.rotationZ +- 5; // Roll with a speed of 5
 *  </pre></code><br>
 *  That will make the wheel behave correctly. But it can be uncomfortanble to apply, especially
 *  to imported complex Collada models.</p>
 *  
 *  <p>The Wheel modifier elegantly solves this problem by doind the proper math in order to steer and roll 
 *  a single mesh at the same time. The only thing you need to do is to specify a steer vector and 
 *  roll vector - usually it will be 2 of the cardinal axes. The default value is:
 *  <ul>
 *  <li>steer - along the Y axis / new Vector3(0, 1, 0)</li>
 *  <li>roll - along the Z axis / new Vector3(0, 0, 1)</li>
 *  </ul></p>
 *  
 *  <p>It should work with most car models imported from 3D editors as this is the natural position of a wheel.<br>
 *  <i>Please note, that Papervision primitive cylinder, which may also be used as wheel, will require different axes
 *  (Y for roll and Z or X for steer).</i></p>
 *  
 *  @version 1.0
 *  @author Bartek Drozdz
 *  AS3Mod doc on Wheel.as Modifier
 */
(function(MOD3, undef){
    
    var invPI=MOD3.Constants.invPI, 
        doublePI=MOD3.Constants.doublePI,
        Vector3=MOD3.Vector3, Matrix4=MOD3.Matrix4
    ;
    
    var Wheel = MOD3.Wheel = MOD3.Extends( MOD3.Modifier,
    {
       constructor : function() {
            this.speed = 0;
            this.turn = 0;
            this.roll = 0;
            this.radius = 0;
            this.steerVector = new Vector3([0, 1, 0]);
            this.rollVector = new Vector3([0, 0, 1]);
        },
        
        speed : 0,
        turn : 0,
        roll : 0,
        radius : 0,
        steerVector : null,
        rollVector : null,
        
        setModifiable : function(mod) {
            this.superCall("setModifiable", mod);
            this.radius = 0.5*this.mod.width;
            
            return this;
        },
        
        apply : function() {
            var vs = this.mod.getVertices(), vc = vs.length,
                steerVector = this.steerVector, 
                turn = this.turn, 
                rollVector = this.rollVector, 
                roll = this.roll,
                ms=null, mt=null, rv=null, v, c
            ;
            
            this.roll += this.speed;
            
            if (turn) 
            {
                mt = new Matrix4().rotationMatrixFromVector(steerVector, turn);
                rv = mt.multiplyVector(rollVector.clone());
                ms = new Matrix4().rotationMatrixFromVector(rv, roll);
            } 
            else 
            {
                ms = new Matrix4().rotationMatrixFrom(rollVector, roll);
            }

            // optimize loop using while counting down instead of up
            while (--vc >= 0)
            //for (var i = 0;i < vc; i++) 
            {
                v = vs[vc];
                c = v.getVector();
                
                if (mt)  mt.multiplyVector(c);
                
                v,setVector( ms.multiplyVector(c) );
            }
             
            return this;
       },
        
        getStep : function()  {
            return this.radius * this.speed * invPI;
        },
        
        getPerimeter : function()  {
            return this.radius * doublePI;
        }
    });
    
})(MOD3);