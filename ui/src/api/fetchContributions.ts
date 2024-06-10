import axios from 'axios';

const BASE_URL = 'http://localhost:8000'
const ENTRIES_PER_PAGE = 14

export type Contribution = {
    id: string,
    title: string,
    description: string,
    startTime: string,
    endTime: string,
    owner: string,
    status: string
}

type ContributionAPIResponse = {
    contributions: Contribution[],
    total: number,
    skip: number,
    limit: number
}

export const fetchContributions = async (page: number, title?: string) => {

    const contributions = await axios
        .get(BASE_URL + '/contributions', {
            params: {
                title: title,
                skip: page ? (page - 1) * ENTRIES_PER_PAGE : 0,
                limit: ENTRIES_PER_PAGE
            }
        })
        .then(res => res.data as ContributionAPIResponse)

    return contributions
}