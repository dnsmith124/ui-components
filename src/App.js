import './App.scss';
import React, {useState, useEffect} from "react";
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tabs/Tab';
import Circle from './components/Misc/Circle';
import Toggle from './components/Toggle/Toggle';
import Radio from './components/FormFields/Radio';
import Checkbox from './components/FormFields/Checkbox';
import Button from './components/FormFields/Button';
import TextInput from './components/FormFields/TextInput';
import Select from './components/FormFields/Select';
import Search from './components/Search/Search';
import Alert from './components/Alert/Alert';
import {ReactComponent as Checkmark} from './Icons/Buttons/Checkmark.svg'
import {Fade} from 'react-awesome-reveal';
import Query from './components/Query/Query';

function App() {

  const [numQueries, setNumQueries] = useState(1);

  const handleAddQuery = () => {
    setNumQueries(numQueries + 1);
  }
  
  const handleRemoveQuery = () => {
    setNumQueries(numQueries - 1);
  }
  
  useEffect(() => {

  }, [numQueries])


  return (
  <div className="App">
    <header className="App-header">
      <Fade>
        <h1>
          Translator UI Components
        </h1>
      </Fade> 
    </header>
    <div className="container">
    <Tabs>
      <Tab heading="Typography">
        <p className="h1">H1 Headline</p>
        <p className="h2">H2 Headline</p>
        <p className="h3">H3 Headline</p>
        <p className="h4">H4 Headline</p>
        <p className="h5">H5 Headline</p>
        <p className="h6">h6 Headline</p>
        <p className="sub-one">Subtitle 1</p>
        <p className="sub-two">Subtitle 2</p>
        <p className="body-one">Body 1</p>
        <p className="body-two">Body 2</p>
        <button>Button</button>
        <p className="caption">Caption</p>
        <p className="overline">Overline</p>
      </Tab>
      <Tab heading="Colors">
        <div className="circle-container">
          <p>Red
          <br />
          #A62639</p>
          <Circle color="red" />
        </div>
        <div className="circle-container">
          <p>Yellow
          <br />
          #FBAF00</p>
          <Circle color="yellow" />
        </div>
        <div className="circle-container">
          <p>Green
          <br />
          #238571</p>
          <Circle color="green" />
        </div>
        <div className="circle-container">
          <p>Translator Blue 1
          <br />
          #003494</p>
          <Circle color="blue-one" />
        </div>
        <div className="circle-container">
          <p>Translator Blue 2
          <br />
          #2D5492</p>
          <Circle color="blue-two" />
        </div>
        <div className="circle-container">
          <p>Translator Purple 1
          <br />
          #662E6B</p>
          <Circle color="purple-one" />
        </div>
        <div className="circle-container">
          <p>Translator Purple 2
          <br />
          #524F81</p>
          <Circle color="purple-two" />
        </div>
        <div className="circle-container">
          <p>Dark Grey
          <br />
          #606368</p>
          <Circle color="dark-grey" />
        </div>
        <div className="circle-container">
          <p>Mid Grey
          <br />
          #CED0D0</p>
          <Circle color="mid-grey" />
        </div>
        <div className="circle-container">
          <p>Light Grey
          <br />
          #F5F7F7</p>
          <Circle color="light-grey" />
        </div>
        <div className="circle-container">
          <p>Black
          <br />
          #202124</p>
          <Circle color="black" />
        </div>
        <div className="circle-container">
          <p>White
          <br />
          #FFFFFF</p>
          <Circle color="white" />
        </div>
      </Tab>
      <Tab heading="Elevations">
        <div className="drop-shadow" style={{height:'100px', width:'300px', marginBottom:'20px', display:'grid', alignContent:'center', justifyContent:'center'}}>
          <h4 style={{marginBottom:'0'}} >Hover</h4>
        </div>
        <div className="drop-shadow pressed" style={{height:'100px', width:'300px', marginBottom:'20px', display:'grid', alignContent:'center', justifyContent:'center'}}>
          <h4 style={{marginBottom:'0'}} >Pressed</h4>
        </div>
      </Tab>
      <Tab heading="Interactions">
        <div className="component">
          <h5>Checkbox</h5>
          <Checkbox>Checkbox Example</Checkbox>
          <Checkbox>Checkbox Example</Checkbox>
          <Checkbox>Checkbox Example</Checkbox>
          <Checkbox checked={true}>Checkbox Example</Checkbox>
        </div>
        <div className="component">
          <h5>Radio</h5>
          <Radio>Radio Button Example</Radio>
          <Radio>Radio Button Example</Radio>
          <Radio>Radio Button Example</Radio>
          <Radio checked>Radio Button Example</Radio>
        </div>
        <div className="component">
          <h5>Toggle</h5>
          <Toggle checked={false} />
          <Toggle labelOne="On" labelTwo="Off" labelInternal checked={false} />
          <Toggle labelOne="On" labelTwo="Off" labelInternal={false} checked={false} />
        </div>
        <div className="component">
          <h5>Button</h5>
          <Button handleClick={()=>{console.log('clicked');}}>Button Type One</Button>
          <Button isSecondary><Checkmark/> Button Type Two</Button>
          <Button isSecondary={false} ><Checkmark/>Button With Icon</Button>
          <Button href="https://google.com" isSecondary _blank ><Checkmark/>Button With Icon</Button>
          <Button href="https://google.com" isSecondary={false} iconOnly><Checkmark/></Button>
        </div>
      </Tab>
      <Tab heading="Form Fields">
        <div className="component">
          <h5>Inputs</h5>
          <TextInput label="Label" subtitle="Subtitle" placeholder="Small" size="s" />
          <TextInput label="Label" subtitle="Subtitle" placeholder="Small" size="s" />
          <TextInput label="Label" subtitle="Subtitle" placeholder="Medium" size="m" />
          <TextInput label="Label" subtitle="Subtitle" placeholder="Large" size="l" />
          <TextInput label="Label" subtitle="Subtitle" placeholder="Medium Multi Row" size="m" rows="4" />
          <TextInput label="Label" subtitle="Subtitle" placeholder="Medium Multi Row" size="m" rows="4" />
          <Select label="Label" subtitle="Subtitle" name="option_selector">
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
            <option value="option4">Option4 that is way too long</option>
          </Select>
          <Select label="Label" subtitle="Subtitle" name="option_selector" size="s">
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
            <option value="option4">Option4 that is way too long</option>
          </Select>
          <Select label="Label" subtitle="Subtitle" name="option_selector" size="m">
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
            <option value="option4">Option4 that is way too long</option>
          </Select>
          <Select label="Label" subtitle="Subtitle" name="option_selector" size="l">
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
            <option value="option4">Option4 that is way too long</option>
          </Select>
          <Search iconInternal/>
          <Search size="m" />
          <Search iconInternal size="s" />
          <Search size="l" />
        </div>
      </Tab>
      <Tab heading="Notifications">
        <div className="component">
          <h5>Alerts</h5>
          <Alert 
            type="success" 
            buttonText="Alert Top Left" 
            timeout={5000} 
            verticalPosition="top" 
            horizontalPosition="left"
            >
            <h3 className="sub-one">Success!</h3>
            <p className="body-two">Message Details</p>
          </Alert>
          <Alert 
            type="warning" 
            buttonText="Alert Top Middle" 
            timeout={5000} 
            verticalPosition="top" 
            horizontalPosition="middle"
            >
            <h3 className="sub-one">Warning!</h3>
            <p className="body-two">Message Details</p>
          </Alert>
          <Alert 
            type="error" 
            buttonText="Alert Top Right" 
            timeout={5000} 
            verticalPosition="top" 
            horizontalPosition="right"
            >
            <h3 className="sub-one">Cancelled!</h3>
            <p className="body-two">Message Details</p>
          </Alert>
          <Alert 
            type="info" 
            buttonText="Alert Middle Left" 
            timeout={5000} 
            verticalPosition="middle" 
            horizontalPosition="left"
            >
            <h3 className="sub-one">Information</h3>
            <p className="body-two">Message Details</p>
          </Alert>
          <Alert 
            type="success" 
            buttonText="Alert Middle Middle" 
            timeout={5000} 
            >
            <h3 className="sub-one">Success</h3>
            <p className="body-two">Message Details</p>
          </Alert>
          <Alert 
            type="warning" 
            buttonText="Alert Middle Left" 
            timeout={5000} 
            verticalPosition="middle" 
            horizontalPosition="right"
            >
            <h3 className="sub-one">Warning!</h3>
            <p className="body-two">Message Details</p>
          </Alert>
          <Alert 
            type="error" 
            buttonText="Alert Bottom Left" 
            timeout={5000} 
            verticalPosition="bottom" 
            horizontalPosition="left"
            >
            <h3 className="sub-one">Error!</h3>
            <p className="body-two">Message Details</p>
          </Alert>
          <Alert 
            type="info" 
            buttonText="Alert Bottom Middle" 
            timeout={5000} 
            verticalPosition="bottom" 
            horizontalPosition="middle"
            >
            <h3 className="sub-one">Information</h3>
            <p className="body-two">Message Details</p>
          </Alert>
          <Alert 
            type="success" 
            buttonText="Alert Bottom Right" 
            timeout={5000} 
            verticalPosition="bottom" 
            horizontalPosition="right"
            >
            <h3 className="sub-one">Success!</h3>
            <p className="body-two">Message Details</p>
          </Alert>
          <Alert 
            type="success" 
            buttonText="Alert No Fade Out" 
            timeout={5000} 
            verticalPosition="top" 
            horizontalPosition="middle"
            toggle
            >
            <h3 className="sub-one">Success!</h3>
            <p className="body-two">Message Details</p>
          </Alert>
        </div>
      </Tab>
      <Tab heading="Query Window">
        { 
          [...Array(numQueries)].map((_, i) => {
            return <Query key={i} open handleAdd={handleAddQuery} handleRemove={handleRemoveQuery} />
          }) 
        }
        <Query newQuery handleAdd={handleAddQuery} handleRemove={handleRemoveQuery} />
        {
             
        }
      </Tab>
    </Tabs>
    </div>
  </div>
  );
}

export default App;
