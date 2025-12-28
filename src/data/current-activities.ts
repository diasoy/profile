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
    activity: "Looking for internship opportunities"
  },
  {
    id: 3,
    activity: "Trail running and road running"
  },
  {
    id: 4,
    activity: "Watching K-dramas"
  },
  {
    id: 5,
    activity: "Playing games"
  }
];

export const lastUpdated = "December 28, 2025";
