;(function(window,undefinded){

    var xQuery = (function () {

        var xQuery = function ( selector, context, rootjQuery ) {
            //console.log(this);
            return new xQuery.fn.init( selector, context, rootjQuery );
        }

        xQuery.fn = xQuery.prototype = {
            constructor:xQuery,
            init: function ( selector, context, rootjQuery ) {
                if(!selector){
                    return this;
                }
                if ( selector.nodeType ) {
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this;
                }
            }
        }

        xQuery.fn.init.prototype = xQuery.prototype;

        xQuery.extend = xQuery.fn.extend = function () {
            var options, name, src, copy, copyIsArray, clone,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false;

            // Handle a deep copy situation
            if ( typeof target === "boolean" ) {
                deep = target;
                target = arguments[1] || {};
                // skip the boolean and the target
                i = 2;
            }

            // Handle case when target is a string or something (possible in deep copy)
            if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
                target = {};
            }

            // extend jQuery itself if only one argument is passed
            if ( length === i ) {
                target = this;
                --i;
            }

            for ( ; i < length; i++ ) {
                // Only deal with non-null/undefined values
                if ( (options = arguments[ i ]) != null ) {
                    // Extend the base object
                    for ( name in options ) {
                        src = target[ name ];
                        copy = options[ name ];

                        // Prevent never-ending loop
                        if ( target === copy ) {
                            continue;
                        }

                        // Recurse if we're merging plain objects or arrays
                        if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                            if ( copyIsArray ) {
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : [];

                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {};
                            }

                            // Never move original objects, clone them
                            target[ name ] = jQuery.extend( deep, clone, copy );

                            // Don't bring in undefined values
                        } else if ( copy !== undefined ) {
                            target[ name ] = copy;
                        }
                    }
                }
            }

            // Return the modified object
            return target;
        }

        xQuery.extend({
            clone: function (deep,obj) {
                var newobj = obj.constructor === 'Array' ? []:{};
                if(!deep){
                    //Ç³¿ËÂ¡
                    newobj = obj;
                }else{
                    //Éî¿ËÂ¡
                    if(typeof obj !== 'object'){
                        return;
                    }else{
                        for(var i in obj){
                            newobj[i] = typeof obj[i] === 'object'?
                                xQuery.clone(deep,obj[i]):obj[i];
                        }
                    }
                }
                return newobj;
            },
            isWindow:function(obj){
                return obj && typeof obj === 'object' && 'setInterval' in obj;
            }
        });

        return xQuery;


    })();
    window.xQuery = window.XY = xQuery;

})(window);