import { useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="container text-center mt-5">
            <div className="card p-3">
                <h3>Count: {state.count}</h3>
                <div className="btn-group mt-3">
                    <button 
                        className="btn btn-success" 
                        onClick={() => dispatch({ type: 'increment' })}
                    >
                        +
                    </button>
                    <button 
                        className="btn btn-danger" 
                        onClick={() => dispatch({ type: 'decrement' })}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}
