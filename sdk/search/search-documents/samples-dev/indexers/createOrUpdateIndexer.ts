// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrate the creation/update of an Indexer.
 */

import { SearchIndexerClient, AzureKeyCredential, SearchIndexer } from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.ENDPOINT || "";
const apiKey = process.env.SEARCH_API_ADMIN_KEY || "";

export async function main() {
  console.log(`Running Create Or Update Indexer Sample....`);
  if (!endpoint || !apiKey) {
    console.log("Make sure to set valid values for endpoint and apiKey with proper authorization.");
    return;
  }
  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Getting Indexer my-azure-indexer-1`);
  const indexer: SearchIndexer = await client.getIndexer("my-azure-indexer-1");
  console.log(`Updating isDisabled status of Indexer my-azure-indexer-1`);
  indexer.isDisabled = true;
  await client.createOrUpdateIndexer(indexer);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
