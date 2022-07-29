
type strArray = string[];

export interface LineType {
  labels?: strArray;
  datasets?: [{
    label?: string;
    data?: strArray;
    fill?: boolean;
    backgroundColor?: strArray
    borderColor?: string;
    borderWidth?: number;
  }]

}

export interface TwoLineType {
    labels: strArray;
    datasets: [{
      label: string;
      data: strArray;
      fill: boolean;
      backgroundColor: strArray
      borderColor: string;
      borderWidth: number;
    },
    {
      label?: string;
      data: strArray;
      fill: boolean;
      backgroundColor: strArray
      borderColor: string;
      borderWidth: number;
    }]
  
}
export type PossibleioData = TwoLineType | null;
export type PossiblechartData = LineType | null;

