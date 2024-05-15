// "use client";
import { Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// components

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageContainer title="7Solution Assignments">
      <Box mt={3}>{children}</Box>
    </PageContainer>
  );
};

export default Dashboard;
