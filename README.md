
Q.1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: All those four methords are used basically to select elements from DOM(Document Object Model).

*GetElementById()  -- this dom methord is used to select a single element based on its unique (Id) attribute. for example,  document.GetElementById('title').

*GetElementByClassName() -- this dom methord is used to select all elements that match a specific class name. it returm HTML collection. for example,   document.GetElementByClassName('text').

*QuerySelector() -- this dom methord is used for return the first element that matches a css selector. like document.QuerySelector()

*QuerySelectorAll() -- this dom methord is used for return the all elements  matching a css selector.like document.QuerySelectorAll()



Q.2. How do you create and insert a new element into the DOM?

Answer: Suppose i want to add a list item into the list items. there for i have to get the parent section of this list item.for example document.getElementById('item'). then i have to create a list item like as document.createElemt('li'). insert a item into that created list. like as li.innertaxt = 'apple'. and finally i have to appendChind this list into its parent section. items.appendChild(li);

        h2> food items h2>
        ol id='item'
          li mango li
          li guava li
          li banana li
        ol
        const items= document.getElementById('item'),
        const li = document.createElemt('li'),
        li.innertaxt = 'apple',
        items.appendChild(li);


Q.3.  What is Event Bubbling? And how does it work?

Answer: Event bullle is a javascript behavior. when you trigger an event like a click ona element, it first run on that element then progate to its parent section unless stopped. if want to stop this propagation using event.stopPropagation().

Q.4.  What is Event Delegation in JavaScript? Why is it useful?

Answer: Even delegation in Javascript is a technique whwre attatch a single event listener to a parent element instead of adding listener to multiple child elements. its very effective and also make simpler the code.one listener can handle many child elements instead of multiple listeners.it reduce a devoloper's time to complete a project.



Q.5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: the main difference between preventDefault() and stopPropagation() are that preventDefault() methort stop the browser default action for an event and stopPropagation() methord stop the event bubbling up the DOM tree.

preventDefault() methord prevent a link<a> from navigating or a form <from> from submitting. on the other hand stopPropagation() methord prevent a click on a child elements from triggering parent event handler.

