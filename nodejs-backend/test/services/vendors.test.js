const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("vendors service", async () => {
  let thisService;
  let vendorCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("vendors");

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
    assert.ok(thisService, "Registered the service (vendors)");
  });

  describe("#create", () => {
    const options = {"name":"new value","type":"new value","email":"new value","phoneNo":"new value","address":"new value","registrationNo":"new value","contractStartDate":"2026-04-02T05:47:27.098Z","contractEndDate":"2026-04-02T05:47:27.098Z","status":"new value"};

    beforeEach(async () => {
      vendorCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new vendor", () => {
      assert.strictEqual(vendorCreated.name, options.name);
assert.strictEqual(vendorCreated.type, options.type);
assert.strictEqual(vendorCreated.email, options.email);
assert.strictEqual(vendorCreated.phoneNo, options.phoneNo);
assert.strictEqual(vendorCreated.address, options.address);
assert.strictEqual(vendorCreated.registrationNo, options.registrationNo);
assert.strictEqual(vendorCreated.contractStartDate.toISOString(), options.contractStartDate);
assert.strictEqual(vendorCreated.contractEndDate.toISOString(), options.contractEndDate);
assert.strictEqual(vendorCreated.status, options.status);
    });
  });

  describe("#get", () => {
    it("should retrieve a vendor by ID", async () => {
      const retrieved = await thisService.Model.findById(vendorCreated._id);
      assert.strictEqual(retrieved._id.toString(), vendorCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"name":"updated value","type":"updated value","email":"updated value","phoneNo":"updated value","address":"updated value","registrationNo":"updated value","contractStartDate":"2026-04-02T05:47:27.098Z","contractEndDate":"2026-04-02T05:47:27.098Z","status":"updated value"};

    it("should update an existing vendor ", async () => {
      const vendorUpdated = await thisService.Model.findByIdAndUpdate(
        vendorCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(vendorUpdated.name, options.name);
assert.strictEqual(vendorUpdated.type, options.type);
assert.strictEqual(vendorUpdated.email, options.email);
assert.strictEqual(vendorUpdated.phoneNo, options.phoneNo);
assert.strictEqual(vendorUpdated.address, options.address);
assert.strictEqual(vendorUpdated.registrationNo, options.registrationNo);
assert.strictEqual(vendorUpdated.contractStartDate.toISOString(), options.contractStartDate);
assert.strictEqual(vendorUpdated.contractEndDate.toISOString(), options.contractEndDate);
assert.strictEqual(vendorUpdated.status, options.status);
    });
  });

  describe("#delete", async () => {
    it("should delete a vendor", async () => {
      await app
        .service("users")
        .Model.findByIdAndDelete(usersServiceResults._id);

      ;

      const vendorDeleted = await thisService.Model.findByIdAndDelete(vendorCreated._id);
      assert.strictEqual(vendorDeleted._id.toString(), vendorCreated._id.toString());
    });
  });
});