import React from "react";
import { useTheme } from "../context/ThemeContext"; // ✅ Theme context

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
  const { theme } = useTheme(); // ✅ Get current theme

  // Dynamic dashboard background
  const dashboardBg = theme === "light" ? "bg-[#e9eef4]" : "bg-[#000000]";

  return (
    <div
      className={`${dashboardBg} min-h-screen transition-colors duration-300`}
    >
      {/* Top Stats */}
      <Stats />

      {/* Overview & Recent Sales */}
      <div className="grid lg:grid-cols-5 p-6 gap-6">
        <div className="lg:col-span-3 col-span-5">
          <OverView />
        </div>
        <div className="lg:col-span-2 col-span-5">
          <RecentSales />
        </div>
      </div>

      {/* Stats Section */}
      <StatsHeader />

      {/* Total Earnings Cards */}
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

      {/* Other Stats */}
      <StatsHeader />
      <div className="grid lg:grid-cols-3 gap-6 px-6">
        <TotalEarningCard />
        <TotalEarningCard2 />
        <TotalEarningCard3 />
        <SubscriptionsPerformersCard />
        <TopSalesProductCard />
        <PaymentHistoryCard />
      </div>
    </div>
  );
};

export default Dashboard;
