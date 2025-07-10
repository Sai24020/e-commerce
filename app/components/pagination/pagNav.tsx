import {
  ChevronRight,
  ChevronLast,
  ChevronLeft,
  ChevronFirst,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/app/components/ui/button";
import LimitSelect from "./limit-select";

const DEFAULT_LIMIT = 24;

const makeLink = (
  path: string,
  Icon: React.ElementType,
  disabled = false
) => {
  return disabled ? (
    <Link
      className={buttonVariants({ variant: "outline", size: "icon" })}
      href={path}
    >
      <Icon />
    </Link>
  ) : (
    <Button variant={"outline"} size={"icon"} disabled aria-disabled="true">
      <Icon />
    </Button>
  );
};

export default function PaginationNav({
  path,
  pagesCount,
  skip = 0,
  limit = DEFAULT_LIMIT,
}: {
  path: string;
  pagesCount: number;
  skip: number;
  limit: number;
}) {
  const totalCount = pagesCount;
  const totalPages = Math.ceil(totalCount / limit);
  const currentPage = Math.floor(skip / limit) + 1;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const prevSkip = skip - limit;
  const nextSkip = skip + limit;
  const lastSkip = (totalPages - 1) * limit;

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className="flex items-center justify-center gap-4 mb-4"
    >
      {makeLink(`${path}?skip=0&limit=${limit}`, ChevronFirst, !isFirstPage)}
      {makeLink(`${path}?skip=${prevSkip}&limit=${limit}`, ChevronLeft, !isFirstPage)}

      <span>{`Page: ${currentPage} / ${totalPages}`}</span>
      <LimitSelect />

      {makeLink(`${path}?skip=${nextSkip}&limit=${limit}`, ChevronRight, !isLastPage)}
      {makeLink(`${path}?skip=${lastSkip}&limit=${limit}`, ChevronLast, !isLastPage)}
    </nav>
  );
}
