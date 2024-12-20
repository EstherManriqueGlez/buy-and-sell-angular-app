import { Component, inject, Injectable, OnInit } from '@angular/core';
import { Listing } from '../types';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListingsService } from '../listings.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.scss',
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService
      .getListings()
      .subscribe((listings) => (this.listings = listings));
  }
}
