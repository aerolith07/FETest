import { useSearchParams as useNextSearchParams } from "next/navigation";

export const useSearchParams = () => {
    const searchParams = useNextSearchParams();
    const params = new URLSearchParams(searchParams.toString())

    const title = params.get('title')
    const page = params.get('page')

    return { title, page, params }
}