
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';




const Grandpa = () => {

    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
        </div>
    );
};

export default Grandpa;
/**
 * 1. Create a context and  export it
 * 
 * 2. Add provider for the context with a value. value could be anything 
 * 
 * 
 * useContext to access value in the context API
 * 
 * 
 * */ 