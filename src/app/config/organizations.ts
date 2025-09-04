// Organization and assignment mappings
export const ORGANIZATIONS = {
  "IT3038C-Reed-FA25": {
    name: "IT3038C FA25",
    owner: "IT3038C-Reed-FA25", // GitHub organization/owner name
    assignments: {
      "Bash Basics": "bash-basics",
    }
  },
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
