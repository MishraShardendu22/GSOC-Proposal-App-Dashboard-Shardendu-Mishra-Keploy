// Component/ActivityTypesChart.tsx
import React from 'react'
import { Radar } from 'react-chartjs-2'

interface ActivityTypesChartProps {
  activityTypes: Record<string, number>
}

const ActivityTypesChart: React.FC<ActivityTypesChartProps> = ({
  activityTypes,
}) => {
  const activityRadarData = {
    labels: Object.keys(activityTypes),
    datasets: [
      {
        label: 'Repository Activities',
        data: Object.values(activityTypes),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
    ],
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Activity Types</h2>
      <div className="h-64">
        {Object.keys(activityTypes).length > 0 ? (
          <Radar
            data={activityRadarData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Activity Type Distribution',
                },
              },
              scales: {
                r: {
                  suggestedMin: 1,
                },
              },
            }}
          />
        ) : (
          'No activity data available'
        )}
      </div>
    </div>
  )
}

export default ActivityTypesChart
