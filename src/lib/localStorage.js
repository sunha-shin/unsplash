const LocalStorageTypes = {
    ACCESS_TOKEN: 'accessToken',
}

export const jsonParse = (data) => {
    try {
        return JSON.parse(data);
    } catch (err) {
        return data;
    }
};

const factory = (type) => {
    return {
        get: () => jsonParse(window.localStorage.getItem(type)),
        set: (data) => window.localStorage.setItem(type, JSON.stringify(data)),
        remove: () => window.localStorage.removeItem(type),
    }
};

export const LocalStorage = {
    accessToken: factory(LocalStorageTypes.ACCESS_TOKEN)
}