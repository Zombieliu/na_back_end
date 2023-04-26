import { ApiCall } from "tsrpc";
import {ReqGetProjectDetails, ResGetProjectDetails} from "../../../shared/protocols/v1/Project/PtlGetProjectDetails";
import {Client} from "@notionhq/client";


export default async function (call: ApiCall<ReqGetProjectDetails, ResGetProjectDetails>) {
    // Error
    if (call.req.project_id === '') {
        await call.error('guild_id is empty');
        return;
    }

    const notion = new Client({ auth: 'secret_yVl4JORAYrT3sbqpjREhtZLYCRUv942OOQAwtb4VDHf' })
    const databaseId = '1fe47fc1fe334c8b8557aab7639ae40f'
    const response = await notion.databases.query({
        database_id: databaseId,
    });

    let time = new Date();

    let project_details = []
    for (let i=0;i<response.results.length;i++){
        // @ts-ignore
        if (response.results[i].properties.ID.rich_text[0].plain_text == call.req.project_id){
            // @ts-ignore
            project_details.push(response.results[i].properties)
        }
    }

    // Success
    await call.succ({
        project_details:JSON.stringify(project_details),
        time
    });








}
