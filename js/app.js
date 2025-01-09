var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    autoplayTimeout:1000,
    Type: Boolean,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
$("#sid-btn-1").hover(
    function() {
        $(".hover_txt_1").text("Hello World !");
        $(".hover_txt_1").css("transition","1s");
    },
    function() {
        $(".hover_txt_1").text("");
    }
);