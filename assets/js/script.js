$(document).ready(function () {
    $(".user-conversition__chat-wrapper, .user-list__wrapper").niceScroll({
        cursorcolor:"#c5d2d4",
        cursorwidth:"8px",
        background:"#ededed",
        cursorborder:"0px solid c5d2d4",
        cursorborderradius:3,
        autohidemode:'none'
      });

    /////// collapsebtn responsive layout  /////// 

    $('#contactListCollapse, #collapseBtn,  #contactListClose ').on('click', function () {

        $('#contactList, #content').toggleClass('active');
        $("overlay").toggleClass('overlay-active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');

    });

    //////// chat action active ////////

    // set the default active chat//

    $('.user-conversition__chat-box[data-chat=person1]').addClass('active-chat');
    $('.user-list__msg[data-chat=person1]').addClass('active');

    // append the name of the first chat //

    var activeName = $('.user-list__msg[data-chat=person1]').children().children().children(".msg-title").html();
    $(".user-conversition__actionBar .name").html(activeName);
    console.log(activeName);
    

    //  navigation between contact chat//
    $('.user-list .user-list__msg[data-chat]').on("click", function () {
        if (window.matchMedia('(max-width: 1000px)').matches) {
            $('#contactList, #content').toggleClass('active');
            $("overlay").toggleClass('overlay-active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        }
        $('.user-conversition__chat-box[data-chat]').removeClass("active-chat");
        $('.user-list__msg[data-chat]').removeClass("active");

        var activeChat = $(this).attr("data-chat");
        var name = $(this).children().children().children(".msg-title").html();
        //// top section in the chat window //
        $(".user-conversition__actionBar .name").html(name);

        var activeperson = $(this, '.user-list__msg[data-chat]').addClass("active");
        $('.user-conversition__chat-box[data-chat=' + activeChat + ']').addClass('active-chat');

    })

    //  typing and append massege on click//

    //////// append msg  /////// 

    $('#btn-chat').on("click", function (time) {

        if ($('#btn-input').val().trim() != '') {
            var message = $('#btn-input').val();
            $('<div class="bubble me"> <span class="text">' + message + '</span> <Span class="time">12.36 PM</Span></div>').appendTo('.user-conversition__chat-box[data-chat].active-chat');
            $(".active .preview").html(message);
            $('#btn-input').val("");
            $('.user-list__msg[data-chat].active').prependTo($('.user-list__msg[data-chat]').parent());
            $(".user-conversition__chat-wrapper").animate({
                scrollTop: $(".user-conversition__chat-wrapper")[0].scrollHeight
            }, 1000);
        }

    })

    ///// enter btn append chat  /////// 
    $("#btn-input").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#btn-chat").click();
        }
    });

    var object = {};
//////fix resize issue////
$(window).on('resize', function(){
    var win = $(this);
    if (win.width() > 992 ) {     
    location.reload(); 
    }

});



});