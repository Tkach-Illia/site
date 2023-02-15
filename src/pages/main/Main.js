import React, {useState} from 'react';
import './Main.css';
import NavPanel from "../../components/main/leftBar/NavPanel";
import Center from "../../components/main/center/Center";
import ModalForm from "../../components/main/modalForm/ModalForm";
import RightPanel from "../../components/main/rightPanel/RightPanel";

const Main = () => {

    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <main className="main">

            <Center/>
            <NavPanel/>
            {visibleModal &&
                (<ModalForm setVisible={setVisibleModal}/>)
            }
            <RightPanel setVisible={setVisibleModal}/>
        </main>
    );
};

export default Main;