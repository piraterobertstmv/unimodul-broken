import React from 'react';
import ModuleUseCard from './ModuleUseCard';

const moduleUses = [
  {
    title: "Coworking",
    description: "Espacios de trabajo modernos y equipados para profesionales",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    title: "Módulos para nómadas digitales",
    description: "Alojamiento y espacio de trabajo para trabajadores remotos",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Sala de juegos",
    description: "Espacio recreativo con diferentes opciones de entretenimiento",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033"
  },
  {
    title: "Zona infantil",
    description: "Área segura y divertida para los más pequeños",
    image: "https://images.unsplash.com/photo-1597430203889-c93a0cd4e27f"
  },
  {
    title: "Mini cine modular",
    description: "Sala de proyección para disfrutar del séptimo arte",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
  },
  {
    title: "Zona de realidad virtual",
    description: "Experiencias inmersivas y simuladores",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac"
  },
  {
    title: "Gimnasio",
    description: "Instalaciones deportivas completas",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
  },
  {
    title: "Spa",
    description: "Zona de relajación y bienestar",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
  },
  {
    title: "Jacuzzi panorámico",
    description: "Relax con vistas espectaculares",
    image: "https://images.unsplash.com/photo-1621275471769-e6aa344546d5"
  },
  {
    title: "Invernadero comunitario",
    description: "Espacio para cultivo y actividades sostenibles",
    image: "https://images.unsplash.com/photo-1584479898061-15742e14f50d"
  },
  {
    title: "Restaurante modular",
    description: "Gastronomía en un entorno único",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  },
  {
    title: "Cocina comunitaria",
    description: "Espacio compartido para preparar alimentos",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba"
  },
  {
    title: "Vestuarios y baños",
    description: "Instalaciones sanitarias modernas",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101"
  },
  {
    title: "Almacén de equipos",
    description: "Almacenamiento seguro para equipamiento",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Espacios multiusos",
    description: "Salas versátiles para eventos y actividades",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
  },
  {
    title: "Tienda autoservicio",
    description: "Comercio 24/7 para todas las necesidades",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a"
  },
  {
    title: "Zona de carga eléctrica",
    description: "Puntos de recarga para vehículos eléctricos",
    image: "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?auto=format&fit=crop&w=800&q=80"
  }
];

const ModuleUsesGrid = () => {
  return (
    <section className="animate-on-scroll">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Múltiples Usos para tus Módulos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moduleUses.map((use, index) => (
          <ModuleUseCard
            key={use.title}
            title={use.title}
            description={use.description}
            image={use.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ModuleUsesGrid;