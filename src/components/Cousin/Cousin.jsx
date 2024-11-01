import SpecialFriend from "../SpecialFriend/SpecialFriend";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <SpecialFriend asset={asset}></SpecialFriend>}
            </section>
        </div>
    );
};

export default Cousin;