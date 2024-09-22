export default function convertDateObjToPtBrDate(date: Date): string {
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

const padZero = (value: number): string => String(value).padStart(2, '0');
