// assets/data/clinic-outcomes-data.ts
export const ClinicOutcomesData = {
  timePeriods: [
    {
      period: '30 days',
      timeInRange: {
        veryLow: 1,
        low: 15,
        inRange: 82,
        high: 2,
        ranges: [40, 54, 70, 180, 240, 400]
      },
      gmi: {
        average: 6.7,
        below7: 72,
        between7and8: 27,
        above8: 1
      },
      patientCount: 120,
      dateRange: '01/01/2024 - 01/31/2024',
      lastUpdated: '01/04/2024, 3:00 PM'
    },
    {
      period: '60 days',
      timeInRange: {
        veryLow: 2,
        low: 18,
        inRange: 75,
        high: 5,
        ranges: [40, 54, 70, 180, 240, 400]
      },
      gmi: {
        average: 6.9,
        below7: 65,
        between7and8: 30,
        above8: 5
      },
      patientCount: 145,
      dateRange: '12/01/2023 - 01/31/2024',
      lastUpdated: '01/04/2024, 3:05 PM'
    },
    {
      period: '90 days',
      timeInRange: {
        veryLow: 3,
        low: 20,
        inRange: 70,
        high: 7,
        ranges: [40, 54, 70, 180, 240, 400]
      },
      gmi: {
        average: 7.1,
        below7: 55,
        between7and8: 35,
        above8: 10
      },
      patientCount: 180,
      dateRange: '11/01/2023 - 01/31/2024',
      lastUpdated: '01/04/2024, 3:10 PM'
    }
  ],
  
  // Additional sample data for more realistic visualization
  patientStatistics: {
    totalPatients: 250,
    activePatients: 180,
    avgTimeInRange: 76,
    avgGMI: 6.9,
    trends: {
      timeInRange: [70, 72, 75, 76, 78, 76],
      gmi: [7.2, 7.1, 7.0, 6.9, 6.8, 6.9]
    }
  },
  
  // Color schemes for charts
  chartColors: {
    timeInRange: {
      veryLow: '#ff6384',
      low: '#ff9f40',
      inRange: '#4bc0c0',
      high: '#ffcd56'
    },
    gmi: {
      below7: '#4bc0c0',
      between7and8: '#ffcd56',
      above8: '#ff6384'
    }
  }
};