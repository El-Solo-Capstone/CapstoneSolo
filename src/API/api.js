const Cohort_Name = 'CapstoneSolo'

const Base_Url = ` ${Cohort_Name}`

export async function fetchPosts() {
    try {
    let response = await fetch (`${Base_Url}`/posts)
    let results = await response.json()
    console.log(results.data.posts)
    return results.data.posts
    
    } catch (error) {
        console.log(error)
    }
}