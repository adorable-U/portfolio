$(function() {
    $(".gnb li a").on("click", function(e) {
        let idx = $(this).parents().index();

        e.preventDefault();
        $(this).parents("li").addClass("active");
        $(this).parents().siblings().removeClass("active");
        $(".tab-contents").eq(idx).addClass("active").siblings().removeClass("active");

    })
})
