import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import {protectSheetData} from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  @ViewChild("spreadsheet")
  public ssObj: SpreadsheetComponent|undefined;

  public data:object = protectSheetData();

  public protectOptions:object = { selectCells: true }
 
  public onCreated(){
    this.ssObj?.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'EMI Schedule!A1:F1');
    this.ssObj?.numberFormat('$#,##0.00', 'EMI Schedule!C2:F13');

    this.ssObj?.protectSheet(1, {selectCells: true}, 'syncfusion')
    // this.ssObj?.unprotectSheet(0);
    this.ssObj?.lockCells("B1:C9",false)
  }
}
