<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	// Types for form data
	interface FormData {
		name: string;
		email: string;
		message: string;
	}

	// Form state
	let formData: FormData = { name: '', email: '', message: '' };

	// Services data
	const services = [
		{
			title: 'Landings',
			description: 'Diseños atractivos para capturar y convertir a tus clientes potenciales.',
			icon: '🎯'
		},
		{
			title: 'E-Commerce',
			description: 'Tiendas en línea adaptadas a tus necesidades para maximizar tus ventas.',
			icon: '🛍️'
		},
		{
			title: 'Desarrollo a Medida',
			description: 'Soluciones personalizadas que resuelven problemas específicos de tu negocio.',
			icon: '⚙️'
		}
	];

	// Visibility state for sections
	let isVisible = { services: false, about: false, contact: false };

	// Handle form submission
	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		alert('Mensaje enviado con éxito!');
		formData = { name: '', email: '', message: '' };
	};

	// Intersection Observer for animations
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.id as keyof typeof isVisible;
						isVisible[id] = true;
					}
				});
			},
			{ threshold: 0.1 }
		);

		['services', 'about', 'contact'].forEach((id) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});
	});
</script>

<svelte:head>
	<title>Fábrica de Software</title>
</svelte:head>

<section class="min-h-screen bg-base-100 text-base-content">
	<!-- Hero Section -->
	<div class="hero h-[55vh] relative" >
	  <div class="hero-overlay bg-opacity-60 bg-primary"></div>
	  <div class="hero-content text-center text-neutral-content z-10 pt-10" 
		   in:fly="{{ y: 50, duration: 1000 }}">
		<div class="max-w-md">
		  <h1 class="mb-5 text-5xl font-bold text-white">Impulsa tu negocio con tecnología</h1>
		  <p class="mb-5 text-lg">Creamos soluciones personalizadas para potenciar tu presencia en línea y optimizar tu negocio.</p>
		  <button class="btn btn-primary btn-lg bg-white text-primary border-none shadow-md hover:bg-primary  transition-all duration-300">
			Conoce más
		  </button>
		</div>
	  </div>
	  <div class="absolute bottom-0 w-full">
		<svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
		  <path fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
		</svg>
	  </div>
	</div>

	<!-- Services Section -->
	<section id="services" class="py-20">
		{#if isVisible.services}
			<div in:fade={{ duration: 1000 }} class="text-center">
				<h2 class="mb-12 text-4xl font-bold">Nuestros Servicios</h2>
				<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
					{#each services as service, i}
						<div
							class="card shadow-lg transition-all hover:shadow-xl"
							in:fly={{ y: 50, duration: 800, delay: i * 200 }}
						>
							<div class="card-body text-left">
								<div class="text-4xl">{service.icon}</div>
								<h3 class="card-title">{service.title}</h3>
								<p>{service.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>

	<!-- About Us Section -->
	<section id="about" class="py-20 text-center">
		{#if isVisible.about}
			<div in:fade={{ duration: 1000 }}>
				<h2 class="mb-8 text-4xl font-bold">Sobre Nosotros</h2>
				<p class="mx-auto max-w-3xl text-lg">
					Somos un equipo dedicado de desarrolladores argentinos con pasión por la tecnología. Nos
					enfocamos en ofrecer servicios de alta calidad que ayuden a nuestros clientes a alcanzar
					sus metas digitales.
				</p>
			</div>
		{/if}
	</section>

	<!-- Contact Section -->
	<section id="contact" class="py-20 text-center">
		{#if isVisible.contact}
			<div in:fade={{ duration: 1000 }} class="mx-auto max-w-xl">
				<h2 class="mb-12 text-4xl font-bold">Contáctanos</h2>
				<form on:submit={handleSubmit} class="space-y-6">
					<input
						type="text"
						bind:value={formData.name}
						placeholder="Nombre"
						class="input input-bordered w-full"
						required
					/>
					<input
						type="email"
						bind:value={formData.email}
						placeholder="Correo Electrónico"
						class="input input-bordered w-full"
						required
					/>
					<textarea
						bind:value={formData.message}
						placeholder="Mensaje"
						class="textarea textarea-bordered h-32 w-full"
						required
					></textarea>
					<button type="submit" class="btn btn-primary w-full">Enviar Mensaje</button>
				</form>
			</div>
		{/if}
	</section>
</section>

<style>
	/* Smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
