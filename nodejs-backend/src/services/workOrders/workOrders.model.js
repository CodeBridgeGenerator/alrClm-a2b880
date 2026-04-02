
    module.exports = function (app) {
        const modelName = "work_orders";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            title: { type:  String , comment: "Title, p, false, true, true, true, true, true, true, , , , ," },
relatedContract: { type:  String , comment: "Related Contract, p, false, true, true, true, true, true, true, , , , ," },
vendorName: { type:  String , comment: "Vendor Name, p, false, true, true, true, true, true, true, , , , ," },
workType: { type:  String , comment: "Work Type, p, false, true, true, true, true, true, true, , , , ," },
description: { type:  String , comment: "Description, p, false, true, true, true, true, true, true, , , , ," },
startDate: { type: Date, comment: "Start Date, p_date, false, true, true, true, true, true, true, , , , ," },
dueDate: { type: Date, comment: "Due Date, p_date, false, true, true, true, true, true, true, , , , ," },
assignedTo: { type:  String , comment: "Assigned To, p, false, true, true, true, true, true, true, , , , ," },
priority: { type:  String , comment: "Priority, p, false, true, true, true, true, true, true, , , , ," },
status: { type:  String , comment: "Status, p, false, true, true, true, true, true, true, , , , ," },
completionDate: { type: Date, comment: "Completion Date, p_date, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };