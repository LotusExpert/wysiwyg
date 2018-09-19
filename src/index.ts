import './scss/styles.scss';
import { Editor } from "./editor/editor";
import { Config } from "./config/config";

window.onload = () => {
  const editor = new Editor(document.querySelector('#editor'));
  const config: Config = {
    toolbarButtons: [
      {command: 'bold', title: 'b'},
      {command: 'h1', title: 'h1'}
    ]
  }
  editor.init(config);
}

