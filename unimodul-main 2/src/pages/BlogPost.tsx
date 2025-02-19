import { Navbar } from "@/components/Navbar";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const blogPosts = {
  "futuro-modular": {
    title: "Transformando la construcción: El futuro es modular",
    date: "01 de Septiembre, 2024",
    content: `
      El sector de la construcción está evolucionando a pasos agigantados. Las técnicas tradicionales, costosas y a menudo poco sostenibles, están dando paso a enfoques más modernos que combinan innovación, eficiencia y responsabilidad ambiental. En este nuevo panorama, la construcción modular se posiciona como una alternativa revolucionaria, marcando un antes y un después en la manera de concebir los espacios habitables.

      ## ¿Qué hace única a la construcción modular?

      La construcción modular no es solo una mejora; es un cambio de paradigma. Basada en la fabricación de módulos estandarizados que se ensamblan para formar espacios personalizados, esta técnica permite crear desde viviendas asequibles hasta edificios comerciales, cumpliendo con altos estándares de diseño y funcionalidad.

      Los materiales más comunes incluyen hormigón, madera y acero, aunque también se pueden emplear piedra o pizarra. Sin embargo, la clave está en el proceso: al fabricar los módulos en un entorno controlado y ensamblarlos en el sitio, se reducen tanto los tiempos como los costos, generando un impacto ambiental mínimo.

      ## Ventajas que marcan la diferencia

      La construcción modular destaca por ofrecer beneficios que responden directamente a las necesidades actuales del mercado. Entre los más relevantes, encontramos:

      ### Rapidez y cumplimiento de plazos
      Con la construcción modular, los tiempos de ejecución pueden reducirse hasta un 50% en comparación con las técnicas tradicionales.
      
      ### Costes altamente competitivos
      El precio medio de una casa modular oscila entre 900 y 1.000 euros por metro cuadrado, mientras que las construcciones tradicionales suelen situarse entre 1.300 y 1.600 euros por metro cuadrado.

      ### Sostenibilidad en cada etapa del proceso
      La construcción modular está alineada con los principios de sostenibilidad. Utiliza materiales reciclables y genera menos residuos que las técnicas tradicionales.

      ### Personalización al alcance de todos
      Cada proyecto modular se adapta a las necesidades específicas de sus futuros ocupantes.

      ### Flexibilidad y escalabilidad
      Una de las grandes ventajas de la construcción modular es su capacidad para crecer con el tiempo.

      ## Nuestro Servicio "Llave en Mano"

      En Unimodul, hacemos que el proceso sea tan sencillo como eficaz con nuestro servicio integral "llave en mano". Desde la primera idea hasta la entrega final, nos encargamos de todo para que tú solo te ocupes de disfrutar de los resultados.

      ### ¿Qué incluye nuestro servicio "llave en mano"?

      - Diseño personalizado
      - Gestión de licencias
      - Fabricación modular
      - Preparación del terreno
      - Transporte e instalación
      - Revisión y entrega final

      En Unimodul, lideramos esta revolución. Nuestras soluciones modulares combinan diseño, calidad y sostenibilidad a precios competitivos, permitiéndote hacer realidad tus proyectos sin comprometer ni el medio ambiente ni tu presupuesto.

      Con precios desde 900 €/m², el futuro de la construcción es modular. 

      🌿 Contáctanos y descubre cómo transformar tu idea en una realidad sostenible, eficiente y accesible.
    `,
    images: [
      "/lovable-uploads/efde0cb8-b2a6-4047-b819-8a933282ed4d.png",
      "/lovable-uploads/dba6d3d0-3e11-40fb-a2ea-02506132f53e.png",
      "/lovable-uploads/b6219d96-04e7-4b34-bda2-a9a2a18471e1.png"
    ]
  },
  "ahorro-casas-modulares": {
    title: "Cómo las casas modulares ahorran energía, tiempo y costos",
    date: "01 de Noviembre, 2024",
    content: `
      Las casas modulares representan una revolución en la construcción sostenible y eficiente. En este artículo, exploraremos en detalle cómo estas innovadoras estructuras no solo ahorran energía a través de su diseño optimizado y materiales de alta eficiencia, sino también cómo reducen significativamente los tiempos de construcción y los costos asociados.

      ## Eficiencia Energética Superior

      ### 1. Aislamiento Térmico Avanzado
      - Paredes con aislamiento multicapa
      - Ventanas de doble o triple acristalamiento
      - Sellado hermético contra infiltraciones de aire
      - Puentes térmicos minimizados

      ### 2. Sistemas de Climatización Inteligentes
      - Bombas de calor aerotérmicas
      - Sistemas de ventilación con recuperación de calor
      - Termostatos inteligentes zonificados
      - Control domótico del consumo energético

      ### 3. Integración de Energías Renovables
      - Paneles solares fotovoltaicos
      - Colectores solares térmicos
      - Sistemas de almacenamiento de energía
      - Gestión inteligente de la demanda

      ## Optimización del Tiempo de Construcción

      ### 1. Fabricación Paralela
      - Construcción simultánea de módulos
      - Preparación del terreno en paralelo
      - Reducción de tiempos muertos
      - Planificación optimizada

      ### 2. Proceso Industrializado
      - Control de calidad exhaustivo
      - Estandarización de procesos
      - Mano de obra especializada
      - Menor dependencia climática

      ### 3. Instalación Eficiente
      - Montaje rápido y preciso
      - Conexiones pre-diseñadas
      - Acabados incluidos de fábrica
      - Pruebas de calidad in situ

      ## Reducción Significativa de Costos

      ### 1. Optimización de Materiales
      - Compras a escala
      - Menor desperdicio
      - Reutilización de recursos
      - Control de inventario eficiente

      ### 2. Eficiencia Laboral
      - Reducción de horas de trabajo
      - Especialización del personal
      - Menor riesgo de accidentes
      - Productividad aumentada

      ### 3. Costos Operativos
      - Menor consumo energético
      - Mantenimiento reducido
      - Durabilidad superior
      - Valor de reventa optimizado

      ## Conclusión

      Las casas modulares representan el futuro de la construcción sostenible, ofreciendo una solución integral que combina eficiencia energética, rapidez de construcción y ahorro económico. En Unimodul, nos comprometemos a liderar esta transformación, proporcionando soluciones innovadoras que benefician tanto a nuestros clientes como al medio ambiente.

      ¿Listo para dar el paso hacia una vivienda más eficiente y sostenible? Contáctanos hoy mismo y descubre cómo podemos hacer realidad tu proyecto de manera inteligente y responsable.
    `,
    images: [
      "/lovable-uploads/56aaf1e1-aab8-4e48-abf7-dbcbc5540ea9.png",
      "/lovable-uploads/64e9c69e-885f-4b6e-ab3e-60d46c20c08a.png",
      "/lovable-uploads/d820025f-c37b-40ec-9001-dd7f31cd71c8.png"
    ]
  },
  "glamping-inversion-rentable": {
    title: "El Auge del Glamping: Una Inversión rentable",
    date: "01 de Enero, 2025",
    content: `
      El glamping, fusión perfecta entre glamour y camping, se ha convertido en una de las tendencias más prometedoras en el sector turístico. Este análisis exhaustivo explora por qué invertir en instalaciones de glamping representa una oportunidad de negocio excepcional en el mercado actual.

      ## Tendencias del Mercado Turístico

      ### 1. Evolución de las Preferencias del Viajero
      - Búsqueda de experiencias únicas
      - Conexión con la naturaleza
      - Comodidades de lujo
      - Sostenibilidad como prioridad

      ### 2. Crecimiento del Mercado
      - Aumento anual del 12.5% en demanda
      - Expansión global del concepto
      - Diversificación de ofertas
      - Mayor gasto promedio por estancia

      ### 3. Perfil del Cliente
      - Millennials y Generación Z
      - Viajeros de alto poder adquisitivo
      - Amantes de la naturaleza
      - Buscadores de experiencias exclusivas

      ## Ventajas de la Inversión en Glamping

      ### 1. Costos de Implementación
      - Inversión inicial moderada
      - Rápido retorno de inversión
      - Costos operativos reducidos
      - Flexibilidad en la expansión

      ### 2. Diferenciación en el Mercado
      - Propuesta única de valor
      - Menor competencia directa
      - Posicionamiento premium
      - Fidelización del cliente

      ### 3. Sostenibilidad del Negocio
      - Impacto ambiental reducido
      - Integración con el entorno
      - Uso eficiente de recursos
      - Atractivo para el turismo consciente

      ## Análisis Financiero

      ### 1. Estructura de Costos
      - Inversión inicial: 50.000€ - 150.000€
      - ROI esperado: 25-35% anual
      - Margen operativo: 40-60%
      - Punto de equilibrio: 12-18 meses

      ### 2. Fuentes de Ingresos
      - Alojamiento premium
      - Servicios adicionales
      - Experiencias personalizadas
      - Eventos especiales

      ### 3. Optimización de Recursos
      - Gestión de ocupación
      - Precios dinámicos
      - Eficiencia operativa
      - Control de costos

      ## Conclusión y Próximos Pasos

      El glamping representa una oportunidad de inversión excepcional en el sector turístico actual. Con una planificación adecuada, un enfoque en la calidad y la sostenibilidad, y una gestión profesional, puede generar retornos significativos mientras contribuye al desarrollo del turismo sostenible.

      En Unimodul, ofrecemos soluciones modulares especialmente diseñadas para proyectos de glamping, combinando lujo, sostenibilidad y rentabilidad. Contacta con nuestro equipo de expertos para explorar cómo podemos ayudarte a hacer realidad tu proyecto de glamping.
    `,
    images: [
      "/lovable-uploads/50a2488b-e218-401a-8c2f-2b38adad8368.png",
      "/lovable-uploads/485dd266-35ad-4c8e-b1cb-d9e30d7b867a.png",
      "/lovable-uploads/6acc550c-39ec-4392-85a1-79d319aeeb81.png"
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-2xl font-bold">Post no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/90 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Blog
          </Link>
          
          <div className="grid grid-cols-1 gap-8 mb-8">
            {post.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${post.title} - Imagen ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-8">{post.date}</p>
          
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return <h2 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('###')) {
                return <h3 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="mb-2">{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;