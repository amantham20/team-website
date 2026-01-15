import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { sponsors, tierBenefits } from "@/data/sponsors";

export default function Sponsors() {
  const platinumSponsors = sponsors.filter(s => s.tier === "Platinum");
  const goldSponsors = sponsors.filter(s => s.tier === "Gold");
  const silverSponsors = sponsors.filter(s => s.tier === "Silver");
  const bronzeSponsors = sponsors.filter(s => s.tier === "Bronze");

  return (
    <div className="pb-20">
      {/* Sponsor Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <ImagePlaceholder className="w-full h-full rounded-none opacity-30" text="Sponsor Banner Image" />
        <div className="absolute inset-0 bg-[#0f1117]/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">Powered By <span className="text-blue-600">Partners</span></h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              We are grateful for the support of our local businesses and international corporations who believe in the future of STEM.
            </p>
          </div>
        </div>
      </div>

      {/* Sponsor Grid */}
      <Section className="space-y-32">
        {/* Platinum */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-blue-500 mb-2">Platinum Level</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platinumSponsors.map(s => (
              <div key={s.name} className="bg-white/5 border border-white/10 rounded-2xl aspect-[3/1] flex items-center justify-center p-8 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl font-black text-gray-500 uppercase tracking-widest">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-xl font-black uppercase tracking-[0.3em] text-yellow-500 mb-2">Gold Level</h2>
            <div className="w-16 h-0.5 bg-yellow-500/50 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {goldSponsors.map(s => (
              <div key={s.name} className="bg-white/5 border border-white/5 rounded-xl aspect-[2/1] flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all">
                <span className="text-lg font-bold text-gray-600 uppercase text-center">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver & Bronze */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-lg font-black uppercase tracking-[0.3em] text-gray-400 mb-8 border-b border-white/5 pb-4">Silver Partners</h2>
            <div className="grid grid-cols-2 gap-4">
              {silverSponsors.map(s => (
                <div key={s.name} className="text-gray-500 font-bold py-2 px-4 bg-white/[0.02] rounded border border-white/5">{s.name}</div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-black uppercase tracking-[0.3em] text-gray-600 mb-8 border-b border-white/5 pb-4">Bronze Level</h2>
            <div className="grid grid-cols-2 gap-4">
              {bronzeSponsors.map(s => (
                <div key={s.name} className="text-gray-600 font-medium py-2 px-4">{s.name}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-12 uppercase text-center">Sponsorship Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(tierBenefits).map(([tier, text]) => (
              <Card key={tier} title={`${tier} Package`} className="border-l-4 border-l-blue-600">
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Ready to Support <span className="text-blue-600">Innovation?</span></h2>
          <p className="text-gray-400 text-lg">
            Download our sponsorship packet or reach out to our team to discuss how we can partner together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Download packet (PDF)</Button>
            <Button variant="outline" size="lg">Contact Business Team</Button>
          </div>
          <p className="text-gray-600 text-sm italic">
            Questions? Email us at <a href="mailto:sponsors@team5509.com" className="text-blue-500 hover:underline">sponsors@team5509.com</a>
          </p>
        </div>
      </Section>
    </div>
  );
}
