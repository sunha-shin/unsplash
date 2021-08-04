export const composePhotosGroups = (data) => {
    const groups = [[], [], []];
    const groupsHeight = [0, 0, 0];

    for (let i = 0; i < data.length; i++) {
        const ratioHeight = data[i].height / data[i].width;
        const minHeight = Math.min(...groupsHeight);
        const minHeightIndex = groupsHeight.indexOf(minHeight);
        groups[minHeightIndex].push(data[i]);
        groupsHeight[minHeightIndex] = groupsHeight[minHeightIndex] + ratioHeight;
    }

    return groups;
};

export const composeFormatNumber = (inputNumber) => {
    let formetedNumber=(Number(inputNumber)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    let splitArray=formetedNumber.split('.');
    if(splitArray.length>1){
        formetedNumber=splitArray[0];
    }
    return(formetedNumber);
};

export const abbreviateNumber = (value) => {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "K", "M", "B", "T"];
        var suffixNum = Math.floor(("" + value).length / 3);
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
            if (dotLessShortValue.length <= 2) {
                break;
            }
        }
        if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
}