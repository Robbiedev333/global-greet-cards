import { CountryData } from "@/data/countries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CountryCardProps {
  country: CountryData;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-primary-gradient"></span>
          {country.country}
        </CardTitle>
        <p className="text-sm text-muted-foreground uppercase tracking-wide">
          {country.continent}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="font-semibold text-foreground mb-2">
            {country.question}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {country.answer}
          </p>
        </div>
        <div className="p-3 rounded-lg border-l-4 border-accent bg-fun-fact-bg">
          <p className="text-sm font-medium text-fun-fact mb-1">
            💡 Fun Fact
          </p>
          <p className="text-sm text-fun-fact italic">
            {country.fun_fact}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};