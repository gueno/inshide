/*!
 * insHide jQuery plugin
 * Original author: @guenoz
 */

;(function ( $, window, document, undefined ) {

    var pluginName = 'inshide',
        defaults   = {
            minimum  : 100,
            reset    : false,
            classhin : 'in',
            classhout: 'out',
            classlast: 'lastin'
        };

    $.fn.extend({
         
        inshide: function(options) {
                 
            var options = $.extend(defaults, options),
                  nbIn = nbOut = 0,
                   mini = ( options.minimum / 100 ) || 1,
                   that = $(this),
                      p = that.parent(),
                 height = p.outerHeight(),
                  width = p.outerWidth(),
                      o = p.offset(),
                   left = o.left,
                    top = o.top,
                    ret = [],
                 passed = firstOutHidden = false,
                 lastIn = -1;
            
            if (options.reset) {
                options.reset = false;
                return that.children().removeClass(options.classhin + ' ' + options.classhout + ' ' + options.classlast);
            }
            
            that.children().removeClass(options.classhin + ' ' + options.classhout + ' ' + options.classlast);
 
            this.each(function() {
                        
                that.children().each(function() {
                    
                    var c = $(this);
                    
                    if(this == document.documentElement)
                        return ret.push(this);
                    
                    var offset = c.offset(),
                        ew = c.outerWidth(),
                        eh = c.outerHeight();
                        
                    res = !(
                           ( offset.top  + ( eh * mini ) > top + height )
                        || ( offset.top  +   eh - ( eh * mini )   < top )
                        || ( offset.left + ( ew * mini ) > left + width )
                        || ( offset.left +   ew - ( ew * mini )  < left )
                    );

                    if(res) {
                        c.addClass(options.classhin);
                        lastIn = that.children().index(c);
                        nbIn++;
                        passed = true;
                    }
                    else {
                        c.addClass(options.classhout);
                        nbOut++;
                        if(!firstOutHidden && passed && offset.top > (top + height) && (offset.top  + ( eh * mini )) < (top + height + eh)) {
                            firstOutHidden = true;
                        }
                    }
                });
             
            });
            
            if(firstOutHidden) that.children().eq(lastIn).addClass(options.classlast);
            
            return [nbIn, nbOut, lastIn, firstOutHidden];
            
        }
        
    });
    
})( jQuery, window, document );