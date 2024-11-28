import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  foto: string | null = null;

  constructor(private camera: Camera) {}

  tomarFoto() {
    const opciones: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
    };

    this.camera.getPicture(opciones).then(
      (imageData:string) => {
        this.foto = 'data:image/jpeg;base64,' + imageData;
      },
      (error: any) => {
        console.error('Error al tomar la foto');
      }
    );
  }
}
