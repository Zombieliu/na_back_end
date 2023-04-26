import { ApiCall } from "tsrpc";
import {Client} from "@notionhq/client";
import {
    ReqGetAllProjectDetails,
    ResGetAllProjectDetails
} from "../../../shared/protocols/v1/Project/PtlGetAllProjectDetails";


export default async function (call: ApiCall<ReqGetAllProjectDetails, ResGetAllProjectDetails>) {
    // Error

    const notion = new Client({ auth: 'secret_yVl4JORAYrT3sbqpjREhtZLYCRUv942OOQAwtb4VDHf' })
    const databaseId = '1fe47fc1fe334c8b8557aab7639ae40f'
    const response = await notion.databases.query({
        database_id: databaseId,
    });

    let time = new Date();
    // Success


    await call.succ({
        project_details:JSON.stringify(response.results),
        time
    });








}
