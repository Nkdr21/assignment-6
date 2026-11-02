# Assignment 6: jQuery (Selectors, Effects, Animations)

**Name:** Nurkadyr
**Group:** IT-2502


This is my personal portfolio page. I used jQuery to select elements, show and hide them, add and remove them, and make simple animations. The work is split into four parts.



## Part 1. Getting Started with jQuery

In this part I set up jQuery and used selectors to change the text, the CSS and the theme of the page.

### Task 0. Setup
I added jQuery from a CDN link in index.html. In script.js I used $(document).ready() and printed "jQuery is ready!" in the console.

### Task 1. Selectors & CSS
The page starts with a profile section. It has my name, a headline and a short introduction. I used a tag selector (h1), an ID selector (#greeting) and a class selector (.card). The "Change greeting" button uses .html() to change the headline. The light and dark theme buttons use .css() to change the colors.
<img width="1176" height="424" alt="telegram-cloud-photo-size-2-5422424150422265932-y" src="https://github.com/user-attachments/assets/b99cdb16-facb-4cc1-a50b-af50f840b46f" />



## Part 2. jQuery Effects

In this part I used show, hide, fade and slide methods.

### Task 2. Visibility Methods
The "About Me" section has a short bio, a status message and some fun facts. The Show, Hide and Toggle buttons control the status message and the fun facts.

### Task 3. Fade Methods
The gallery has three pictures. The Fade In, Fade Out and Fade Toggle buttons use .fadeIn(), .fadeOut() and .fadeToggle().

### Task 4. Slide Methods
There are three clickable headings: music, movie and subject. When I click a heading, its panel opens or closes with .slideToggle(). The "Open all" and "Close all" buttons use .slideDown() and .slideUp().
![telegram-cloud-photo-size-2-5422424150422265933-y](https://github.com/user-attachments/assets/42c80a30-b19f-4ddb-a0cc-c3b9211063b5)



## Part 3. DOM Manipulation with jQuery

In this part I added, removed and changed elements on the page.

### Task 5. Add & Remove Elements
The skills list starts with four skills. I type a skill in the box and then click Add Skill (.append()), Prepend Skill (.prepend()) or Remove Skill (.remove()). Empty skills are not added. Remove Skill deletes the skill that has the same name as the text in the box.

### Task 6. Modifying Attributes
There is a social media link at the bottom of the page. When I click "Change link", the link switches between GitHub and LinkedIn. This is done with .attr(), which changes the href.

### Task 7. Form Interaction
The form has a Name input and an Email input. Under the form, the text I type appears right away. I used .val() to read the input and .text() to show it.
<img width="1174" height="534" alt="telegram-cloud-photo-size-2-5422424150422265936-y" src="https://github.com/user-attachments/assets/d01edc5c-4195-468c-8c15-ac39f106a17a" />



## Part 4. Animations

In this part I made skill bars that grow and shrink.

### Task 8. Basic Animation
Every skill has a bar. At the start all bars have zero width. When I click "Animate My Skills", the bars grow with `.animate()` to their own level (90%, 75%, 60% and 40%). When I click the button again, they shrink back to zero. A new skill that I add gets a bar at 50%.
<img width="1274" height="666" alt="telegram-cloud-photo-size-2-5422424150422265938-y" src="https://github.com/user-attachments/assets/f8ac342e-38e4-4da8-a32a-a06848e40856" />

## Summary

In this assignment, I learned how to use jQuery to make my website more interactive. I worked with selectors, events, effects, and animations. The most difficult part for me was creating skill bar animations and using different jQuery methods correctly. At first, I was confused about some methods, but after testing my code, I understood how they work. I also learned that jQuery can make JavaScript code shorter and easier to write.

In the future, I would like to improve the design of my portfolio and make the animations smoother. Overall, this assignment helped me improve my frontend development skills.

