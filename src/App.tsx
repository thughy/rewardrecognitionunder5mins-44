
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Recognize from "./pages/Recognize";
import Rewards from "./pages/Rewards";
import Leaderboard from "./pages/Leaderboard";
import Surveys from "./pages/Surveys";
import EmployerBranding from "./pages/EmployerBranding";
import Analytics from "./pages/admin/Analytics";
import Settings from "./pages/admin/Settings";
import NotFound from "./pages/NotFound";

// Opportunity pages
import ReferralProgram from "./pages/opportunities/ReferralProgram";
import ShiftIncentives from "./pages/opportunities/ShiftIncentives";
import LearningDevelopment from "./pages/opportunities/LearningDevelopment";
import WellnessChallenges from "./pages/opportunities/WellnessChallenges";
import Volunteering from "./pages/opportunities/Volunteering";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/recognize" element={<Recognize />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/surveys" element={<Surveys />} />
            <Route path="/employer-branding" element={<EmployerBranding />} />
            
            {/* Opportunities Routes */}
            <Route path="/opportunities/referrals" element={<ReferralProgram />} />
            <Route path="/opportunities/shifts" element={<ShiftIncentives />} />
            <Route path="/opportunities/learning" element={<LearningDevelopment />} />
            <Route path="/opportunities/wellness" element={<WellnessChallenges />} />
            <Route path="/opportunities/volunteering" element={<Volunteering />} />
            
            <Route path="/admin/analytics" element={<Analytics />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
