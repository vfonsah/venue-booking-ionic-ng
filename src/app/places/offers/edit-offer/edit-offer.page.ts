import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private placesService: PlacesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parMap => {
      if (!parMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(parMap.get('placeId'));
      this.form = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.place.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)]
        })
      })
    });
  }

  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }

}
