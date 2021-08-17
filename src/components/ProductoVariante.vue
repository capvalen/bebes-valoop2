<template>
	<div class="  item">
		<div class="row">
			<div class="col-sm-12 divVariantes" @mouseover="activaVariante(inde)" @mouseleave="ocultarVariante(inde)" >
				<img :src="foto" class="productosVariantes img-fluid">
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
					<div class="color"  v-for="(color) in colores" v-bind:key="color.index" :data-color="color"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductoVariante',
	mounted(){
		var divColores = document.getElementsByClassName('color');
		[...divColores].forEach((divColor)=>{
			if(divColor.getAttribute('data-color') =='#FFFFFF'){
				divColor.style.border = '1px solid #ddd';
			}else{
				divColor.style.border = 'none';
			}
			divColor.style.background = divColor.getAttribute('data-color');
		});
	},
	props:{
		inde: Number, foto: String, colores: Array
	},
	methods: {
		activaVariante(dat){
			this.$emit('activar', dat)
		},
		ocultarVariante(dat){
			this.$emit('desactivar', dat)

		}
	}
}
</script>

<style scoped>
img{	width: 95%!important;}
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
.variantes>div:hover{
	background-color: #EF798F;	
}
.datosPrendas{font-weight: lighter;}
.precioAnterior{color: #79cbb5; text-decoration:line-through;}
.bolitas .color{
	width: 30px; height: 30px; background-color: #ffffff; border-radius: 50%;
	margin: 0 10px;
}
.tituloPrenda{font-size:1.1rem;}
.datosPrendas{
	margin-bottom: 20px;
}
</style>