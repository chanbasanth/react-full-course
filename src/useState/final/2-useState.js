import React , {useState} from "react";

const Index = () => {

  const obj = [
    {
      id : "1",
      firstName : "Chanbasanth",
      lastName : "Kurva",
      age : "22"
    },
    {
      id : "2",
      firstName : "Ashok",
      lastName : "Kurva",
      age : "21"
    },
    {
      id : "3",
      firstName : "Ganapathi",
      lastName : "Kurva",
      age : "22"
    },
    {
      id : "4",
      firstName : "Kailash",
      lastName : "Gunta",
      age : "23"
    },
    {
      id : "5",
      firstName : "Naveen",
      lastName : "Mangadudla",
      age : "24"
    },
    {
      id : "6",
      firstName : "Venkatesh",
      lastName : "Nayak",
      age : "24"
    },
    {
      id : "7",
      firstName : "Srikanth",
      lastName : "Kotrike",
      age : "18"
    }

  ];

  const[data, setData] = useState(obj);
  
  const deleteObject = (eachId) => {
   const filterdData = data.filter((each) => {
    return each.id !== eachId;
   })
   setData(filterdData);
  }

  return(
    <div>
      <ul>
         {data.map((eachObj, index) => {
          const{id, firstName, lastName, age} = eachObj;
           return(
            <li key = {index} style = {{margin : "15px"}}>
              <div>first_Name : <strong>{firstName}</strong></div>
              <div>second_Name : <strong>{lastName}</strong></div>
              <div>age : <strong>{age}</strong></div>
              <button onClick={() => deleteObject(id)}>Delete me!</button>
            </li>
           )
         })}
      </ul>
    </div>
  )
}

export default Index;

