 function updateoutput(){
               $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#css-panel").val() + "</style></head><body>" + $("#html-panel").val() + "</body></html>");
               
               document.getElementById("output-panel").contentWindow.eval($("#javascript-panel").val());
               
           }
            
           $(".toggle-button").hover(function(){
               
               $(this).addClass("highlighted-button");
           },
           function(){
               $(this).removeClass("highlighted-button");
           });
           
           $(".toggle-button").click(function(){
               
               $(this).toggleClass("active");
               
               $(this).removeClass("highlighted-button");
               
               var panelid = $(this).attr("id")+"-panel";
               
               $("#"+panelid).toggleClass("hidden"); 
               
               var numactive = 4 - $('.hidden').length;
               
               $(".panel").width(($(window).width()/numactive) -10);
               
               
           });
           
           $(".panel").height($(window).height()-$("#top-bar").height())
           
           $(".panel").width(($(window).width()/2) -10);
           
           updateoutput(); 
           
           $("textarea").on('change keyup paste',function(){
                updateoutput(); 
        
           });
           
           