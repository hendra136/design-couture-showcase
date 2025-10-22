const ClientsSection = () => {
  const clients = [
    "Brand Fashion Premium",
    "Retail Corporation",
    "Luxury Boutique",
    "Sportswear International",
    "Designer Collective",
  ];

  return (
    <section className="py-20 bg-card border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Dipercaya Oleh Brand Terkemuka
          </h2>
          <p className="text-muted-foreground">Kolaborasi dengan berbagai brand fashion ternama</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-lg font-body text-foreground/80 text-center">{client}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-background border border-border rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <svg
                className="w-8 h-8 text-primary flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div>
                <p className="text-foreground/90 italic mb-4 leading-relaxed">
                  "Kemampuan teknis dan perhatian terhadap detail dalam setiap desain sangat mengesankan. 
                  Kolaborasi yang profesional dengan hasil yang selalu melampaui ekspektasi."
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Maria Anderson</span>
                  <br />
                  Creative Director, Luxury Fashion House
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
