import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const featuredProjects = [
  {
    id: 1,
    title: "Executive Menswear Line",
    category: "Menswear",
    year: "2024",
    image: "/img/project1.jpg",
    slug: "executive-menswear",
  },
  {
    id: 2,
    title: "Urban Sportswear Collection",
    category: "Sportswear",
    year: "2024",
    image: "/img/project2.jpg",
    slug: "urban-sportswear",
  },
  {
    id: 3,
    title: "Contemporary Womenswear",
    category: "Womenswear",
    year: "2023",
    image: "/img/project3.jpg",
    slug: "contemporary-womenswear",
  },
];

const FeaturedWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Karya Terpilih
          </h2>
          <p className="text-lg text-muted-foreground">Eksplorasi proyek-proyek terbaik saya</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.slug}`}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 h-[400px] relative">
                {/* Image background */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm text-primary font-body mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-primary hover:text-primary/80 font-body transition-colors"
          >
            Lihat Semua Karya
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
