# ToDo App BrainStorm

### Data the app will own + Data Shape
- Task name [string] [trimmed]
- Task State - completed [boolean], default [false]
- Task Id [string] [immutable]

### Business Logic
**User Need**
- User must able to add todo
- User can't input empty task
- Task can be marked as complete or incomplete
- User can edit todo
- User can delete todo

**Invariant Logic**
- Each todo must have unique ID
- Task complete state are boolean
- Todo name/title is non-empty

<!-- Logic Only Operation, whatever happens with DOM, storage, app/data/logic should remain unchange-->

## [src/core/..]
### ToDo Model
- Constructor ---> ID, title, completed(default: false)  
- Toggle fucntion ---> Completed  
- update function ---> Title  

### States management
**State**  
- State = in-memory list of Todo  
- Persistence through storage
--- Load on app start
--- Save on each state change

**state transition**  
- addTodo()  
- toggle() -------> complete: true <-> false  
- edit() ---------> edit data (todo title/name)  
- delete() -------> delete todo  

**State Ownership**  
State only be mutated through state transitions
UI have no direct access

**Error or Invalid action Handling**  
- Ignore any action for unknown id
- Reject add/edit if title is empty or empty after trim

<!-- App Lifecycle -->

### App Lifecycle
- On app start → load state (from storage data,if any)
- On state change → update memory → persist → notify UI
- On app close → memory state destroyed

<!-- UI and rendering logic: The DOM and UI map -->

### Interface - create UI
- App root  
- Navigation  
- Footer  

**Create Item**  
- Input form/field  
- Add todo Button  
- ToDo item  

### UI Responsiblity
- Render from current state  
- Listen state change  
- Update DOM on changed state  
- Bind user event to state transition  

### Rendering Logic
- UI perform initial render of current state on app start
- UI only read state and update dom on response of state change

<!-- Style Sheet -->
## StyleSheet
-> style reset, variables  
-> document/page style -> app root  
-> Component Style (Task Item Button Input form/field)  

### Storage
Local Storage
