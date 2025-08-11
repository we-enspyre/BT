const About = () => {
  const basePath = import.meta.env.BASE_URL;

  const team = [
    {
      name: "Marcus Jensen",
      title: "Senior Barber",
      image: `${basePath}images/marcus.jpg`, // henter fra public/images/
    },
    {
      name: "Oliver Nielsen",
      title: "Senior Barber",
      image: `${basePath}images/oliver.jpg`, // henter fra public/images/
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Overskrift */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Om os
          </h2>
          <p className="text-lg text-gray-500">Mød vores dedikerede barbers</p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Label med navn */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-4 py-3">
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p className="text-sm text-gray-200">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tekst under */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Hos FineCut kombinerer vi klassisk håndværk med moderne stil. Vi skaber en oplevelse, hvor præcision møder personlighed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
