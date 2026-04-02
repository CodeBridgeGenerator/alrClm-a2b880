
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
title: faker.lorem.sentence(1),
relatedContract: faker.lorem.sentence(1),
vendorName: faker.lorem.sentence(1),
type: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
reportedDate: faker.lorem.sentence(1),
severity: faker.lorem.sentence(1),
assignedTo: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
resolutionDate: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
