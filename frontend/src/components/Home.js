import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Alert, Navbar, Container, Nav } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import"../../src/pretty.css";
import { db } from "../firebase";
import { collection, addDoc, getDoc, QuerySnapshot, getDocs } from "firebase/firestore";


export default function Home() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const nav = useNavigate()
  // testing
  const [supportsBluetooth, setSupportsBluetooth] = useState(false);
  const [isDisconnected, setIsDisconnected] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [fullDate, setFullDate] = useState(null);
  // Getting date & time
  var currentDate = new Date().toLocaleString();
  const formData = document.querySelector(".form-data");

  // FUNCT
  async function handleLogout() {
    setError("")
    try{
        await logout()
        nav("/login")
    }catch {
        setError("Failed to log out")
    }
  }
  
  // testing things
    // When the component mounts, check that the browser supports Bluetooth
    useEffect(() => {
      if (navigator.bluetooth) {
        setSupportsBluetooth(true);
      }
    }, []);
  
    /**
     * Let the user know when their device has been disconnected.
     */
    const onDisconnected = (event) => {
      alert(`The device ${event.target} is disconnected`);
      setIsDisconnected(true);
    }
  
    // UFT STUFF
    let encoder = new TextEncoder();
    /**
     * Update the value shown on the web page when a notification is
     * received.
     */
    const handleCharacteristicValueChanged = (event) => {
      let val = event.target.value;
      setBatteryLevel(new TextDecoder().decode(val)); // CHANGE
      setFullDate(currentDate);
      // ADDING TO FIRESTORE
       addDoc(collection(db, "plates"), {
        license: new TextDecoder().decode(val),
        time: currentDate,
      });
      
      function createFormData(doc) {
        let div = document.createElement('DIV');
        let license = document.createElement('span');
        let time = document.createElement('span');
        div.classList.add("form-info");
        license.textContent = doc.data().license;
        time.textContent = doc.data().time;

        div.appendChild(license);
        div.appendChild(time);

        formData.appendChild(div);
      }

      // GETTING FROM FIRESTORE
      getDocs(collection(db,"plates")).then((snapshot) => {
          snapshot.forEach((doc) => {
            createFormData(doc);
          })
      })
    }
    // Connect to nordic bluetooth
    var NORDIC_SERVICE = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
    // Get data from bluetooth
    var NORDIC_CHAR = "6e400003-b5a3-f393-e0a9-e50e24dcca9e";

    /**
     * Attempts to connect to a Bluetooth device and subscribe to
     * battery level readings using the battery service.
     */
    const connectToDeviceAndSubscribeToUpdates = async (ev) => {
      try {
        ev.preventDefault();
        // Search for Bluetooth devices that advertise a battery service
        const device = await navigator.bluetooth
          .requestDevice({
            filters: [{services: [NORDIC_SERVICE]}]
          });
  
        setIsDisconnected(false);
  
        // Add an event listener to detect when a device disconnects
        device.addEventListener('gattserverdisconnected', onDisconnected);
  
        // Try to connect to the remote GATT Server running on the Bluetooth device
        const server = await device.gatt.connect();
  
        // Get the nordic service from the Bluetooth device
        const service = await server.getPrimaryService(NORDIC_SERVICE);
  
        // Get the transmission characteristic from the Bluetooth device
        const characteristic = await service.getCharacteristic(NORDIC_CHAR);
  
        // Subscribe to battery level notifications
        characteristic.startNotifications();
  
        // When the battery level changes, call a function
        characteristic.addEventListener('characteristicvaluechanged',
                                    handleCharacteristicValueChanged);
        
        // Read the battery level value
        const reading = await characteristic.readString();
        
        // Show the initial reading on the web page
        setBatteryLevel(reading.getStringValue(encoder)); // CHANGE
        setFullDate(currentDate);
        
      } catch(error) {
        console.log(`There was an error: ${error}`);
      }
    };


  
  return (
    <>
      <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">
            <img
            alt=""
            src="/eye.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            CSS
            </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/update">Update Profile</Nav.Link>
              </Nav>
              
                {/* {supportsBluetooth && !isDisconnected &&
                          <p>String: {batteryLevel} <br /> {fullDate}</p>
                } */}
                {supportsBluetooth && isDisconnected &&
                  <Button onClick={connectToDeviceAndSubscribeToUpdates}>Connect Bluetooth Device</Button>
                }
                {!supportsBluetooth &&
                  <p>This browser doesn't support the Web Bluetooth API</p>
                }
              
              <Nav className="navbarScroll">
                <Button className=" mx-3 btn-secondary"onClick={handleLogout} >Logout</Button>
              </Nav>
              

              {/* <div className="App">
                  <h3>Get Device Battery Info Over Bluetooth</h3>
                  {supportsBluetooth && !isDisconnected &&
                        <p>String: {batteryLevel} <br /> {fullDate}</p>
                  }
                  {supportsBluetooth && isDisconnected &&
                    <Button onClick={connectToDeviceAndSubscribeToUpdates}>Connect Bluetooth Device</Button>
                  }
                  {!supportsBluetooth &&
                    <p>This browser doesn't support the Web Bluetooth API</p>
                  }
                </div> */}

            </Container>
      </Navbar>
      <div className="bg">
        <Container className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}>
          <Card>
              <Card.Body>
                  
                    <div className="form-submissions">
                      <h2>Detected Plates</h2>
                      <div className="form-container">
                        <div className="form-data">
                          <div className="form-titles">
                            <h4>License:</h4>
                            <h4>Time:</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  
      
              </Card.Body>
          </Card>
        </Container>
      </div>

    </>
  );
}
