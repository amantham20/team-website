import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { robots } from "@/data/robots";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return robots.map((robot) => ({
    slug: robot.slug,
  }));
}

export default async function RobotDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const robot = robots.find((r) => r.slug === slug);

  if (!robot) {
    notFound();
  }

  return (
    <div className="pb-20">
      <Section className="pt-20">
        <Link href="/robots" className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-12 inline-block hover:-translate-x-2 transition-transform">
          &larr; Back to Robots
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-blue-500 font-black text-xl uppercase tracking-widest mb-2">{robot.year}</div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">{robot.name}</h1>
            <div className="flex gap-3 mb-8">
              <Badge variant="primary">{robot.game}</Badge>
              {robot.awards.map(award => (
                <Badge key={award} variant="success">{award}</Badge>
              ))}
            </div>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold uppercase mb-4 text-white">Overview</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{robot.description}</p>
              
              <h2 className="text-2xl font-bold uppercase mb-4 text-white">Design Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                {robot.highlights.map(h => (
                  <li key={h} className="bg-white/5 p-4 border border-white/5 rounded-lg text-gray-300 font-medium">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <ImagePlaceholder className="aspect-video w-full rounded-2xl shadow-2xl border-white/10" text={`${robot.name} Main View`} />
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder className="aspect-video rounded-xl" text="Action Shot 1" />
              <ImagePlaceholder className="aspect-video rounded-xl" text="Action Shot 2" />
            </div>
            
            <Card title="Match Results">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Regional Rank</span>
                  <span className="font-bold text-white">#4</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Win/Loss</span>
                  <span className="font-bold text-white">12 - 4 - 0</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">OPR</span>
                  <span className="font-bold text-white">45.2</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section dark>
        <h2 className="text-3xl font-black mb-12 uppercase text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <ImagePlaceholder key={i} className="rounded-xl" text={`Gallery Image ${i}`} />
          ))}
        </div>
      </Section>
    </div>
  );
}
