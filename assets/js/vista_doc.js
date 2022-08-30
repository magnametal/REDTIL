        function to_me(id_doc, my){
                    $.ajax({
                        type: "POST",
                        url: "../includes/my_book.php",
                        data: {id_doc : id_doc},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            if (json.res == "success") {
                                my.setAttribute("src", "../assets/img/my.png");
                            }
                        }
                    }); //end-ajax
        }

function seleccionar(tag){
    var clase=tag.getAttribute("class");
    if(clase=="p-2 bd-highlight"){
        tag.setAttribute("class", "p-3 bd-highlight");
    }
    if(clase=="p-3 bd-highlight"){
        tag.setAttribute("class", "p-2 bd-highlight");
    }
}

function reg_tags_pend(){
    var seleccionadas = $("#tematicas").find("div[class='p-3 bd-highlight']");
    if(seleccionadas.length<1){
        Swal.fire(
            'No has seleccionado suficientes temáticas',
            'Debes seleccionar al menos 1 temática para continuar.',
            'warning'
        )
    }else{
        if(seleccionadas.length>9){
        Swal.fire(
            '¡Demasiadas temáticas!',
            'Debe seleccionar un máximo de 9 temáticas.',
            'warning'
        )}else{
            var vector = new Array();
                                                                
            for (var i = 0; i < seleccionadas.length; i++) {
                var id = seleccionadas[i].getAttribute("id");
                vector.push(id);
            }
            var tit_pen = $("#titulo_pen").val();
            var desc_pen = document.getElementById('desc_pen').value;
            tit_pen = tit_pen.replace(/'/i, '');
            tit_pen = tit_pen.replace(/<script>/i, '');
            desc_pen = desc_pen.replace(/'/i, '');
            desc_pen = desc_pen.replace(/<script>/i, '');
            if(tit_pen!="" && desc_pen!=""){
                  var result = ""
                  var peque = 13;
                  var caracteres = 'ABCDEFGHIJKMNLOPQRSTUVWXYZabcdefghijkmnlopqrstuvwxyz0123456789';
                  var caracterestam = caracteres.length;
                  for (var i = 0; i < peque; i++) {
                    result +=  caracteres.charAt(Math.floor(Math.random()* caracterestam));
                  }
                  result = "perfil.html?nota="+result;
            $.ajax({
                    type: "POST",
                    url: "../includes/reg_pen.php",
                    data: {'array': JSON.stringify(vector),
                            tit_pen : tit_pen,
                            desc_pen : desc_pen,
                            link : result},
                    success: function (data) {
                        var json = eval("(" + data + ")");
                        if (json.res == "success") {
                           Swal.fire(
                                '¡Registro Exitoso!',
                                'Registraste tu proyecto pendiente exitosamente.',
                                'success'
                            ).then(function () {
                                window.location.reload();
                            })
                        }
                        if (json.res == "fail") {
                            Swal.fire(
                                'Oops',
                                'Algo salio mal, por favor selecciona las temáticas nuevamente.',
                                'error'
                            ).then(function () {
                                reg_pend();
                            })
                            
                        }
                    }
            }); //end-ajax  

            }else{
                            Swal.fire(
                                '¡Campos Vacíos!',
                                'Por favor verifica que los campos no esten vacíos.',
                                'error'
                            ).then(function () {
                                reg_pend();
                            })
            }
        }
        
    }
}

function reg_pend(){

 var string = '';
        string +='<div class="ad_min">';
        string += '<h4>Registrar Nueva Tarea Pendiente</h4>';
        string += '<input type="text" class="form-control" id="titulo_pen" maxlength="100" name="titulo_pen" placeholder="Título de la tarea">';
        string += '<p>Selecciona las temáticas de tu proyecto</p>';
        string += '<br><form id="tematicas">';
            string += '<div class="boxflex">   ';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="t_int"><p>Tecnologías de Internet</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="sft_pu"><p>Software Público</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="inter"><p >Interoperabilidad</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="tresd"><p>Diseño 3D</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="ai"><p>Inteligencia Artificial</p></div>';
            string += '</div>';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="apps"><p>Aplicaciones</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="arc"><p>Arquitectura y Sistemas</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="block"><p>Arquitecturas de Alto Rendimiento</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="cont_edu"><p>Contenidos Educativos</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="datos_a"><p>Datos Abiertos</p></div>';
            string += '</div>';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="edu_t"><p>Educación medida por las TIL</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="geo"><p>Sistemas de Información Geográficos</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="gob_dig"><p>Gobierno Digital</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="h_lib"><p>Hardware Libre</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="innova"><p>Innovaciones Tecnológicas</p></div>';
            string += '</div>';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="iot"><p>Internet de las Cosas</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="org_t"><p >Organizaciones medidas por Tecnologías</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="pro"><p>Programación</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="red"><p>Redes</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="robot"><p>Robótica</p></div>';
            string += '</div>';
            string += '</div>';
        string += '</form><br>'; 
        string += '<textarea name="desc_doc" id="desc_pen" class="form-control" maxlength="5000" rows="5" placeholder="Describe la tarea..."></textarea>';
        string += '</div>';
        string += '    <input type="submit" class="btn boton1" onclick="reg_tags_pend();">';
        $("#contenido3").html(string);



}

function ver_pen(id){
                    $.ajax({
                        type: "POST",
                        url: "../includes/un_pen.php",
                        data: {id_pen : id},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                            if (json.res == "fail") {
                              Swal.fire(
                                '¡Error!',
                                'Ha ocurrido un error en en la carga de archivos.',
                                'error'
                                )
                            }else{
                                var string = '';
                              string += '<div class="fichaproy">';                              
                              string += '<div class="box-titulo">';
                              var string2 = "";
                              string2 += '<div class="box_notita">';
                              var numero = Math.floor(Math.random() * (7 - 1) + 1);
                                        string2 += '    <div class="notitas_'+numero+'">';
                                        var cadena0 = json.titulo_pen;
                                        if(cadena0.length>100){
                                            cadena0 = cadena0.slice(0, 100);
                                            cadena0 += "...";
                                        }
                                        string2 += '        <h6>'+cadena0+'</h6>';
                                        var cadena = json.resume_pen;
                                        if(cadena.length>200){
                                            cadena = cadena.slice(0, 200);
                                            cadena += "...";
                                        }
                                        string2 += '        <li>'+cadena+'</li><div class="footnotitas">';
                                        if(json.fav_val=="done"){
                                          string2 += '<span class="num">' + json.favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                          }else{
                                          string2 += '<span class="num">' + json.favs + '</span><img src="../assets/img/heartempty.png" class="imgp">';                                    
                                          }
                                        string2 += '        </div>';  
                              string2 += '</div>  ';
                              $("#here2").append(string2); 
                              string += '<h4>'+json.titulo_pen+'</h4>';
                              string += '</div>';
                              string += '<div class="box-body">';
                              string += '<li>'+json.resume_pen+'</li><div class="footnotitas">';
                              string += '</div>';   
                              string += '</div>';

                              string += '</div>';
                                   string += '<div> <h4>Temáticas: </h4>';
                                   if(json.t_int==1){
                                    string += '<span class="badge badge-danger">Tecnologías de Internet</span>';
                                   }
                                   if(json.pro==1){
                                    string += '<span class="badge badge-success">Programación</span>';
                                   }
                                   if(json.arc==1){
                                    string += '<span class="badge badge-danger">Arquitectura y Sistemas</span>';
                                   }
                                   if(json.red==1){
                                    string += '<span class="badge badge-secondary">Redes</span>';
                                   }
                                   if(json.org_t==1){
                                    string += '<span class="badge badge-dark">Organizaciones medidas por Tecnologías</span>';
                                   }
                                   if(json.edu_t==1){
                                    string += '<span class="badge badge-success">Educación medida por las TIL</span>';
                                   }
                                   if(json.block==1){
                                    string += '<span class="badge badge-warning">Arquitecturas de Alto Rendimiento</span>';
                                   }
                                   if(json.sft_pu==1){
                                    string += '<span class="badge badge-primary">Software Público</span>';
                                   }
                                   if(json.innova==1){
                                    string += '<span class="badge badge-warning">Innovaciones Tecnológicas</span>';
                                   }
                                   if(json.apps==1){
                                    string += '<span class="badge badge-info">Aplicaciones</span>';
                                   }
                                   if(json.iot==1){
                                    string += '<span class="badge badge-dark">Internet de las Cosas</span>';
                                   }
                                   if(json.robot==1){
                                    string += '<span class="badge badge-primary">Robótica</span>';
                                   }
                                   if(json.geo==1){
                                    string += '<span class="badge badge-light">Sistemas de Información Geográficos</span>';
                                   }
                                   if(json.h_lib==1){
                                    string += '<span class="badge badge-secondary">Hardware Libre</span>';
                                   }
                                   if(json.gob_dig==1){
                                    string += '<span class="badge badge-primary">Gobierno Digital</span>';
                                   }
                                   if(json.inter==1){
                                    string += '<span class="badge badge-dark">Interoperabilidad</span>';
                                   }
                                   if(json.datos_a==1){
                                    string += '<span class="badge badge-secondary">Datos Abiertos</span>';
                                   }
                                   if(json.ai==1){
                                    string += '<span class="badge badge-light">Inteligencia Artificial</span>';
                                   }
                                   if(json.tresd==1){
                                    string += '<span class="badge badge-light">Diseño 3D</span>';
                                   }
                                   if(json.cont_edu==1){
                                    string += '<span class="badge badge-info">Contenidos Educativos</span>';
                                   }
                                   string += '</div>';
                              string += '</div>';
                              string += '</div>';
                              string += '</div>';
                              if(json.valido=="verdadero"){
                                string += '<div class="creapublic">';                                
                                  string += '<textarea placeholder="Escribe un comentario.." id="public2"></textarea>';                  
                                  string += '<button onclick="enviar_coment_pen('+id+');" class="btn public">Publicar</button></form>';
                                string += '</div>'; 
                              }else{
                                  string += '<div class="cajacomentario1">';
                                      string += '<hr> ';
                                      string += '<p>Sólo los contribuyentes de la tarea pueden interactuar.</p>';
                                      string += '<hr>';
                                  string += '</div>';
                              }
                                string += '<div id="coments">';
                                string += '</div>   '; 
                                string += '</div>';
                              $("#contenido").append(string);
                                coments_pen(id);
                            }
                        }
                    })
}

function pendiente(){
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
                            var string = '';
                            if(json[0].miperfil=="F"){
                             string += '<h4>Tareas Pendientes de '+json[0].nombre+'</h4>';   
                            }else{
                             string += '<h4>Mis Tareas Pendientes</h4>';    
                            }
                        if (json[0].res == "success") {
                            string += '<div class="box_notita">';
                            var contador=1
                                    for (var i = 1; i < json.length; i++) {

                                        string += '    <div class="notitas_'+contador+'">';
                                        contador++
                                        if(contador==7){
                                          contador=1;
                                        }
                                        var cadena0 = json[i].titulo_pen;
                                        if(cadena0.length>100){
                                            cadena0 = cadena0.slice(0, 100);
                                            cadena0 += "...";
                                        }
                                        string += '    <a href="'+json[i].url_perfil+'">';
                                        string += '        <h6>'+cadena0+'</h6>';
                                        var cadena = json[i].resume_pen;
                                        if(cadena.length>200){
                                            cadena = cadena.slice(0, 200);
                                            cadena += "...";
                                        }
                                        string += '        <li>'+cadena+'</li></a><div class="footnotitas">';
                                        if(json[i].fav_val=="done"){
                                          string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                          }else{
                                          string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav_pen('+json[i].id_pen+', this);" class="imgp">';                                    
                                          }
                                        string += '            <span class="num">' + json[i].comen + '</span><img src="../assets/img/burbuja.png" class="imgp">';
                                        string += '        </div>';   
                                    string += '</div>  ';
                                }
                            }
                        if (json[0].res == "vacio") {
                            string += "<p>Sin elementos</p>";
                        }
                         $("#contenido3").html(string);
                    }
            }); //end-ajax            
}

      function municipios(estado) {
          var string = "<option value='municipio'>Municipio</option>";
          if(estado=="DISTRITO CAPITAL"){
            string += "<option value='Libertador (Caracas)'>Libertador (Caracas)</option>";
            $("#municipio").html(string);
          }
          if(estado=="AMAZONAS"){
            string += "<option value='Alto Orinoco (La Esmeralda)'>Alto Orinoco (La Esmeralda)</option>";
            string += "<option value='Atabapo (San Fernando de Atabapo)'>Atabapo (San Fernando de Atabapo)</option>";
            string += "<option value='Atures (Puerto Ayacucho)'>Atures (Puerto Ayacucho)</option>";
            string += "<option value='Autana (Isla Ratón)'>Autana (Isla Ratón)</option>";
            string += "<option value='Manapiare (San Juan de Manapiare)'>Manapiare (San Juan de Manapiare)</option>";
            string += "<option value='Maroa (Maroa)'>Maroa (Maroa)</option>";
            string += "<option value='Río Negro (San Carlos de Río Negro)'>Río Negro (San Carlos de Río Negro)</option>";
            $("#municipio").html(string);
          }
          if(estado=="ANZOATEGUI"){
            string += "<option value='Anaco (Anaco)'>Anaco (Anaco)</option>";
            string += "<option value='Aragua (Aragua de Barcelona)'>Aragua (Aragua de Barcelona)</option>";
            string += "<option value='Bolívar (Barcelona)'>Bolívar (Barcelona)</option>";
            string += "<option value='Bruzual (Clarines)'>Bruzual (Clarines)</option>";
            string += "<option value='Cajigal (Onoto)'>Cajigal (Onoto)</option>";
            string += "<option value='Carvajal (Valle de Guanape)'>Carvajal (Valle de Guanape)</option>";
            string += "<option value='Diego Bautista Urbaneja (Lechería)'>Diego Bautista Urbaneja (Lechería)</option>";
            string += "<option value='Freites (Cantaura)'>Freites (Cantaura)</option>";
            string += "<option value='Guanipa (San José de Guanipa)'>Guanipa (San José de Guanipa)</option>";
            string += "<option value='Guanta (Guanta)'>Guanta (Guanta)</option>";
            string += "<option value='Independencia (Soledad)'>Independencia (Soledad)</option>";
            string += "<option value='Libertad (San Mateo)'>Libertad (San Mateo)</option>";
            string += "<option value='McGregor (El Chaparro)'>McGregor (El Chaparro)</option>";
            string += "<option value='Miranda (Pariaguán)'>Miranda (Pariaguán)</option>";
            string += "<option value='Monagas (San Diego de Cabrutica)'>Monagas (San Diego de Cabrutica)</option>";
            string += "<option value='Peñalver (Puerto Píritu)'>Peñalver (Puerto Píritu)</option>";
            string += "<option value='Píritu (Píritu)'>Píritu (Píritu)</option>";
            string += "<option value='San Juan de Capistrano (Boca de Uchire)'>San Juan de Capistrano (Boca de Uchire)</option>";
            string += "<option value='Santa Ana (Santa Ana)'>Santa Ana (Santa Ana)</option>";
            string += "<option value='Simón Rodriguez (El Tigre)'>Simón Rodriguez (El Tigre)</option>";
            string += "<option value='Sotillo (Puerto La Cruz)'>Sotillo (Puerto La Cruz)</option>";
            $("#municipio").html(string);
          }

          if(estado=="APURE"){
            string += "<option value='Achaguas (Achaguas)'>Achaguas (Achaguas)</option>";
            string += "<option value='Biruaca (Biruaca)'>Biruaca (Biruaca)</option>";
            string += "<option value='Muñoz (Bruzual)'>Muñoz (Bruzual)</option>";
            string += "<option value='Páez (Guasdualito)'>Páez (Guasdualito)</option>";
            string += "<option value='Pedro Camejo (San Juan de Payara)'>Pedro Camejo (San Juan de Payara)</option>";
            string += "<option value='Rómulo Gallegos (Elorza)'>Rómulo Gallegos (Elorza)</option>";
            string += "<option value='San Fernando (San Fernando de Apure)'>San Fernando (San Fernando de Apure)</option>";
            $("#municipio").html(string);
          }

          if(estado=="ARAGUA"){
            
            string += "<option value='Bolívar (San Mateo)'>Bolívar (San Mateo)</option>";
            string += "<option value='Camatagua(Camatagua)'>Camatagua(Camatagua)</option>";
            string += "<option value='Francisco Linares Alcántara (Santa Rita)'>Francisco Linares Alcántara (Santa Rita)</option>";
            string += "<option value='Girardot (Maracay)'>Girardot (Maracay)</option>";
            string += "<option value='José Ángel Lamas (Santa Cruz)'>José Ángel Lamas (Santa Cruz)</option>";
            string += "<option value='José Félix Ribas (La Victoria)'>José Félix Ribas (La Victoria)</option>";
            string += "<option value='José Rafael Revenga (El Consejo)'>José Rafael Revenga (El Consejo)</option>";
            string += "<option value='Libertador (Palo Negro)'>Libertador (Palo Negro)</option>";
            string += "<option value='Mario Briceño Iragorry (El Limón)'>Mario Briceño Iragorry (El Limón)</option>";
            string += "<option value='Ocumare de la Costa de Oro (Ocumare de la Costa)'>Ocumare de la Costa de Oro (Ocumare de la Costa)</option>";
            string += "<option value='San Casimiro (San Casimiro)'>San Casimiro (San Casimiro)</option>";
            string += "<option value='San Sebastián (San Sebastián de los Reyes)'>San Sebastián (San Sebastián de los Reyes)</option>";
            string += "<option value='Santiago Mariño (Turmero)'>Santiago Mariño (Turmero)</option>";
            string += "<option value='Santos Michelena (Las Tejerías)'>Santos Michelena (Las Tejerías)</option>";
            string += "<option value='Sucre (Cagua)'>Sucre (Cagua)</option>";
            string += "<option value='Tovar (Colonia Tovar)'>Tovar (Colonia Tovar)</option>";
            string += "<option value='Urdaneta (Barbacoas)'>Urdaneta (Barbacoas)</option>";
            string += "<option value='Zamora (Villa de Cura)'>Zamora (Villa de Cura)</option>";

            $("#municipio").html(string);
          }

          if(estado=="BARINAS"){
            
            string += "<option value='Alberto Arvelo Torrealba (Sabaneta)'>Alberto Arvelo Torrealba (Sabaneta)</option>";
            string += "<option value='Andrés Eloy Blanco (El Cantón)'>Andrés Eloy Blanco (El Cantón)</option>";
            string += "<option value='Antonio José de Sucre (Socopó)'>Antonio José de Sucre (Socopó)</option>";
            string += "<option value='Arismendi (Arismendi)'>Arismendi (Arismendi)</option>";
            string += "<option value='Barinas (Barinas)'>Barinas (Barinas)</option>";
            string += "<option value='Bolívar (Barinitas)'>Bolívar (Barinitas)</option>";
            string += "<option value='Cruz Paredes (Barrancas)'>Cruz Paredes (Barrancas)</option>";
            string += "<option value='Ezequiel Zamora (Santa Bárbara)'>Ezequiel Zamora (Santa Bárbara)</option>";
            string += "<option value='Obispos (Obispos)'>Obispos (Obispos)</option>";
            string += "<option value='Pedraza (Ciudad Bolivia)'>Pedraza (Ciudad Bolivia)</option>";
            string += "<option value='Rojas (Libertad)'>Rojas (Libertad)</option>";
            string += "<option value='Sosa (Ciudad de Nutrias)'>Sosa (Ciudad de Nutrias)</option>";

            $("#municipio").html(string);
          }

          if(estado=="BOLIVAR"){
            
            string += "<option value='Caroní (Ciudad Guayana)'>Caroní (Ciudad Guayana)</option>";
            string += "<option value='Cedeño (Caicara del Orinoco)'>Cedeño (Caicara del Orinoco)</option>";
            string += "<option value='El Callao (El Callao)'>El Callao (El Callao)</option>";
            string += "<option value='Gran Sabana (Santa Elena de Uairén)'>Gran Sabana (Santa Elena de Uairén)</option>";
            string += "<option value='Heres (Ciudad Bolívar)'>Heres (Ciudad Bolívar)</option>";
            string += "<option value='Piar (Upata)'>Piar (Upata)</option>";
            string += "<option value='Raúl Leoni (Ciudad Piar)'>Raúl Leoni (Ciudad Piar)</option>";
            string += "<option value='Roscio (Guasipati)'>Roscio (Guasipati)</option>";
            string += "<option value='Sifontes (Tumeremo)'>Sifontes (Tumeremo)</option>";
            string += "<option value='Sucre (Maripa)'>Sucre (Maripa)</option>";
            string += "<option value='Padre Pedro Chen (El Palmar)'>Padre Pedro Chen (El Palmar)</option>";

            $("#municipio").html(string);
          }

          if(estado=="CARABOBO"){
            
            string += "<option value='Bejuma (Bejuma)'>Bejuma (Bejuma)</option>";
            string += "<option value='Carlos Arvelo (Güigüe)'>Carlos Arvelo (Güigüe)</option>";
            string += "<option value='Diego Ibarra (Mariara)'>Diego Ibarra (Mariara)</option>";
            string += "<option value='Guacara (Guacara)'>Guacara (Guacara)</option>";
            string += "<option value='Juan José Mora (Morón)'>Juan José Mora (Morón)</option>";
            string += "<option value='Libertador (Tocuyito)'>Libertador (Tocuyito)</option>";
            string += "<option value='Los Guayos (Los Guayos)'>Los Guayos (Los Guayos)</option>";
            string += "<option value='Miranda (Miranda)'>Miranda (Miranda)</option>";
            string += "<option value='Montalbán (Montalbán)'>Montalbán (Montalbán)</option>";
            string += "<option value='Naguanagua (Naguanagua)'>Naguanagua (Naguanagua)</option>";
            string += "<option value='Puerto Cabello (Puerto Cabello)'>Puerto Cabello (Puerto Cabello)</option>";
            string += "<option value='San Diego (San Diego)'>San Diego (San Diego)</option>";
            string += "<option value='San Joaquín (San Joaquín)'>San Joaquín (San Joaquín)</option>";
            string += "<option value='Valencia (Valencia)'>Valencia (Valencia)</option>";

            $("#municipio").html(string);
          }

          if(estado=="COJEDES"){
            
            string += "<option value='Anzoátegui (Cojedes)'>Anzoátegui (Cojedes)</option>";
            string += "<option value='Falcón (Tinaquillo)'>Falcón (Tinaquillo)</option>";
            string += "<option value='Girardot (El Baúl)'>Girardot (El Baúl)</option>";
            string += "<option value='Lima Blanco (Macapo)'>Lima Blanco (Macapo)</option>";
            string += "<option value='Pao de San Juan Bautista (El Pao)'>Pao de San Juan Bautista (El Pao)</option>";
            string += "<option value='Ricaurte (Libertad)'>Ricaurte (Libertad)</option>";
            string += "<option value='Rómulo Gallegos'>Rómulo Gallegos</option>";

            $("#municipio").html(string);
          }

          if(estado=="DELTA AMACURO"){
            
            string += "<option value='Antonio Díaz Curiapo (Curiapo)'>Antonio Díaz Curiapo (Curiapo)</option>";
            string += "<option value='Casacoima (Sierra Imataca)'>Casacoima (Sierra Imataca)</option>";
            string += "<option value='Pedernales (Pedernales)'>Pedernales (Pedernales)</option>";
            string += "<option value='Tucupita (Tucupita)'>Tucupita (Tucupita)</option>";

            $("#municipio").html(string);
          }

          if(estado=="FALCON"){
            
            string += "<option value='Acosta (San Juan de los Cayos)'>Acosta (San Juan de los Cayos)</option>";
            string += "<option value='Bolívar (San Luis)'>Bolívar (San Luis)</option>";
            string += "<option value='Buchivacoa (Capatárida)'>Buchivacoa (Capatárida)</option>";
            string += "<option value='Cacique Manaure (Yaracal)'>Cacique Manaure (Yaracal)</option>";
            string += "<option value='Carirubana (Punto Fijo)'>Carirubana (Punto Fijo)</option>";
            string += "<option value='Colina (La Vela de Coro)'>Colina (La Vela de Coro)</option>";
            string += "<option value='Dabajuro (Dabajuro)'>Dabajuro (Dabajuro)</option>";
            string += "<option value='Democracia (Pedregal)'>Democracia (Pedregal)</option>";
            string += "<option value='Falcón (Pueblo Nuevo)'>Falcón (Pueblo Nuevo)</option>";
            string += "<option value='Federación (Churuguara)'>Federación (Churuguara)</option>";
            string += "<option value='Jacura (Jacura)'>Jacura (Jacura)</option>";
            string += "<option value='Los Taques (Santa Cruz de Los Taques)'>Los Taques (Santa Cruz de Los Taques)</option>";
            string += "<option value='Mauroa (Mene de Mauroa)'>Mauroa (Mene de Mauroa)</option>";
            string += "<option value='Miranda (Santa Ana de Coro)'>Miranda (Santa Ana de Coro)</option>";
            string += "<option value='Monseñor Iturriza (Chichiriviche)'>Monseñor Iturriza (Chichiriviche)</option>";
            string += "<option value='Palmasola (Palmasola)'>Palmasola (Palmasola)</option>";
            string += "<option value='Petit (Cabure)'>Petit (Cabure)</option>";
            string += "<option value='Píritu (Píritu)'>Píritu (Píritu)</option>";
            string += "<option value='San Francisco (Mirimire)'>San Francisco (Mirimire)</option>";
            string += "<option value='Silva (Tucacas)'>Silva (Tucacas)</option>";
            string += "<option value='Sucre (La Cruz de Taratara)'>Sucre (La Cruz de Taratara)</option>";
            string += "<option value='Tocópero (Tocópero)'>Tocópero (Tocópero)</option>";
            string += "<option value='Unión (Santa Cruz de Bucaral)'>Unión (Santa Cruz de Bucaral)</option>";
            string += "<option value='Urumaco (Urumaco)'>Urumaco (Urumaco)</option>";
            string += "<option value='Zamora (Puerto Cumarebo)'>Zamora (Puerto Cumarebo)</option>";

            $("#municipio").html(string);
          }

          if(estado=="GUARICO"){
            
            string += "<option value='Esteros de Camaguan(Camaguan)'>Esteros de Camaguan(Camaguan)</option>";
            string += "<option value='Chaguaramas(Chaguaramas)'>Chaguaramas(Chaguaramas)</option>";
            string += "<option value='El Socorro (El Socorro)'>El Socorro (El Socorro)</option>";
            string += "<option value='Francisco de Miranda (Calabozo)'>Francisco de Miranda (Calabozo)</option>";
            string += "<option value='José Félix Ribas (Tucupido)'>José Félix Ribas (Tucupido)</option>";
            string += "<option value='José Tadeo Monagas (Altagracia de Orituco)'>José Tadeo Monagas (Altagracia de Orituco)</option>";
            string += "<option value='Juan Germán Roscio (San Juan de Los Morros)'>Juan Germán Roscio (San Juan de Los Morros)</option>";
            string += "<option value='Julián Mellado (El Sombrero)'>Julián Mellado (El Sombrero)</option>";
            string += "<option value='Las Mercedes (Las Mercedes)'>Las Mercedes (Las Mercedes)</option>";
            string += "<option value='Leonardo Infante (Valle de La Pascua)'>Leonardo Infante (Valle de La Pascua)</option>";
            string += "<option value='Pedro Zaraza (Zaraza)'>Pedro Zaraza (Zaraza)</option>";
            string += "<option value='Ortíz (Ortíz)'>Ortíz (Ortíz)</option>";
            string += "<option value='San Gerónimo de Guayabal (Guayabal)'>San Gerónimo de Guayabal (Guayabal)</option>";
            string += "<option value='San José de Guaribe (San José de Guaribe)'>San José de Guaribe (San José de Guaribe)</option>";
            string += "<option value='Santa María de Ipire (Santa María de Ipire)'>Santa María de Ipire (Santa María de Ipire)</option>";

            $("#municipio").html(string);
          }

          if(estado=="LARA"){
            string += "<option value='Andrés Eloy Blanco (Sanare)'>Andrés Eloy Blanco (Sanare)</option>";
            string += "<option value='Crespo (Duaca)'>Crespo (Duaca)</option>";
            string += "<option value='Iribarren (Barquisimeto)'>Iribarren (Barquisimeto)</option>";
            string += "<option value='Jiménez (Quibor)'>Jiménez (Quibor)</option>";
            string += "<option value='Morán (El Tocuyo)'>Morán (El Tocuyo)</option>";
            string += "<option value='Palavecino (Cabudare)'>Palavecino (Cabudare)</option>";
            string += "<option value='Simón Planas (Sarare)'>Simón Planas (Sarare)</option>";
            string += "<option value='Torres (Carora)'>Torres (Carora)</option>";
            string += "<option value='Urdaneta (Siquisique)'>Urdaneta (Siquisique)</option>";

            $("#municipio").html(string);
          }

          if(estado=="MERIDA"){
            string += "<option value='Alberto Adriani (El Vigía)'>Alberto Adriani (El Vigía)</option>";
            string += "<option value='Andrés Bello (La Azulita)'>Andrés Bello (La Azulita)</option>";
            string += "<option value='Antonio Pinto Salinas (Santa Cruz de Mora)'>Antonio Pinto Salinas (Santa Cruz de Mora)</option>";
            string += "<option value='Sucre (Lagunillas)'>Sucre (Lagunillas)</option>";
            string += "<option value='Tovar (Tovar)'>Tovar (Tovar)</option>";
            string += "<option value='Tulio Febres Cordero (Nueva Bolivia)'>Tulio Febres Cordero (Nueva Bolivia)</option>";
            string += "<option value='Zea (Zea)'>Zea (Zea)</option>";

            $("#municipio").html(string);
          }

          if(estado=="MIRANDA"){
            string += "<option value='Acevedo (Caucagua)'>Acevedo (Caucagua)</option>";
            string += "<option value='Andrés Bello (San José de Barlovento)'>Andrés Bello (San José de Barlovento)</option>";
            string += "<option value='Baruta (Baruta)'>Baruta (Baruta)</option>";
            string += "<option value='Brión (Higuerote)'>Brión (Higuerote)</option>";
            string += "<option value='Buroz (Mamporal)'>Buroz (Mamporal)</option>";
            string += "<option value='Carrizal (Carrizal)'>Carrizal (Carrizal)</option>";
            string += "<option value='Chacao (Chacao)'>Chacao (Chacao)</option>";
            string += "<option value='Cristóbal Rojas (Charallave)'>Cristóbal Rojas (Charallave)</option>";
            string += "<option value='El Hatillo (El Hatillo)'>El Hatillo (El Hatillo)</option>";
            string += "<option value='Guaicaipuro (Los Teques)'>Guaicaipuro (Los Teques)</option>";
            string += "<option value='Independencia (Santa Teresa del Tuy)'>Independencia (Santa Teresa del Tuy)</option>";
            string += "<option value='Lander (Ocumare del Tuy)'>Lander (Ocumare del Tuy)</option>";
            string += "<option value='Los Salias (San Antonio de los Altos)'>Los Salias (San Antonio de los Altos)</option>";
            string += "<option value='Páez (Río Chico)'>Páez (Río Chico)</option>";
            string += "<option value='Paz Castillo (Santa Lucía)'>Paz Castillo (Santa Lucía)</option>";
            string += "<option value='Pedro Gual (Cúpira)'>Pedro Gual (Cúpira)</option>";
            string += "<option value='Plaza (Guarenas)'>Plaza (Guarenas)</option>";
            string += "<option value='Simón Bolívar (San Francisco de Yare)'>Simón Bolívar (San Francisco de Yare)</option>";
            string += "<option value='Sucre (Petare)'>Sucre (Petare)</option>";
            string += "<option value='Urdaneta (Cúa)'>Urdaneta (Cúa)</option>";
            string += "<option value='Zamora (Guatire)'>Zamora (Guatire)</option>";

            $("#municipio").html(string);
          }

          if(estado=="MONAGAS"){
            string += "<option value='Acosta (San Antonio de Capayacuar)'>Acosta (San Antonio de Capayacuar)</option>";
            string += "<option value='Aguasay (Aguasai)'>Aguasay (Aguasai)</option>";
            string += "<option value='Bolívar'>Bolívar</option>";
            string += "<option value='Cedeño (Caicara)'>Cedeño (Caicara)</option>";
            string += "<option value='Ezequiel Zamora (Punta de Mata)'>Ezequiel Zamora (Punta de Mata)</option>";
            string += "<option value='Libertador (Temblador)'>Libertador (Temblador)</option>";
            string += "<option value='Maturín (Maturín)'>Maturín (Maturín)</option>";
            string += "<option value='Piar (Aragua)'>Piar (Aragua)</option>";
            string += "<option value='Punceres (Quiriquire)'>Punceres (Quiriquire)</option>";
            string += "<option value='Santa Bárbara (Santa Bárbara)'>Santa Bárbara (Santa Bárbara)</option>";
            string += "<option value='Sotillo (Barrancas del Orinco)'>Sotillo (Barrancas del Orinco)</option>";
            string += "<option value='Uracoa (Uracoa)'>Uracoa (Uracoa)</option>";

            $("#municipio").html(string);
          }

          if(estado=="NUEVA ESPARTA"){
            string += "<option value='Antolín del Campo (La Plaza de Paraguachí)'>Antolín del Campo (La Plaza de Paraguachí)</option>";
            string += "<option value='Arismendi (La Asunción)'>Arismendi (La Asunción)</option>";
            string += "<option value='Díaz (San Juan Bautista)'>Díaz (San Juan Bautista)</option>";
            string += "<option value='García (El Valle del Espíritu Santo)'>García (El Valle del Espíritu Santo)</option>";
            string += "<option value='Gómez (Santa Ana)'>Gómez (Santa Ana)</option>";
            string += "<option value='Maneiro (Pampatar)'>Maneiro (Pampatar)</option>";
            string += "<option value='Marcano (Juan Griego)'>Marcano (Juan Griego)</option>";
            string += "<option value='Mariño (Porlamar)'>Mariño (Porlamar)</option>";
            string += "<option value='Península de Macanao (Boca de Río)'>Península de Macanao (Boca de Río)</option>";
            string += "<option value='Tubores (Punta de Piedras)'>Tubores (Punta de Piedras)</option>";
            string += "<option value='Villalba (San Pedro de Coche)'>Villalba (San Pedro de Coche)</option>";

            $("#municipio").html(string);
          }

          if(estado=="PORTUGUESA"){
            string += "<option value='Agua Blanca (Agua Blanca)'>Agua Blanca (Agua Blanca)</option>";
            string += "<option value='Araure (Araure)'>Araure (Araure)</option>";
            string += "<option value='Esteller (Píritu)'>Esteller (Píritu)</option>";
            string += "<option value='Guanare (Guanare)'>Guanare (Guanare)</option>";
            string += "<option value='Guanarito (Guanarito)'>Guanarito (Guanarito)</option>";
            string += "<option value='Monseñor José Vicenti de Unda (Chabasquén de Unda)'>Monseñor José Vicenti de Unda (Chabasquén de Unda)</option>";
            string += "<option value='Ospino (Ospino)'>Ospino (Ospino)</option>";
            string += "<option value='Páez (Acarigua)'>Páez (Acarigua)</option>";
            string += "<option value='Papelón (Papelón)'>Papelón (Papelón)</option>";
            string += "<option value='San Genaro de Boconoíto (Boconoíto)'>San Genaro de Boconoíto (Boconoíto)</option>";
            string += "<option value='San Rafael de Onoto (San Rafael de Onoto)'>San Rafael de Onoto (San Rafael de Onoto)</option>";
            string += "<option value='Santa Rosalía (El Playón)'>Santa Rosalía (El Playón)</option>";
            string += "<option value='Sucre (Biscucuy)'>Sucre (Biscucuy)</option>";
            string += "<option value='Turén (Villa Bruzual)'>Turén (Villa Bruzual)</option>";

            $("#municipio").html(string);
          }

          if(estado=="SUCRE"){
            string += "<option value='Andrés Eloy Blanco (Casanay)'>Andrés Eloy Blanco (Casanay)</option>";
            string += "<option value='Andrés Mata (San José de Aerocuar)'>Andrés Mata (San José de Aerocuar)</option>";
            string += "<option value='Arismendi (Río Caribe)'>Arismendi (Río Caribe)</option>";
            string += "<option value='Benítez (El Pilar)'>Benítez (El Pilar)</option>";
            string += "<option value='Bermúdez (Carúpano)'>Bermúdez (Carúpano)</option>";
            string += "<option value='Bolívar (Marigüitar)'>Bolívar (Marigüitar)</option>";
            string += "<option value='Cajigal (Yaguaraparo)'>Cajigal (Yaguaraparo)</option>";
            string += "<option value='Cruz Salmerón Acosta (Araya)'>Cruz Salmerón Acosta (Araya)</option>";
            string += "<option value='Libertador (Tunapuy)'>Libertador (Tunapuy)</option>";
            string += "<option value='Mariño (Irapa)'>Mariño (Irapa)</option>";
            string += "<option value='Mejía (San Antonio del Golfo)'>Mejía (San Antonio del Golfo)</option>";
            string += "<option value='Montes (Cumanacoa)'>Montes (Cumanacoa)</option>";
            string += "<option value='Ribero (Cariaco)'>Ribero (Cariaco)</option>";
            string += "<option value='Sucre (Cumaná)'>Sucre (Cumaná)</option>";
            string += "<option value='Valdez (Güiria)'>Valdez (Güiria)</option>";

            $("#municipio").html(string);
          }

          if(estado=="TACHIRA"){
            string += "<option value='Andrés Bello(Cordero)'>Andrés Bello(Cordero)</option>";
            string += "<option value='Antonio Rómulo Costa (Las Mesas)'>Antonio Rómulo Costa (Las Mesas)</option>";
            string += "<option value='Ayacucho (El Colón)'>Ayacucho (El Colón)</option>";
            string += "<option value='Bolívar (San Antonio del Táchira)'>Bolívar (San Antonio del Táchira)</option>";
            string += "<option value='Cárdenas (Táriba)'>Cárdenas (Táriba)</option>";
            string += "<option value='Córdoba (Santa Ana de Táchira)'>Córdoba (Santa Ana de Táchira)</option>";
            string += "<option value='Fernández Feo (San Rafael del Piñal)'>Fernández Feo (San Rafael del Piñal)</option>";
            string += "<option value='Francisco de Miranda (San José de Bolívar)'>Francisco de Miranda (San José de Bolívar)</option>";
            string += "<option value='García de Hevia (La Fría)'>García de Hevia (La Fría)</option>";
            string += "<option value='Guásimos (Palmira)'>Guásimos (Palmira)</option>";
            string += "<option value='Independencia (Capacho Nuevo)'>Independencia (Capacho Nuevo)</option>";
            string += "<option value='Jáuregui (La Grita)'>Jáuregui (La Grita)</option>";
            string += "<option value='José María Vargas (El Cobre)'>José María Vargas (El Cobre)</option>";
            string += "<option value='Junín (Rubio)'>Junín (Rubio)</option>";
            string += "<option value='San Judas Tadeo (Umuquena)'>San Judas Tadeo (Umuquena)</option>";
            string += "<option value='Libertad (Capacho Viejo)'>Libertad (Capacho Viejo)</option>";
            string += "<option value='Libertador (Abejales)'>Libertador (Abejales)</option>";
            string += "<option value='Lobatera (Lobatera)'>Lobatera (Lobatera)</option>";
            string += "<option value='Michelena (Michelena)'>Michelena (Michelena)</option>";
            string += "<option value='Panamericano (Coloncito)'>Panamericano (Coloncito)</option>";
            string += "<option value='Pedro María Ureña (Ureña)'>Pedro María Ureña (Ureña)</option>";
            string += "<option value='Rafael Urdaneta (Delicias)'>Rafael Urdaneta (Delicias)</option>";
            string += "<option value='Samuel Dario Maldonado (La Tendida)'>Samuel Dario Maldonado (La Tendida)</option>";
            string += "<option value='San Cristóbal (San Cristóbal)'>San Cristóbal (San Cristóbal)</option>";
            string += "<option value='Seboruco (Seboruco)'>Seboruco (Seboruco)</option>";
            string += "<option value='Simón Rodríguez (San Simon)'>Simón Rodríguez (San Simon)</option>";
            string += "<option value='Sucre (Queniquea)'>Sucre (Queniquea)</option>";
            string += "<option value='Torbes (San Josesito)'>Torbes (San Josesito)</option>";
            string += "<option value='Uribante (Pregonero)'>Uribante (Pregonero</option>";

            $("#municipio").html(string);
          }

          if(estado=="TRUJILLO"){
            
            string += "<option value='Andrés Bello (Santa Isabel)'>Andrés Bello (Santa Isabel)</option>";
            string += "<option value='Boconó (Boconó)'>Boconó (Boconó)</option>";
            string += "<option value='Bolívar (Sabana Grande)'>Bolívar (Sabana Grande)</option>";
            string += "<option value='Candelaria (Chejendé)'>Candelaria (Chejendé)</option>";
            string += "<option value='Carache (Carache)'>Carache (Carache)</option>";
            string += "<option value='Escuque (Escuque)'>Escuque (Escuque)</option>";
            string += "<option value='José Felipe Márquez Cañizalez (El Paradero)'>José Felipe Márquez Cañizalez (El Paradero)</option>";
            string += "<option value='Juan Vicente Campos Elías (Campo Elías)'>Juan Vicente Campos Elías (Campo Elías)</option>";
            string += "<option value='La Ceiba (Santa Apolonia)'>La Ceiba (Santa Apolonia)</option>";
            string += "<option value='Miranda (El Dividive)'>Miranda (El Dividive)</option>";
            string += "<option value='Pampán (Pampán)'>Pampán (Pampán)</option>";
            string += "<option value='Trujillo (Trujillo)'>Trujillo (Trujillo)</option>";
            string += "<option value='Andres Linares (San Lazaro)'>Andres Linares (San Lazaro)</option>";
            string += "<option value='Pampanito (Pampanito)'>Pampanito (Pampanito)</option>";

            $("#municipio").html(string);
          }

          if(estado=="VARGAS"){          
            string += "<option value='Vargas (La Guaira)'>Vargas (La Guaira)</option>";
            $("#municipio").html(string);
          }

          if(estado=="YARACUY"){          
            string += "<option value='Arístides Bastidas (San Pablo)'>Arístides Bastidas (San Pablo)</option>";
            string += "<option value='Bolívar (Aroa)'>Bolívar (Aroa)</option>";
            string += "<option value='Bruzual (Chivacoa)'>Bruzual (Chivacoa)</option>";
            string += "<option value='Cocorote (Cocorote)'>Cocorote (Cocorote)</option>";
            string += "<option value='Independencia (Independencia)'>Independencia (Independencia)</option>";
            $("#municipio").html(string);
          }

          if(estado=="ZULIA"){          
            string += "<option value='Almirante Padilla (El Toro)'>Almirante Padilla (El Toro)</option>";
            string += "<option value='Baralt (San Timoteo)'>Baralt (San Timoteo)</option>";
            string += "<option value='Cabimas (Cabimas)'>Cabimas (Cabimas)</option>";
            string += "<option value='Catatumbo (Encontrados)'>Catatumbo (Encontrados)</option>";
            string += "<option value='Colón (San Carlos del Zulia)'>Colón (San Carlos del Zulia)</option>";
            string += "<option value='Francisco Javier Pulgar (Pueblo Nuevo-El Chivo)'>Francisco Javier Pulgar (Pueblo Nuevo-El Chivo)</option>";
            string += "<option value='Jesús Enrique Losada (La Concepción)'>Jesús Enrique Losada (La Concepción)</option>";
            string += "<option value='Jesús María Semprún (Casigua El Cubo)'>Jesús María Semprún (Casigua El Cubo)</option>";
            $("#municipio").html(string);
          }

      }

            function buscar(){
                var buscar = $("#busqueda").val();
                if(buscar!=""){
                  setTimeout(function(){      
                       document.getElementById('buscador').setAttribute("aria-expanded", "true");
                     }, 1000);
                  document.getElementById('buscador').setAttribute("aria-expanded", "true");
                             $.ajax({
                                    type: "POST",
                                    url: "../includes/buscar.php",
                                    data: {buscar : buscar},
                                    success: function (data) {
                                        var json = eval("(" + data + ")");
                                        var string ='';
                                        if(json[0].res=="success"){
                                            for (var i = 0; i < json.length; i++) {
                                                if(json[i].tipo=="user"){
                                                    string += '<a href="'+ json[i].url_perfil +'"><div class="userconect">';
                                                    string += '    <img src="../'+ json[i].imagen +'" class="imgpp" alt="">';
                                                    string += '    <h6>'+ json[i].nombre+ " "+ json[i].apellido +'</h6>';
                                                    string += '</div></a>';
                                                }
                                            }
                                            for (var i = 0; i < json.length; i++) {
                                                if(json[i].tipo=="doc"){
                                                    if(json[i].tipo_doc=="I"){
                                                    string += '<a onclick="para_mis_inv('+ json[i].id_doc +');"><div class="userconect">';
                                                    }
                                                    if(json[i].tipo_doc=="L"){
                                                    string += '<a onclick="para_mis_lib('+ json[i].id_doc +');"><div class="userconect">';
                                                    }
                                                    string += '    <img src="../'+ json[i].imagen +'" class="imgpp" alt="">';
                                                    string += '    <h6>'+ json[i].titulo_doc +'</h6>';
                                                    string += '</div></a>';
                                                }
                                            }
                                        }else{
                                            string += '<div class="userconect">';
                                            string += '    <h6>No se encontraron elementos</h6>';
                                            string += '</div>';
                                        }
                                        $("#collapseExample1").html(string);
                                    }
                            }); //end-ajax

                }else{
                  $("#collapseExample1").html("");
                  setTimeout(function(){      
                       document.getElementById('buscador').setAttribute("aria-expanded", "false");
                     }, 1000);
                }
            }

        function mas_autores(){
            var autores = $("#agregar_a").find("input[type='radio']");
            if(autores.length<8){
                var string = '<br>';
                string += '    <h3>Datos del autor</h3>';
                string += '            <input type="text" class="form-control generado"  onKeyPress="return cedula_esp2(event, this);" name="ci_autor'+autores.length+'" placeholder="Cédula">  ';
                string += '            <input type="text" class="form-control generado" name="email_autor'+autores.length+'" placeholder="Correo">  ';
                string += '            <input type="text" class="form-control generado"  name="nom_autor'+autores.length+'" placeholder="Nombre">   ';
                string += '        <input type="text" class="form-control generado" name="ape_autor'+autores.length+'" placeholder="Apellido">';
                $("#agregar_a").append(string);
            }else{
                $("#boton_mas").css({visibility:"hidden",opacity:"0"})
            }
        }

        function mas_autores_lib(){
            var autores = $("#agregar_a").find("input[type='radio']");
            if(autores.length<8){
                var string = '<br>';
                string += '    <h3>Datos del autor</h3>';
                string += '            <input type="text" class="form-control generado" name="email_autor'+autores.length+'" placeholder="Correo">  ';
                string += '            <input type="text" class="form-control generado"  name="nom_autor'+autores.length+'" placeholder="Nombre">   ';
                string += '        <input type="text" class="form-control generado" name="ape_autor'+autores.length+'" placeholder="Apellido">';
                $("#agregar_a").append(string);
            }else{
                $("#boton_mas").css({visibility:"hidden",opacity:"0"})
            }
        }

        function mas_tutores(){
            var tutores = $("#agregar_t").find("input[type='radio']");
            if(tutores.length<=2){
            var string = '<br>';
            string += '    <h3>Datos del tutor</h3>';
            string += '            <input type="text" class="form-control generado"  onKeyPress="return cedula_esp2(event, this);" name="ci_tutor'+tutores.length+'" placeholder="Cédula">  ';
            string += '            <input type="text" class="form-control generado"  name="email_tutor'+tutores.length+'" placeholder="Correo">  ';
            string += '            <input type="text" class="form-control generado"  name="nom_tutor'+tutores.length+'" placeholder="Nombre">  ';
            string += '        <input type="text" class="form-control generado" name="ape_tutor'+tutores.length+'" placeholder="Apellido">';
            string += '    <input type="radio" class="generado" name="tipo_tutor'+tutores.length+'" value="A" checked>';
            string += '    Académico';
            string += '    <input type="radio" class="generado" name="tipo_tutor'+tutores.length+'" value="I">';
            string += '    Institucional<br>';
            $("#agregar_t").html(string);
            }
        }

 var create_qrcode = function(text, typeNumber,
            errorCorrectionLevel, mode, mb) {

          qrcode.stringToBytes = qrcode.stringToBytesFuncs[mb];

          var qr = qrcode(typeNumber || 4, errorCorrectionLevel || 'M');
          qr.addData(text, mode);
          qr.make();

        //  return qr.createTableTag();
        //  return qr.createSvgTag();
          return qr.createImgTag();
        };

        function update_qrcode(link, id, array) {
            link = link.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '');
            var src = create_qrcode(link, 10, "H", "Byte", "UTF-8");
            $(".loader-page").css({visibility:"hidden",opacity:"0"})
            Swal.fire({
              title: array["titulo_doc"],
              html: "<p style='font-size:.7em;'>Comparte este contenido y dejanos saber si te gustó</p><p>" + array["resume_doc"] + "</p><img src='" + src + "' width='50%'>" +
                  '<br><form target="_blank" action="../includes/pdf_qr.php" method="POST">'+
                  '<input type="hidden" name="id_doc" name="id_doc" value="'+ id +'">'+
                  '<input type="hidden" name="src" id="src_qr" value="'+ src +'">'+
                  '<input type="hidden" name="enlace" id="enlace" value="'+ link +'">'+
                  '<div><input type="submit" onclick="swal.close();" class="btn btn-default" value="Compartir">' +
                  '</div></form>',
              showConfirmButton: false,
              showCancelButton: true,
              showCloseButton: true,
              cancelButtonText: 'Cancelar'
            })
        }

        function fav(id_doc, heart){
                    $.ajax({
                        type: "POST",
                        url: "../includes/fav.php",
                        data: {id_doc : id_doc},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            if (json.res == "success") {
                                heart.setAttribute("src", "../assets/img/heart.png");
                            }
                        }
                    }); //end-ajax
        }

        function fav_pen(id, heart){
                    $.ajax({
                        type: "POST",
                        url: "../includes/fav_pen.php",
                        data: {id_pen : id},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            if (json.res == "success") {
                                heart.setAttribute("src", "../assets/img/heart.png");
                            }
                        }
                    }); //end-ajax
        }

        function fav_pu(id_publicacion, heart){
                    $.ajax({
                        type: "POST",
                        url: "../includes/fav_pu.php",
                        data: {id_publicacion : id_publicacion},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            if (json.res == "success") {
                                heart.setAttribute("src", "../assets/img/heart.png");
                            }
                        }
                    }); //end-ajax
        }

        function comp(id_doc, tipo){
            $(".loader-page").css({visibility:"visible",opacity:"1"})
            if(tipo=='investigacion'){
                $.ajax({
                        type: "POST",
                        url: "../includes/inv_data.php",
                        data: {id_doc : id_doc},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                            if (json.res == "success") {
                                var vector = new Array();
                                vector["titulo_doc"]=json.titulo_doc;
                                vector["resume_doc"]=json.resume_doc;
                                vector["img"]=json.img;
                                var url = document.URL;
                                var partes = url.split("/html");
                                var enlace=partes[0]+"/includes/download.php?archivo=../"+json.archivo;
                                 $(".loader-page").css({visibility:"visible",opacity:"1"})
                                update_qrcode(enlace, id_doc, vector);
                            }else{
                                Swal.fire(
                                'Error',
                                'Oops, se ha generado un error.',
                                'error'
                                    )
                            }
                        }
            }); //end-ajax
            }
            if(tipo=='libro'){
                $.ajax({
                        type: "POST",
                        url: "../includes/lib_data.php",
                        data: {id_doc : id_doc},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                            if (json.res == "success") {
                                var vector = new Array();
                                vector["titulo_doc"]=json.titulo_doc;
                                vector["resume_doc"]=json.resume_doc;
                                vector["img"]=json.img;
                                var url = document.URL;
                                var partes = url.split("/html");
                                var enlace=partes[0]+"/includes/download.php?archivo=../"+json.archivo;
                                      $(".loader-page").css({visibility:"visible",opacity:"1"})
                                      update_qrcode(enlace, id_doc, vector);
                                
                            }else{
                                Swal.fire(
                                'Error',
                                'Oops, se ha generado un error.',
                                'error'
                                    )
                            }
                        }
            }); //end-ajax
            }
        }

        function descargar(id){
                    $.ajax({
                        type: "POST",
                        url: "../includes/desc.php",
                        data: {id_doc : id},
                        success: function (data) {
                        }
                    }); //end-ajax
        }

          function coments_pen(id_pen){
            $.ajax({
                        type: "POST",
                        url: "../includes/coments_pen.php",
                        data: {id_pen : id_pen},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                            var string='';
                            if(json[0].res=="success"){
                              for (var i = 1; i < json.length; i++) {
                                  string += '<div class="cajacomentario1">';
                                    string += '<div class="row">';
                                      string += '<div class="col-md-2">';
                                      string += '<img src="../'+json[i].imagen+'" alt="" class="imgcoment">  ';
                                      string += '</div>';
                                      string += '<div class="col-md-10">';
                                      string += '<p>'+json[i].nombre+'</p>';
                                      string += '<hr> ';
                                      string += '<p>'+json[i].mensaje+'</p>';
                                      string += '</div>';
                                    string += '</div>';
                                  string += '</div>';
                               }
                            }
                            if(json[0].res=="vacio"){
                                  string += '<div class="cajacomentario1">';
                                      string += '<hr> ';
                                      string += '<p>¡Sé el primero en comentar!</p>';
                                      string += '<hr>';
                                  string += '</div>';
                            }
                            $("#coments").html(string);

                        }
                    }); //end-ajax
          }

          function coments(id_doc){
            $.ajax({
                        type: "POST",
                        url: "../includes/coments.php",
                        data: {id_doc : id_doc},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                            var string='';
                            if(json[0].res=="success"){
                              for (var i = 1; i < json.length; i++) {
                                  string += '<div class="cajacomentario1">';
                                    string += '<div class="row">';
                                      string += '<div class="col-md-2">';
                                      string += '<img src="../'+json[i].imagen+'" alt="" class="imgcoment">  ';
                                      string += '</div>';
                                      string += '<div class="col-md-10">';
                                      string += '<p>'+json[i].nombre+'</p>';
                                      string += '<hr> ';
                                      string += '<p>'+json[i].mensaje+'</p>';
                                      string += '</div>';
                                    string += '</div>';
                                  string += '</div>';
                               }
                            }
                            if(json[0].res=="vacio"){
                                  string += '<div class="cajacomentario1">';
                                      string += '<hr> ';
                                      string += '<p>¡Sé el primero en comentar!</p>';
                                      string += '<hr>';
                                  string += '</div>';
                            }
                            $("#coments").html(string);

                        }
                    }); //end-ajax
          }

          function enviar_coment_pen(id){
            $(".loader-page").css({visibility:"visible",opacity:"1"})
            var texto =$("#public2").val();
            texto = (texto.split('\n')).join('<br />');
            texto = texto.replace(/<script>/i, '');
            texto = texto.replace(/'/i, '');
                    $.ajax({
                        type: "POST",
                        url: "../includes/enviar_coment_pen.php",
                        data: {id_pen : id,
                              texto : texto},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            if(json.res=="success"){
                              $("#public2").val("");
                              coments_pen(id);
                            }else{
                              $(".loader-page").css({visibility:"hidden",opacity:"0"})
                              Swal.fire(
                                'Error',
                                'Oops, se ha generado un error.',
                                'error'
                              )
                            }
                        }
                    }); //end-ajax
          }

          function enviar_coment(id){
            $(".loader-page").css({visibility:"visible",opacity:"1"})
            var texto =$("#public2").val();
            texto = (texto.split('\n')).join('<br />');
            texto = texto.replace(/<script>/i, '');
            texto = texto.replace(/'/i, '');
                    $.ajax({
                        type: "POST",
                        url: "../includes/enviar_coment.php",
                        data: {id_doc : id,
                              texto : texto},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                            if(json.res=="success"){
                              $("#public2").val("");
                              coments(id);
                            }else{
                              
                              Swal.fire(
                                'Error',
                                'Oops, se ha generado un error.',
                                'error'
                              )
                            }
                        }
                    }); //end-ajax
          }

