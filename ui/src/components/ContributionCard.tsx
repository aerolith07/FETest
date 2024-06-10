import type { Contribution } from "@/api/fetchContributions"
import { LOCALE_COOKIE } from "@/utils/constants"
import { getStatus } from "@/utils/getStatus"
import { cookies } from 'next/headers'
import { useMemo } from "react"

type DetailSectionProps = {
    title: string,
    data?: string
}

const DetailSection = ({ title, data }: DetailSectionProps) => {
    return <div>
        <p className="uppercase text-neutral-800 font-bold text-xs">{title}</p>
        <p className="text-neutral-800 text-sm">{data}</p>
    </div>
}

type Props = {
    contribution: Contribution
}

const useFormattedTime = (time: string) => {
    const locale = cookies().get(LOCALE_COOKIE)?.value
    const formatTime = new Date(time).toLocaleString(locale)
    return formatTime;
}

export const ContributionCard = ({ contribution }: Props) => {
    const { title, description, startTime, endTime, owner } = contribution
    const startTimeFormatted = useFormattedTime(startTime)
    const endTimeFormatted = useFormattedTime(endTime)

    const status = useMemo(() => getStatus(startTime, endTime), [startTime, endTime])

    return (
        <div className="p-2 border-2 rounded">
            <div className="min-h-16">
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
                <DetailSection title="start" data={startTimeFormatted} />
                <DetailSection title="end" data={endTimeFormatted} />
                <DetailSection title="owner" data={owner} />
                <DetailSection title="status" data={status} />
            </div>
        </div >
    )
}