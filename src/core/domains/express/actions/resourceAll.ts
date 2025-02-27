import { IRouteResourceOptions } from '@src/core/domains/express/interfaces/IRouteResourceOptions';
import ResourceAllService from '@src/core/domains/express/services/Resources/ResourceAllService';
import ResourceErrorService from '@src/core/domains/express/services/Resources/ResourceErrorService';
import { BaseRequest } from "@src/core/domains/express/types/BaseRequest.t";
import { Response } from 'express';

/**
 * Finds all records in the resource's repository
 *
 * @param {BaseRequest} req - The request object
 * @param {Response} res - The response object
 * @param {IRouteResourceOptions} options - The options object
 * @returns {Promise<void>}
 */
export default async (req: BaseRequest, res: Response, options: IRouteResourceOptions): Promise<void> => {
    try {
        const resourceAllService = new ResourceAllService();
        await resourceAllService.handler(req, res, options);
    }
    catch (err) {
        ResourceErrorService.handleError(req, res, err)
    }
}