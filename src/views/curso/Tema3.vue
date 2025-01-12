<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Fallos de mercado'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-right") En los modelos económicos ideales, los mercados competitivos logran una asignación eficiente de recursos, maximizando el bienestar social. Sin embargo, en la realidad, existen circunstancias en las que los mercados no funcionan de manera óptima, dando lugar a lo que se conoce como fallos del mercado. Estos fallos ocurren cuando las fuerzas del mercado no logran asignar recursos de manera eficiente, lo que genera desequilibrios económicos y sociales que afectan tanto a los consumidores como a los productores.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in").mt-4.mt-lg-0


      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema3/2.svg", alt="")

            .col-lg-8
              .pt-4
                p.mb-4(data-aos="fade-right") #[strong Este tema se centra en analizar los principales tipos de fallos del mercado y sus implicaciones.]
                p.mb-4(data-aos="fade-right") En primer lugar, se estudian las externalidades, que ocurren cuando las acciones de un agente económico afectan positiva o negativamente a terceros, sin que estas consecuencias se reflejen en los precios del mercado.

                p.mb-4(data-aos="fade-right") Luego, se aborda el concepto de bienes públicos, aquellos que, debido a sus características de no exclusión y no rivalidad, no pueden ser gestionados eficientemente por el mercado.

                p.mb-4(data-aos="fade-right") Finalmente, se examinan los desequilibrios de mercado, como los monopolios o la información asimétrica, que obstaculizan el funcionamiento adecuado de los mercados competitivos.

      p(data-aos="fade-right").mb-5 Entender los fallos del mercado es fundamental, no solo para identificar sus causas, sino también para proponer soluciones que permitan corregirlos. En este sentido, la intervención del gobierno y el diseño de políticas públicas juegan un papel crucial para restablecer el equilibrio económico, reducir las ineficiencias y garantizar una distribución más equitativa de los recursos.

      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Externalidades

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
        .col-lg-8(data-aos="fade-left")
          p(data-aos="fade-left") En los mercados, las decisiones de consumo o producción de los agentes económicos, suelen generar efectos que van más allá de las transacciones directas entre compradores y vendedores. Cuando estas decisiones afectan positiva o negativamente a terceros, sin que estos impactos se reflejen en los precios de mercado, estamos frente a una externalidad. 

          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Este fenómeno, característico de los fallos del mercado, representa una de las principales causas de ineficiencia en la asignación de recursos económicos (González Tapia, 2015).

          p(data-aos="fade-left") Los tipos de externalidades, son:


      .bg-full-width.bg-color-info.mb-5
        .pt-5.px-4.px-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/tema3/info1.png', alt='', style="max-width: 1100px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="0%" y="44%" numero="1")
                    h5 Externalidades en la producción
                    p Las externalidades en la producción, surgen cuando las actividades de una empresa o consumidor, influyen en las capacidades productivas de otras empresas, fuera del mercado. Estas externalidades pueden ser positivas o negativas, dependiendo del impacto generado.

                  .bg-color-white.box-shadow.p-3(x="8%" y="11%" numero="2")
                    h5 Externalidades positivas en la producción
                    p Un ejemplo claro de externalidad positiva, es la creación de un parque tecnológico cerca de un campus universitario. En este caso, las empresas innovadoras y las universidades se benefician mutuamente: las empresas tienen acceso a talento capacitado y a investigación de primera mano, mientras que los estudiantes y académicos pueden aprovechar las oportunidades de empleo y colaboración, en proyectos reales. Esta interacción genera un círculo virtuoso de desarrollo e innovación, incluso sin que exista una transacción formal que regule estas interacciones.

                  .bg-color-white.box-shadow.p-3(x="92%" y="11%" numero="3")
                    h5 Externalidades negativas en la producción
                    p Por el contrario, un ejemplo de externalidad negativa ocurre cuando una empresa papelera vierte contaminantes en un río, afectando la actividad de una empresa de turismo activo en el mismo río. Esta contaminación genera costos adicionales para la empresa de turismo, como pérdida de clientes o mayores gastos para mantener sus operaciones. Estos costos no están reflejados en el precio del papel, lo que genera una ineficiencia económica.

                  .bg-color-white.box-shadow.p-3(x="100%" y="44%" numero="4")
                    h5 Mercados inexistentes y desafíos
                    p En ambos casos, la ausencia de mercados organizados para intercambiar bienes como "aire limpio" o "contaminación fluvial", complica la solución. Por ejemplo, no existe un mercado en el que una empresa pueda comprar el derecho para verter contaminantes y otra para vender su acceso a agua limpia. Lo mismo sucede con externalidades positivas como el acceso al ruido de la música que traspasa paredes, para el cual tampoco hay un mercado organizado.


      p(data-aos="fade-right").mb-4 La solución a estas externalidades pasa por crear mecanismos que internalicen estos efectos, como impuestos, subsidios, regulaciones o incluso mercados de derechos negociables. Estos enfoques buscan equilibrar las externalidades, mejorando tanto la eficiencia económica como el bienestar social.

      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Bienes públicos

      .row.mb-5
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Los bienes públicos son aquellos que, una vez producidos, están disponibles para ser consumidos por todos los agentes económicos, sin importar si han contribuido a su producción.

          p(data-aos="fade-left") Este tipo de bienes tiene dos características fundamentales que los distinguen de los bienes privados: no rivalidad y no exclusión en el consumo. Estas particularidades son las que hacen que la provisión de bienes públicos a través de mecanismos de mercado, no genere asignaciones que sean Pareto eficientes (Núñez Sánchez, s.f.).

          p(data-aos="fade-left") Las características de los bienes públicos, son:


        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")


      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="No rivalidad" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 No rivalidad
              p Implica que el consumo del bien por parte de un agente económico adicional, no genera costos adicionales de producción; es decir, no reduce la cantidad disponible para otros consumidores. Por ejemplo, la iluminación proporcionada por un faro marítimo, no se ve afectada por la cantidad de barcos que la utilicen.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema3/7.png", alt="")
        .tabs-content.border.px-4.p-md-5.py-3(titulo="No exclusión" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 No exclusión
              p Significa que no es posible excluir a ningún agente económico del uso o disfrute del bien, incluso si no han contribuido a su financiamiento. Este es el caso de la defensa nacional, donde todos los ciudadanos de un país, se benefician sin necesidad de pagos individuales directos.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema3/8.png", alt="")


      p(data-aos="fade-right") Los bienes públicos también pueden clasificarse en dos categorías: 


      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.pb-md-3

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/9.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Bienes públicos puros
                  p.mb-0 Cumplen estrictamente con los criterios de no exclusión y no rivalidad, como los mencionados previamente.
            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/10.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Bienes públicos impuros
                  p.mb-0 Como los parques recreativos, pueden ser no excluibles, pero parcialmente rivales, si su uso intensivo genera congestión o deterioro.


      p(data-aos="fade-right") La provisión de bienes públicos suele presentar desafíos significativos, puesto que, al no haber un mecanismo directo para cobrar por su uso, las empresas privadas no encuentran incentivos para producirlos de manera eficiente. En consecuencia, los gobiernos u organizaciones públicas suelen intervenir para garantizar su provisión adecuada. 



      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
        .col-lg-7
          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Sin esta intervención, podrían surgir problemas como el "polizón" (free-rider problem), donde algunos individuos disfrutan de los beneficios del bien público, sin contribuir a su costo.
          p(data-aos="fade-left") El problema del polizón, genera ineficiencias económicas porque las personas pueden subestimar su disposición a pagar por estos bienes, lo que lleva a una provisión insuficiente. Por ejemplo, si se financiara la defensa nacional, únicamente a través de contribuciones voluntarias, muchas personas optarían por no pagar, confiando en que otros cubrirán los costos, pero, aun así, recibirían el beneficio de estar protegidos.
          
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://ocw.unican.es/pluginfile.php/1653/course/section/1144/tema_04.pdf" target="_blank" rel="noopener noreferrer") Núñez Sánchez, R. (s.f.). Tema 4. Externalidades y bienes públicos Microeconomía III.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://trilogia.utem.cl/wp-content/uploads/sites/9/2019/10/trilogia-utem-facultad-administracion-economia-vol29-n39-2016-nota-tecnica-1-Gonzalez.pdf" target="_blank" rel="noopener noreferrer") González Tapia, E. (2015). LAS EXTERNALIDADES Y EL TEOREMA DE COASE.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=sCi2H2bKI30" target="_blank" rel="noopener noreferrer") Juan Carlos Aguado Franco. (2022). Externalidades.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Fallos de mercado',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es la característica principal de un mercado de competencia perfecta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Productos diferenciados',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Monopolio de precios',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Existencia de muchos compradores y vendedores',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Limitación en la entrada y salida de empresas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'En un monopolio, ¿qué determina el precio de los productos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El gobierno',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Los consumidores',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La empresa única que controla el mercado',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La competencia',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes es una característica del oligopolio?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Una sola empresa controla el mercado',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Las empresas actúan de manera independiente sin influenciarse entre sí',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Pocas empresas dominan el mercado',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Los productos siempre son homogéneos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'En la competencia monopolística, ¿cómo son los productos ofrecidos por las empresas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Homogéneos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Perfectamente sustitutivos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Diferenciados',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Gratuitos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es el resultado esperado a largo plazo en un mercado de competencia perfecta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Beneficios económicos extraordinarios',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Pérdidas permanentes',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Beneficios económicos nulos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Monopolio de precios',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
