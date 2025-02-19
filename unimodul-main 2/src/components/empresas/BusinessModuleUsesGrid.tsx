import React from 'react';
import ModuleUseCard from '../campings/ModuleUseCard';

const BusinessModuleUsesGrid = () => {
  const moduleUses = [
    {
      title: "Oficinas modulares",
      description: "Espacios de trabajo flexibles y adaptables para equipos de cualquier tamaño",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
    },
    {
      title: "Espacios de coworking",
      description: "Ambientes colaborativos para profesionales independientes y startups",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    },
    {
      title: "Salas de reuniones",
      description: "Espacios profesionales para encuentros y presentaciones",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
    },
    {
      title: "Centros de formación",
      description: "Aulas modulares para capacitación y desarrollo profesional",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    },
    {
      title: "Estudio de grabación",
      description: "Espacios acústicamente tratados para producción multimedia",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80",
    },
    {
      title: "Showrooms",
      description: "Espacios de exhibición para productos y servicios",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    },
    {
      title: "Centros de innovación",
      description: "Espacios para prototipado y desarrollo de nuevas ideas",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    },
    {
      title: "Talleres maker",
      description: "Espacios equipados para fabricación y creación",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    },
    {
      title: "Gimnasio corporativo",
      description: "Espacios para el bienestar físico de los empleados",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    },
    {
      title: "Cafeterías modulares",
      description: "Áreas de descanso y alimentación para el personal",
      image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80",
    },
    {
      title: "Zonas chill-out",
      description: "Espacios de relajación para desconectar durante la jornada",
      image: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?auto=format&fit=crop&q=80",
    },
    {
      title: "Estaciones de carga",
      description: "Puntos de recarga para vehículos eléctricos de empresa",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80",
    },
    {
      title: "Almacenamiento",
      description: "Módulos seguros para inventario y documentación",
      image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&q=80",
    },
    {
      title: "Centro logístico",
      description: "Espacios optimizados para distribución y logística",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80",
    },
    {
      title: "Sala de meditación",
      description: "Espacios tranquilos para el bienestar mental",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80",
    },
    {
      title: "Call center",
      description: "Centros de atención al cliente modulares",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80",
    },
    {
      title: "Estudio multimedia",
      description: "Espacios para fotografía y producción de video",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
    },
    {
      title: "Centro médico",
      description: "Consultorios y espacios de atención sanitaria",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    },
    {
      title: "Tienda corporativa",
      description: "Espacios para venta de merchandising empresarial",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80",
    },
    {
      title: "Espacio ferial",
      description: "Módulos para exposiciones y eventos empresariales",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {moduleUses.map((use, index) => (
        <ModuleUseCard
          key={index}
          title={use.title}
          description={use.description}
          image={use.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default BusinessModuleUsesGrid;