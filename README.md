# Personal Profile Site Project

## Overview
This project is a **Personal Profile Site** that showcases various web development skills, including HTML, CSS, and JavaScript. The site consists of multiple pages, each focused on a different functionality such as a to-do list, random quote generator, recipe page, and blog section. The site is fully responsive and includes a dropdown navigation menu for smaller screens.

Throughout this project, I worked on developing key functionalities from scratch while troubleshooting issues along the way. Below is a detailed explanation of the features, the steps taken during development, and how certain challenges were addressed.

---

## Pages and Features

### 1. **Home Page**
The home page is a simple introduction to the site. Showing an About Me, Skills & Experience, Interests and a small business card. The site uses a fixed navigation bar at the top and ensures a smooth user experience across all devices. This is far from perfect and can be improved.

### 2. **Gallery Page**
- **Responsive Image Grid**: Created a responsive image grid using Flexbox. Images are displayed in a single three columns on larger screens and adjust down to one column for smaller screens. 
- **Issue Fixed**: I initially faced a problem where the images were being displayed in a single column even on larger screens. This was due to incorrect Flexbox properties. After troubleshooting, I was able to fix the layout using `flex` and `max-width` values, ensuring a smooth layout on all screen sizes. After all this I settled on a single column, which means I can improve this in the future.

### 3. **To-Do List Page**
- **Task Addition with Validation**: The to-do list allows users to add tasks dynamically using JavaScript. Each task includes a checkbox that highlights the task in green when checked.
- **Troubleshooting**: Initially, tasks were not being added to the list correctly. The error stemmed from incorrect event listener targets. After fixing the `taskForm.addEventListener` and ensuring the form input was correctly referenced, tasks were successfully appended to the list.

### 4. **Random Quote Generator Page**
- **Random Quotes on Button Click**: A random quote generator was implemented, displaying a new quote every time a button is clicked.
- **Error Fixed**: There was an issue where quotes weren’t showing due to a small bug in referencing the `quoteButton`. Replacing the `taskForm.addEventListener` with `quoteButton.addEventListener` resolved the issue, allowing the button to generate random quotes correctly.

### 5. **Recipe Page**
- **Ingredients and Method Sections**: The recipe page features a structured layout with an ingredients list and step-by-step method.
- **Image Support**: Each recipe has an accompanying image of the dish, which is responsive and resizes depending on screen size.
- **Responsive Fix**: The layout was originally broken on smaller screens, causing the text and images to be misaligned. To fix this, I improved the CSS for smaller breakpoints, ensuring that the ingredients and method are displayed clearly in a readable format.

### 6. **Blog Page**
- **Read More/Read Less Functionality**: The blog page features expandable posts. Users can click "Read More" to reveal the full post and "Read Less" to collapse it again. At this point it only shows an extra line for that visual aspect.
- **Issue Fixed**: The "Read More" buttons initially didn’t work due to a missing script link on the blog page. After correctly linking the `blog.js` file, the functionality was restored, and the posts expanded and collapsed as expected.

---

## Key Troubleshooting and Fixes

- **CSS Grids and Flexbox**: Early on, I struggled with getting elements to display correctly across different screen sizes. By experimenting with Flexbox and Grid layouts, I eventually settled on a structure that adapts to various screen widths without distorting the design.
- **Media Queries**: A major focus was ensuring that all pages were fully responsive. For each page, I used media queries to adjust the layout at different breakpoints (600px, 768px, 1920px, etc.), ensuring the site looks great on mobile, tablet, and desktop devices.
- **JavaScript Event Listeners**: Several issues arose with JavaScript event listeners, particularly when it came to attaching them to the right elements. These issues were resolved through debugging and ensuring that correct element IDs and classes were referenced in the JavaScript files.
- **Hamburger Menu**: The navigation bar was designed to transform into a hamburger menu on smaller screens. There was an issue where the menu didn’t work on the gallery page due to an incorrect script link. Fixing the script path made the hamburger menu functional across all pages.

---

## Technologies Used

- **HTML5**: Structured the content and layout across all pages.
- **CSS3**: Applied styles, Flexbox, and Grid for responsive layouts. Media queries were used for different screen sizes.
- **JavaScript (Vanilla)**: Implemented dynamic functionalities, including the to-do list, random quote generator, and blog post expansion.
- **Git & GitHub**: Version control for tracking progress and maintaining different stages of the project.
  
---

## Key Takeaways
This project helped me refine my front-end development skills, particularly in responsive design and JavaScript functionality. By working through layout and functionality issues, I gained valuable experience in debugging and troubleshooting. I now feel more confident in approaching new projects with a deeper understanding of web development best practices.

---

## Future Improvements

While I am happy with the current state of the site, there are always areas for improvement. Some future updates may include:
- **Adding More Dynamic Content**: Expanding the blog page with more posts or even integrating a back-end to dynamically load content.
- **Advanced Animations**: Using CSS animations to enhance user interactions.
- **Accessibility**: Further improving accessibility features for screen readers and keyboard navigation.

---