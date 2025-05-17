import '../sass/AboutMe.scss';

const AboutMe = ({aboutme}) =>{
    const firstName = (name) => {
        return name.trim().split(" ")[0];  
    };

    const download = (pdfPath) => {
        const isSameOrigin = pdfPath.startsWith(window.location.origin);

        if (isSameOrigin) {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = 'ArnabResume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            // Open in new tab if external
            window.open(pdfPath, '_blank');
        }
    }


    return(
        <div className="aboutme" id='about'>
            <h1>About Me</h1>
            <div className="inneraboutme">
                <div className="innerinneraboutme">
                    <img src={aboutme.about_me_picture} alt="" />
                    <div className="inneraboutmetext">
                        <span className='headeraboutmetext'>I'm {firstName(aboutme.name)}</span>
                        <span className="subheaderaboutmetext">{aboutme.position}</span><br />
                        <span className='parheaderaboutmetext'>
                            {aboutme.about_me}
                        </span>
                        <table className="aboutme-table">
                            <tbody>
                                <tr>
                                    <td><b>Email:</b></td>
                                    <td>{aboutme.email}</td>
                                </tr>
                                <tr>
                                    <td><b>Place:</b></td>
                                    <td>{aboutme.address}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={() => download(aboutme.resume_link)}>Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;