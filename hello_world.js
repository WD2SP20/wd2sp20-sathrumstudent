function execute(someFunction, value) {
    someFunction(value);
}

execute(word => {console.log(word)}, 'Anything');





















/*
- Should be able to open our application with a web browser
- When they go to /start
---Page displays a file upload form
---When submitted, upload image to /upload and display image

- We NEED
--- Web Server (HTTP(S))
--- Handle requests to different 'Pages', so we need router
--- Request Handler to handle the request (and associated data)
--- View logic to display HTML/CSS to the user
--- Upload Handling







*/