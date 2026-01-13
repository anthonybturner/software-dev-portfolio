import { computed, Injectable, signal } from '@angular/core';

export interface ContactInfoItem {
    iconClass?: string;
    label: string;
    value?: string;
    type?: 'header' | 'item';
}
export interface ContactSection{
    title: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(){}

    private allItems = signal<(ContactInfoItem | ContactSection)[]>([
        {
            title: 'Contact Information',
        },
        {
            iconClass: 'fas fa-envelope',
            label: 'Email',
            value: 'anthonybturner@icloud.com',
        },
        {
            iconClass: 'fas fa-phone',
            label: 'Phone',
            value: '+1 (518) 475-8019',
        },
        {
            iconClass: 'fas fa-map-marker-alt',
            label: 'Location',
            value: 'Kingston, NY',
        },
    ]);

    contactHeader = computed(()=> this.allItems()[0] as ContactSection);
    infoItems = computed(()=> this.allItems().splice(1) as ContactInfoItem[]);
}