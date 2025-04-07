
import React from "react";
import Header from "@/components/Header";
import MainNav from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResearchAreas = () => {
  const researchAreas = [
    {
      title: "Immunotherapy",
      description: "Research focused on harnessing the body's immune system to target and destroy cancer cells.",
      projects: 412,
      institutions: 78
    },
    {
      title: "Precision Medicine",
      description: "Developing treatments tailored to the genetic profile of each patient's cancer.",
      projects: 327,
      institutions: 64
    },
    {
      title: "Early Detection",
      description: "Creating new technologies and methods to detect cancer at earlier, more treatable stages.",
      projects: 285,
      institutions: 55
    },
    {
      title: "Drug Discovery",
      description: "Identifying and developing new compounds that can target cancer cells more effectively.",
      projects: 392,
      institutions: 83
    },
    {
      title: "Cancer Genomics",
      description: "Studying the complete set of genes and mutations involved in cancer development.",
      projects: 278,
      institutions: 61
    },
    {
      title: "Radiation Oncology",
      description: "Advancing radiation techniques to improve treatment effectiveness and reduce side effects.",
      projects: 203,
      institutions: 47
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl animate-fade-in">
      <Header />
      <div className="mt-6">
        <MainNav />
      </div>
      
      <main className="mt-8">
        <section>
          <h2 className="text-xl font-bold mb-4 text-medical-blue">Research Areas</h2>
          <p className="text-muted-foreground mb-6">Explore the key focus areas driving cancer research forward</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="data-card">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-blue">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{area.description}</p>
                  <div className="flex justify-between text-sm">
                    <span>
                      <span className="font-medium">{area.projects}</span> active projects
                    </span>
                    <span>
                      <span className="font-medium">{area.institutions}</span> institutions
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="mt-12 border-t border-border pt-6 pb-12 text-center text-sm text-muted-foreground">
        <p>Cancer Spark Insights • Data updated April 2025</p>
        <p className="mt-2">© 2025 Cancer Research Collaborative</p>
      </footer>
    </div>
  );
};

export default ResearchAreas;
