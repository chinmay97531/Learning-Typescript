interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

// const user: User = User.findOne({where: {email: "xyz@gmail.com "}})

type UpdateProps = Pick<User, 'name' | 'age' | 'email'> // let u have change all of these
type UpdatePropsOptional = Partial<UpdateProps>         // let u to change any of th UpdateProps

function updateUser(updatedProps: UpdatePropsOptional){
    // hit the database
}