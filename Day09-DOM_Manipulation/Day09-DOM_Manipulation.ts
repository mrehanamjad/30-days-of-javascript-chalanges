// Day 9: DOM Manipulation

// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements
// - Task 1: Select an HTML element by its ID and change its text content.
const el1 = document.getElementById("task1") as HTMLElement;
el1.textContent = "Task 1 - Completed";

// - Task 2: Select an HTML element by its class name and change its background color.
const el2 = document.getElementsByClassName(
  "task2"
) as HTMLCollectionOf<HTMLDivElement>;
el2[0].style.backgroundColor = "wheat";

// Activity 2: Creating and Appending Elements
// - Task 3: Create a new div element with some text content and append it to the body.
let div:HTMLDivElement = document.createElement("div")
let body: HTMLBodyElement = document.getElementsByTagName("body")[0]
div.textContent = "Task3 - Completed";
body.appendChild(div);

// - Task 4: Create a new li element and add it to an existing ul list.
    let li: HTMLLIElement = document.createElement('li')
    document.querySelector('#task4')?.appendChild(li);
    li.textContent = 'Done'
// Activity 3: Removing Elements
// - Task 5: Remove an HTML element and remove it from the DOM.
    let elementToRemove = document.getElementById('remove-me') as HTMLParagraphElement;
    let bodyy = document.querySelector('body') as  HTMLBodyElement;
    bodyy?.removeChild(elementToRemove) 

// Activity 4: Modifying Attributes and Classes
// - Task 6: Select an HTML element, save one of its attributes (e.g., src of an img tag).
    const img = document.querySelector('#img1') as HTMLImageElement;
    // const imgSrc:string = img.src
    const imgSrc = img.getAttribute('src')
    console.log('img: ',imgSrc);
    
// - Task 7: Modify the class attribute of an HTML element.
    let classToModify = document.querySelector('.before-modify') as HTMLDivElement;
    classToModify.className = "after-modify"

// Activity 5: Handling Events
// - Task 8: Add a click event listener to a button that changes the text content of a paragraph.
    const btn1 = document.querySelector('#btn1') as HTMLButtonElement;
    const para = classToModify.firstElementChild as HTMLParagraphElement;
    
    btn1.addEventListener('click',()=>{
      para.textContent = 'I am changed';
    })
    

// - Task 9: Add a hover event listener to an element that changes its border colors.
classToModify.addEventListener("mousemove",()=>{
  classToModify.style.borderColor = 'red';
})