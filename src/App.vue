<template>
  <div>

		<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			<div class="container-fluid px-5">
				<router-link class="navbar-brand ml-3 mr-5" to='/' id="divLogoMenu">
					<img id="logoMenu" src="/images/Logotipo_valoop.svg" alt="Avatar" class="image">
				</router-link>
				
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav">
						<li class="nav-item px-1 mx-sm-1 px-xl-3">
							<router-link class="nav-link" :to="{name: 'Buscador', params: {tipo: 'primera-puesta'}}" exact>PRIMERA PUESTA <br> <div class="text-center"><span class="subNav ">0 - 12 meses</span></div></router-link>
						</li>
						<li class="nav-item px-1 mx-sm-1 px-xl-3">
							<a class="nav-link" href="#">BEBÉ <br> <div class="text-center"><span class="subNav ">6 - 24 meses</span></div></a>
							
						</li>
						<li class="nav-item px-1 mx-sm-1 px-xl-3">
							<a class="nav-link" href="#">INFANTIL <br> <div class="text-center"><span class="subNav ">2 - 12 años</span></div></a>
						</li>
						<li class="nav-item px-1 mx-sm-1 px-xl-3">
							<a class="nav-link" href="#">VALOOP LOOK <br> <div class="text-center"><span class="subNav ">Tendencias</span></div></a>
						</li>
					</ul>
					
					<ul class="navbar-nav ms-auto me-4" id="navIconos">
						<li class="nav-item px-1 mx-sm-1 px-xl-3 ">
							<span class="icono"><i class="bi bi-search"></i></span>
						</li>
						<li class="nav-item px-1 mx-sm-1 px-xl-3 " data-bs-toggle="modal" data-bs-target="#modalIniciarSesion">
							<span class="icono"><i class="bi bi-file-person"></i></span>
							
						</li>
						<li class="nav-item px-1 mx-sm-1 px-xl-3 ">
							<div type="button" class="icono position-relative" data-bs-toggle="offcanvas" data-bs-target="#offCarrito" aria-controls="offCarrito">
								<i class="bi bi-handbag"></i>
								<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
							</div>
							
						</li>
					</ul>
					
				</div>
			</div>
		</nav>

		<router-view :adminLogin='adminLogin' />

  	<div v-if="!adminLogin">

			<div class="container mt-5" >
				<hr style="color: #9c9c9c;" />
			</div>
	
			<div class="container my-5">
				<div class="row row-cols-2 row-cols-lg-5  " id="divBeneficios">
					<div>
						<center><img src="/images/envio.svg" class="" ></center>
						<h5>Envíos GRATIS <br>desde S/ 50.00</h5>
					</div>
					<div>
						<center><img src="/images/devolver.svg" class="" ></center>
						<h5>Devoluciones <br>gratuitas</h5>
					</div>
					<div>
						<center><img src="/images/tarjeta.svg" class="" ></center>
						<h5>Pago fácil <br>y seguro</h5>
					</div>
					<div>
						<center><img src="/images/reserva.svg" class="" ></center>
						<h5>Reserva tu <br>pedido</h5>
					</div>
					<div>
						<center><img src="/images/map.svg" class="" ></center>
						<h5>Nuestras <br>tiendas</h5>
					</div>
				</div>
			</div>
		
		

		</div>
		

		

		<iniciarSesion />
		<carrito />

			<footer class="p-3">
				<div class="container">
					<div class="row row-cols-1 row-cols-md-4">
						<div>
							<h5>CONTACTO</h5>
							<p>info@valoop.pe</p>
							<p>977784115 (9h - 17h)</p>
							<p><i class="bi bi-whatsapp"></i> 912547125</p>
							<div ><span class="mx-2"><i class="bi bi-twitter"></i> </span> <span class="mx-2"><i class="bi bi-facebook"></i></span> <span class="mx-2"><i class="bi bi-instagram"></i></span></div>
						</div>

						<div>
							<h5>GUÍA DE COMPRA</h5>
							<ul style="list-style: none;" class="p-0">
								<li><i class="bi bi-chevron-double-right"></i> Envíos</li>
								<li><i class="bi bi-chevron-double-right"></i> Cambios y devoluciones</li>
								<li><i class="bi bi-chevron-double-right"></i> Aviso legal</li>
								<li><i class="bi bi-chevron-double-right"></i> Pago fácil y seguro</li>
							</ul>
						</div>

						<div>
							<h5>ATENCIÓN AL CLIENTE</h5>
							<p>cliente@valoop.pe</p>
							<p>977784115</p>
							<p>Lunes a Viernes de 9:00h a 17:00h</p>
							<p>Sugerencias</p>
						</div>

						<div>
							<h5>MI CUENTA</h5>
							<p style="line-height: 2rem;">Consulte desde aquí el estado <br>de tus pedidos</p>
							<button class="btn btn-success px-4" id="btnIngresar" data-bs-toggle="modal" data-bs-target="#modalInicioAdmin">INGRESAR</button>
						</div>
					</div>
				</div>
			</footer>
		
	
			<!-- Modal inicio de admin -->
			<div class="modal fade" id="modalInicioAdmin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-center">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="staticBackdropLabel">Acceder al panel</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<input type="text" name="" placeholder="Usuario" class="form-control my-1">
							<input type="password" name="" placeholder="Contraseña" class="form-control my-1">
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="accederPanel()">Acceder</button>
						</div>
					</div>
				</div>
			</div>
			
  </div>
