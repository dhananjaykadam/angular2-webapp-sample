export class CommonMethods {
    public static getTimeString(date: Date): string {
        return "" + CommonMethods.pad(new Date(date).getHours()) + ":" + CommonMethods.pad(new Date(date).getMinutes());
    }
    public static setTimeString(time: string, date: Date): Date {
        let times: string[] = time.split(":");
        date.setHours(parseInt(times[0]));
        date.setMinutes(parseInt(times[1]));
        return date;
    }

    public static getyyyyddMMStringFromDate(date: Date) {
        return "" + date.getFullYear() + "-" + CommonMethods.pad(date.getMonth() + 1) + "-" + CommonMethods.pad(date.getDate());

    }
    private static pad(d: number): string {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }
}
