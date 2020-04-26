module.exports = {
  disableEmoji: false,
  list: ["feat", "fix", "chore", "docs", "refactor", "style", "perf", "wip"],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "scope", "subject", "body", "breaking", "issues"],
  scopes: [],
  types: {
    chore: {
      description: "Build and dev tool",
      value: "chore",
    },
    docs: {
      description: "Document change",
      value: "docs",
    },
    feat: {
      description: "New feature",
      value: "feat",
    },
    fix: {
      description: "A bug fix",
      value: "fix",
    },
    perf: {
      description: "Code improve",
      value: "perf",
    },
    refactor: {
      description: "Code refactor",
      value: "refactor",
    },
    release: {
      description: "Create a release",
      value: "release",
    },
    style: {
      description: "Code format",
      value: "style",
    },
    wip: {
      description: "Work is process",
      value: "wip",
    },
  },
};
