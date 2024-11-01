import SpecialFriend from "../SpecialFriend/SpecialFriend";

const Myself = ({asset}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section className="flex">
            <SpecialFriend asset={asset}></SpecialFriend>
            </section>
        </div>
    );
};

export default Myself;