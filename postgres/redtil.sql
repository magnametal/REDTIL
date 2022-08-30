CREATE TABLE usuario (
  id_user      SERIAL UNIQUE,
  correo varchar NOT NULL,
  cedula varchar NOT NULL,
  presecret varchar NOT NULL,
  resecret varchar NOT NULL,
  clave		   varchar NOT NULL,
  t_user varchar DEFAULT 'user',
  activacion char DEFAULT 'F',
  habilitado char DEFAULT 'V',
  bienvenida char DEFAULT 'F',
  url_perfil varchar NOT NULL
);

INSERT INTO usuario (cedula, presecret, resecret, correo, clave, t_user, activacion, bienvenida, url_perfil) VALUES ('V-99999990', 'V-99999990', 'V-99999990', 'admin@admin.com', '88b0ee35d5ad7a62908ed4d1f7d3f0ac', 'administrador', 'V', 'V', 'perfil.html?user=8kYzXiQtGN9DX');
INSERT INTO usuario (cedula, presecret, resecret, correo, clave, t_user, activacion, bienvenida, url_perfil) VALUES ('V-99999999', 'V-99999999', 'V-99999999', 'user9@user.com', '88b0ee35d5ad7a62908ed4d1f7d3f0ac', 'user', 'V', 'V', 'perfil.html?user=8kYzXiQtGN9DX9');
INSERT INTO usuario (cedula, presecret, resecret, correo, clave, t_user, activacion, bienvenida, url_perfil) VALUES ('V-99999998', 'V-99999998', 'V-99999998', 'user8@user.com', '88b0ee35d5ad7a62908ed4d1f7d3f0ac', 'user', 'V', 'V', 'perfil.html?user=8kYzXiQtGN9DX8');
INSERT INTO usuario (cedula, presecret, resecret, correo, clave, t_user, activacion, bienvenida, url_perfil) VALUES ('V-99999997', 'V-99999997', 'V-99999997', 'user7@user.com', '88b0ee35d5ad7a62908ed4d1f7d3f0ac', 'user', 'V', 'V', 'perfil.html?user=8kYzXiQtGN9DX7');
INSERT INTO usuario (cedula, presecret, resecret, correo, clave, t_user, activacion, bienvenida, url_perfil) VALUES ('V-99999996', 'V-99999996', 'V-99999996', 'user6@user.com', '88b0ee35d5ad7a62908ed4d1f7d3f0ac', 'user', 'V', 'V', 'perfil.html?user=8kYzXiQtGN9DX6');
INSERT INTO usuario (cedula, presecret, resecret, correo, clave, t_user, activacion, bienvenida, url_perfil) VALUES ('V-99999995', 'V-99999995', 'V-99999995', 'user5@user.com', '88b0ee35d5ad7a62908ed4d1f7d3f0ac', 'user', 'V', 'V', 'perfil.html?user=8kYzXiQtGN9DX5');
INSERT INTO usuario (cedula, presecret, resecret, correo, clave, t_user, activacion, bienvenida, url_perfil) VALUES ('V-99999994', 'V-99999994', 'V-99999994', 'user4@user.com', '88b0ee35d5ad7a62908ed4d1f7d3f0ac', 'user', 'V', 'V', 'perfil.html?user=8kYzXiQtGN9DX4');
INSERT INTO usuario (cedula, presecret, resecret, correo, clave, t_user, activacion, bienvenida, url_perfil) VALUES ('V-99999993', 'V-99999993', 'V-99999993', 'user3@user.com', '88b0ee35d5ad7a62908ed4d1f7d3f0ac', 'user', 'V', 'V', 'perfil.html?user=8kYzXiQtGN9DX3');
INSERT INTO usuario (cedula, presecret, resecret, correo, clave, t_user, activacion, bienvenida, url_perfil) VALUES ('V-99999992', 'V-99999992', 'V-99999992', 'user2@user.com', '88b0ee35d5ad7a62908ed4d1f7d3f0ac', 'user', 'V', 'V', 'perfil.html?user=8kYzXiQtGN9DX2');
INSERT INTO usuario (cedula, presecret, resecret, correo, clave, t_user, activacion, bienvenida, url_perfil) VALUES ('V-99999991', 'V-99999991', 'V-99999991', 'user1@user.com', '88b0ee35d5ad7a62908ed4d1f7d3f0ac', 'user', 'V', 'V', 'perfil.html?user=8kYzXiQtGN9DX1');


