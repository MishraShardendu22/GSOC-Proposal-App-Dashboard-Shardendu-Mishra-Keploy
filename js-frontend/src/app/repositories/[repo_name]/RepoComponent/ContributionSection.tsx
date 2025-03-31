// Component/ContributorsSection.tsx
import React from 'react'
import Image from 'next/image'
import { Contributor } from './Types'

interface ContributorsSectionProps {
  contributors: Contributor[]
}

const ContributorsSection: React.FC<ContributorsSectionProps> = ({
  contributors,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Contributors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contributors.length > 0 ? (
          contributors.map((contributor, index) => (
            <div
              key={index}
              className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Image
                src={contributor.avatar_url}
                alt={contributor.login}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <div className="font-medium">{contributor.login}</div>
                <div className="text-sm text-gray-500">
                  {contributor.contributions} contributions
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            No contributors found
          </div>
        )}
      </div>
    </div>
  )
}

export default ContributorsSection
