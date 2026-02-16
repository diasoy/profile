export interface CurrentActivity {
  id: number;
  activity: string;
}

export const currentActivities: CurrentActivity[] = [
  {
    id: 1,
    activity: "Working on my thesis"
  },
  {
    id: 2,
    activity: "Looking for internship/fulltime opportunities"
  },
  {
    id: 3,
    activity: "Learning new programming languages and frameworks"
  },
  {
    id: 4,
    activity: "Trail running and road running"
  },
];

export const lastUpdated = "February 16, 2026";
