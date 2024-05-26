export const getTime = () => {
    let hour: number = new Date().getHours();
    if (hour <= 9) {
        return "早上";
    } else if (hour < 12) {
        return "中午";
    } else if (hour < 18) {
        return "下午";
    } else if (hour < 24) {
        return "晚上";
    }
}