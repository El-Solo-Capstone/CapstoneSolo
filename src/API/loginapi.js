const Cohort_Name = 'CapstoneSolo'

const Base_Url = ` ${Cohort_Name}`

export const registerUser = async (username, password) => {
    try {
        const response = await fetch (` ${Base_Url}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                },
            }),
        });

        const result = await response.json();

        return result.data;
    } catch (error) {
        console.log(error);
    }

}