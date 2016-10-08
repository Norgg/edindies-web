$(function() {
    var $fillParents = $('.fill-parent');
    $(window).on('load resize', function() {
        $fillParents.each(function(idx, fillParent) {
            var $fillParent = $(fillParent);
            if (window.innerWidth >= 600) {
                $fillParent.height($fillParent.parent().height());
            } else {
                $fillParent.height('auto');
            }
        });
    });
});
