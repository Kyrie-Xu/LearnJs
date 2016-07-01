;(function(window,undefinded){

    var xQuery = (function () {

        var xQuery = function () {
            //console.log(this);
            return new xQuery.fn.init();
        }

        xQuery.fn = xQuery.prototype = {
            constructor:xQuery,
            init: function () {
                return this;
            }
        }

        xQuery.fn.init.prototype = xQuery.prototype;

        xQuery.extend = function () {
            return 'extend';
        }

    })();


    window.xQuery = window.XY = xQuery;
    console.log(xQuery)

})(window,undefined);