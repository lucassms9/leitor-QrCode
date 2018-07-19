import { Component } from '@angular/core';
import {ModalController, NavController, ToastController} from 'ionic-angular';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private scanSub: any ;
  constructor(public navCtrl: NavController,
              private qrScanner: QRScanner,
              private modalController: ModalController,
              private toastCtrl: ToastController) {

  }

  scanOnclick() {
    let modal = this.modalController.create('ScanQrPage');
    modal.present();
  }

}
