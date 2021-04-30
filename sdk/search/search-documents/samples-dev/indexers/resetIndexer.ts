// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrate the steps to reset an Indexer.
 */

import { SearchIndexerClient, AzureKeyCredential } from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.ENDPOINT || "";
const apiKey = process.env.SEARCH_API_ADMIN_KEY || "";

export async function main() {
  console.log(`Running Reset Indexer Sample....`);
  if (!endpoint || !apiKey) {
    console.log("Make sure to set valid values for endpoint and apiKey with proper authorization.");
    return;
  }
  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Reset Indexer my-azure-indexer-1`);
  await client.resetIndexer("my-azure-indexer-1");
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
