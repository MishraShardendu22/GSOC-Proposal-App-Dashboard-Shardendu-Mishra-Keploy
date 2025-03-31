import React from 'react'
import Image from 'next/image'
import { Chart } from 'react-chartjs-2'
import { ContributorStats } from './Types'

interface ContributorActivitySectionProps {
  stats: ContributorStats[]
}

const ContributorActivitySection: React.FC<ContributorActivitySectionProps> = ({
  stats,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Contributor Activity
      </h2>
      {stats && stats.length > 0 ? (
        stats.slice(0, 5).map((contributor, index) => {
          // Calculate contributor totals
          const additions = contributor.weeks.reduce(
            (sum, week) => sum + week.a,
            0
          )
          const deletions = contributor.weeks.reduce(
            (sum, week) => sum + week.d,
            0
          )

          // Prepare weekly data for this contributor
          const weeklyData = {
            labels: contributor.weeks.slice(-10).map((week) =>
              new Date(week.w * 1000).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })
            ),
            datasets: [
              {
                label: 'Additions',
                data: contributor.weeks.slice(-10).map((week) => week.a),
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y',
              },
              {
                label: 'Deletions',
                data: contributor.weeks.slice(-10).map((week) => week.d),
                backgroundColor: 'rgba(255, 99, 132, 0.4)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                yAxisID: 'y',
              },
              {
                label: 'Commits',
                data: contributor.weeks.slice(-10).map((week) => week.c),
                type: 'line' as const,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                yAxisID: 'y1',
              },
            ],
          }

          return (
            <div key={index} className="mb-8 p-4 border rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={contributor.author.avatar_url}
                  alt={contributor.author.login}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <a
                    href={contributor.author.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-blue-600 hover:underline"
                  >
                    {contributor.author.login}
                  </a>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <div className="text-sm">
                      <span className="font-medium">Commits:</span>{' '}
                      <span className="text-gray-700">{contributor.total}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Additions:</span>{' '}
                      <span className="text-green-600">
                        {additions.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Deletions:</span>{' '}
                      <span className="text-red-600">
                        {deletions.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-64 mt-4">
                <Chart
                  type="bar"
                  data={weeklyData}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: `Recent Activity - ${contributor.author.login}`,
                      },
                    },
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: 'Week',
                        },
                      },
                      y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                          display: true,
                          text: 'Lines',
                        },
                      },
                      y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                          drawOnChartArea: false,
                        },
                        title: {
                          display: true,
                          text: 'Commits',
                        },
                        min: 0,
                      },
                    },
                  }}
                />
              </div>
            </div>
          )
        })
      ) : (
        <p className="text-gray-500">Loading contributor stats...</p>
      )}
    </div>
  )
}

export default ContributorActivitySection
