import React from 'react';

const Groups = [
    {
        group: "Terras Irradient",
        school: "Amherst",
        location: "Amherst, Massachussets",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "tirradient@amherst.edu", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Against the Current",
        school: "Boston College",
        location: "Boston, Massachussets",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "atcurrent@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    }, 
    {
        group: "Mustard Seed",
        school: "Boston University",
        location: "Boston, Massachussets",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "bumseed@gmail.com", website: "https://www.bumustardseed.com/", facebook: "https://www.facebook.com/BUMustardSeedOfficial/", instagram: "https://www.instagram.com/bumustardseed/", tiktok: ""}],
        active: true
    },
    {
        group: "Joyful Noise",
        school: "Carnegie Mellon",
        location: "Pittsburgh, Pennsylvania",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "cmujoyfulnoise@gmail.com", website: "", facebook: "https://www.facebook.com/cmujoyfulnoise", instagram: "https://www.instagram.com/cmujoyfulnoise/", tiktok: ""}],
        active: true
    },
    {
        group: "Jubilation!",
        school: "Columbia",
        location: "New York City, New York",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "jubilationcu@gmail.com", website: "https://www.jube.org/", facebook: "https://www.facebook.com/jubilationCU", instagram: "https://www.instagram.com/jubilationcu/", tiktok: ""}],
        active: true
    },
    {
        group: "Measureless",
        school: "Cornell",
        location: "Ithaca, New York",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "cornell.measureless@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Something Borrowed Something Blue",
        school: "Duke",
        location: "Durham, North Carolina",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Under Construction",
        school: "Harvard",
        location: "Cambridge, Massachussets",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Adoremus",
        school: "Johns Hopkins",
        location: "Baltimore, Maryland",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "adoremusjhu@gmail.com", website: "https://sites.google.com/view/jhu-adoremus/home", facebook: "https://www.facebook.com/jhuadoremus/", instagram: "https://www.instagram.com/adoremusjhu/", tiktok: ""}],
        active: true
    },
    {
        group: "Shine",
        school: "Liberty University",
        location: "Lynchburg, Virginia",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Cross Products",
        school: "MIT",
        location: "Cambridge, Masschussets",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "xprod-exec@mit.edu", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Shine",
        school: "NYU",
        location: "New York City, New York",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Kindred Spirit",
        school: "Princeton",
        location: "Princeton, New Jersey",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "kspirit@princeton.edu", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "First Light",
        school: "Rutgers",
        location: "New Brunswick, New Jersey",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "firstlightru@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Testimony",
        school: "Stanford",
        location: "Palo Alto, California",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "testimony@lists.stanford.edu", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Voice of Hope",
        school: "The College of New Jersey",
        location: "Ewing Township, New Jersey",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "vofhope@tcnj.edu", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "For Christ's Sake",
        school: "UC Berkeley",
        location: "Berkeley, California",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "fcsberkeley@gmail.com", website: "forchristssake.berkeley.edu ", facebook: "https://www.facebook.com/fcsacappella", instagram: "https://www.instagram.com/fcsacappella/", tiktok: "https://www.tiktok.com/@fcsacappella"}],
        active: true
    },
    {
        group: "Road to Damascus",
        school: "UCLA",
        location: "Los Angeles, California",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "rtdacappella@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Psalm 100",
        school: "University of North Carolina",
        location: "Chapel Hill, North Carolina",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Full Measure",
        school: "University of Pennsylvania",
        location: "Philadelphia, Pennsylvania",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "fullmeasure.penn@gmail.com", website: "full-measure.org", facebook: "https://www.facebook.com/FullMeasure", instagram: "https://www.instagram.com/upenn.fullmeasure/", tiktok: "https://www.tiktok.com/@upennfullmeasure"}],
        active: true
    },
    {
        group: "Mosaic",
        school: "University of Pittsburgh",
        location: "Pittsburgh, Pennsylvania",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "acappellamosaic@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Christian Hoos Exalt",
        school: "University of Virginia",
        location: "Charlottesville, Virginia",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "choose-exec@virginia.edu", website: "https://christianhoosexalt.wixsite.com/website", facebook: "https://www.facebook.com/CHoosE.at.UVA", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Overflow",
        school: "USC",
        location: "Los Angeles, California",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "overflow.usc@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Awaken the Dawn",
        school: "Wellesley",
        location: "Wellesley, Massachussets",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "awakenthedawn_wcso@wellesley.edu", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    },
    {
        group: "Living Water",
        school: "Yale",
        location: "New Haven, Connecticut",
        logo: <img src={require('../images/logos')} />,
        groupPhoto: <img src={require('../images/groups')} />,
        media: [{email: "livingwateratyale@gmail.com", website: "", facebook: "", instagram: "", tiktok: ""}],
        active: true
    }
]