# StudentCards

The final result of an example from class on 9/21/2021.
In class we created the .NET Web API from scratch.  We started with a service retrieving a single student.  We followed a simple architecture where the API is one project and the student service controller and model in another project, the Business "layer".  Once working we tested with fiddler and moved on to create a client side.

On the client side we started by creating a simple Student Model, Student View, and Student Controller.  The Model was written to retrieve the data.  Upon testing we came across a CORS issue.  We went back to the server code and Enabled Cors and tested again.  Then we updated the UI to show the title and stopped with the model.  We discovered an issue that the data from REST API came back after we created the student card.  We handled this by creating the custom event to be handled when the data has been received.  With the custom event and handler in place, the student card could be created.  The card used bootstrap.js to make it look pretty.

Now the problem is the title of the page clearly says "Students", but we are only showing one single student.  We went back to the service code and updated it to return multiple students.  After testing the API call with Fiddler, we finished up the client side code by handling multiple students and showing the cards in a "pretty" way.

The client side uses an MVC pattern and bootstrap.js.
The service side has an API layer and a Business Layer.  Business Layer uses a Controller and a Model that includes the View.

To run, open the solution in Visual Studio 2019 and run within IIS.  The HTML file/javascript is opened directly on the client.  You just need to update the port in the Student.js file.
