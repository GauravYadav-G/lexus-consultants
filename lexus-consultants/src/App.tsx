import { HashRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, FloatingActions } from "./components/Layout";
import { ScrollProgress } from "./components/motion";
import { ScrollToTop } from "./components/Page";
import { Home } from "./pages/Home";
import {
  AboutPage, ServicesPage, ServiceDetailPage, LabourLawsPage, FaqsPage, InsightsPage, InsightDetailPage,
  ContactPage, CareersPage, LocationsPage, CalendarPage, LegalPage,
} from "./pages/Pages";
import { LabourLawConsultantsPage } from "./pages/LabourLawConsultantsPage";
import { CalculatorsPage } from "./pages/CalculatorsPage";
import { PageLoader } from "./components/PageLoader";

export default function App() {
  return (
    <>
      <PageLoader />
      <HashRouter>
        <ScrollToTop />
        <ScrollProgress />
        <Header />
        <main className="overflow-x-clip">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/labour-law-consultants" element={<LabourLawConsultantsPage />} />
            <Route path="/labour-laws" element={<LabourLawsPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<InsightDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/privacy" element={<LegalPage kind="privacy" />} />
            <Route path="/terms" element={<LegalPage kind="terms" />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </HashRouter>
    </>
  );
}
