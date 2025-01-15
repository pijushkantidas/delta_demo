let url = "http://universities.hipolabs.com/search?name="

let btn = document.querySelector("button")
btn.addEventListener("click", async ()=> {
    //console.log ("Button was clicked")
    let country = document.querySelector("input").value
    //console.log(country)
    let collegeArr = await getCollegeDetails(country);
    showColleges(collegeArr.data)
    //console.log ("From Listener :",collegeArr.data)
})

function showColleges(collegeArr){
    let list = document.querySelector("#list")
    list.innerText=" "
    for (college of collegeArr){
        console.log(college.name)

        let li = document.createElement("li")
        li.innerText = college.name
        list.append(li)
    }
}


//let country="nepal"

async function getCollegeDetails(country) {
    try{
        let result = await axios.get(url+country)
        //console.log(result)
        return result
    }
    catch(e){
        console.log("Error :",e)
        return []
    }
}