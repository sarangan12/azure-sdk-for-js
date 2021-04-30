// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrate the deletion of data source connection by object.
 */

import {
  SearchIndexerClient,
  AzureKeyCredential,
  SearchIndexerDataSourceConnection
} from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.ENDPOINT || "";
const apiKey = process.env.SEARCH_API_ADMIN_KEY || "";

export async function main() {
  console.log(`Running Delete Datasource Connection Sample....`);
  if (!endpoint || !apiKey) {
    console.log("Make sure to set valid values for endpoint and apiKey with proper authorization.");
    return;
  }
  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Get Datasource Connection my-data-source-2`);
  const ds: SearchIndexerDataSourceConnection = await client.getDataSourceConnection(
    "my-data-source-2"
  );
  console.log(`Deleting Datasource Connection my-data-source-2`);
  await client.deleteDataSourceConnection(ds);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
