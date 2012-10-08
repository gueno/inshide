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
            classhout: 'out'
        };

    $.fn.extend({
         
        inshide: function(options) {
                 
            var options = $.extend(defaults, options),
                      i = 0;
            
            if (options.reset) {
              options.reset = false;
              return $('*',this).removeClass(options.classhin + ' ' + options.classhout);
            }
 
            this.each(function() {
                   
                var mini = ( options.minimum / 100 ) || 1,
                       that = $(this),
                          p = that.parent(),
                     height = p.outerHeight(),
                      width = p.outerWidth(),
                          o = p.offset(),
                       left = o.left,
                        top = o.top,
                        ret = [];
                        
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
                        c.removeClass(options.classhout).addClass(options.classhin);
                        i++;
                    }
                    else
                        c.removeClass(options.classhin).addClass(options.classhout);
                });
             
            });
            
            return i;
            
        }
        
    });
    
})( jQuery, window, document );