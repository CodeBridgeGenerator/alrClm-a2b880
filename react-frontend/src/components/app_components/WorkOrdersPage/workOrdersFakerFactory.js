
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
title: faker.date.past(""),
relatedContract: faker.date.past(""),
vendorName: faker.date.past(""),
workType: faker.date.past(""),
description: faker.date.past(""),
startDate: faker.date.past(""),
dueDate: faker.date.past(""),
assignedTo: faker.date.past(""),
priority: faker.date.past(""),
status: faker.date.past(""),
completionDate: faker.date.past(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
