export class MovieTemplate {
	constructor() {
        this.scroll = { height: "100%", width: "100%", isResponsive: "true" };
		this.range = [{ 
			dataSource: [
				{ no: "No", year: "YEAR", title: "TITLE", review: "REVIEW", actors: "STARRING ACTORS", director: "DIRECTOR", genre: "GENRE", rating: "RATING", format: "FORMAT", comments: "COMMENTS" },
                { "no": 1, "year": 1994, "title": "Forrest Gump", "review": "5 Stars", "actors": "Tom Hanks, Robin Wright, Gary Sinise", "director": "Robert Zemeckis", "genre": "Drama", "rating": "PG-13", "format": "DVD", "comments": "Based on the 1986 novel of the same name by Winston Groom" },
                { "no": 2, "year": 1946, "title": "It’s a Wonderful Life", "review": "2 Stars", "actors": "James Stewart, Donna Reed, Lionel Barrymore ", "director": "Frank Capra", "genre": "Drama", "rating": "G", "format": "VHS", "comments": "Colorized version" },
                { "no": 3, "year": 1988, "title": "Big", "review": "4 Stars", "actors": "Tom Hanks, Elizabeth Perkins, Robert Loggia ", "director": "Penny Marshall", "genre": "Comedy", "rating": "PG", "format": "DVD", "comments": "" },
                { "no": 4, "year": 1954, "title": "Rear Window", "review": "3 Stars", "actors": "James Stewart, Grace Kelly, Wendell Corey ", "director": "Alfred Hitchcock", "genre": "Suspense", "rating": "PG", "format": "Blu-ray", "comments": "" },
    		], showHeader: "true", startCell: "B3"}];
        this.import = {importMapper: "http://js.syncfusion.com/ExportingServices/api/JSXLExport/Import"};
    }
    loadcomplete(args) {
		var xlObj = $("#Spreadsheet1").ejSpreadsheet("instance"), xlFormat = xlObj.XLFormat;
		xlObj.setWidthToColumns([30, 55, 63, 120, 80, 215, 90, 98, 80, 85, 323 ]);
		xlFormat.format({ "style": { "background-color": "#000000", "color" : "#FFFFFF", "font-size": "8pt" } }, "A1:V40");
		xlFormat.format({ "style": { "background-color": "#ffcb0d" } }, "A1:K1");
		xlFormat.format({ "style": { "background-color": "#ffcb0d", "font-size": "9pt", color:"#000000", "font-weight":"bold" } }, "B3:K3");
		xlObj.XLShape.setPicture('A1', "../images/spreadsheet/mv.png", 1275, 160);
		xlObj.setHeightToRows([162, 25, 25, 35, 35, 35, 35]);
		xlObj.XLFilter.filter("B3:K7");
		xlFormat.format({ "style": { "background-color": "#262626" } }, "B5:K5");			    
		xlFormat.format({ "style": { "background-color": "#262626" } }, "B7:K7");	
		xlFormat.format({ "style": { "text-align": "left" } }, "B4:C7");	
        xlFormat.format({ "style": { "vertical-align": "middle" } }, "B4:K7");				
		$("#Spreadsheet1_picture1").css("background-color","transparent");    		
   }
}