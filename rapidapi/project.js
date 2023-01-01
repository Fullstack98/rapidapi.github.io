// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6849132b2bmsh6a0660b422961a0p1389cajsncf47c11928f3',
// 		'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// const eat = document.getElementById('myForm');

// const handleSubmit= (e) => {

//     e.preventdefault();


//     const fruit = document.forms['myForm']['food'].value;
//     const options = {
//         	method: 'GET',
//         	headers: {
//         		'X-RapidAPI-Key': '6849132b2bmsh6a0660b422961a0p1389cajsncf47c11928f3',
//         		'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
//         	}
//         };

//         fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${fruit}`, options)
//         	.then(response => response.json())
//         	.then(response =>{
//                 if(response == ""){
//                     alert("invalid data");
//                 }

//                 else{
//                     document.getElementById('box').innerHTML =  `

//                     <h1>${response.items[0].carbohydrates_total_g}</h1>
//                     `                                                        
//                 }
//             })
//             .catch(err => console.err(err));
//         }
//         eat.addEventListener("submit",handleSubmit)





const form = document.getElementById('myForm');

const handleSubmit = (e) => {

    const f1 = document.forms['myForm']['food'].value;
    e.preventDefault();

    // alert(f1);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6849132b2bmsh6a0660b422961a0p1389cajsncf47c11928f3',
            'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
        }
    };

    fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${f1}`, options)
        .then(response => response.json())
        .then(response => {

            response.items.map( (cval) => {


                document.getElementById('result').innerHTML = `

                
            


        

          <table>
          <tr >
          <th>calories</th>
                <td>  ${response.items[0].calories}</td>
             </tr>
            <tr>
            <th>sugar</th>
                <td> ${response.items[0].sugar_g}</td>
             </tr>
             <tr>
             <th>fiber</th>
                <td> ${response.items[0].fiber}</td>
             </tr>
             <tr>
             <th>serving</th>
                <td> ${response.items[0].serving_size_g}</td>
             </tr>
             <tr>
             <th>sodium</th>
                <td> ${response.items[0].sodium_mg}</td>
             </tr>
             <tr>
             <th>name</th>
                <td>${response.items[0].name}</td>
             </tr>
             <tr>
             <th>potassium</th>
                <td> ${response.items[0].potassium_mg}</td>
             </tr>
             <tr>
             <th>fat saturated</th>
                <td> ${response.items[0].fat_saturated_g}</td>
             </tr>
             <tr>
             <th>calories</th>
                <td> ${response.items[0].calories}</td>
             </tr>
             <tr>
             <th>cholesterol</th>
                <td> ${response.items[0].cholesterol_mg}</td>
             </tr>
             <tr>
             <th>protein</th>
                <td> ${response.items[0].protein_g}</td>
             </tr>
             <tr>
             <th>carbohydrates</th>
                <td> ${response.items[0].carbohydrates_total_g}</td>
                
             </tr>
             
         </table>

            
        
        `
            })

        })
        .catch(err => console.error(err));





}

form.addEventListener('submit', handleSubmit)



