import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const blogPosts = [
  {
    title: "Transformando la construcción: El futuro es modular",
    description: "Descubre cómo la construcción modular está revolucionando el sector con innovación, eficiencia y sostenibilidad",
    date: "01 de Septiembre, 2024",
    slug: "futuro-modular",
    image: "/lovable-uploads/efde0cb8-b2a6-4047-b819-8a933282ed4d.png"
  },
  {
    title: "Cómo las casas modulares ahorran energía, tiempo y costos",
    description: "Descubre las ventajas económicas y ambientales de las construcciones modulares modernas",
    date: "01 de Noviembre, 2024",
    slug: "ahorro-casas-modulares",
    image: "/lovable-uploads/56aaf1e1-aab8-4e48-abf7-dbcbc5540ea9.png"
  },
  {
    title: "El Auge del Glamping: Una Inversión rentable",
    description: "Análisis del creciente mercado del turismo de lujo en la naturaleza",
    date: "01 de Enero, 2025",
    slug: "glamping-inversion-rentable",
    image: "/lovable-uploads/50a2488b-e218-401a-8c2f-2b38adad8368.png"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog | Unimodul</title>
        <meta name="description" content="Explora nuestro blog sobre construcción modular, sostenibilidad y tendencias en viviendas. Artículos sobre innovación en construcción y diseño modular." />
        <meta property="og:title" content="Blog | Unimodul" />
        <meta property="og:description" content="Explora nuestro blog sobre construcción modular, sostenibilidad y tendencias en viviendas." />
        <meta property="og:image" content="/lovable-uploads/6acc550c-39ec-4392-85a1-79d319aeeb81.png" />
        <link rel="icon" type="image/x-icon" href="/lovable-uploads/6acc550c-39ec-4392-85a1-79d319aeeb81.png" />
      </Helmet>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Blog Unimodul</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{post.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
