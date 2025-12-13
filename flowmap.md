# ToDo App BrainStorm
1. Core / Domain 2. State / Control 3. Interface (UI) 4. Infrastructure


## Core Domain  [src/core]

### Data the app will own + Data Shape
- Task name [string]
- Task State - done, isDone [boolean]
- Task Id [string]

### Buiesnes Logic
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


### States management
