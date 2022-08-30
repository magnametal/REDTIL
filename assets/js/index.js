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

       function cabestado() {
              $("#municipio").html("");
              var state = $("#estado").val();
              municipios(state);
       } //end-function

function verify_c() {
    var cedula = document.getElementById("cedula").value;
    if (cedula == "") {
        document.getElementById("cedula").style.border = '2px solid red';
    } else {
        $.ajax({
            type: "POST",
            url: "includes/verify_c.php",
            data: {
                cedula: cedula
            },
            success: function (data) {
                var json = eval("(" + data + ")");
                if (json.res == "success") {
                    document.getElementById("cedula").style.border = '0.5px solid red';
                    document.getElementById("cedula").removeAttribute("cedula"); 
                } else {
                    document.getElementById("cedula").style.border = '0.5px solid green';
                    document.getElementById("cedula").removeAttribute("cedula"); 
                }
            }
        }); //end-ajax
    } //end-if
}

function verify() {
    var correo = document.getElementById("correo_reg").value;
    $.ajax({
        type: "POST",
        url: "includes/verify.php",
        data: {
            correo: correo
        },
        success: function (data) {
            var json = eval("(" + data + ")");
            if (json.res == "success") {
                document.getElementById("correo_reg").style.border = '2px solid red';
            } else {
                if (!(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(correo))) {
                    document.getElementById("correo_reg").style.border = '0.5px solid red';
                } else {
                     document.getElementById("correo_reg").style.border = '0.5px solid green';
                }

            }
        }
    }); //end-ajax
}
$(function () {
    $("input[name='correo_reg']").on("change", function () {
        setTimeout("verify()", 1000);
    }); //end-accion-btn
}); //end-function
$(function () {
    $("input[name='cedula']").on("change", function () {
        setTimeout("verify_c()", 1000);
    }); //end-accion-btn
}); //end-function
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

        function check() {
            $.ajax({
                type: "POST",
                url: "includes/session.php",
                data: "",
                success: function (data) {
                    var json = eval("(" + data + ")");
                    if (json.res == "success") {
                        if (json.t_user == "administrador") {
			                        window.location.href = "html/menu_ad.html";
			                    }			                    
			        	if (json.t_user == "user") {
			                        window.location.href = "html/inicio.html";
			                    }
                    }
                }
            }); //end-ajax
        } //end-function

