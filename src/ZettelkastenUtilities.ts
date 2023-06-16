import strftime = require('strftime');
import { NoteWorkspace } from './NoteWorkspace';
import * as vscode from 'vscode';

export default class ZettelkastenUtilities {
  static generateId() {
    const date = new Date();
    const id = strftime(NoteWorkspace.zettelkastenIdDateFormat(), date);
    return id;
  }

  static insertId() {
    const editor = vscode.window.activeTextEditor;
    if (editor == null) return;

    const newId = ZettelkastenUtilities.generateId();
    editor.insertSnippet(new vscode.SnippetString(newId));
  }
}