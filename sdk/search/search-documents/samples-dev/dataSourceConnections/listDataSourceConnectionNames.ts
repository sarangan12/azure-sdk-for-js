// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrate the steps to get the list of data source connection names.
 */

import { SearchIndexerClient, AzureKeyCredential } from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.ENDPOINT || "";
const apiKey = process.env.SEARCH_API_ADMIN_KEY || "";

export async function main() {
  console.log(`Running List Datasource Connection Names Sample....`);
  if (!endpoint || !apiKey) {
    console.log("Make sure to set valid values for endpoint and apiKey with proper authorization.");
    return;
  }
  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  const listOfDataSourceConnectionNames: string[] = await client.listDataSourceConnectionsNames();

  console.log(`Names of Data Source Connections`);
  console.log(`*******************************`);
  for (let ds of listOfDataSourceConnectionNames) {
    console.log(ds);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
