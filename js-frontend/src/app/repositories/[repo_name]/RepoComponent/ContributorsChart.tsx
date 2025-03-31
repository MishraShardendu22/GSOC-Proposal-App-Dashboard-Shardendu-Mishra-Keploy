// Component/ContributorsChart.tsx
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Contributor } from './Types'

interface ContributorsChartProps {
  contributors: Contributor[]
}

const ContributorsChart: React.FC<ContributorsChartProps> = ({
  contributors,
}) => {
  const contributorsChartData = {
    labels: contributors.slice(0, 10).map((c) => c.login),
    datasets: [
      {
        label: 'Contributions',
        data: contributors.slice(0, 10).map((c) => c.contributions),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Top Contributors</h2>
      <div className="h-64">
        {contributors.length > 0 ? (
          <Bar
            data={contributorsChartData}
            options={{
              indexAxis: 'y',
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  text: 'Top 10 Contributors by Commits',
                },
              },
            }}
          />
        ) : (
          'No contributors data available'
        )}
      </div>
    </div>
  )
}

export default ContributorsChart
