import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DatabaseId = process.env.NOTION_BE as string; // Ensure type safety

let payload: any[] = []; // Define the type of payload if possible

async function getData() {
  const data = await notion.databases.query({
    database_id: DatabaseId,
  });
  return data;
}

getData().then((data) => {
  payload = data.results;
});


// Tag Link Name
function getProperties(results: any[]): string[] {
  let urls: string[] = [];
  results.forEach(element => {
      urls.push(element);
  });
  return urls;
}

export default defineEventHandler(() => {
  return {
   bes: getProperties(payload),
   test:notion
  };
});