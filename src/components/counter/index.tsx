import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {decrement, increment, incrementByAmount} from "../../redux/features/counter/counterSlice.ts";

export function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return <>
        <p>Counter count: {count}</p>
        <button type={'button'} onClick={() => {
            dispatch(decrement())
        }}>-1
        </button>
        <button type={'button'} onClick={() => {
            dispatch(increment())
        }}>+1
        </button>
        <button type={'button'} onClick={() => {
            dispatch(incrementByAmount(5))
        }}>+5
        </button>
    </>
}