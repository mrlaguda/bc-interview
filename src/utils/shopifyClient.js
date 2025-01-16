import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: 'bc-interview.myshopify.com/',
  apiVersion: '2024-07',
  publicAccessToken: '32fd94aa9529aeb8ec522de6a05df2e0',
});

export default client;
