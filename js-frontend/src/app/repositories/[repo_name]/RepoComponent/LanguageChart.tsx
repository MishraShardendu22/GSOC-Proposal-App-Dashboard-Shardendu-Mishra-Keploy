/* eslint-disable @typescript-eslint/no-explicit-any */
// Component/LanguagesChart.tsx
import React from 'react'
import { Pie } from 'react-chartjs-2'
import { generateColors } from './ChartConfig'

interface LanguagesChartProps {
  languagesData: Record<string, number> | null
}

const LanguagesChart: React.FC<LanguagesChartProps> = ({ languagesData }) => {
  console.log('languagesData', languagesData)

  const getThemeChartColors = () => {
    return [
      getComputedStyle(document.documentElement)
        .getPropertyValue('--chart-1')
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue('--chart-2')
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue('--chart-3')
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue('--chart-4')
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue('--chart-5')
        .trim(),
    ]
  }

  const languageChartData = {
    labels: languagesData ? Object.keys(languagesData) : [],
    datasets: [
      {
        data: languagesData ? Object.values(languagesData) : [],
        backgroundColor: languagesData
          ? // Use theme colors first, then fall back to generateColors if there are more languages than theme colors
            [
              ...getThemeChartColors(),
              ...generateColors(
                Math.max(0, Object.keys(languagesData).length - 5)
              ).colors,
            ]
          : [],
        borderWidth: 1,
        borderColor: getComputedStyle(document.documentElement)
          .getPropertyValue('--background')
          .trim(),
      },
    ],
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="bg-card rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-card-foreground">Languages</h2>
      <div className="h-64">
        {languagesData && Object.keys(languagesData).length > 0 ? (
          <Pie
            data={languageChartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    color: getComputedStyle(document.documentElement)
                      .getPropertyValue('--card-foreground')
                      .trim(),
                    font: {
                      family: getComputedStyle(document.documentElement)
                        .getPropertyValue('--font-sans')
                        .trim(),
                    },
                  },
                },
                title: {
                  display: true,
                  text: 'Languages Distribution',
                  color: getComputedStyle(document.documentElement)
                    .getPropertyValue('--card-foreground')
                    .trim(),
                  font: {
                    family: getComputedStyle(document.documentElement)
                      .getPropertyValue('--font-sans')
                      .trim(),
                  },
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      const label = context.label || ''
                      const value = context.raw as number
                      const total = context.chart.data.datasets[0].data.reduce(
                        (a: number, b: any) =>
                          a + (typeof b === 'number' ? b : 0),
                        0
                      )
                      const percentage = Math.round((value / total) * 100)
                      return `${label}: ${percentage}% (${formatBytes(value)})`
                    },
                  },
                },
              },
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            No language data available
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguagesChart