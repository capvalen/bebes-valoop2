<template>
	<div>
		<section class="container-fluid">
			<div class="row">
				<div class="col-md-3 col-lg-2 p-3 categorias">
					<h5 class=""><i class="bi bi-tag"></i> Categorías</h5>
					<ul class="list-group list-group-flush">
					  <li class="list-group-item list-group-item-action">ABRIGO</li>
					  <li class="list-group-item list-group-item-action">CONJUNTOS</li>
					  <li class="list-group-item list-group-item-action">CHAQUETAS Y JERSEIS</li>
					  <li class="list-group-item list-group-item-action">CAMISAS</li>
					  <li class="list-group-item list-group-item-action">BODIES</li>
					  <li class="list-group-item list-group-item-action">VESTIDOS</li>
					  <li class="list-group-item list-group-item-action">FALDITAS</li>
					  <li class="list-group-item list-group-item-action">PATUCOS</li>
					  <li class="list-group-item list-group-item-action">PELELES</li>
					  <li class="list-group-item list-group-item-action">COMPLEMENTOS</li>
					</ul>
					<div id="botonVer" class=" p-2"> VER TODOS</div>
				</div>
				<div class="col-md-8 col-lg-9">
					<div class="row ">
						<div class="col-2" @mouseleave="ocultarFiltro()" id="spanFiltrar">
							<span @click="mostrarFiltros()" id="spanIcoFiltro"><span ><img src="/images/filtrar.svg" alt=""> </span> <span>FILTRAR</span></span>
							<div v-if="mostrarFiltro" class="p-2 container-fluid" id="cuadroFiltro">
								<div @click="ocultarFiltro()" class="mt-2 mb-3" id="divEliminarFiltro">
									<p >ELIMINAR FILTRO</p>
								</div>
								<p>TALLA</p>
								<div class="row row-cols-2">
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">0-3 meses</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">4-6 meses</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">7-9 meses</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">10-12 meses</label>
										</div>
									</div>
								</div>
								<div class="row mt-2 ">
									<p>PRECIO <small>(Max: S/ {{parseFloat(rango).toFixed(2)}})</small></p>
									<div class="col"><input type="range" v-model="rango" class="form-range" min=5 max=50  step=5 id="customRange1"></div>
								</div>
								<div class="mb-3">
									<p>TIPO DE PRODUCTO</p>
								</div>
								<div class="row row-cols-2">
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">Abrigo</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">Conjuntos</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">Camisas</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">Bodies</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">Vestidos</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">Falditas</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">Patucos</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">Papeles</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">Complementos</label>
										</div>
									</div>
									<div class="col">
										<div class="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="" >
											<label class="form-check-label" for="">Chaquetas</label>
										</div>
									</div>
								</div>

							</div>
						</div>
						<div class="col">
							<h2 class=" text-center">PRIMERA PUESTA</h2>
						</div>
						<div class="col-2" id="spanOrdenar">
							<span @click="mostrarOrdenados()"><span ><img src="/images/filtrar.svg" alt=""> </span> <span>ORDENAR</span></span>
							<div class="p-3 " v-if="mostrarOrdenar" id="divOrdenar" @mouseleave="ocultarOrdenar()">
								<p>Precio ascendente</p>
								<p>Precio descendente</p>
								<p>Nombre A-Z</p>
								<p>Nombre Z-A</p>
								<p>Descuentos %</p>
							</div>
						</div>
					</div>

					<div class="row row-cols-3">
						<ProductoVariante class="prendaResultado" :inde="0" @activar="activaVariante" @desactivar="ocultarVariante" :foto="'/images/productos/Imagen_11.jpg'" :colores="['#ddd', 'purple']" @click="verDetalle('iid')" />
						<ProductoVariante class="prendaResultado" :inde="1" @activar="activaVariante" @desactivar="ocultarVariante" :foto="'/images/productos/Imagen_12.jpg'" :colores="['#5cd24e', '#c5a42c', '#e13b8e']" @click="verDetalle('iid')" />
						<ProductoVariante class="prendaResultado" :inde="2" @activar="activaVariante" @desactivar="ocultarVariante" :foto="'/images/productos/Imagen_13.jpg'" :colores="['aqua', '#9934d8', '#ef3b8e']" @click="verDetalle('iid')" />
						<ProductoVariante class="prendaResultado" :inde="3" @activar="activaVariante" @desactivar="ocultarVariante" :foto="'/images/productos/prod1.png'" :colores="['aqua', '#9934d8', '#ef3b8e']" @click="verDetalle('iid')" />
					
					</div>

				</div>
			</div>

		</section>

		<!-- Modal -->
		<div class="modal fade" id="modalDetalles" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-xl">
				<div class="modal-content">
					<div class="modal-body p-3">
						<button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
						<div class="contenido p-4">
							<div class="row">
								<div class="col">
									<p><strong>CÓDIGO:</strong> <span class="ligero">VLP01</span></p>
								</div>
								<div class="col">
									<p>VESTIDO A RAYAS</p>
								</div>
								<div class="col ligero">
									<p><span class="mx-3" id="spanAnterior">S/ 20.00</span> <span id="spanActual">S/ 18.00</span></p>
								</div>
							</div>
							<div class="container-fluid">
								<div class="row owl-carousel owl-theme">
									<div class="">
										<img :src="'/images/productos/det0.jpg'" alt="" class="img-fluid">
									</div>
									<div class="">
										<img :src="'/images/productos/det1.jpg'" alt="" class="img-fluid">
									</div>
									<div class="">
										<img :src="'/images/productos/det2.jpg'" alt="" class="img-fluid">
									</div>
									<div class="">
										<img :src="'/images/productos/det3.jpg'" alt="" class="img-fluid">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col d-flex justify-content-start">
								<span>TALLAS</span>
								<div class="ligero mx-3 cajita"><p>0-3 meses</p></div>
								<div class="ligero mx-3 cajita"><p>4-6 meses</p></div>
								<div class="ligero mx-3 cajita"><p>7-9 meses</p></div>
							</div>
						</div>
						<div class="row mt-3">
							<div class="col">
								<p>DESCRIPCIÓN</p>
								<p class="ligero">Ranita con tejido tipo dobby con estructura de rayas azul medio, Cuello peter pan y engomado en la cintura. Apertura en la espalda y en el bajo.</p>
								<p>COMPOSICIÓN: <span class="ligero">100% algodón peruano</span></p>
								<div class="text-end"><button class="btn btn-primary btn-lg px-4 botonVerde" >Agregar a la cesta</button></div>
							</div>
						</div>

					
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import ProductoVariante from '@/components/ProductoVariante.vue';
var modi;
export default {
	name: 'Buscador',
	data(){
		return {
			mostrarFiltro:false,
			mostrarOrdenar:false,
			rango:50,
			hover:false
		}
	},
	components:{
		ProductoVariante
	},
	mounted(){
		modi = document.getElementById('modalDetalles');
		require('../assets/css/owl.carousel.css')
		require('../assets/js/owl.carousel.js')
		$('.owl-carousel').owlCarousel({
			items: 4
		});

	},
	methods:{
		mostrarFiltros(){ this.mostrarFiltro=true; },
		ocultarFiltro(){ this.mostrarFiltro=false; },
		mostrarOrdenados(){ this.mostrarOrdenar=true; },
		ocultarOrdenar(){ this.mostrarOrdenar=false; },
		activaVariante(index){
			$('.owl-carousel').find('.item').eq(index).find('.variantes').addClass('activo')
		},
		ocultarVariante(index){
			$('.owl-carousel').find('.item').eq(index).find('.variantes').removeClass('activo')
		},
		verDetalle(iid){
			//llamar vía API a los detalles
			var elModal = new bootstrap.Modal(modi);
			elModal.show();

		}
	}
}
</script>

