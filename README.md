The Goal is to use Istio to showcase how applications can use it.

Step 1: Create the following service with their respective APIs. We are going to structure the Library inside University.

    -There are multilple libraries inside the University.
    -BookService holds all books info avaiable inside the University.
    -Customer Service holds all the customers who have made a payment and is a customer of atleast one service inside the University.

    1. Library Service
        - /getLibraryName  - Returns the libary Name.
        - /getAllBooks     - Makes a call to the Book Service to find out the list of Books Assigned to the library
        - /getAllCustomers - Makes a query to the Customer Service to find all the Customers of the Library.

    2. Book Service
        - /getAllBooks?libraryname=<library Name>   -Returns all the books ISBN ID assigned to the Library
        - /getBookInfo/<ISBN>                        -Queries outside the interenet to fetch the information of the book

    3. Customer Service
        - /getAllCustomers?unitname=<Unit Name>     -Return all the customer ID who have subscribed for the unit.

For the sake of simplicity we are not going to have a Database Backend. We are going to mock the data.The mocked data can be found in the .json files.

Step 2: Dockerize the Services..write docker files.
Step 3: Create docker images for the services by running the docker files

    cd customerservice
    docker build -t customerservice_image .

    cd bookservice
    docker build -t booksercice_image .

    cd libraryservice
    docker build -t libraryservice_image .

Step 4: Write yaml files for Kubernates without any istio dependencies(while deploying we will inject the sidecar dependencies required for Istio)

Step 5.1: Create the services by deploying to kubernates.Without any Istio ingress.Plain old Kubernates style.
    set the environment variables with --->eval $(minikube docker-env)
    Get the minikube ip----->minikube ip

    Deploy the Customer App and create a Customer Service
    cd customerservice/kube
    kubectl apply -f deploy_customerservice.yaml

    Check if the application is running on 
    <minikube-ip>:port/customers/ping
    Also you can use
    minikube service customerservice

    Follow the same procedure for all the other services as well.

Step 5.2: Deploy using the istion ingress







