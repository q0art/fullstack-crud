import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styles: [],
})
export class FormComponent {
  constructor(public service: ProductService) {}

  onSubmit(f: NgForm) {
    this.service.formData.createAt = new Date().toISOString();
    this.service.formSubmitted = true;

    if (f.valid) {
      if (this.service.formData.id === 0) this.editField(f);
      else this.updateField(f);

      this.service.getProducts();
    }
  }

  editField(f: NgForm) {
    this.service.postProduct().subscribe({
      next: (data) => {
        this.service.list = data as Product[];
        this.service.resetFormData(f);

        this.service.getProducts();
      },
      error: (e) => console.error(e),
    });
  }

  updateField(f: NgForm) {
    this.service.putProduct().subscribe({
      next: (data) => {
        this.service.list = data as Product[];
        this.service.resetFormData(f);

        this.service.getProducts();
      },
      error: (e) => console.error(e),
    });
  }
}
