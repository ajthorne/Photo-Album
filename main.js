var albumGallery = $('.album-gallery');
var album1 = $('.album1');
var albumOne = $('.beach-gallery');
var album2 = $('.album2');
var albumTwo = $('.books-gallery');
var album3 = $('.album3');
var albumThree = $('.cats-gallery');
var album4 = $('.album4');
var albumFour = $('.music-gallery');
var album5 = $('.album5');
var albumFive = $('.nyc-gallery');
var album6 = $('.album6');
var albumSix = $('.travel-gallery');
var header = $('header');
var albums = $('.album');
var img = $('img');
var onlyPhoto = $('.only-photo');
var menuImg = $('.menu-img');
var main = $('body');

//clicking on album gallery, adds "sidegallery" class to it
//which floats it left and adds different styles
$(document).ready(function() {
    album1.on('click', function(evt) {
        $(albumOne).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumTwo).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumSix).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(main).css({backgroundColor: '#C3EBE3'});
    });

    album2.on('click', function(evt) {
        $(albumTwo).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumOne).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumSix).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(main).css({backgroundColor: '#C3EBE3'});
    });

    album3.on('click', function(evt) {
        $(albumThree).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumTwo).addClass('hidden');
        $(albumOne).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumSix).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(main).css({backgroundColor: '#C3EBE3'});
    });

    album4.on('click', function(evt) {
        $(albumFour).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumTwo).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumOne).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumSix).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(main).css({backgroundColor: '#C3EBE3'});
    });

    album5.on('click', function(evt) {
        $(albumFive).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumTwo).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumOne).addClass('hidden');
        $(albumSix).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(main).css({backgroundColor: '#C3EBE3'});
    });

    album6.on('click', function(evt) {
        $(albumSix).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumTwo).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumOne).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(main).css({backgroundColor: '#C3EBE3'});
    });

    img.on('click', function() {
        $(this).addClass('solo-view');
        $(img).addClass('hidden');
        $(onlyPhoto).removeClass('hidden');
        $(albumGallery).addClass('hidden');
        $(albumGallery).removeClass('gallerySide');
    });
var backButton = $('.back-button');
    backButton.click(function(){
        history.go(-1);
        console.log('hi');
    });
});


//save for adverturer mode --using array of data
// var newPhoto = '<div><a href="#"></a></div>';
// var newAlbum = '<h2>Album #</h2>';
// var albumParent = $('photo-gallery');
