export enum LoadingState {
  IDLE = 'IDLE',
  GENERATING = 'GENERATING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}

export interface HolidayWish {
  recipient: string;
  message: string;
  signature: string;
}

export interface OrnamentData {
  position: [number, number, number];
  color: string;
  scale: number;
}
