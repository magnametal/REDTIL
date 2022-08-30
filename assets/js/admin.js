
function comunidad_ubv2(valor){
var string = '';
if(valor=="S"){
            $("#ubv").val("S");
            string += '    <input type="radio" class="grado_proy" name="grado_proy" value="L">';
            string += '    Licenciatura';
            string += '    <input type="radio" class="grado_proy" name="grado_proy" value="T" checked>';
            string += '    TSU';
            string += '<select name="area_app" id="area_app" class="form-control"><option value="Tecnologías de Internet">';
            string += 'Tecnologías de Internet';
            string += '</option>';
            string += '<option value="Tecnologías de Software">';
            string += 'Tecnologías de Software';
            string += '</option>';
            string += '<option value="Sistemas de Arquitectura y Redes">';
            string += 'Sistemas de Arquitectura y Redes';
            string += '</option>';
            string += '<option value="Organizaciones medidas por la Tecnología">';
            string += 'Organizaciones medidas por la Tecnología';
            string += '</option>';
            string += '<option value="Tecnologías Generales">';
            string += 'Tecnologías Generales';
            string += '</option>';
            string += '</select>';
            string += '<input type="text" class="form-control" id="ano_semestre" name="ano_semestre" placeholder="Año-Semestre">';
            string += 'Fecha de Presentación';
            string += '<input size="16" type="date" class="form-control" id="datetime" name="datetime">';
            string += '<h3>Datos de la Comunidad</h3>';
            string += '<label for="municipio">Dirección *</label><br>';
            string += '<select onchange="cabestado();" name="estado" id="estado" class="form-control"  data-toggle="tooltip" data-placement="right" title="Por favor selecciona un estado">';
            string += '                                  <option value="">Estado</option>';
            string += '                                  <option value="AMAZONAS">AMAZONAS</option>';
            string += '                                  <option value="ANZOATEGUI">ANZOATEGUI</option>';
            string += '                                  <option value="APURE">APURE</option>';
            string += '                                  <option value="ARAGUA">ARAGUA</option>';
            string += '                                  <option value="BARINAS">BARINAS</option>';
            string += '                                  <option value="BOLIVAR">BOLIVAR</option>';
            string += '                                  <option value="CARABOBO">CARABOBO</option>';
            string += '                                  <option value="COJEDES">COJEDES</option>';
            string += '                                  <option value="DELTA AMACURO">DELTA AMACURO</option>';
            string += '                                  <option value="DISTRITO CAPITAL">DISTRITO CAPITAL</option>';
            string += '                                  <option value="FALCON">FALCON</option>';
            string += '                                  <option value="GUARICO">GUARICO</option>';
            string += '                                  <option value="LARA">LARA</option>';
            string += '                                  <option value="MERIDA">MERIDA</option>';
            string += '                                  <option value="MIRANDA">MIRANDA</option>';
            string += '                                  <option value="MONAGAS">MONAGAS</option>';
            string += '                                  <option value="NUEVA ESPARTA">NUEVA ESPARTA</option>';
            string += '                                  <option value="PORTUGUESA">PORTUGUESA</option>';
            string += '                                  <option value="SUCRE">SUCRE</option>';
            string += '                                  <option value="TACHIRA">TACHIRA</option>';
            string += '                               <option value="TRUJILLO">TRUJILLO</option>';
            string += '                                  <option value="VARGAS">VARGAS</option>';
            string += '                                 <option value="YARACUY">YARACUY</option>';
            string += '                                  <option value="ZULIA">ZULIA</option>';
            string += '                              </select>';
            string += '                            <select name="municipio" id="municipio" class="form-control" data-toggle="tooltip" data-placement="right" title="Por favor selecciona un municipio">';
            string += '                                <option value="">Municipio</option>';
            string += '                            </select>';
            string += '                    <input type="text" name="ciudad" id="ciudad" class="form-control" maxlength="100" placeholder="Ciudad, Zona o Poblado" data-toggle="tooltip" data-placement="right" title="Por favor introduzca la ciudad, zona o poblado" autocomplete="off">';
}else{
            $("#ubv").val("N");
            string += '  ¿Publicado?';
            string += '  <label>';
            string += '    <input type="radio" class="publicado" name="publicado" value="S" checked>';
            string += '    Sí';
            string += '  </label>';
            string += '</div>';
            string += '  <label>';
            string += '    <input type="radio" class="publicado" name="publicado" value="N">';
            string += '    No';
            string += '  </label><br>';
            string += '<label for="tipo_inv">Tipo de Investigación';
            string += '</label><select name="tipo_inv" id="tipo_inv" class="form-control"><option value="Artículo Arbitrado">';
            string += 'Artículo Arbitrado';
            string += '</option>';
            string += '<option value="Revista Indexada">';
            string += 'Revista Indexada';
            string += '</option>';
            string += '<option value="Tesis">';
            string += 'Tesis';
            string += '</option>';
            string += '<option value="Doctorado">';
            string += 'Doctorado';
            string += '</option>';
            string += '<option value="Trabajo de Ascenso">';
            string += 'Trabajo de Ascenso';
            string += '</option>';
            string += '<option value="Especializacion">';
            string += 'Especialización';
            string += '</option>';
            string += '<option value="Otros">';
            string += 'Otros';
            string += '</option>';
            string += '</select>';
}

 $("#contenido2").html(string);
}

function cedula_esp(evt) {
    if (window.event) { //asignamos el valor de la tecla a keynum
        keynum = evt.keyCode; //IE
    } else {
        keynum = evt.which; //FF
    }
    var bandera = "letra";
    if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6) {
        bandera = "numero";
    }
    var flag1 = true;
    if ($("#cedula").val().length == 0 && flag1) {
        if (keynum != 118 && keynum != 101 && keynum != 112) {
            $("#cedula").val("V-");
            flag1 = false;
            if (bandera == "numero") {
                return true;
            } else {
                return false;
            }
        } else {
            if (keynum == 101) {
                $("#cedula").val("E-");
                flag1 = false;
                return false;
            }
            if (keynum == 112) {
                $("#cedula").val("P-");
                flag1 = false;
                return false;
            }
            if (keynum == 118) {
                $("#cedula").val("V-");
                flag1 = false;
                return false;
            }
        }
    } else {
        if (bandera == "numero") {
            return true;
        } else {
            return false;
        }
    }
}

            function reset_img(id){
                $(".loader-page").css({visibility:"visible",opacity:"1"})
                $.ajax({
                    type: "POST",
                    url: "../includes/reset_img.php",
                    data: {
                        id_user: id
                    },
                    success: function (data) {
                        var json = eval("(" + data + ")");
                        $(".loader-page").css({visibility:"hidden",opacity:"0"})
                        if (json.res == "success") {
                            Swal.fire(
                            '¡Éxito!',
                            'Se ha reestablecido la imagen satisfactoriamente.',
                            'success'
                            ).then(function(){
                                mod_user(id);
                            })
                        } else {
                            Swal.fire(
                            '¡Oops!',
                            'Ha ocurrido un error durante la actualización de imagen.',
                            'error'
                            )

                        }
                    }
                }); //end-ajax

            }

        function cabestado() {
              $("#municipio").html("");
              var state = $("#estado").val();
              municipios(state);
       } //end-function

        function cabestado2(estado) {
              var state = estado;
              municipios(state);
       } //end-function

          function mod_user(id){

            $(".loader-page").css({visibility:"visible",opacity:"1"})
            var string = '';
            string += '<div class="ad_min">'; 
            string += '<h3>Imagen de perfil</h3>';  
            string += '<br>';
            string += '<center><img src="../assets/img/imgplus.png" class="plus" id="imagen" alt=""></center>';
            string += '<button class="btn boton" onclick="reset_img('+ id +');">Reestablecer</button>';
            string += '<br>';
            string += '<form autocomplete="off" id="form_reg" method="POST">';
            string += '<input type="hidden" class="form-control" id="id_user" name="id_user">';
            string += '<input type="hidden" class="form-control" id="correo_hidden" name="correo_hidden">';
            string += '<input type="hidden" class="form-control" id="cedula_hidden" name="cedula_hidden">';
            string += '<label for="cedula">Cédula *</label>';
            string += '<input onKeyPress="return cedula_esp(event);" autocomplete="off" type="text" id="cedula" name="cedula" required class="form-control" placeholder="Cédula"> ';
            string += '<label for="nombre">Nombres *</label>';
            string += '<input type="text" class="form-control" autocomplete="off" id="nombre" name="nombre" required placeholder="Nombres"> ';
            string += '<label for="apellido">Apellidos *</label>';
            string += '<input type="text" class="form-control" autocomplete="off" id="apellido" name="apellido" required placeholder="Apellidos"> ';
            string += '<label for="correo_reg">Correo *</label>';
            string += '<input type="text" class="form-control" autocomplete="off" id="correo_reg" name="correo_reg" required placeholder="Correo Electrónico">';
            string += '<label for="clave_reg">Clave</label>';
            string += '<input type="hidden" class="form-control" id="id_comunidad" name="id_comunidad"> ';
            string += '<label for="municipio">Dirección *</label><br>';
            string += '<select onchange="cabestado();" name="estado" id="estado" class="form-control"  data-toggle="tooltip" data-placement="right" title="Por favor selecciona un estado">';
            string += '                                  <option value="">Estado</option>';
            string += '                                  <option value="AMAZONAS">AMAZONAS</option>';
            string += '                                  <option value="ANZOATEGUI">ANZOATEGUI</option>';
            string += '                                  <option value="APURE">APURE</option>';
            string += '                                  <option value="ARAGUA">ARAGUA</option>';
            string += '                                  <option value="BARINAS">BARINAS</option>';
            string += '                                  <option value="BOLIVAR">BOLIVAR</option>';
            string += '                                  <option value="CARABOBO">CARABOBO</option>';
            string += '                                  <option value="COJEDES">COJEDES</option>';
            string += '                                  <option value="DELTA AMACURO">DELTA AMACURO</option>';
            string += '                                  <option value="DISTRITO CAPITAL">DISTRITO CAPITAL</option>';
            string += '                                  <option value="FALCON">FALCON</option>';
            string += '                                  <option value="GUARICO">GUARICO</option>';
            string += '                                  <option value="LARA">LARA</option>';
            string += '                                  <option value="MERIDA">MERIDA</option>';
            string += '                                  <option value="MIRANDA">MIRANDA</option>';
            string += '                                  <option value="MONAGAS">MONAGAS</option>';
            string += '                                  <option value="NUEVA ESPARTA">NUEVA ESPARTA</option>';
            string += '                                  <option value="PORTUGUESA">PORTUGUESA</option>';
            string += '                                  <option value="SUCRE">SUCRE</option>';
            string += '                                  <option value="TACHIRA">TACHIRA</option>';
            string += '                               <option value="TRUJILLO">TRUJILLO</option>';
            string += '                                  <option value="VARGAS">VARGAS</option>';
            string += '                                 <option value="YARACUY">YARACUY</option>';
            string += '                                  <option value="ZULIA">ZULIA</option>';
            string += '                              </select>';
            string += '                            <select name="municipio" id="municipio" class="form-control" data-toggle="tooltip" data-placement="right" title="Por favor selecciona un municipio">';
            string += '                                <option value="">Municipio</option>';
            string += '                            </select>';
            string += '                    <input type="text" name="ciudad" id="ciudad" class="form-control" maxlength="100" placeholder="Ciudad, Zona o Poblado" data-toggle="tooltip" data-placement="right" title="Por favor introduzca la ciudad, zona o poblado" autocomplete="off">';
            string += '<label for="">(*) Campos requeridos </label>';
            string += '<button type="submit" class="btn boton">Modificar</button>';
            string += '</form>';
              string += '</div>';

            $("#contenido").html(string);

    $("input[name='correo_reg']").on("change", function () {
        setTimeout(function(){

          var correo = document.getElementById("correo_reg").value;
                $.ajax({
                    type: "POST",
                    url: "../includes/verify.php",
                    data: {
                        correo: correo
                    },
                    success: function (data) {
                        var json = eval("(" + data + ")");
                        if (json.res == "success") {
                            document.getElementById("correo_reg").style.border = '2px solid red';
                            document.getElementById("correo_reg").focus();
                        } else {
                            if (!(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(correo))) {
                                document.getElementById("correo_reg").style.border = '0.5px solid red';
                                document.getElementById("correo_reg").focus();
                            } else {
                                 document.getElementById("correo_reg").style.border = '0.5px solid green';
                            }

                        }
                    }
                }); //end-ajax
        }, 1000);
    }); //end-accion-btn
    $("input[name='cedula']").on("change", function () {
        setTimeout(function(){
          var cedula = document.getElementById("cedula").value;
                if (cedula == "") {
                    document.getElementById("cedula").style.border = '2px solid red';
                } else {
                    $.ajax({
                        type: "POST",
                        url: "../includes/verify_c.php",
                        data: {
                            cedula: cedula
                        },
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            if (json.res == "success") {
                                document.getElementById("cedula").style.border = '0.5px solid red';
                                document.getElementById("cedula").removeAttribute("cedula"); 
                                document.getElementById("cedula").focus();
                            } else {
                                document.getElementById("cedula").style.border = '0.5px solid green';
                                document.getElementById("cedula").removeAttribute("cedula"); 
                            }
                        }
                    }); //end-ajax
                } //end-if
        }, 1000);
    }); //end-accion-btn

                                            $.ajax({
                                                type: "POST",
                                                url: "../includes/ver_user.php",
                                                data: {id_user : id},
                                                success: function (data) {
                                                    var json = eval("(" + data + ")");
                                                    $(".loader-page").css({visibility:"hidden",opacity:"0"})
                                                    if(json.res=="success"){
                                                    document.getElementById('imagen').setAttribute("src", "../"+json.imagen);
                            $("#id_user").val(id);
                            $("#id_user2").val(id);
                            $("#correo_hidden").val(json.correo);
                            $("#id_comunidad").val(json.id_comunidad);
                            $("#correo_reg").val(json.correo);
                            $("#cedula").val(json.cedula);
                            $("#cedula_hidden").val(json.cedula);
                            $("#t_user").val(json.t_user);
                            $("#nombre").val(json.nombre);
                            $("#apellido").val(json.apellido);
                            $("#estado").val(json.estado);
                            cabestado2(json.estado);
                            $("#municipio").val(json.municipio);
                            $("#ciudad").val(json.ciudad);


jQuery.validator.addMethod("especialChars",
               function(value, element) {
                       return /^[A-Za-z\d=ñ#$%@_ -]+$/.test(value);
               },
       "No pueden haber caracteres especiales."
    );

$("#form_reg").submit(function(e){ e.preventDefault(); }).validate({
      submitHandler: function(form) {
      $(".loader-page").css({visibility:"visible",opacity:"1"})
      if($("#cedula").val() == $("#cedula_hidden").val() && $("#correo_reg").val() == $("#correo_hidden").val()){
                 $.ajax({
                  type: "POST",
                  url: "../includes/act_reg.php",
                  data: $("#form_reg").serialize(),
                  success: function (data) {
                      var json = eval("(" + data + ")");
                      if(json.res=="success"){
                        $(".loader-page").css({visibility:"hidden",opacity:"0"})
                        Swal.fire(
                            '¡Actualización Exitosa!',
                            'Se actualizaron los datos del usuario: '+ id +' exitosamente.',
                            'success'
                        ).then(function () {
                            list();
                        })
                
                      }
                      if(json.res=="fail"){
                        $(".loader-page").css({visibility:"hidden",opacity:"0"})
                        Swal.fire(
                            '¡Error!',
                            'Ha ocurrido un error durante la actualización.',
                            'error'
                        )}
                
                  }
              }); //end-ajax
      }else{
                  var cedula = $("#cedula").val();
                    $.ajax({
                        type: "POST",
                        url: "../includes/verify_c.php",
                        data: {
                            cedula: cedula
                        },
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            if (json.res == "fail" || cedula == $("#cedula_hidden").val()) {
                                var correo = $("#correo_reg").val();
                                $.ajax({
                                    type: "POST",
                                    url: "../includes/verify.php",
                                    data: {
                                        correo: correo
                                    },
                                    success: function (data) {
                                        var json = eval("(" + data + ")");
                                        if (json.res == "fail" || correo == $("#correo_hidden").val()) {
                                            $.ajax({
                                                type: "POST",
                                                url: "../includes/act_reg.php",
                                                data: $("#form_reg").serialize(),
                                                success: function (data) {
                                                    var json = eval("(" + data + ")");
                                                    if(json.res=="success"){
                                                      $(".loader-page").css({visibility:"hidden",opacity:"0"})
                                                      Swal.fire(
                                                          '¡Actualización Exitosa!',
                                                          'Se actualizaron los datos del usuario: '+ id +' exitosamente.',
                                                          'success'
                                                      ).then(function () {
                                                          list();
                                                      })
                                              
                                                    }
                                                    if(json.res=="fail"){
                                                      $(".loader-page").css({visibility:"hidden",opacity:"0"})
                                                      Swal.fire(
                                                          '¡Error!',
                                                          'Ha ocurrido un error durante la actualización.',
                                                          'error'
                                                      )}
                                              
                                                }
                                            }); //end-ajax
                                        } else {
                                            Swal.fire(
                                                '¡Error!',
                                                'El correo ya esta registrado. Por favor verifique.',
                                                'error'
                                            )
                                            $("#correo_reg").val($("#correo_hidden").val());
                                        }
                                    }
                                }); //end-ajax
                            } else {
                                Swal.fire(
                                    '¡Error!',
                                    'La cédula ya esta registrada. Por favor verifique.',
                                    'error'
                                )
                                $("#cedula").val($("#cedula_hidden").val());
                            }
                        }
                    }); //end-ajax
      }

         return false;
      },
      rules: {
        cedula: {
          required: true,
          minlength: 5,
          maxlength: 10
        },
        nombre: {
          required: true,
          minlength: 2,
          maxlength: 20,
          especialChars: true
        },
        apellido: {
          required: true,
          minlength: 2,
          maxlength: 20,
          especialChars: true
        },
        correo_reg: {
          required: true,
          email: true
        }
      },
      messages: {
        cedula: {
          required: "Por favor ingrese su cédula.",
          minlength: "La cédula debe tener un mínimo de 5 digitos.",
          maxlength: "La cédula debe tener un máximo de 8 digitos."
        },
        nombre: {
          required: "Por favor ingrese su nombre.",
          especialChars: "No puede contener caracteres especiales"
        },
        apellido: {
          required: "Por favor ingrese su apellido.",
          especialChars: "No puede contener caracteres especiales"
        },
        correo_reg: {
          required: "Por favor ingrese un correo valido."
        }
        }
      }); 
                                                    }
                                                    if(json.res=="vacio"){
                                                    Swal.fire(
                                                        'Oops',
                                                        'Este campo no puede estar vacío. Si desea puede omitir este paso.',
                                                        'error'
                                                        )
                                                    }
                                                }
                                            }); //end-ajax
          }

          function habilitar(id){
            $(".loader-page").css({visibility:"visible",opacity:"1"})

                                        Swal.fire({
                                          title: '¿Seguro quieres habilitar este usuario?',
                                          text: "El usuario podra ingresar al sistema mientras este habilitado",
                                          type: 'warning',
                                          showCancelButton: true,
                                          confirmButtonColor: '#3085d6',
                                          cancelButtonText: 'Volver a la lista',
                                          confirmButtonText: 'Habilitar'
                                        }).then((result) => {
                                          if (result.value) {
                                            $.ajax({
                                                type: "POST",
                                                url: "../includes/habilitar.php",
                                                data: {id_user : id},
                                                success: function (data) {
                                                    var json = eval("(" + data + ")");
                                                    $(".loader-page").css({visibility:"hidden",opacity:"0"})
                                                    if(json.res="success"){
                                                       Swal.fire(
                                                        '¡Éxito!',
                                                        'Has habilitado al usuario con ID: '+id,
                                                        'success'
                                                            ).then(function () {
                                                                 list();
                                                        }) 
                                                    }else{
                                                      Swal.fire(
                                                        '¡Oops!',
                                                        'Ha ocurrido un error al habilitar al usuario con ID: '+id,
                                                        'error'
                                                            ).then(function () {
                                                                 list();
                                                        }) 
                                                    }
                                                }
                                            }); //end-ajax
                                          }else{
                                            list();
                                          }
                                })    
          }

          function deshabilitar(id){
            $(".loader-page").css({visibility:"visible",opacity:"1"})

                                        Swal.fire({
                                          title: '¿Seguro quieres deshabilitar este usuario?',
                                          text: "El usuario no podra ingresar al sistema mientras este Deshabilitado",
                                          type: 'warning',
                                          showCancelButton: true,
                                          confirmButtonColor: '#3085d6',
                                          cancelButtonText: 'Volver a la lista',
                                          confirmButtonText: 'Deshabilitar'
                                        }).then((result) => {
                                          if (result.value) {
                                            $.ajax({
                                                type: "POST",
                                                url: "../includes/deshabilitar.php",
                                                data: {id_user : id},
                                                success: function (data) {
                                                    var json = eval("(" + data + ")");
                                                    $(".loader-page").css({visibility:"hidden",opacity:"0"})
                                                    if(json.res="success"){
                                                       Swal.fire(
                                                        '¡Éxito!',
                                                        'Has deshabilitado al usuario con ID: '+id,
                                                        'success'
                                                            ).then(function () {
                                                                 list();
                                                        }) 
                                                    }else{
                                                      Swal.fire(
                                                        '¡Oops!',
                                                        'Ha ocurrido un error al deshabilitar al usuario con ID: '+id,
                                                        'error'
                                                            ).then(function () {
                                                                 list();
                                                        }) 
                                                    }
                                                }
                                            }); //end-ajax
                                          }else{
                                            list();
                                          }
                                })    
          }

          function mod_doc(id, tipo){
            $(".loader-page").css({visibility:"visible",opacity:"1"});
                var url = '';
                if(tipo=='I'){
                  url = "../includes/ver_inv.php";
                }
                if(tipo=='L'){
                  url = "../includes/ver_lib.php";
                }
                
                      $.ajax({
                          type: "POST",
                          url: url,
                          data: {id_doc : id},
                          success: function (data) {
                            var json = eval("(" + data + ")");
                          $(".loader-page").css({visibility:"hidden",opacity:"0"});
                          if(tipo=='I'){
var string = '';
string += '    <form name="form_inv" class="ad_min" id="form_inv">';
string += '    <h3>Datos de la Investigación</h3>';
string += '        <label for="username">Investigación</label>';
string += '        <input type="hidden" class="form-control" id="id_doc" name="id_doc">';
string += '        <input type="hidden" class="form-control" name="ubv" value="'+json[0].comunidad_ubv+'">';
string += '  <input type="text" class="form-control" id="titulo_doc" name="titulo_doc" placeholder="Título">';
string += '<div id="contenido2">';
string += '</div>';
string += 'Descripción';
string += '<textarea name="desc_doc" id="desc_doc" class="form-control" rows="5" placeholder="Descripción"></textarea>';
string += '<p class="help-block">No debe ser mayor a 250 palabras</p>';
string += '<div align=center> <input type="submit" class="btn btn-primary" value="Modificar Investigación"></div></form>';
$("#contenido").html(string);
comunidad_ubv2(json[0].comunidad_ubv);
$("#id_doc").val(id);
$("#titulo_doc").val(json[0].titulo_doc);
$("#desc_doc").val(json[0].resume_doc);
if(json[0].comunidad_ubv=="S"){
    var radios = $("#form_inv").find("input[name='grado_proy']");
    if(json[0].grado_proy=="T"){
        for (var i = 0; i < radios.length; i++) {
            if(radios[i].value=="T"){
                radios[i].setAttribute("checked", "checked");
            }else{
                radios[i].removeAttribute("checked");
            }
        }
    }
    if(json[0].grado_proy=="L"){
        for (var i = 0; i < radios.length; i++) {
            if(radios[i].value=="L"){
                radios[i].setAttribute("checked", "checked");
            }else{
                radios[i].removeAttribute("checked");
            }
        }
    }
    $("#ano_semestre").val(json[0].ano_semestre);
    $("#area_app").val(json[0].area_app);
    $("#datetime").val(json[0].fecha_pre);
    $("#estado").val(json[0].estado);
    cabestado2(json[0].estado);
    $("#municipio").val(json[0].municipio);
    $("#ciudad").val(json[0].ciudad);
}else{
    var radios = $("#form_inv").find("input[name='publicado']");
    if(json[0].publicado=="S"){
        for (var i = 0; i < radios.length; i++) {
            if(radios[i].value=="S"){
                radios[i].setAttribute("checked", "checked");
            }else{
                radios[i].removeAttribute("checked");
            }
        }
    }
    if(json[0].publicado=="N"){
        for (var i = 0; i < radios.length; i++) {
            if(radios[i].value=="N"){
                radios[i].setAttribute("checked", "checked");
            }else{
                radios[i].removeAttribute("checked");
            }
        }
    }
    $("#tipo_inv").val(json[0].tipo_inv);
}
  jQuery.validator.addMethod("especialChars",
                           function(value, element) {
                                   return /^[A-Za-z\d=ñ#$%@_ -]+$/.test(value);
                           },
                   "No pueden haber caracteres especiales."
                );
          $("#form_inv").submit(function(e){ e.preventDefault(); }).validate({
              submitHandler: function(form) {
              $(".loader-page").css({visibility:"visible",opacity:"1"})
                 $.ajax({
                          type: "POST",
                          url: "../includes/act_inv.php",
                          data: $("#form_inv").serialize(),
                          success: function (data) {
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                              var json = eval("(" + data + ")");
                              if(json.res=="success"){
                                
                                Swal.fire(
                                    '¡Actualización exitosa!',
                                    'Se ha actualizado la investigación exitosamente.',
                                    'success'
                                ).then(function () {
                                        Swal.fire({
                                          title: '¿Quieres publicar este documento?',
                                          text: "Puedes publicar este documento ahora o volver a la lista de documentos en espera",
                                          type: 'question',
                                          showCancelButton: true,
                                          confirmButtonColor: '#3085d6',
                                          cancelButtonColor: '#d33',
                                          cancelButtonText: 'Volver a la lista',
                                          confirmButtonText: '¡Aprobar!'
                                        }).then((result) => {
                                          if (result.value) {
                                            aprobar(id);
                                          }else{
                                            ver_espera();
                                          }
                                        })
                                })
                        
                              }
                              if(json.res=="error"){
                                Swal.fire(
                                '¡Error!',
                                'Ha ocurrido une error en el registro. Por favor ingresa tus datos nuevamente.',
                                'error'
                                )
                                $("#form_proy")[0].reset();
                              }
                              if(json.res=="vacio"){
                                Swal.fire(
                                  '¡Error!',
                                  'Asegurate de que no hayan campos vacíos.',
                                  'error'
                              )                      
                              }
                          }
                      }); //end-ajax
                 return false;
              },
            rules: {
                  titulo_doc: {
                  required: true},

                  desc_doc: {
                  required: true,
                  minlength: 2,
                  maxlength: 5000},

                  publicado: {
                  required: true},

                  tipo_inv: {
                  required: true},

                  grado_proy: {
                  required: true},

                  area_app: {
                  required: true},

                  ano_semestre:{
                  required: true},

                  nom_comunidad: {
                  required: true},

                  com_estado: {
                  required: true},

                  com_municipio: {
                  required: true},

                  com_otro: {
                  required: true}
                },
              messages: {
                titulo_doc: {
                  required: "Este campo es requerido."
                },
                  desc_doc: {
                  required: "Este campo es requerido."
                },
                publicado: {
                  required: "Este campo es requerido."
                },
                tipo_inv: {
                  required: "Este campo es requerido."
                },
                  grado_proy:{
                  required: "Este campo es requerido."
                },
                  area_app: {
                  required: "Este campo es requerido."
                },

                  ano_semestre:{
                  required: "Este campo es requerido."
                },

                  nom_comunidad: {
                  required: "Este campo es requerido."
                },
                  com_estado: {
                  required: "Este campo es requerido."
                },

                  com_municipio: {
                  required: "Este campo es requerido."
                },

                  com_otro:{
                  required: "Este campo es requerido."
                }
                }
            }); 

                          }
                          if(tipo=='L'){
                            var string = '';
string += '<form name="form_lib" class="ad_min" id="form_lib">';
string += '<input type="hidden" class="form-control" id="id_doc" name="id_doc">';
string += '<h3>Datos del Contenido</h3>';
string += '<label for="username">Contenido</label>';
string += '<input type="text" class="form-control" id="titulo_doc" name="titulo_doc" placeholder="Título">';
string += '<br>';
string += 'Año de publicación <input type="number" class="form-control" id="ano_publi" name="ano_publi" placeholder="Año de Publicación">';
string += '<br>';
string += '<br>';
string += 'Número de Edición <input type="text" class="form-control" id="edicion" name="edicion" placeholder="Número de Edición">';
string += '<br>';
string += '<textarea class="form-control" name="desc_doc" id="desc_doc" rows="5" placeholder="Descripción"></textarea>';
string += '<p class="help-block">No debe ser mayor a 250 palabras</p>';
string += ' <br>';
string += ' <div align=center> <input type="submit" class="btn btn-primary" value="Modificar Contenido"></div></form>';
 $("#contenido").html(string);
$("#id_doc").val(id);
$("#titulo_doc").val(json[0].titulo_doc);
$("#desc_doc").val(json[0].resume_doc);
$("#ano_publi").val(json[0].ano_publi);
$("#edicion").val(json[0].edicion);

                jQuery.validator.addMethod("especialChars",
                           function(value, element) {
                                   return /^[A-Za-z\d=ñ#$%@_ -]+$/.test(value);
                           },
                   "No pueden haber caracteres especiales."
                );
          $("#form_lib").submit(function(e){ e.preventDefault(); }).validate({
              submitHandler: function(form) {
              $(".loader-page").css({visibility:"visible",opacity:"1"})
                 $.ajax({
                          type: "POST",
                          url: "../includes/act_lib.php",
                          data: $("#form_lib").serialize(),
                          success: function (data) {
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                              var json = eval("(" + data + ")");
                              if(json.res=="success"){
                                
                                Swal.fire(
                                    '¡Actualización exitosa!',
                                    'Se ha actualizado el Contenido exitosamente.',
                                    'success'
                                ).then(function () {
                                        Swal.fire({
                                          title: '¿Quieres publicar este documento?',
                                          text: "Puedes publicar este documento ahora o volver a la lista de documentos en espera",
                                          type: 'question',
                                          showCancelButton: true,
                                          confirmButtonColor: '#3085d6',
                                          cancelButtonColor: '#d33',
                                          cancelButtonText: 'Volver a la lista',
                                          confirmButtonText: '¡Aprobar!'
                                        }).then((result) => {
                                          if (result.value) {
                                            aprobar(id);
                                          }else{
                                            ver_espera();
                                          }
                                        })
                                })
                        
                              }
                              if(json.res=="error"){
                                Swal.fire(
                                '¡Error!',
                                'Ha ocurrido une error en el registro. Por favor ingresa tus datos nuevamente.',
                                'error'
                                )
                                $("#form_proy")[0].reset();
                              }
                              if(json.res=="vacio"){
                                Swal.fire(
                                  '¡Error!',
                                  'Asegurate de que no hayan campos vacíos.',
                                  'error'
                              )                      
                              }
                          }
                      }); //end-ajax
                 return false;
              },
              rules: {

                  titulo_doc: {
                  required: true},

                  desc_doc: {
                  required: true,
                  minlength: 2,
                  maxlength: 5000},

                  ano_publi: {
                  required: true},

                  edicion: {
                  required: true}
                },
              messages: {

                  titulo_doc: {
                  required: "Este campo es requerido."
                },
                  desc_doc: {
                  required: "Este campo es requerido."
                },
                ano_publi: {
                  required: "Este campo es requerido."
                },
                edicion: {
                  required: "Este campo es requerido."
                }
                }
            }); 
                          }
                        }
                      }); //end-ajax
          }

          function aprobar(id){
            $(".loader-page").css({visibility:"visible",opacity:"1"})
                      $.ajax({
                          type: "POST",
                          url: "../includes/aprobar.php",
                          data: {id_doc : id},
                          success: function (data) {
                              var json = eval("(" + data + ")");
                              $(".loader-page").css({visibility:"hidden",opacity:"0"})
                              if(json.res="success"){
                                 Swal.fire(
                                  '¡Éxito!',
                                  'Has aprobado el documento con ID: '+id,
                                  'success'
                                      ).then(function () {
                                           en_espera();
                                           ver_espera();
                                  }) 
                              }else{
                                Swal.fire(
                                  '¡Oops!',
                                  'Ha ocurrido un error al aprobar el documento con ID: '+id,
                                  'error'
                                      ).then(function () {
                                           en_espera();
                                           ver_espera();
                                  }) 
                              }
                          }
                      }); //end-ajax
          }

          function rechazar(id){

            Swal.fire({
              title: '¿Seguro quieres rechazar este documento?',
              type: 'question',
              html: '<textarea id="comentario" class="swal2-input" placeholder="Escribe un comentario al respecto..."></textarea>',
              cancelButtonText: 'Volver',
              showCancelButton: true,
              confirmButtonText: '¡Rechazar!',
              cancelButtonColor: '#d33',
              confirmButtonColor: '#3085d6',
            }).then((result) => {
              if (result.value) {
                $(".loader-page").css({visibility:"visible",opacity:"1"})
                  var text = document.getElementById('comentario').value;
                      if (text=="") {
                        text = "rechazado por el administrador";
                      }
                        text = text.replace(/'/i, '');
                        text = text.replace(/<script>/i, '');
                      $.ajax({
                          type: "POST",
                          url: "../includes/rechazar.php",
                          data: {id_doc : id,
                                nota : text},
                          success: function (data) {
                              var json = eval("(" + data + ")");
                              $(".loader-page").css({visibility:"hidden",opacity:"0"})
                              if(json.res="success"){
                                 Swal.fire(
                                  '¡Éxito!',
                                  'Has rechazado el documento con ID: '+ id + '<br>Nota del admin: '+text,
                                  'success'
                                      ).then(function () {
                                           en_espera();
                                           ver_espera();
                                  })
                              }else{
                                Swal.fire(
                                  '¡Oops!',
                                  'Ha ocurrido un error al rechazar el documento con ID: '+id,
                                  'error'
                                      ).then(function () {
                                           en_espera();
                                           ver_espera();
                                  }) 
                              }
                          }
                      }); //end-ajax
              }
            })
            
          }

        function buscar_admin(input) {
                  // Declare variables 
                  var filter, table, tr, td, i;
                  filter = input.value.toUpperCase();
                  table = document.getElementById("lista");
                  tr = table.getElementsByTagName("tr");
                  // Loop through all table rows, and hide those who don't match the search query
                  for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td") ; 
                    for(j=0 ; j<td.length ; j++)
                    {
                      let tdata = td[j] ;
                      if (tdata) {
                        if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          tr[i].style.display = "";
                          break ; 
                        } else {
                          tr[i].style.display = "none";
                        }
                      } 
                    }
                  }
                }


        function para_mis_inv(id){
            my_alert();
            ver_inv(id);
        }

        function para_mis_lib(id){
            my_alert();
            ver_lib(id);
        }
        function ver_espera(){
            document.getElementById('ver_espera').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center activo"); 
            document.getElementById('inv').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('lib').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('reg_doc').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('list').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
          en_espera();
            $(".loader-page").css({visibility:"visible",opacity:"1"})
                      $.ajax({
                          type: "POST",
                          url: "../includes/espera_completa.php",
                          data: "",
                          success: function (data) {
                              var json = eval("(" + data + ")");
                              var string='';

                                    string += '    <div class="tablas" style="margin-top: 50px;">';
                                        string += '<div class="espacio">';
                                        string += '<br>';
                                        string += '<input onKeyUp="buscar_admin(this);" type="text" class="form-control" placeholder="Buscar documentos en espera">';
                                        string += '<br>';
                                        string += '</div>';
                                     string += '    <table id="lista" class="table table-hover">';
                                    string += '        <thead>';
                                    string += '            <tr>';
                                    string += '                <th scope="col">ID</th>';
                                    string += '                <th scope="col">Título</th>';
                                    string += '                <th scope="col">Tipo</th>';
                                    string += '                <th scope="col">Acción</th>';
                                    string += '            </tr>';
                                    string += '        </thead>';
                                    string += '        <tbody><tr>';
                                    for (var i = 1; i <  json.length; i++){
                                        if(json[i].tipo_doc=='I'){
                                          string += '                <td onclick="para_mis_inv('+json[i].id_doc+');">'+json[i].id_doc+'</td>';
                                          string += '                <td onclick="para_mis_inv('+json[i].id_doc+');">'+json[i].titulo_doc+' <img width="20px" src="../assets/img/eye.png"></td>';
                                        }
                                        if(json[i].tipo_doc=='L'){
                                          string += '                <td onclick="para_mis_lib('+json[i].id_doc+');">'+json[i].id_doc+'</td>';
                                          string += '                <td onclick="para_mis_lib('+json[i].id_doc+');">'+json[i].titulo_doc+' <img width="20px" src="../assets/img/eye.png"></td>';
                                        }
                                        if(json[i].tipo_doc=='I'){
                                          string += '                <td>Investigación</td>';
                                        }
                                        if(json[i].tipo_doc=='L'){
                                          string += '                <td>Contenido</td>';
                                        }
                                        string += '<td><img width="20px" onclick="aprobar(' + json[i].id_doc + ');" src="../assets/img/aprovar.png"> - ';
                                        if(json[i].tipo_doc=='I'){
                                          string += '<img width="20px" onclick="mod_doc(' + json[i].id_doc + ', \'I\');" src="../assets/img/editn.png">';
                                        }
                                        if(json[i].tipo_doc=='L'){
                                          string += '<img width="20px" onclick="mod_doc(' + json[i].id_doc + ', \'L\');" src="../assets/img/editn.png">';
                                        }


                                        string += ' - <img width="20px" onclick="rechazar(' + json[i].id_doc + ');" src="../assets/img/rechazar.png"></td>';
                                        string += '            </tr>';
                                    }
                                    string += '    </table>';
                                    string += '</div>';
                              string += '        </div>';
                              $("#contenido").html(string);
                              $(".loader-page").css({visibility:"hidden",opacity:"0"})
                        }
                      }); //end-ajax
        }

                  function en_espera(){
                      $.ajax({
                          type: "POST",
                          url: "../includes/en_espera.php",
                          data: "",
                          success: function (data) {
                              var json = eval("(" + data + ")");
                              $("#contador").html(json.cantidad);
                          }
                      }); //end-ajax
                  }


        function list(){
            document.getElementById('ver_espera').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('inv').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('lib').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('reg_doc').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('list').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center activo"); 
          en_espera();
                    $.ajax({
                        type: "POST",
                        url: "../includes/listuser.php",
                        data: "",
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            var string = '';
                            string += '    <div class="tablas" style="margin-top: 50px;">';
                            string += '<div width="100%" class="espacio">';
                            string += '<input onKeyUp="buscar_admin(this);" type="text" class="form-control" placeholder="Buscar usuarios">';
                            string += '<br>';
                            string += '</div>';
                            string += '    <table id="lista" width="100%" class="table table-hover">';
                            string += '        <thead>';
                            string += '            <tr>';
                            string += '                <th scope="col">ID</th>';
                            string += '                <th scope="col">Correo</th>';
                            string += '                <th scope="col">Cédula</th>';
                            string += '                <th scope="col">Tipo</th>';
                            string += '                <th scope="col">Nombre</th>';
                            string += '                <th scope="col">Apellido</th>';
                            string += '                <th scope="col">¿Habilitado?</th>';
                            string += '                <th scope="col">Acción</th>';
                            string += '            </tr>';
                            string += '        </thead>';
                            string += '        <tbody>';
                            if (json[0].res == "success") {
                              for (var i = 1; i <  json.length; i++){
                                  string += '            <tr>';
                                  string += '                <td>'+json[i].id_user+'</td>';
                                  string += '                <td>'+json[i].correo+'</td>';
                                  string += '                <td>'+json[i].cedula+'</td>';
                                  string += '                <td>'+json[i].t_user+'</td>';
                                  string += '                <td>'+json[i].nombre+'</td>';
                                  string += '                <td>'+json[i].apellido+'</td>';
                                  string += '                <td>'+json[i].habilitado+'</td>';
                                  string += '                <td>';
                                  if(json[i].id_user!=1 && json[i].habilitado!='V'){
                                  string += '<img width="20px" onclick="habilitar(' + json[i].id_user + ');" src="../assets/img/aprovar.png"> - ';
                                  }
                                  string += '<img width="20px" onclick="mod_user(' + json[i].id_user + ');" src="../assets/img/editn.png">';
                                  if(json[i].id_user!=1 && json[i].habilitado!='F'){
                                  string += ' - <img width="20px" onclick="deshabilitar(' + json[i].id_user + ');" src="../assets/img/rechazar.png"></td>';
                                  }

                                  string += '            </tr>';
                              }
                            }
                              if(json[0].res == "vacio"){
                                  string += '            <tr>';
                                  string += '                <td colspan="6">Sin Usuarios registrados</td>';
                                  string += '            </tr>';
                              }
                            string += '        </tbody>';
                            string += '    </table>';
                            string += '</div>';
                            string += '</div>';
                            $("#contenido").html(string);
                        }
                    }); //end-ajax
        }


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
                        Swal.fire(
                            'Error',
                            'No hay una sesión activa',
                            'error'
                                ).then(function () {
                                      window.location.href="../index.html";
                            })
                    }else{
                      if(json.t_user=="user"){
                        window.location.href="perfil.html";
                      }
                      if(json.t_user=="administrador"){
                        var nombre = json.nombre;
                        var imagen = json.imagen;
                        $("#avatar").html(nombre);
                        document.getElementById('ava_img').setAttribute("src", "../"+imagen);
                      }
                    }
                }
            }); //end-ajax
        } //end-function

  $(document).ready(function ($) {
          check();
          en_espera();
          ver_espera();
        });