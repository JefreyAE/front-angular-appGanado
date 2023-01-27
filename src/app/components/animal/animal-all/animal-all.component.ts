import { Component, Input, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-animal-all',
  templateUrl: './animal-all.component.html',
  styleUrls: ['./animal-all.component.css']
})
export class AnimalAllComponent implements OnInit {

  public listAll: Array<any> = [];

  constructor(
    private _animalService: AnimalService,
    private _router: Router
  ) { }

  ngOnInit(): void {

      this._animalService.getListAllAnimals().subscribe(
        result =>{
          if(result.status == "error"){
            console.log("Ocurrió un error al cargar los datos")
          }else{
            console.log(result);
            this.listAll = result.listAll;
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
