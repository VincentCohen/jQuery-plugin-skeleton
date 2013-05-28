;(function($, window, document, undefined){
    var defaults = {
        label: 'yeahhhhh'
    };

    var optionss = {
        "init": function (options) {
            options = $.extend({}, defaults, options);
            // Do whatever
            console.log('init');
        },
        "bar": function (options) {
            // Do whatever
            console.log('boem!');
        }
    };

    $.fn.skeleton = function(options) { 
        var args = arguments;
        var argss = Array.prototype.slice.call(args, 1);

        return this.each(function() {
            var $this = $(this);  // Might make sense to ignore this and just pass `this` to the following things
            if (optionss[options]) {
                optionss[options].apply($this, argss);
            }
            else if (typeof options === "object" || !options) {
                optionss.init.apply($this, args);
            }
            else {
                $.error("options " + options + " does not exist on jQuery.pollServer");
            }
        });
    };
})(jQuery, window, document);
