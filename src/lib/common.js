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
