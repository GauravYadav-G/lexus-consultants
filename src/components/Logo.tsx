import { Link } from "react-router-dom";

export function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link to="/" aria-label="Lexus Consultants home" className="group inline-flex min-w-0 flex-none items-center py-1">
      <img
        src={light ? "/images/lexus-logo-light.svg" : "/images/lexus-logo.svg"}
        alt="Lexus Consultants — Legal & Corporate Advisory"
        className={
          className ||
          "block h-14 w-auto max-w-[260px] object-contain transition-transform duration-200 group-hover:scale-[1.03] sm:h-16 sm:max-w-[310px] md:h-[68px] md:max-w-[340px] lg:h-[72px] lg:max-w-[360px]"
        }
      />
    </Link>
  );
}
