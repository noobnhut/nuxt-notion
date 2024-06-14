import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

let payload: any[] = [];

// Modify the getData function to accept block_id as a parameter
async function getData(block_id: any) {
    const data = await notion.blocks.children.list({
        block_id: block_id,

    });
    return data.results;
}

function getProperties(results: any[]): any[] {
    return results.map(element => {
        if (element.type === "image") {
            return {
                id: element.id,
                image: element.image,
                type: element.type
            };
        } else if (element.type === "paragraph" ||
            element.type === "heading_3" ||
            element.type === "heading_1" ||
            element.type === "code" ||
            element.type === 'bulleted_list_item' ||
            element.type === 'numbered_list_item' ||
            element.type === 'code') {
            const plainTextContent = element[element.type].rich_text.map((richText: any) => richText.plain_text).join(' ');
            return {
                id: element.id,
                content: plainTextContent,
                type: element.type
            };
        }
        return null;

        // return {element}

    }).filter(element => element !== null);
}


export default defineEventHandler(async (event) => {
    const { id } = event.context.params as Record<string, string>;
    const data = await getData(id);
    payload = data;
    return {
        page: getProperties(payload),
    };
});
