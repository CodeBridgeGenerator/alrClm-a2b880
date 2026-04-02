
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(""),
type: faker.lorem.sentence(""),
email: faker.lorem.sentence(""),
phoneNo: faker.lorem.sentence(""),
address: faker.lorem.sentence(""),
registrationNo: faker.lorem.sentence(""),
contractStartDate: faker.lorem.sentence(""),
contractEndDate: faker.lorem.sentence(""),
status: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
