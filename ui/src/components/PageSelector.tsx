'use client'
import { useSearchParams } from "@/hooks/useSearchParams";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

type Props = {
    totalPages: number;
    currentPage: number;
}

export const PageSelector = ({ totalPages, currentPage }: Props) => {

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
    const { params } = useSearchParams()
    const pathname = usePathname();

    const createPageURL = useCallback(
        (pageNumber: number) => {
            params.set('page', pageNumber.toString())

            return params.toString()
        },
        [params])

    if (totalPages <= 1) {
        return null
    }

    return <div className="flex gap-4">
        {pageNumbers.map((pageNumber) => {

            if (currentPage === pageNumber) {
                return <p key={pageNumber} className="font-bold">{pageNumber}</p>
            }

            return <a key={pageNumber} href={`${pathname}?${createPageURL(pageNumber)}`}>{pageNumber}</a>;
        })}
    </div>
}