const button_ = document.getElementById("button");
const users_ = document.getElementById("users");
button_.addEventListener("click", getUsers);

async function getUsers() 
{
    try
    {
        const response= await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        
        data.forEach(user => {
            const card = document.createElement("div");
            card.className='user';


            let addressHTML="";
            
            for(let key in user.address)
            {
                if(typeof user.address[key] === "object"){
                    for(let value in user.address[key])
                    {
                        addressHTML += `${value}: ${user.address[key][value]}<br>`;
                    }
                }
                else
                {
                    addressHTML+= `${key}: ${user.address[key]}<br>`;
                }
            }
            card.innerHTML = `
            <strong>${user.id}</strong>
            <strong>${user.name}</strong><br>
            Email: ${user.email}<br>
            Address:${addressHTML}
            
            `;
            users_.appendChild(card);


        });
    }
    catch (error)
    {
        users_.innerHTML = "მონაცემების წაკითხვა ვერ მოხერხდა"
    }


}
