<template>
	<div>
		<div class="offcanvas offcanvas-end" tabindex="-1" id="offCarrito" aria-labelledby="offCarritoLabel">
			<div class="offcanvas-header mt-3">
				<h5 class="offcanvas-title text-muted" id="offCarritoLabel">Productos: <span class="">3</span></h5>
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
				<div class="row mb-3">
					<div class="col-5">
						<img src="/images/productos/det0.jpg" class="img-fluid">
					</div>
					<div class="col-7 d-flex align-content-between  flex-wrap">
						<h4 class="text-muted ">Vestido a rayas</h4>
						<h4 class="text-muted ">Talla <span class="ligero text-oscuro">0-4 meses</span></h4>
						<div class="row  ">
							<div class="col"><input type="number" class="form-control text-center" value="2" min=1></div>
							<div class="col">
								<h4 class="ligero text-oscuro">S/ 36.00</h4>
							</div>
						</div>
						<div class="row ">
							<h4 class="ligero"><span class="text-oscuro"><i class="bi bi-trash"></i></span> Eliminar </h4>
						</div>
					</div>
				</div>

				<div class="row mb-3">
					<div class="col-5">
						<img src="/images/productos/Imagen_13.jpg" class="img-fluid">
					</div>
					<div class="col-7 d-flex align-content-between  flex-wrap">
						<h4 class="text-muted ">Vestido de noche</h4>
						<h4 class="text-muted ">Talla <span class="ligero text-oscuro">4-6 meses</span></h4>
						<div class="row  ">
							<div class="col"><input type="number" class="form-control text-center" value="2" min=1></div>
							<div class="col">
								<h4 class="ligero text-oscuro">S/ 20.00</h4>
							</div>
						</div>
						<div class="row ">
							<h4 class="ligero"><span class="text-oscuro"><i class="bi bi-trash"></i></span> Eliminar </h4>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<style scoped>
.offcanvas-end{
	width: 500px;
}
</style>
<script>
export default {
	name: 'Carrito',

}
</script>