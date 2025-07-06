import {friends} from "../utils/constants.js";

const ShowPhotos = () => {
    return (
        <>
            {friends.map((friend,index) => (index === 6 ? <img className="bottomLeft col-sm-4 p-1" src={friend} alt="Friend"/> :
                index === 8 ? <img className="bottomRight col-sm-4 p-1" src={friend} alt="Friend"/> :
                    <img className="col-sm-4 p-1" src={friend} alt="Friend"/>))}
        </>
    );
};

export default ShowPhotos;