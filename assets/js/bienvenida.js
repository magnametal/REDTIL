
function fin(){
	if($("#siguio").val()=="V"){
		$.ajax({
	                type: "POST",
	                url: "../includes/fin_bienvenida.php",
	                data: "",
	                success: function (data) {
	                    var json = eval("(" + data + ")");
	                    if (json.res == "success") {
	                    	Swal.fire(
								'¡Bienvenido a RedTIL!',
								"Has completado tus datos básicos, disfruta de la comunidad científica.",
								'success'
								).then(function () {
		                        window.location.href="../html/inicio.html";
		                        })
	                    }else{
	                    	Swal.fire(
								'Error en servidor',
								'Error',
								'warning'
								).then(function () {
		                        window.location.reload();
		                        })
	                    	
	                    }
	                }
	    }); //end-ajax
    }else{
    	Swal.fire(
			'Elige a quien seguir',
			'Debes seguir al menos un usuario para iniciar tu red.',
			'warning'
		)
    }
}

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
										  title: '¡Bienvenido a RedTIL!',
										  text: 'Tu imagen perfil ya esta actualizada.',
										  imageUrl: "../"+json.imagen,
										  imageWidth: 200,
										  imageClass: "plus",
										  imageHeight: 200
										}).then(function () {
	                                      omitir2();
	                                      
	                            		})
				                    }
				                }
				            }); //end-ajax 
   					}else{
   						$(".loader-page").css({visibility:"hidden",opacity:"0"});
	   						var imagen = "../assets/img/avatares/default/default.jpg";
					                    	Swal.fire({
											  title: '¡Bienvenido a RedTIL!',
											  text: 'Tu perfil ya esta actualizado. ¡Disfruta de la comunidad!',
											  imageUrl: imagen,
											  imageWidth: 200,
											  imageClass: "plus",
											  imageHeight: 200
											}).then(function () {
		                                      omitir2();
		                            		})
					    }
   					
        }

        function seguir(id_user, tag) {
        		var clase=tag.getAttribute("class");
					if(clase=="cajaproy1"){
						$("#siguio").val("V");
						tag.setAttribute("class", "cajaproy11");
						$.ajax({
				                type: "POST",
				                url: "../includes/seguir.php",
				                data: {id_seguir : id_user},
				                success: function (data) {
				                    var json = eval("(" + data + ")");
				                    if (json.res == "success") {
				                        Swal.fire(
				                            '¡Estas siguiendo a este usuario!',
				                            'Ahora puedes disfrutar de los contenidos de este usuario en tu perfil.',
				                            'success'
				                                )
				                    }
				                }
				            }); //end-ajax
					}
					if(clase=="cajaproy11"){
						tag.setAttribute("class", "cajaproy1");
						$.ajax({
				                type: "POST",
				                url: "../includes/no_seguir.php",
				                data: {id_no_seguir : id_user},
				                success: function (data) {
				                    var json = eval("(" + data + ")");
				                    if (json.res == "success") {
				                        Swal.fire(
				                            '¡Has dejado de seguir a este usuario!',
				                            'Ahora puedes disfrutar de los contenidos de este usuario en tu perfil.',
				                            'success'
				                                )
				                    }
				                }
				        }); //end-ajax
					}
            
        } //end-function


            function buscar2(){
                var buscar = $("#busqueda").val();
                if(buscar!=""){
                	$.ajax({
                                    type: "POST",
                                    url: "../includes/buscar2.php",
                                    data: {buscar : buscar},
                                    success: function (data) {
                                        var json = eval("(" + data + ")");
                                        var string ='';
                                        if(json[0].res=="success"){
											        for (var i = 1; i < json.length; i++) {
											        	string += '<div class="cajaproy1" onclick="seguir('+json[i].id_user+', this);">';
												        string += '    <img src="../'+ json[i].imagen +'" alt="">';
												        string += '    <div class="orden"><p>'+json[i].nombre+' '+json[i].apellido+'</p>';
												        string += '    <p>DE '+ json[i].estado +'</p></div>';
												        string += '</div>';
											        }
                                            
                                        }else{
                                            string += '<div class="userconect">';
                                            string += '    <h6>No se encontraron elementos</h6>';
                                            string += '</div>';
                                        }
                                        $("#contenido2").html(string);
                                    }
                    }); //end-ajax
                }          
            }

  function updateCoords(c)
  {
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
  };


		function omitir2(){
			$.ajax({
                type: "POST",
                url: "../includes/pick_users.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    	document.getElementById('contenido').setAttribute("class", "boxultimate1");
						var string = '';
				            string += '<h2>¡Encuentra y sigue a tus amigos! </h2>';
			                    if (json[0].res == "simple") {
			                    		string += '<h2>¡Sigue a otros usuarios!</h2>';
			                    }
			                    if (json[0].res == "comunidad") {
										string += '<h2>¡Sigue a otros usuarios en '+ json[0].estado +'!</h2>';
			                    }
			                    string += '	 <input type="hidden" id="siguio" name="siguio" value="F"/>';
                    			string += '<h5 style="color: dimgray;">Busca nombres, especialidad, institución, PFG, etc</h5>';
						        string += '<input type="search" class="search" id="busqueda">';
						        string += '<button onclick="buscar2();" class="btn boton"><img class="imgred" src="../assets/img/buscarred.png" alt="" ></button>';
						        string += '<br><div id="contenido2">';
						        for (var i = 1; i < json.length; i++) {
						        	string += '<div class="cajaproy1" onclick="seguir('+json[i].id_user+', this);">';
							        string += '    <img src="../'+ json[i].imagen +'" alt="">';
							        string += '    <div class="orden"><p>'+json[i].nombre+' '+json[i].apellido+'</p>';
							        string += '    <p>DE '+ json[0].estado +'</p></div>';
							        string += '</div>';
						        }
								string += '</div><button type="submit" onclick="fin();" class="btn boton1">Continuar</button>';
						$("#contenido").html(string);
                }
            }); //end-ajax


						        
		}

		function paso1(){
			document.getElementById('contenido').setAttribute("class", "boxultimate4");
						var string = '';
				            string += '<form id="formulario"><h3 id="text">Carga una imagen de perfil</h3>';  
					        string += '<br>      ';
					        string += '<center><img src="../assets/img/imgplus.png" class="plus" id="imagen" name="imagen"></center>';
					        string += '   <label id="label" class="btn boton" for="file">Carga una foto</label><input type="file" accept="image/*" name="img" id="file" class="btn file">';
					        string += '	 <input type="hidden" id="filename" name="filename" />';
					        string += '	 <input type="hidden" id="src_crop" name="src_crop" />';
					        string += '	 <input type="hidden" id="imagen_w" name="imagen_w" />';
					        string += '	 <input type="hidden" id="imagen_h" name="imagen_h" />';
					        string += '	 <input type="hidden" id="tipo" name="tipo" />';
					        string += '	 <input type="hidden" id="x" name="x" />';
						    string += '  <input type="hidden" id="y" name="y" />';
						    string += '  <input type="hidden" id="w" name="w" />';
						    string += '  <input type="hidden" id="h" name="h" />';
					        string += '</form>';
					        string += '<button class="btn boton1" onclick="final();">Comenzar</button>';
					        string += '<button class="btn boton" style="visibility: hidden; opacity: 0;" id="retro" onclick="paso1();">Cancelar Recorte</button>';
						$("#contenido").html(string);
                            
                            $("input[name='img']").on("change", function(){
                            	$('#text').html("Recorta tu imagen de perfil");
                                if($("#file").val()!=""){
                                	var filename = $('#file').val().replace(/C:\\fakepath\\/i, '');
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
                                                	$("#file").css({visibility:"hidden",opacity:"0"});
                                                	$("#label").css({visibility:"hidden",opacity:"0"});
                                                	$("#retro").css({visibility:"visible",opacity:"1"});
                                                	document.getElementById('src_crop').setAttribute("value", json.imagen);
                                                    document.getElementById('imagen').setAttribute("src", "../"+json.imagen);
                                                	document.getElementById('imagen').setAttribute("class", "");
                                                	document.getElementById('imagen').setAttribute("id", "cropbox");

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
		}

        function check() {
        	$(".loader-page").css({visibility:"visible",opacity:"1"});
            $.ajax({
                type: "POST",
                url: "../includes/session.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json.res == "success") {
			            tags();
                    }else{
                    	window.location.href="../index.html";
                    }
                }
            }); //end-ajax
        } //end-function
function seleccionar(img){
	var clase=img.getAttribute("class");
	if(clase=="tag"){
		img.setAttribute("class", "tag1");
	}
	if(clase=="tag1"){
		img.setAttribute("class", "tag");
	}
}

function reg_tags(){
	var seleccionadas = $("#tematicas").find("img[class='tag1']");
	if(seleccionadas.length<3){
		Swal.fire(
			'No has seleccionado suficientes temáticas',
			'Debes seleccionar al menos 3 temáticas para continuar.',
			'warning'
		)
	}else{
		var vector = new Array();
                                                            
		for (var i = 0; i < seleccionadas.length; i++) {
			var id = seleccionadas[i].getAttribute("id");
			vector.push(id);
		}
		$.ajax({
                type: "POST",
                url: "../includes/reg_tem.php",
                data: {'array': JSON.stringify(vector)},
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json.res == "success") {
			            paso1();
                    }
                    if (json.res == "fail") {
                    	Swal.fire(
							'Oops',
							'Algo salio mal, por favor selecciona las temáticas nuevamente.'+json.error,
							'error'
						).then(function () {
                            tags();
                        })
			            
                    }
                }
            }); //end-ajax
	}
}

