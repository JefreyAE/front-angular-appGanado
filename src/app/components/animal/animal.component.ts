import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, Params, NavigationStart, NavigationEnd} from '@angular/router';
import { Animal } from '../../models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
  providers: [ AnimalService ]
})
export class AnimalComponent implements OnInit {

  public id: string = "";


  public page: string = "";
  public redirection: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
  ) { 
    
    
  }

  ngOnChanges(){

  }

  ngOnInit(): void {
  
  }

  redirect(){
    this._router.navigate(['/main/index']);
  }

  

}
