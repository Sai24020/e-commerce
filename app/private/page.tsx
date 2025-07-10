// app/private/page.tsx

import { logout } from '../logout/actions'
import { Button } from '@/app/components/ui/button' // använder din custom button

export default async function PrivatePage()
 {
  return (
    <div className="min-h-screen mt-0 mb-0 flex flex-col items-center justify-center p-6 sm:p-10 bg-[url('/images/sky1.jpg')] bg-no-repeat bg-cover bg-center dark:bg-gray-900 dark:text-white text-gray-900 transition-colors duration-300">
      <div className="backdrop-blur-sm bg-white/70 dark:bg-black/40 p-6 rounded-xl shadow-md max-w-md w-full text-center">
        <h1 className="text-xl sm:text-2xl font-semibold mb-4">
          Hej,
        </h1>
        <form action={logout}>
          <Button variant="destructive" size="sm" type="submit" className='hover:text-black/50 hover:bg-blue-600 cursor-pointer '>
            Logga ut
          </Button>
        </form>
      </div>
    </div>
  )
}
