
import React from "react";
import Header from "@/components/Header";
import MainNav from "@/components/MainNav";
import KeyStatistics from "@/components/KeyStatistics";
import CancerTypesPieChart from "@/components/CancerTypesPieChart";
import FundingTrendChart from "@/components/FundingTrendChart";
import ClinicalTrialsChart from "@/components/ClinicalTrialsChart";
import SurvivalRateTrend from "@/components/SurvivalRateTrend";
import RecentBreakthroughs from "@/components/RecentBreakthroughs";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl animate-fade-in">
      <Header />
      <div className="mt-6">
        <MainNav />
      </div>
      
      <main className="mt-8">
        <section>
          <h2 className="text-xl font-bold mb-4 text-medical-blue">Research Overview</h2>
          <KeyStatistics />
        </section>
        
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CancerTypesPieChart />
          <FundingTrendChart />
        </section>
        
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ClinicalTrialsChart />
          <SurvivalRateTrend />
        </section>
        
        <section className="mb-8">
          <RecentBreakthroughs />
        </section>
      </main>
      
      <footer className="mt-12 border-t border-border pt-6 pb-12 text-center text-sm text-muted-foreground">
        <p>Cancer Spark Insights • Data updated April 2025</p>
        <p className="mt-2">© 2025 Cancer Research Collaborative</p>
      </footer>
    </div>
  );
};

export default Index;
