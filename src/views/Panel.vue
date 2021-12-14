<template>
	<div class="container-fluid" id="contenedor">
		<div v-if="!adminLogin">
			<p>No tiene acceso para ver ésta sección</p>
		</div>
		<div v-else>
			<div class="container mb-5">
				<div class="d-flex justify-content-between align-items-center">
					<h4 class="display-5">Bienvenido al sistema</h4>
					<div><button class="btn btn-outline-success" @click="cerrarSesion()"><i class="bi bi-door-open"></i> Cerrar sesión</button></div>
				</div>
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Buscar un producto: nombre, código" aria-label="Recipient's username" aria-describedby="button-addon2">
					<button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i> Buscar</button>
					<button class="btn btn-outline-primary" type="button" id="button-addon2" data-bs-toggle="modal" data-bs-target="#modalNuevoProducto" ><i class="bi bi-bag-check"></i> Nuevo Producto</button>
				</div>
			</div>
			<table class="table table-hover">
				<thead>
					<tr>
						<th>N°</th>
						<th>Cod.</th>
						<th>Nombre</th>
						<th>Precio</th>
						<th>Stock</th>
						<th>Rango</th>
						<th>Categoría</th>
						<th>Tallas</th>
					</tr>
				</thead>
				<tbody>
					<tr @click="abrirOff()">
						<td>1</td>
						<td>VL42</td>
						<td>Vestido Polo rayas</td>
						<td>28.00</td>
						<td>5</td>
						<td>Primera puesta</td>
						<td>Camisa</td>
						<td>0-2 meses</td>
					</tr>
					<tr @click="abrirOff()">
						<td>2</td>
						<td>VL62</td>
						<td>Polo Pique Rosa</td>
						<td>19.00</td>
						<td>4</td>
						<td>Infantil</td>
						<td>Polo</td>
						<td>4-6 años</td>
					</tr>
					<tr @click="abrirOff()">
						<td>2</td>
						<td>VL12</td>
						<td>Bañador espíral rosa</td>
						<td>30.00</td>
						<td>20</td>
						<td>Infantil</td>
						<td>Bañador</td>
						<td>4-6 años</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Modal -->
		<div class="modal fade" id="modalNuevoProducto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-center">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="staticBackdropLabel">Nuevo producto</h5>
		        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div class="modal-body">
						<p>Rellene los datos del producto</p>
		        <div class="form-floating mb-3">
						  <input type="text" class="form-control form-control-sm" id="floNombre" placeholder=" " v-model="nombre">
						  <label for="floNombre">Nombre</label> 
						</div>
						<div class="form-floating mb-3">
						  <textarea class="form-control" placeholder=" " id="floDescripcion" style="height: 100px" v-model="descripcion"></textarea>
						  <label for="floDescripcion">Descripción</label>
						</div>
						<div class="form-floating mb-3">
						  <input type="text" class="form-control form-control-sm" id="floComposicion" placeholder=" " v-model="composicion">
						  <label for="floComposicion">Composición</label> 
						</div>
						<div class="form-floating mb-3">
						  <input type="text" class="form-control form-control-sm" id="floStock" placeholder=" " v-model="stock">
						  <label for="floStock">Stock inicial</label> 
						</div>
						<div class="row row-cols-2">
							<div class="col">
								<div class="form-floating mb-3">
									<input type="number" class="form-control form-control-sm" id="floPrecioAnt" placeholder=" " v-model="precioAnterior">
									<label for="floPrecioAnt">Precio Anterior</label>
								</div>
							</div>
							<div class="col">
								<div class="form-floating mb-3">
									<input type="number" class="form-control form-control-sm" id="floPrecioAct" placeholder=" " v-model="precioActual">
									<label for="floPrecioAct">Precio Actual</label>
								</div>
							</div>
						</div>
						
						<label class="form-label">Color inicial</label>
						<div class="input-group mb-3">
							<input type="color" class="form-control form-control-color" id="txtColor" value="#563d7c" title="Choose your color">
						  <button class="btn btn-outline-secondary" type="button" @click="sumarColor()"><i class="bi bi-plus"></i> Agregar</button>
						</div>
						<div>
							<div class="">
								<span>{{color}}</span>
							</div>
							<div class="mb-3 row row-cols-6 ">
								<div class="coloresPanel col " v-for="(color,index) in colores" :key="color.id">
									<div :data-color="color" @click="borrarColor(index)" :style="'background-color:'+color" ></div>
								</div>
							</div>
						</div>
						<label for="" class="form-label mt-2">Rango</label>
						<select class="form-select" v-model="idRango">
						  <option v-for="rango in rangos" :key="rango.id" :value="rango.id">{{rango.rango}}</option>
						</select>
						<label for="" class="form-label mt-2">Categorías</label>
						<select class="form-select" v-model="idCategoria">
						  <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">{{categoria.categoria}}</option>
						</select>
						<label for="" class="form-label mt-2">Tallas</label>
						<select class="selectpicker" id="sltTallasPanel" data-live-search="true" data-width="100%" multiple>
						  <option v-for="talla in tallas" :key="talla.id" :value="talla.id">{{talla.talla}}</option>
						</select>
						

		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-primary" @click="crearProducto()"><i class="bi bi-save"></i> Crear producto</button>
		      </div>
		    	</div>
		  	</div>
			</div>
		</div>

		<!-- Panel lateral -->
		<div class="offcanvas offcanvas-end" tabindex="-1" id="myOffcanvas" aria-labelledby="offcanvasExampleLabel">
		  <div class="offcanvas-header">
		    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Bañador espíral rosa</h5>
		    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		  </div>
		  <div class="offcanvas-body">
		    <div class="d-flex justify-content-center mb-3">
					<button type="button" class="btn btn-outline-dark"><i class="bi bi-pen"></i> Editar Producto</button>
				</div>

				<img src="/images/productos/det0.jpg" class="img-fluid">
				<p class="mt-2"><strong>Descripción:</strong></p>
		    <div>
		      Ranita con tejido tipo dobby con estructura de rayas azul medio, Cuello peter pan y engomado en la cintura. Apertura en la espalda y en el bajo.
		    </div>
				<p><strong>Composición:</strong></p>
		    <div>100% algodon</div>
				<p><strong>Precio:</strong></p>
		    <div><span><del>S/ 65.00</del></span> S/ 50.00</div>
				<p><strong>Tallas:</strong></p>
				<ul>
					<li>0-3 Meses</li>
					<li>4-6 Meses</li>
					<li>7-9 Meses</li>
				</ul>
				<p><strong>Colores:</strong></p>
				<div class="mb-3 row row-cols-4" id="colores">
					<div data-color="#ddd" ></div>
					<div data-color="#F3796F" ></div>
					<div data-color="#162E30" ></div>
				</div>

		    <button type="button" class="btn btn-outline-danger"><i class="bi bi-trash"></i> Eliminar</button>

	  </div>

	</div>
