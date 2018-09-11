// Java Sctipt Object Notation
// Req to wrap values in quotes unless they are numbers

document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Customer
function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    // same setup as before, true for async
    xhr.open('GET', 'customer.json', true);

    // can it open alright? 200 status
    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText); 

            // asynch get data and output into browser
            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>ID: ${customer.phone}</li>
                </ul>
                `;

                document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();

}

// Load Customers / 2nd JSON button

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

        console.log(1);
    // can it open alright? 200 status
    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            const customers = JSON.parse(this.responseText); 
            
            // to reassign inside the loop
            let output = '';

            customers.forEach(function(customer){

            

            // append adding onto instead of overriding
             output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>ID: ${customer.phone}</li>
                </ul>
                `;
            });

                document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();
}