import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

// Оптимизированная ленивая загрузка с предварительной загрузкой
const Index = lazy(() => import("./pages/Index"));
const Team = lazy(() => import("./pages/Team"));
const News = lazy(() => import("./pages/News"));
const Matches = lazy(() => import("./pages/Matches"));
const Tournaments = lazy(() => import("./pages/Tournaments"));
const Media = lazy(() => import("./pages/Media"));
const Contacts = lazy(() => import("./pages/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Админские маршруты
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminHome = lazy(() => import("./pages/admin/AdminHome"));
const PlayersManagement = lazy(() => import("./pages/admin/PlayersManagement"));
const CoachesManagement = lazy(() => import("./pages/admin/CoachesManagement"));
const TeamsManagement = lazy(() => import("./pages/admin/TeamsManagement"));

// Улучшенный компонент загрузки
const PageLoading = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-fc-green border-t-transparent"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 минута
      refetchOnWindowFocus: false,
      retry: 1, // Уменьшаем количество попыток
      timeout: 5000, // Таймаут 5 секунд
    },
  },
});

// Always use HashRouter for compatibility with GitHub Pages
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              {/* Публичные маршруты */}
              <Route path="/" element={<Index />} />
              <Route path="/team" element={<Team />} />
              <Route path="/news" element={<News />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/tournaments/:id" element={<Tournaments />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contacts" element={<Contacts />} />
              
              {/* Админские маршруты */}
              <Route path="/admin" element={<AdminDashboard />}>
                <Route index element={<AdminHome />} />
                <Route path="players" element={<PlayersManagement />} />
                <Route path="coaches" element={<CoachesManagement />} />
                <Route path="teams" element={<TeamsManagement />} />
                <Route path="tournaments" element={<AdminHome />} />
              </Route>
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
