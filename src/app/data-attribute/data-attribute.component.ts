import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-attribute',
  standalone: true,
  imports: [],
  templateUrl: './data-attribute.component.html',
  styleUrl: './data-attribute.component.css'
})
export class DataAttributeComponent implements OnInit {
  ngOnInit(): void {
    const button = document.querySelector('button');
    const action = button?.dataset['action']; 
    const id = button?.dataset['id'];
    console.log(action); 
    console.log(id); 
  }
}
