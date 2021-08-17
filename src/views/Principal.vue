<template>
	<div>
		
		<section class="container-fluid px-5">
			<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="images/slide_(2).png" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item">
						<img src="images/slide_(1).jpg" class="d-block w-100" alt="...">
					</div>
		
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</section>


		<main class="container px-5">

			<div class="row ">
				<div class="col-12 col-md-6">
					<div class="tarjetaBebes pt-4">
						<div class="texto float-start">PRIMERA <br>PUESTA</div>
						<img src="images/rectPrimera.png" class="img-fluid " alt="">
						<button class="btn btn-outline-light btn-lg botonVer">VER</button>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="tarjetaBebes pt-4">
						<div class="texto float-start">BEBÉ</div>
						<img src="images/recBebe.png" class="img-fluid" alt="">
						<button class="btn btn-outline-light btn-lg botonVer">VER</button>
					</div>
				</div>
			</div>
			<div class="row ">
				<div class="col-12 col-md-6">
					<div class="tarjetaBebes pt-4">
						<div class="texto float-start">INFANTIL <br>NIÑA</div>
						<img src="images/recNina.png" class="img-fluid " alt="">
						<button class="btn btn-outline-light btn-lg botonVer">VER</button>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="tarjetaBebes pt-4">
						<div class="texto float-start">INFANTIL <br>NIÑA</div>
						<img src="images/recNino.png" class="img-fluid" alt="">
						<button class="btn btn-outline-light btn-lg botonVer">VER</button>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<div class="tarjetaValoop pt-4">
						<img src="images/slideValoop.png" class="img-fluid" alt="">
						<button class="btn btn-outline-light btn-lg botonVer">VER</button>
					</div>
				</div>
			</div>

			<div class="row py-4">
				<div class="col">
					<h4>LO MÁS VENDIDO <small style="font-size: .6em; font-weight: lighter;">¡No te quedes sin ellos!</small></h4>
				</div>
			</div>

			

			<div class="row owl-carousel owl-theme" >
				<div class="  item">
					<div class="row">
						<div class="col-sm-12 divVariantes" :class="{'activo': hover}" @mouseover="activaVariante(0)" @mouseleave="ocultarVariante(0)">
							<img src="images/productos/prod1.png" class="productosVariantes img-fluid">
							<div class="variantes row row-cols-3 ">
								<div class=" ">2-3 años</div>
								<div class=" ">4-5 años</div>
								<div class=" ">6-7 años</div>
								<div class=" ">7-8 años</div>
								<div class=" ">8-10 años</div>
								<div class=" ">10-12 años</div>
							</div>
						</div>
						
					</div>
					<div class="row datosPrendas">
						<div class="col-sm-12">
							<div class="text-center py-2 tituloPrenda">Bañador espiral rosa</div>
							<div class="d-flex justify-content-around">
								<span class="precioAnterior">S/ 30.00</span>
								<span class="precioActual">S/ 30.00</span>
							</div>
							<div class="bolitas d-flex justify-content-center">
								<div class="color" data-color="#B96F6F"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="  item">
					<div class="row">
						<div class="col-sm-12 divVariantes" :class="{'activo': hover}" @mouseover="activaVariante(1)" @mouseleave="ocultarVariante(1)">
							<img src="images/productos/prod2.png" class="productosVariantes img-fluid">
							<div class="variantes row row-cols-3 ">
								<div class=" ">2-3 años</div>
								<div class=" ">4-5 años</div>
							
							</div>
						</div>
					</div>
					<div class="row datosPrendas">
						<div class="col-sm-12">
							<div class="text-center py-2 tituloPrenda">Polo pique rosa</div>
							<div class="d-flex justify-content-around">
								<span class="precioAnterior">S/ 20.00</span>
								<span class="precioActual">S/ 18.00</span>
							</div>
							<div class="bolitas d-flex justify-content-center">
								<div class="color" data-color="#33B56C"></div>
								<div class="color" data-color="#32B2B2"></div>
								<div class="color" data-color="#A18433"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="  item">
					<div class="row">
						<div class="col-sm-12 divVariantes" :class="{'activo': hover}" @mouseover="activaVariante(2)" @mouseleave="ocultarVariante(2)">
							<img src="images/productos/prod3.png" class="productosVariantes img-fluid">
							<div class="variantes row row-cols-3 ">
							
								<div class=" ">7-8 años</div>
								<div class=" ">8-10 años</div>
								<div class=" ">10-12 años</div>
							</div>
						</div>
					</div>
					<div class="row datosPrendas">
						<div class="col-sm-12">
							<div class="text-center py-2 tituloPrenda">Boxer estampado</div>
							<div class="d-flex justify-content-around">
								<span class="precioAnterior">S/ 40.00</span>
								<span class="precioActual">S/ 35.00</span>
							</div>
							<div class="bolitas d-flex justify-content-center">
								<div class="color" data-color="#B96A6A"></div>
								<div class="color" data-color="#141414"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="  item">
					<div class="row">
						<div class="col-sm-12 divVariantes" :class="{'activo': hover}" @mouseover="activaVariante(3)" @mouseleave="ocultarVariante(3)">
							<img src="images/productos/prod4.png" class="productosVariantes img-fluid">
							<div class="variantes row row-cols-3 ">
								<div class=" ">7-8 años</div>
								<div class=" ">8-10 años</div>
								<div class=" ">10-12 años</div>
							</div>
						</div>
					</div>
					<div class="row datosPrendas">
						<div class="col-sm-12">
							<div class="text-center py-2 tituloPrenda">Vestido polo rayas</div>
							<div class="d-flex justify-content-around">
								<span class="precioAnterior">S/ 32.00</span>
								<span class="precioActual">S/ 28.00</span>
							</div>
							<div class="bolitas d-flex justify-content-center">
								<div class="color" data-color="#FFFFFF"></div>
							</div>
						</div>
					</div>
				</div> -->
				<ProductoVariante :inde="3" @activar="activaVariante" @desactivar="ocultarVariante" :foto="'/images/productos/prod4.png'" />
			</div>


			


		</main>
	
	</div>
