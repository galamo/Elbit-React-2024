type ScanResult = {
  numberOfVulnerabilities: number;
  packages: Array<{ name: string; version: string; cve: string }>;
  priorities: Array<string>;
  id: string;
  userScannerId: string;
};
const scanErrors: Array<ScanResult> = [
  {
    numberOfVulnerabilities: 1,
    packages: [{ name: "fetch", version: "1.2.3", cve: "2024-1554-223" }],
    priorities: ["high", "low"],
    id: "id_1",
    userScannerId: "2024_12_12",
  },
  {
    numberOfVulnerabilities: 1,
    packages: [{ name: "axios", version: "1.2.3", cve: "2024-1124-223" }],
    priorities: ["high", "low"],
    id: "id_2",
    userScannerId: "2024_12_12",
  },
];

type ScanResultKey = keyof Omit<ScanResult, "priorities">;

function searchScan(data: Array<ScanResult>, key: ScanResultKey) {}
searchScan(scanErrors, "packages");
