import SearchResults from '@/app/components/header/search-results';
  
export default async function SearchPage( {searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
     const { query } = await searchParams;

     
    return (
        <main>
             <h1 className="flex bg-[url('/images/shop_now.jpg')] bg-center bg-no-repeat bg-cover shadow-md px-6 py-7 text-3xl font-bold mt-4 mb-4">
             Search about : {query}</h1>
   
            {/* generera kort från apiet som är från sök */}
            <SearchResults query={ Array.isArray(query) ? query[0] : query ?? "" } />
        </main>
    )
}