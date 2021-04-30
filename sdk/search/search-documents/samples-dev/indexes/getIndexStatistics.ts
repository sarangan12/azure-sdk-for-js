// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrate the steps to get Index Statistics.
 */

import {
  SearchIndexClient,
  AzureKeyCredential,
  SearchIndexStatistics
} from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.ENDPOINT || "";
const apiKey = process.env.SEARCH_API_ADMIN_KEY || "";

export async function main() {
  console.log(`Running Get Index Statistics Sample....`);
  if (!endpoint || !apiKey) {
    console.log("Make sure to set valid values for endpoint and apiKey with proper authorization.");
    return;
  }
  const client = new SearchIndexClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Get Index Statistics of example-index`);
  const statistics: SearchIndexStatistics = await client.getIndexStatistics("example-index");
  console.log(`Document Count: ${statistics.documentCount}`);
  console.log(`Storage Size: ${statistics.storageSize}`);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
