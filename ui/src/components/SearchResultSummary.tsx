type Props = {
    resultsCount: number,
    searchTerm: string
}

export const SearchResultSummary = ({ resultsCount, searchTerm }: Props) => {

    const isMultiple = resultsCount > 1

    return <div className='w-full text-sm'>
        <p>{`${resultsCount} ${isMultiple ? 'results' : 'result'} found for "${searchTerm}"`}</p>
        <a href="/">Cancel Search</a>
    </div>
}