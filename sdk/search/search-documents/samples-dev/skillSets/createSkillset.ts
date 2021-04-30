// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrate the creation of skillset.
 */

import {
  SearchIndexerClient,
  AzureKeyCredential,
  SearchIndexerSkillset
} from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.ENDPOINT || "";
const apiKey = process.env.SEARCH_API_ADMIN_KEY || "";

export async function main() {
  console.log(`Running Create Skillset Sample....`);
  if (!endpoint || !apiKey) {
    console.log("Make sure to set valid values for endpoint and apiKey with proper authorization.");
    return;
  }
  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  const skillset: SearchIndexerSkillset = {
    name: `my-azureblob-skillset`,
    description: `Skillset description`,
    skills: [
      {
        odatatype: "#Microsoft.Skills.Text.EntityRecognitionSkill",
        inputs: [
          {
            name: "text",
            source: "/document/merged_content"
          },
          {
            name: "languageCode",
            source: "/document/language"
          }
        ],
        outputs: [
          {
            name: "persons",
            targetName: "people"
          },
          {
            name: "organizations",
            targetName: "organizations"
          },
          {
            name: "locations",
            targetName: "locations"
          }
        ]
      }
    ]
  };
  await client.createSkillset(skillset);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