<style scoped>
section{
	min-height: 65vh;
}
.categorias, h5, #spanFiltrar, #spanOrdenar, .prendaResultado p{
	font-weight: lighter;
	color: #707070;
}
.categorias i{
	font-size: 1.4rem;
}

ul li, #botonVer{
	font-weight: lighter;
	font-size: 0.9rem;
}
.list-group-item{ border: 1px solid rgba(0,0,0,0); }
.list-group-item:hover{ border: 1px solid rgba(0,0,0,.125); border-left: 0; border-right: 0; }
#botonVer{
	background-color: #79cbb55e;
	border-radius: 0 20px 20px 0;
}
#spanIcoFiltro, #spanOrdenar{cursor: pointer;}
#spanFiltrar, #spanOrdenar{position: relative;}
#cuadroFiltro{
	top: 30px;
	position: absolute;
	width: 300px;
	height: 380px;
	background-color: #272727c7;
	color:white;
	font-size: 0.9rem;
}
#divOrdenar{
	top: 30px;
	right: 0;
	position: absolute;
	width: 180px;
	height: 180px;
	background-color: #272727c7;
	color:white;
	font-size: 0.9rem;
}
#cuadroFiltro p { margin-bottom: 0; }
#divOrdenar p { margin-bottom: 0.5rem; cursor:pointer; }
#cuadroFiltro label{
	font-size: 0.85rem;
}
#divEliminarFiltro{ cursor: pointer;}
#spanFiltrar img, #spanOrdenar img{
	width: 30px;
}
.prendaResultado img{
	border-radius: 10px;
}

.productosVariantes {
  border-radius: 20px!important;
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
.ligero{font-weight: lighter;}
#spanAnterior{ color: #79cbb5; }
.cajita p{margin-bottom: 0;}
.cajita{
	padding: 0.2rem 1rem;
	border: 1px solid #000;
	cursor: pointer;
}
.botonVerde{
		border-radius: 1.5rem;
    background-color: #79CBB5!important;
		border:none;
	}



input[type='range'] {
  /* display: block; width: 250px; */
}

input[type='range']:focus {
  outline: none;
}

input[type='range'],
input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]::-webkit-slider-thumb {
  background-color: rgb(255, 255, 255);
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
  margin-top: -4px;
}

input[type=range]::-moz-range-thumb {
  background-color: rgb(255, 255, 255);
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
}

input[type=range]::-ms-thumb {
  background-color: rgb(255, 255, 255);
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
}

input[type=range]::-webkit-slider-runnable-track {
  background-color: rgb(255, 255, 255);
  height: 2px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  outline: none;
}

input[type=range]::-moz-range-track {
  background-color: rgb(255, 255, 255);
  height: 2px;
}

input[type=range]::-ms-track {
  background-color: rgb(255, 255, 255);
  height: 2px;
}

input[type=range]::-ms-fill-lower {
  background-color: HotPink
}

input[type=range]::-ms-fill-upper {
  background-color: black;
} 
</style>