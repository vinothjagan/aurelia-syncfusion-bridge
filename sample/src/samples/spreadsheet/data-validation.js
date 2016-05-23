export class Datavalidation {
    constructor() {
        this.scroll = { height: "100%", width: "100%", isResponsive: "true" };
	    this.range = [{
	       dataSource : [
               { ID: "Greater than 6", Type: "", TypeOfVisa: "Text Length Less than 35", Value: "", VisaFees: "Between 150 to 200", FNo: "", NoOfPassenger: "List", DDate: "", Date: "Greater than 07/09/2014", DTime: "", Time: "Greater than 11:23:23  AM" },
	           { ID: 1, Type: "", TypeOfVisa: "Business", Value: "", VisaFees: "$160.00", FNo: "", NoOfPassenger: "1", DDate: "", Date: "02/14/2014", DTime: "", Time: "11:34:32 AM" },
	           { ID: 2, Type: "", TypeOfVisa: "Religious Worker", Value: "", VisaFees: "$190.00", FNo: "", NoOfPassenger: "2", DDate: "", Date: "06/11/2014", DTime: "", Time: "05:56:32 AM" },
	           { ID: 3, Type: "", TypeOfVisa: "Temporary Workers/Employment or Trainees", Value: "", VisaFees: "$190.00", FNo: "", NoOfPassenger: "3", DDate: "", Date: "03/04/2012", DTime: "", Time: "07:16:22 AM" },
	           { ID: 4, Type: "", TypeOfVisa: "Transiting the United States", Value: "", VisaFees: "$160.00", FNo: "", NoOfPassenger: "4", DDate: "", Date: "07/27/2014", DTime: "", Time: "03:32:44 AM" },
	           { ID: 5, Type: "", TypeOfVisa: "Student, Academic", Value: "", VisaFees: "$160.00", FNo: "", NoOfPassenger: "5", DDate: "", Date: "11/21/2014", DTime: "", Time: "06:23:54 AM" },
	           { ID: 6, Type: "", TypeOfVisa: "Orphan (Intercountry Adoption)", Value: "", VisaFees: "$720.00", FNo: "", NoOfPassenger: "6", DDate: "", Date: "06/23/2014", DTime: "", Time: "11:22:59 AM" },
	           { ID: 7, Type: "", TypeOfVisa: "Exchange Visitors", Value: "", VisaFees: "$160.00", FNo: "", NoOfPassenger: "7", DDate: "", Date: "07/22/2014", DTime: "", Time: "10:55:53 AM" },
	           { ID: 8, Type: "", TypeOfVisa: "DV category Immigrant Visa", Value: "", VisaFees: "$360.00", FNo: "", NoOfPassenger: "8", DDate: "", Date: "07/22/2014", DTime: "", Time: "10:55:53 AM" },
	           { ID: 9, Type: "", TypeOfVisa: "Victims of Criminal Activity", Value: "", VisaFees: "$160.00", FNo: "", NoOfPassenger: "8", DDate: "", Date: "02/04/2014", DTime: "", Time: "03:44:34 AM" },
	           { ID: 10, Type: "", TypeOfVisa: "NAFTA Professionals", Value: "", VisaFees: "$160.00", FNo: "", NoOfPassenger: "9", DDate: "", Date: "11/30/2014", DTime: "", Time: "03:12:52 AM" },
	           { ID: 11, Type: "", TypeOfVisa: "Employment-Based Applications", Value: "", VisaFees: "$345.00", FNo: "", NoOfPassenger: "10", DDate: "", Date: "07/09/2014", DTime: "", Time: "11:32:14 AM" },
	           { ID: 12, Type:"",TypeOfVisa: "Intracompany Transferees", Value:"",VisaFees: "$190.00", FNo:"",NoOfPassenger: "11",DDate:"",Date: "10/31/2014", DTime:"", Time: "11:01:44 AM" },
	           { ID: 13, Type: "", TypeOfVisa: "Person with Extraordinary Ability", Value: "", VisaFees: "$190.00", FNo: "", NoOfPassenger: "12", DDate: "", Date: "07/22/2014", DTime: "", Time: "10:55:53 AM" },
	           { ID: 14, Type: "", TypeOfVisa: "Tourism", Value: "", VisaFees: "$160.00", FNo: "", NoOfPassenger: "13", DDate: "", Date: "10/31/2014", DTime: "", Time: "11:01:44 AM" },
            ], startCell: "A1"
        }];
    }
    loadcomplete(args) {
        var xlObj = $("#Spreadsheet1").ejSpreadsheet("instance"), values,xlFormat = xlObj.XLFormat, xlValidate = xlObj.XLValidate;
        xlObj.setWidthToColumns([120, 40, 210, 40, 160, 40, 85, 40, 190, 40, 200 ]);
        xlFormat.format({ "style": { "font-weight": "bold", "text-align": "center" } }, "A1:K1");
        xlFormat.format({ "type": "currency" }, "E2:E15");
        xlObj.sheetRename("Data Validation");
        values = ["Greater", "6"];
        xlValidate.applyDVRules("A2:A15", values, "number", true, true);
        xlValidate.highlightInvalidData("A2:A15");
        values = ["LessOrEqual", "35"];
        xlValidate.applyDVRules("C2:C15", values, "text", true, true);
        xlValidate.highlightInvalidData("C2:C15");
        values = ["Between", "150", "200"];
        xlValidate.applyDVRules("E2:E15", values, "decimal", true, true);
        xlValidate.highlightInvalidData("E2:E15");
        values = ["list", "=A4:A10"];
        xlValidate.applyDVRules("G2:G15", values, "list", true, true);
        xlValidate.highlightInvalidData("G2:G15");
        values = ["Greater", "07/09/2014"];
        xlValidate.applyDVRules("I2:I15", values, "date", true, true);
        xlValidate.highlightInvalidData("I2:I15");
        values = ["GreaterOrEqual", "11:23:23"];
        xlValidate.applyDVRules("K2:K15", values, "time", true, true);
        xlValidate.highlightInvalidData("K2:K15");
        xlObj.performSelection("A2");			
    }
}