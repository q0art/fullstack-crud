import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styles: [],
})
export class ListComponent implements OnInit {
  constructor(public service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts();
  }

  onDelete(id: number): void {
    this.service.deleteProduct(id).subscribe({
      next: (data) => {
        this.service.list = data as Product[];

        this.service.getProducts();
      },
      error: (e) => console.error(e),
    });
  }

  fillForm(f: Product) {
    this.service.formData = Object.assign({}, f);
  }
}
