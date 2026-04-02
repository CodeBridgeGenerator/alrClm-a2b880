
    module.exports = function (app) {
        const modelName = "contracts";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            title: { type:  String , comment: "Title, p, false, true, true, true, true, true, true, , , , ," },
vendorName: { type:  String , comment: "Vendor Name, p, false, true, true, true, true, true, true, , , , ," },
type: { type:  String , comment: "Type, p, false, true, true, true, true, true, true, , , , ," },
startDate: { type: Date, comment: "Start Date, p_date, false, true, true, true, true, true, true, , , , ," },
endDate: { type: Date, comment: "End Date, p_date, false, true, true, true, true, true, true, , , , ," },
contractValue: { type:  String , comment: "Contract Value, p, false, true, true, true, true, true, true, , , , ," },
currency: { type:  String , comment: "Currency, p, false, true, true, true, true, true, true, , , , ," },
paymentTerms: { type:  String , comment: "Payment Terms, p, false, true, true, true, true, true, true, , , , ," },
renewalType: { type:  String , comment: "Renewal Type, p, false, true, true, true, true, true, true, , , , ," },
status: { type:  String , comment: "Status, p, false, true, true, true, true, true, true, , , , ," },
contractOwner: { type:  String , comment: "Contract Owner, p, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };