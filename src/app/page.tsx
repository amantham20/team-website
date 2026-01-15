import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Link from "next/link";

export default function Home() {
  const stats = [
    { label: "Years Active", value: "10+" },
    { label: "Robots Built", value: "12" },
    { label: "Awards Won", value: "24" },
    { label: "Sponsors", value: "15" },
  ];

  const updates = [
    { title: "Regional Competition Update", date: "Jan 12, 2026", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { title: "New Season Kickoff", date: "Jan 4, 2026", excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
    { title: "Sponsorship Spotlight", date: "Dec 20, 2025", excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section className="min-h-[80vh] flex items-center pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.2em]">
              FRC Team 5509
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-tight text-white tracking-tighter">
              Building Robots <br/><span className="text-blue-600">Like a boss</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/about"><Button size="lg">Meet the Team</Button></Link>
              <Link href="/robots"><Button variant="outline" size="lg">See Our Robots</Button></Link>
              <Link href="/sponsors"><Button variant="secondary" size="lg">Become a Sponsor</Button></Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full -z-10 animate-pulse" />
            <ImagePlaceholder className="aspect-[4/3] rounded-2xl shadow-2xl border-white/10" text="Robot Hero Image" />
          </div>
        </div>
      </Section>

      {/* Stats Row */}
      <div className="bg-[#0a0c10] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-500 transition-colors">{stat.value}</div>
                <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <Section id="featured">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">Excellence in Motion</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Our Robots" subtitle="Precision Engineering">
            <p className="text-gray-500 text-sm mb-6">Explore our history of world-class competitive robotics and engineering marvels.</p>
            <Link href="/robots" className="text-blue-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              View Collection &rarr;
            </Link>
          </Card>
          <Card title="Resources" subtitle="Knowledge Sharing">
            <p className="text-gray-500 text-sm mb-6">We believe in empowering the next generation of engineers with open-source learning.</p>
            <Link href="/resources" className="text-blue-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              Learn More &rarr;
            </Link>
          </Card>
          <Card title="Sponsors" subtitle="Our Partners">
            <p className="text-gray-500 text-sm mb-6">Supporting our mission to inspire STEM education in our community.</p>
            <Link href="/sponsors" className="text-blue-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              Our Partners &rarr;
            </Link>
          </Card>
        </div>
      </Section>

      {/* Latest Updates */}
      <Section dark>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black mb-2 uppercase">Latest Updates</h2>
            <div className="w-16 h-1 bg-blue-600" />
          </div>
          <Link href="#" className="hidden md:block text-gray-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
            View All News
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update, idx) => (
            <div key={idx} className="group cursor-pointer">
              <ImagePlaceholder className="mb-6 rounded-xl group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">{update.date}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors uppercase">{update.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{update.excerpt}</p>
              <div className="h-px w-full bg-white/5 group-hover:bg-blue-600/50 transition-colors" />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
