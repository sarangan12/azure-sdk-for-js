// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrate the creation of SynonymMap.
 */

import { SearchIndexClient, AzureKeyCredential, SynonymMap } from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.ENDPOINT || "";
const apiKey = process.env.SEARCH_API_ADMIN_KEY || "";

export async function main() {
  console.log(`Running Create SynonymMap Sample....`);
  if (!endpoint || !apiKey) {
    console.log("Make sure to set valid values for endpoint and apiKey with proper authorization.");
    return;
  }
  const client = new SearchIndexClient(endpoint, new AzureKeyCredential(apiKey));
  const sm: SynonymMap = {
    name: `my-synonymmap`,
    synonyms: ["United States, United States of America => USA", "Washington, Wash. => WA"]
  };
  await client.createSynonymMap(sm);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
