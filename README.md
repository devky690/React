# Code Review

This is where i will explain my logic and summarize kyle cook logic

# Structure
Componetize everything you can, as many as possible, because
it promotes reuse and its easier to debug
buttons couldve been compontenized but when is it too small?
if you would never reuse it or it would become too much work 
to make another component as it could be tightly coupled with 
another component

One component per file

Use default exports for components (export defaults can
be renamed since they arent being destructured)

Define state all in one place, at the top of the file

group useeffects all together 

initialize contextvalue after the hooks

then comes the logic ...all the functions you are using

then comes the bottom of the component you returning the component

mock data could come after the return, outside the component

# Naming Scheme

using handle which leads to some click event
you should put another function which doesnt have handle naming convention
inside another function that has that naming convention

# Spacing Code

Leave enough lines between code

# Props or Context

Use props when passing from parent to child, otherwise use context  
since your passing to multiple components or use context when
your parent cant pass props to multiple components since they arent
directly linked 

# Seperating State Managers

seperate state names when using useState because it makes the code alot
more robust and clean, break up state into as many small pieces 
as possible like
what we did with selectedRecipeId and recipes
...we gave them seperate state managers (with the destructuring)
but we couldve had one useState and just created an object to manage
the state of that object

# Seperating LifeCycle Managers

seperate use effects that have different dependancies
(with classes you couldnt do this...a lifcycle method had to have
everything)

# DO NOT MUTATE DIRECTLY

do not change state directly, it makes react more robust and less prone
to errors and also code is more legible...creating an object through
destructuring to modify the state. React is okay with that

state and props should never be mutated directly 

# Additional Tips
Always use ids with states if you are trying to reference
...this makes things more consistent so you never accidently
get two different objects that are trying to reference
the same thing

# My Change

use onChange instead of onInput to get rid of console error, its not an issue
but just messy if trying to debug in web console

# Next Steps

(look at his video again for tips on what to do)
kyle steps to add
1) create a search box that can filter for search results
2) add a new section at the body of the form that can add user
of the recipe...it would be included in recipelist 
and make multiple pages that deal with professional chefs, and
amateur chefs 
3) connect to a database with useEffect which kyle's tutorial
has with fetch api and useEffect hook and make this a fully functional
application instead of just saving to local storage

next weekend:
Fetch Api, UseEffect hook 13 minutes, react router tutorial dev ed,
kudvenkat protected routes, prop-types logrocket,

when im solid, pickup usereducer and start using context api
and learn all the other useful hooks kyle has in his playlist
context api can be picked up from academind 


# My Takeaway

Event handlers were passed as props from parent starting at app level where
we had our context then from there we passed the function down to
the child component and then we used helper function to ass

and btw multiple components, not just app can have context!



# Clearning misconceptions

use state returns a value and a state manager which we can rename and use
[object, state manager] = useState(default value)
call state manager to update changes to state of object

update previous state of object when setting state because
they dont get merged together automatically

you can have multiple state managers




