$(document).ready(
    function () {
        $("button").click(
            function () {
                // $(this).hide();
                // $("[type]").hide();
               // $("div[style]").slideDown();//"slow"
                // $(":button").hide();
                $("tr:even").css("background-color", "grey");

            }
        );
        $("#show").click
            (
                function () {
                    $("div[style]").fadeIn(1000);
                }
        );

        $("#tumbler").click(
            function () {
                $("div[style]").fadeToggle(1000);

            }

        );

        $("#slide-up").click(
            function () {
                // $(this).slideUp();
                $("#slide-down").slideToggle();

            }

        );


        /*$("#slide-down").click(
            function () {
                $(this).slideDown();

            }

        );*/

        $("#animate").hover(
            function () {
                // $(this).slideUp();
                $(this).animate({left: '250px', opacity:'0.5', height:'100px',width:'100px' },3000);

            }

        );

        $("#animate").mouseleave(
            function () {
                // $(this).slideUp();
                $(this).animate({ opacity: '1', height: '50px', width: '50px' }, 3000);

            }

        );
        $("#stop").click(
            function () {
                // $(this).slideUp();
                $("#animate").stop();

            }

        );

        $("h2").click(
            function () {
                // $(this).slideUp();
                $("h2+ul").Toggle();

            }

        );
    }
);