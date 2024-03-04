import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Offer } from 'src/app/models/offer';
import { CategoriasService } from 'src/app/services/categorias.service';
import { OffertsService } from 'src/app/services/offerts.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.page.html',
  styleUrls: ['./category-page.page.scss'],
})
export class CategoryPagePage implements OnInit {

  constructor(public ofers:OffertsService, 
              public rutaActiva:ActivatedRoute, 
              public router:Router,
              private category:CategoriasService) { }


  params:any;
  categorie:any;
  oferts:Offer[] = []
  categoryName ="";


  ngOnInit() {
    this.params  = this.rutaActiva.snapshot.params
    this.categorie = this.params.category
    console.log('CATEGORIE',this.categorie)
    this.getofers()
    this.getCategory()
  }

  backButton(){
    this.router.navigateByUrl('home')
  }

  getCategory(){
    this.category.getCategorieById(this.categorie)
      .subscribe({
        next:(res:Category) => {
          this.categoryName = res.name
        }
      })
  }
  

  getofers(){
    this.ofers.getOfferByCategorie(this.categorie)
      .subscribe({
        next: (res:Offer[]) => {
          this.oferts = res;
          console.log('GET OFFERS',this.oferts)
        }
      })
  }


  goToDetailCupon(id:any){
    this.router.navigateByUrl(`cupon-detail/${id}`)
  }
}
