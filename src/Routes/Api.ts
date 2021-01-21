import express from "express";
import {ScheduleController} from "../Controller/Api/ScheduleController";

export function createApiRoutes(
    helpController: ScheduleController,
): express.Router {
    const router = express.Router();

    router.get(
        "/schedule",
        // validate(schema) // express-validation
        helpController.getSchedules.bind(helpController));

    router.post(
        "/schedule",
        // validate(schema) // express-validation
        helpController.upsertSchedule.bind(helpController));

    router.delete(
        "/schedule",
        // validate(schema) // express-validation
        helpController.deleteSchedule.bind(helpController));
    return router;
}
