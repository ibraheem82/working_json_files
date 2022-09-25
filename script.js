document.getElementById("getCustomer").addEventListener("click", loadCustomer);

document.getElementById("getCustomers").addEventListener("click", loadCustomers);

// =====>Get Customer<=====
function loadCustomer(e) {
    const customerXhr = new XMLHttpRequest();

    customerXhr.open('GET', 'customer.json', true);

    customerXhr.onload = function() {
        if (this.status === 200) {
console.log(this.responseText);

// You have to parse since it a json file
            const customer = JSON.parse(this.responseText);

            const  customerOutput = `
            <ul>

                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>

            </ul>

            `;

            document.getElementById('customer').innerHTML  = customerOutput;
        }
    }

    customerXhr.send();

}

// =====>Get Customers<=====
function loadCustomers(e) {
    const customersXhr = new XMLHttpRequest();

    customersXhr.open('GET', 'customers.json', true);

    customersXhr.onload = function() {
        if (this.status === 200) {
console.log(this.responseText);

// You have to parse since it a json file
            const customers = JSON.parse(this.responseText);
            ;

            let customersOutput  = ' ';

            customers.forEach(function(customers){

            customersOutput += `
                <ul>

                <li>ID : ${customers.id}</li>
                <li>Name : ${customers.name}</li>
                <li>Company : ${customers.company}</li>
                <li>Phone : ${customers.phone}</li>

                </ul>

                `;
            })

            document.getElementById('customers').innerHTML  = customersOutput;
        }
    }

    customersXhr.send();
}

// function loadCustomers(e) {
//   const customersXhr = new XMLHttpRequest();

//   customersXhr.open("GET", "http://localhost:8000/api/products", true);

//   customersXhr.onload = function () {
//     if (this.status === 200) {
//       // console.log(this.responseText);

//       // You have to parse since it a json file
//       const customers = JSON.parse(this.responseText);
//       let customersOutput = " ";

//       customers.forEach(function (customers) {
//         customersOutput += `
//                     <ul>
//                     <li>ID : ${customers.id}</li>
//                     <li>Name : ${customers.name}</li>
//                     <li>Company : ${customers.description}</li>
//                     <li>Phone : ${customers.price}</li>
//                     </ul>
    
//                     `;
//       });

//       document.getElementById("customers").innerHTML = customersOutput;
//     }
//   };

//   customersXhr.send();
// }
