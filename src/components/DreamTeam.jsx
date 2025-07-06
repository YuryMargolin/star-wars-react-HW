import {friends} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
            <h2 className="text-center">Dream team</h2>
            {friends.map((friend,index) => (index === 6 ? <img className="bottomLeft col-sm-4 p-1" src={friend} alt="Friend"/> :
                index === 8 ? <img className="bottomRight col-sm-4 p-1" src={friend} alt="Friend"/> :
                    <img className="col-sm-4 p-1" src={friend} alt="Friend"/>))}
        </section>
    );
};

export default DreamTeam;