'use client';
import { useSearchParams } from "@/hooks/useSearchParams";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from "react";
import { SearchIcon } from "./Icons";

export const SearchBar = () => {

    const { params, title } = useSearchParams()

    const [searchTerm, setSearchTerm] = useState<string>(title || '')
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        params.delete('page')

        if (searchTerm) {
            params.set('title', searchTerm)
            replace(`${pathname}?${params.toString()}`)
        }
    }

    return <form className="flex gap-4 w-full" onSubmit={handleSearch}>
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon />
            </div>
            <input
                type="search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 h-10"
                placeholder="Search by Title..."
                onChange={handleChange}
            />
        </div>
    </form>
}