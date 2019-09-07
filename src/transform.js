// created groupAdultsByAgeRange function
const groupAdultsByAgeRange = (people) => {

    // filtered people under 18
    people = people.filter((person) => person.age >= 18)

    // empty array returns empty object
    if (people.length === 0) {
        return people = {};
    }

    // created accuumulator for reduce
    const ageCategories = {
        "20 and younger": [],
        "21-30": [],
        "31-40": [],
        "41-50": [],
        "51 and older":[]
    }

    // grouping arrays of people by age
    // only non-empty arrays
    // DOESN'T WORK :((
    const result = people.reduce((ageRange, currentPerson) => {
        if (currentPerson.age <= 20) {
            ageRange["20 and younger"].push(currentPerson)
            if (ageRange["20 and younger"].length < 1){
                delete ageRange["20 and younger"]
            }
            return ageRange;
        } else if (currentPerson.age <= 30) {
            ageRange["21-30"].push(currentPerson)
            if (ageRange["21-30"].length < 1){
                delete ageRange["21-30"]
            }
            return ageRange;
        } else if (currentPerson.age <= 40) {
            ageRange["31-40"].push(currentPerson)
            if (ageRange["31-40"].length < 1){
                delete ageRange["31-40"]
            }
            return ageRange;
        } else if (currentPerson.age <= 50) {
            ageRange["41-50"].push(currentPerson)
            if (ageRange["41-50"].length < 1){
                delete ageRange["41-50"]
            }
            return ageRange;
        } else if (currentPerson.age >= 51) {
            ageRange["51 and older"].push(currentPerson)
            if (ageRange["51 and older"].length > 0){
                delete ageRange["51 and older"]
            }
            return ageRange;
        }
        return result;

    }, ageCategories)

}
 
// exported the function
module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange