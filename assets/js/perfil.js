

        function final(){
          $(".loader-page").css({visibility:"visible",opacity:"1"});
                      var x = $("#x").val();
                      var y = $("#y").val();
                      var w = $("#w").val();
                      var h = $("#h").val();
                      
                      if(x!=""){
                        var filename = $("#filename").val();
                        var src = $("#src_crop").val();
                        var imagen_w = $("#imagen_w").val();
                        var imagen_h = $("#imagen_h").val();
                        var tipo = $("#tipo").val();
                          $.ajax({
                                  type: "POST",
                                  url: "../includes/cargar_img.php",
                                  data: {x : x,
                                      y : y,
                                      w : w,
                                      h : h,
                                      src : src,
                                      filename : filename,
                                      imagen_w : imagen_w,
                                      imagen_h : imagen_h,
                                      tipo : tipo},
                                  success: function (data) {
                                    $(".loader-page").css({visibility:"hidden",opacity:"0"});
                                      var json = eval("(" + data + ")");
                                      if (json.res == "success") {
                                        Swal.fire({
                                title: '¡Imagen Modificada!',
                                text: 'Tu imagen perfil ya esta actualizada.',
                                imageUrl: "../"+json.imagen,
                                imageWidth: 200,
                                imageClass: "plus",
                                imageHeight: 200
                              }).then(function () {
                                        window.location.reload();  
                                            })
                                      }
                                  }
                    }); //end-ajax 
            }else{
              $(".loader-page").css({visibility:"hidden",opacity:"0"});
                var imagen = "../assets/img/avatares/default/default.jpg";
                                Swal.fire({
                        title: '¡Imagen no modificada!',
                        text: '¡Disfruta de la comunidad!',
                        imageUrl: imagen,
                        imageWidth: 200,
                        imageClass: "plus",
                        imageHeight: 200
                      }).then(function () {
                                window.location.reload(); 
                                    })
              }
            
        }

  function updateCoords(c)
  {
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
  }; 


       function cabestado() {
              $("#municipio").html("");
              var state = $("#estado").val();
              municipios(state);
       } //end-function