CREATE TABLE ficha_interes (
  id_ficha_interes SERIAL UNIQUE,
  id_user int NOT NULL,
  acciones int NOT NULL DEFAULT 0,
  t_int decimal(6,3) NOT NULL DEFAULT 0,
  pro decimal(6,3) NOT NULL DEFAULT 0,
  arc decimal(6,3) NOT NULL DEFAULT 0,
  red decimal(6,3) NOT NULL DEFAULT 0,
  org_t decimal(6,3) NOT NULL DEFAULT 0,
  edu_t decimal(6,3) NOT NULL DEFAULT 0,
  block decimal(6,3) NOT NULL DEFAULT 0,
  sft_pu decimal(6,3) NOT NULL DEFAULT 0,
  innova decimal(6,3) NOT NULL DEFAULT 0,
  apps decimal(6,3) NOT NULL DEFAULT 0,
  iot decimal(6,3) NOT NULL DEFAULT 0,
  robot decimal(6,3) NOT NULL DEFAULT 0,
  geo decimal(6,3) NOT NULL DEFAULT 0,
  h_lib decimal(6,3) NOT NULL DEFAULT 0,
  gob_dig decimal(6,3) NOT NULL DEFAULT 0,
  inter decimal(6,3) NOT NULL DEFAULT 0,
  datos_a decimal(6,3) NOT NULL DEFAULT 0,
  ai decimal(6,3) NOT NULL DEFAULT 0,
  tresd decimal(6,3) NOT NULL DEFAULT 0,
  cont_edu decimal(6,3) NOT NULL DEFAULT 0,
  FOREIGN KEY (id_user) REFERENCES usuario (id_user)
);

