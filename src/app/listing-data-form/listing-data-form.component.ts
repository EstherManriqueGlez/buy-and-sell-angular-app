import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.scss'
})
export class ListingDataFormComponent implements OnInit{
@Input() buttonText: any;
@Input() currentName = '';
@Input() currentDescription = '';
@Input() currentPrice = 0;

id: null | undefined | string;
name: string = '';
description: string = '';
price: number = 0;

@Output() onSubmit = new EventEmitter<Listing>();
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0
    })

  }

}
