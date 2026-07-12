import DashboardHeader from "../components/dashboard/DashboardHeader";
import OverviewCards from "../components/dashboard/OverviewCards";
import FleetChart from "../components/dashboard/FleetChart";
import FleetStatus from "../components/dashboard/FleetStatus";
import RecentDispatches from "../components/dashboard/RecentDispatches";
import QuickActions from "../components/dashboard/QuickActions";

import PageContainer from "../components/common/PageContainer";

function Dashboard() {
  return (
    <PageContainer>
      <DashboardHeader />

      <OverviewCards />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <FleetChart />
        </div>

        <FleetStatus />
      </div>

      <RecentDispatches />

      <QuickActions />
    </PageContainer>
  );
}

export default Dashboard;