function mis_inv(enlace) {
            $("#contenido").html("");
            $.ajax({
                type: "POST",
                url: "../includes/mis_inv.php",
                data: {enlace : enlace},
                success: function (data) {
                    var json = eval("(" + data + ")");
                    var string = "";
                    var validos = 0
                    string +='<div class="mod_user">';
                    string +='<h4>Mis Investigaciones</h4>';
                    if(json[0].res=="vacio"){
                        string += "<p>Sin elementos</p>";
                    }else{
                        if(json.length>0){
                        string += '<div class="cajaproy">';
                        for (var i = 1; i < json.length; i++) {
                            validos++;
                              if(validos<=4){
                                  string += '<div class="cajaproy3"><img src="../assets/img/invesg.png" class="imgcajapil">';
                                  string += '<h6  onclick="ver_inv('+json[i].id_doc+');">'+json[i].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<p>Investigación</p>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[i].fav_val=="done"){
                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[i].id_doc+', this); mis_inv('+id+');" class="imgp">';
                                  }                            
                                  if(json[i].comp_val=="done"){
                                    string += '<span class="num">' + json[i].comp + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[i].id_doc+', \'investigacion\');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[i].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[i].id_doc+', \'investigacion\');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  
                              }else{
                                var posicion = i;
                                 break;
                              }
                        }
                        string += '</div>';
                        if(validos>4){
                            string += '<div class="espacio">';
                            string += '    <div class="form-row">';
                            string += '        <div class="form-group col-md-5">';
                            string += '            <select id="" class="form-control">';
                            string += '                <option selected>Fecha de Publicación</option>';
                            string += '                <option>...</option>';
                            string += '            </select>';
                            string += '        </div>';
                            string += '        <div class="form-group col-md-5">';
                            string += '            <select id="" class="form-control">';
                            string += '                <option selected>Area de Aplicación</option>';
                            string += '                <option>...</option>';
                            string += '            </select>';
                            string += '        </div>';
                            string += '        <div class="form-group col-md-2">';
                            string += '            <input type="submit" class="btn btn-primary btn-sm" value="Buscar">';
                            string += '        </div>';
                            string += '    </div>';
                            string += '    <table class="table table-hover">';
                            string += '        <thead>';
                            string += '            <tr>';
                            string += '                <th scope="col">Titulo</th>';
                            string += '                <th scope="col">Temática</th>';
                            string += '                <th scope="col">Me gusta</th>';
                            string += '                <th scope="col">Acción</th>';
                            string += '            </tr>';
                            string += '        </thead>';
                            string += '        <tbody>';
                            for (var i = posicion; i <  json.length; i++){
                              if(json[i].valido=='V'){
                                string += '            <tr>';
                                string += '                <td onclick="ver_inv('+json[i].id_doc+');">'+json[i].titulo_doc+'</td>';
                                string += '                <td onclick="ver_inv('+json[i].id_doc+');">'+json[i].tipo_inv+'</td>';
                                if(json[i].fav_val=="done"){
                                  string += '<td><span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp"></td>';
                                  }else{
                                  string += '<td><span class="num">' + json[i].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[i].id_doc+', this);" class="imgp"></td>';
                                  }   
                                string += '                <td>BOTONES</td>';
                                string += '            </tr>';
                              }
                            }
                            string += '    </table>';
                            string += '</div>';
                            string += '</div>';
                        }
                        
                    }
                    }

                    
                    $("#contenido3").html(string);
                    
                }
            }); //end-ajax
        } //end-function
        function mis_lib(enlace) {
            $("#contenido").html("");
            $.ajax({
                type: "POST",
                url: "../includes/mis_lib.php",
                data: {enlace : enlace},
                success: function (data) {
                    var json = eval("(" + data + ")");
                    var string = "";
                    string +='<div class="mod_user">';
                  string += '<h4>Mis Contenidos Favoritos</h4>';
                  if(json[0].res_m=="vacio"){
                        string += "<p>Sin elementos</p>";
                    }else{
                        string += '<div class="cajaproy">';
                        for (var i = 1; i < json.length; i++) {
                          if(json[i].status=="favoritos"){
                                  string += '<div class="cajaproy3"><img src="../assets/img/librog.png" class="imgcajapil">';
                                  string += '<h6 onclick="ver_lib('+json[i].id_doc+');">'+json[i].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[i].fav_val=="done"){
                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[i].id_doc+', this);" class="imgp">';
                                  }
                                  string += '<span class="num">' + json[i].my + '</span><img src="../assets/img/my.png" class="imgp">';
                                  if(json[i].comp_val=="done"){
                                    string += '<span class="num">' + json[i].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[i].id_doc+', \'libro\');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[i].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[i].id_doc+', \'libro\');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                           }//end-if

                          }//end-for
                        string += '</div>';
                  }

                    $("#contenido3").html(string);
                    
                }
            }); //end-ajax
        } //end-function

function mod_user(){

            $(".loader-page").css({visibility:"visible",opacity:"1"})
            var string = '';
                    string += '<form id="formulario" ><h3 id="text">Carga una imagen de perfil</h3>';  
                  string += '<br>      ';
                  string += '<center><img src="../assets/img/imgplus1.png" class="plus" id="imagen" name="imagen"></center>';
                  string += '   <label id="label" class="btn boton" for="file2">Carga una foto</label><input type="file" accept="image/*" name="img1" id="file2" class="btn file">';
                  string += '  <input type="hidden" id="filename" name="filename" />';
                  string += '  <input type="hidden" id="src_crop" name="src_crop" />';
                  string += '  <input type="hidden" id="imagen_w" name="imagen_w" />';
                  string += '  <input type="hidden" id="imagen_h" name="imagen_h" />';
                  string += '  <input type="hidden" id="tipo" name="tipo" />';
                  string += '  <input type="hidden" id="x" name="x" />';
                string += '  <input type="hidden" id="y" name="y" />';
                string += '  <input type="hidden" id="w" name="w" />';
                string += '  <input type="hidden" id="h" name="h" />';
                  string += '</form>';
                  string += '<button class="btn boton1" style="visibility: hidden; opacity: 0;" onclick="final();" id="recortar">Recortar</button>';
                  string += '<button class="btn boton" style="visibility: hidden; opacity: 0;" id="retro" onclick="mod_user();">Cancelar Recorte</button>';
            $("#contenido3").html(string);
                            
                            $("input[name='img1']").on("change", function(){
                              $('#text').html("Recorta tu imagen de perfil");
                                if($("#file2").val()!=""){
                                  var filename = $('#file2').val().replace(/C:\\fakepath\\/i, '');
                                  $('#filename').val(filename);
                                  $(".loader-page").css({visibility:"visible",opacity:"1"});
                                     var formData = new FormData($("#formulario")[0]);
                                        var url= "../includes/previo.php";
                                        $.ajax({
                                            type: "POST",                    
                                            url: url,                
                                            data: formData,        
                                            contentType: false,
                                            processData: false,
                                            success: function(data){
                                                var json = eval("(" + data + ")");
                                                $(".loader-page").css({visibility:"hidden",opacity:"0"});
                                                if(json.res=="success"){
                                                  $("#imagen_w").val(json.ancho);
                                                  $("#imagen_h").val(json.largo);
                                                  $("#tipo").val(json.tipo);
                                                  $("#file2").css({visibility:"hidden",opacity:"0"});
                                                  $("#label").css({visibility:"hidden",opacity:"0"});
                                                  $("#retro").css({visibility:"visible",opacity:"1"});
                                                  $("#recortar").css({visibility:"visible",opacity:"1"});
                                                  console.log(json.imagen);
                                                  document.getElementById('src_crop').setAttribute("value", json.imagen);
                                                  $(".plus").attr("src", "../"+json.imagen);
                                                  $(".plus").attr("width", "500px");
                                                  $(".plus").attr("id", "cropbox");
                                                  $(".plus").attr("class", "");

                                                    var ancho= (json.ancho * 500)/json.largo;
                                                    $('#cropbox').Jcrop({
                                                      setSelect: [200, 150, ancho, 200],
                                                      maxSize: [ 300, 300 ],
                                                      aspectRatio: 1,
                                                      onSelect: updateCoords
                                                    });
                                                }
                                                if(json.res=="carpeta"){
                                                  Swal.fire(
                            'Fallo al mover archivo',
                            'Oops, algo salio mal.',
                            'error'
                            )
                                                }
                                                if(json.res=="formato"){
                                                  Swal.fire(
                            'Formato incorrecto',
                            'Tu imagen debe ser de extensión jpg, jpeg, o png. No debe tener un peso superior a 2MB y no debe superar los 2000 píxeles de largo por 2000 píxeles de ancho.',
                            'error'
                            )
                                                }
                                                if(json.res=="vacio"){
                                                  Swal.fire(
                            'Contenido vacío',
                            'Debes seleccionar primero una imagen de tu preferencia.',
                            'error'
                            )
                                                }                                                   
                                            }
                                        });//end-ajax
                                }
                            });//end-accion-btn

            var string = '';
            string += '<form autocomplete="off" class="mod_user" id="form_reg" method="POST">';            
            string += '<input type="hidden" class="form-control" id="correo_hidden" name="correo_hidden">';            
            string += '<label for="cedula">Cédula *</label>';
            string += '<input  autocomplete="off" type="text" id="cedula" name="cedula" required class="form-control" placeholder="Cédula" disabled> ';
            string += '<label for="nombre">Nombres *</label>';
            string += '<input type="text" class="form-control" autocomplete="off" id="nombre" name="nombre" required placeholder="Nombres"> ';
            string += '<label for="apellido">Apellidos *</label>';
            string += '<input type="text" class="form-control" autocomplete="off" id="apellido" name="apellido" required placeholder="Apellidos"> ';
            string += '<label for="correo_reg">Correo *</label>';
            string += '<input type="text" class="form-control" autocomplete="off" id="correo_reg" name="correo_reg" required placeholder="Correo Electrónico">';
            string += '<input type="hidden" class="form-control" id="id_comunidad" name="id_comunidad"> ';
            string += '<label for="municipio">Dirección *</label><br>';
            string += '<select onchange="cabestado();" name="estado" id="estado" class="btn boton2" data-toggle="tooltip" data-placement="right" title="Por favor selecciona un estado">';
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
            string += '                            <select name="municipio" id="municipio" class="btn boton2" data-toggle="tooltip" data-placement="right" title="Por favor selecciona un municipio">';
            string += '                                <option value="">Municipio</option>';
            string += '                            </select>';
            string += '                    <input type="text" name="ciudad" id="ciudad" class="form-control" maxlength="100" placeholder="Ciudad, Zona o Poblado" data-toggle="tooltip" data-placement="right" title="Por favor introduzca la ciudad, zona o poblado" autocomplete="off">';
            string += '<label for="">(*) Campos requeridos </label>';
            string += '<button type="submit" class="btn boton">Modificar</button>';
            string += '</form>';

            $("#contenido3").append(string);

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
    

                                            $.ajax({
                                                type: "POST",
                                                url: "../includes/ver_user_u.php",
                                                data: "",
                                                success: function (data) {
                                                    var json = eval("(" + data + ")");
                                                    $(".loader-page").css({visibility:"hidden",opacity:"0"})
                                                    if(json.res=="success"){
                            
                            $("#correo_hidden").val(json.correo);
                            $("#id_comunidad").val(json.id_comunidad);
                            $("#correo_reg").val(json.correo);
                            $("#cedula").val(json.cedula);                            
                            $("#t_user").val(json.t_user);
                            $("#nombre").val(json.nombre);
                            $("#apellido").val(json.apellido);
                            $("#estado").val(json.estado);
                            municipios(json.estado);
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
      var correo=$("#correo_reg").val();                           

                  if($("#correo_reg").val() == $("#correo_hidden").val()){
                             $.ajax({
                              type: "POST",
                              url: "../includes/act_reg.php",
                              data: $("#form_reg").serialize(),
                              success: function (data) {
                                  var json = eval("(" + data + ")");
                                  $(".loader-page").css({visibility:"hidden",opacity:"0"})                      
                                  if(json.res=="success"){                        
                                    Swal.fire(
                                        '¡Actualización Exitosa!',
                                        'Se actualizaron tus datos exitosamente.',
                                        'success'
                                    ).then(function () {
                                        window.location.reload();
                                    })
                            
                                  }
                                  if(json.res=="fail"){                       
                                    Swal.fire(
                                        '¡Error!',
                                        'Ha ocurrido un error durante la actualización.',
                                        'error'
                                    )}
                            
                              }
                          }); //end-ajax
                  }else{
                                            $.ajax({
                                                type: "POST",
                                                url: "../includes/verify.php",
                                                data: {
                                                    correo: correo
                                                },
                                                success: function (data) {
                                                    var json = eval("(" + data + ")");                                                   
                                                    if (json.res == "fail") {
                                                        $.ajax({
                                                            type: "POST",
                                                            url: "../includes/act_reg.php",
                                                            data: $("#form_reg").serialize(),
                                                            success: function (data) {
                                                                var json = eval("(" + data + ")");
                                                                $(".loader-page").css({visibility:"hidden",opacity:"0"})                                                                
                                                                if(json.res=="success"){
                                                                  
                                                                  Swal.fire(
                                                                      '¡Actualización Exitosa!',
                                                                      'Se actualizaron los datos del usuario exitosamente.',
                                                                      'success'
                                                                  ).then(function () {
                                                                      window.location.reload();
                                                                  })
                                                          
                                                                }
                                                                if(json.res=="fail"){                                                      
                                                                  Swal.fire(
                                                                      '¡Error!',
                                                                      'Ha ocurrido un error durante la actualización.',
                                                                      'error'
                                                                  )}
                                                          
                                                            }
                                                        }); //end-ajax
                                                   
                                                }else{
                                                     $(".loader-page").css({visibility:"hidden",opacity:"0"})
                                                                                                    
                                                                  Swal.fire(
                                                                      '¡Error!',
                                                                      'El correo ya esta registrado.',
                                                                      'error'
                                                                  )
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
        },
        estado: {
          required: true
        },
        municipio: {
          required: true
        },
        ciudad: {
          required: true
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
        },
        estado: {
          required: "Por favor selecciona un estado."
        },
        municipio: {
          required: "Por favor selecciona un municipio."
        },
        ciudad: {
          required: "Por favor selecciona un ciudad."
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

        function enviar() {        
            var public = $("#public").val();
            var filename = $("#filename").val();
            public = public.replace(/<script>/i, '');
            public = public.replace(/'/i, '');
              if(filename != ""){
                var incluye_f = "verdadero";
                }else{
                var incluye_f = "falso";          
                }

              if(public != ""){
                var incluye_t = "verdadero"
                }else{
                var incluye_t = "falso";          
                }

                var tipo_p = "";
                var imagen_h = "";
                var imagen_w = "";
                var tipo_img =  "";
              if(incluye_t=="verdadero" && incluye_f=="verdadero"){
                tipo_p = "mixto";
                public = (public.split('\n')).join('<br />');
                src_crop = $("#src_crop").val();
                tipo_img = $("#tipo_img").val();
                imagen_w = $("#wid").val();
                imagen_h = $("#hei").val();
              }
              if(incluye_t=="verdadero" && incluye_f=="falso"){
                tipo_p = "texto";
                public = (public.split('\n')).join('<br />');
                src_crop = "null";
                tipo_img = "null";
                imagen_w = "null";
                imagen_h = "null";
              }
              if(incluye_t=="falso" && incluye_f=="verdadero"){
                tipo_p = "file";
                public = "null";
                src_crop = $("#src_crop").val();
                tipo_img = $("#tipo_img").val();
                imagen_w = $("#wid").val();
                imagen_h = $("#hei").val();
              }
              if(incluye_t=="falso" && incluye_f=="falso"){
                tipo_p="error";
              }
                      var url = document.URL;
                      url = url.split('html/');
                      var link = url[1];
                        if (/user=/.test(link)){
                           if (tipo_p!="error"){
                          
                          $.ajax({
                              type: "POST",
                              url: "../includes/publicar.php",
                              data: {
                                  public: public,
                                  link : link,
                                  tipo_p : tipo_p,
                                  src_crop : src_crop,
                                  filename : filename,
                                  tipo_img : tipo_img,
                                  imagen_w : imagen_w,
                                  imagen_h : imagen_h
                              },
                              success: function (data) {
                                  var json = eval("(" + data + ")");

                                  if (json.res == "fail") {
                                      Swal.fire(
                                          'Error',
                                          'Oops.. Hubo un problema',
                                          'error'
                                      ).then(function () {
                                          $("#public").val("");
                                          document.getElementById("public").focus();
                                      })
                                  } else {
                                      $("#public").val("");
                                      if(json.miperfil=="verdadero"){
                                        traer2();
                                      }else{
                                        traer(json.id_user);
                                      }
                                  }
                              }
                          }); //end-ajax  
                        }
                    }
          return false;
      }




        function traer2() {
            $("#contenido").html("");
            $.ajax({
                    type: "POST",
                    url: "../includes/traer2.php",
                    data: "",
                    success: function (data) {
                        var json = eval("(" + data + ")");
                            if (json[0].res == "fail") {
                                Swal.fire(
                                    'Error',
                                    'Oops.. Hubo un problema',
                                    'error'
                                )
                            } else {
                              for (var i = 0; i<json.length; i++) {
                                json[i].id_publicacion=parseInt(json[i].id_publicacion);
                              }
                              json.sort(function(a, b){
                                  return a.id_publicacion - b.id_publicacion;
                              });
                              json.reverse();
                                    var string='';
                                        string += '<div class="creapublic">';
                                        string += '<form id="formulario2">';
                                        string += '<textarea placeholder="Escribe un comentario.." id="public"></textarea>';
                                        string += '<div id="addimg"></div>'; 
                                        string += '<label for="file">';
                                        string += '<img src="../assets/img/foto.png" alt="" aria-hidden="true" class="fotopublic" data-toggle="tooltip" data-placement="bottom" title="Agregar una imagen">';                 
                                        string += '<input type="file" accept="image/*" name="img2" id="file" style="display: none;" class="btn file">';
                                        string += '</label>';                                        
                                        string += '<a onclick="enviar();" class=" btn public">Publicar</a>';
                                        string += '</form>';
                                        string += '</div>'; 
                                        string += '  <input type="hidden" id="filename" name="filename">';
                                        string += '  <input type="hidden" id="src_crop" name="src_crop">';
                                        string += '  <input type="hidden" id="tipo_img" name="tipo_img">';
                                        string += '  <input type="hidden" id="wid" name="wid">';
                                        string += '  <input type="hidden" id="hei" name="hei">';

                                    for(var i=0; i<json.length-1; i++){
                                                string += '<div class="cajacomentario">';
                                                string += '<div class="row">';
                                                string += '<div class="col-md-2">';
                                      if(json[i].t_publicacion=="texto"){

                                                string += '<a href="'+ json[i].url_perfil +'"><img src="../'+ json[i].imagen+'" alt="" class="imgcoment">';
                                                string += '</div>';
                                                string += '<div class="col-md-10">';
                                                if(json[i].personal=="verdadero" && json[i].mi_nombre!=json[i].nombre && json[i].mi_apellido!=json[i].apellido){
                                                string += '<p>'+ json[i].mi_nombre +' '+ json[i].mi_apellido +'</a> < <a href="'+ json[i].url_perfil2 +'">'+ json[i].nombre +' '+ json[i].apellido +'</a></p>';  
                                                }else{
                                                string += '<p>'+ json[i].nombre +' '+ json[i].apellido +'</p></a>';   
                                                }
                                                string += '<hr>';
                                                string += '<p>'+ json[i].mensaje +'</p>';
                                                if(json[i].fav_val=="done"){
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                                  }else{
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartw.png" onclick="fav_pu('+json[i].id_publicacion+', this); traer2();" class="imgp">';
                                                    }
                                                   
                                      }
                                      if(json[i].t_publicacion=="mixto"){

                                                string += '<a href="'+ json[i].url_perfil +'"><img src="../'+ json[i].imagen+'" alt="" class="imgcoment">';
                                                string += '</div>';
                                                string += '<div class="col-md-10">';
                                                if(json[i].personal=="verdadero" && json[i].mi_nombre!=json[i].nombre && json[i].mi_apellido!=json[i].apellido){
                                                string += '<p>'+ json[i].mi_nombre +' '+ json[i].mi_apellido +'</a> < <a href="'+ json[i].url_perfil2 +'">'+ json[i].nombre +' '+ json[i].apellido +'</a></p>';  
                                                }else{
                                                string += '<p>'+ json[i].nombre +' '+ json[i].apellido +'</p></a>';   
                                                }
                                                 string += '<hr> ';
                                                string += '<img src="../'+ json[i].img +'" class="img_coment" style="border-radius: 5%;">';
                                                 string += '<hr>';
                                                string += '<p>'+ json[i].mensaje +'</p>';
                                                if(json[i].fav_val=="done"){
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                                  }else{
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartw.png" onclick="fav_pu('+json[i].id_publicacion+', this); traer2();" class="imgp">';
                                                    }
                                                   
                                      }
                                      if(json[i].t_publicacion=="foto"){

                                                string += '<a href="'+ json[i].url_perfil +'"><img src="../'+ json[i].imagen+'" alt="" class="imgcoment">';
                                                string += '</div>';
                                                string += '<div class="col-md-10">';
                                                if(json[i].personal=="verdadero" && json[i].mi_nombre!=json[i].nombre && json[i].mi_apellido!=json[i].apellido){
                                                string += '<p>'+ json[i].mi_nombre +' '+ json[i].mi_apellido +'</a> < <a href="'+ json[i].url_perfil2 +'">'+ json[i].nombre +' '+ json[i].apellido +'</a></p>';  
                                                }else{
                                                string += '<p>'+ json[i].nombre +' '+ json[i].apellido +'</p></a>';   
                                                }
                                                 string += '<hr> ';
                                                string += '<img src="../'+ json[i].img +'" class="img_coment" style="border-radius: 5%;">';
                                                 string += '<hr>';
                                                if(json[i].fav_val=="done"){
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                                  }else{
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartw.png" onclick="fav_pu('+json[i].id_publicacion+', this); traer2();" class="imgp">';
                                                    }
                                                   
                                      }
                                                string += '</div>'; 
                                                string += '</div>'; 
                                                string += '</div>';                                  


                                 }
                                 $("#contenido").html(string);
                }
                                
                                 

                                                  $("input[name='img2']").on("change", function(){
                                                      if($("#file").val()!=""){
                                                        var filename = $('#file').val().replace(/C:\\fakepath\\/i, '');
                                                           var formData = new FormData($("#formulario2")[0]);
                                                              var url= "../includes/previo_post.php";
                                                              $.ajax({
                                                                  type: "POST",                    
                                                                  url: url,                
                                                                  data: formData,        
                                                                  contentType: false,
                                                                  processData: false,
                                                                  success: function(data){
                                                                      var json = eval("(" + data + ")");
                                                                      if(json.res=="success"){
                                                                        $("#imagen_w").val(json.ancho);
                                                                        $("#imagen_h").val(json.largo);
                                                                        $("#tipo").val(json.tipo);
                                                                        $("#file").css({visibility:"hidden",opacity:"0"});
                                                                        var string='';
                                                                        string += '<img src="../'+ json.imagen +'" width="70%" style="border-radius: 5%;">';
                                                                        $("#filename").val(filename);
                                                                        $("#src_crop").val(json.imagen);
                                                                        $("#tipo_img").val(json.tipo);
                                                                        $("#wid").val(json.ancho);
                                                                        $("#hei").val(json.largo);
                                                                        $("#addimg").html(string);
                                                                      }
                                                                      if(json.res=="carpeta"){
                                                                        Swal.fire(
                                                                          'Fallo al mover archivo',
                                                                          'Oops, algo salio mal.',
                                                                          'error'
                                                                          )
                                                                      }
                                                                      if(json.res=="formato"){
                                                                        Swal.fire(
                                                                          'Formato incorrecto',
                                                                          'Tu imagen debe ser de extensión jpg, jpeg, o png. No debe tener un peso superior a 2MB y no debe superar los 2000 píxeles de largo por 2000 píxeles de ancho.',
                                                                          'error'
                                                                          )
                                                                      }
                                                                      if(json.res=="vacio"){
                                                                        Swal.fire(
                                                                          'Contenido vacío',
                                                                          'Debes seleccionar primero una imagen de tu preferencia.',
                                                                          'error'
                                                                          )
                                                                      }                                                   
                                                                  }
                                                              });//end-ajax
                                                      }
                                                  });//end-accion-btn
                            }
                    
                    }); //end-ajax  
            } //end-function

        function traer(id) {
            $("#contenido").html("");
            $.ajax({
                    type: "POST",
                    url: "../includes/traer.php",
                    data: {id : id},
                    success: function (data) {
                        var json = eval("(" + data + ")");
                            if (json[0].res == "fail") {
                                Swal.fire(
                                    'Error',
                                    'Oops.. Hubo un problema',
                                    'error'
                                )
                            } else {
                              for (var i = 0; i<json.length; i++) {
                                json[i].id_publicacion=parseInt(json[i].id_publicacion);
                              }
                              json.sort(function(a, b){
                                  return a.id_publicacion - b.id_publicacion;
                              });
                              json.reverse();
                              if (json.length > 0) {
                                    var string='';
                                        string += '<div class="creapublic">';
                                        string += '<form id="formulario2">';
                                        string += '<textarea placeholder="Escribe un comentario.." id="public"></textarea>';
                                        string += '<div id="addimg"></div>'; 
                                        string += '<label for="file">';
                                        string += '<img src="../assets/img/foto.png" alt="" aria-hidden="true" class="fotopublic" data-toggle="tooltip" data-placement="bottom" title="Agregar una imagen">';                 
                                        string += '<input type="file" accept="image/*" name="img2" id="file" style="display: none;" class="btn file">';
                                        string += '</label>';                                        
                                        string += '<a onclick="enviar();" class=" btn public">Publicar</a>';
                                        string += '</form>';
                                        string += '</div>'; 
                                        string += '  <input type="hidden" id="filename" name="filename">';
                                        string += '  <input type="hidden" id="src_crop" name="src_crop">';
                                        string += '  <input type="hidden" id="tipo_img" name="tipo_img">';
                                        string += '  <input type="hidden" id="wid" name="wid">';
                                        string += '  <input type="hidden" id="hei" name="hei">';
                                    for(var i=0; i<json.length-1; i++){
                                    string += '<div class="cajacomentario">';
                                    string += '<div class="row">';
                                    string += '<div class="col-md-2">';
                                      if(json[i].t_publicacion=="texto"){

                                                string += '<a href="'+ json[i].url_perfil +'"><img src="../'+ json[i].imagen+'" alt="" class="imgcoment">';
                                                string += '</div>';
                                                string += '<div class="col-md-10">';
                                                if(json[i].personal=="verdadero" && json[i].otro_nombre!=json[i].nombre && json[i].otro_apellido!=json[i].apellido){
                                                string += '<p>'+ json[i].otro_nombre +' '+ json[i].otro_apellido +'</a> < <a href="'+ json[i].url_perfil2 +'">'+ json[i].nombre +' '+ json[i].apellido +'</a></p>';  
                                                }else{
                                                string += '<p>'+ json[i].nombre +' '+ json[i].apellido +'</p></a>';   
                                                }
                                                string += '<hr>';
                                                string += '<p>'+ json[i].mensaje +'</p>';
                                                if(json[i].fav_val=="done"){
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                                  }else{
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartw.png" onclick="fav_pu('+json[i].id_publicacion+', this); traer('+ id +');" class="imgp">';
                                                    }
                                                   
                                      }
                                      if(json[i].t_publicacion=="mixto"){

                                                string += '<a href="'+ json[i].url_perfil +'"><img src="../'+ json[i].imagen+'" alt="" class="imgcoment">';
                                                string += '</div>';
                                                string += '<div class="col-md-10">';
                                                if(json[i].personal=="verdadero" && json[i].otro_nombre!=json[i].nombre && json[i].otro_apellido!=json[i].apellido){
                                                string += '<p>'+ json[i].otro_nombre +' '+ json[i].otro_apellido +'</a> < <a href="'+ json[i].url_perfil2 +'">'+ json[i].nombre +' '+ json[i].apellido +'</a></p>';  
                                                }else{
                                                string += '<p>'+ json[i].nombre +' '+ json[i].apellido +'</p></a>';   
                                                }
                                                 string += '<hr> ';
                                                string += '<img src="../'+ json[i].img +'" class="img_coment" style="border-radius: 5%;">';
                                                 string += '<hr>';
                                                string += '<p>'+ json[i].mensaje +'</p>';
                                                if(json[i].fav_val=="done"){
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                                  }else{
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartw.png" onclick="fav_pu('+json[i].id_publicacion+', this); traer('+ id +');" class="imgp">';
                                                    }
                                                   
                                      }
                                      if(json[i].t_publicacion=="foto"){

                                                string += '<a href="'+ json[i].url_perfil +'"><img src="../'+ json[i].imagen+'" alt="" class="imgcoment">';
                                                string += '</div>';
                                                string += '<div class="col-md-10">';
                                                if(json[i].personal=="verdadero" && json[i].otro_nombre!=json[i].nombre && json[i].otro_apellido!=json[i].apellido){
                                                string += '<p>'+ json[i].otro_nombre +' '+ json[i].otro_apellido +'</a> < <a href="'+ json[i].url_perfil2 +'">'+ json[i].nombre +' '+ json[i].apellido +'</a></p>';  
                                                }else{
                                                string += '<p>'+ json[i].nombre +' '+ json[i].apellido +'</p></a>';   
                                                }
                                                 string += '<hr> ';
                                                string += '<img src="../'+ json[i].img +'" class="img_coment" style="border-radius: 5%;">';
                                                 string += '<hr>';
                                                if(json[i].fav_val=="done"){
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                                  }else{
                                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartw.png" onclick="fav_pu('+json[i].id_publicacion+', this); traer('+ id +');" class="imgp">';
                                                    }
                                                   
                                      }
                                    string += '</div>'; 
                                    string += '</div>'; 
                                    string += '</div>'; 
                                 }
                                 $("#contenido").html(string);
                                }
                                              $("input[name='img2']").on("change", function(){
                                                      if($("#file").val()!=""){
                                                        var filename = $('#file').val().replace(/C:\\fakepath\\/i, '');
                                                           var formData = new FormData($("#formulario2")[0]);
                                                              var url= "../includes/previo_post.php";
                                                              $.ajax({
                                                                  type: "POST",                    
                                                                  url: url,                
                                                                  data: formData,        
                                                                  contentType: false,
                                                                  processData: false,
                                                                  success: function(data){
                                                                      var json = eval("(" + data + ")");
                                                                      if(json.res=="success"){
                                                                        $("#imagen_w").val(json.ancho);
                                                                        $("#imagen_h").val(json.largo);
                                                                        $("#tipo").val(json.tipo);
                                                                        $("#file").css({visibility:"hidden",opacity:"0"});
                                                                        var string='';
                                                                        string += '<img src="../'+ json.imagen +'" width="70%" style="border-radius: 5%;">';
                                                                        $("#filename").val(filename);
                                                                        $("#src_crop").val(json.imagen);
                                                                        $("#tipo_img").val(json.tipo);
                                                                        $("#wid").val(json.ancho);
                                                                        $("#hei").val(json.largo);
                                                                        $("#addimg").html(string);
                                                                      }
                                                                      if(json.res=="carpeta"){
                                                                        Swal.fire(
                                                                          'Fallo al mover archivo',
                                                                          'Oops, algo salio mal.',
                                                                          'error'
                                                                          )
                                                                      }
                                                                      if(json.res=="formato"){
                                                                        Swal.fire(
                                                                          'Formato incorrecto',
                                                                          'Tu imagen debe ser de extensión jpg, jpeg, o png. No debe tener un peso superior a 2MB y no debe superar los 2000 píxeles de largo por 2000 píxeles de ancho.',
                                                                          'error'
                                                                          )
                                                                      }
                                                                      if(json.res=="vacio"){
                                                                        Swal.fire(
                                                                          'Contenido vacío',
                                                                          'Debes seleccionar primero una imagen de tu preferencia.',
                                                                          'error'
                                                                          )
                                                                      }                                                   
                                                                  }
                                                              });//end-ajax
                                                      }
                                                  });//end-accion-btn
                            }
                    }
                    }); //end-ajax  
            } //end-function

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

        function no_seguir(id_user) {

          Swal.fire({
              title: '¿Seguro quieres dejar de seguir éste usuario?',
              type: 'question',
              cancelButtonText: 'Volver',
              showCancelButton: true,
              confirmButtonText: '¡Dejar de seguir!',
              cancelButtonColor: '#d33',
              confirmButtonColor: '#3085d6',
            }).then((result) => {
              if (result.value) {
                $(".loader-page").css({visibility:"visible",opacity:"1"})
                  $.ajax({
                        type: "POST",
                        url: "../includes/no_seguir.php",
                        data: {id_no_seguir:id_user},
                        success: function (data) {
                          $(".loader-page").css({visibility:"hidden",opacity:"0"})
                            var json = eval("(" + data + ")");
                            if (json.res == "success") {
                                Swal.fire(
                                    '¡Has dejado de seguir a este usuario!',
                                    'Ya no verás más publicaciones de éste usuario en tu perfil.',
                                    'success'
                                        ).then(function () {
                                              window.location.reload();
                                    })
                            }
                        }
                    }); //end-ajax
              }
            })
            
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

        function solicitar_colectivo(pen) {
            $.ajax({
                type: "POST",
                url: "../includes/solicitar.php",
                data: {id_pen : pen},
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json.res == "success") {
                                    Swal.fire(
                                        '¡Has solicitado unirte!',
                                        'Una vez que el administrador de la tarea apruebe tu solicitud podrás contribuir con esta comunidad.',
                                        'success'
                                    ).then(function () {
                                        window.location.reload();  
                                    })
                    }
                }
            }); //end-ajax
        } //end-function

        function apro_sol_pend(id_user, id_pen){
            $.ajax({
                type: "POST",
                url: "../includes/apro_sol_pend.php",
                data: {id_user : id_user,
                        id_pen : id_pen},
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json.res == "success") {
                       Swal.fire(
                          '¡Has aprobado la solicitud!',
                          'Ahora hay un nuevo miembro colaborando en tu tarea.',
                          'success'
                       ).then(function () {
                          window.location.reload();  
                       })      
                    }
                }
            }); //end-ajax
        }

        function rech_sol_pend(id_user, id_pen){
            $.ajax({
                type: "POST",
                url: "../includes/rech_sol_pend.php",
                data: {id_user : id_user,
                        id_pen : id_pen},
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json.res == "success") {
                       Swal.fire(
                          '¡Has rechazado la solicitud!',
                          'Recuerda que otros usuarios también pueden contribuir a tu tarea.',
                          'success'
                       ).then(function () {
                          window.location.reload();  
                       })      
                    }
                }
            }); //end-ajax
        }

        function solici_pen_list(pen) {
            $.ajax({
                type: "POST",
                url: "../includes/solici_pen_list.php",
                data: {id_pen : pen},
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json[0].res == "success") {
                                var string = '';
                                string += '<div class="cajacomentario1">';
                                string += '<hr> ';
                                for (var i = 1; i < json.length; i++) {
                                  string += '<img class="imgcoment" src="../'+json[i].imagen+'"><p>'+json[i].nombre+' '+json[i].apellido+'</p>';
                                  string += '<button type="button" onclick="apro_sol_pend('+json[i].id_user+', '+pen+');" class="btn botonn">Aceptar solicitud</button>';
                                  string += '<button type="button" onclick="rech_sol_pend('+json[i].id_user+', '+pen+');"  class="btn botonn">Rechazar solicitud</button>';
                                }
                                string += '<hr>';
                                string += '</div>';
                              $("#contenido").append(string);
                    }
                }
            }); //end-ajax
        } //end-function

        function mis_notitas_please(){
          var url = document.URL;
            url = url.split('html/');
            var link = url[1];
            var lugar = "perfil";
          $.ajax({
                    type: "POST",
                    url: "../includes/ver_pen.php",
                    data: {link: link,
                          lugar : lugar},
                    success: function (data) {
                        var json = eval("(" + data + ")");
                        if (json[0].res == "success") {
                          var string = '';
                            string += '<div class="box_notita">';
                            var contador=1
                                    for (var i = 1; i < json.length; i++) {

                                        string += '    <div class="notitas1_'+contador+'">';
                                        contador++
                                        if(contador==7){
                                          contador=1;
                                        }
                                        var cadena0 = json[i].titulo_pen;
                                        if(cadena0.length>30){
                                            cadena0 = cadena0.slice(0, 30);
                                            cadena0 += "...";
                                        }
                                        string += '        <h6>'+cadena0+'</h6>';
                                        var cadena = json[i].resume_pen;
                                        if(cadena.length>40){
                                            cadena = cadena.slice(0, 40);
                                            cadena += "...";
                                        }
                                        string += '        <li>'+cadena+'</li><div class="footnotitas1">';
                                        if(json[i].fav_val=="done"){
                                          string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                          }else{
                                          string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartempty.png" class="imgp">';                                    
                                          }
                                        string += '        </div>';   
                                    string += '</div>  ';
                                }
                            }
                         $("#here").html(string);
                    }
            }); //end-ajax            
        }

            function perfil(){
                      var url = document.URL;
                      url = url.split('html/');
                      var link = url[1];
                            $.ajax({
                                    type: "POST",
                                    url: "../includes/url_perfil.php",
                                    data: {link : link},
                                    success: function (data) {
                                        $("#contenido-chat").css({visibility:"hidden",opacity:"0"})
                                        var json = eval("(" + data + ")");
                                        if(json.res=="success"){


                                        //Perfil de usuario

                                        if(json.tipo=="user"){
                                            var string=json.nombre+" "+json.apellido;
                                            $("#user_name").html(string);
                                            var session_url = json.url_perfil;
                                            $("#url_temp").val(session_url);
                                            $("#img_temp").val(json.imagen);
                                            $("#ruta").attr("href", link);
                                            mis_notitas_please();
                                            if (session_url==link){
                                              $("#seguir").css({visibility:"hidden",opacity:"0"})
                                              $("#mod").css({visibility:"visible",opacity:"1"})
                                              $("#mis_inv").attr("onclick", "mis_inv("+ link +");");
                                              $("#mis_lib").attr("onclick", "mis_lib("+ link +");");
                                              $("#mod").attr("onclick", "mod_user();");
                                              $("#seguir2").css({visibility:"hidden",opacity:"0"})
                                              traer2();
                                            }else{
                                              $("#mod").css({visibility:"hidden",opacity:"0"})
                                              $("#mod").attr("onclick", "");
                                              $("#seguir").css({visibility:"visible",opacity:"1"})
                                              $("#seguir2").css({visibility:"visible",opacity:"1"})
                                              $("#mis_inv").attr("onclick", "mis_inv("+ link+");");
                                              $("#mis_lib").attr("onclick", "mis_lib("+ link +");");
                                                if(json.sigue=="verdadero"){
                                                  document.getElementById("seguir").innerHTML="¡Ya sigues a este usuario!";
                                                  $("#seguir").attr("onclick", "no_seguir("+json.id_user+");");
                                                  $("#seguir").attr("class", "btn boton");
                                                }else{
                                                  $("#seguir").attr("onclick", "seguir("+json.id_user+");");
                                                  document.getElementById("seguir").innerHTML="Seguir";
                                                  $("#seguir").attr("class", "btn boton1");
                                                }
                                              traer(json.id_user);
                                            }
                                        }

                                        //Perfil de Pendiente

                                        if(json.tipo=="pendiente"){
                                            $("#contenido4").html("");
                                            $(".nodo1").css({visibility:"hidden",opacity:"0"});
                                            $("#user_name").html(json.titulo_pen);
                                            $(".nodo1").css({visibility:"hidden",opacity:"0"});
                                            $(".nodo4").css({visibility:"hidden",opacity:"0"});
                                            if(json.fundador=="verdadero"){
                                              solici_pen_list(json.id_pen);
                                            }
                                            if(json.valido=="falso"){
                                              if(json.status=="pendiente"){
                                                document.getElementById("seguir").innerHTML="Has solicitado unirte";
                                                $("#seguir").attr("onclick", "");
                                                $("#seguir").attr("class", "btn boton");
                                              }else{
                                                document.getElementById("seguir").innerHTML="Unirse a esta tarea";
                                                $("#seguir").attr("onclick", "solicitar_colectivo("+json.id_pen+");");
                                                $("#seguir").attr("class", "btn boton1");
                                              }
                                            }else{
                                              document.getElementById("seguir").innerHTML="Eres parte de esta tarea";
                                              $("#seguir").attr("onclick", "salir_colectivo("+json.id_pen+");");
                                              $("#seguir").attr("class", "btn boton");
                                            }
                                            
                                            ver_pen(json.id_pen);
                                        }

                                      }
                                        if(json.res=="vacio"){
                                            window.location.href="nofound.html";
                                        }
                                    }
                            }); //end-ajax
            }


        function people() {
            $.ajax({
                type: "POST",
                url: "../includes/people.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    var string ='';
                    for (var i = 0; i < json.length; i++) {
                      var comunes = json[i].comunes;
                      var numero = Math.floor(Math.random()*comunes.length);
                      var comun = comunes[numero];
                      string +='<a href="'+json[i].url_perfil+'"><div class="cajaproyy">';
                      string +='   <img src="../'+json[i].imagen+'">';
                      string +='    <p>'+json[i].nombre+' '+ json[i].apellido +'</p>';
                                  if(comun=="t_int"){
                                    string +='<center><span class="badge badge-info">Tecnologías de<br> Internet</span></center>';
                                   }
                                   if(comun=="pro"){
                                    string +='<center><span class="badge badge-dark">Programación</span></center>';
                                   }
                                   if(comun=="arc"){
                                    string +='<center><span class="badge badge-success">Arquitectura y Sistemas</span></center>';
                                   }
                                   if(comun=="red"){
                                    string +='<center><span class="badge badge-primary">Redes</span></center>';
                                   }
                                   if(comun=="org_t"){
                                    string +='<center><span class="badge badge-danger">Organizaciones Medidas<br> por Tecnologías</span></center>';
                                   }
                                   if(comun=="edu_t"){
                                    string += '<center><span class="badge badge-success">Educación medida<br> por las TIL</span></center>';
                                   }
                                   if(comun=="block"){
                                    string += '<center><span class="badge badge-warning">Arquitecturas de<br> Alto Rendimiento</span></center>';
                                   }
                                   if(comun=="sft_pu"){
                                    string += '<center><span class="badge badge-primary">Software Público</span></center>';
                                   }
                                   if(comun=="innova"){
                                    string += '<center><span class="badge badge-warning">Innovaciones Tecnológicas</span></center>';
                                   }
                                   if(comun=="apps"){
                                    string += '<center><span class="badge badge-info">Aplicaciones</span></center>';
                                   }
                                   if(comun=="iot"){
                                    string += '<center><span class="badge badge-dark">Internet de las Cosas</span></center>';
                                   }
                                   if(comun=="robot"){
                                    string += '<center><span class="badge badge-primary">Robótica</span></center>';
                                   }
                                   if(comun=="geo"){
                                    string += '<center><span class="badge badge-light">Sistemas de<br> Información Geográficos</span></center>';
                                   }
                                   if(comun=="h_lib"){
                                    string += '<center><span class="badge badge-secondary">Hardware Libre</span></center>';
                                   }
                                   if(comun=="gob_dig"){
                                    string += '<center><span class="badge badge-light">Gobierno Digital</span></center>';
                                   }
                                   if(comun=="inter"){
                                    string += '<center><span class="badge badge-dark">Interoperabilidad</span></center>';
                                   }
                                   if(comun=="datos_a"){
                                    string += '<center><span class="badge badge-secondary">Datos Abiertos</span></center>';
                                   }
                                   if(comun=="ai"){
                                    string += '<center><span class="badge badge-light">Inteligencia Artificial</span></center>';
                                   }
                                   if(comun=="tresd"){
                                    string += '<center><span class="badge badge-light">Diseño 3D</span></center>';
                                   }
                                   if(comun=="cont_edu"){
                                    string += '<center><span class="badge badge-info">Contenidos Educativos</span></center>';
                                   }
                      string +='</div></a>';
                    }
                    
                    $("#people").html(string);
                }
            }); //end-ajax
        } //end-function
        function para_mis_inv(id){
            my_alert();
            ver_inv(id);
        }

        function para_mis_lib(id){
            my_alert();
            ver_lib(id);
        }
        function docs() {
            $.ajax({
                type: "POST",
                url: "../includes/docs.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    var string ='';
                    for (var i = 0; i < json.length; i++) {
                      var comunes = json[i].comunes;
                      var numero = Math.floor(Math.random()*comunes.length);
                      var comun = comunes[numero];
                      if(json[i].tipo_doc=="L"){
                          string +='<div onclick="para_mis_lib('+json[i].id_doc+')" class="cajaproy_inv">';
                      }
                      if(json[i].tipo_doc=="I"){
                          string +='<div onclick="para_mis_inv('+json[i].id_doc+')" class="cajaproy_inv">';
                      }
                        string +='<img src="../assets/img/proy_default.jpg">';
                        string +='<div class="orden">';
                                  if(comun=="t_int"){
                                    string +='<center><span class="badge badge-info">Tecnologías de<br> Internet</span></center>';
                                   }
                                   if(comun=="pro"){
                                    string +='<center><span class="badge badge-dark">Programación</span></center>';
                                   }
                                   if(comun=="arc"){
                                    string +='<center><span class="badge badge-success">Arquitectura y Sistemas</span></center>';
                                   }
                                   if(comun=="red"){
                                    string +='<center><span class="badge badge-primary">Redes</span></center>';
                                   }
                                   if(comun=="org_t"){
                                    string +='<center><span class="badge badge-danger">Organizaciones Medidas<br> por Tecnologías</span></center>';
                                   }
                                   if(comun=="edu_t"){
                                    string += '<center><span class="badge badge-success">Educación medida<br> por las TIL</span></center>';
                                   }
                                   if(comun=="block"){
                                    string += '<center><span class="badge badge-warning">Arquitecturas de<br> Alto Rendimiento</span></center>';
                                   }
                                   if(comun=="sft_pu"){
                                    string += '<center><span class="badge badge-primary">Software Público</span></center>';
                                   }
                                   if(comun=="innova"){
                                    string += '<center><span class="badge badge-warning">Innovaciones Tecnológicas</span></center>';
                                   }
                                   if(comun=="apps"){
                                    string += '<center><span class="badge badge-info">Aplicaciones</span></center>';
                                   }
                                   if(comun=="iot"){
                                    string += '<center><span class="badge badge-dark">Internet de las Cosas</span></center>';
                                   }
                                   if(comun=="robot"){
                                    string += '<center><span class="badge badge-primary">Robótica</span></center>';
                                   }
                                   if(comun=="geo"){
                                    string += '<center><span class="badge badge-light">Sistemas de<br> Información Geográficos</span></center>';
                                   }
                                   if(comun=="h_lib"){
                                    string += '<center><span class="badge badge-secondary">Hardware Libre</span></center>';
                                   }
                                   if(comun=="gob_dig"){
                                    string += '<center><span class="badge badge-light">Gobierno Digital</span></center>';
                                   }
                                   if(comun=="inter"){
                                    string += '<center><span class="badge badge-dark">Interoperabilidad</span></center>';
                                   }
                                   if(comun=="datos_a"){
                                    string += '<center><span class="badge badge-secondary">Datos Abiertos</span></center>';
                                   }
                                   if(comun=="ai"){
                                    string += '<center><span class="badge badge-light">Inteligencia Artificial</span></center>';
                                   }
                                   if(comun=="tresd"){
                                    string += '<center><span class="badge badge-light">Diseño 3D</span></center>';
                                   }
                                   if(comun=="cont_edu"){
                                    string += '<center><span class="badge badge-info">Contenidos Educativos</span></center>';
                                   }
                            string +='<p>'+json[i].titulo_doc+'</p>';
                            if(json[i].tipo_doc=="L"){
                             string +='<h6>Libro</h6>';
                            }
                            if(json[i].tipo_doc=="I"){
                             string +='<h6>Investigación</h6>';
                            }
                        string +='</div>';
                    string +='</div>';
                    }
                    
                    $("#data").html(string);
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
                            perfil();
                              var nombre = json.nombre;
                              var imagen = json.imagen;
                              var enlace = json.url_perfil;
                              $("#url_temp").val(enlace);
                              $("#avatar").html(nombre);
                              document.getElementById('mi_enlace').setAttribute("href", enlace);
                              document.getElementById('ava_img').setAttribute("src", "../"+imagen);
                              people();
                              docs();
                              getNotification();
                        }
                        
                    }
                }
            }); //end-ajax
        } //end-function

        function cerrar_ref(esto, id_noti){
                                    esto.setAttribute("style", "animation: fadeInUp 1.5s linear;");
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
                                    esto.setAttribute("style", "animation: fadeInUp 1.5s linear;");
                                          $.ajax({
                                              type: "POST",
                                              url: "../includes/marcar_noti.php",
                                              data: {id_noti: id_noti},
                                              success: function (data) {
                                              }
                                          }); //end-ajax
                                    setTimeout(function(){
                                    esto.setAttribute("style", "visibility:'hidden'; opacity: 0");
                                    }, 1500)
                                    
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
                                      string +='<div onclick="cerrar_ref(this, '+json[i].id_notify+');" class="list-group">';          
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
                                      string +='<div onclick="cerrar(this, '+json[i].id_notify+');"  class="list-group">';          
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
                                      string +='<div onclick="cerrar(this, '+json[i].id_notify+');" class="list-group">';          
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

        
        function abre_plus(){
          document.getElementById('box-plus-icon').setAttribute("class", "box-plus-icon1");
          $("#box-plus-icon").css({visibility:"visible",opacity:"1"});
          $(".box-plus").css({visibility:"hidden",opacity:"0"});
        }
        function cierra_plus(){
          document.getElementById('box-plus-icon').setAttribute("class", "box-plus-icon0");
          setTimeout(function(){ $("#box-plus-icon").css({visibility:"hidden",opacity:"0"});       
          $(".box-plus").css({visibility:"visible",opacity:"1"});
           }, 500);
        }

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

        var myIframe = document.getElementById('mapa');
            myIframe.onload = function () {
                myIframe.contentWindow.scrollTo(400,0);
            }
        
        function notitas2(){
          my_alert();
          pendiente();
        }

        function modificarme(){
          my_alert();
          mod_user();
        }

        function registrar_pen(){
          my_alert();
          reg_pend();
        }

        $('#mapa').load(function(){ 
                  var url = document.URL;
                  url = url.split('html/');
                  var actual = url[1];
                var iframe = $('#mapa').contents(); 

                iframe.find("#mis_notas").click(function(){ 
                  notitas2();
                });

                iframe.find("#img_user").click(function(){
                   var my_url = $("#url_temp").val();
                    if(actual==my_url){
                      modificarme();
                    }
                });

                iframe.find("#mis_libros").click(function(){
                  my_alert();
                  mis_lib(actual);
                });

                iframe.find("#mis_investigaciones").click(function(){
                  my_alert();
                  mis_inv(actual);
                });

                      var url = document.URL;
                      url = url.split('html/');
                      var link = url[1];
                $.ajax({
                  type: "POST",
                  url: "../includes/give_me.php",
                  data: {link: link},
                  success: function (data) {
                    var json = eval("(" + data + ")");
                    if(json.res=="success"){
                    iframe.find("#img_user").attr("src", "../"+json.imagen);
                    }
                   }
                }); //end-ajax
        }); 
        $(document).ready(function ($) {
          check();        
          $("#box-plus-icon").css({visibility:"hidden",opacity:"0"});
          $('[data-toggle= "tooltip" ]').tooltip();
        });