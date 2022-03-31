import React, { useState, useEffect } from 'react';
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const nav = useNavigate()
  // testing
  const [supportsBluetooth, setSupportsBluetooth] = useState(false);
  const [isDisconnected, setIsDisconnected] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(null);

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
  
    /**
     * Update the value shown on the web page when a notification is
     * received.
     */
    const handleCharacteristicValueChanged = (event) => {
      setBatteryLevel(event.target.value.getUint8(0) + '%');
    }
    var NORDIC_SERVICE = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
    /**
     * Attempts to connect to a Bluetooth device and subscribe to
     * battery level readings using the battery service.
     */
    const connectToDeviceAndSubscribeToUpdates = async () => {
      try {
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
  
        // Get the battery service from the Bluetooth device
        const service = await server.getPrimaryService(NORDIC_SERVICE);
  
        // Get the battery level characteristic from the Bluetooth device
        const characteristic = await service.getCharacteristic('battery_level');
  
        // Subscribe to battery level notifications
        characteristic.startNotifications();
  
        // When the battery level changes, call a function
        characteristic.addEventListener('characteristicvaluechanged',
                                    handleCharacteristicValueChanged);
        
        // Read the battery level value
        const reading = await characteristic.readValue();
  
        // Show the initial reading on the web page
        setBatteryLevel(reading.getUint8() + '%');
      } catch(error) {
        console.log(`There was an error: ${error}`);
      }
    };

  
  return (
    <>
      <Card>
          <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email: </strong> {currentUser.email}
              <Link to="/update" className="btn btn-primary w-100 mt-3">Update Profile</Link>
          </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>

      <div className="App">
      <h1>Get Device Battery Info Over Bluetooth</h1>
      {supportsBluetooth && !isDisconnected &&
            <p>Battery level: {batteryLevel}</p>
      }
      {supportsBluetooth && isDisconnected &&
        <button onClick={connectToDeviceAndSubscribeToUpdates}>Connect to a Bluetooth device</button>
      }
      {!supportsBluetooth &&
        <p>This browser doesn't support the Web Bluetooth API</p>
      }
    </div>

    </>
  );
}
