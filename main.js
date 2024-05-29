let url ="https://fakestoreapi.com/products";
console.log(url);

    async function fetchData() {
        let res = await fetch(url)
        let data = await res.json();
        console.log(data);

        let div1 =document.querySelector(".div1")
        data.forEach(element => {
            let div = document.createElement('div')
            let text= document.createElement('h4')
            text.innerText=element.title
            
            let imag = document.createElement('img')
            imag.src = element.image;

            let price = document.createElement('p')
            price.innerText=element.price

            div.append(price)
            div.append(imag)
            div.append(text)
            div1.append(div)
        });
      }
      fetchData()