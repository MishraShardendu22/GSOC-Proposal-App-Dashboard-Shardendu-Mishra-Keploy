import React from 'react'
import { Bar } from 'react-chartjs-2'
import { ContributorStats } from './Types'

interface RepositoryOverviewProps {
  lineStats: { added: number; deleted: number }
  stats: ContributorStats[]
}

const RepositoryOverview: React.FC<RepositoryOverviewProps> = ({
  lineStats,
  stats,
}) => {
  // Ensure data is always >= 1 to avoid logarithmic errors
  const linesAdded = Math.max(lineStats?.added || 1, 1)
  const linesDeleted = Math.max(lineStats?.deleted || 1, 1)
  const totalCommits = Math.max(
    stats?.reduce((acc, curr) => acc + (curr.total || 0), 0) || 1,
    1
  )

  // Chart Data
  const combinedStatsData = {
    labels: ['Lines Added', 'Lines Deleted', 'Total Commits'],
    datasets: [
      {
        label: 'Repository Statistics',
        data: [linesAdded, linesDeleted, totalCommits],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  }


  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Repository Overview
      </h2>
      <div className="h-64">
        <Bar
          data={combinedStatsData}
          options={{
            responsive: true,
            scales: {
              y: {
                type: 'linear', // Switch scale dynamically
                suggestedMin: 1, // Prevents zero values
                grace: '5%',
                ticks: {
                  callback: (value) => Number(value).toLocaleString(), // Format numbers
                },
              },
            },
            plugins: {
              title: {
                display: true,
                text: 'Repository Statistics Overview',
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    const value = context.raw
                    return `${context.dataset.label}: ${(value as number).toLocaleString()}`
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default RepositoryOverview
