import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactSubmitted: boolean = false
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private client: HttpClient) { }

  ngOnInit() {
    //navActivePage();
  }

  onSubmit() {
    console.log(this.contactForm);
    console.log(environment.apiUrl)
    this.client.post(environment.apiUrl + '/submitContact', this.contactForm.value).subscribe(res => {
      if (res['success']) {
        this.contactSubmitted = true;
        this.contactForm.reset()
      }
    })
  }

}
