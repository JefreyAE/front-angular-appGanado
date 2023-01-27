import { Component, Input, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-animal-index',
  templateUrl: './animal-index.component.html',
  styleUrls: ['./animal-index.component.css']
})
export class AnimalIndexComponent implements OnInit {

  public listActive: Array<any> = [];
  
  constructor(
    private _animalService: AnimalService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._animalService.getListActiveAnimals().subscribe(
      result =>{
        if(result.status == "error"){
          console.log("Ocurrió un error al cargar los datos")
        }else{
          this.listActive = result.listActive;
        }
      },
      error => {
        console.log("Error");
      }
    );
  }

  redirect(url: any){
    this._router.navigate(["animals/detail/"+url]);
  }
  

}
