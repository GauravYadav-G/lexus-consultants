import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ViewAllInsightsLink() {
  return <div className="-mt-8 bg-muted pb-12 text-center"><Link to="/insights" className="inline-flex items-center gap-2 text-sm font-bold text-navy-900">All insights <ArrowRight className="h-4 w-4" /></Link></div>;
}
