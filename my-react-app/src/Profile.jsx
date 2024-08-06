
function Profile() {
    const profilePicUrl = "./src/assets/mHxHdihp_400x400.jpg";

    let count = 0
    const clickHandler = (e) => {
        if (count < 3) {
            count++
            alert(`your profile pic will be deleted after ${count} times `);
        }
        else {
            e.target.style.display = "none";
        }
    }
    return (<>
        <h2>hi</h2>
        <img onClick={(e) => clickHandler(e)} src={profilePicUrl}>
        </img>
    </>);
}

export default Profile;