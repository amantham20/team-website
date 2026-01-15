import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Link from "next/link";
import { robots } from "@/data/robots";

export default function Robots() {
  return (
    <div className="pb-20">
      <Section className="pt-20">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Robots Through <span className="text-blue-600">The Years</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Our history of engineering excellence across generations of competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {robots.map((robot) => (
            <Link key={robot.slug} href={`/robots/${robot.slug}`}>
              <Card className="h-full flex flex-col group overflow-hidden p-0">
                <ImagePlaceholder className="rounded-none border-0 aspect-square group-hover:scale-105 transition-transform duration-500" text={robot.name} />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-blue-500 font-black text-xs uppercase tracking-widest mb-1">{robot.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase">{robot.name}</h3>
                  <div className="text-gray-500 text-xs font-bold uppercase mb-4 tracking-tighter">Game: {robot.game}</div>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow">{robot.description}</p>
                  <div className="text-blue-500 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">View Details &rarr;</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
