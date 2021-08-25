<template>
	<div>
		<!-- Modal -->
		<div class="modal fade" id="modalIniciarSesion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body p-3">
						<button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
						<div class="contenido p-4" v-if="inicio">
							<h4 class="text-center">SOY CLIENTE VALOOP</h4>
							<div class="form-floating mb-3">
								<input type="email" class="form-control" id="floatingInput" placeholder="micorreo@gmail.com" autocomplete="off">
								<label for="floatingInput">E-mail</label>
							</div>
							<div class="form-floating mb-3">
								<input type="password" class="form-control" id="floatingInput2" placeholder="Mi contraseña">
								<label for="floatingInput2">Contraseña</label>
							</div>
							<div class="text-center">
								<button id="btnEntrar" class="btn btn-primary btn-lg px-4">Iniciar sesión</button>
							</div>
							<div class="text-end my-4">
								<p id="pOlvide" ><a href="#">Olvidé la contraseña</a></p>
							</div>
							<div class="row row-cols-2">
								<div class="col">
									<div class="btn btn-primary py-3 px-4 d-flex align-items-center justify-content-between" id="btnFacebook"><i class="bi bi-facebook"></i> <span >con Facebook</span></div>
								</div>
								<div class="col">
									<div class="btn btn-primary py-3 px-4 d-flex align-items-center justify-content-between" id="btnGoogle"><i class="bi bi-google"></i> <span >con Google</span></div>
								</div>
							</div>
							<div class="text-center">
								<h4 class="mt-4 mb-2" >NO SOY CLIENTE VALOOP</h4>
								<button class="btn btn-primary btn-lg px-4 botonVerde" @click="registro=true; inicio=false">Registrarme</button>

							</div>
						</div>

						<div class="contenido p-4" v-if="registro">
							<h4 class="text-center">CREAR CUENTA VALOOP</h4>
							<div class="row row-cols-2">
								<div class="col">
									<div class="btn btn-primary py-3 px-4 d-flex align-items-center justify-content-between" id="btnFacebook"><i class="bi bi-facebook"></i> <span >con Facebook</span></div>
								</div>
								<div class="col">
									<div class="btn btn-primary py-3 px-4 d-flex align-items-center justify-content-between" id="btnGoogle"><i class="bi bi-google"></i> <span >con Google</span></div>
								</div>
							</div>
							<div class="form-floating my-3">
								<input type="email" class="form-control" id="floCorreo" placeholder="micorreo@gmail.com">
								<label for="floCorreo">E-mail</label>
							</div>
							<div class="form-floating my-3">
								<input type="text" class="form-control" id="floDni" placeholder="micorreo@gmail.com">
								<label for="floDni">Dni</label>
							</div>
							<div class="form-floating my-3">
								<input type="text" class="form-control" id="floNombres" placeholder="micorreo@gmail.com">
								<label for="floNombres">Nombres</label>
							</div>
							<div class="form-floating my-3">
								<input type="text" class="form-control" id="floApellidos" placeholder="micorreo@gmail.com">
								<label for="floApellidos">Apellidos</label>
							</div>
							<div class="form-floating my-3">
								<input type="text" class="form-control" id="floCelular" placeholder="micorreo@gmail.com">
								<label for="floCelular">Teléfono celular</label>
							</div>
							<div class="form-floating my-3">
								<input type="text" class="form-control" id="floPassw" placeholder="micorreo@gmail.com">
								<label for="floPassw">Contraseña</label>
							</div>
							<div class="form-check">
							  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							  <label class="form-check-label" for="flexCheckDefault">He leído y acepto la <a href="#">política de privacidad y condiciones de uso.</a>
							  </label>
							</div>
							<div class="text-center my-2">
								<button id="btnRegistrar" class="btn btn-primary btn-lg px-4" >Registrarme</button>
								<h4 class="my-4">SOY CLIENTE VALOOP</h4>
								<button class="btn btn-primary btn-lg px-4 botonVerde" @click="registro=false; inicio=true">Iniciar Sesión</button>
							</div>

						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>


</template>
<script>
export default {
	name: 'iniciarSesion',
	data() {
		return {
			inicio:true, registro:false,
			correo: '', pass:''
		}
	},
	mounted(){
		
	}
}
</script>

<style scoped>
	.form-floating>label{
		font-weight: lighter!important;
	}
	#btnEntrar,#btnRegistrar, .botonVerde{
		border-radius: 1.5rem;
    background-color: #79CBB5!important;
		border:none;
	}
	.form-control{
		    border: none;
    border-bottom: 1px solid #a9a9a9;
    
	}
	.form-control:focus{
		box-shadow: none;
	}
	#pOlvide>a{
    color: #79CBB5!important;
		font-weight: lighter;
		font-size:1.2rem;
	}
	.btn>i{
		font-size: 1.5rem;
	}
	.form-check{
		font-size: 0.8rem; font-weight: lighter;
	}
	.form-check .form-check-input{
		width: 1.2rem;
    height: 1.2rem;
	}
	.form-check .form-check-label{padding-left: 1rem;}
	#btnFacebook{background-color: #405896; border:none;}
	#btnGoogle{background-color: #e34133; border:none;}
	#btnGoogle:hover{ background-color: #c13326; }
	#btnFacebook:hover{ background-color: #2a4381; }
</style>