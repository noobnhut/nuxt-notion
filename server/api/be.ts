import { Client } from "@notionhq/client";
import { defineEventHandler } from 'h3';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DatabaseId = process.env.NOTION_BE as string; // Ensure type safety

// Function to fetch data from Notion
async function getData() {
  try {
    const response = await notion.databases.query({ database_id: DatabaseId });
    return response.results;
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    return [];
  }
}

// Function to extract properties (e.g., URLs) from Notion results
function getProperties(results: any[]): string[] {
  let urls: string[] = [];
  results.forEach(element => {
    if (element.properties && element.properties.URL && element.properties.URL.url) {
      urls.push(element.properties.URL.url);
    }
  });
  return urls;
}

// API handler
export default defineEventHandler(async () => {
  const data = await getData();
  return {
    bes: getProperties(data),
    test: notion
  };
});
