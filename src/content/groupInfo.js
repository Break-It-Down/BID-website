import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import "../styles/group.css";

const Groups = [
    {
        group: "Terras Irradient",
        school: "Amherst",
        location: "Amherst, Massachusetts",
        logo: <StaticImage src='../images/logos/Amherst.jpg' class="group-logo"/>,
        groupPhoto: "",
        media: {email: "tirradient@amherst.edu", website: "", facebook: "", instagram: "", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Against the Current",
        school: "Boston College",
        location: "Boston, Massachusetts",
        logo: <StaticImage src='../images/logos/Boston College.JPG' class="group-logo"/>,
        groupPhoto: "",
        media: {email: "atcurrent@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""},
        active: true,
        host: false
    }, 
    {
        group: "Mustard Seed",
        school: "Boston University",
        location: "Boston, Massachusetts",
        logo: <StaticImage src='../images/logos/BU.png' class="group-logo"/>,
        groupPhoto: <StaticImage src='../images/groups/BU.jpg' class="group-photo"/>,
        media: {email: "bumseed@gmail.com", website: "https://www.bumustardseed.com/", facebook: "https://www.facebook.com/BUMustardSeedOfficial/", instagram: "https://www.instagram.com/bumustardseed/", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Joyful Noise",
        school: "Carnegie Mellon",
        location: "Pittsburgh, Pennsylvania",
        logo: <StaticImage src='../images/logos/Carnegie.jpg' class="group-logo"/>,
        groupPhoto: <StaticImage src='../images/groups/CMU.JPG' class="group-photo"/>,
        media: {email: "cmujoyfulnoise@gmail.com", website: "", facebook: "https://www.facebook.com/cmujoyfulnoise", instagram: "https://www.instagram.com/cmujoyfulnoise/", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Jubilation!",
        school: "Columbia",
        location: "New York City, New York",
        logo: <StaticImage src='../images/logos/Columbia.jpg' class="group-logo"/>,
        groupPhoto: <StaticImage src='../images/groups/Columbia.jpg' class="group-photo"/>,
        media: {email: "jubilationcu@gmail.com", website: "https://www.jube.org/", facebook: "https://www.facebook.com/jubilationCU", instagram: "https://www.instagram.com/jubilationcu/", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Measureless",
        school: "Cornell",
        location: "Ithaca, New York",
        logo: "",
        groupPhoto: "",
        media: {email: "cornell.measureless@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""},
        active: true,
        host: false
    },
    // {
    //     group: "Something Borrowed Something Blue",
    //     school: "Duke",
    //     location: "Durham, North Carolina",
    //     logo: "",
    //     groupPhoto: "",
    //     media: {email: "", website: "", facebook: "", instagram: "", tiktok: ""},
    //     active: true,
    //     host: false
    // },
    {
        group: "Under Construction",
        school: "Harvard",
        location: "Cambridge, Massachusetts",
        logo: "",
        groupPhoto: "",
        media: {email: "", website: "", facebook: "", instagram: "", tiktok: ""},
        active: false,
        host: false
    },
    {
        group: "Adoremus",
        school: "Johns Hopkins",
        location: "Baltimore, Maryland",
        logo: <StaticImage src='../images/logos/JHU.png' class="group-logo"/>,
        groupPhoto: <StaticImage src='../images/groups/JHU.jpg' class="group-photo"/>,
        media: {email: "adoremusjhu@gmail.com", website: "https://sites.google.com/view/jhu-adoremus/home", facebook: "https://www.facebook.com/jhuadoremus/", instagram: "https://www.instagram.com/adoremusjhu/", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Shine",
        school: "Liberty University",
        location: "Lynchburg, Virginia",
        logo: "",
        groupPhoto: "",
        media: {email: "", website: "", facebook: "", instagram: "", tiktok: ""},
        active: false,
        host: false
    },
    {
        group: "Cross Products",
        school: "MIT",
        location: "Cambridge, Massachusetts",
        logo: <StaticImage src='../images/logos/MIT.png' class="host-logo"/>,
        groupPhoto: <StaticImage src='../images/groups/MIT.jpg' class="host-photo"/>,
        media: {email: "xprod-exec@mit.edu", website: "https://xprod.mit.edu/", facebook: "https://www.facebook.com/crossproducts", instagram: "https://www.instagram.com/mit.crossproducts/", tiktok: ""},
        active: true,
        host: true
    },
    {
        group: "Shine",
        school: "NYU",
        location: "New York City, New York",
        logo: "",
        groupPhoto: "",
        media: {email: "", website: "", facebook: "", instagram: "", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Kindred Spirit",
        school: "Princeton",
        location: "Princeton, New Jersey",
        logo: <StaticImage src='../images/logos/Princeton.png' class="group-logo black-bckgrd"/>,
        groupPhoto: "",
        media: {email: "kspirit@princeton.edu", website: "", facebook: "", instagram: "", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "First Light",
        school: "Rutgers",
        location: "New Brunswick, New Jersey",
        logo: <StaticImage src='../images/logos/Rutgers.png' class="group-logo"/>,
        groupPhoto: "",
        media: {email: "firstlightru@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Testimony",
        school: "Stanford",
        location: "Palo Alto, California",
        logo: <StaticImage src='../images/logos/Stanford.png' class="host-logo"/>,
        groupPhoto: <StaticImage src='../images/groups/Testimony.jpg' class="host-photo"/>,
        media: {email: "testimony@lists.stanford.edu", website: "https://testimonyacappella.weebly.com/", facebook: "https://www.facebook.com/testimonyacappella/", instagram: "https://www.instagram.com/testimonyacappella/", tiktok: ""},
        active: true,
        host: true
    },
    {
        group: "Voice of Hope",
        school: "The College of New Jersey",
        location: "Ewing Township, New Jersey",
        logo: "",
        groupPhoto: "",
        media: {email: "vofhope@tcnj.edu", website: "", facebook: "", instagram: "", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "For Christ's Sake",
        school: "UC Berkeley",
        location: "Berkeley, California",
        logo: <StaticImage src='../images/logos/UC Berkeley.jpg' class="group-logo"/>,
        groupPhoto: <StaticImage src='../images/groups/UC Berkeley.jpeg' class="group-photo"/>,
        media: {email: "fcsberkeley@gmail.com", website: "https://forchristssake.berkeley.edu", facebook: "https://www.facebook.com/fcsacappella", instagram: "https://www.instagram.com/fcsacappella/", tiktok: "https://www.tiktok.com/@fcsacappella"},
        active: true,
        host: false
    },
    {
        group: "Road to Damascus",
        school: "UCLA",
        location: "Los Angeles, California",
        logo: <StaticImage src='../images/logos/UCLA.png' class="group-logo"/>,
        groupPhoto: <StaticImage src='../images/groups/UCLA.jpg' class="group-photo"/>,
        media: {email: "rtdacappella@gmail.com", website: "https://rtdacappella.weebly.com/", facebook: "https://www.facebook.com/rtdacappella", instagram: "https://www.instagram.com/rtdacappella/", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Psalm 100",
        school: "University of North Carolina",
        location: "Chapel Hill, North Carolina",
        logo: "",
        groupPhoto: "",
        media: {email: "", website: "", facebook: "", instagram: "", tiktok: ""},
        active: false,
        host: false
    },
    {
        group: "Full Measure",
        school: "University of Pennsylvania",
        location: "Philadelphia, Pennsylvania",
        logo: <StaticImage src='../images/logos/UPenn.png' class="group-logo"/>,
        groupPhoto: "",
        media: {email: "fullmeasure.penn@gmail.com", website: "http://full-measure.org", facebook: "https://www.facebook.com/FullMeasure", instagram: "https://www.instagram.com/upenn.fullmeasure/", tiktok: "https://www.tiktok.com/@upennfullmeasure"},
        active: true,
        host: false
    },
    // {
    //     group: "Mosaic",
    //     school: "University of Pittsburgh",
    //     location: "Pittsburgh, Pennsylvania",
    //     logo: <StaticImage src='../images/logos/UPitts.png' class="group-logo"/>,
    //     groupPhoto: "",
    //     media: {email: "acappellamosaic@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""},
    //     active: true,
    //     host: false
    // },
    {
        group: "Christian Hoos Exalt",
        school: "University of Virginia",
        location: "Charlottesville, Virginia",
        logo: "",
        groupPhoto: "",
        media: {email: "choose-exec@virginia.edu", website: "https://christianhoosexalt.wixsite.com/website", facebook: "https://www.facebook.com/CHoosE.at.UVA", instagram: "", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Overflow",
        school: "USC",
        location: "Los Angeles, California",
        logo: <StaticImage src='../images/logos/USC.png' class="group-logo black-bckgrd"/>,
        groupPhoto: <StaticImage src='../images/groups/Overflow.JPEG' class="group-photo"/>,
        media: {email: "overflow.usc@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Awaken the Dawn",
        school: "Wellesley",
        location: "Wellesley, Massachusetts",
        logo: <StaticImage src='../images/logos/Wellesley.jpg' class="group-logo"/>,
        groupPhoto: "",
        media: {email: "awakenthedawn_wcso@wellesley.edu", website: "", facebook: "", instagram: "", tiktok: ""},
        active: true,
        host: false
    },
    {
        group: "Living Water",
        school: "Yale",
        location: "New Haven, Connecticut",
        logo: <StaticImage src='../images/logos/Yale.png' class="group-logo"/>,
        groupPhoto: <StaticImage src='../images/groups/Yale.jpg' class="group-photo"/>,
        media: {email: "livingwateratyale@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""},
        active: true,
        host: false
    }
];

export default Groups
