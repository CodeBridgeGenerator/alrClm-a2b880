const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("workOrders service", async () => {
  let thisService;
  let workOrderCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("workOrders");

    // Create users here
    usersServiceResults = await app.service("users").Model.create(usersRefData);
    users = {
      createdBy: usersServiceResults[0]._id,
      updatedBy: usersServiceResults[0]._id,
    };
  });

  after(async () => {
    if (usersServiceResults) {
      await Promise.all(
        usersServiceResults.map((i) =>
          app.service("users").Model.findByIdAndDelete(i._id)
        )
      );
    }
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (workOrders)");
  });

  describe("#create", () => {
    const options = {"title":"new value","relatedContract":"new value","vendorName":"new value","workType":"new value","description":"new value","startDate":"2026-04-02T05:47:27.891Z","dueDate":"2026-04-02T05:47:27.891Z","assignedTo":"new value","priority":"new value","status":"new value","completionDate":"2026-04-02T05:47:27.891Z"};

    beforeEach(async () => {
      workOrderCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new workOrder", () => {
      assert.strictEqual(workOrderCreated.title, options.title);
assert.strictEqual(workOrderCreated.relatedContract, options.relatedContract);
assert.strictEqual(workOrderCreated.vendorName, options.vendorName);
assert.strictEqual(workOrderCreated.workType, options.workType);
assert.strictEqual(workOrderCreated.description, options.description);
assert.strictEqual(workOrderCreated.startDate.toISOString(), options.startDate);
assert.strictEqual(workOrderCreated.dueDate.toISOString(), options.dueDate);
assert.strictEqual(workOrderCreated.assignedTo, options.assignedTo);
assert.strictEqual(workOrderCreated.priority, options.priority);
assert.strictEqual(workOrderCreated.status, options.status);
assert.strictEqual(workOrderCreated.completionDate.toISOString(), options.completionDate);
    });
  });

  describe("#get", () => {
    it("should retrieve a workOrder by ID", async () => {
      const retrieved = await thisService.Model.findById(workOrderCreated._id);
      assert.strictEqual(retrieved._id.toString(), workOrderCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"title":"updated value","relatedContract":"updated value","vendorName":"updated value","workType":"updated value","description":"updated value","startDate":"2026-04-02T05:47:27.891Z","dueDate":"2026-04-02T05:47:27.891Z","assignedTo":"updated value","priority":"updated value","status":"updated value","completionDate":"2026-04-02T05:47:27.891Z"};

    it("should update an existing workOrder ", async () => {
      const workOrderUpdated = await thisService.Model.findByIdAndUpdate(
        workOrderCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(workOrderUpdated.title, options.title);
assert.strictEqual(workOrderUpdated.relatedContract, options.relatedContract);
assert.strictEqual(workOrderUpdated.vendorName, options.vendorName);
assert.strictEqual(workOrderUpdated.workType, options.workType);
assert.strictEqual(workOrderUpdated.description, options.description);
assert.strictEqual(workOrderUpdated.startDate.toISOString(), options.startDate);
assert.strictEqual(workOrderUpdated.dueDate.toISOString(), options.dueDate);
assert.strictEqual(workOrderUpdated.assignedTo, options.assignedTo);
assert.strictEqual(workOrderUpdated.priority, options.priority);
assert.strictEqual(workOrderUpdated.status, options.status);
assert.strictEqual(workOrderUpdated.completionDate.toISOString(), options.completionDate);
    });
  });

  describe("#delete", async () => {
    it("should delete a workOrder", async () => {
      await app
        .service("users")
        .Model.findByIdAndDelete(usersServiceResults._id);

      ;

      const workOrderDeleted = await thisService.Model.findByIdAndDelete(workOrderCreated._id);
      assert.strictEqual(workOrderDeleted._id.toString(), workOrderCreated._id.toString());
    });
  });
});