import { SearchBar } from "./SearchBar";

export function AppBar(){
    return (
        <div className="flex justify-between pb-3">
            <div className = "ml-5">
                <img src="/youtube-logo.jpg"  className="size-20 w-28"/>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="mt-6 mr-4">
                <img src="/profile.webp" className="size-12" />
            </div>
        </div>
    )
}