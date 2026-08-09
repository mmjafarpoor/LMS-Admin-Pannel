import moment from "jalali-moment";

export const toShamsiDate = (date) => {
    if (!date) return "";

    return moment(date)
        .locale("fa")
        .format("YYYY/MM/DD");
};

export const toShamsiDateTime = (date) => {
    if (!date) return "";

    return moment(date)
        .locale("fa")
        .format("YYYY/MM/DD HH:mm");
};