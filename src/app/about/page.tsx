import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Card from "@/components/ui/Card";
import { members, mentors } from "@/data/team";

export default function About() {
  const values = [
    { title: "Innovation", desc: "Pushing the boundaries of what's possible in robotics." },
    { title: "Gracious Professionalism", desc: "Competing fiercely while treating everyone with respect." },
    { title: "Community", desc: "Inspiring the next generation through STEM outreach." },
    { title: "Excellence", desc: "Striving for quality in everything we build and do." },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <ImagePlaceholder className="w-full h-full rounded-none opacity-50" text="Team Photo Banner" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] to-transparent" />
        <div className="absolute bottom-12 left-6 lg:left-12">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Who We Are</h1>
        </div>
      </div>

      {/* Mission */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-widest text-blue-500">Our Mission</h2>
          <p className="text-xl text-gray-400 leading-relaxed italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <Card key={v.title} title={v.title}>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Structure */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-black mb-12 uppercase">The Students</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {members.map((m) => (
                <div key={m.name} className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="font-bold text-gray-200">{m.name}</span>
                  <span className="text-xs uppercase tracking-widest text-blue-500 font-black">{m.role}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-12 uppercase">The Mentors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {mentors.map((m) => (
                <div key={m.name} className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="font-bold text-gray-200">{m.name}</span>
                  <span className="text-xs uppercase tracking-widest text-blue-500 font-black">{m.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
