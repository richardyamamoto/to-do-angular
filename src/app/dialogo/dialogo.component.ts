import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-dialogo",
  templateUrl: "./dialogo.component.html",
  styleUrls: ["./dialogo.component.scss"]
})
export class DialogoComponent implements OnInit {
  tarefas = ["TypeScript", "JS", "Node"];
  inputText = "";
  constructor() {}

  ngOnInit() {}

  addTarefa() {
    this.tarefas.push(this.inputText);
  }

  removeTarefa() {
  }
}
