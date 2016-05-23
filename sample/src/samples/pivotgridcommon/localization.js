export class BasicUse {
    constructor(){
      this.pivotData = {
      data: "http://bi.syncfusion.com/olap/msmdpump.dll;Locale Identifier= 1033;", //data
      catalog: "Adventure Works DW 2008 SE",
      cube: "Adventure Works",
      rows: [
          {
              fieldName: "[Date].[Fiscal]"
          }
      ],
      columns: [
          {
              fieldName: "[Customer].[Customer Geography]"
          }
      ],
      values: [
          {
              measures: [
                  {
                      fieldName: "[Measures].[Internet Sales Amount]",
                  }
              ],
              axis: "columns"
          }
      ]
    };
        this.target = 'Amount';
        this.Amount= 'en-US';
        this.locale = 'en-US';
        ej.PivotGrid.Locale["fr-FR"] = {
            ToolTipRow: "Rangée",
            ToolTipColumn: "Colonne",
            ToolTipValue: "Valeur"
        };
        ej.PivotGrid.Locale["es-ES"] = {
            ToolTipRow: "Herramienta Sugerencia Fila",
            ToolTipColumn: "Columna sobre herramientas",
            ToolTipValue: "Herramienta Sugerencia Valor"
        }
    }
    onChange(args){
        var pivotGrid = $('.e-pivotgrid').data("ejPivotGrid"), LCID;
        LCID = args.detail.text == "fr-FR" ? "1036" : args.detail.text == "es-ES" ? "1034" : "1033"
        pivotGrid.locale(args.detail.text);
        pivotGrid.model.dataSource.data = "http://bi.syncfusion.com/olap/msmdpump.dll;Locale Identifier= "+ LCID +";"
        pivotGrid.refreshPivotGrid();
    }
}