</template>
<script>
	import ProductoVariante from '@/components/ProductoVariante.vue';
		
	export default {
		name: 'Principal',
		components:{
			ProductoVariante
		},
		data(){
			return {
				hover:false
			}
		},
		methods: {
			activaVariante(index){ //console.log( 'activa' );
				$('.owl-carousel').find('.item').eq(index).find('.variantes').addClass('activo')
				//$(event.target).find('.variantes').addClass('activo')
			},
			ocultarVariante(index){
				$('.owl-carousel').find('.item').eq(index).find('.variantes').removeClass('activo')
				//$(event.target).find('.variantes').removeClass('activo')
			}
		},
		mounted(){
			require('../assets/css/owl.carousel.css')
			require('../assets/js/owl.carousel.js')
			$('.owl-carousel').owlCarousel({
				items: 4
			});

			var divColores = document.getElementsByClassName('color');
			[...divColores].forEach((divColor)=>{
				if(divColor.getAttribute('data-color') =='#FFFFFF'){
					divColor.style.border = '1px solid #ddd';
				}else{
					divColor.style.border = 'none';
				}
				divColor.style.background = divColor.getAttribute('data-color');
			});

			/* $('#app').on( 'hover', '.divVariantes', function(){
				console.log( 'que' );
				$(this).find('.variantes').addClass('activo')
			})
			$('#app').on( 'hover', '.divVariantes', function(){
				$(this).find('.variantes').removeClass('activo');
			}) */
			
		}
		
	}

	document.addEventListener("DOMContentLoaded", function() {
		setTimeout( ()=> {
			let over = document.getElementById('overlay');
			over.classList.add('borrar');
			setTimeout( ()=>{ over.style.display='none'; }, 500 )
		}, 1000);
		var myCarousel = document.querySelector('#myCarousel')
		new bootstrap.Carousel(myCarousel, {
			cycle:true,
			touch:true
		});
		
	});



	

	</script>

<style scoped>

.carousel-control-prev-icon { background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23EF798F' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E"); }
.tarjetaBebes, .tarjetaValoop{position: relative;}
.tarjetaBebes>.texto{
	position: absolute;
	top: 100PX;
	left: 2vw;
	color: white;
	font-size: 2rem;}
.tarjetaBebes>img{border-radius: 1rem!important;}
.tarjetaBebes>.botonVer{position: absolute; bottom: 100px; right: 2vw; border-radius: 20px; padding: .1rem 2rem; border: 2px solid #fff; font-size: 1.5rem; }
.tarjetaValoop>.botonVer{position: absolute; bottom: 30px; right: 9vw; border-radius: 20px; padding: .1rem 2rem; border: 2px solid #fff; font-size: 1.5rem; }
.botonVer:hover{color:#BE9F73}

.owl-carousel .owl-item img{
	width: 95%!important;
}
.divVariantes{position: relative;}
.variantes{position: absolute; width: 100%; bottom:0; height: 0; overflow: hidden; transition: all 0.3s ease-in-out;visibility:hidden; padding:0; margin-left: 0rem;left: 0;}
.variantes.activo{height: 100px; padding: 0; background-color: rgba(255, 255, 255, 0.699);visibility:visible; padding: 1rem; }
.variantes>div{
	border:1px solid #000;
	font-size: 0.8em;
	font-weight: lighter;
	cursor:pointer;
	text-align: center;
	padding: 3px;
	transition: all 0.3s ease-in-out;
	width: 30%;
	margin: 5px 1%;
	height: 30px;
}
.variantes>div:hover{ background-color: #EF798F;}
.datosPrendas{font-weight: lighter;}
.precioAnterior{color: #79cbb5; text-decoration:line-through;}
.bolitas .color{
	width: 30px; height: 30px; background-color: #ffffff; border-radius: 50%;
	margin: 0 10px;
}
.tituloPrenda{font-size:1.1rem;}


</style>

 
	
	