import './App.css'
import SwitchButton from "./Button";
import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Navbar, Container, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [textarea, setTestarea] = useState("")
  const [wrongmessage, setwrongmessage] = useState("")
  const [formdata, setformdata] = useState(null)
  const [showplan, setshowplan] = useState(false)


  const validate = () => {
    let count = 3;
    let message = ""



    formdata.map((item, index) => {
      if (item.planName === undefined) {
        message += "Item " + (index + 1) + " planName is missing \n"
        console.log("Item " + (index + 1) + " planName is missing");
        count -= 1;
      }
      if (item.price === undefined) {
        message += "Item " + (index + 1) + " Price is missing \n"
        console.log("Item " + (index + 1) + " Price is missing");
        count -= 1;
      }
      if (item.function === undefined || item.function.length !== 5) {
        message += "Item " + (index + 1) + " Function is missing \n"
        console.log("Item " + (index + 1) + " Function is missing");
        count -= 1;
      }


    })

    if (count === 3) {
      setshowplan(true)

    } else {
      alert(message)
    }
  }
  const submit = () => {
    setshowplan(true)
  }
  const prettyPrint = async () => {

    validate();
  }
  const tickorcross = (func) => {
    if (func === true) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="green" class="bi bi-check" viewBox="0 0 16 16">
          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
        </svg>
      )
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="red" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      )
    }
  }
  if (showplan === false) {
    return (
      <div>
        <div>only accept this format of JSON</div>
        <pre>
          {`  
[
  {
    "planName": "string",
    "function": [bool, bool, bool, bool, bool],
    "price": int
  },
  {
    "planName": "string",
    "function": [bool, bool, bool, bool, bool],
    "price": int
  },
  {
    "planName": "string",
    "function": [bool, bool, bool, bool, bool],
    "price": int
  }
]`}
        </pre>
        <input
          type="text"
          name="textValue"
          value={textarea}
          onChange={(e) => {
            setTestarea(e.target.value)
            setformdata(JSON.parse(e.target.value))

          }}
        />
        <button onClick={() => {
          setwrongmessage("")
          if (formdata != null) {
            prettyPrint()
          } else {
            console.log("Wrong JSON format")
            setwrongmessage("Wrong JSON format \n")
            alert(wrongmessage)
          }




        }}>submit</button>
      </div>
    )
  } else {
    return (
      <div

        className={`bg ${darkMode ? "bgr-dark" : "bgr-light"}`}>
        <Navbar

          className={`navbar ${darkMode ? "nav-dark" : "nav-light"} `} expand="lg">

          <Container>
            <Navbar.Brand href="#home" className={darkMode ? "text-light" : "text-dark"}>Plan Selection</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item as="li">
                  <Nav.Link href="#home" className={darkMode ? "text-light" : "text-dark"}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#link" className={darkMode ? "text-light" : "text-dark"}>Plans</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <SwitchButton />
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1 className={`${darkMode ? "text-light" : "text-dark"} title`} >Choose a plan</h1>

        <div className={` ${darkMode ? "bgr-dark" : "bgr-light"} cardlist`}>


          <Card style={{ width: '18rem', border: "none", borderRadius: "20px" }}>

            <Card.Body className={` ${darkMode ? "card-dark" : "card-light"} shadow`}>
              <Card.Title className={`${darkMode ? "text-light" : "text-dark"}`}>Menu</Card.Title>
              <Card.Text className={`${darkMode ? "text-light" : "text-dark"}`}>


                <div className={"listitem menuitem"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                  </svg>
                  <div >Function</div>
                </div>
                <div className={"listitem menuitem"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                  </svg>
                  <div >Function</div>
                </div>
                <div className={"listitem menuitem"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                  </svg>
                  <div >Function</div>
                </div>
                <div className={"listitem menuitem"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                  </svg>
                  <div >Function</div>
                </div>
                <div className={"listitem menuitem"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                  </svg>
                  <div >Function</div>
                </div>

              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', border: "none", borderRadius: "20px" }} >

            <Card.Body className={` ${darkMode ? "card-dark" : "card-light"} shadow`}>
              <Card.Title className={`${darkMode ? "text-light" : "text-dark"} standardtitle`}>{formdata[0]?.planName ?? ""}</Card.Title>
              <Card.Text className={`${darkMode ? "text-light" : "text-dark"}`}>
                <div className={"listitem"}>

                  {tickorcross(formdata[0]?.function[0])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[0]?.function[1])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[0]?.function[2])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[0]?.function[3])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[0]?.function[4])}
                  <div >Function</div>
                </div>
              </Card.Text>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>              <input
                name="plan"
                type="radio"
                value="standard"
              />
                <div className={darkMode ? "text-light" : "text-dark"}>HK${formdata[0]?.price ?? 0}</div>
                <div className={darkMode ? "text-light" : "text-dark"} style={{ fontSize: "5px" }}>/month</div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', border: "none", borderRadius: "20px" }}>

            <Card.Body className={` ${darkMode ? "card-dark" : "card-light"} shadow`}>
              <Card.Title className={`${darkMode ? "text-light" : "text-dark"} goldentitle`}>{formdata[1]?.planName ?? ""}</Card.Title>
              <Card.Text className={`${darkMode ? "text-light" : "text-dark"}`}>
                <div className={"listitem"}>

                  {tickorcross(formdata[1]?.function[0])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[1]?.function[1])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[1]?.function[2])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[1]?.function[3])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[1]?.function[4])}
                  <div >Function</div>
                </div>
              </Card.Text>

              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
                <input
                  name="plan"
                  type="radio"
                  value="golden"
                />
                <div className={darkMode ? "text-light" : "text-dark"}>HK${formdata[1]?.price ?? 0}</div>
                <div className={darkMode ? "text-light" : "text-dark"} style={{ fontSize: "5px" }}>/month</div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', border: "none", borderRadius: "20px" }}>

            <Card.Body className={` ${darkMode ? "card-dark" : "card-light"} shadow `}>
              <Card.Title className={`${darkMode ? "text-light" : "text-dark"} diamondtitle`}>{formdata[2]?.planName ?? ""}</Card.Title>
              <Card.Text className={`${darkMode ? "text-light" : "text-dark"}`}>
                <div className={"listitem"}>

                  {tickorcross(formdata[2]?.function[0])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[2]?.function[1])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[2]?.function[2])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[2]?.function[3])}
                  <div >Function</div>
                </div>
                <div className={"listitem"}>
                  {tickorcross(formdata[2]?.function[4])}
                  <div >Function</div>
                </div>
              </Card.Text>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>            <input
                name="plan"
                type="radio"
                value="diamond"
              />
                <div className={darkMode ? "text-light" : "text-dark"}>HK${formdata[2]?.price ?? 0}</div>
                <div className={darkMode ? "text-light" : "text-dark"} style={{ fontSize: "5px" }}>/month</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className={"submitbtnfield"}>
          <button className={"submitbtn"} onClick={() => { submit() }}>Submit</button>
        </div>

      </div>
    );
  }
}

export default App;