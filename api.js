var endpoint = "https://api.github.com/users";
        // GET POST PUT DELETE
        function getUsers()
        {   let content = "";
            fetch(endpoint).then((response)=>{
                response.json().then(data => {
                    console.log(data);
                    data.map(each => {
                        content += `<div class="col-2 shadow m-2 pb-2"> <img src = "${each.avatar_url}" width ="100%"> <br> <small> ${each.login} </small> <br> <a href ="${each.html_url}"> <button class="btn btn-sm btn-danger" > Profile </button> </a> </div> `
                    })
                    document.getElementById('userBox').innerHTML =  content;
                })
            })
        }