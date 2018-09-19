import { Editor } from "./editor/editor";
import './scss/styles.scss';

window.onload = () => {
  const editor = new Editor(document.querySelector('#editor'));
  editor.init();
}

