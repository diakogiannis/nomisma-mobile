import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToastController} from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';
import {Network} from '@ionic-native/network/ngx';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public routeUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private network: Network,
              private toastController: ToastController, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    if (this.network.type !== 'none'){
      this.routeUrl = this.activatedRoute.snapshot.paramMap.get('id');
    }else{
      if (this.activatedRoute.snapshot.paramMap.get('id') === '' ) {
        this.routeUrl = 'https://nomisma.com.cy';
        this.presentToast();
      }
    }

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }


}
