
        function activar() {
                var url = document.URL;
                            if (/asdf65l8kj/.test(url)) {
                                var link = url.split("l8kj");
                                var id_user = link[1];
                                    $.ajax({
                                        type: 'POST',
                                        url: '../includes/activar.php',
                                        data: {id_user : id_user},
                                        success: function(data){
                                                var json = eval("(" + data + ")");
                                                var string = "";
                                                if(json.res=='success'){
                                                    string += "<h3>¡Dirección de correo confirmada!</h3>";
                                                    string += "<p>Ahora debes ingresar al sistema y proceder con tu solicitud.</p>";
                                                    $('#respuesta').html(string);
                                                }else{
                                                    string += "<h3>¡Activación fallida!</h3>";
                                                    string += "<p>El enlace no es valido. Por favor revisa tu correo electrónico.</p>";
                                                    $('#respuesta').html(string);
                                                }

                                                }
                                    });//end-ajax  
                            }
                }
        $(document).ready(function () {
                activar();
            } //end-function
        );