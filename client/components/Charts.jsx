import React from 'react'
import { Pie } from 'react-chartjs-2'

const data = {
  labels: ['Add tickets functionality', 'Implement a pomodoro timer', 'Create graphs based on logged time'],
  datasets: [
    {
      label: 'Time per ticket',
      data: [9, 6, 4],
      backgroundColor: [
        'rgba(132, 163, 216, 0.3)',
        'rgba(254, 62, 35, 0.3)',
        'rgba(255, 164, 56, 0.3)'
      ],
      borderColor: [
        'rgba(132, 163, 216, 1)',
        'rgba(254, 62, 35, 1)',
        'rgba(255, 164, 56, 1)'

      ], borderWidth: 1,
    },
  ],
}

const PieChartDemo = () => (
  <>
    <h2 className="pieChartHeader">
      Time spent per ticket
    </h2>
    <Pie
    data={data}
    width = {400}
    options={{
      responsive: true,
      maintainAspectRatio: true }}
    />
  </>
)

export default PieChartDemo
