const About = () => {
  return (
    <section id="about" className="py-20 pastel-pink">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg section-hover">
            <p className="text-lg leading-relaxed text-foreground">
              Hello, my name is Spoorthi Koppula and I am currently a junior studying Computer Engineering at Purdue University with concentrations in Software Engineering and Artificial Intelligence/Machine Learning. I am also pursuing minors in Business Economics and Mathematics, as I'm passionate about exploring both the technical and strategic sides of technology.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-foreground">
              My interests include Software Engineering, AI/ML, Cybersecurity, Data Science, and the business and management aspects of tech. I hope to work at the intersection of innovation and impact, contributing to meaningful, innovative solutions in the future.
            </p>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/50 rounded-2xl">
                <div className="text-2xl font-bold text-primary">3.8+</div>
                <div className="text-sm text-muted-foreground">GPA</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-2xl">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-2xl">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-2xl">
                <div className="text-2xl font-bold text-primary">Dec 2026</div>
                <div className="text-sm text-muted-foreground">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;