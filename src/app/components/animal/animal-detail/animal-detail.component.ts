import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {

  public imageList: Array<any> = [];
  public details: Array<any> = [];
  public incidents: Array<any> = [];
  public injectables: Array<any> = [];
  public offsprings: Array<any> = [];
  public statistics: Array<any> = [];

  constructor(
    private _animalService: AnimalService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    let id = this._route.snapshot.params.id;

    this._animalService.getAnimalDetail(id).subscribe(
      result => {
        if(result.status == "error"){
          console.log("Ocurrió un error al cargar los datos")
        }else{
          console.log(result);
        }
      },
      error => {
        console.log("error");
      }
    )

    this._animalService.getImageNames(id).subscribe(
      result => {
        if(result == "error"){
          console.log("Ocurrió un error al cargar los datos")
        }else{
          console.log(result);
        }
      },
      error => {
        console.log("error");
      }
    )

   
  }

  

  redirect(url: any){
    this._router.navigate(["animals/detail/"+url]);
  }


}
