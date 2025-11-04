import React from "react";
import Header from "../components/Layout/Header";
import Stats from "../components/Dashboard/Stats";
import RecentSales from "../components/Dashboard/RecentSales";
import OverView from "../components/Dashboard/OverView";
import StatsHeader from "../components/Dashboard/StatsHeader";
import TotalEarnings from "../components/Dashboard/TotalEarnings";
import TotalEarnings2 from "../components/Dashboard/TotalEarnings2";
import TotalEarnings3 from "../components/Dashboard/TotalEarnings3";
import SubscriptionsCard from "../components/Dashboard/SubCard";
import TotalEarningCard from "../components/Dashboard/TotalEarningCard";

import TotalEarningCard2 from "../components/Dashboard/TotalEarningCard2";

import TotalEarningCard3 from "../components/Dashboard/TotalEarningCard3";
import SubscriptionsPerformersCard from "../components/Dashboard/SubPerformance";
import TopSalesProductCard from "../components/Dashboard/TopSales";
import PaymentHistoryCard from "../components/Dashboard/PaymentHistory";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Stats />
      <div className="grid lg:grid-cols-5 p-6 gap-6">
        <div className="lg:col-span-3 col-span-5">
          <OverView />
        </div>

        <div className="lg:col-span-2 col-span-5">
          <RecentSales />
        </div>
      </div>
      <StatsHeader />
      <div className="grid lg:grid-cols-8 px-6 gap-6">
        <div className="lg:col-span-5 col-span-8">
          <TotalEarnings />
        </div>

        <div className="lg:col-span-3 col-span-8">
          <TotalEarnings2 />
        </div>
      </div>
      <div className="grid lg:grid-cols-8 px-6 gap-6 mt-6">
        <div className="lg:col-span-5 col-span-8">
          <TotalEarnings3 />
        </div>

        <div className="lg:col-span-3 col-span-8">
          <SubscriptionsCard />
        </div>
      </div>

      <StatsHeader />
      <div className="grid lg:grid-cols-3 gap-6 px-6">
        <div>
          <TotalEarningCard />
        </div>
        <div>
          <TotalEarningCard2 />
        </div>
        <div>
          <TotalEarningCard3 />
        </div>
        <div>
          <SubscriptionsPerformersCard />
        </div>
        <div>
          <TopSalesProductCard />
        </div>
        <div>
          <PaymentHistoryCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
