import { ServiceProto } from 'tsrpc-proto';
import { ReqHello, ResHello } from './v1/Hello/PtlHello';
import { ReqGetAllProjectDetails, ResGetAllProjectDetails } from './v1/Project/PtlGetAllProjectDetails';
import { ReqGetProjectDetails, ResGetProjectDetails } from './v1/Project/PtlGetProjectDetails';

export interface ServiceType {
    api: {
        "v1/Hello/Hello": {
            req: ReqHello,
            res: ResHello
        },
        "v1/Project/GetAllProjectDetails": {
            req: ReqGetAllProjectDetails,
            res: ResGetAllProjectDetails
        },
        "v1/Project/GetProjectDetails": {
            req: ReqGetProjectDetails,
            res: ResGetProjectDetails
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 11,
    "services": [
        {
            "id": 12,
            "name": "v1/Hello/Hello",
            "type": "api"
        },
        {
            "id": 14,
            "name": "v1/Project/GetAllProjectDetails",
            "type": "api"
        },
        {
            "id": 13,
            "name": "v1/Project/GetProjectDetails",
            "type": "api"
        }
    ],
    "types": {
        "v1/Hello/PtlHello/ReqHello": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "hello",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Hello/PtlHello/ResHello": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Project/PtlGetAllProjectDetails/ReqGetAllProjectDetails": {
            "type": "Interface"
        },
        "v1/Project/PtlGetAllProjectDetails/ResGetAllProjectDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_details",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Project/PtlGetProjectDetails/ReqGetProjectDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Project/PtlGetProjectDetails/ResGetProjectDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_details",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        }
    }
};