const formatPrice = (price) => {
    const value = Number(price);

    if (!Number.isFinite(value)) return "0";

    if (value >= 1_000_000) {
        const million = value / 1_000_000;

        return `${Number(million.toFixed(1))} میلیون تومان`;
    }

    if (value >= 1_000) {
        const thousand = value / 1_000;

        return `${Number(thousand.toFixed(1))} هزار تومان`;
    }

    return value.toString();
};

export default formatPrice;