$().ready(function() {
	check();
console.log("Bienvenido al sistema RedTIL V1.0");
$("#form_log").submit(function(e){ e.preventDefault(); }).validate({
			submitHandler: function() {
				$(".loader-page").css({visibility:"visible",opacity:"1"});
					var correo = $("#correo").val();
			        var clave = $("#clave").val();
			        $.ajax({
			            type: "POST",
			            url: "includes/login.php",
			            data: {
			                correo: correo,
			                clave: clave
			            },
			            success: function (data) {
			                var json = eval("(" + data + ")");	
			                $(".loader-page").css({visibility:"hidden",opacity:"0"});		                
			                if (json.res == "success") {
                                if(json.bienvenida=="V"){
                                   if (json.t_user == "administrador") {
                                    window.location.href = "html/menu_ad.html";
                                    }                               
                                    if (json.t_user == "user") {
                                        window.location.href = "html/inicio.html";
                                    } 
                                }else{
                                    window.location.href = "html/my_profile.html";
                                }
			                    
			                } else {
			                	if(json.res == "banneado"){
			                		$("#form_log")[0].reset();
			                    Swal.fire(
									  'Error',
									  'Tu cuenta esta desactivada por los administradores.',
									  'error'
									)
			                	}
			                	if(json.res == "validar"){
			                		$("#form_log")[0].reset();
			                    Swal.fire(
									  'Error',
									  'Falta verificación por correo. Recuerde revisar su bandeja de correo no deseado o spam, para confirmar y poder ingresar al sistema.',
									  'error'
									)
			                	}
			                	if(json.res == "fail"){
			                		$("#form_log")[0].reset();
			                    Swal.fire(
									  'Error',
									  'Correo o clave invalidos. Por favor verifique.',
									  'error'
									)
			                	}
			                    
			                }
			            }
			        }); //end-ajax	
			        return false;
			},
			rules: {
				correo: {
					required: true,
					email: true
				},
				clave: {
					required: true,
					minlength: 5,
					maxlength: 12
				}
			},
			messages: {
				correo: "Por favor ingrese un correo valido.",
				clave: {
					required: "Por favor ingrese una clave",
					minlength: "Tu clave debe contener un mínimo de 5 caracteres",
					maxlength: "Tu clave debe contener un máximo de 12 caracteres"
				}
			}
		});
$("#form_reg").submit(function(e){ e.preventDefault(); }).validate({
			submitHandler: function(form) {
			$(".loader-page").css({visibility:"visible",opacity:"1"})
            var clave = $("#clave_reg").val();
			var regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;                
            if (regex.test(clave)) {
                var result = ""
                var peque = 13;
                  var caracteres = 'ABCDEFGHIJKMNLOPQRSTUVWXYZabcdefghijkmnlopqrstuvwxyz0123456789';
                  var caracterestam = caracteres.length;
                  for (var i = 0; i < peque; i++) {
                    result +=  caracteres.charAt(Math.floor(Math.random()* caracterestam));
                  }
                  result = "perfil.html?user="+result;
                $("#url_perfil").val(result);
				 $.ajax({
			            type: "POST",
			            url: "includes/registro.php",
			            data: $("#form_reg").serialize(),
			            success: function (data) {
			                var json = eval("(" + data + ")");
			                $(".loader-page").css({visibility:"hidden",opacity:"0"})
			                if(json.res=="success"){
			                	Swal.fire(
									  '¡Registro exitoso!',
									  'Hemos enviado un correo electronico a tu email. Por favor verificalo para activar tu cuenta.',
									  'success'
								).then(function () {
                                      window.location.reload();
                            	})
								
			                }
			                if(json.res=="error"){
			                	Swal.fire(
									  '¡Error!',
									  'Ha ocurrido une error en el registro. Por favor ingresa tus datos nuevamente.',
									  'error'
								)
								$("#form_reg")[0].reset();
			                }
			                if(json.res=="ocupado"){
			                	Swal.fire(
									  '¡Error!',
									  'La cédula o correo ya estan registrados. Por favor verifica.',
									  'error'
								)
								$("#form_reg")[0].reset();
			                }
			                if(json.res=="vacio"){
			                	Swal.fire(
									  '¡Error!',
									  'Asegurate de que no hayan campos vacíos.',
									  'error'
								)
								$("#form_reg")[0].reset();
								
			                }
			                if(json.res=="cedula"){
			                	Swal.fire(
									  '¡Formato de cédula incorrecto!',
									  'Asegurate de que la cédula tenga "V-", "P-" o "E-" antes de los dígitos. Ejemplo: V-12345678',
									  'error'
								)
								
			                }
			            }
			        }); //end-ajax
				}else{
					$(".loader-page").css({visibility:"hidden",opacity:"0"})
					Swal.fire(
									  '¡Por favor verifica tu clave!',
									  'La clave debe contener al menos 1 letra mayúscula y un número.',
									  'error'
					)
					document.getElementById("clave_reg").style.border = '0.5px solid red';
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
					maxlength: 20
				},
				apellido: {
					required: true,
					minlength: 2,
					maxlength: 20
				},
				clave_reg: {
					required: true,
					minlength: 5,
					maxlength: 12
				},
				presecret: {
					required: true
				},
				resecret: {
					required: true,
					minlength: 2,
					maxlength: 50
				},
				re_clave: {
					required: true,
					minlength: 5,
					maxlength: 12,
					equalTo: "#clave_reg"
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
				resecret: {
					required: "Por favor ingrese su una respuesta secreta.",
					minlength: "La respuesta debe contener un mínimo de 2 caracteres.",
					maxlength: "La respuesta puede contener un máximo de 50 caracteres."
				},
				nombre: {
					required: "Por favor ingrese su nombre.",
                    minlength: "El nombre debe contener un mínimo de 2 caracteres",
                    maxlength: "El nombre debe contener un máximo de 20 caracteres"
				},
				apellido: {
					required: "Por favor ingrese su apellido.",
                    minlength: "El apellido debe contener un mínimo de 2 caracteres",
                    maxlength: "El apellido debe contener un máximo de 20 caracteres"
				},
				clave_reg: {
					required: "Por favor ingrese una clave",
					minlength: "La clave debe contener un mínimo de 5 caracteres",
					maxlength: "La clave debe contener un máximo de 12 caracteres"
				},
				presecret: {
					required: "Por favor selecciona una preguna secreta."
				},
				re_clave: {
					required: "Por favor repita su clave",
					minlength: "La clave debe contener un mínimo de 5 caracteres",
					maxlength: "La clave debe contener un máximo de 12 caracteres",
					equalTo: "Las claves no coinciden, por favor verifique"
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
		});