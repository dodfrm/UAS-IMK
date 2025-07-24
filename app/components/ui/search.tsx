import { useState, useEffect } from "react";
import { Input } from "~/components/ui/input";
import { Card, CardContent } from "~/components/ui/card";
import { Link } from "react-router";
import { fakultasData } from "~/routes/data/jurusan";
import { psdkuData } from "~/routes/data/psdku";
import { academicEvents } from "~/routes/data/event";
import { SearchIcon } from "lucide-react";

export function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (query.length > 2) {
      const allResults: any[] = [];

      // Search fakultas
      fakultasData.forEach((fakultas) => {
        fakultas.programs.forEach((program) => {
          if (program.title.toLowerCase().includes(query.toLowerCase())) {
            allResults.push({
              type: "Fakultas",
              title: `${program.title} (${program.level})`,
              link: `/fakultas/${fakultas.slug}/${program.slug}`,
            });
          }
        });
      });

      // Search PSDKU
      psdkuData.forEach((psdku) => {
        psdku.programs.forEach((program) => {
          if (program.title.toLowerCase().includes(query.toLowerCase())) {
            allResults.push({
              type: "PSDKU",
              title: `${program.title} (${program.level}) - ${psdku.name}`,
              link: `/psdku/${psdku.slug}/${program.slug}`,
            });
          }
        });
      });

      // Search Events
      academicEvents.forEach((event) => {
        if (event.title.toLowerCase().includes(query.toLowerCase())) {
          allResults.push({
            type: "Acara",
            title: event.title,
            link: "/kalender-akademik",
          });
        }
      });

      setResults(allResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="relative">
      <div className="relative md:w-36">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Cari program studi, acara..."
          className="pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {results.length > 0 && (
        <Card className="absolute top-full mt-2 w-96 z-50">
          <CardContent className="p-2">
            <ul>
              {results.map((result, index) => (
                <li key={index}>
                  <Link
                    to={result.link}
                    className="block p-2 hover:bg-accent rounded-md"
                    onClick={() => {
                      setQuery("");
                      setResults([]);
                    }}
                  >
                    <p className="font-semibold">{result.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {result.type}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
