import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
            <Cousin name={"Anti"}  asset={asset}></Cousin>
            <Cousin name="Jeri"></Cousin>
            </section>
        </div>
    );
};

export default Uncle;