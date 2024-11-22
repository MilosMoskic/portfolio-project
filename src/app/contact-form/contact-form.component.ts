import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface ContactForm {
  from_name: string;
  to_name: string;
  from_email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  form: FormGroup;
  emailSent = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      to_name: ['Mole'],
      from_email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  send() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formData = this.form.value;

    emailjs.send('service_5ynfvn2', 'template_7e6z2ts', formData, {
      publicKey: 'vmCfaJKTM3uvFCTwp',
    });

    setTimeout(() => {
      this.emailSent = true;
      this.form.reset();
      setTimeout(() => (this.emailSent = false), 10000);
    }, 500);
  }
}
