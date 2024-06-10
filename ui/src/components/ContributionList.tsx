import type { Contribution } from "@/api/fetchContributions"
import { ContributionCard } from "./ContributionCard"

type Props = {
    contributions: Contribution[]
}

export const ContributionList = ({ contributions }: Props) => {
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full" >
        {contributions.map((contribution) => <ContributionCard key={contribution.id} contribution={contribution} />)}
    </div>
}