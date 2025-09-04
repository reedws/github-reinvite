// Organization and assignment mappings
export const ORGANIZATIONS = {
  "IT3038C-Reed-FA25": {
    name: "IT3038C FA25",
    owner: "IT3038C-Reed-FA25", // GitHub organization/owner name
    assignments: {
      "Bash Basics": "bash-basics",
      "Bash Arguments": "bash-arguments",
      "Bash Files": "bash-files",
      "Bash Project": "bash-project",
      "Bash RegEx": "bash-regex",
      "Python Args": "python-args",
      "Python Basics": "python-basics",
      "Python CSVs": "python-csvs",
      "Python Files": "python-files",
      "Python Project": "python-project",
      "Python RegEx": "python-regex",
      "Python SQL": "python-sql"
    }
  },
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
