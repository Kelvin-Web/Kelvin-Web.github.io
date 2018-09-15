$(document).ready(function() {
    $("#btn-callback-carousel").on("click", function(){
      $("#callback-modal").modal('show');
    });
    
    $("#btn-callback-phone-icon").on("click", function(){
      $("#callback-modal").modal('show');
      $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-callback-navbar").on("click", function(){
        $("#callback-modal").modal('show');
        $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-callback-footer").on("click", function(){
        $("#callback-modal").modal('show');
        $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-open-franch").on("click", function(){
        $("#callback-modal3").modal('show');
    });

    $("#btn-open-franch2").on("click", function(){
        $("#callback-modal3").modal('show');
    });

    $("#btn-open-franch3").on("click", function(){
        $("#callback-modal3").modal('show');
    });

    $("#btn-open-franch4").on("click", function(){
        $("#callback-modal3").modal('show');
    });

    $("#btn-open-franch5").on("click", function(){
        $("#callback-modal3").modal('show');
    });

    $("#btn-open-franch6").on("click", function(){
        $("#callback-modal3").modal('show');
    });

    $("#btn-open-franch7").on("click", function(){
        $("#callback-modal3").modal('show');
    });

    $("#btn-fin-model").on("click", function(){
        $("#callback-modal4").modal('show');
    });

    $("#btn-fin-model2").on("click", function(){
        $("#callback-modal4").modal('show');
    });

    $("#btn-fin-model3").on("click", function(){
        $("#callback-modal4").modal('show');
    });

    $("#btn-fin-model4").on("click", function(){
        $("#callback-modal4").modal('show');
    });

    $("#btn-callback-carousel-ok").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#callBackMain").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#success-modal-ok").on("click", function(){
      $("#success-modal").modal('hide');
    });

    window.setInterval(function() {
      function getDateNow() {
        var n =  new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        m = m.toString().length < 2 ? '0'+m : m;
        var d = n.getDate();
        d = d.toString().length < 2 ? '0'+d : d;
        var h = n.getHours();
        h = h.toString().length < 2 ? '0'+h : h;
        var min = n.getMinutes();
        min = min.toString().length < 2 ? '0'+min : min;
        $('#inputTime').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime2').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime3').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime4').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
      };
      getDateNow();
    }, 5000);
  });

  $(document.body).on('hide.bs.modal,hidden.bs.modal', function () {
    $('body').css('padding-right','0');
  });