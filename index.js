$(".hideData").hide();

$(".optionButton").click(function() {
    $(".hideData").slideDown();
})
$(".optionButtonHide").click(function() {
    $(".hideData").slideUp();
})



if ($(window).width() <= 375) {
    $(".show").css("width", "300px");
    $(".image1").attr("src", "images/mobile/image-deep-earth.jpg");
    $(".image2").attr("src", "images/mobile/image-night-arcade.jpg");
    $(".image3").attr("src", "images/mobile/image-soccer-team.jpg ");
    $(".image4").attr("src", "images/mobile/image-grid.jpg");
    $(".image5").attr("src", "images/mobile/image-from-above.jpg");
    $(".image6").attr("src", "images/mobile/image-pocket-borealis.jpg ");
    $(".image7").attr("src", "images/mobile/image-curiosity.jpg ");
    $(".image8").attr("src", "images/mobile/image-fisheye.jpg ");

} else {
    console.log("display < 375px")
}