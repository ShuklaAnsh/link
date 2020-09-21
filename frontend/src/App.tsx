import React from 'react';
import {FileInput, Button} from '@blueprintjs/core';
import './App.css';

export const App = () => {

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event)
    const form: HTMLFormElement = document.getElementById(
      "file-upload-form"
    ) as HTMLFormElement;
    const resp = await fetch("/api/file", {
      method: "post",
      body: new FormData(form),
    });
    console.log(resp)
  }

  return (
    <div className="app">
        <form id={"file-upload-form"} onSubmit={e => handleSubmit(e)}>
          <FileInput />
          <Button type={"submit"} />
        </form>
    </div>
  );
}
