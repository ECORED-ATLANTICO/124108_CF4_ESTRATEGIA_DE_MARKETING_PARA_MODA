<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción al mercadeo
    
    img(src="@/assets/curso/tema1/1.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text En la actualidad se trabaja desde los diferentes escenarios empresariales para asegurar que todos los empleados aseguren un buen servicio como clave para lograr el objetivo de generar una experiencia dinámica, proactiva y de calidad para el cliente.
    
    .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Por eso se puede decir que servicio al cliente es un conjunto de acciones y estrategias que se realizan antes, durante y después del proceso de interacción y transacción entre una organización proveedora de productos, servicios y un cliente.

        p.mb-0 El servicio al cliente conlleva a las organizaciones a identificar las necesidades de los consumidores para satisfacerlas a través de soluciones tales como productos y servicios.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
