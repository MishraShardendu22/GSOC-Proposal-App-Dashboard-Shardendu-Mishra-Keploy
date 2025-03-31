/* eslint-disable @typescript-eslint/no-explicit-any */
// Component/CommitActivityChart.tsx
import React from 'react'
import { Line } from 'react-chartjs-2'

interface CommitActivityChartProps {
  commitActivity: any[]
}

const CommitActivityChart: React.FC<CommitActivityChartProps> = ({
  commitActivity,
}) => {
  const commitChartData = {
    labels: commitActivity.slice(0, 12).map((week) =>
      new Date(week.week * 1000).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    ),
    datasets: [
      {
        label: 'Commits',
        data: commitActivity.slice(0, 12).map((week) => week.total),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Commit Activity</h2>
      <div className="h-64">
        {commitActivity.length > 0 ? (
          <Line
            data={commitChartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  text: 'Weekly Commit Activity',
                },
              },
              scales: {
                y: {
                  title: {
                    display: true,
                    text: 'Number of Commits',
                  },
                },
              },
            }}
          />
        ) : (
          'No commit activity data available'
        )}
      </div>
    </div>
  )
}

export default CommitActivityChart
