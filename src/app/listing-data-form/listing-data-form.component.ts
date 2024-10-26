import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.scss'
})
export class ListingDataFormComponent implements OnInit{
@Input() buttonText: any;

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
