<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5


    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Los mercados y los tipos de competencia, son elementos fundamentales en el estudio de la microeconomía, dado que explican cómo interactúan los agentes económicos para determinar precios, asignar recursos y generar resultados en un contexto de intercambio. En esta unidad, se explorarán las dinámicas de diversos modelos de mercado y sus implicaciones en el funcionamiento de la economía, sentando las bases para comprender los mecanismos que sostienen la actividad económica y los factores que pueden alterarla.

        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El resultado de aprendizaje de esta unidad se fundamenta en que se logren identificar y analizar las características de los diferentes tipos de mercado, entender los procesos de formación de precios y equilibrio, y reconocer las fallas que pueden surgir en los mercados, junto con sus posibles soluciones. Este enfoque, permitirá desarrollar una visión crítica y práctica, para evaluar cómo funcionan los mercados en escenarios reales.
        
        p(data-aos="fade-left") Para facilitar el aprendizaje, la unidad se organiza en tres temas principales:

      .col-lg-4
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")




    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Tipos de mercado")
            p En este tema, se analizan los modelos de competencia perfecta, monopolio, oligopolio y competencia monopolística, comprendiendo sus características y efectos en la economía.

          .div(titulo="Formación de precios y equilibrio de mercado")
            p Este espacio se centra en los procesos mediante los cuales se determinan los precios y se alcanza el equilibrio en los mercados, considerando factores de oferta y de demanda.

          .div(titulo="Fallas del mercado")
            p Finalmente, se exploran las externalidades, los bienes públicos y las asimetrías de información, identificando las razones por las cuales los mercados pueden fallar y cómo se pueden corregir.



    .row.mb-5

      .col-lg-8
        p(data-aos="fade-left") Al finalizar esta unidad, se habrán adquirido herramientas analíticas para interpretar el funcionamiento de los mercados y evaluar su impacto en diversos contextos económicos, tanto locales como globales. Estas habilidades son esenciales para entender fenómenos como el poder de mercado, la fijación de precios y las políticas públicas dirigidas a corregir ineficiencias.

        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Lo invitamos a participar activamente en este recorrido por los mercados y la competencia, reflexionando sobre cómo estos principios se relacionan con situaciones económicas reales. El compromiso será una clave esencial, para consolidar una comprensión sólida y práctica, de los temas abordados en esta unidad.

      .col-lg-4
        figure
          img(src="@/assets/curso/intro/5.png", data-aos="zoom-in")
</template>
