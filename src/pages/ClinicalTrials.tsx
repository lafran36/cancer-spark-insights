
import React, { useState } from "react";
import Header from "@/components/Header";
import MainNav from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const ClinicalTrials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPhase, setSelectedPhase] = useState("");
  
  const clinicalTrials = [
    {
      id: "NCT04532294",
      title: "Targeted Therapy for BRCA-Mutated Breast Cancer",
      phase: "Phase 3",
      status: "Recruiting",
      location: "Memorial Sloan Kettering Cancer Center",
      participants: 420,
      type: "Breast"
    },
    {
      id: "NCT05123066",
      title: "PD-1 Inhibitor with Chemotherapy for Advanced NSCLC",
      phase: "Phase 2",
      status: "Active",
      location: "Dana-Farber Cancer Institute",
      participants: 315,
      type: "Lung"
    },
    {
      id: "NCT04682405",
      title: "CAR-T Cell Therapy for Refractory Multiple Myeloma",
      phase: "Phase 2",
      status: "Recruiting",
      location: "MD Anderson Cancer Center",
      participants: 215,
      type: "Blood"
    },
    {
      id: "NCT05098925",
      title: "mRNA Vaccine for Colorectal Cancer Prevention",
      phase: "Phase 1",
      status: "Recruiting",
      location: "Mayo Clinic",
      participants: 80,
      type: "Colorectal"
    },
    {
      id: "NCT05271929",
      title: "PARP Inhibitor Maintenance for Ovarian Cancer",
      phase: "Phase 3",
      status: "Active",
      location: "Massachusetts General Hospital",
      participants: 510,
      type: "Ovarian"
    },
    {
      id: "NCT04731116",
      title: "Personalized Vaccine Therapy for Melanoma",
      phase: "Phase 2",
      status: "Recruiting",
      location: "Stanford Medical Center",
      participants: 175,
      type: "Skin"
    },
    {
      id: "NCT05119530",
      title: "Novel ADC Therapy for Metastatic Prostate Cancer",
      phase: "Phase 1",
      status: "Recruiting",
      location: "Johns Hopkins Medicine",
      participants: 65,
      type: "Prostate"
    },
    {
      id: "NCT04881513",
      title: "Combination Immunotherapy for Hepatocellular Carcinoma",
      phase: "Phase 2",
      status: "Active",
      location: "UCSF Medical Center",
      participants: 245,
      type: "Liver"
    }
  ];
  
  const filteredTrials = clinicalTrials.filter(trial => {
    const matchesSearch = searchQuery === "" || 
      trial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trial.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPhase = selectedPhase === "" || trial.phase === selectedPhase;
    
    return matchesSearch && matchesPhase;
  });

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl animate-fade-in">
      <Header />
      <div className="mt-6">
        <MainNav />
      </div>
      
      <main className="mt-8">
        <section>
          <h2 className="text-xl font-bold mb-4 text-medical-blue">Clinical Trials</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-grow">
              <Input
                placeholder="Search by cancer type or trial name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-48">
              <Select value={selectedPhase} onValueChange={setSelectedPhase}>
                <SelectTrigger>
                  <SelectValue placeholder="All Phases" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Phases</SelectItem>
                  <SelectItem value="Phase 1">Phase 1</SelectItem>
                  <SelectItem value="Phase 2">Phase 2</SelectItem>
                  <SelectItem value="Phase 3">Phase 3</SelectItem>
                  <SelectItem value="Phase 4">Phase 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setSelectedPhase("");
            }}>
              Clear Filters
            </Button>
          </div>
          
          <div className="space-y-4">
            {filteredTrials.map((trial) => (
              <div 
                key={trial.id}
                className="border border-border rounded-lg p-4 bg-white hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-medical-blue">{trial.title}</h3>
                  <Badge
                    variant={trial.status === "Recruiting" ? "default" : "outline"}
                    className={trial.status === "Recruiting" ? "bg-medical-teal text-white" : ""}
                  >
                    {trial.status}
                  </Badge>
                </div>
                
                <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div>
                    <p className="text-xs text-muted-foreground">ID</p>
                    <p className="text-sm">{trial.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phase</p>
                    <p className="text-sm">{trial.phase}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Cancer Type</p>
                    <p className="text-sm">{trial.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Participants</p>
                    <p className="text-sm">{trial.participants}</p>
                  </div>
                </div>
                
                <p className="mt-2 text-sm text-muted-foreground">{trial.location}</p>
              </div>
            ))}
          </div>
          
          {filteredTrials.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">No clinical trials match your search criteria.</p>
              <Button 
                variant="link" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPhase("");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </section>
      </main>
      
      <footer className="mt-12 border-t border-border pt-6 pb-12 text-center text-sm text-muted-foreground">
        <p>Cancer Spark Insights • Data updated April 2025</p>
        <p className="mt-2">© 2025 Cancer Research Collaborative</p>
      </footer>
    </div>
  );
};

export default ClinicalTrials;
