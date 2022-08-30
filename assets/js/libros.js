function lib() {
            $("#contenido").html("");
            $.ajax({
                type: "POST",
                url: "../includes/top_lib.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    $(".loader-page").css({visibility:"hidden",opacity:"0"});
                    var string = "";
                    if(json[0].res=="vacio"){
                        string += "<div class='nofound'>";
                        string += "<img src='../assets/img/no-found.png'>";
                        string += "<h1>No hay elementos<h1>";
                        string += '</div>';
                    }else{
                      for (var i = 0; i<json.length; i++) {
                          json[i].favs=parseInt(json[i].favs);
                      }
                      json.sort(function(a, b){
                          return a.favs - b.favs;
                      });
                      var t_int = [];
                      var pro = [];
                      var arc = [];
                      var red = [];
                      var org_t = [];
                      var edu_t = [];
                      var block = [];
                      var sft_pu = [];
                      var innova = [];
                      var apps = [];
                      var iot = [];
                      var robot = [];
                      var geo = [];
                      var h_lib = [];
                      var gob_dig = [];
                      var inter = [];
                      var datos_a = [];
                      var ai = [];
                      var tresd = [];
                      var cont_edu = [];
                        for (var i = 1; i < json.length; i++) {
                              var yo = json[1].tema;
                              var temas=[];
                              for (var j = 0; j < yo.length; j++) {
                                if(yo[j].valor>=1){
                                  temas.push(yo[j].tema);
                                }
                              }
                              var numero = Math.floor(Math.random()*temas.length);
                              var tematica = temas[numero];

                              if(tematica=="t_int"){
                                t_int.push(json[i].id_doc);
                              }
                              if(tematica=="pro"){
                                pro.push(json[i].id_doc);
                              }
                              if(tematica=="arc"){
                                arc.push(json[i].id_doc);
                              }
                              if(tematica=="red"){
                                red.push(json[i].id_doc);
                              }
                              if(tematica=="org_t"){
                                org_t.push(json[i].id_doc);
                              }
                              if(tematica=="edu_t"){
                                edu_t.push(json[i].id_doc);
                              }
                              if(tematica=="block"){
                                block.push(json[i].id_doc);
                              }
                              if(tematica=="sft_pu"){
                                sft_pu.push(json[i].id_doc);
                              }
                              if(tematica=="innova"){
                                innova.push(json[i].id_doc);
                              }
                              if(tematica=="apps"){
                                apps.push(json[i].id_doc);
                              }
                              if(tematica=="iot"){
                                iot.push(json[i].id_doc);
                              }
                              if(tematica=="robot"){
                                robot.push(json[i].id_doc);
                              }
                              if(tematica=="geo"){
                                geo.push(json[i].id_doc);
                              }
                              if(tematica=="h_lib"){
                                h_lib.push(json[i].id_doc);
                              }
                              if(tematica=="gob_dig"){
                                gob_dig.push(json[i].id_doc);
                              }
                              if(tematica=="inter"){
                                inter.push(json[i].id_doc);
                              }
                              if(tematica=="datos_a"){
                                datos_a.push(json[i].id_doc);
                              }
                              if(tematica=="ai"){
                                ai.push(json[i].id_doc);
                              }
                              if(tematica=="tresd"){
                                tresd.push(json[i].id_doc);
                              }
                              if(tematica=="cont_edu"){
                                cont_edu.push(json[i].id_doc);
                              }
                        }
                        string += '<h1>Libros Destacados<h1>';
                        var minimo=2;
                        if(cont_edu.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Contenidos educativos<h4>';
                          string += '<div class="owl-one owl-carousel owl-theme">';
                          for (var i = 0; i < cont_edu.length; i++) {
                            var val = cont_edu[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(pro.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Programación<h4>';
                          string += '<div class="owl-2 owl-carousel owl-theme">';
                          for (var i = 0; i < pro.length; i++) {
                            var val = pro[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(t_int.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Tecnologías de Internet<h4>';
                          string += '<div class="owl-3 owl-carousel owl-theme">';
                          for (var i = 0; i < t_int.length; i++) {
                            var val = t_int[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(arc.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Arquitectura y Sistemas<h4>';
                          string += '<div class="owl-4 owl-carousel owl-theme">';
                          for (var i = 0; i < arc.length; i++) {
                            var val = arc[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(red.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Redes<h4>';
                          string += '<div class="owl-5 owl-carousel owl-theme">';
                          for (var i = 0; i < red.length; i++) {
                            var val = red[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(org_t.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Organizaciones Medidas por Tecnologías<h4>';
                          string += '<div class="owl-6 owl-carousel owl-theme">';
                          for (var i = 0; i < org_t.length; i++) {
                            var val = org_t[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(edu_t.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Educación Medida por las TIL<h4>';
                          string += '<div class="owl-7 owl-carousel owl-theme">';
                          for (var i = 0; i < edu_t.length; i++) {
                            var val = edu_t[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(block.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Arquitecturas de Alto Rendimiento<h4>';
                          string += '<div class="owl-8 owl-carousel owl-theme">';
                          for (var i = 0; i < block.length; i++) {
                            var val = block[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(sft_pu.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Software Público<h4>';
                          string += '<div class="owl-9 owl-carousel owl-theme">';
                          
                          for (var i = 0; i < sft_pu.length; i++) {
                            var val = sft_pu[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';

                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(innova.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Innovaciones Tecnológicas<h4>';
                          string += '<div class="owl-10 owl-carousel owl-theme">';
                          for (var i = 0; i < innova.length; i++) {
                            var val = innova[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(apps.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Aplicaciones<h4>';
                          string += '<div class="owl-11 owl-carousel owl-theme">';
                          for (var i = 0; i < apps.length; i++) {
                            var val = apps[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(iot.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Internet de las Cosas<h4>';
                          string += '<div class="owl-12 owl-carousel owl-theme">';
                          for (var i = 0; i < iot.length; i++) {
                            var val = iot[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(robot.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Robótica<h4>';
                          string += '<div class="owl-14 owl-carousel owl-theme">';
                          for (var i = 0; i < robot.length; i++) {
                            var val = robot[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(geo.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Sistemas de Información<h4>';
                          string += '<div class="owl-15 owl-carousel owl-theme">';
                          for (var i = 0; i < geo.length; i++) {
                            var val = geo[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(h_lib.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Hardware Libre<h4>';
                          string += '<div class="owl-16 owl-carousel owl-theme">';
                          for (var i = 0; i < h_lib.length; i++) {
                            var val = h_lib[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(gob_dig.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Gobierno Digital<h4>';
                          string += '<div class="owl-17 owl-carousel owl-theme">';
                          for (var i = 0; i < gob_dig.length; i++) {
                            var val = gob_dig[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(inter.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Interoraperabilidad<h4>';
                          string += '<div class="owl-18 owl-carousel owl-theme">';
                          for (var i = 0; i < inter.length; i++) {
                            var val = inter[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(datos_a.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Datos Abiertos<h4>';
                          string += '<div class="owl-19 owl-carousel owl-theme">';
                          for (var i = 0; i < datos_a.length; i++) {
                            var val = datos_a[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(ai.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>Inteligencia Artificial<h4>';
                          string += '<div class="owl-20 owl-carousel owl-theme">';
                          for (var i = 0; i < ai.length; i++) {
                            var val = ai[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                          if(tresd.length>minimo){
                          string += '<div class="cajaproy">';
                          string += '<h4>3D<h4>';
                          string += '<div class="owl-21 owl-carousel owl-theme">';
                          for (var i = 0; i < tresd.length; i++) {
                            var val = tresd[i];
                              var index = json.findIndex(function(item, i){
                                return item.id_doc == val
                              });
                             string += '<div class="item">';
                                  string += '<div class="cajaproy3"><span><img src="../assets/img/librog.png" class="imgcajapil"></span>';
                                  string += '<h6 onclick="ver_lib('+json[index].id_doc+');">'+json[index].titulo_doc+'</h6>';
                                  string += '<hr>';
                                  string += '<div class="iconoscajaproy">';
                                  if(json[index].fav_val=="done"){
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heart.png" class="imgp">';
                                  }else{
                                  string += '<span class="num">' + json[index].favs + '</span><img src="../assets/img/heartempty.png" onclick="fav('+json[index].id_doc+', this);" class="imgp">';
                                  }
                              if(json[index].my_val=="done"){
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[index].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+json[index].id_doc+', this);" class="imgp">';
                              }                            
                                  if(json[index].comp_val=="done"){
                                    string += '<span class="num">' + json[index].comp  + '</span><img src="../assets/img/search_t.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }else{
                                    string += '<span class="num">' + json[index].comp + '</span><img src="../assets/img/search.png" onclick="comp('+json[index].id_doc+');" class="imgp">';
                                    }
                                  string += '</div>';
                                  string += '</div>';
                                  string += '</div>';
                            }//end-for
                                  string += '</div>';
                                  string += '</div>';
                          }//end-if

                    }//end-else-vacio

                    
                    $("#contenido").html(string);

                    var encontrados = $("#contenido").find("div[class='item']");
                    if(encontrados.length==0){
                      var string = '';
                      string += "<div class='nofound'>";
                      string += "<img src='../assets/img/no-found.png'>";
                      string += "<h1>No hay elementos<h1>";
                      string += '</div>';
                      $("#contenido").html(string);
                    }

          $('.owl-one').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-2').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-3').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-4').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-5').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-6').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-7').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-8').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-9').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-10').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-11').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-12').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-14').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-15').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-16').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-17').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-18').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-19').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })
          $('.owl-20').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"]
            })
          $('.owl-21').owlCarousel({
                loop:true,
                items:3,
                margin:100,
                navigation:true,
                navText: ["<img src='../assets/img/myprevimage.png'>","<img src='../assets/img/mynextimage.png'>"],
                dots: false
            })

              $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
              $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
                      
                }
            }); //end-ajax
        } //end-function

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
        function descargar(id){
                    $.ajax({
                        type: "POST",
                        url: "../includes/desc.php",
                        data: {id_doc : id},
                        success: function (data) {
                        }
                    }); //end-ajax
        }

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
                                      string += '<hr>';
                                      string += '<span class="num">99</span><img src="../assets/img/heartw.png" class="imgp">';
                                      string += '<span class="num">99</span><img src="../assets/img/cloudw.png" class="imgp">      ';
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

          function enviar_coment(id){
            $(".loader-page").css({visibility:"visible",opacity:"1"})
            var texto =$("#public").val();
            texto = (texto.split('\n')).join('<br />');
                    $.ajax({
                        type: "POST",
                        url: "../includes/enviar_coment.php",
                        data: {id_doc : id,
                              texto : texto},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            if(json.res=="success"){
                              $("#public").val("");
                              coments(id);
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

                    function ver_lib(id_doc){
            $(".loader-page").css({visibility:"visible",opacity:"1"})
                    $.ajax({
                        type: "POST",
                        url: "../includes/ver_lib.php",
                        data: {id_doc : id_doc},
                        success: function (data) {
                            var json = eval("(" + data + ")");
                            if (json[0].res == "fail") {
                              Swal.fire(
                                '¡Error!',
                                'Ha ocurrido un error en en la carga de archivos.',
                                'error'
                                )
                            }else{
                            $(".loader-page").css({visibility:"hidden",opacity:"0"})
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
                                  string += '<span>Resumen del libro: '+ json[0].resume_doc +'</span>';
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
                              string += '</div>';
                              string += '<a type="submit" target="_blank" href="../'+json[1].archivo+'" onclick="descargar('+id_doc+',);" class="btn boton">Descargar</a>';
                              string += '<button type="submit" onclick="lib();" class="btn boton1">Mas Libros</button>';
                              string += '</div>';
                              if(json[1].my_val=="done"){
                                  string += '<span class="num">' + json[1].my + '</span><img src="../assets/img/my.png" class="imgp">';
                              }else{
                                  string += '<span class="num">' + json[1].my + '</span><img src="../assets/img/my0.png" onclick="to_me('+id_doc+', this);" class="imgp">';
                              }
                                string += '<div class="addcomenta">';                                
                                  string += '<textarea placeholder="Escribe un comentario.." id="public"></textarea>';                  
                                  string += '<button onclick="enviar_coment('+id_doc+');" class="btn boton2">Publicar</button></form>';
                                  string += '</div>'; 
                              string += '<div id="coments">';
                              string += '</div>   '; 
                                string += '</div>';
                              $("#contenido").html(string);
                              coments(id_doc);
                            }
                        }
                    }); //end-ajax
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

        function comp(id_doc){
            $(".loader-page").css({visibility:"visible",opacity:"1"})
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
                        lib();
                    }
                }
            }); //end-ajax
        } //end-function

        $(document).ready(function ($) {
          $(".loader-page").css({visibility:"visible",opacity:"1"})
          check();
           $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
            $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
        });