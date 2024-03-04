import { Component } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
register();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private categories:CategoriasService,
              private router:Router) {}

              
  AllCategories:Category[] = [];
  name = "Julian";
  ngOnInit(){
    this.getAllCategories();
  }

  getAllCategories(){
    this.categories.getCategoires()
      .subscribe({
        next: (res:Category[]) => {
          this.AllCategories = res;
          console.log(this.AllCategories);
        },
        error:(err) => {
          console.log(err)
        }
      })
  }


  goToCategoriePage(category:any){
    this.router.navigateByUrl(`category-page/${category}`)
  }

}
