import { Component } from "./componet.js";
import { Form } from "./form.js";
import { Input } from "./input.js";
import { Label } from "./label.js";

const title = new Component("h1", "body", { innerText: "olá,mundo!" });

title.tag = "h2";

title.build().render();

const form = new Form("body");
const label = new Label("name", form, { htmlFor: "nameInput" });
const input = new Input(form, { id: "nameInput", name: "" });

form.render();
label.render();
form.addChildren(input);

form.addChildren(
  new Component("br"),
  new Component("br"),
  new Label("Data de Nascimento:", { htmlFor: "birthdayInput" }),
  new Input(form, { id: "birthdayInput", name: "birthday", type: "date" })
);
