import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/layout.service';



@Component({
  selector: 'app-requisitions',
  templateUrl: './manage-requisitions.component.html',
  styleUrls: ['.//manage-requisitions.component.css']
})
export class ManageRequisitionsComponent implements OnInit {

  requistionsData: any = [];

  constructor(private layoutService: LayoutService,
    private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.layoutService.pageTitle = "Requisitions";
    this.layoutService.componentTitle = "View Requisitions";

    this.representatives = [
      { name: "Amy Elsner", image: 'amyelsner.png' },
      { name: "Anna Fali", image: 'annafali.png' },
      { name: "Asiya Javayant", image: 'asiyajavayant.png' },
      { name: "Bernardo Dominic", image: 'bernardodominic.png' },
      { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
      { name: "Ioni Bowcher", image: 'ionibowcher.png' },
      { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
      { name: "Onyama Limba", image: 'onyamalimba.png' },
      { name: "Stephen Shaw", image: 'stephenshaw.png' },
      { name: "Xuxue Feng", image: 'xuxuefeng.png' }
    ];
    this.loading = true;
    this.getRequisitions();

  }


  //prime ng table 
  customers: any = [];

  totalRecords: number = 0;

  cols: any = [];

  loading: boolean = false;

  representatives: any = [];

  selectAll: boolean = false;

  selectedCustomers: any = [];
  value: any;
  onSelectionChange(value: any) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedCustomers = value;
  }
  onSelectAllChange(event: any) {
    const checked = event.checked;

    if (checked) {

      this.selectedCustomers = []
      this.selectAll = true;

    }
    else {
      this.selectedCustomers = [];
      this.selectAll = false;
    }
  }
  getRequisitions() {
    this.requistionsData = []
    this.httpClient.get('assets/jsonData/requisitionsTbl.json').subscribe((res: any) => {
      console.log(res)
      for (var i = 0; i < 100; i++) {
        this.requistionsData.push(res[i]);
        this.totalRecords=this.requistionsData.length;
        this.customers = res
            this.loading = false;

      }
    })
  }

}
