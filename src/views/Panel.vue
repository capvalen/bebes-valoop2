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
					<tr >
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
					<tr v-for="(producto, index) in productos" :key="producto.id" @click="abrirOff(index)">
						<td>{{index+1}}</td>
						<td>VL{{producto.id}}</td>
						<td class="text-capitalize">{{producto.nombre.toLowerCase()}}</td>
						<td>{{parseFloat(producto.precioActual).toFixed(2)}}</td>
						<td>{{producto.stock}}</td>
						<td>{{producto.rango}}</td>
						<td>{{producto.categoria}}</td>
						<td>{{tallasEnComas(index)}}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Modal nuevo producto -->
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
						  <input type="text" class="form-control form-control-sm" id="floStock" placeholder=" " v-model="stock" min=0>
						  <label for="floStock">Stock inicial</label> 
						</div>
						<div class="row row-cols-2">
							<div class="col">
								<div class="form-floating mb-3">
									<input type="number" class="form-control form-control-sm" id="floPrecioAnt" placeholder=" " v-model="precioAnterior" min=0>
									<label for="floPrecioAnt">Precio Anterior</label>
								</div>
							</div>
							<div class="col">
								<div class="form-floating mb-3">
									<input type="number" class="form-control form-control-sm" id="floPrecioAct" placeholder=" " v-model="precioActual" min=0>
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
						<label for="" class="form-label mt-2">Foto Principal</label>
						<div class="mb-3">
						  <input class="form-control" type="file" id="formFile" ref="archivo" @change="cargarArchivo()" accept="image/png, image/gif, image/jpeg">
						</div>
						

		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-primary" @click="guardarPrimeroFoto()"><i class="bi bi-save"></i> Crear producto</button>
		      </div>
		    	</div>
		  	</div>
			</div>
		</div>

		<!-- Panel lateral -->
		<div class="offcanvas offcanvas-end" tabindex="-1" id="myOffcanvas" aria-labelledby="offcanvasExampleLabel">
		  <div class="offcanvas-header">
		    <h5 class="offcanvas-title" id="offcanvasExampleLabel">{{nombre}}</h5>
		    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		  </div>
		  <div class="offcanvas-body">
		    <div class="d-flex justify-content-center mb-3">
					<button type="button" class="btn btn-outline-dark"><i class="bi bi-pen"></i> Editar Producto</button>
				</div>

				<img :src="'./images/productos/'+foto" class="img-fluid">
				<p class="mt-2"><strong>Descripción:</strong></p>
		    <div v-html="descripcion"></div>
				<p><strong>Composición:</strong></p>
		    <div>100% algodon</div>
				<p><strong>Precio:</strong></p>
		    <div><span><del v-if="precioAnterior>0">S/ {{parseFloat(precioAnterior).toFixed(2)}}</del></span> S/ {{parseFloat(precioActual).toFixed(2)}}</div>
				<p><strong>Tallas:</strong></p>
				<ul v-html="tallasUl">
				</ul>
				<p><strong>Colores:</strong></p>
				<div class="mb-3 row row-cols-4" id="colores">
					<div v-for="color in colores" :key="color.id" :data-color="color" :style="'background-color: ' + color" ></div>
					
				</div>

		    <button type="button" class="btn btn-outline-danger" @click="borrarProducto()"><i class="bi bi-trash"></i> Eliminar</button>

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
		
		this.cargarProductos();
		this.listarRangos();
		this.listarCategorias();
		this.listarTallas();
		$('.selectpicker').selectpicker();
	},
	data(){
		return {
			id:'', nombre: '', descripcion:'', composicion:'', precioActual:0, precioAnterior:0, idRango:'', idCategoria:1, stock:0, 
			categoria:'', talla:'', colores:[],
			rangos:[], categorias:[], tallas:[], foto:'', archivo:'',
			productos:[], tallasUl:''
		}
	},
	methods:{
		/* cargarColores(){
			var colores = document.querySelectorAll('#colores div');
			colores.forEach(color=>{
				color.style.background = color.getAttribute('data-color')
			});
		}, */
		cerrarSesion(){
			localStorage.removeItem('adminLogin');
			this.$router.push({ path:'/'});
		},
		abrirOff(index){
			this.id = this.productos[index].id;
			this.foto = this.productos[index].foto;
			this.nombre = this.productos[index].nombre;
			this.composicion = this.productos[index].composicion;
			this.precioAnterior = this.productos[index].precioAnterior;
			this.precioActual = this.productos[index].precioActual;
			this.stock = this.productos[index].stock;
			this.descripcion = this.productos[index].descripcion.replace(/\r?\n/g, "<br>");
			this.colores = this.productos[index].colores;
			
			//this.cargarColores();
			this.tallasEnUl(index);
			myOffcanvas.show();
		},
		cargarProductos(){
			axios.post(this.nombreApi + 'listarProductos.php')
			.then((response)=>{ console.log( response.data );
				this.productos = response.data;
			})
			.catch((error)=>{ console.log( error );});
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
				colores: this.colores,
				foto: this.foto,
				stock: this.stock
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

		},
		cargarArchivo(){
			this.archivo = this.$refs.archivo.files[0];
		},
		guardarPrimeroFoto(){
			var that = this;
			if(document.getElementById("formFile").files.length==0){
				//Sin foto
				this.foto='';
				this.crearProducto();
			}else{
				//con foto
				let formData = new FormData();
				formData.append('archivo', this.archivo);
				formData.append('ruta', this.rutaDocs);
				axios.post(this.nombreApi+'/subirFoto.php', formData, {
					headers: {
						'Content-Type' : 'multipart/form-data'
					}
				}).then( function (response){
					var comoEs= response.data;
					console.log( comoEs );
					if( comoEs =='Error subida' ){
						console.log( 'error de subida 1' );
					}
					if(comoEs != 'Error subida'){ //subió bien
						that.foto=comoEs;
						//guardar producto
						that.crearProducto();
					}
				}).catch(function(){
					console.log( 'error subiendo foto' );
					
				})
			}
		},
		tallasEnComas: function(queModifico){
			var letras = '';
			for(let i=0; i<this.productos[queModifico].tallas.length; i++ ){
				letras+= this.productos[queModifico].tallas[i];
				if( i<this.productos[queModifico].tallas.length-1){
					letras+=', ';
				}
			}
			return letras;
		},
		tallasEnUl: function(queModifico){
			this.tallasUl='';
			for(let i=0; i<this.productos[queModifico].tallas.length; i++ ){
				this.tallasUl+= "<li>"+ this.productos[queModifico].tallas[i] + "</li>";
			}
		},
		borrarProducto(){
			var that= this;
			if(confirm(`¿Desea eliminar el producto ${this.nombre}?`)){
				axios.post(this.nombreApi + 'borrarProducto.php', {
				idBorrar: this.id
			})
				.then((response)=>{ console.log( response.data );
					if(response.data=='ok'){
						myOffcanvas.hide();
						that.cargarProductos();
					}else{
						alert('Hubo un error borrando el producto, intentelo nuevamente más tarde')
					}
				})
				.catch((error)=>{ console.log( error );});
			}
		}
	},
	computed:{
		
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
:deep .filter-option-inner-inner, :deep .dropdown-item>.text, :deep .bs-searchbox>input{font-weight: 100!important;}
:deep .bootstrap-select>.dropdown-toggle{
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
