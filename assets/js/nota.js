function to_it(url){
    window.parent.location = url;
}

function pendiente(){
            var url = document.URL;
            url = url.split('html/');
            var link = url[1];
            var lugar = "nota";
            $.ajax({
                    type: "POST",
                    url: "../includes/top_pen.php",
                    data: {link: link,
                          lugar : lugar},
                    success: function (data) {
                        var json = eval("(" + data + ")");
                            var string = '';
                            string +='<div class="mod_user">'; 
                        if (json[0].res == "success") {
                            string += "<h4>Descubre tareas</h4>";
                            string += '<div class="box_notita">';
                                   var contador=1
                                    for (var i = 1; i < json.length; i++) {
                                        string += '    <div class="notitas_'+contador+'">';
                                        contador++
                                        if(contador==7){
                                          contador=1;
                                        }
                                        var cadena0 = json[i].titulo_pen;
                                        if(cadena0.length>80){
                                            cadena0 = cadena0.slice(0, 80);
                                            cadena0 += "...";
                                        }
                                        string += '    <a href="" onclick="to_it(\''+json[i].url_perfil+'\');">';
                                        string += '        <h6>'+cadena0+'</h6>';
                                        var cadena = json[i].resume_pen;
                                        if(cadena.length>150){
                                            cadena = cadena.slice(0, 150);
                                            cadena += "...";
                                        }
                                        string += '        <li>'+cadena+'</li></a><div class="footnotitas">';
                                        string += '        <li><a href="" onclick="to_it(\''+json[i].url_perfil_user+'\');">Por '+json[i].nombre+' '+json[i].apellido+'</a></li>';
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
                            string += "<div class='nofound'>";
                            string += "<img src='../assets/img/no-found.png'>";
                            string += "<h1>No hay elementos</h1>";
                            string += '</div>';
                        }
                        string += '</div>  ';
                         $("#contenido").html(string);
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


        function check() {
            $.ajax({
                type: "POST",
                url: "../includes/session.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json.res == "fail") {
                      var string ='';
                        string += "<div class='nofound'>";
                        string += "<img src='../assets/img/no-found.png'>";
                        string += "<h1>Usuario no en sesión<h1>";
                        string += '</div>';
                        $("#contenido").html(string);
                    }else{
                        pendiente();
                    }
                }
            }); //end-ajax
        } //end-function

        $(document).ready(function ($) {
          $(".loader-page").css({visibility:"visible",opacity:"1"})
          check()
        });