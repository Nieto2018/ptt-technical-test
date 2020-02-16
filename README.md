# propylo-technical-test

## Full Stack Engineer Assessment

### Objective

Implement a web application that allows users to store, at later retrieve, files at a specified URL. The application should be composed of two distinct components - frontend JavaScript application, and a backend API.
The backend can be written in Python-based web framework of your choice (Django is our preference).  The backend should act as a JSON API which provides endpoints for the frontend to upload and retrieve files.
The frontend can be written in any modern JavaScript framework of your choice (Aurelia is our preference).
The test solution should include clear instructions on how to build and run both components.

### Requirements

#### Functional

    • Stores files of any type and name
    • Stores files at any URL
    • Does not allow interaction by non-authenticated users
    • Does not allow a user to access files submitted by another user
    • Allows users to store multiple revisions of the same file at  the same URL
    • Allows users to fetch any revision of any file

#### Non-functional

    • Demonstrate knowledge of best-practices in relation to unit testing
    • Clear documentation detailing how to build and run the frontend and backend

### Example

A user may submit the file "review.pdf" to the application, specifying "/documents/reviews/review.pdf" as the desired URL. The user later submits a new version of the file at the same URL.
The user can now retrieve the latest version of the file by accessing the document URL ("/documents/reviews/review.pdf"). The original version of the file can be accessed at the  URL ("/documents/reviews/review.pdf?revision=0").

### Timeframe

Please return your solution within three days of receipt of  the test. If this timeline poses any issues, please reach out to marieclaire.collins@propylon.com to discuss.

### Delivery

The solution can either be delivered through a private, shared Git repository, or via email as a Zip file.
In the case of an emailed Zip, zip the project folder and send it to marieclaire.collins@propylon.com. Should your email client reject the ZIP for containing source code, please encrypt the ZIP with the password "propylon". This should bypass any checks by the mail server


### Deployment
Unzip the file propylo-technical-test.zip which contains two folders: pttbackend and pttfrontend.

The project was done and tested with Python-3.7, but could be compatible with other versions of Python-3. The pttbackend folder contains a folder named "venv37" which is a virtual environment of Python-3.7 with all of the dependencies and the pttfrontend folder contains the node-modules folder with all of the dependencies.

#### To deploy the backend
To deploy the backend server, you should move into pttbackend folder and run the following commands in a terminal: 
1) "source venv37/bin/active" to activate the virtual environment
2) Only if dependencies aren't installed, run "pip install -r requirements.txt" to install them.
3) "python manager.py runserver" to run the backend server, it would be doployed in the following URL: http://localhost:8000

URLs:
http://localhost:8000/admin/ -> Django administration
http://localhost:8000/graphql/ -> Graphiql console, GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries.

#### To deploy the frontend
To deploy the frontend server, you should move into pttfrontend folder and run the following commands in a terminal:
1) Only if dependencies aren't installed, run "yarn" to install them.
2) "yarn start" to run the frontend server, it would be doployed in the following URL: http://localhost:3000


Insomnia_ptt.json is a file with Graphql queries and mutations to test in the app Insomnia Rest
