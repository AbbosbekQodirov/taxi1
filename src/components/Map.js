import {
    Box,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";
import Form from "./form/Form";

import "./Map.css"
import Button from "./button/Button";

import { animateScroll as scroll } from "react-scroll";

const center = { lat: 40.38298485291166, lng: 71.78271857530021 };

function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyANHJAE_PRvZDcO4akRZROTjcjnH3vwPXA",
    });

    const [map, setMap] = useState(/** @type google.maps.Map*/ null)

    const [addresOne, setAddressOne] = useState("");
    const [addresTwo, setAddressTwo] = useState("");
    const [count, setCount] = useState(0);
    



    if (!isLoaded) {
        return <SkeletonText />;
    }


    return (
        <Flex
            position="relative"
            flexDirection="column"
            alignItems="center"
            // bgColor='blue.200'
            // bgImage='https://images.unsplash.com/photo-1647117181799-0ac3e50a548a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            // bgPos='bottom'
            h="100vh"
            w="98vw"
            margin={"0 auto"}
        >

            
            <div className="category">
                <Button bg={"#4B2DD0"}>Buyurtmalar</Button>
                <Button bg={"#4B2DD0"}>Aktiv Buyurtmalar</Button>
                <Button func = {()=>{
                    
                    scroll.scrollTo(document.querySelector(".css-1x9grsb").scrollHeight);
                }} bg={"#4B2DD0"} >Haydovchilar</Button>
            </div>
            <Box position="absolute" left={0} top={0} h="100%" w="100%">
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    onLoad={map => setMap(map)}
                    onClick={(event)=>{
                        const clickedLocation = event.latLng;
                        const geocoder = new window.google.maps.Geocoder();

                        geocoder.geocode({ location: clickedLocation }, (results, status) => {
                            if (status === "OK") {
                                if(count == 0){
                                    setAddressOne(results[0].formatted_address);
                                    setCount(1)
                                } else{
                                    setAddressTwo(results[0].formatted_address)
                                }
                                
                            }
                        });

                    }}
                >
                    <Marker  position={center}></Marker>
                </GoogleMap>
            </Box>
            <Form addresOne={addresOne} addresTwo={addresTwo}/>
        </Flex>
    );
}

export default Map