function cedula_esp2(evt, input) {
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
    var value = input.value;
    if (value.length == 0 && flag1) {
        if (keynum != 118 && keynum != 101 && keynum != 112) {
            input.value = "V-";
            flag1 = false;
            if (bandera == "numero") {
                return true;
            } else {
                return false;
            }
        } else {
            if (keynum == 101) {
                input.value = "E-";
                flag1 = false;
                return false;
            }
            if (keynum == 112) {
                input.value = "P-";
                flag1 = false;
                return false;
            }
            if (keynum == 118) {
                input.value = "V-";
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

function reg_lib(){
var string = '';
string += '    <form name="form_lib" class="ad_min" id="form_lib">Datos del autor';
string += '    <h3>Datos del autor</h3>';
string += '            <input type="text" class="form-control" id="email_autor" name="email_autor" placeholder="Correo">  ';
string += '            <input type="text" class="form-control" id="nombre_autor" name="nom_autor" placeholder="Nombre">   ';
string += '        <input type="text" class="form-control" id="ape_autor" name="ape_autor" placeholder="Apellido">';
string += '    <div id="agregar_a"></div><br>';
string += '  <button type="button" id="boton_mas" class="btn boton" onclick="mas_autores_lib();"><span class="glyphicon glyphicon-user"></span> + Agregar más (max:5)</button>';
string += '<h3>Datos del Contenido</h3>';
string += '<label for="username">Contenido</label>';
string += '<input type="text" class="form-control" id="titulo_doc" name="titulo_doc" placeholder="Título">';
string += '<br>';
string += 'Año de publicación <input type="number" class="form-control" id="ano_publi" name="ano_publi" placeholder="Año de Publicación">';
string += '<br>';
string += 'Número de Edición <input type="text" class="form-control" id="edicion" name="edicion" placeholder="Número de Edición">';
string += '<br>';
string += '<textarea class="form-control" name="desc_doc" rows="5" placeholder="Descripción"></textarea>';
string += '<p class="help-block">No debe ser mayor a 250 palabras</p>';
string += '<label for="archivo">Adjuntar un archivo</label>';
string += '<input type="file" name="archivo" id="archivo">';
string += ' <p class="help-block">No debe ser mayor a 20MB</p>';
string += ' <br>';
        string += '<p>Elige las temáticas de tu proyecto</p>';
        string += '<br><div id="tematicas">';
            string += '<div class="boxflex">   ';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="t_int"><p>Tecnologías de Internet</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="sft_pu"><p>Software Público</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="inter"><p >Interoperabilidad</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="tresd"><p>Diseño 3D</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="ai"><p>Inteligencia Artificial</p></div>';
            string += '</div>';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="apps"><p>Aplicaciones</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="arc"><p>Arquitectura y Sistemas</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="block"><p>Arquitecturas de Alto Rendimiento</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="cont_edu"><p>Contenidos Educativos</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="datos_a"><p>Datos Abiertos</p></div>';
            string += '</div>';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="edu_t"><p>Educación medida por las TIL</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="geo"><p>Sistemas de Información Geográficos</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="gob_dig"><p>Gobierno Digital</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="h_lib"><p>Hardware Libre</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="innova"><p>Innovaciones Tecnológicas</p></div>';
            string += '</div>';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="iot"><p>Internet de las Cosas</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="org_t"><p >Organizaciones medidas por Tecnologías</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="pro"><p>Programación</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="red"><p>Redes</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="robot"><p>Robótica</p></div>';
            string += '</div>';
            string += '</div>';
        string += '</div>';
string += ' <div align=center> <input type="submit" class="btn btn-primary" value="Registrar Contenido"></div></form>';
 $("#contenido3").html(string);
  jQuery.validator.addMethod("especialChars",
                           function(value, element) {
                                   return /^[A-Za-z\d=ñ#$%@_ -]+$/.test(value);
                           },
                   "No pueden haber caracteres especiales."
                );

        $.validator.addMethod('filesize', function (value, element, arg) {
                if(element.files[0].size<=arg){
                    return true;
                }else{
                    return false;
                }
            });
                          $("#form_lib").submit(function(e){ e.preventDefault(); }).validate({
                              submitHandler: function(form) {
                              $(".loader-page").css({visibility:"visible",opacity:"1"})

                              var seleccionadas = $("#tematicas").find("div[class='p-3 bd-highlight']");
                                    if(seleccionadas.length<1){
                                        Swal.fire(
                                            'No has seleccionado suficientes temáticas',
                                            'Debes seleccionar al menos 1 temática para continuar.',
                                            'warning'
                                        )
                                    }else{
                                        if(seleccionadas.length>9){
                                            Swal.fire(
                                                '¡Demasiadas temáticas!',
                                                'Debe seleccionar un máximo de 9 temáticas.',
                                                'warning'
                                            )}else{
                                        var vector = new Array();
                                                                                            
                                        for (var i = 0; i < seleccionadas.length; i++) {
                                            var id = seleccionadas[i].getAttribute("id");
                                            vector.push(id);
                                        }

                              var inputs = $("#agregar_a").find("input[class='form-control generado']");
                              for (var i = 0; i < inputs.length; i++){
                                    var input = inputs[i];
                                    var valor = input.value;
                                    if(valor==""){
                                        input.setAttribute("disabled", "disabled");
                                    }
                              } 
                                 $.ajax({
                                          type: "POST",
                                          url: "../includes/form_lib.php",
                                          data: { serial : $("#form_lib").serialize(),
                                                 'array': JSON.stringify(vector)},
                                          success: function (data) {
                                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                                              var json = eval("(" + data + ")");
                                              if(json.res=="success"){
                                                $(".loader-page").css({visibility:"visible",opacity:"1"})
                                                               var formData = new FormData($("#form_lib")[0]);
                                                               formData.append( 'id_doc', json.id_doc );
                                                                  var url= "../includes/archivo.php";
                                                                  $.ajax({
                                                                      type: "POST",                    
                                                                      url: url,                
                                                                      data: formData,        
                                                                      contentType: false,
                                                                      processData: false,
                                                                      success: function(data){
                                                                        $(".loader-page").css({visibility:"hidden",opacity:"0"})
                                                                        Swal.fire(
                                                                            '¡Registro exitoso!',
                                                                            'Se ha registrado la investigación exitosamente.',
                                                                            'success'
                                                                        ).then(function () {
                                                                            if(json.cargado_por==1){
                                                                              window.location.href="menu_ad.html";
                                                                            }else{
                                                                              traer2();
                                                                            }
                                                                            
                                                                        })
                                                                      }

                                                                  })
                                        
                                              }
                                              if(json.res=="error"){
                                                Swal.fire(
                                                '¡Error!',
                                                'Ha ocurrido une error en el registro. Por favor ingresa tus datos nuevamente.',
                                                'error'
                                                ).then(function () {
                                                    reg_lib();
                                                })

                                              }
                                              if(json.res=="vacio"){
                                                Swal.fire(
                                                  '¡Error!',
                                                  'Asegurate de que no hayan campos vacíos.',
                                                  'error'
                                              ).then(function () {
                                                    reg_lib();
                                                })
                                                } 
                                              if(json.res=="autor_vacio"){
                                                Swal.fire(
                                                  '¡Error!',
                                                  'Asegurate de que no hayan campos vacíos en la sección del autor.',
                                                  'error'
                                              ).then(function () {
                                                    reg_lib();
                                                })
                                                }
                                            }
                                      }); //end-ajax
                                     }
                                }
                                 return false;
                              },
                              rules: {
                                  email_autor: {
                                  required: true,
                                  email: true
                                  },

                                  nom_autor: {
                                  required: true,
                                  minlength: 2,
                                  maxlength: 20,
                                  especialChars: true},

                                  ape_autor: {
                                  required: true,
                                  minlength: 2,
                                  maxlength: 20,
                                  especialChars: true},

                                  titulo_doc: {
                                  required: true},

                                  desc_doc: {
                                  required: true,
                                  minlength: 2,
                                  maxlength: 5000},

                                  ano_publi: {
                                  required: true},

                                  edicion: {
                                  required: true},

                                  archivo: {
                                        required: true, 
                                        extension: "pdf",
                                        filesize : 20000000
                                       }
                                },
                              messages: {

                                email_autor: {
                                  required: "Por favor ingrese un correo valido."
                                },

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
                                },
                                archivo: {
                                    required: "Debe registrar el documento de su investigación o contenido en formato PDF.",
                                    extension: "El formato válido es: PDF",
                                    filesize: "Debe tener un peso máximo de 2 MB, pro favor verifique"
                                    }
                                }
                    }); 
}



function comunidad_ubv(valor){
var string = '';
if(valor=="S"){
            $("#ubv").val("S");
            string += '  <button type="button" class="btn boton" onclick="comunidad_ubv(\'N\');"> No es comunidad UBV </button>';
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
            string += '        <label for="username">Comunidad</label>';
            string += '        Dirección<br>';
            string += '<div class="form-group">';
             string += '<select onchange="cabestado();" name="com_estado" id="estado" class="form-control"  data-toggle="tooltip" data-placement="right" title="Por favor selecciona un estado">';
             string += '<option value="">Estado</option>';
             string += '<option value="AMAZONAS">AMAZONAS</option>';
             string += '<option value="ANZOATEGUI">ANZOATEGUI</option>';
             string += '<option value="APURE">APURE</option>';
             string += '<option value="ARAGUA">ARAGUA</option>';
             string += '<option value="BARINAS">BARINAS</option>';
             string += '<option value="BOLIVAR">BOLIVAR</option>';
             string += '<option value="CARABOBO">CARABOBO</option>';
             string += '<option value="COJEDES">COJEDES</option>';
             string += '<option value="DELTA AMACURO">DELTA AMACURO</option>';
             string += '<option value="DISTRITO CAPITAL">DISTRITO CAPITAL</option>';
             string += '<option value="FALCON">FALCON</option>';
             string += '<option value="GUARICO">GUARICO</option>';
             string += '<option value="LARA">LARA</option>';
             string += '<option value="MERIDA">MERIDA</option>';
             string += '<option value="MIRANDA">MIRANDA</option>';
             string += '<option value="MONAGAS">MONAGAS</option>';
             string += '<option value="NUEVA ESPARTA">NUEVA ESPARTA</option>';
             string += '<option value="PORTUGUESA">PORTUGUESA</option>';
             string += '<option value="SUCRE">SUCRE</option>';
             string += '<option value="TACHIRA">TACHIRA</option>';
             string += '<option value="TRUJILLO">TRUJILLO</option>';
             string += '<option value="VARGAS">VARGAS</option>';
            string += '<option value="YARACUY">YARACUY</option>';
            string += '<option value="ZULIA">ZULIA</option>';
            string += '</select>';
            string += '<select name="com_municipio" id="municipio" class="form-control"  data-toggle="tooltip" data-placement="right" title="Por favor selecciona un municipio">';
            string += '<option value="">Municipio</option>';
            string += '</select>';
            string += '<input type="text" name="com_otro" id="com_otro" class="form-control" maxlength="100" placeholder="Ciudad, Zona o Poblado" data-toggle="tooltip" data-placement="right" title="Por favor introduzca la ciudad, zona o poblado" autocomplete="off">';
}else{
            $("#ubv").val("N");
            string += '  <button type="button" class="btn boton" onclick="comunidad_ubv(\'S\');"> Es comunidad UBV </button>';
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
            string += '</label><select name="tipo_inv" id="tipo_inv"  class="form-control"><option value="Artículo Arbitrado">';
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

function reg_inv(){
var string = '';
string += '    <form name="form_inv" class="ad_min" id="form_inv">Datos del autor';
string += '    <h3>Datos del autor</h3>';
string += '        <input type="hidden" class="form-control" id="ubv" name="ubv" value="N">';
string += '            <input type="text" class="form-control"  onKeyPress="return cedula_esp2(event, this);" id="ci_autor" name="ci_autor" placeholder="Cédula">  ';
string += '            <input type="text" class="form-control" id="email_autor" name="email_autor" placeholder="Correo">  ';
string += '            <input type="text" class="form-control" id="nom_autor" name="nom_autor" placeholder="Nombre">   ';
string += '        <input type="text" class="form-control" id="ape_autor" name="ape_autor" placeholder="Apellido">';
string += '    <div id="agregar_a"></div><br>';
string += '  <button type="button" class="btn boton"  id="boton_mas"  onclick="mas_autores();"><span class="glyphicon glyphicon-user"></span> + Agregar más (max:5)</button>';
string += '    <h3>Datos del tutor</h3>';
string += '            <input type="text" class="form-control"  onKeyPress="return cedula_esp2(event, this);" id="ci_tutor" name="ci_tutor" placeholder="Cédula">  ';
string += '            <input type="text" class="form-control" id="email_tutor" name="email_tutor" placeholder="Correo">  ';
string += '            <input type="text" class="form-control" id="nom_tutor" name="nom_tutor" placeholder="Nombre">  ';
string += '        <input type="text" class="form-control" id="ape_tutor" name="ape_tutor" placeholder="Apellido">';
string += '    <input type="radio" name="tipo_tutor" value="A" checked>';
string += '    Académico';
string += '    <input type="radio" name="tipo_tutor" value="I">';
string += '    Institucional<br>';
string += '    <div id="agregar_t">';
string += '  <button type="button" class="btn boton" onclick="mas_tutores();"><span class="glyphicon glyphicon-user"></span> + Agregar más (max:2)</button></div><br>';
string += '    <h3>Datos de la Investigación</h3>';
string += '        <label for="username">Investigación</label>';
string += '  <input type="text" class="form-control" id="titulo_doc" name="titulo_doc" placeholder="Título">';
string += '<textarea name="desc_doc" class="form-control" rows="5" placeholder="Descripción"></textarea>';
string += '<p class="help-block">No debe ser mayor a 250 palabras</p>';
string += '<div id="contenido2">';
string += '</div>';
string += '<label for="archivo">Adjuntar un archivo</label>';
string += '<input type="file" name="archivo" id="archivo">';
string += '    <p class="help-block">No debe ser mayor a 20MB</p>';
string += '<p>Elige las temáticas de tu proyecto</p>';
        string += '<br><div id="tematicas">';
            string += '<div class="boxflex">   ';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="t_int"><p>Tecnologías de Internet</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="sft_pu"><p>Software Público</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="inter"><p >Interoperabilidad</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="tresd"><p>Diseño 3D</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="ai"><p>Inteligencia Artificial</p></div>';
            string += '</div>';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="apps"><p>Aplicaciones</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="arc"><p>Arquitectura y Sistemas</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="block"><p>Arquitecturas de Alto Rendimiento</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="cont_edu"><p>Contenidos Educativos</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="datos_a"><p>Datos Abiertos</p></div>';
            string += '</div>';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="edu_t"><p>Educación medida por las TIL</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="geo"><p>Sistemas de Información Geográficos</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="gob_dig"><p>Gobierno Digital</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="h_lib"><p>Hardware Libre</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="innova"><p>Innovaciones Tecnológicas</p></div>';
            string += '</div>';
            string += '<div class="d-flex  bd-highlight mb-5">';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="iot"><p>Internet de las Cosas</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="org_t"><p >Organizaciones medidas por Tecnologías</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="pro"><p>Programación</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="red"><p>Redes</p></div>';
              string += '<div class="p-2 bd-highlight" onclick="seleccionar(this);" id="robot"><p>Robótica</p></div>';
            string += '</div>';
            string += '</div>';
        string += '</div>';
string += '<div align=center> <input type="submit" class="btn btn-primary" value="Registrar Contenido"></div>';
        string += '</form>';

 $("#contenido3").html(string);
comunidad_ubv("N");
 jQuery.validator.addMethod("especialChars",
                           function(value, element) {
                                   return /^[A-Za-z\d=ñ#$%@_ -]+$/.test(value);
                           },
                   "No pueden haber caracteres especiales."
                );

                        $.validator.addMethod('filesize', function (value, element, arg) {
                            if(element.files[0].size<=arg){
                                return true;
                            }else{
                                return false;
                            }
                        });
          $("#form_inv").submit(function(e){ e.preventDefault(); }).validate({
              submitHandler: function(form) {
              $(".loader-page").css({visibility:"visible",opacity:"1"})
              var seleccionadas = $("#tematicas").find("div[class='p-3 bd-highlight']");
                                    if(seleccionadas.length<1){
                                        Swal.fire(
                                            'No has seleccionado suficientes temáticas',
                                            'Debes seleccionar al menos 1 temática para continuar.',
                                            'warning'
                                        )
                                    }else{
                                        if(seleccionadas.length>9){
                                            Swal.fire(
                                                '¡Demasiadas temáticas!',
                                                'Debe seleccionar un máximo de 9 temáticas.',
                                                'warning'
                                            )}else{
                                        var vector = new Array();
                                                                                            
                                        for (var i = 0; i < seleccionadas.length; i++) {
                                            var id = seleccionadas[i].getAttribute("id");
                                            vector.push(id);
                                        }

                              var inputs = $("#agregar_a").find("input[class='form-control generado']");
                              for (var i = 0; i < inputs.length; i++){
                                    var input = inputs[i];
                                    var valor = input.value;
                                    if(valor==""){
                                        input.setAttribute("disabled", "disabled");
                                    }
                              }
              var inputs = $("#agregar_t").find("input[class='form-control generado']");
              for (var i = 0; i < inputs.length; i++){
                    var input = inputs[i];
                    var valor = input.value;
                    if(valor==""){
                        input.setAttribute("disabled", "disabled");
                    }
              }
                 $.ajax({
                          type: "POST",
                          url: "../includes/form_inv.php",
                          data: { serial : $("#form_inv").serialize(),
                                 'array': JSON.stringify(vector)},
                          success: function (data) {
                              var json = eval("(" + data + ")");
                              $(".loader-page").css({visibility:"hidden",opacity:"0"})
                              if(json.res=="success"){
                                $(".loader-page").css({visibility:"visible",opacity:"1"})
                                                                var formData = new FormData($("#form_inv")[0]);
                                                               formData.append( 'id_doc', json.id_doc );
                                                                  var url= "../includes/archivo.php";
                                                                  $.ajax({
                                                                      type: "POST",                    
                                                                      url: url,                
                                                                      data: formData,        
                                                                      contentType: false,
                                                                      processData: false,
                                                                      success: function(data){
                                                                        $(".loader-page").css({visibility:"hidden",opacity:"0"})
                                                                        Swal.fire(
                                                                            '¡Registro exitoso!',
                                                                            'Se ha registrado la investigación exitosamente. Tu publicación será verificada por el personal autorizado de RedTIL y serás notificado al respecto.',
                                                                            'success'
                                                                        ).then(function () {
                                                                            if(json.cargado_por==1){
                                                                              window.location.href="menu_ad.html";
                                                                            }else{
                                                                              traer2();
                                                                            }
                                                                        })
                                                                      }

                                                                  })
                        
                              }
                              if(json.res=="error"){
                                Swal.fire(
                                '¡Error!',
                                'Ha ocurrido une error en el registro. Por favor ingresa tus datos nuevamente.',
                                'error'
                                )
                                reg_inv();
                              }
                              if(json.res=="vacio"){
                                Swal.fire(
                                  '¡Error!',
                                  'Asegurate de que no hayan campos vacíos.',
                                  'error'
                              ).then(function () {
                                    reg_inv();
                                })
                                } 
                              if(json.res=="autor_vacio"){
                                Swal.fire(
                                  '¡Error!',
                                  'Asegurate de que no hayan campos vacíos en la sección del autor.',
                                  'error'
                              ).then(function () {
                                    reg_inv();
                                })
                                }
                            if(json.res=="tutor_vacio"){
                                Swal.fire(
                                  '¡Error!',
                                  'Asegurate de que no hayan campos vacíos en la sección del tutor.',
                                  'error'
                              ).then(function () {
                                    reg_inv();
                                })
                                }
                          }
                      }); //end-ajax
             }
         }
                 return false;
              },
              rules: {
                  ci_autor: {
                  required: true,
                  minlength: 5,
                  maxlength: 10
                  },

                  email_autor: {
                  required: true,
                  email: true
                  },

                  nom_autor: {
                  required: true,
                  minlength: 2,
                  maxlength: 20,
                  especialChars: true},

                  ape_autor: {
                  required: true,
                  minlength: 2,
                  maxlength: 20,
                  especialChars: true},

                  ci_tutor:{
                  required: true,
                  minlength: 5,
                  maxlength: 10
                  },

                  email_tutor: {
                  required: true,
                  email: true
                  },

                  nom_tutor: {
                  required: true,
                  minlength: 2,
                  maxlength: 20,
                  especialChars: true},

                  ape_tutor: {
                  required: true,
                  minlength: 2,
                  maxlength: 20,
                  especialChars: true},

                  tipo_tutor: {
                  required: true},

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
                  required: true},
                  archivo: {
                    required: true, 
                    extension: "pdf",
                    filesize : 20000000
                   }
                },
              messages: {
                ci_autor: {
                  required: "Por favor ingrese su cédula.",
                  minlength: "La cédula debe tener un mínimo de 5 digitos.",
                  maxlength: "La cédula debe tener un máximo de 8 digitos."
                },

                ci_tutor: {
                  required: "Por favor ingrese su cédula.",
                  minlength: "La cédula debe tener un mínimo de 5 digitos.",
                  maxlength: "La cédula debe tener un máximo de 8 digitos."
                },

                email_autor: {
                  required: "Por favor ingrese un correo valido."
                },

                email_tutor: {
                  required: "Por favor ingrese un correo valido."
                },

                tipo_tutor:{
                  required: "Este campo es requerido."
                },

                nom_tutor: {
                  required: "Por favor ingrese su nombre.",
                  especialChars: "No puede contener caracteres especiales"
                },

                nom_autor: {
                  required: "Por favor ingrese su nombre.",
                  especialChars: "No puede contener caracteres especiales"
                },

                ape_tutor: {
                  required: "Por favor ingrese su nombre.",
                  especialChars: "No puede contener caracteres especiales"
                },

                ape_autor: {
                  required: "Por favor ingrese su nombre.",
                  especialChars: "No puede contener caracteres especiales"
                },

                tipo_tutor: {
                  required: "Este campo es requerido."
                },
                
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
                },
                archivo: {
                  required: "Debe registrar el documento de su investigación o contenido en formato PDF.",
                  extension: "El formato válido es PDF.",
                  filesize: "Debe tener un peso máximo de 2 MB, pro favor verifique"
                }
                }
            }); 
}


function reg_doc(){
  document.getElementById('ver_espera').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('inv').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('lib').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('reg_doc').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center activo"); 
            document.getElementById('list').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
  string = '';
  string += '<button onclick="registrar_inv()" type="submit" class="btn boton1">Registrar Investigación</button>';
  string += '<hr>';
  string += '<button onclick="registrar_lib();" type="submit" class="btn boton1">Registrar Contenido</button>';
   $("#contenido").html(string);
}

          function ver_lib(id_doc){
            $(".loader-page").css({visibility:"visible",opacity:"1"})
                    $.ajax({
                        type: "POST",
                        url: "../includes/ver_lib.php",
                        data: {id_doc : id_doc},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                            if (json[0].res == "fail") {
                              Swal.fire(
                                '¡Error!',
                                'Ha ocurrido un error en en la carga de archivos.',
                                'error'
                                )
                            }else{
                            var string = '';
                              string += '<div class="fichaproy">';                              
                              string += '<div class="box-titulo">';
                              string += '<img src="../assets/img/lib_default.jpg" alt="">  ';
                             
                              string += '<h4>'+ json[0].titulo_doc +'</h4>';
                              string += '</div>';
                               string += '<div class="box-body">';
                              string += '<ul>';
                                  string += '<li>';
                                  string += '<span class="num">Cota: '+ json[0].cota +'</span>';
                                  string += '</li>';
                                  string += '<li>';
                                  string += '<span class="num">Favs: '+ json[0].fav_cant +'</span>';
                                  string += '</li>';
                                  string += '<li>';
                                  string += '<span>Resumen del contenido: '+ json[0].resume_doc +'</span>';
                                  string += '</li><br>';
                                  string += '<li>';
                                  string += '<span>Año de publicación: '+ json[0].ano_publi +'</span>';
                                  string += '</li>';
                                  string += '<li>';
                                  string += '<span>Edición Nro: '+ json[0].edicion +'</span>';
                                  string += '</li>';
                                  string += '</ul>';
                                  string += '<span>Autores</span><br>';
                                  string += '<ul>';
                              for (var i = 1; i<json.length; i++) {
                                if (json[i].t_dato == "autor") {
                                  string += '<li>';
                                  string += '<span class="num">Nombre :'
                                  if(json[i].url_perfil!="null"){
                                  string += '<a href='+ json[i].url_perfil  +'>';
                                  }
                                  string += json[i].nombre +' '+ json[i].apellido +'</span>';
                                  if(json[i].url_perfil!="null"){
                                  string += '</a>';
                                  }
                                  string += '</li>';
                                }
                              }
                                  string += '</ul>';
                              string += '</div>';
                                   string += '<div> <h4>Temáticas: </h4>';
                                   if(json[1].t_int==1){
                                    string += '<span class="badge badge-danger">Tecnologías de Internet</span>';
                                   }
                                   if(json[1].pro==1){
                                    string += '<span class="badge badge-success">Programación</span>';
                                   }
                                   if(json[1].arc==1){
                                    string += '<span class="badge badge-danger">Arquitectura y Sistemas</span>';
                                   }
                                   if(json[1].red==1){
                                    string += '<span class="badge badge-secondary">Redes</span>';
                                   }
                                   if(json[1].org_t==1){
                                    string += '<span class="badge badge-dark">Organizaciones medidas por Tecnologías</span>';
                                   }
                                   if(json[1].edu_t==1){
                                    string += '<span class="badge badge-success">Educación medida por las TIL</span>';
                                   }
                                   if(json[1].block==1){
                                    string += '<span class="badge badge-warning">Arquitecturas de Alto Rendimiento</span>';
                                   }
                                   if(json[1].sft_pu==1){
                                    string += '<span class="badge badge-primary">Software Público</span>';
                                   }
                                   if(json[1].innova==1){
                                    string += '<span class="badge badge-warning">Innovaciones Tecnológicas</span>';
                                   }
                                   if(json[1].apps==1){
                                    string += '<span class="badge badge-info">Aplicaciones</span>';
                                   }
                                   if(json[1].iot==1){
                                    string += '<span class="badge badge-dark">Internet de las Cosas</span>';
                                   }
                                   if(json[1].robot==1){
                                    string += '<span class="badge badge-primary">Robótica</span>';
                                   }
                                   if(json[1].geo==1){
                                    string += '<span class="badge badge-light">Sistemas de Información Geográficos</span>';
                                   }
                                   if(json[1].h_lib==1){
                                    string += '<span class="badge badge-secondary">Hardware Libre</span>';
                                   }
                                   if(json[1].gob_dig==1){
                                    string += '<span class="badge badge-primary">Gobierno Digital</span>';
                                   }
                                   if(json[1].inter==1){
                                    string += '<span class="badge badge-dark">Interoperabilidad</span>';
                                   }
                                   if(json[1].datos_a==1){
                                    string += '<span class="badge badge-secondary">Datos Abiertos</span>';
                                   }
                                   if(json[1].ai==1){
                                    string += '<span class="badge badge-light">Inteligencia Artificial</span>';
                                   }
                                   if(json[1].tresd==1){
                                    string += '<span class="badge badge-light">Diseño 3D</span>';
                                   }
                                   if(json[1].cont_edu==1){
                                    string += '<span class="badge badge-info">Contenidos Educativos</span>';
                                   }
                              string += '</div>';
                              if(json[1].my_val=="done"){
                                  string += '<span class="num">' + json[1].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[1].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+id_doc+', this);" class="imgp">';
                              }
                              string += '<a type="submit" target="_blank" href="../'+json[0].archivo+'" onclick="descargar('+id_doc+');" class="btn boton">Descargar</a>';
                              
                              string += '</div>';
                              string += '</div>';
                              string += '</div>';
                                string += '<div class="creapublic">';                                
                                  string += '<textarea placeholder="Escribe un comentario.." id="public2"></textarea>';                  
                                  string += '<button onclick="enviar_coment('+id_doc+');" class="btn public">Publicar</button></form>';
                                  string += '</div>'; 
                              string += '<div id="coments">';
                              string += '</div>   '; 
                                string += '</div>';
                              $("#contenido3").html(string);
                              coments(id_doc);
                            }
                        }
                    }); //end-ajax
        }

        function ver_inv(id_doc){
            $(".loader-page").css({visibility:"visible",opacity:"1"})
                    $.ajax({
                        type: "POST",
                        url: "../includes/ver_inv.php",
                        data: {id_doc : id_doc},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
                            if (json[0].res == "fail") {
                              Swal.fire(
                                '¡Error!',
                                'Ha ocurrido un error en en la carga de archivos.',
                                'error'
                                )
                            }else{

                            var string = '';
                                                            string += '<div class="fichaproy">';
                              string += '<div class="box-titulo">';                              
                              string += '<img src="../assets/img/proy_default.jpg" alt="">  ';
                              
                            
                                
                                if(json[0].comunidad_ubv=="N"){
                              
                              
                              string += '<h4>'+ json[0].titulo_doc +'</h4>';
                              string += '</div>';
                              string += '<div class="box-body">';  
                              string += '<ul>';
                              string += '<li>';
                                  string += '<span class="num">Cota :'+ json[0].cota +'</span>';
                                  string += '</li>';
                                  string += '<li>';
                              string += '<span class="num">Favs :'+ json[0].fav_cant +'</span>';
                              string += '</li>';
                                  string += '<li>';
                              string += '<span>Resumen de la investigación: '+ json[0].resume_doc +'</span>';
                              string += '</li>';
                                  string += '<li>';
                              string += '<span>Tipo de investigación: '+ json[0].tipo_inv +'</span>';
                              string += '</li>';
                                  string += '<li>';
                              string += '<span>¿Publicado?: '+ json[0].publicado +'</span>';
                              string += '</li>';
                                  string += '</ul>';
                              
                              }
                              
                              if(json[0].comunidad_ubv=="S"){                                  
                                  
                                  string += '<h4>'+ json[0].titulo_doc +'</h4>';
                                  string += '</div>';
                                  string += '<div class="box-body">';  
                                  string += '<ul>';
                                  string += '<li>';
                                  string += '<span class="num">Favs: '+ json[0].fav_cant +'</span>';
                                  string += '</li>';
                                  string += '<li>';
                                  string += '<span>Resumen de la investigación: '+ json[0].resume_doc +'</span>';
                                  string += '</li><br>';
                                  string += '<li>';
                                  string += '<span>Estapa del proyecto: '+ json[0].grado_proy +'</span>';
                                  string += '</li>';
                                  string += '<li>';
                                  string += '<span>Area de Aplicación: '+ json[0].area_app +'</span>';
                                  string += '</li>';
                                  string += '<li>';
                                  string += '<span>Año/Semestre: '+ json[0].ano_semestre +'</span>';
                                  string += '</li>';
                                  string += '<li>';
                                  string += '<span>Fecha de presentación: '+ json[0].fecha_pre +'</span>';
                                  string += '</li>';
                                  string += '<li>';
                                  string += '<span>Comunidad: '+ json[0].estado +", "+ json[0].municipio +", "+  json[0].ciudad+'</span>';
                                    string += '</li>';
                                  string += '</ul>';
                              }

                              string += '<span>Autores</span><br>';
                                  string += '<ul>';
                              for (var i = 1; i<json.length; i++) {
                                if (json[i].t_dato == "autor") {
                                  string += '<li>';
                                  string += '<span class="num">Nombre: '
                                  if(json[i].url_perfil!="null"){
                                  string += '<a href='+ json[i].url_perfil  +'>';
                                  }
                                  string += json[i].nombre +' '+ json[i].apellido +'</span>';
                                  if(json[i].url_perfil!="null"){
                                  string += '</a>';
                                  }
                                  string += '</li>';
                                }
                              }
                                  string += '</ul>';
                              string += '<span>Tutores</span><br>';
                                  string += '<ul>';
                              for (var i = 1; i<json.length; i++) {
                                if (json[i].t_dato == "tutor") {
                                  string += '<li>';
                                  string += '<span class="num">Nombre: '
                                  if(json[i].url_perfil!="null"){
                                  string += '<a href='+ json[i].url_perfil  +'>';
                                  }
                                  string +=  json[i].nombre +' '+ json[i].apellido +'</span>';
                                  if(json[i].url_perfil!="null"){
                                  string += '</a>';
                                  }
                                  string += '</li>';
                                }
                              }
                                  string += '</ul>';
                              string += '</div>';
                              
                              string += '<div> <h4>Temáticas: </h4>';
                                   if(json[0].t_int==1){
                                    string += '<span class="badge badge-danger">Tecnologías de Internet</span>';
                                   }
                                   if(json[0].pro==1){
                                    string += '<span class="badge badge-success">Programación</span>';
                                   }
                                   if(json[0].arc==1){
                                    string += '<span class="badge badge-danger">Arquitectura y Sistemas</span>';
                                   }
                                   if(json[0].red==1){
                                    string += '<span class="badge badge-secondary">Redes</span>';
                                   }
                                   if(json[0].org_t==1){
                                    string += '<span class="badge badge-dark">Organizaciones medidas por Tecnologías</span>';
                                   }
                                   if(json[0].edu_t==1){
                                    string += '<span class="badge badge-success">Educación medida por las TIL</span>';
                                   }
                                   if(json[0].block==1){
                                    string += '<span class="badge badge-warning">Arquitecturas de Alto Rendimiento</span>';
                                   }
                                   if(json[0].sft_pu==1){
                                    string += '<span class="badge badge-primary">Software Público</span>';
                                   }
                                   if(json[0].innova==1){
                                    string += '<span class="badge badge-warning">Innovaciones Tecnológicas</span>';
                                   }
                                   if(json[0].apps==1){
                                    string += '<span class="badge badge-info">Aplicaciones</span>';
                                   }
                                   if(json[0].iot==1){
                                    string += '<span class="badge badge-dark">Internet de las Cosas</span>';
                                   }
                                   if(json[0].robot==1){
                                    string += '<span class="badge badge-primary">Robótica</span>';
                                   }
                                   if(json[0].geo==1){
                                    string += '<span class="badge badge-light">Sistemas de Información Geográficos</span>';
                                   }
                                   if(json[0].h_lib==1){
                                    string += '<span class="badge badge-secondary">Hardware Libre</span>';
                                   }
                                   if(json[0].gob_dig==1){
                                    string += '<span class="badge badge-primary">Gobierno Digital</span>';
                                   }
                                   if(json[0].inter==1){
                                    string += '<span class="badge badge-dark">Interoperabilidad</span>';
                                   }
                                   if(json[0].datos_a==1){
                                    string += '<span class="badge badge-secondary">Datos Abiertos</span>';
                                   }
                                   if(json[0].ai==1){
                                    string += '<span class="badge badge-light">Inteligencia Artificial</span>';
                                   }
                                   if(json[0].tresd==1){
                                    string += '<span class="badge badge-light">Diseño 3D</span>';
                                   }
                                   if(json[0].cont_edu==1){
                                    string += '<span class="badge badge-info">Contenidos Educativos</span>';
                                   }
                                   string += '</div>';
                                   string += '<a type="submit" target="_blank" href="../'+json[0].archivo+'" onclick="descargar('+id_doc+');" class="btn boton">Descargar</a>';
                                  string += '</div>';
                                  string += '<div class="creapublic">';                                
                                  string += '<textarea placeholder="Escribe un comentario.." id="public2"></textarea>';                  
                                  string += '<button onclick="enviar_coment('+id_doc+');" class="btn public">Publicar</button></form>';
                                  string += '</div>'; 
                              string += '<div id="coments">';
                              string += '</div>   '; 
                                string += '</div>';
                              
                              $("#contenido3").html(string);
                              coments(id_doc);
                            }
                        }
                    }); //end-ajax
        }


        function inv() {

            document.getElementById('ver_espera').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('inv').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center activo"); 
            document.getElementById('lib').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('reg_doc').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('list').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 

            $("#contenido").html("");
            $.ajax({
                type: "POST",
                url: "../includes/list_inv.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    var string = "";
                    var validos = 0;
                    if(json[0].res=="vacio"){
                        var string = "Sin elementos";
                    }else{
                        if(json.length>0){
                        string += '<div class="cajaproy">';
                        for (var i = 1; i < json.length; i++) {
                          if(json[i].valido=='V'){
                            validos++;
                              if(validos<=4){
                                  string += '<div class="cajaproy3"><img src="../assets/img/invesg.png" class="imgcajapil">';
                                  string += '<h6  onclick="para_mis_inv('+json[i].id_doc+');">'+json[i].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[i].fav_val=="done"){
                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[i].id_doc+', this);" class="imgp">';
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
                        }
                        string += '</div>';
                        if(validos>4){
                            string += '<div class="espacio">';
                            string += '<br>';
                            string += '<input onKeyUp="buscar_admin(this);" type="text" class="form-control" placeholder="Buscar documentos en espera">';
                            string += '<br>';
                            string += '    <table id="lista" class="table table-hover">';
                            string += '        <thead>';
                            string += '            <tr>';
                            string += '                <th scope="col">Titulo</th>';
                            string += '                <th scope="col">Me gusta</th>';
                            string += '            </tr>';
                            string += '        </thead>';
                            string += '        <tbody>';
                            for (var i = posicion; i <  json.length; i++){
                              if(json[i].valido=='V'){
                                string += '            <tr>';
                                string += '                <td onclick="para_mis_inv('+json[i].id_doc+');">'+json[i].titulo_doc+'</td>';
                                if(json[i].fav_val=="done"){
                                  string += '<td><span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp"></td>';
                                  }else{
                                  string += '<td><span class="num">' + json[i].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[i].id_doc+', this);" class="imgp"></td>';
                                  }   
                                string += '            </tr>';
                              }
                            }
                            string += '    </table>';
                            string += '</div>';
                        }
                        
                    }
                    }

                    
                    $("#contenido").html(string);
                    
                }
            }); //end-ajax
        } //end-function
        function lib() {
          document.getElementById('ver_espera').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('inv').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('lib').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center activo"); 
            document.getElementById('reg_doc').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            document.getElementById('list').setAttribute("class", "list-group-item d-flex justify-content-between align-items-center"); 
            $("#contenido").html("");
            $.ajax({
                type: "POST",
                url: "../includes/list_lib.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    var string = "";
                    var validos = 0;
                    if(json[0].res=="vacio"){
                        var string = "Sin elementos";
                    }else{
                        if(json.length>0){
                        string += '<div class="cajaproy">';
                        for (var i = 1; i < json.length; i++) {
                          if(json[i].valido=='V'){
                            validos++;
                              if(validos<=4){
                                  string += '<div class="cajaproy3"><img src="../assets/img/librog.png" class="imgcajapil">';
                                  string += '<h6 onclick="para_mis_lib('+json[i].id_doc+');">'+json[i].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[i].fav_val=="done"){
                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[i].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[i].id_doc+', this);" class="imgp">';
                                  }                            
                                  if(json[i].comp_val=="done"){
                                    string += '<span class="num">' + json[i].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[i].id_doc+', \'libro\');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[i].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[i].id_doc+', \'libro\');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  
                              }else{
                                 var posicion = i;
                                 break;
                              }
                        }
                        }
                        string += '</div>';
                        if(validos>4){
                            string += '<div class="espacio">';
                            string += '<br>';
                            string += '<input onKeyUp="buscar_admin(this);" type="text" class="form-control" placeholder="Buscar documentos en espera">';
                            string += '<br>';
                            string += '    <table id="lista" class="table table-hover">';
                            string += '        <thead>';
                            string += '            <tr>';
                            string += '                <th scope="col">Titulo</th>';
                            string += '                <th scope="col">Me gusta</th>';
                            string += '            </tr>';
                            string += '        </thead>';
                            string += '        <tbody>';
                            for (var i = posicion; i <  json.length; i++){
                              if(json[i].valido=='V'){
                                string += '            <tr>';
                                string += '                <td onclick="para_mis_lib('+json[i].id_doc+');">'+json[i].titulo_doc+'</td>';
                                if(json[i].fav_val=="done"){
                                  string += '<td><span class="num">' + json[i].favs + '</span><img src="../assets/img/heart.png" class="imgp"></td>';
                                  }else{
                                  string += '<td><span class="num">' + json[i].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[i].id_doc+', this); lib();" class="imgp"></td>';
                                  }  
                                string += '            </tr>';
                              }
                            }
                            string += '    </table>';
                            string += '</div>';
                        }
                    }
                    }

                    
                    $("#contenido").html(string);
                    
                }
            }); //end-ajax
        } //end-function

        function my_alert(){
          Swal.fire({
            html: "<div width='100%' id='contenido3' height: 500px;></iframe>",
            position: 'top',
            showConfirmButton: false,
            width: 900,
            showCloseButton: true,
            customClass: {
              popup: 'animated zoomIn'
            }
          })
        }

        function registrar_lib(){
          my_alert();
          reg_lib();
        }

        function registrar_inv(){
          my_alert();
          reg_inv();
        }