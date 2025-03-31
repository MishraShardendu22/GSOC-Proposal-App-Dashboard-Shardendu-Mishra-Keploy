// File: components/github/RepoCard.tsx
import { formatDate, getRelativeTime, getLanguageColor } from './util'
import { Repo } from './types'

interface RepoCardProps {
  repo: Repo
}

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className="px-6 pt-5 pb-3 border-b border-gray-100 flex items-center">
        <div className="bg-blue-100 p-2 rounded-lg mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
        </div>
        <h2 className="font-bold text-lg text-gray-800 truncate flex-1">
          {repo.name}
        </h2>
      </div>

      <div className="px-6 py-4 flex-grow">
        <p className="text-gray-600 mb-4 line-clamp-3 min-h-[4.5rem]">
          {repo.description || 'No description available'}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {repo.language && (
            <span
              className={`px-3 py-1 ${getLanguageColor(repo.language)} rounded-full text-xs font-medium flex items-center`}
            >
              <span
                className={`w-2 h-2 rounded-full mr-1 ${repo.language ? 'bg-current opacity-70' : ''}`}
              ></span>
              {repo.language}
            </span>
          )}

          {repo.stargazers_count > 0 && (
            <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-medium flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
              {repo.stargazers_count}
            </span>
          )}

          {repo.forks_count > 0 && (
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              {repo.forks_count}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center text-xs text-gray-500">
          <div>Updated: {formatDate(repo.updated_at)}</div>
          <div className="font-medium">{getRelativeTime(repo.updated_at)}</div>
        </div>
      </div>

      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full justify-center items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
        >
          View Repository
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default RepoCard
