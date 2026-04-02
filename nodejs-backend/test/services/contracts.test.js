const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("contracts service", async () => {
  let thisService;
  let contractCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("contracts");

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
    assert.ok(thisService, "Registered the service (contracts)");
  });

  describe("#create", () => {
    const options = {"title":"new value","vendorName":"new value","type":"new value","startDate":"2026-04-02T05:47:27.561Z","endDate":"2026-04-02T05:47:27.561Z","contractValue":"new value","currency":"new value","paymentTerms":"new value","renewalType":"new value","status":"new value","contractOwner":"new value"};

    beforeEach(async () => {
      contractCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new contract", () => {
      assert.strictEqual(contractCreated.title, options.title);
assert.strictEqual(contractCreated.vendorName, options.vendorName);
assert.strictEqual(contractCreated.type, options.type);
assert.strictEqual(contractCreated.startDate.toISOString(), options.startDate);
assert.strictEqual(contractCreated.endDate.toISOString(), options.endDate);
assert.strictEqual(contractCreated.contractValue, options.contractValue);
assert.strictEqual(contractCreated.currency, options.currency);
assert.strictEqual(contractCreated.paymentTerms, options.paymentTerms);
assert.strictEqual(contractCreated.renewalType, options.renewalType);
assert.strictEqual(contractCreated.status, options.status);
assert.strictEqual(contractCreated.contractOwner, options.contractOwner);
    });
  });

  describe("#get", () => {
    it("should retrieve a contract by ID", async () => {
      const retrieved = await thisService.Model.findById(contractCreated._id);
      assert.strictEqual(retrieved._id.toString(), contractCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"title":"updated value","vendorName":"updated value","type":"updated value","startDate":"2026-04-02T05:47:27.561Z","endDate":"2026-04-02T05:47:27.561Z","contractValue":"updated value","currency":"updated value","paymentTerms":"updated value","renewalType":"updated value","status":"updated value","contractOwner":"updated value"};

    it("should update an existing contract ", async () => {
      const contractUpdated = await thisService.Model.findByIdAndUpdate(
        contractCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(contractUpdated.title, options.title);
assert.strictEqual(contractUpdated.vendorName, options.vendorName);
assert.strictEqual(contractUpdated.type, options.type);
assert.strictEqual(contractUpdated.startDate.toISOString(), options.startDate);
assert.strictEqual(contractUpdated.endDate.toISOString(), options.endDate);
assert.strictEqual(contractUpdated.contractValue, options.contractValue);
assert.strictEqual(contractUpdated.currency, options.currency);
assert.strictEqual(contractUpdated.paymentTerms, options.paymentTerms);
assert.strictEqual(contractUpdated.renewalType, options.renewalType);
assert.strictEqual(contractUpdated.status, options.status);
assert.strictEqual(contractUpdated.contractOwner, options.contractOwner);
    });
  });

  describe("#delete", async () => {
    it("should delete a contract", async () => {
      await app
        .service("users")
        .Model.findByIdAndDelete(usersServiceResults._id);

      ;

      const contractDeleted = await thisService.Model.findByIdAndDelete(contractCreated._id);
      assert.strictEqual(contractDeleted._id.toString(), contractCreated._id.toString());
    });
  });
});