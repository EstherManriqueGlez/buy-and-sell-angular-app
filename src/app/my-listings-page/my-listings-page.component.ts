import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-listings-page',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.scss'
})
export class MyListingsPageComponent implements OnInit{
  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }

  onDeleteClicked(listingId: string): void {
    alert(`Deleting your listing with id ${listingId}`);
  }

}
