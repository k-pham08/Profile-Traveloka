
const select = {
    user: ["userId", "username", "name", "email", "gender", "dob", "phone", "address", "type", "reward", "services", "companyName"]
}

export const makeSelected = (entity: string) => {
    return select[entity].reduce((r, i) => {
        r[i] = true;
        return r;
    }, Object.assign({}));
}