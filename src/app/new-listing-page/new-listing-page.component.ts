import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.scss'
})
export class NewListingPageComponent implements OnInit{
  name: string = '';
  description: string = '';
  price: string = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert('Creating a new listing...');
    this.router.navigateByUrl('/my-listings');
  }

}
