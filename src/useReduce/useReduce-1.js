
import React, {useReducer} from "react";

const reducer = (state, action) => {
    if(action.type === "DELETE_PERSON"){
        const userData = state.data.filter((eachObj) => {
            return eachObj.id !== action.payload ;
        });

        return{
            ...state,
            data : userData, 
            length : state.length - 1
        };
    }
    return state;
};

const Final = () => {

    const initialState = {
        data :[ {name : "chandu", email : "chanbasanth@gmail.com", id : "123"},
                {name : "Tharun", email : "tharun@gmail.com", id : "645"}
            ],
        length : 2
    };


   const [state, dispatch] = useReducer(reducer, initialState);

   const handleDelete = (id) => {
     dispatch({
        type : "DELETE_PERSON",
        payload : id
     })
   }

   const handleEdit = (id) => {
    dispatch({
        type : "UPDATE_PERSON",
        payload : id
    });
   }

    return <div>
        {
        state.data.map((each) => {
            const {name, email, id} = each;
                return <div key = {id}>
                    <h1>The length od State : {state.length}</h1>
                    <h2>{name}</h2>
                    <h3>{email}</h3>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                    <button onClick={() => handleEdit(id)}>Edit</button>
                </div>
            })
        }
    </div>
}

export default Final ;