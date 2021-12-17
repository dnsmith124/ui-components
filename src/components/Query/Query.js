import React, {useState, useEffect} from "react";
import TextInput from "../FormFields/TextInput";
import Select from "../FormFields/Select";
import Toggle from "../Toggle/Toggle";
import Button from "../FormFields/Button";
import {ReactComponent as CircleAdd} from '../../Icons/Buttons/Circle Add.svg'
import {ReactComponent as CircleClose} from '../../Icons/Buttons/Circle Close.svg'
import {ReactComponent as CircleUp} from '../../Icons/Directional/Property 1=Up-1.svg'
import AnimateHeight from "react-animate-height";


const Query = ({newQuery, handleAdd, handleRemove}) => {

  const [proMode, setProMode] = useState(false);
  const [currentPredicate, setCurrentPredicate] = useState('');
  const [currentSubjectOne, setCurrentSubjectOne] = useState('');
  const [currentCurieOne, setCurrentCurieOne] = useState('');
  const [currentSubjectTwo, setCurrentSubjectTwo] = useState('');
  const [currentCurieTwo, setCurrentCurieTwo] = useState('');
  const [isNewQuery, setIsNewQuery] = useState(newQuery);
  const [height, setHeight] = useState(0);
  const [queryOpen, setQueryOpen] = useState(true);
  // Remove after testing, use other state
  const [fields, setFields] = useState({}); // Initial object state established below in useEffect
  // const [fieldsNeedRefresh, setFieldsNeedRefresh] = useState(true);

  var queryOpenClass = (queryOpen) ? 'open' : 'closed';

  handleAdd = (handleAdd) ? handleAdd : () => {}
  handleRemove = (handleRemove) ? handleRemove : () => {}

  const handleChange = (e) => {

  }

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(e);
    validateSubmission(e);
  }

  const validateSubmission = (e) => {

  }

  useEffect(() => {
    let newFields = {
      subjectOne : currentSubjectOne,
      curieOne : currentCurieOne,
      predicate : currentPredicate,
      subjectTwo : currentSubjectTwo,
      curieTwo : currentCurieTwo,
    }
    setFields(newFields);
  }, [currentSubjectOne, currentCurieOne, currentPredicate, currentSubjectTwo, currentCurieTwo])

  useEffect(() => {
    console.log(fields);
  }, [fields])

  useEffect(() => {
    if(queryOpen === false)
      setHeight(0);
    else
      setHeight('auto');
  }, [queryOpen])

  return (
    <>
      {
        !isNewQuery && 
        <div className={`${queryOpenClass} query-window`} >
          <div className="header">
            <h3 className="h5 heading">Query</h3>
            <div className="buttons">
              <button onClick={()=>{setQueryOpen(!queryOpen);}} className="open-toggle"><CircleUp/></button>
              <button onClick={handleRemove}><CircleClose/></button>
            </div>

            <span className="current-query">
              { 
                // currentSubjectOne && 
                // currentPredicate && 
                // currentSubjectTwo && 
                // `${currentSubjectOne} : ${currentPredicate} in ${currentSubjectTwo}`
              }
              </span>
          </div>
          <AnimateHeight className={``}
            duration={250}
            height={height}
          >
          {!proMode &&  
            <form onSubmit={handleSubmission}>
              <Select 
                label="Subject" 
                size="m" 
                handleChange={(value)=>{
                  setCurrentSubjectOne(value);
                  handleChange(value);
                }}
              >
                <option value="Chemical" key="0">Chemical</option>
                <option value="Subject2" key="1">Subject2</option>
                <option value="Subject3" key="2">Subject3</option>
              </Select>
              <TextInput 
                label="CURIE" 
                size="m" 
                placeholder="" 
                handleChange={(value)=>{
                  setCurrentCurieOne(value);
                  handleChange(value);
                }}
              />
              <Select 
                label="Predicate" 
                size="l" 
                handleChange={(value)=>{
                  setCurrentPredicate(value);
                  handleChange(value);
                }}
              >
                <option value="Predicate1" key="0">Predicate1</option>
                <option value="Predicate2" key="1">Predicate2</option>
                <option value="Predicate3" key="2">Predicate3</option>
              </Select>
              <Select 
                label="Subject" 
                size="m" 
                handleChange={(value)=>{
                  setCurrentSubjectTwo(value);
                  handleChange(value);
                }}
              >
                <option value="Gene" key="0">Gene</option>
                <option value="Protein" key="1">Protein</option>
                <option value="Subject3" key="2">Subject3</option>
              </Select>
              <TextInput 
                label="CURIE" 
                size="m" 
                placeholder="" 
                handleChange={(value)=>{
                  setCurrentCurieTwo(value);
                  handleChange(value);
                }}
              />
              <div className="form-footer">
                <Button type="submit">Submit Query</Button>
              </div>
            </form>
          }
          {proMode &&  
            <>
            <h2>Pro Mode Interface TBD</h2>
            </>
          }
          
          <Toggle labelInternal={false} labelOne="Lite" labelTwo="Pro" checked onClick={()=>{setProMode(!proMode)}} />

          </AnimateHeight>
        </div>
      }
      {
        isNewQuery && 
        <div className="new query-window">
          <div className="header">
            <h5 className="heading">New Query</h5>
            <div className="buttons">
              <button onClick={()=>{handleAdd();}}><CircleAdd/></button>
            </div>
          </div>
        </div>
      }
    </>
  );
}


export default Query;