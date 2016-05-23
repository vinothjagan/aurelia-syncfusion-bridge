export class ConditionalFormat {
	constructor() {
		this.scroll = { height: "100%", width: "100%", isResponsive: "true" };
		this.range = [{
			dataSource : [
               { "Item Name": "Text contains with Loafers", Date: "Loafers", Quantity: "", Price: "Date occur with 02/04/2014", Amount: "05/03/2013", Discount: "", Netamount: "Less than 30", Value: "5"},
               { "Item Name": "", Date: "Casual Shoes", Quantity: "", Price: "", Amount: "06/23/2014", Discount: "", Netamount: "", Value: "56" },
               { "Item Name": "", Date: "Loafers", Quantity: "", Price: "", Amount: "07/22/2014", Discount: "", Netamount: "", Value: "24" },
               { "Item Name": "", Date: "Formal Shoes", Quantity: "", Price: "", Amount: "02/04/2014", Discount: "", Netamount: "", Value: "12"},
               { "Item Name": "", Date: "Sandals & Floaters", Quantity: "", Price: "", Amount: "11/30/2014", Discount: "", Netamount: "", Value: "36" },
               { "Item Name": "", Date: "", Quantity: "", Price: "", Amount: "", Discount: "", Netamount: "", Value: "", Value1: "", Tax:"", Tax1: "" },
               { "Item Name": "Between 400 to 500", Date: "273", Quantity: "", Price: "Greater than 5000", Amount: "5003", Discount: "", Netamount: "Equal to 20", Value: "21"},
               { "Item Name": "", Date: "345", Quantity: "", Price: "", Amount: "3434", Discount: "", Netamount: "", Value: "34", Value1: "" },
               { "Item Name": "", Date: "494", Quantity: "", Price: "", Amount: "7553", Discount: "", Netamount: "", Value: "20", Value1: "" },
               { "Item Name": "", Date: "506", Quantity: "", Price: "", Amount: "2364", Discount: "", Netamount: "", Value: "20", Value1: "" },
               { "Item Name": "", Date: "453", Quantity: "", Price: "", Amount: "6788", Discount: "", Netamount: "", Value: "23", Value1: ""},
            ], startCell: "A1"
		}];
	}
    loadcomplete(event) {
        var xlObj = $("#Spreadsheet1").ejSpreadsheet("instance"), xlFormat = xlObj.XLFormat, xlCFormat = xlObj.XLCFormat, args = event.detail;
        xlObj.sheetRename("Conditional Formatting");
        xlObj.setWidthToColumns([ 165, 130, 37, 165, 130, 37, 129, 132 ]);
        xlObj.mergeCells("A1:A5", true);
        xlObj.mergeCells("D1:D5", true);
        xlObj.mergeCells("G1:G5", true);
        xlObj.mergeCells("G7:G11", true);
        xlObj.mergeCells("A7:A11", true);
        xlObj.mergeCells("D7:D11", true);
        xlCFormat.setCFRule({ "action": "greaterthan", "input1": "5000", "color": "redft", "range": "E7:E11" });
        xlCFormat.setCFRule({ "action": "lessthan", "input1": "30", "color": "yellowft", "range": "H1:H5" });
        xlCFormat.setCFRule({ "action": "between", "input1": "400", "input2": "500", "color": "greenft", "range": "B7:B11" });
        xlCFormat.setCFRule({ "action": "equalto", "input1": "20", "color": "redf", "range": "H7:H11" });
        xlCFormat.setCFRule({ "action": "textcontains", "input1": "loafers", "color": "redt", "range": "B1:B5" });
        xlCFormat.setCFRule({ "action": "dateoccur", "input1": "02/04/2014", "color": "redft", "range": "E1:E5" });
        xlFormat.format({ "style": { "font-weight": "bold", "font-size": "10pt", "vertical-align": "middle", "text-align": "center" } }, "A1:A13");
        xlFormat.format({ "style": { "font-weight": "bold", "font-size": "10pt", "vertical-align": "middle", "text-align": "center" } }, "D1:D13");
        xlFormat.format({ "style": { "font-weight": "bold", "font-size": "10pt", "vertical-align": "middle", "text-align": "center" } }, "G1:G7");
        xlObj.performSelection("B1");
    }
}