INSERT INTO ficha_interes (id_user,
  t_int,
  pro,
  arc,
  red,
  org_t,
  edu_t,
  block,
  sft_pu,
  innova,
  apps,
  iot,
  robot,
  geo,
  h_lib,
  gob_dig,
  inter,
  datos_a,
  ai,
  tresd,
  cont_edu
) VALUES (1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

INSERT INTO ficha_interes (id_user,
  t_int,
  pro,
  arc,
  red,
  org_t,
  edu_t,
  block,
  sft_pu,
  innova,
  apps,
  iot,
  robot,
  geo,
  h_lib,
  gob_dig,
  inter,
  datos_a,
  ai,
  tresd,
  cont_edu
) VALUES (2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

INSERT INTO ficha_interes (id_user,
  t_int,
  pro,
  arc,
  red,
  org_t,
  edu_t,
  block,
  sft_pu,
  innova,
  apps,
  iot,
  robot,
  geo,
  h_lib,
  gob_dig,
  inter,
  datos_a,
  ai,
  tresd,
  cont_edu
) VALUES (3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

INSERT INTO ficha_interes (id_user,
  t_int,
  pro,
  arc,
  red,
  org_t,
  edu_t,
  block,
  sft_pu,
  innova,
  apps,
  iot,
  robot,
  geo,
  h_lib,
  gob_dig,
  inter,
  datos_a,
  ai,
  tresd,
  cont_edu
) VALUES (4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

INSERT INTO ficha_interes (id_user,
  t_int,
  pro,
  arc,
  red,
  org_t,
  edu_t,
  block,
  sft_pu,
  innova,
  apps,
  iot,
  robot,
  geo,
  h_lib,
  gob_dig,
  inter,
  datos_a,
  ai,
  tresd,
  cont_edu
) VALUES (5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

INSERT INTO ficha_interes (id_user,
  t_int,
  pro,
  arc,
  red,
  org_t,
  edu_t,
  block,
  sft_pu,
  innova,
  apps,
  iot,
  robot,
  geo,
  h_lib,
  gob_dig,
  inter,
  datos_a,
  ai,
  tresd,
  cont_edu
) VALUES (6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

INSERT INTO ficha_interes (id_user,
  t_int,
  pro,
  arc,
  red,
  org_t,
  edu_t,
  block,
  sft_pu,
  innova,
  apps,
  iot,
  robot,
  geo,
  h_lib,
  gob_dig,
  inter,
  datos_a,
  ai,
  tresd,
  cont_edu
) VALUES (7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

INSERT INTO ficha_interes (id_user,
  t_int,
  pro,
  arc,
  red,
  org_t,
  edu_t,
  block,
  sft_pu,
  innova,
  apps,
  iot,
  robot,
  geo,
  h_lib,
  gob_dig,
  inter,
  datos_a,
  ai,
  tresd,
  cont_edu
) VALUES (8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

INSERT INTO ficha_interes (id_user,
  t_int,
  pro,
  arc,
  red,
  org_t,
  edu_t,
  block,
  sft_pu,
  innova,
  apps,
  iot,
  robot,
  geo,
  h_lib,
  gob_dig,
  inter,
  datos_a,
  ai,
  tresd,
  cont_edu
) VALUES (9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

INSERT INTO ficha_interes (id_user,
  t_int,
  pro,
  arc,
  red,
  org_t,
  edu_t,
  block,
  sft_pu,
  innova,
  apps,
  iot,
  robot,
  geo,
  h_lib,
  gob_dig,
  inter,
  datos_a,
  ai,
  tresd,
  cont_edu
) VALUES (10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

CREATE TABLE autor (
  id_autor      SERIAL UNIQUE,
  id_user int DEFAULT NULL,
  correo varchar NOT NULL,
  cedula varchar DEFAULT NULL,
  nombre varchar NOT NULL,
  apellido varchar NOT NULL,
  FOREIGN KEY (id_user) REFERENCES usuario (id_user)
);

CREATE TABLE t_tutor (
  id_t_tutor SERIAL UNIQUE,
  t_tutor char NOT NULL
);

INSERT INTO t_tutor (t_tutor) VALUES ('A');
INSERT INTO t_tutor (t_tutor) VALUES ('I');

CREATE TABLE tutor (
  id_tutor      SERIAL UNIQUE,
  id_user int DEFAULT NULL,
  correo varchar NOT NULL,
  cedula varchar NOT NULL,
  nombre varchar NOT NULL,
  apellido varchar NOT NULL,
  id_t_tutor int NOT NULL,
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_t_tutor) REFERENCES t_tutor (id_t_tutor)
);

CREATE TABLE comunidad (
  id_comunidad   SERIAL UNIQUE,
  estado     varchar,
  municipio  varchar,
  ciudad  varchar
);

INSERT INTO comunidad (estado, municipio, ciudad) VALUES ('DISTRITO CAPITAL', 'Libertador (Caracas)', 'Caracas, UBV sede los chaguaramos');

CREATE TABLE datos (
  id_datos SERIAL UNIQUE,
  id_user int NOT NULL,
  nombre varchar NOT NULL,
  apellido varchar NOT NULL,
  id_comunidad int NOT NULL,
  imagen varchar DEFAULT 'assets/img/avatares/default/default.jpg',
  imagen_min varchar DEFAULT 'assets/img/avatares/mini/default.jpg',
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_comunidad) REFERENCES comunidad (id_comunidad)
);

INSERT INTO datos (id_user, nombre, apellido, id_comunidad, imagen, imagen_min) VALUES (1, 'Administrador', '.', 1, 'assets/img/avatares/1/1admin.png', 'assets/img/avatares/1/1admin.png');
INSERT INTO datos (id_user, nombre, apellido, id_comunidad) VALUES (2, 'Carlos', 'Gonzalez', 1);
INSERT INTO datos (id_user, nombre, apellido, id_comunidad) VALUES (3, 'Anaís', 'Gonzalez', 1);
INSERT INTO datos (id_user, nombre, apellido, id_comunidad) VALUES (4, 'Pedro', 'Alvarez', 1);
INSERT INTO datos (id_user, nombre, apellido, id_comunidad) VALUES (5, 'Stefany', 'Gonzalez', 1);
INSERT INTO datos (id_user, nombre, apellido, id_comunidad) VALUES (6, 'Dehiker', 'Corro', 1);
INSERT INTO datos (id_user, nombre, apellido, id_comunidad) VALUES (7, 'Marinella', 'Vargas', 1);
INSERT INTO datos (id_user, nombre, apellido, id_comunidad) VALUES (8, 'Mario', 'Otero', 1);
INSERT INTO datos (id_user, nombre, apellido, id_comunidad) VALUES (9, 'Nacary', 'Acosta', 1);
INSERT INTO datos (id_user, nombre, apellido, id_comunidad) VALUES (10, 'Jhon', 'Snow', 1);


CREATE TABLE t_publicacion (
  id_t_publicacion SERIAL UNIQUE,
  t_publicacion varchar NOT NULL
);

INSERT INTO t_publicacion (t_publicacion) VALUES ('texto');
INSERT INTO t_publicacion (t_publicacion) VALUES ('foto');
INSERT INTO t_publicacion (t_publicacion) VALUES ('mixto');

CREATE TABLE publicacion (
  id_publicacion SERIAL UNIQUE,
  id_user int NOT NULL,
  receptor int NOT NULL,
  id_t_publicacion int NOT NULL,
  mensaje varchar,
  img varchar,
  horafecha timestamp DEFAULT NOW(),
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (receptor) REFERENCES usuario (id_user),
  FOREIGN KEY (id_t_publicacion) REFERENCES t_publicacion (id_t_publicacion)
);

CREATE TABLE publi_favs (
  id_publi_favs  SERIAL UNIQUE,
  id_user      int NOT NULL,
  id_publicacion      int NOT NULL,
  horafecha timestamp DEFAULT NOW(),
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_publicacion) REFERENCES publicacion (id_publicacion)
);

CREATE TABLE seguidores (
  id_seguidores SERIAL UNIQUE,
  seguido int NOT NULL,
  seguidor int NOT NULL,
  FOREIGN KEY (seguido) REFERENCES usuario (id_user),
  FOREIGN KEY (seguidor) REFERENCES usuario (id_user)
);

CREATE TABLE noti_visto (
  id_noti_visto SERIAL UNIQUE,
  visto char NOT NULL
);

INSERT INTO noti_visto (visto) VALUES ('V');
INSERT INTO noti_visto (visto) VALUES ('F');

CREATE TABLE t_notify (
  id_t_notify SERIAL UNIQUE,
  t_notify varchar NOT NULL
);

INSERT INTO t_notify (t_notify) VALUES ('Publicación en Muro');
INSERT INTO t_notify (t_notify) VALUES ('Libro publicado');
INSERT INTO t_notify (t_notify) VALUES ('Investigación publicada');
INSERT INTO t_notify (t_notify) VALUES ('Nuevo seguidor');
INSERT INTO t_notify (t_notify) VALUES ('Solicitud de ingreso a tarea pendiente');

CREATE TABLE status (
  id_status SERIAL UNIQUE,
  status varchar NOT NULL
);

INSERT INTO status (status) VALUES ('success');
INSERT INTO status (status) VALUES ('error');
INSERT INTO status (status) VALUES ('uploading');

CREATE TABLE documento (
  id_doc        SERIAL UNIQUE,
  titulo_doc    varchar NOT NULL,
  cota    varchar NOT NULL,
  tipo_doc      char NOT NULL,
  resume_doc    varchar NOT NULL,
  archivo    varchar DEFAULT 'no_file',
  horafecha     timestamp DEFAULT NOW(),
  valido char DEFAULT 'F',
  nota_admin varchar DEFAULT NULL,
  id_status    int DEFAULT 3,
  cargado_por    int DEFAULT 3,
  FOREIGN KEY (id_status) REFERENCES status (id_status),
  FOREIGN KEY (cargado_por) REFERENCES usuario (id_user)
);


CREATE TABLE notify (
  id_notify SERIAL UNIQUE,
  id_receptor int NOT NULL,
  id_emisor int DEFAULT 1,
  id_t_notify varchar NOT NULL,
  id_noti_visto int DEFAULT 2,
  id_doc int DEFAULT NULL,
  mensaje varchar DEFAULT NULL,
  horafecha timestamp DEFAULT NOW(),
  FOREIGN KEY (id_emisor) REFERENCES usuario (id_user),
  FOREIGN KEY (id_receptor) REFERENCES usuario (id_user),
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc),
  FOREIGN KEY (id_noti_visto) REFERENCES noti_visto (id_noti_visto)
);

CREATE TABLE mis_libros (
  id_mis_libros SERIAL UNIQUE,
  id_user      int NOT NULL,
  id_doc      int NOT NULL,
  horafecha timestamp DEFAULT NOW(),
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc)
);

CREATE TABLE descargas (
  id_desc SERIAL UNIQUE,
  id_user      int NOT NULL,
  id_doc      int NOT NULL,
  horafecha     timestamp DEFAULT NOW(),
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc)
);

CREATE TABLE pendiente (
  id_pen       SERIAL UNIQUE,
  id_user int NOT NULL,
  titulo_pen    varchar NOT NULL,
  resume_pen    varchar NOT NULL,
  horafecha     timestamp DEFAULT NOW(),
  url_perfil varchar NOT NULL,
  FOREIGN KEY (id_user) REFERENCES usuario (id_user)
);

CREATE TABLE colectivo (
  id_colectivo SERIAL UNIQUE,
  id_pen int NOT NULL,
  id_user int NOT NULL,
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_pen) REFERENCES pendiente (id_pen)
);

CREATE TABLE status_colectivo (
  id_status_colectivo SERIAL UNIQUE,
  status_colectivo varchar NOT NULL
);

INSERT INTO status_colectivo (status_colectivo) VALUES ('aprobado');
INSERT INTO status_colectivo (status_colectivo) VALUES ('rechazado');
INSERT INTO status_colectivo (status_colectivo) VALUES ('pendiente');

CREATE TABLE solicitud_colectivo (
  id_solicitud_colectivo SERIAL UNIQUE,
  id_pen int NOT NULL,
  id_user int NOT NULL,
  id_status_colectivo int NOT NULL,
  horafecha     timestamp DEFAULT NOW(),
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_status_colectivo) REFERENCES status_colectivo (id_status_colectivo)
);

CREATE TABLE pend_favs (
  id_pend_favs  SERIAL UNIQUE,
  id_user      int NOT NULL,
  id_pen      int NOT NULL,
  horafecha timestamp DEFAULT NOW(),
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_pen) REFERENCES pendiente (id_pen)
);

CREATE TABLE pend_comen (
  id_pen_comen  SERIAL UNIQUE,
  mensaje       varchar,
  id_user      int NOT NULL,
  id_pen      int NOT NULL,
  horafecha timestamp DEFAULT NOW(),
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_pen) REFERENCES pendiente (id_pen)
);

CREATE TABLE ficha_pen (
  id_ficha_pen SERIAL UNIQUE,
  id_pen int NOT NULL,
  t_int decimal(6,3) NOT NULL DEFAULT 0,
  pro decimal(6,3) NOT NULL DEFAULT 0,
  arc decimal(6,3) NOT NULL DEFAULT 0,
  red decimal(6,3) NOT NULL DEFAULT 0,
  org_t decimal(6,3) NOT NULL DEFAULT 0,
  edu_t decimal(6,3) NOT NULL DEFAULT 0,
  block decimal(6,3) NOT NULL DEFAULT 0,
  sft_pu decimal(6,3) NOT NULL DEFAULT 0,
  innova decimal(6,3) NOT NULL DEFAULT 0,
  apps decimal(6,3) NOT NULL DEFAULT 0,
  iot decimal(6,3) NOT NULL DEFAULT 0,
  robot decimal(6,3) NOT NULL DEFAULT 0,
  geo decimal(6,3) NOT NULL DEFAULT 0,
  h_lib decimal(6,3) NOT NULL DEFAULT 0,
  gob_dig decimal(6,3) NOT NULL DEFAULT 0,
  inter decimal(6,3) NOT NULL DEFAULT 0,
  datos_a decimal(6,3) NOT NULL DEFAULT 0,
  ai decimal(6,3) NOT NULL DEFAULT 0,
  tresd decimal(6,3) NOT NULL DEFAULT 0,
  cont_edu decimal(6,3) NOT NULL DEFAULT 0,
  FOREIGN KEY (id_pen) REFERENCES pendiente (id_pen)
);

