import { useParams } from "react-router-dom";
function Profile() {
    const { id } = useParams();
    return(
        <>
            <h1>{id}</h1>
        </>
    );
}
export default Profile;