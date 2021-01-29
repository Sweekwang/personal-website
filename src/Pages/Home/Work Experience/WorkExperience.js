import React, {useState} from 'react';
import classes from './WorkExperience.module.css';


import Box from '../../../Components/Box/Box';
import Header from '../../../Components/Header/Header';
import TabButton from '../../../Components/UI/Tab Button/TabButton';


const WorkSection = () => {
    const MyWorkExperiences = [
        { Company : 'Siemens Healthineers',
          FullCompany : 'Siemens Healthineers',
          CompanyUrl : 'https://www.siemens-healthineers.com/en-sg/',
          Role : 'Magnetic Resonance Research Collaboration (Software Developer)',
          Duration : 'Jul 2020 - Dec 2020 (6 Months)',
          Details: [ "I was in the Digitization Team in Siemens Healthineers Singapore.", 
                     "Designed and implemented an extraction data pipeline to convert Digital Imaging" +
                        "and Communications in Medicine (DICOM) into a structured data frame. " + 
                        "This data frame was then stored into Database using SQLAlchemy.",
                     "Worked closly with the Data Analyst to anlysis the DICOM data and transform and clear the data.",
                     "Did Unittesting and Logging for every methods and classes for the extraction pipeline.",
                     "Implemented a mutiple page dashboard with React.js, Chart.js and Plotly.js"],
          Category: 'Sofware Developer Related'},
          
        { Company : 'SCELSE',
          FullCompany : 'Singapore Centre for Environmental Life Sciences Engineering (SCELSE)',
          CompanyUrl : 'http://kimberlyklinelab.com/welcome-to-our-undergrad-and-pre-undergrad-students-for-the-2019-2020-academic-year/chua-swee-kwang-2020-haris/',
          Role : 'Microbiologist Intern',
          Duration : 'Jan 2020 - Jun 2020 (6 Months)',
          Details: [ "Prof Kimberly KLINE's Laboratory, Under Dr Haris Antypas", 
                     "Studied and analysed the attachement of Enterococcus Faeclis on different surface.",
                     "Real-time analysis of Enterococcus Faeclis."],
          Category: 'Biological Related'},

        { Company : 'SAF',
          FullCompany : 'Singapore Armed Forces (SAF)',
          CompanyUrl : 'https://www.mindef.gov.sg/web/portal/mindef/home',
          Role : 'Deputy Manpower Officer',
          Duration : 'May 2016 - Dec 2018 (2 Years)',
          Details: ["Rank Achieved: Lieutenant", 
                    "Courses Attended: Unit Manpower Operations Course: Graduated with Grade A" + 
                     "Basic Explosive Ordnance Disposal, Engineer Officer Cadet",
                    "Part of National Services.",
                    "Oct 2016 - Jun 2018: Officer Cadet",
                    "May 2016 - Oct 2016: Recuit"],
          Category: 'Others'},

        { Company : 'A*STAR',
          FullCompany : 'Agency for Science, Technology and Research (A*STAR)',
          CompanyUrl : 'https://www.a-star.edu.sg/ibn',
          Role : 'Research Intern',
          Duration : 'May 2015 - Mar 2016 (11 Months)',
          Details: ["Institute of Bioengineering and Nanotechnology (IBN), Prof. Yi Yan Yang’s Laboratory",
                    "Assisted a PhD student on analysing and evaluated cytotoxicity and serum stability of linear poly (ethylene imine).",
                    "Coated polymers and peptide to PET Surface.",
                    "Analysed and examined static contact angle, human umbilical vein endothelial cells, smooth" +
                    "muscle cells, and platelet adhesion."],
          Category: 'Biological Related'},
    ];

    const [allClicked, setAllClicked] = useState(true);
    const [softwareClicked, setSoftwareClicked] = useState(false);
    const [bioClicked, setBioClicked] = useState(false);
    const [othersClicked, setOthersClicked] = useState(false);
    const [workExperieces, setWorkExperiences] = useState(MyWorkExperiences);
    const [showCompany, setShowCompany] = useState(MyWorkExperiences[0]);
    const [selectedCompany, setSelectedCompany] = useState([classes.LeftpActivated, null, null, null]);

    const companySelected = (company, index) => {
        let foundData = MyWorkExperiences.filter((result) => {
            return(result.Company === company)
        });
        console.log(foundData);
        setShowCompany(foundData[0]);

        const curComp = [null, null, null, null];
        curComp[index] = classes.LeftpActivated;
        setSelectedCompany(curComp);
    };

    const companyTab = workExperieces.map((result, index) => {
        return( <p className = {[classes.Leftp, selectedCompany[index]].join(' ')}
                   onClick = {() => companySelected(result.Company, index)}>{result.Company}</p>)
    });

    const TabClick = (event) => {
        if (event.target.value === "All Experiences"){
            setAllClicked(true);
            setSoftwareClicked(false);
            setBioClicked(false);
            setOthersClicked(false);
            setTab("All");
        } else if (event.target.value === "Sofware Developer Related") {
            setAllClicked(false);
            setSoftwareClicked(true);
            setBioClicked(false);
            setOthersClicked(false);
            setTab("Sofware Developer Related");
        } else if (event.target.value === "Biological Related") {
            setAllClicked(false);
            setSoftwareClicked(false);
            setBioClicked(true);
            setOthersClicked(false);
            setTab("Biological Related");
        } else if (event.target.value === "Others") {
            setAllClicked(false);
            setSoftwareClicked(false);
            setBioClicked(false);
            setOthersClicked(true);
            setTab("Others");
        }
    };

    const setTab = (searchValue) => {
        let experiences = [...MyWorkExperiences];

        if (searchValue !== "All") {
            experiences = experiences.filter((results)=> {
                return(results.Category === searchValue)
            });
        };

        setWorkExperiences(experiences);
        companySelected(experiences[0].Company);
        setSelectedCompany([classes.LeftpActivated, null, null, null]);
    };

    const [resize, setResize] = useState(false);

    window.addEventListener("resize", () => {
        if (document.body.offsetWidth <= 785 && resize === false) {
            setTab("All");
            setAllClicked(true);
            setSoftwareClicked(false);
            setBioClicked(false);
            setOthersClicked(false);
            setResize(true);
        } else if (document.body.offsetWidth >= 786) {
            setResize(false);
        }


    })


    return(
        <Box size = "6002">
            <div className = {classes.WorkArea} id = "work">
                <Header text = {'2. Work Experiences'}/>
                <br/>
                <div className = {classes.Tab}>
                    <TabButton bordertype = 'Left' 
                               actived = {allClicked}
                               onClick = {TabClick}>All Experiences</TabButton>
                    <TabButton actived = {softwareClicked}
                               onClick = {TabClick}>Sofware Developer Related</TabButton>
                    <TabButton actived = {bioClicked}
                               onClick = {TabClick}>Biological Related</TabButton>
                    <TabButton bordertype = 'Right' 
                               actived = {othersClicked}
                               onClick = {TabClick}>Others</TabButton>
                </div>
                <div>
                    <div className = {classes.LeftTab}>
                        {companyTab}
                    </div>
                    <div className = {classes.RightContent}>
                        <h3>{showCompany.Role} @ {showCompany.FullCompany}</h3>
                        <p>{showCompany.Duration}</p>
                        <ul>
                            {showCompany.Details.map((text) => {
                                return(<li>{text}</li>)
                            })}
                        </ul>
                    </div>

                    
                </div>

            </div>
        </Box>
    )
};

export default WorkSection;