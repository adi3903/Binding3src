import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public str="";
  public str1="";
  public str2="";
  public fun()
  {
    this.str="Educating for better tomorrow.";
  }
  public UPPER()
  {
    this.str1="MARVELLOUS INFOSYSTEMS";
  }
  public LOWER()
  {
    this.str2="marvellous infosystems";
  }
}