CREATE TABLE ficha_doc (
  id_ficha_doc SERIAL UNIQUE,
  id_doc int NOT NULL,
  t_int decimal(6,3) NOT NULL DEFAULT 0,
  pro decimal(6,3) NOT NULL DEFAULT 0,
  arc decimal(6,3) NOT NULL DEFAULT 0,
  red decimal(6,3) NOT NULL DEFAULT 0,
  org_t decimal(6,3) NOT NULL DEFAULT 0,
  edu_t decimal(6,3) NOT NULL DEFAULT 0,
  block decimal(6,3) NOT NULL DEFAULT 0,
  sft_pu decimal(6,3) NOT NULL DEFAULT 0,
  innova decimal(6,3) NOT NULL DEFAULT 0,
  apps decimal(6,3) NOT NULL DEFAULT 0,
  iot decimal(6,3) NOT NULL DEFAULT 0,
  robot decimal(6,3) NOT NULL DEFAULT 0,
  geo decimal(6,3) NOT NULL DEFAULT 0,
  h_lib decimal(6,3) NOT NULL DEFAULT 0,
  gob_dig decimal(6,3) NOT NULL DEFAULT 0,
  inter decimal(6,3) NOT NULL DEFAULT 0,
  datos_a decimal(6,3) NOT NULL DEFAULT 0,
  ai decimal(6,3) NOT NULL DEFAULT 0,
  tresd decimal(6,3) NOT NULL DEFAULT 0,
  cont_edu decimal(6,3) NOT NULL DEFAULT 0,
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc)
);

