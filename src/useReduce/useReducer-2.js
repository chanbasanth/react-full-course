import React, { useReducer, useEffect, useState } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER_DETAILS":
            return { ...state, userData: action.payload };

        case "LOADING":
            return { ...state, isLoading: action.payload };

        case "ERROR":
            return { ...state, isError: action.payload };

        case "DELETE":
            return {
                ...state,
                userData: state.userData.filter((eachObj) => eachObj.id !== action.payload),
            };

        case "EDIT":
            return { ...state, isEditing: action.payload };

        case "UPDATE":
            return {
                ...state,
                userData: state.userData.map((eachObj) =>
                    eachObj.id === action.payload.id
                        ? { id: action.payload.id, name: action.payload.name, email: action.payload.email }
                        : eachObj
                ),
                isEditing: { status: false, id: "", name: "", email: "" }, // Reset editing state
            };

        default:
            return state;
    }
};

const Index = () => {
    const initialValue = {
        userData: [],
        isLoading: false,
        isError: { status: false, msg: "" },
        isEditing: { status: false, id: "", name: "", email: "" },
    };

    const [state, dispatch] = useReducer(reducer, initialValue);

    const handleDelete = (id) => {
        dispatch({ type: "DELETE", payload: id });
    };

    const updateData = (id, name, email) => {
        dispatch({ type: "UPDATE", payload: { id, name, email } });
    };

    const fetchUserData = async (url) => {
        dispatch({ type: "LOADING", payload: true });
        dispatch({ type: "ERROR", payload: { status: false, msg: "" } });

        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({ type: "UPDATE_USER_DETAILS", payload: data });
            dispatch({ type: "LOADING", payload: false });
        } catch (error) {
            console.log(error);
            dispatch({ type: "ERROR", payload: { status: true, msg: "Failed to fetch data" } });
            dispatch({ type: "LOADING", payload: false });
        }
    };

    useEffect(() => {
        fetchUserData("https://jsonplaceholder.typicode.com/users");
    }, []);

    if (state.isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>User Information</h1>

            {state.isEditing?.status && (
                <UserEditForm
                    id={state.isEditing.id}
                    comingName={state.isEditing.name}
                    comingEmail={state.isEditing.email}
                    updateData={updateData}
                />
            )}

            {state.userData.map((each) => {
                const { name, email, id } = each;
                return (
                    <div key={id} style={{ backgroundColor: "#F2B5E1", gap: "1rem" }}>
                        <h2>{name}</h2>
                        <p>{email}</p>
                        <button
                            onClick={() =>
                                dispatch({ type: "EDIT", payload: { status: true, id, name, email } })
                            }
                        >
                            Edit
                        </button>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
};

const UserEditForm = ({ id, comingName, comingEmail, updateData }) => {
    const [userName, setUserName] = useState(comingName || "");
    const [userEmail, setUserEmail] = useState(comingEmail || "");

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    updateData(id, userName, userEmail);
                }}
            >
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="email@.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <button type="submit">Update Data</button>
            </form>
        </div>
    );
};

export default Index;
