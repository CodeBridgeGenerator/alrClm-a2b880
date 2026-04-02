
    module.exports = function (app) {
        const modelName = "incidents";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            title: { type:  String , comment: "Title, p, false, true, true, true, true, true, true, , , , ," },
relatedContract: { type:  String , comment: "Related Contract, p, false, true, true, true, true, true, true, , , , ," },
vendorName: { type:  String , comment: "Vendor Name, p, false, true, true, true, true, true, true, , , , ," },
type: { type:  String , comment: "Type, p, false, true, true, true, true, true, true, , , , ," },
description: { type:  String , comment: "Description, p, false, true, true, true, true, true, true, , , , ," },
reportedDate: { type: Date, comment: "Reported Date, p_date, false, true, true, true, true, true, true, , , , ," },
severity: { type:  String , comment: "Severity, p, false, true, true, true, true, true, true, , , , ," },
assignedTo: { type:  String , comment: "Assigned To, p, false, true, true, true, true, true, true, , , , ," },
status: { type:  String , comment: "Status, p, false, true, true, true, true, true, true, , , , ," },
resolutionDate: { type: Date, comment: "Resolution Date, p_date, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };