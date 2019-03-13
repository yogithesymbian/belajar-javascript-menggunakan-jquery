$(document).ready(function () 
{ 
    // $("p") "this tag element
    // $("#p") "this id="p"
    // $(".p") "this class="p" 


    $("p.togleview").click(function () 
    { 
        $(this).hide();
    });

    $(".btn-view-p").click(function()
    {
        $("p").hide(1000);
    });
    $(".btn-view-p1").click(function (e) { 
        e.preventDefault();
        $("p").show(100);
    });

    $("button.togle").click(function (e) { 
        e.preventDefault();
        $("nav").toggle();
    });
    $("tr:even").css("background-color", "#102027"); //even or odd



    // SELECTOR GABUNGAN
    // ______________________________________________________________

    $("fieldset").css("width","200px");
    
    // var name = $(".arif #name").text();
    // var umur = $(".arif #umur").text();

    // $('body').append('<div>$("#name").text(): ' +$("#name").text() + '</div>');
    // $('body').append('<div>$(".arif #name").text(): ' +name+ '</div>');
    // $('body').append('<div>$(".arif #umur").text(): ' +umur+ '</div>');

    // END OF SELECTOR GABUNGAN




    // alert($("p:first").text());
    // alert($("p:last").text());    



    // Filter FIRST-CHILD
    // ______________________________________

    $("div span:first-child")
    .css("text-decoration", "underline")
    .hover(function () 
     { 
        $(this).addClass("hijau");
     }, function () 
     { 
         $(this).removeClass("hijau");
     });

    //  ________LAST-CHILD____________________

    $("div span:last-child")
    .css("text-decoration", "underline")
    .hover(function ()
    {
        $(this).addClass("hijau");
    }, function () 
    { 
        $(this).removeClass("hijau")
    })

    // __________NTH-CHILD_____________________

    $("ul li:nth-child(2)").append("<span> - Terplih </span>");

    // _________ONLY-CHILD_____________________

    $("div button:only-child").text("Sendiri")
    .css("border", "2px solid #102027");

    // ___________FILTER CONTAIN ________

    $("button:contains('Satu')").css("text-decoration", "underline");

    // ___________FILTER EMPTY __________

    $("td:empty").text("Kosong!")
    .css("background-color", "gold")
    .css("color", "black");

    // __________FILTER HAS_______________

    $("div:has(p.has)").addClass("line-side");

    // __________FILTER PARENT____________

    $("p.filter:parent").addClass("choose");

    // __________FILTER CHECKED ____________

    $(":button").click(function (e) { 
        e.preventDefault();
        var pilih = new Array();
        $(":checked").each(function(){
            pilih.push($(this).val());
        });
        $("div.hasilnya").text(pilih.join(','));
    });

    //  END OF FILTER CHILD


    
    //  EVENT HANDLER 
    // _________________________________________

     $("#mouseEnter").mouseenter(function()
     {
         alert("You entered P1");
     });

     $("#eventHandler").on({
         mouseenter: function () { 
             $(this).css("background-color", "black");
         },
         mouseleave: function () { 
             $(this).css("background-color", "darkgreen");
         },
         click: function () { 
             $(this).css("background-color", "yellow");
         }
    //  }, function () {
         
     });
    //  END OF EVENT HANDLER


    // Jquery EFFECT
    // __________________________________________________

    $("button.fadeOut").click(function (e) { 
        e.preventDefault();
        $("#fade1").fadeOut();
        $("#fade2").fadeOut("slow");
        $("#fade3").fadeOut(1500);
    });
    $("button.fadeIn").click(function (e) { 
        e.preventDefault();
        $(this).css("display", "show");
        $("#fade1").fadeIn();
        $("#fade2").fadeIn("slow");
        $("#fade3").fadeIn(3000);
    });
    $("button.fadeToggle").click(function (e) { 
        e.preventDefault();
        $("#fade1").fadeToggle();
        $("#fade2").fadeToggle("slow");
        $("#fade3").fadeToggle(1500);
        $("#fade1").animate({
            left: '500px',
            height: '300px'
         });
         $("fade1").hover(function () {
                 // over
                 $(this).addClass("warna");
             }, function () {
                 // out
                 $(this).addClass("warna1");
             }
         );
         $("#fade2").animate({
            left: '500px',
            width: '200px',
            height: '100px'
         });
         $("#fade3").animate({
            left: '500px'
         });
    });

    $("#jqSlide").click(function (e) { 
        e.preventDefault();
        $("#panel").slideToggle("fast", function () {
            // code here
        });
    });

    // END OF SLIDE EFFECT JQUERY

    // DOM (Doc Obj Model)
    // __________________________________________

    var html = $("div.forDomFirst:first").html();
    $("div.forDomLast").text(html);

    // use .text for text and html for sytnx 

    var nilai = $("input.dom").val();
    $("#hasil").text(nilai);

    $("button#bgchange").click(function (e) { 
        e.preventDefault();
        $("body").toggleClass("bgnya");
    });

    $("button.getform").click(function (e) { 
        e.preventDefault();
        var data = 
        {
            nama:$("input.in1:first").val(), 
            umur:$("input.in2:last").val()
        };
        var fungsi = function (respon) 
        {
            var ket = "Nama : " +data.nama + "<br>" + "Umur : " +data.umur;
            $("#hasilGet").html(ket+"<br/>Kategori : "+respon);
        }
        $.get("../php/process.php", data, fungsi, "text");
    });
    $("#hasilGet").slideDown();


});