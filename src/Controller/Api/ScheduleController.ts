import {Request, Response} from "express";

export class ScheduleController {
    public getSchedules(req: Request, res: Response): void {
        res.json({
            "sunday": [],
            "monday": [{"hour": "19:00", "username": "Dar"},{"hour": "18:00", "username": "Azugi"}],
            "tuesday": [{"hour": "19:00", "username": "Dar"},{"hour": "18:00", "username": "Azugi"}],
            "wednesday": [{"hour": "19:00", "username": "Dar"},{"hour": "18:00", "username": "Azugi"}],
            "thursday": [{"hour": "19:00", "username": "Dar"},{"hour": "18:00", "username": "Azugi"}],
        });
    }
    public upsertSchedule(req: Request, res: Response): void {
        console.log(req.body);
        res.json({"status": "ok"});
    }

    public deleteSchedule(req: Request, res: Response): void {
        res.json({message: "Sorry can't help you"});
    }
}
