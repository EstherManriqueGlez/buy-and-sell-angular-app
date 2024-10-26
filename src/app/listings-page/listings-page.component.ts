import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.scss',
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];


  ngOnInit(): void {
    this.listings = fakeListings;
  }
}
