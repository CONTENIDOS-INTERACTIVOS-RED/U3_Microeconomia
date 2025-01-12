<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Formación de precios y equilibrio de mercado'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left") El precio de un bien o servicio es uno de los elementos más visibles y fundamentales en cualquier economía de mercado. Representa no solo el costo que los consumidores deben asumir para adquirir un producto, sino también el ingreso que los productores reciben por ofrecerlo. La formación de precios es un proceso dinámico que refleja la interacción entre la oferta y la demanda, donde ambos lados del mercado juegan un papel crucial. A través de este mecanismo, los recursos se asignan de manera eficiente, permitiendo satisfacer las necesidades de los consumidores y las expectativas de los productores (Antelo-Suárez, M. 2015).

          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Los mercados intermedios, como el oligopolio y la competencia monopolística, combinan características de ambos extremos, introduciendo elementos como la cooperación estratégica y la diferenciación de productos (Salas Velasco, 2018).


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") Entender cómo se forman los precios, es esencial para analizar el funcionamiento de los mercados. Los consumidores y productores, a través de sus decisiones, establecen puntos de equilibrio donde las cantidades demandadas y ofrecidas se igualan, definiendo así un precio de mercado. 

          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p(data-aos="fade-left").mb-0 Este equilibrio no solo determina el intercambio actual, sino que también envía señales a los agentes económicos sobre la necesidad de ajustar sus decisiones de consumo o producción, ante cambios en las condiciones del mercado.

          p(data-aos="fade-left") Además, la formación de precios está influenciada por factores como las preferencias de los consumidores, la tecnología empleada en la producción, los costos asociados, y la estructura del mercado en cuestión. Por ejemplo, en mercados perfectamente competitivos, los precios reflejan los costos marginales de producción, mientras que, en mercados con poder de mercado, como el monopolio, los precios pueden incluir márgenes de ganancia superiores.

        .col-lg-4
          figure  
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Formación de precios

      p(data-aos="fade-left") Para conocer sobre esta temática, lo invitamos a escuchar el siguiente pódcast.

      .bg-full-width.bg-color-5.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            .px-4.py-5
              p(data-aos="fade-left").mb-4 Para conocer sobre los fundamentos de la innovación estratégica, lo invitamos a escuchar el siguiente podcast.
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Formación de precios"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")

      #t_2_2
        h2 #[span 2.2] Equilibrio de mercado

      p(data-aos="fade-left") El equilibrio de mercado es un concepto central en economía, ya que permite analizar cómo las fuerzas de la oferta y la demanda interactúan para determinar los precios y las cantidades transadas en un mercado.

      .bg-full-width.bg-color-2
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Equilibrio de mercado 
              p.mb-4(data-aos="fade-right") En el PDF Equilibrio de mercado, se exploran las características fundamentales de este concepto, incluyendo el precio y la cantidad de equilibrio, así como los factores que influyen en la estabilidad o el cambio del equilibrio en distintos plazos. A través del análisis del corto y largo plazo, se profundiza en cómo los mercados ajustan sus condiciones ante variaciones en la oferta, la demanda y los costos de producción, permitiendo a los estudiantes comprender cómo los mercados alcanzan una asignación eficiente de los recursos y cómo estos ajustes impactan tanto a productores como a consumidores.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Equilibrio de mercado 

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/5.png", alt="")

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/170085" target="_blank" rel="noopener noreferrer") Antelo-Suárez, M. (2015). Microeconomía intermedia en casos. Delta Publicaciones.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/105577" target="_blank" rel="noopener noreferrer") Salas Velasco, M. (2018). Microeconomía: conceptos teóricos y aplicaciones. Difusora Larousse - Ediciones Pirámide.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/224089" target="_blank" rel="noopener noreferrer") Rodríguez Galván, J. Y. (2022). Microeconomía: teoría y ejercicios. Grupo Editorial Éxodo.


              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=c0mcofGagmg" target="_blank" rel="noopener noreferrer") SoloPapelBoli. (2023). 5.2 Regulaciones: Precios máximos y precios mínimos.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=C0rwHPKIt1o" target="_blank" rel="noopener noreferrer") SoloPapelBoli. (2023). 2. Monopolio discriminador de precios.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=DPdq_uKkGkk" target="_blank" rel="noopener noreferrer") SoloPapelBoli. (2023). 4. Liderazgo en precios.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=CnF26cflfQM" target="_blank" rel="noopener noreferrer") Magic Markers. (2018). ¿Cómo negociar bien?

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=tX9JVDAPO0g" target="_blank" rel="noopener noreferrer") SoloPapelBoli. (2023). 5. Equilibrio de un mercado. Microeconomía. Conceptos básicos.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=OAWD3J-mVbU" target="_blank" rel="noopener noreferrer") Montero Espinosa (SPyB). (2019). Equilibrio del mercado competitivo.


            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
