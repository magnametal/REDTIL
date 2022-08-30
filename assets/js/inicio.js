
        function seleccionar(img){
          var seleccionadas = $("#tematicas").find("img[class='tag1']");
          if(seleccionadas.length==1){
            document.getElementById().removeAttribute("disabled");
          }
          var clase=img.getAttribute("class");
          if(clase=="tag"){
            img.setAttribute("class", "tag1");
          }
          if(clase=="tag1"){
            img.setAttribute("class", "tag");
          }
        }

        function notitas(){
          Swal.fire({
            html: "<iframe src='nota.html' style='border: none; overflow-x: hidden; width: 100%; height: 500px;'></iframe>",
            showConfirmButton: false,
            width: 1000,
            animation: false,
            showCloseButton: true,
            customClass: {
              popup: 'animated zoomIn'
            }
          })
        }

        function personas(){
          Swal.fire({
            html: "<iframe src='personas.html' style='border: none; width: 100%; height: 500px;'></iframe>",
            showConfirmButton: false,
            width: 800,
            animation: false,
            showCloseButton: true,
            customClass: {
              popup: 'animated zoomIn'
            }
          })
        }

        function investigaciones(){
          Swal.fire({
            html: "<iframe src='investigaciones.html' style='border: none; width: 100%; height: 500px;'></iframe>",
            showConfirmButton: false,
            width: 800,
            animation: false,
            showCloseButton: true,
            customClass: {
              popup: 'animated zoomIn'
            }
          })
        }

        function libros(){
          Swal.fire({
            html: "<iframe src='libros.html' style='border: none; width: 100%; height: 500px;'></iframe>",
            showConfirmButton: false,
            width: 800,
            animation: false,
            showCloseButton: true,
            customClass: {
              popup: 'animated zoomIn'
            }
          })
        }

        function seguir(id_user) {
            $.ajax({
                type: "POST",
                url: "../includes/seguir.php",
                data: {id_seguir:id_user},
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json.res == "success") {
                        Swal.fire(
                            '¡Estas siguiendo a este usuario!',
                            'Ahora puedes disfrutar de los contenidos de este usuario en tu perfil.',
                            'success'
                                ).then(function () {
                                      window.location.reload();
                            })
                    }
                }
            }); //end-ajax
        } //end-function

        function out() {
            $.ajax({
                type: "POST",
                url: "../includes/logout.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json.res == "success") {
                        window.location.href = "../index.html";
                    }
                }
            }); //end-ajax
        } //end-function

        function check() {
            $.ajax({
                type: "POST",
                url: "../includes/session.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json.res == "fail") {
                        window.location.href="../index.html";
                    }else{

                        if(json.bienvenida=="F"){
                            window.location.href = "my_profile.html";
                        }else{
                          if(json.t_user=="administrador"){
                            document.getElementById('ad_bot').setAttribute("href", "menu_ad.html");
                            $("#ad_bot_img").css({visibility:"visible",opacity:"1"})
                          }
                              var nombre = json.nombre;
                              var imagen = json.imagen;
                              var enlace = json.url_perfil;
                              $("#avatar").html(nombre);
                              document.getElementById('mi_enlace').setAttribute("href", enlace);
                              document.getElementById('mi_enlace2').setAttribute("href", enlace);
                              document.getElementById('ava_img').setAttribute("src", "../"+imagen);
                              getNotification();

                        }
                        
                    }
                }
            }); //end-ajax
        } //end-function

        function abre() {
            $("#contenido-chat").css({visibility:"visible",opacity:"1"})
            document.getElementById('barra-chat').setAttribute("onclick", "cierra();");
            document.getElementById('barra-chat').setAttribute("class", "addcome");
        } //end-function
        function cierra() {
            $("#contenido-chat").css({visibility:"hidden",opacity:"0"})
            document.getElementById('barra-chat').setAttribute("onclick", "abre();");
            document.getElementById('barra-chat').setAttribute("class", "addcome1");
        } //end-function

        function cerrar_ref(esto, id_noti){
                                    esto.classList.add('fadeInUp');
                                          $.ajax({
                                              type: "POST",
                                              url: "../includes/marcar_noti.php",
                                              data: {id_noti: id_noti},
                                              success: function (data) {
                                                esto.setAttribute("style", "visibility:'hidden'; opacity: 0");
                                              }
                                          }); //end-ajax
        }

        function cerrar(esto, id_noti){
                                    esto.setAttribute("style", "visibility:'hidden'; opacity: 0");
                                          $.ajax({
                                              type: "POST",
                                              url: "../includes/marcar_noti.php",
                                              data: {id_noti: id_noti},
                                              success: function (data) {
                                              }
                                          }); //end-ajax
        }

        function getNotification(){
            $.ajax({
                  type: "POST",
                  url: "../includes/noti_list.php",
                  data: "",
                  success: function (data) {
                      var json = eval("(" + data + ")");
                      var string = '';
                      var vector = new Array();
                      if (json[0].res == "success") {
                        for (var i = 1; i < json.length; i++) {
                            if(json[i].id_t_notify==1 || json[i].id_t_notify==4 || json[i].id_t_notify==5){
                                      string +='<div onclick="cerrar_ref( this,'+json[i].id_notify+');"class="list-group">';          
                                      string +='<a class="list-group-item list-group-item-action list-group-item"><img src="../'+json[i].imagen_min+'"><h5>'+json[i].nombre+' '+json[i].apellido+'</h5>'; 
                                      string +='<div class="notify-body">';
                                      string +='<h6>'+json[i].mensaje+'</h6>'; 
                                      string +='</div>';
                                      string +='<div class="foot">'; 
                                      string +='<p>'+json[i].horafecha+'</p>'; 
                                      string +='</div>'; 
                                      string +='</a>'; 
                                      string +='</div> ';  
                                     $("#list_noti").html(string);
                            }//end-if
                            if(json[i].id_t_notify==2){
                                      string +='<div onclick="cerrar(this,'+json[i].id_notify+');" class="list-group">';          
                                      string +='<a class="list-group-item list-group-item-action list-group-item"><img src="../'+json[0].imagen+'"><h5>'+json[0].mi_nombre+' '+json[0].mi_apellido+'</h5>'; 
                                      string +='<div class="notify-body">';
                                      string +='<h6>'+json[i].mensaje+'</h6>'; 
                                      string +='</div>';
                                      string +='<div class="foot">'; 
                                      string +='<p>'+json[i].horafecha+'</p>'; 
                                      string +='</div>'; 
                                      string +='</a>'; 
                                      string +='</div> ';
                                      $("#list_noti").html(string);
                            }//end-if
                            if(json[i].id_t_notify==3){
                                      string +='<div onclick="cerrar(this,'+json[i].id_notify+');"  class="list-group">';          
                                      string +='<a class="list-group-item list-group-item-action list-group-item"><img src="../'+json[0].imagen+'"><h5>'+json[0].mi_nombre+' '+json[0].mi_apellido+'</h5>'; 
                                      string +='<div class="notify-body">';
                                      string +='<h6>'+json[i].mensaje+'</h6>'; 
                                      string +='</div>';
                                      string +='<div class="foot">'; 
                                      string +='<p>'+json[i].horafecha+'</p>'; 
                                      string +='</div>'; 
                                      string +='</a>'; 
                                      string +='</div> ';
                                      $("#list_noti").html(string); 
                            }//end-if
                        }//end-for
                  }
                }
              }); //end-ajax
        }

        $(document).ready(function ($) {
          check();
        });