CREATE TABLE autoria (
  id_autoria      SERIAL UNIQUE,
  id_doc int NOT NULL,
  id_autor int NOT NULL,
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc),
  FOREIGN KEY (id_autor) REFERENCES autor (id_autor)
);

CREATE TABLE tutoria (
  id_tutoria      SERIAL UNIQUE,
  id_doc int NOT NULL,
  id_tutor int NOT NULL,
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc),
  FOREIGN KEY (id_tutor) REFERENCES tutor (id_tutor)
);

CREATE TABLE docs_favs (
  id_docs_favs  SERIAL UNIQUE,
  id_user      int NOT NULL,
  id_doc      int NOT NULL,
  horafecha timestamp DEFAULT NOW(),
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc)
);

CREATE TABLE docs_comen (
  id_docs_comen  SERIAL UNIQUE,
  mensaje       varchar,
  id_user      int NOT NULL,
  id_doc      int NOT NULL,
  horafecha timestamp DEFAULT NOW(),
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc)
);

CREATE TABLE docs_comp (
  id_docs_comp  SERIAL UNIQUE,
  id_user      int NOT NULL,
  horafecha timestamp DEFAULT NOW(),
  id_doc      int NOT NULL,  
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc)
);

CREATE TABLE investigacion (
  id_doc        int NOT NULL,
  comunidad_ubv char DEFAULT 'N',
  publicado char,
  tipo_inv varchar,
  img varchar DEFAULT 'assets/img/inv_default.jpg',
  grado_proy   char,
  area_app     varchar,
  ano_semestre varchar,
  fecha_pre varchar,
  id_comunidad int,
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc),
  FOREIGN KEY (id_comunidad) REFERENCES comunidad (id_comunidad)
);

CREATE TABLE libro (
  id_doc        int NOT NULL,
  ano_publi    int,
  edicion    varchar,
  img varchar DEFAULT 'assets/img/lib_default.jpg',
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc)
);


CREATE TABLE comentario (
  id_comentario SERIAL UNIQUE,
  id_user int NOT NULL,
  id_doc int,
  id_publicacion int,
  id_pen int,
  mensaje varchar NOT NULL,
  horafecha timestamp DEFAULT NOW(),
  FOREIGN KEY (id_pen) REFERENCES pendiente (id_pen),
  FOREIGN KEY (id_user) REFERENCES usuario (id_user),
  FOREIGN KEY (id_publicacion) REFERENCES publicacion (id_publicacion),
  FOREIGN KEY (id_doc) REFERENCES documento (id_doc)
);