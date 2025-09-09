import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    // Clean up any resources if needed
    // For this simple form, nothing to clean up
  }

  ngOnInit(): void {
    emailjs.init('1bqPyg8t0kHU-85Co');
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.valid) {

      const templateParams = {

        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      }
      emailjs.send('service_frefugf', 'template_macifk1', templateParams).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message! I will get back to you soon.');
        this.contactForm.reset();
        this.submitted = false;
      }).catch((error) => {
        console.error('FAILED...', error);
        alert('Sorry, there was an error sending your message. Please try again.');
        this.submitted = false;
      });
    }
  }
}