</template>

<script>
var myOffcanvas ;
$.fn.selectpicker.Constructor.BootstrapVersion = '4';
$.fn.selectpicker.defaults = {
  noneSelectedText: 'No hay selección',
  noneResultsText: 'No hay resultados {0}',
  countSelectedText: 'Seleccionados {0} de {1}',
  maxOptionsText: ['Límite alcanzado ({n} {var} max)', 'Límite del grupo alcanzado({n} {var} max)', ['elementos', 'element']],
  multipleSeparator: ', ',
  selectAllText: 'Seleccionar Todos',
  deselectAllText: 'Desmarcar Todos'
};

export default {
	name:'Panel',
	props:['adminLogin'],
	mounted(){
		//console.log( this.adminLogin );
		myOffcanvas= new bootstrap.Offcanvas(document.getElementById('myOffcanvas'));
		var colores = document.querySelectorAll('#colores div');
		colores.forEach(color=>{
			color.style.background = color.getAttribute('data-color')
		});
		this.listarRangos();
		this.listarCategorias();
		this.listarTallas();
		$('.selectpicker').selectpicker();
	},
	data(){
		return {
			nombre: '', descripcion:'', composicion:'', precioActual:0, precioAnterior:0, idRango:'', idCategoria:'', stock:0, 
			categoria:'', talla:'', colores:[],
			rangos:[], categorias:[], tallas:[]
		}
	},
	methods:{
		cerrarSesion(){
			localStorage.removeItem('adminLogin');
			this.$router.push({ path:'/'});
		},
		abrirOff(){
			myOffcanvas.show();
		},
		crearProducto(){
			this.talla = $('#sltTallasPanel').val();
			axios.post( this.nombreApi + 'insertarProducto.php', {
				nombre: this.nombre,
				descripcion: this.descripcion,
				composicion: this.composicion,
				precioActual: this.precioActual,
				precioAnterior: this.precioAnterior,
				idRango: this.idRango,
				categoria: this.idCategoria,
				tallas: this.talla,
				codPers: '',
				colores: this.colores
			})
			.then((response)=>{ console.log( response.data );})
			.catch((error)=>{ console.log( error );});
		},
		borrarColor(ind){
			this.colores.splice(ind,1);
		},
		sumarColor(){
			this.colores.push(document.getElementById('txtColor').value);
		},
		listarRangos(){
			axios.post(this.nombreApi + 'listarRangos.php')
			.then(response=>{
				this.rangos = response.data;
			}).catch(error=>{ console.log( error ); })
		},
		listarCategorias(){
			axios.post(this.nombreApi + 'listarCategorias.php')
			.then(response=>{
				this.categorias = response.data;
			}).catch(error=>{ console.log( error ); })
		},
		listarTallas(){
			axios.post(this.nombreApi + 'listarTallas.php')
			.then(response=>{
				this.tallas = response.data;
			}).catch(error=>{ console.log( error ); })
			.then( ()=>{
				$('.selectpicker').selectpicker('refresh');
			})

		}
	}
}
</script>

<style scoped>
#contenedor{ min-height: 80vh;}
*{
	font-weight: lighter;
}
p{ margin: 10px 0;}
strong, th{font-weight: 500;}
tbody>tr{
	cursor:pointer
}
.form-floating>.form-control{
	padding: 0.8rem .5rem 0;
}
.form-floating>.form-control, .form-floating>.form-select {
	height: calc(2.5rem + 2px);
	line-height: 1;
}
.form-floating>label{
	padding: .5rem .75rem;
	font-size: 0.8rem;
}
#colores>div, .coloresPanel>div{
	margin-left:1rem;
	width: 1.5rem;
	height: 1.5rem;
	/* background-color: red; */
	border-radius: 50%;
}
/deep/ .filter-option-inner-inner, /deep/ .dropdown-item>.text, /deep/ .bs-searchbox>input{font-weight: 100!important;}
/deep/ .bootstrap-select>.dropdown-toggle{
	display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
