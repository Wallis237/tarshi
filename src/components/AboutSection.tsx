import AnimationWrapper from "./AnimationWrapper";
import StaggeredAnimationGroup from "./StaggeredAnimationGroup";
import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  const traits = ["Physics Enthusiast", "Chemistry Lover", "Software Aspirant"];

  const interests = [
    { label: "Game Design", icon: "🎮" },
    { label: "Physics Simulations", icon: "🔬" },
    { label: "Full-stack Dev", icon: "◆" },
  ];

  const teamMembers = [
    {
      name: "Ebua Glenn Ndoh",
      role: "Chief Executive Officer",
      image: "/upload/ebua-glenn-ndoh.jpg",
    },
    {
      name: "Tarshi Williams",
      role: "Chief Project Manager",
      image: "/upload/tarshi-williams.jpg",
    },
    {
      name: "Akimbong Chercy",
      role: "Human Resources",
      image: "/upload/akimbong-chercy.jpg",
    },
    {
      name: "Ewe Bryan",
      role: "Head of Engineering",
      image: "/upload/ewe-bryan.jpg",
    },
    {
      name: "Ebua Ford Buo",
      role: "Chief Executive Officer",
      image: "/upload/ebua-ford-buo.jpg",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6">

        {/* Top row: headline + portrait */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <AnimationWrapper animation="fadeUp">
              <span className="availability-chip mb-6">
                Based in Cameroon
              </span>
            </AnimationWrapper>

            <AnimationWrapper animation="fadeUp" delay={150}>
              <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                Driven by <span className="accent-italic">Logic,</span>
                <br />
                Defined by <span className="accent-italic">Creativity.</span>
              </h2>
            </AnimationWrapper>

            <AnimationWrapper animation="fadeUp" delay={300}>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
                Cyrech Tech is a passionate and ambitious creative technology
                brand from Cameroon, focused on software engineering and
                website development. Our journey brings together Information
                Technology, Physics, and Chemistry.
              </p>
            </AnimationWrapper>

            <AnimationWrapper animation="fadeUp" delay={450}>
              <div className="mt-6 flex flex-wrap gap-2">
                {traits.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-2 rounded-full border border-border bg-card font-mono tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </AnimationWrapper>
          </div>

          <AnimationWrapper animation="slideRight" delay={200}>
            <div className="relative rounded-3xl overflow-hidden border border-border aspect-[4/5] max-w-md ml-auto">
              <img
                src="/lovable-uploads/ca5a9825-0c31-454e-953e-a5497d0b78ac.png"
                alt="Cyrech Tech founder"
                className="w-full h-full object-cover grayscale-[30%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </AnimationWrapper>
        </div>

        {/* ========================================================= */}
        {/* Team & Leadership */}
        {/* ========================================================= */}

        <div className="mt-24">

          <AnimationWrapper animation="fadeUp">
            <h3 className="font-display font-bold text-3xl md:text-4xl">
              The Team
              <span className="block w-16 h-1 bg-primary mt-3 rounded-full" />
            </h3>
          </AnimationWrapper>

          <AnimationWrapper animation="fadeUp" delay={150}>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
              Cyrech Tech is driven by a growing team of ambitious individuals
              combining leadership, project management, human resources, and
              engineering to build meaningful technology solutions.
            </p>
          </AnimationWrapper>

          {/* Team Members */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {teamMembers.map((member, index) => (
              <AnimationWrapper
                key={member.name}
                animation="fadeUpScale"
                delay={150 + index * 100}
              >
                <div className="surface-card overflow-hidden h-full group hover:border-primary/40 transition-all duration-300">

                  {/* Member Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">

                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent pointer-events-none" />

                    {/* Role Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border text-[10px] font-mono font-semibold uppercase tracking-widest text-primary">
                        {member.role}
                      </span>
                    </div>

                  </div>

                  {/* Member Information */}
                  <div className="p-6">

                    <h4 className="font-display font-bold text-xl group-hover:text-primary transition-colors">
                      {member.name}
                    </h4>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />

                      <span className="text-sm text-muted-foreground">
                        {member.role}
                      </span>
                    </div>

                  </div>

                </div>
              </AnimationWrapper>
            ))}

          </div>
        </div>

        {/* ========================================================= */}
        {/* IT Journey */}
        {/* ========================================================= */}

        <div className="mt-24">

          <AnimationWrapper animation="fadeUp">
            <h3 className="font-display font-bold text-3xl md:text-4xl">
              The IT Journey
              <span className="block w-16 h-1 bg-primary mt-3 rounded-full" />
            </h3>
          </AnimationWrapper>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">

            {/* Profile */}
            <AnimationWrapper
              animation="fadeUpScale"
              delay={150}
              className="lg:col-span-2"
            >
              <div className="surface-card p-8 h-full">

                <div className="eyebrow">
                  Profile
                </div>

                <h4 className="mt-4 font-display font-bold text-2xl md:text-3xl">
                  Loving, Ambitious, and Constantly Learning.
                </h4>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Dedicated to achieving goals and making an impact in the IT
                  world. I believe the intersection of hard science and
                  software logic is where the future is built.
                </p>

                <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">

                  <ArrowUpRight className="w-4 h-4 text-primary" />

                  <span className="text-xs font-semibold tracking-widest uppercase text-primary font-mono">
                    Continuous Growth Mindset
                  </span>

                </div>

              </div>
            </AnimationWrapper>

            {/* Interests */}
            <AnimationWrapper
              animation="fadeUpScale"
              delay={300}
            >
              <div className="surface-card p-8 h-full">

                <div className="eyebrow">
                  Interests
                </div>

                <ul className="mt-6 space-y-4">

                  {interests.map((i) => (
                    <li
                      key={i.label}
                      className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0"
                    >

                      <span className="font-medium">
                        {i.label}
                      </span>

                      <span className="text-lg">
                        {i.icon}
                      </span>

                    </li>
                  ))}

                </ul>

              </div>
            </AnimationWrapper>

          </div>

          {/* Goals row */}
          <div className="mt-6 grid lg:grid-cols-3 gap-6">

            {/* IT Competitions */}
            <AnimationWrapper
              animation="fadeUpScale"
              delay={150}
            >
              <div className="surface-card overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full relative">

                <img
                  src="/upload/it-competitions.jpg"
                  alt="IT Competitions"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">

                  <div className="font-display font-bold text-xl">
                    IT Competitions
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Solving real-world problems through logic.
                  </div>

                </div>

              </div>
            </AnimationWrapper>

            {/* Short-term Goals */}
            <AnimationWrapper
              animation="fadeUpScale"
              delay={300}
            >
              <div className="surface-card p-8 h-full">

                <div className="eyebrow">
                  Short-term Goals
                </div>

                <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                  Master programming languages like Python, Java, C++, and
                  JavaScript. Build and host functional applications that
                  showcase technical mastery.
                </p>

              </div>
            </AnimationWrapper>

            {/* Long-term Goals */}
            <AnimationWrapper
              animation="fadeUpScale"
              delay={450}
            >
              <div className="surface-card p-8 h-full">

                <div className="eyebrow">
                  Long-term Goals
                </div>

                <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                  Become a professional Software Engineer. Create impactful
                  software and inspire others in Cameroon to embrace ICT
                  innovation.
                </p>

              </div>
            </AnimationWrapper>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
