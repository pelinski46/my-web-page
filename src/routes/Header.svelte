<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<div class="navbar fixed z-50">
		<!-- Navbar Start -->
		<div class="navbar-start">
			<!-- Mobile Dropdown Menu -->
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul
					tabindex="0"
					class="menu dropdown-content menu-sm mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
				>
					<li><a href="{base}/#services">Servicios</a></li>
					<li><a href="{base}/#about">Nosotros</a></li>
					<li><a href="{base}/#contact">Contacto</a></li>
				</ul>
			</div>
			<!-- Brand Name -->
			<a class="btn btn-ghost text-xl normal-case text-white" href="/">DeltaBits</a>
		</div>

		<!-- Navbar Center for Larger Screens -->
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal space-x-6 px-1">
				<li><a href="{base}/#services" class="text-white hover:text-primary text-xl">Servicios</a></li>
				<li><a href="{base}/#about" class="text-white hover:text-primary text-xl">Nosotros</a></li>
				<li><a href="{base}/#contact" class="text-white hover:text-primary text-xl">Contacto</a></li>
			</ul>
		</div>
	</div>
</header>

<style>
	.navbar {
		background-color: #000000;
	}
</style>
