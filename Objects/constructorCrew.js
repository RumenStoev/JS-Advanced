function constructionCrew(object) {

    if(object.dizziness === true) {
        object.levelOfHydrated += Math.round(object.weight * 0.1) * object.experience
        object.dizziness = false
    }
     return object
}


console.log(
    constructionCrew({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    })
)

=> { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }
