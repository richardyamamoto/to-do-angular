import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-dialogo",
  templateUrl: "./dialogo.component.html",
  styleUrls: ["./dialogo.component.scss"]
})
export class DialogoComponent implements OnInit {
  tarefas: any[] = [
    {
      id: 1,
      descricao: 'Tarefa 1',
      situacao: false,
    },
    {
      id: 2,
      descricao: 'Tarafa 2',
      situacao: false,
    },
    {
      id: 3,
      descricao: 'Tarefa 3',
      situacao: true,
    }
  ];

  inputText = "";
  constructor() {

  }
  ngOnInit() {
    this.tarefas;
  }

  addTarefa() {
    if (!this.inputText) {
      return;
    }
    let body = {
      id: 3,
      descricao: this.inputText,
      situacao: false,
    }
    this.tarefas.push(body);
    this.inputText = "";
  }

  removeTarefa(item) {
    this.tarefas.map((tarefa, index) => {
      if(tarefa.descricao === item.descricao) {
        this.tarefas.splice(index, 1);
      }
    })
  }

}
