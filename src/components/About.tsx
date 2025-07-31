import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Clock, Phone } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Marcus Jensen",
      title: "Master Barber & Ejer",
      description: "15 års erfaring med klassisk barbering og moderne styling",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Oliver Nielsen",
      title: "Senior Stylist",
      description: "Specialist i skin fades og moderne herreklip",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Om os
          </h2>
          
          {/* Team */}
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
            Mød vores to barbers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/20 mx-auto mb-4"
                  />
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">
                    {member.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Salon Info */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Hos Finecut kombinerer vi klassisk håndværk med moderne stil. 
              Vi skaber en oplevelse, hvor præcision møder personlighed.
            </p>      
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;