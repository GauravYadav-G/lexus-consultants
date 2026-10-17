import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ViewAllFaqsLink() {
  return <div className="-mt-10 bg-white pb-12 text-center"><Link to="/faqs" className="inline-flex items-center gap-2 text-sm font-bold text-navy-900">View all FAQs <ArrowRight className="h-4 w-4" /></Link></div>;
}
