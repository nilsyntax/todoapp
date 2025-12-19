import { TodoState } from "./core/todoState.js";

import { TodoFormController } from "./components/formController.js"; 
import { TodoRender } from "./components/todoRender.js";



const state = new TodoState();

new TodoFormController(state);
new TodoRender(state); 


