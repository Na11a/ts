import React, { useRef } from "react";
interface toDoFormProps{
    onAdd(title:string):void
}
export const ToDoForm: React.FC<toDoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null)
  const keyPressHandler = (event:React.KeyboardEvent) =>{
      if(event.key === 'Enter'){
        props.onAdd(ref.current!.value)
        ref.current!.value = ''
      }
  }
  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Input task title"
        onKeyPress={keyPressHandler}
      ></input>
      <label htmlFor="title" className="active">
        {" "}
        Input task title
      </label>
    </div>
  );
};
