// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6849132b2bmsh6a0660b422961a0p1389cajsncf47c11928f3',
// 		'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
// 	}
// };

// fetch('https://youtube-music1.p.rapidapi.com/v2/search?query=arjit%20singh', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));




const form = document.getElementById('myForm');


const handleSubmit = (e) => {


    e.preventDefault();

    const singer = document.forms['myForm']['music'].value;
   

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6849132b2bmsh6a0660b422961a0p1389cajsncf47c11928f3',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${singer}`, options)
        .then(response => response.json())
        .then(response => {

            response.result.songs.map( (cval) => {


                document.getElementById('result').innerHTML+=`
                
                <div class="col-md-4">
                
                    <div class="card" style="width: 18rem;">
                    <img src=${cval.thumbnail} class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${cval.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                
                </div>




                `


            } )


        })
        .catch(err => console.error(err));




}





form.addEventListener('submit', handleSubmit)