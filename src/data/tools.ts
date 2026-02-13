export interface SoftwareTool {
  id: number;
  category: string;
  name: string;
}

export interface HardwareItem {
  id: number;
  category: string;
  name: string;
  specs?: string[];
}

export const softwareTools: SoftwareTool[] = [
  {
    id: 1,
    category: "Coding",
    name: "Visual Studio Code"
  },
  {
    id: 2,
    category: "Terminal",
    name: "Git Bash"
  },
  {
    id: 3,
    category: "Notes",
    name: "Notion"
  },
  {
    id: 4,
    category: "Browser",
    name: "Brave"
  }
];

export const hardwareItems: HardwareItem[] = [
  {
    id: 1,
    category: "Laptop",
    name: "Lenovo Thinkpad X280, Intel Core i5, 8GB RAM"
  },
  {
    id: 2,
    category: "Gaming PC",
    name: "",
    specs: [
      "CPU: AMD Ryzen 5 5600G",
      "Motherboard: B550M HVS SE",
      "Memory: 16GB",
      "Storage: NVME 256GB, SATA 512GB",
      "GPU: Radeon Vega 7"
    ]
  },
  {
    id: 3,
    category: "Monitor",
    name: "Xiaomi G24I 2026"
  },
  {
    id: 4,
    category: "Keyboard",
    name: "Rexus"
  },
  {
    id: 5,
    category: "Mouse",
    name: "Ryunix Fujin"
  },
  {
    id: 6,
    category: "Headphones",
    name: "Rexus Daxa Sedna"
  }
];

export const websiteDescription = "This website is built with Next.js and uses the React framework.";
