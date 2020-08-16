export default function convertHourToMinutes(time: string) {

    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutos = (hour * 60) + minutes;
    return timeInMinutos;
}