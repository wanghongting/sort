require(['./js/config.js'], function() {
    require(['jquery', 'bscroll'], function($, bscroll) {
        var scroll = null;

        function init() {
            initrender();
        }

        function initrender() {
            $.ajax({
                url: '/users/api/list',
                dataType: 'json',
                success: function(datas) {
                    console.log(datas)
                }
            })
        }

        init()
    })
})