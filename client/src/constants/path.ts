export const ROUTE_PARAMS = {
   PRODUCT_ID: ":productId",
   PRODUCT_NAME: ":productName",
   AUTH_PARAMETER: ":variant",
};

export const PATHS = {
   HOME: {
      IDENTITY: "",
   },
   SHOP: {
      IDENTITY: "shop",
   },
   AUTH: {
      IDENTIFY: "auth",
      VARIANTS: `${ROUTE_PARAMS.AUTH_PARAMETER}`,
   },
   LOGIN: {
      IDENTITY: "login",
   },
   REGISTER: {
      IDENTITY: "register",
   },
};