function tags(){
	var string = '';
	 document.getElementById('contenido').setAttribute("class", "boxultimate1");
        string += '<h2>Selecciona 3 o más temáticas de interes</h2>';
        string += '<br><form id="tematicas">';
        string += '<table width="100%"><tr>';
        string += '<td><img class="tag" src="../assets/img/tag3d.jpg" id="tresd" alt="" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/tagrobotica%20(1).jpg" id="robot" alt="" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/tagred.jpg" alt="" id="red" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/tagorg.jpg" alt="" id="org_t" onclick="seleccionar(this);"></td>';
        string += '</tr>'; 
        string += '<tr>';        
        string += '<td><img class="tag" src="../assets/img/taginter.jpg" alt="" id="t_int" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/taginnov.jpg" alt="" id="innova" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/taghard.jpg" alt="" id="h_lib" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/taggeo.jpg" alt="" id="geo" onclick="seleccionar(this);"></td>';
        string += '</tr>';
        string += '<tr>';        
        string += '<td><img class="tag" src="../assets/img/tagarq.jpg" alt="" id="arc" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/softwarepublico.jpg" alt="" id="sft_pu" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/tagpro.jpg" alt="" id="pro" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/tag1.jpg" alt="" id="inter" onclick="seleccionar(this);"></td>';
        string += '</tr>'; 
        string += '<tr>';        
        string += '<td><img class="tag" src="../assets/img/tagiot.jpg" alt="" id="iot" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/tagdatos.jpg" alt="" id="datos_a" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/taggob.jpg" alt="" id="gob_dig" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/tagblock.jpg" alt="" id="block" onclick="seleccionar(this);"></td>';
        string += '</tr>'; 
        string += '<tr>';        
        string += '<td><img class="tag" src="../assets/img/tagedu.jpg" alt="" id="edu_t" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/tagbook.jpg" alt="" id="cont_edu" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/tagapp.jpg" alt="" id="apps" onclick="seleccionar(this);"></td>';
        string += '<td><img class="tag" src="../assets/img/tagai.jpg" alt="" id="ai" onclick="seleccionar(this);"></td>';
        string += '</tr></table></form>'; 
        string += '    <input type="submit" class="btn boton1" onclick="reg_tags();">';
        $("#contenido").html(string);
        $(".loader-page").css({visibility:"hidden",opacity:"0"});

}

$(document).ready(function() {
check();
});

