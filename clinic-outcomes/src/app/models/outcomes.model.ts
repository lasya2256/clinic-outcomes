// models/outcomes.model.ts
export interface TimeInRangeData {
  veryLow: number;
  low: number;
  inRange: number;
  high: number;
  ranges: number[];
}

export interface GmiData {
  average: number;
  below7: number;
  between7and8: number;
  above8: number;
}

export interface ClinicOutcomesState {
  timeInRangeData: TimeInRangeData | null;
  gmiData: GmiData | null;
  patientCount: number;
  dateRange: string;
  lastUpdated: string;
  period: string;
  trends: any | null;
  loading: boolean;
  error: string | null;
}

export interface TimeInRangeApiResponse {
  data: TimeInRangeData;
  patientCount: number;
  dateRange: string;
  lastUpdated: string;
}

export interface GmiApiResponse {
  data: GmiData;
  patientCount: number;
  dateRange: string;
  lastUpdated: string;
}