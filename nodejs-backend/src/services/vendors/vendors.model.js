
    module.exports = function (app) {
        const modelName = "vendors";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            name: { type:  String , comment: "Name, p, false, true, true, true, true, true, true, , , , ," },
type: { type:  String , comment: "Type, p, false, true, true, true, true, true, true, , , , ," },
email: { type:  String , comment: "Email, p, false, true, true, true, true, true, true, , , , ," },
phoneNo: { type:  String , comment: "Phone No, p, false, true, true, true, true, true, true, , , , ," },
address: { type:  String , comment: "Address, p, false, true, true, true, true, true, true, , , , ," },
registrationNo: { type:  String , comment: "Registration No, p, false, true, true, true, true, true, true, , , , ," },
contractStartDate: { type: Date, comment: "Contract Start Date, p_date, false, true, true, true, true, true, true, , , , ," },
contractEndDate: { type: Date, comment: "Contract End Date, p_date, false, true, true, true, true, true, true, , , , ," },
status: { type:  String , comment: "Status, p, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };