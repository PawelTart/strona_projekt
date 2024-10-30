
let key;
try {
    key = Config.MY_KEY;
    console.log("Key exists")

} catch (e) {
    if (e instanceof ReferenceError) {
        key = null
        console.log("key doesnt exists")
    } else {
        console.log(e);
    }

}
// lista tagow urzywanych do wyszkuania (fajnie jakby było obiektem tag ale nie musi)
let tagArray = [{
    display_name: "Pink",
    id: 8322951,
    name: "pink",
    parent_tag_name: null,
    root_tag_type: "feature_page",
    type: "feature_page"
},
{
    display_name: "Walmart Meal Planning",
    id: 8323092,
    name: "walmart_meal_planning",
    parent_tag_name: null,
    root_tag_type: "business_tags",
    type: "business_tags"
},
{
    display_name: "Dole Desserts",
    id: 8719453,
    name: "dole_desserts",
    parent_tag_name: null,
    root_tag_type: "feature_page",
    type: "feature_page"
},
{
    display_name: "Cuisine",
    id: 8757513,
    name: "cuisine",
    parent_tag_name: null,
    root_tag_type: "cuisine",
    type: "cuisine"
}]

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': key,
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
    }
};
const recipeList = document.getElementById("tag_list")


getRecipesFromTags().then(Array => displayRecipes(Array))
async function displayRecipes(recipesArray) {
    try {
        console.log(recipesArray)
        recipesArray.forEach(element => {
            console.log(element.name)
            let li = document.createElement('li');
            li.className = ""//dodanie klasy do wygladu

            li.innerText = element.name


            recipeList.appendChild(li);
        })

    } catch (error) {
        console.log(error)
    }
}
async function getRecipesFromTags() {
    let apiUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags='
    tagArray.forEach((element, index) => {
        apiUrl = apiUrl.concat(element.name);
        if (index != tagArray.length - 1) {
            apiUrl = apiUrl.concat("%20");
        }
    });
    const response = await fetch(apiUrl, options)
    if (!response.ok) {
        throw new Error("Could not fetch recipe data");
    }
    const jsonClass = await response.json();
    return jsonClass["results"];
}




