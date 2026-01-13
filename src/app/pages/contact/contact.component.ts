import { CommonModule } from '@angular/common';
import { Component, computed, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, ContactFormComponent]
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // Contact page initialization
  }

  contactItems = computed(()=> this.contactService.infoItems())
  contactHeader = computed (()=>this.contactService.contactHeader());
}