//const tinderUser= new Object()   singleton object
const tinderUser={} //non singleton

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIN= false

//console.log(tinderUser)

const regularUser={
    email: "vanshika@gmail.com",
    fullname:{
        userfullname:{
            firstname: "vanshika",
            lastname:"khiyani",
            }
        }
    }

   // console.log(regularUser.fullname.userfullname.firstname)

    const obj1={1:"a", 2:"b"}
    const obj2={3:"a",4:"b"}
   // const obj3={obj1,obj2}

  //const obj3=Object.assign({},obj1,obj2) //{}target, obj1, obj2 source
    
  const obj3={...obj1,...obj2}
  console.log(obj3)

  console.log(Object.keys(tinderUser));
  console.log(Object.values(tinderUser)); //gives values in form of array
  console.log(Object.entries(tinderUser));
  
  console.log(tinderUser.hasOwnProperty('name'));
  
  const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
  }

  //normal syntax
  //course.courseInstructor

  const{courseInstructor: instructor}=course //destructure
  console.log(instructor)
  





