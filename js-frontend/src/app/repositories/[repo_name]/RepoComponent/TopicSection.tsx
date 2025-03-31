import React from 'react'

interface TopicsSectionProps {
  topics: string[]
}

const TopicsSection: React.FC<TopicsSectionProps> = ({ topics }) => {
  console.log('Topics:', topics) 

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Topics</h2>
      <div className="flex flex-wrap gap-2">
        {topics.length > 0 ? (
          topics.map((topic, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {topic}
            </span>
          ))
        ) : (
          <span className="text-gray-500">No topics found</span>
        )}
      </div>
    </div>
  )
}

export default TopicsSection
