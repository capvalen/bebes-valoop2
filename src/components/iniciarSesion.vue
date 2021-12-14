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
								<input type="email" class="form-control" id="floatingInput" placeholder="micorreo@gmail.com" ref="txtCorreo" autocomplete="off">
								<label for="floatingInput">E-mail</label>
							</div>
							<div class="form-floating mb-3">
								<input type="password" class="form-control" id="floatingInput2" ref="txtClave" placeholder="Mi contraseña">
								<label for="floatingInput2">Contraseña</label>
							</div>
							<div class="text-center">
								<button id="btnEntrar" class="btn btn-primary btn-lg px-4" @click="entrarCorreo()">Iniciar sesión</button>
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
								<button id="btnRegistrar" class="btn btn-primary btn-lg px-4" @click="registrar()">Registrarme</button>
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
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged   } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyAyk93MfRSRtc_a0dlTMzvOVe5L-j8Sp_k",
	authDomain: "bebesvaloop.firebaseapp.com",
	projectId: "bebesvaloop",
	storageBucket: "bebesvaloop.appspot.com",
	messagingSenderId: "1020853412986",
	appId: "1:1020853412986:web:27dc2190e21a70cb5d07c3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const usuario = auth.currentUser;


export default {
	name: 'iniciarSesion',
	data() {
		return {
			inicio:true, registro:false,
			correo: '', pass:''
		}
	},
	mounted(){
		auth.signOut();
		console.log( usuario );
	},
	methods:{
		async registrar(){
			createUserWithEmailAndPassword(auth, 'gm1@gmail.com', 'smm3m44')
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				user = usuario;
				
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
		},
		async entrarCorreo(){
			signInWithEmailAndPassword(auth, this.$refs.txtCorreo.value, this.$refs.txtClave.value)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log( user );
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if(errorCode=='auth/invalid-email'){
					
				}
			});
		}
	}
}

onAuthStateChanged(auth, (user) => {
	
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
		console.log( 'existo' + user.email );
    // ...
  } else {
    // User is signed out
    // ...
		console.log( 'no exist' );
  }
});

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