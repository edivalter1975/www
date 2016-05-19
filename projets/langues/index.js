(function () {
    var iframe = document.querySelector("iframe"),
        $articles,
        $btn;

var iframeRoot = iframe.contentDocument;
    iframe.onload = function () {
        this.style.height = this.contentDocument.body.scrollHeight + 200 + 'px';

         iframeRoot = iframe.contentDocument;
        $articles = $(iframeRoot.querySelectorAll("article")),
            $btn = $("<button>Basculer affichage</button>");
        $articles.css("position", "relative");
        $btn.css({
            "border-radius": "5px",
            "opacity": "0.5",
            "font-weight": "bold",
            "position": "absolute",
            "right": "10px",
            "top": "10px",
            "width": "6em"
        });
        $btn.hide();
        $btn.hover(function () {
            $(this).css({
                "color": "red",
                "opacity": "1"
            });
        }, function () {
            $(this).animate({
                "opacity": "0.5"
            },"slow",function () {
                $(this).css({"color": "black"});
            });

        });
        $btn.click(function () {
            console.log(this);
            var $foo = $(this).parent().find('p,ol');
            $foo.fadeToggle("slow");
        });
        $articles.prepend($btn);
    };
    window.onresize = function () {
        iframe.style.height = iframe.contentDocument.body.scrollHeight + 200 + 'px';
    };
    $('#btn_iframe').click(function () {
        $("iframe").fadeToggle( "slow", "linear" );
    });


    $('#btn_p').click(function () {
        
        var $p = $(iframeRoot.querySelectorAll("p"));
        $p.slideToggle("slow");
    })
    $('#btn_btn').click(function () {
        $articles.find("button").fadeToggle("slow");
    })
})();