import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { TForm } from "./Components/TemplateForm/tform.component";

@NgModule({
  declarations: [AppComponent, TForm],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
