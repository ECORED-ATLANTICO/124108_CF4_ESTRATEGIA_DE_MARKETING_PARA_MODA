<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
      .col-lg-8.col-md-12
        p El componente formativo Metales, insumos y cálculos para aleaciones aborda los fundamentos necesarios para el trabajo técnico en joyería, desde su comprensión conceptual hasta su aplicación en procesos de elaboración. Se inicia con el estudio de los metales, sus clases, propiedades, aplicaciones, origen y simbología. Posteriormente, se profundiza en la merma, lo que permite establecer su importancia en el control y optimización de materiales. Asimismo, se analizan los insumos y su cálculo, proporcionando herramientas para su correcta selección y uso. Se presentan los materiales e insumos para fundición, que influyen en la calidad del metal fundido, así como sus características técnicas. 
        .bg-color-25.tarjeta.p-4
          p.mb-0 La documentación aborda también las piezas para joyería, sus conceptos, clases, características y técnicas básicas de elaboración. Para fortalecer la aplicación de estos contenidos, se incluyen aspectos de matemática básica y unidades de medida relacionadas con longitud, masa y volumen. Finalmente, se analiza el manejo de los instrumentos de peso, esenciales para garantizar precisión durante todo el proceso de trabajo con metales y aleaciones.
    
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
