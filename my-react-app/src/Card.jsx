
function Card() {
    let name = "Dev-Mainak.Banduri";
    let role = "Junior Full Stack Software Developer"
    return (
        <div className="card">
            <img className='cardImg' alt='a profile pic' src="https://pbs.twimg.com/profile_images/1635328792137801767/mHxHdihp_400x400.jpg"></img>
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p>Passionate about building responsive and dynamic web applications, I specialize in both front-end and back-end development. Always eager to learn and grow, I thrive on solving complex problems and collaborating with teams to create impactful software solutions.
            </p>
        </div>
    );
}

export default Card