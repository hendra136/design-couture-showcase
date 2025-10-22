import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PortfolioDetail = () => {
  const { slug } = useParams();

  // Sample project data
  const project = {
    title: "Executive Menswear Line",
    client: "Premium Fashion Brand",
    year: "2024",
    role: "Lead Designer",
    category: "Menswear Formal",
    challenge: "Creating a versatile executive wardrobe that balances tradition with contemporary aesthetics",
    
    brief: "Klien membutuhkan koleksi menswear formal yang dapat memenuhi kebutuhan eksekutif modern—profesional untuk lingkungan kantor, namun cukup versatile untuk acara semi-formal. Fokus utama adalah pada kualitas bahan, fit yang sempurna, dan detail yang mencerminkan status.",
    
    process: "Proses dimulai dengan riset mendalam terhadap target market dan analisis kompetitor. Kami mengembangkan moodboard yang menggabungkan klasik tailoring dengan sentuhan modern. Pemilihan bahan dilakukan secara teliti, fokus pada wool berkualitas tinggi dan cotton premium dengan karakteristik breathable namun tetap terstruktur.",
    
    solution: "Solusi teknis meliputi pengembangan pattern baru dengan emphasis pada shoulder construction yang natural dan waist suppression yang subtle. Kami mengimplementasikan teknik canvas construction untuk jacket, memastikan drape yang sempurna dan durabilitas jangka panjang. Detail seperti functional buttonholes dan hand-stitched lapels menambah nilai craftsmanship.",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Portfolio
            </Link>
          </Button>

          {/* Project Title */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-6">
              {project.title}
            </h1>
            <div className="w-20 h-1 bg-primary mb-8"></div>
          </div>

          {/* Project Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-2">Klien</p>
              <p className="text-lg font-body font-semibold text-foreground">{project.client}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-2">Tahun</p>
              <p className="text-lg font-body font-semibold text-foreground">{project.year}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-2">Peran</p>
              <p className="text-lg font-body font-semibold text-foreground">{project.role}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-2">Kategori</p>
              <p className="text-lg font-body font-semibold text-foreground">{project.category}</p>
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-12">
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">Tantangan Utama</p>
              <p className="text-foreground/90">{project.challenge}</p>
            </div>
          </div>

          {/* Main Image Placeholder */}
          <div className="mb-16 rounded-lg overflow-hidden">
            <div className="w-full h-[600px] bg-gradient-to-br from-muted/30 via-card to-primary/10"></div>
          </div>

          {/* Detailed Breakdown */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Brief */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Tujuan Desain (Brief)
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.brief}
              </p>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Proses Pengembangan
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.process}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Solusi Teknis
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              Galeri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-lg overflow-hidden aspect-[4/5]">
                  <div className="w-full h-full bg-gradient-to-br from-muted/30 via-card to-primary/10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-card border border-border rounded-lg p-12">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              Tertarik Berkolaborasi?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Mari diskusikan proyek desain apparel Anda selanjutnya
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Hubungi Saya</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PortfolioDetail;
