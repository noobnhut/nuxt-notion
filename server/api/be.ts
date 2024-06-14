import { Client } from "@notionhq/client";
import { defineEventHandler } from 'h3';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DatabaseId = process.env.NOTION_BE as string; // Đảm bảo tính an toàn kiểu dữ liệu

// Hàm lấy dữ liệu từ Notion
async function getData() {
  try {
    console.log("Starting to fetch data from Notion...");
    const response = await notion.databases.query({ database_id: DatabaseId });
    console.log("Data fetched from Notion:", response);
    return response.results;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu từ Notion:", error);
    return [];
  }
}

// Hàm trích xuất thuộc tính (ví dụ: URL) từ kết quả của Notion
function getProperties(results: any[]): string[] {
  let urls: string[] = [];
  console.log("Processing results...");
  results.forEach(element => {
    if (element.properties && element.properties.URL && element.properties.URL.url) {
      urls.push(element.properties.URL.url);
    }
  });
  console.log("URLs extracted:", urls);
  return urls;
}

// Event handler
export default defineEventHandler(async () => {
  console.log("Handler triggered.");
  const data = await getData();
  console.log("Data received in handler:", data);
  const properties = getProperties(data);
  console.log("Properties extracted:", properties);
  return {
    bes: properties,
    test: notion
  };
});
