The Goal is to use Istio to showcase how applications can use it.

Step 1:

Create the following service with their respective APIs. We are going to structure the Library inside University.

    -There are multilple libraries inside the University.
    -BookService holds all books info avaiable inside the University.
    -Customer Service holds all the customers who have made a payment and is a customer of atleast one service inside the University.

    1. Library Service
        - /getLibraryName  - Returns the libary Name.
        - /getAllBooks     - Makes a call to the Book Service to find out the list of Books Assigned to the library
        - /getAllCustomers - Makes a query to the Customer Service to find all the Customers of the Library.

    2. Book Service
        - /getAllBooks?libraryname=<library Name>   -Returns all the books assigned to the Library
        - /getBookInfo/<ISBN>                        -Gives the information of the book
        - /getLatestInfo/<ISBN>                      -Makes a query to the Internet to fetch the latest information on the Book.  

    3. Customer Service
        - /getAllCustomers?unitname=<Unit Name>     -Return all the customer who have subscribed for the unit.

For the sake of simplicity we are not going to have a Database Backend. We are going to mock the data.The mocked data can be found in the .json files.

Next Steps- Implement the APIs 



