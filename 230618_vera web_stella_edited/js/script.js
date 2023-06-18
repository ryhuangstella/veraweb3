// 換圖輪播
$('.news-carousel').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
});

// $(function(){
//     var len = 24; // 超過24個字以"..."取代
//     $(".carousel-wrapper .slide .infos h4").each(function(i){
//         if($(this).text().length>len){
//             $(this).attr("title",$(this).text());
//             var text=$(this).text().substring(0,len-1)+"...";
//             $(this).text(text);
//         }
//     });
// });

// $(function(){
//     var len = 50; // 超過50個字以"..."取代
//     $(".carousel-wrapper .slide .infos .text-wrapper p").each(function(i){
//         if($(this).text().length>len){
//             $(this).attr("title",$(this).text());
//             var text=$(this).text().substring(0,len-1)+"...";
//             $(this).text(text);
//         }
//     });
// });