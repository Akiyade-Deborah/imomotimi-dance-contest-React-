import Head from "next/head";
import Image from "next/image";
import Home from "../component/header";
import Down from "../component/down";
import Note from "../component/note";
import Map from "../component/map";
import Info from "../component/info";
import Footer from "../component/footer";

const OnePage = () => {
    return (
        <div>
            <Head>
            <meta charset="UTF-8" /> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>OnePage Website </title>
            </Head>
            <Home />
            <Down />
            <Note />
            <Map />
            <Info />
            <Footer />
        
        </div>
    );
}

export default OnePage;