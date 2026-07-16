module.exports = {
  contentSource: {
    type: 'CP',
    project:'voryn'
  },
  seo: {
    title: "FastStore voryn",
    description: "A fast and performant store framework",
    titleTemplate: "%s | voryn",
    author: "FastStore",
  },

  // Theming
  theme: "custom-theme",

  // Ecommerce Platform
  platform: "vtex",

  // Platform specific configs for API
  api: {
    storeId: process.env.NEXT_PUBLIC_STORE_ID,
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    locale: "en-US",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "USA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: "",
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://voryn.vtex.app",
  secureSubdomain: "https://voryn.myvtex.com",
  checkoutUrl: "https://voryn.myvtex.com/checkout",
  loginUrl: "https://voryn.myvtex.com/api/io/login",
  accountUrl: "https://voryn.myvtex.com/api/io/account",

  previewRedirects: {
    home: "/",
    plp: "/electronics",
    search: "/s?q=galaxy",
    pdp: "/galaxy-s26-ultra-5g-2000033/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || "http://localhost:3000",
    pages: {
      home: "/",
      pdp: "/galaxy-s26-ultra-5g-2000033/p",
      collection: "/electronics",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: "/",
      pdp: "/galaxy-s26-ultra-5g-2000033/p",
      collection: "/electronics",
      collection_filtered:
        "/electronics?category-1=electronics&fuzzy=0&operator=and&facets=category-1%2Cfuzzy%2Coperator&sort=score_desc&page=0",
      search: "/s?q=galaxy",
    },
    browser: "electron",
  },

  // analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    // gtmContainerId: "",
  // },

  experimental: {
    nodeVersion: 24,
    cypressVersion: 12,
    enableFaststoreMyAccount: false,
    optimizedFonts: true,
    graphqlCacheControl: {
      maxAge: 5 * 60, // 0 disables cache, 5 * 60 sets maxAge to 5 minutes.
      staleWhileRevalidate: 60,
    },
  },
  localization: {
    enabled: true,
},
  vtexHeadlessCms: {
    webhookUrls: [
      "https://voryn.myvtex.com/cms-releases/webhook-releases",
    ],
  },
};
