import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      name: "Herreklip",
      price: "170 kr.",
    },
    {
      name: "Skin Fade", 
      price: "200 kr.",
    },
    {
      name: "Skæg",
      price: "100 kr.",
    },
    {
      name: "Klip & Skæg",
      price: "260 kr.",
    },
    {
      name: "Børneklip",
      price: "120 kr.",
    },
    {
      name: "Pensionistklip",
      price: "120 kr.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Behandlinger
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vi tilbyder skræddersyede behandlinger, der kombinerer klassisk håndværk med moderne teknikker
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card group hover-lift text-center"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <span className="text-xl font-bold text-primary">
                  {service.price}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;