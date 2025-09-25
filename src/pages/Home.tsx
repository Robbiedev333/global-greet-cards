import { CountryCard } from "@/components/CountryCard";
import { countriesData } from "@/data/countries";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-primary-gradient bg-clip-text text-transparent mb-4">
            Explore Countries Around the World
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover fascinating facts, culture, and unique features of countries from every continent
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countriesData.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </div>
      </main>
    </div>
  );
};