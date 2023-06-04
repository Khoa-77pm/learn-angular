## Dependency injection

* tight coupling
```
new Courses()
```
* loose coupling
```
constructor (service: MyService){}
```

### Declare in module level

```
providers: [CoursesService],
```
## Service from command line
*@Injectable*
with this, no need to inject in module level

## Binding
### String interpolation
Example
* ts: `name='John'`
* template: `name: {{name}}`
* html: `name: John`

### Property binding
* Bind from `component ` to `DOM `
* It's `one way` binding
* Syntax `[src]="imageUrl"`
Similar to `src = {{imageUrl}}`

### Attribute binding
* `DOM` and `HTML` attribute mapping 
    * for almost attributes
    * but some of them is not such as `tr - colspan` or `h1 - textContent` <-- Attribute binding come to help
* `<tr [colspan]="colspan">` this won't work
* `<tr [attr.colspan] = "colspan">` will work   
    * `attr.xxx` point that is a HTML element, not DOM element

### Class binding
* to set a class to element, base on condition in component
`
(class.btn-primary)="true/false"
`

### Style binding
* to set a style to DOM element, base on condition in component
`
(style.backgroundColor)="true/false"
`

### Event binding
* to handle event raised from the DOM, example key stroke, mouse click, etc.
    * syntax `(eventName)="methodName()"`
* how to access event which is raised by event handler?
* event bubbling ?
* How to stop event bubbling ?

### Event filtering
* Example usage: if user hit ENTER, then do some code

### Template variable
* Idea:
    * set a variable in template `#email`
    * pass it to component `onkeyUp(email.value)`
* no need to pass $event as pure javascript

### Two ways binding
* bind between `typescript` <-> `template`
* there is a way to bind by type script

## Add bootstrap 
* command ```npm install bootstrap --save```
This save bootstrap in package.json, GIT does not have to handle installed file
* need to import css in `style.css`
* Terminal: size of `style.css` and `style.js` should be increased

### package.json
`npm install` will download all dependencies in `package.json`

### Pipe 
* Use to format data
* ng g p pipe-name

### Custom pipe
steps
* Create newpipe.pipe.ts
* declare it in module
* apply pipe in component

## Component API
- Component expose API to communicate to other components
- API has input and output
### input:
Two way to mark it as input properties
- decorator @input
`
@input() varname: vartype
`
- declare in compoent
* if var name is changed, then have to change inputs[] array
`
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  inputs:['isFavorite']
})
`

### input alias:
- In html we can use 
`
[in-favourites] = "anyObject.properties"
`
- In type script
`
@Input('in-favourite') inFavourite : boolean
`
If the variable name is changed, the alias help to keep contract between HTML and component.ts
--> minimize impact of code change.

## Output
- When child has some changes, it can emit to parents
- In child: need @output decorator and emit the event
- In parent: need function listen to the event

## View encapsulation
* Not really understand. need to learn more
### Shadow DOM
* Not really understand. need to learn more

## ng-content
use case: 
* App: parent --> page component: child
* app --> pass some html content

## ng-container
* If we want to render something without put inside DIV or HTML element, let use `ng-container`

## Directives
* Structure directive:
- modify structure of the DOM
* Attribute directive:

## Reconstruct
when hit "Load", the _ul_ will be re-construct that may be performance issues.
* By default, DOM track object by object id in memory
* Each time hit load button, angular download courses as new object. 

Solution:
* tell angular to track by course.id
* When deal with complex list, need to consider to use `trackby`

## leading asterisk
* _Asterisk_ will be rewrite as `ng-template`


## ngClass
* to replace multiple class bindings
* key must in quotes 

## Custom directive
* to manipulate DOM element
* command: `ng g d directive-name`
* Decorators:
    - @input
    - @HostListener


## Form 

* `FormControl` to control each input of form
* `FormGroup` is group of FormControls
* Status:
    - value
    - touched
    - untouched
    - dirty
    - pristine
    - valid
    - errors

Two way to create FormControl and FormGroup
* Directive (will be added to template)   <-- called `template-driven form` | Implicit
* Code <-- Called `Reactive Form` or `Model driven form` | Explicit


## Template driven from
* `ngModel` require attribute `name` of the variable of component

## Form - validation
* Each validation has its own message














