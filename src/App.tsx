import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { PlansPage } from './pages/PlansPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { HealthCheckPage } from './pages/HealthCheckPage';
import { InsightsPage } from './pages/InsightsPage';
import { DashboardDemoPage } from './pages/DashboardDemoPage';
import { PartnersPage } from './pages/PartnersPage';
import { FaqPage } from './pages/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/estimator" element={<EstimatorPage />} />
          <Route path="/health-check" element={<HealthCheckPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/demo" element={<DashboardDemoPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
