/**
*
* MOD3  Noise Modifier
*
*
**/
(function(MOD3, undef){
    
    var NONE=MOD3.ModConstant.NONE,
        X=MOD3.ModConstant.X,
        Y=MOD3.ModConstant.Y,
        Z=MOD3.ModConstant.Z,
        A=MOD3.VecArray,
        Rand=Math.random
    ;
    
    var Noise = MOD3.Noise = MOD3.Extends ( MOD3.Modifier,
    {
        constructor : function(f) {
            this.axc = NONE;
            this.start = 0;
            this.end = 0; //1;

            this.force = (f!==undef) ? f : 0;
        },
        
        force : 0,
        axc : NONE,
        start : 0,
        end : 1,
        
        constraintAxes : function(c) {
            this.axc = c;
            return this;
        },
        
        setFalloff : function(start, end) {
            this.start = (start!==undef) ? start : 0;
            this.end = (end!==undef) ? end : 1;
            
            return this;
        },
        
        apply : function() {
            var mod = this.mod, axc = this.axc, start = this.start, end = this.end, 
                vs = mod.getVertices(), vc = vs.length, force = this.force, halfforce = 0.5*force;
            var v, r, p,
                rp, xyz;

            // optimize loop using while counting down instead of up
            while (--vc >= 0)
            //for (var i = 0; i < vc; i++) 
            {
                v = vs[vc];
                r = (Rand() * force) - (halfforce);

                p = v.getRatio(mod.maxAxis);
                if (start < end) 
                {
                    if (p < start) p = 0;
                    else if (p > end) p = 1;
                } 
                else if (start > end) 
                {
                    p = 1 - p;
                    if (p > start) p = 0;
                    else if (p < end) p = 1;
                } 
                else 
                {
                    p = 1;
                }

                rp = r * p;
                xyz = v.getXYZ();
                v.setXYZ( [ 
                    xyz[0] + (( !(axc & X) ) ? rp : 0), 
                    xyz[1] + (( !(axc & Y) ) ? rp : 0), 
                    xyz[2] + (( !(axc & Z) ) ? rp : 0) 
                ] );
            }
            
            return this;
        }
    });
    
})(MOD3);