</template>
<script>
import iniciarSesion from '@/components/iniciarSesion.vue';
import carrito from '@/components/Carrito.vue';


export default {
	data(){
		return {
			adminLogin:false
		}
	},
	components:{iniciarSesion, carrito},
	methods:{
		accederPanel(){
			this.adminLogin=true;
			localStorage.adminLogin = this.adminLogin;
			this.$router.push({ path:'panel'})
		},
		
	},
	mounted(){
		if(localStorage.adminLogin ==null ){
			this.adminLogin=false;
			localStorage.adminLogin = false;
		}else{
			if( localStorage.adminLogin==='true' ){
				this.adminLogin = true;
				this.$router.push({ path:'panel'})
			}else{
				this.adminLogin=false;
			}
		}
	}
}
</script>

<style>
	@font-face {
	font-family: GraublauWeb;
	src: url("/fonts/Gotham _Rounded_Book.otf") format("opentype");
}

@font-face {
	font-family: GraublauWeb;
	font-weight: bold;
	src: url("/fonts/gotham_rounded_bold.otf") format("opentype");
}
@font-face {
	font-family: GraublauWeb;
	font-weight: 300;
	src: url("/fonts/Gotham_Rounded_Light.otf") format("opentype");
}
@font-face {
	font-family: GraublauWeb;
	font-weight: medium;
	src: url("/fonts/gotham_rounded_medium.otf") format("opentype");
}
*{
	font-family: GraublauWeb, Arial, Helvetica, sans-serif;
}
#overlay{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom:0;
	background-color: #fff;
	z-index: 1;
	visibility: hidden;
}
.borrar{
	-webkit-animation: fadeInFromNone 0.5s ease-out;
  -moz-animation: fadeInFromNone 0.5s ease-out;
  -o-animation: fadeInFromNone 0.5s ease-out;
  animation: fadeInFromNone 0.5s ease-out;
}
@-webkit-keyframes fadeInFromNone {
	0% { opacity: 1; }
	99% { opacity: 0; z-index:1; }
	100% { opacity: 0; display:none; position:fixed; z-index:-5; }
}
@-moz-keyframes fadeInFromNone {
	0% { opacity: 1; }
	99% { opacity: 0; z-index:1; }
	100% { opacity: 0; display:none; position:fixed; z-index:-5; }
}
@-o-keyframes fadeInFromNone {
	0% { opacity: 1; }
	99% { opacity: 0; z-index:1; }
	100% { opacity: 0; display:none; position:fixed; z-index:-5; }
}

@keyframes fadeInFromNone {
	0% { opacity: 1; }
	99% { opacity: 0; z-index:1; }
	100% { opacity: 0; display:none; position:fixed; z-index:-5; }
}
.ligero{font-weight: lighter;}
.text-oscuro{color:#000;}

#overlay>img{
	display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
	margin-top: 35vh;
}

#over-text{
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: 14vh;
		font-size: 1.5rem;
		color: #38beab;
		transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
}
.bg-light {
	background-color: #ffffff!important;
}
#logoMenu{ width: 14rem ;}
.nav-item, #divLogoMenu{ border-bottom: 2px solid #fff; transition: all 0.3s ease-in-out ;
}
.nav-item:hover, .router-link-exact-active{border-bottom: 2px solid #38beab; cursor:pointer;}
.nav-link.active{color: #474747!important}
.nav-link{font-weight: medium; padding-bottom: 0; color:#707070!important; letter-spacing: 1px; }
.subNav{font-weight: 300; font-size: 80%; color:#79cbb5;}
.nav-item .icono{font-size:26px;}
#navIconos .badge{font-size: 10px; background-color: #EF798F!important; font-weight: 300; }

h1,h2,h3,h4,h5{color:#79CBB5}

#divBeneficios h5{ color:#000000; font-weight: lighter; font-size: 1.2rem; margin: 2rem 0; text-align: center;}
#divBeneficios img{width: 7.5vw; margin: 0 auto;}

footer{
	background-color: #79cbb526;
}
footer p{
	font-weight: lighter;
  margin-bottom: 2px;
}
footer .bi-whatsapp{
	font-size: 1.4rem;

}
footer i{
	font-size: 2rem;
}
footer ul { font-weight: lighter;}
footer ul li:hover{ cursor: pointer;}
footer ul i{
font-size: 0.9rem;
}
footer #btnIngresar{background-color: #79CBB5!important; border:none; border-radius: 20px; }

</style>
