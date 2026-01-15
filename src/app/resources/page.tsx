import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { resourceCategories } from "@/data/resources";

export default function Resources() {
  return (
    <div className="pb-20">
      <Section className="pt-20">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Learning <span className="text-blue-600">Hub</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Everything you need to master the art of competitive robotics.
          </p>
        </div>

        {/* Callout */}
        <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-8 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-black uppercase mb-2">New Students Start Here</h2>
            <p className="text-blue-200/70 leading-relaxed">
              New to the team or FRC? We've compiled a specialized curriculum to get you up to speed in weeks, not months.
            </p>
          </div>
          <Button size="lg">Get Started Plan</Button>
        </div>

        <div className="space-y-24">
          {resourceCategories.map((cat) => (
            <div key={cat.name} id={cat.name.toLowerCase().replace(/\s/g, '-')}>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest">{cat.name}</h2>
                <div className="h-px flex-grow bg-white/5" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.resources.map((res) => (
                  <Card key={res.title} className="flex flex-col">
                    <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">{res.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{res.description}</p>
                    <a href={res.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">Download / Link</Button>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
