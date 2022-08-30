function act(id_user) {
        var clave = $("#clave").val(); 
        var clave1 = $("#clave1").val();
        var regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;                
        if (clave==clave1){
            if (regex.test(clave)) {
                    $.ajax({
                            type: "POST",
                            url: "../includes/cam_clave.php",
                            data: {
                                id_user : id_user,
                                clave : clave
                            },
                            success: function (data) {
                                var json = eval("(" + data + ")");
                                if (json.res == "success") {
                                    Swal.fire(
                                      '¡Éxito!',
                                      'Tu clave ha sido actualizada exitosamente.',
                                      'success'
                                    ).then(function () {
                                      window.location.href="../index.html";
                                    })
                                } else {
                                   Swal.fire(
                                      '¡Error!',
                                      'Error en el sistema',
                                      'error'
                                    )
                                    window.location.href="../index.html";
                                }
                            }
                        }); //end-ajax 
                        }else{
                            Swal.fire(
                                      '¡Error!',
                                      'La clave no cumple con las condiciones. Por favor verifica.',
                                      'error'
                                )
                        }   
       } else{
        Swal.fire(
            '¡Error!',
            'Las Contraseñas no coinciden. Por favor verifique.',
            'error'
                 )
       }
    }

                function cambio_c1() {
                    document.getElementById("clave").addEventListener('input', function (evt) {
                        const campo = evt.target,
                            regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
                        if (regex.test(campo.value)) {
                            document.getElementById("clave").style.border = '2px solid green';
                        } else {
                            document.getElementById("clave").style.border = '2px solid red';
                        }
                    });
                }

            function cambio_c2() {
                    document.getElementById("clave1").addEventListener('input', function (evt) {
                        const campo = evt.target,
                            regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
                        if ($("#clave").val() == $("#clave1").val()) {
                            document.getElementById("clave1").style.border = '2px solid green';
                        } else {
                            document.getElementById("clave1").style.border = '2px solid red';
                        }
                    });
                }

function verificar (id){
    var respuesta = $("#res").val();
    $.ajax({
            type: "POST",
            url: "../includes/verificar_prese.php",
            data: {
                respuesta: respuesta,
                id_user : id
            },
            success: function (data) {
                var json = eval("(" + data + ")");
                if(json.res=="success"){
                        var string ="<div class='form-group'><h4>Nueva Contraseña</h4><input type='password' onKeyPress='cambio_c1()' class='form-control' id='clave'>";
                        string +="</div><div class='form-group'><h4>Repetir Contraseña</h4><input type='password' onKeyPress='cambio_c2()' class='form-control' id='clave1' name='clave1'></div>";
                        string +="<p>Debe contener números, minúsculas y mayúsculas.</p>";
                        string +="<div class='form-group'><button type='submit' class='btn boton1' onclick='act(\"" + json.id_user + "\")'>Cambiar Clave</button></div>";
                        string +='<a href="../index.html" type="submit" class="btn boton">Volver al inicio</a>';
                        $("#form").html(string);
                }else{
                    Swal.fire(
                                      '¡Error!',
                                      'La respuesta secreta no es valida o no coincide con su registro. Por favor verifique.',
                                      'error'
                                )
                }
            }
        }); //end-ajax 
}

$(function () {
    $("#btn_email").click(function () {
        var email = $("#email").val();
        $.ajax({
            type: "POST",
            url: "../includes/recuperacion1.php",
            data: {
                email: email
            },
            success: function (data) {
                var json = eval("(" + data + ")");
                if(json.res=="success") {
                  //alert("Se ha enviado un enlace a tu correo, por favor verifica tu buzón de entrada o tu bandeja de spam"); 
                  
                  var string = "<h4>Mi pregunta secreta</h4>";
                  string += "<p>"+ json.presecret +"</p>";
                  string += "<input type='text' name='res' id='res' class='form-control' placeholder='Ingresa tu respuesta secreta'>";
                  string += "<button type='submit' class='btn boton1' onclick='verificar ("+ json.id_user +");'>Enviar</button>";
                  string +='<a href="../index.html" type="submit" class="btn boton">Volver al inicio</a>';
                  $("#form").html(string);
                } else{
                    Swal.fire(
                                      '¡Error!',
                                      'Correo no registrado, por favor verifique.',
                                      'error'
                                )
                }
                
            }
        }); //end-ajax 
    }); //end-accion-btn
}); //end-function