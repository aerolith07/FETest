import { fetchContributions } from "@/api/fetchContributions";
import { ContributionList } from "@/components/ContributionList";
import { PageSelector } from "@/components/PageSelector";
import { SearchBar } from "@/components/SearchBar";
import { SearchResultSummary } from "@/components/SearchResultSummary";

type Props = {
  searchParams: Record<string, string | undefined>
}

export default async function Home({ searchParams }: Props) {
  const currentPage = parseInt(searchParams['page'] || "1") || 1
  const title = searchParams['title']

  const { contributions, total, limit } = await fetchContributions(currentPage, title)

  const totalPages = Math.ceil(total / limit)

  return (
    <main className="flex min-h-screen flex-col items-center p-2 sm:p-4 gap-4">
      <SearchBar />
      {title ? <SearchResultSummary resultsCount={total} searchTerm={title} /> : null}
      <ContributionList contributions={contributions} />
      <PageSelector totalPages={totalPages} currentPage={currentPage} />
    </main>
  );
}
