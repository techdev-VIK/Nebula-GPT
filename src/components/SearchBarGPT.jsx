

const SearchBarGPT = () => {

    return (
        <div className="pt-[5%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input 
            type="text" 
            className="p-2 m-4 bg-white col-span-9 rounded-lg" placeholder="What would you like to search today?" 
            />

            <button className="m-4 py-2 px-2 bg-red-700 text-white rounded-lg col-span-3">
            Search
            </button>
        </form>     
        </div>
    )
}

export default SearchBarGPT;