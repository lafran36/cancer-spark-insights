
import React from "react";
import Header from "@/components/Header";
import MainNav from "@/components/MainNav";
import KeyStatistics from "@/components/KeyStatistics";
import CancerTypesPieChart from "@/components/CancerTypesPieChart";
import FundingTrendChart from "@/components/FundingTrendChart";
import ClinicalTrialsChart from "@/components/ClinicalTrialsChart";
import SurvivalRateTrend from "@/components/SurvivalRateTrend";
import RecentBreakthroughs from "@/components/RecentBreakthroughs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl animate-fade-in">
      <Header />
      <div className="mt-6">
        <MainNav />
      </div>
      
      <main className="mt-8">
        <section className="mb-6">
          <div className="bg-gradient-to-r from-medical-blue to-medical-teal rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Cancer Research Dashboard</h2>
            <p className="text-white/80">Comprehensive insights and analytics for cancer research progress</p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-medical-blue">Research Overview</h2>
          <KeyStatistics />
        </section>

        <Tabs defaultValue="charts" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="charts">Research Charts</TabsTrigger>
            <TabsTrigger value="breakthroughs">Recent Breakthroughs</TabsTrigger>
          </TabsList>
          <TabsContent value="charts" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <CancerTypesPieChart />
              <FundingTrendChart />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ClinicalTrialsChart />
              <SurvivalRateTrend />
            </div>
          </TabsContent>
          <TabsContent value="breakthroughs" className="mt-4">
            <RecentBreakthroughs />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="mt-12 border-t border-border pt-6 pb-12 text-center text-sm text-muted-foreground">
        <p>Cancer Spark Insights • Data updated April 2025</p>
        <p className="mt-2">© 2025 Cancer Research Collaborative</p>
      </footer>
    </div>
  );
};

export default Index;
