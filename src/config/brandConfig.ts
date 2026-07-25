export const brandConfig = {
  company: {
    name: "QuantumYield",
    legalDisplayName: "QuantumYield",
    trademarkName: "QuantumYield™",
  },
  product: {
    name: "QYX20",
    fullName: "QYX20 by QuantumYield",
    applicationName: "QuantumYield Capital Gateway",
    institutionalName: "QuantumYield Global Capital Terminal",
    tagline: "The Global Capital Terminal for Digital Assets",
  },
  token: {
    utilityToken: "QYX",
    protocolStandard: "QYX20",
  },
  support: {
    email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "",
  },
  urls: {
    website: process.env.NEXT_PUBLIC_SITE_URL ?? "",
    app: process.env.NEXT_PUBLIC_APP_URL ?? "",
    docs: process.env.NEXT_PUBLIC_DOCS_URL ?? "",
    status: process.env.NEXT_PUBLIC_STATUS_URL ?? "",
  },
} as const;
