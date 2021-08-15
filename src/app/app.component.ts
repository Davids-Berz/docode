import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 10';
  codeMirrorOptions: any = {
    theme: 'idea',
    mode: 'javascript',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: [
      'CodeMirror-linenumbers',
      'CodeMirror-foldgutter',
      'CodeMirror-lint-markers'
    ],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

  obj:any;

  ngOnInit() {
    this.obj = `public class T02EjemploVariable {

  public static void main(String[] args) {

      String saludar = "Hola Mundo desde java";

      System.out.println( saludar );
  }

}`;
  }
  setEditorContent(event:any) {
    // console.log(event, typeof event);
    console.log(this.obj);
  }
}

