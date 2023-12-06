import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { Product } from "../models/product.model";
import { NgForm } from "@angular/forms";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  url: string = environment.url + "/Product";
  list: Product[] = [];

  formData: Product = new Product();
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http.get(this.url).subscribe({
      next: (data) => (this.list = data as Product[]),
      error: (e) => console.error(e),
    });
  }

  postProduct() {
    return this.http.post(this.url, this.formData);
  }

  putProduct() {
    return this.http.put(this.url + "/" + this.formData.id, this.formData);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url + "/" + id);
  }

  resetFormData(f: NgForm) {
    f.form.reset();

    this.formData = new Product();
    this.formSubmitted = false;
  }
}
