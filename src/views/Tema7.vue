<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Normativa legal vigente y ética en el manejo de datos (protección de datos)
    
    .bg-color-22.mb-5.tarjeta.px-4
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema7/1.png").mx-auto
        .col-lg
          p Los avances tecnológicos y el comercio electrónico han cambiado la interacción, atención y servicio al cliente, este escenario digital promueve una interacción inmediata a través de portales, sitios web o redes sociales, lo cual genera un proceso. Una vez revise el siguiente recurso educativo tendrá la capacidad de describir el paso a paso de un proceso de servicio al cliente en las redes sociales.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema7/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Constitución Política")
            h4 Constitución Política
            p Con respecto al manejo de los datos, la Constitución, en el Artículo 15 menciona que todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas.
            p.mb-0 En la recolección, tratamiento y circulación de datos se respetarán la libertad y demás garantías consagradas en la Constitución.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ley 1266 del 2008")
            h4 Ley 1266 del 2008
            p.mb-0 En el marco de esta ley se dictan las disposiciones generales del hábeas data, regulando el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial y de servicios. En los Artículos 2 y 4 se definen las normas especiales para la confidencialidad de los datos y los principios administrativos de estos.
          .tarjeta.color-acento-botones--borde.p-4(titulo="La Ley 1581 de 2012")
            h4 La Ley 1581 de 2012
            p Esta ley establece los lineamientos para la protección de datos y la autorización de los titulares para el tratamiento de estos y, define que datos personales son cualquier tipo de información asociada a una o varias personas naturales, determinables, como el nombre, la edad, el sexo, el estado civil, el domicilio, entre otros. Además, define que hay diferentes tipos de datos:
            ul.lista-ul--color.ms-3.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Dato privado.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Dato semiprivado.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Dato público.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Decreto 1377 de 2013")
            h4 Decreto 1377 de 2013
            p.mb-0 Por el cual se reglamenta parcialmente la Ley 1581 de 2013, en la que se comunica a través de los artículos 4, 11 y 23 la recolección de datos personales que pueden limitarse y su duración en el tiempo. Finalmente, se establecen los medios para la protección de datos personales.
    
    img(src="@/assets/curso/tema7/3.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        p.banner-text Se ha finalizado esta experiencia de aprendizaje relacionada con el servicio y atención al cliente en las redes sociales, se espera que los conocimientos, habilidades y actitudes que desarrolló tengan sentido en la solución de problemas y transformación de procesos en su contexto laboral.


</template>

<script>
export default {
  name: 'Tema7',
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
