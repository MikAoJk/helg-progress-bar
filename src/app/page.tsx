'use client';

import {add, differenceInSeconds, startOfWeek} from "date-fns";
import {nb} from "date-fns/locale/nb";
import ProgressBar from "@/components/ProgressBar";
import React, {useEffect, useState} from "react";

export default function Home() {

    const now: Date = new Date();
    const start: Date = startOfWeek(now, {locale: nb});
    const mondayStartOfWorkday: Date = add(start, {hours: 8});
    const fridayEndOfWorkDay: Date = add(start, {days: 4, hours: 16});
    const diffBetweenMondayWorkdayAndEow: number = differenceInSeconds(fridayEndOfWorkDay, mondayStartOfWorkday);
    const diffFromTuesday: number = differenceInSeconds(now, mondayStartOfWorkday);

    const [percentToEndOfWorkDayFriday, setpercentToEndOfWorkDayFriday] = useState<number>(clamp((diffFromTuesday / diffBetweenMondayWorkdayAndEow) * 100));


    useEffect(() => {
        const interval = setInterval(() => {
            setpercentToEndOfWorkDayFriday(clamp((diffFromTuesday / diffBetweenMondayWorkdayAndEow) * 100))
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <div className="flex flex-col items-center justify-between p-10">
            </div>
            <div className="flex min-h-screen flex-col items-center justify-between md:p-12">
                <ProgressBar progress={percentToEndOfWorkDayFriday}
                             progressText={"Prosent til helg"}/>
            </div>
        </main>
    )
}

function clamp(value: number) {
    return Math.max(Math.min(value, 100), 0);
}