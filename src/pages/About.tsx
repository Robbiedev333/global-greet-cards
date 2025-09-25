import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-primary-gradient bg-clip-text text-transparent mb-4">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Get to know Robbie, the developer behind Country Explorer
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center">
                    <span className="text-white text-xl">👨‍💻</span>
                  </div>
                  Hi, I'm Robbie!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate tech enthusiast with a deep love for coding and web development. 
                  My journey in software engineering has taken me through various technologies and 
                  frameworks, always with the goal of creating beautiful, functional applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This Country Explorer project combines my technical skills with my curiosity 
                  about different cultures and places around the world. I believe technology 
                  should bring people together and help us learn about our diverse planet.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-accent"></span>
                  My Hobbies & Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎬</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Movies</h3>
                      <p className="text-sm text-muted-foreground">
                        I'm a cinephile who enjoys everything from indie films to blockbusters, 
                        always appreciating the storytelling and technical craftsmanship.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏊‍♂️</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Swimming</h3>
                      <p className="text-sm text-muted-foreground">
                        Swimming helps me stay fit and provides a peaceful way to clear my mind 
                        after long coding sessions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌿</span>
                    <div>
                      <h3 className="font-semibold text-foreground">Nature Walks</h3>
                      <p className="text-sm text-muted-foreground">
                        There's nothing like a walk in nature to spark creativity and provide 
                        inspiration for new projects and ideas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "JavaScript", "TypeScript", "React", "Node.js",
                  "Python", "CSS/Tailwind", "Git", "Web APIs"
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-center text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};