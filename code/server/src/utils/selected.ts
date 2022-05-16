
const select = {
    user: ["userId", "username", "name", "email", "gender", "bod", "phone", "address", "job", "type", "reward", "company"]
}

export const makeSelected = (entity: string) => {
    return select[entity].reduce((r, i) => {
        r[i] = true;
        return r;
    }, Object.assign({}));
}