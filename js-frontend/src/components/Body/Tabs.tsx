import Link from "next/link"

const Tabs = () => {
  return (
    <div>
      <Link
        href="/dashboard"
        className="p-4 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
        aria-current="page"
      >
        Dashboard
      </Link>

      <Link
        href="/repositories"
        className="p-4 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
        aria-current="page"
      >
        Repositories
      </Link>

      <Link
        href="/tests"
        className="p-4 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
        aria-current="page"
      >
        Tests
      </Link>
      
      <Link
        href="/settings"
        className="p-4 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
        aria-current="page"
      >
        Settings
      </Link>
    </div>
  )
}

export default Tabs
