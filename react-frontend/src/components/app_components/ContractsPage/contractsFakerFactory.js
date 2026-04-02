
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
title: faker.lorem.sentence(1),
vendorName: faker.lorem.sentence(1),
type: faker.lorem.sentence(1),
startDate: faker.lorem.sentence(1),
endDate: faker.lorem.sentence(1),
contractValue: faker.lorem.sentence(1),
currency: faker.lorem.sentence(1),
paymentTerms: faker.lorem.sentence(1),
renewalType: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
contractOwner: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
