const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("incidents service", async () => {
  let thisService;
  let incidentCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("incidents");

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
    assert.ok(thisService, "Registered the service (incidents)");
  });

  describe("#create", () => {
    const options = {"title":"new value","relatedContract":"new value","vendorName":"new value","type":"new value","description":"new value","reportedDate":"2026-04-02T05:47:27.753Z","severity":"new value","assignedTo":"new value","status":"new value","resolutionDate":"2026-04-02T05:47:27.753Z"};

    beforeEach(async () => {
      incidentCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new incident", () => {
      assert.strictEqual(incidentCreated.title, options.title);
assert.strictEqual(incidentCreated.relatedContract, options.relatedContract);
assert.strictEqual(incidentCreated.vendorName, options.vendorName);
assert.strictEqual(incidentCreated.type, options.type);
assert.strictEqual(incidentCreated.description, options.description);
assert.strictEqual(incidentCreated.reportedDate.toISOString(), options.reportedDate);
assert.strictEqual(incidentCreated.severity, options.severity);
assert.strictEqual(incidentCreated.assignedTo, options.assignedTo);
assert.strictEqual(incidentCreated.status, options.status);
assert.strictEqual(incidentCreated.resolutionDate.toISOString(), options.resolutionDate);
    });
  });

  describe("#get", () => {
    it("should retrieve a incident by ID", async () => {
      const retrieved = await thisService.Model.findById(incidentCreated._id);
      assert.strictEqual(retrieved._id.toString(), incidentCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"title":"updated value","relatedContract":"updated value","vendorName":"updated value","type":"updated value","description":"updated value","reportedDate":"2026-04-02T05:47:27.753Z","severity":"updated value","assignedTo":"updated value","status":"updated value","resolutionDate":"2026-04-02T05:47:27.753Z"};

    it("should update an existing incident ", async () => {
      const incidentUpdated = await thisService.Model.findByIdAndUpdate(
        incidentCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(incidentUpdated.title, options.title);
assert.strictEqual(incidentUpdated.relatedContract, options.relatedContract);
assert.strictEqual(incidentUpdated.vendorName, options.vendorName);
assert.strictEqual(incidentUpdated.type, options.type);
assert.strictEqual(incidentUpdated.description, options.description);
assert.strictEqual(incidentUpdated.reportedDate.toISOString(), options.reportedDate);
assert.strictEqual(incidentUpdated.severity, options.severity);
assert.strictEqual(incidentUpdated.assignedTo, options.assignedTo);
assert.strictEqual(incidentUpdated.status, options.status);
assert.strictEqual(incidentUpdated.resolutionDate.toISOString(), options.resolutionDate);
    });
  });

  describe("#delete", async () => {
    it("should delete a incident", async () => {
      await app
        .service("users")
        .Model.findByIdAndDelete(usersServiceResults._id);

      ;

      const incidentDeleted = await thisService.Model.findByIdAndDelete(incidentCreated._id);
      assert.strictEqual(incidentDeleted._id.toString(), incidentCreated._id.toString());
    });
  });
});