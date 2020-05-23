import { Component } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  encodedData: any;
  scanner:boolean=true;
    scannedData: {};
    barcodeScannerOptions: BarcodeScannerOptions;
  
    constructor(private barcodeScanner: BarcodeScanner) {
      this.encodedData = "https://www.google.com";
      //Options
      this.barcodeScannerOptions = {
        showTorchButton: true,
        showFlipCameraButton: true
      };
    }
  
    scanBar() {
      this.barcodeScanner
        .scan()
        .then(barcodeData => {
          alert("Barcode data " + JSON.stringify(barcodeData));
          this.scannedData = barcodeData;
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  
    generateBar() {
      this.barcodeScanner
        .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodedData)
        .then(
          encodedData => {
            console.log(encodedData);
            this.encodedData = encodedData;
          },
          err => {
            console.log("Error occured : " + err);
          }
        );
    }

    onSegmentChnage(event){
      this.scanner=!this.scanner;
    }

}
