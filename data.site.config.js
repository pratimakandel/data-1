const siteData = [
  {
    name: "मतगणनाको संक्षिप्त परिणाम",
    items: [
      {
        name: "दलगत संख्यात्मक विवरण",
        urls: ["http://result.election.gov.np/JSONFiles/ElectedSummByParty.txt"]
      },
      {
        name: "लिङ्गगत संख्यात्मक विवरण",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectedSummByGender.txt"
        ]
      },
      {
        name: "जिल्लागत मतगणनाको विवरण",
        urls: [
          "http://result.election.gov.np/JSONFiles/ResultSummHoR.txt",
          "http://result.election.gov.np/JSONFiles/ResultSummPA.txt"
        ]
      }
    ]
  },
  {
    name: "राष्ट्रपति निर्वाचन",
    items: [
      {
        name: "मतगणनाको परिणाम",
        urls: [
          "http://result.election.gov.np/JSONFiles/CandidateNominationPE.txt"
        ]
      }
    ]
  },
  {
    name: "उपराष्ट्रपति निर्वाचन",
    items: [
      {
        name: "मतगणनाको परिणाम",
        urls: [
          "http://result.election.gov.np/JSONFiles/CandidateNominationVPE.txt"
        ]
      }
    ]
  },
  {
    name: "राष्ट्रिय सभा",
    items: [
      {
        name: "उम्मेदवारको अन्तिम नामावाली",
        urls: [
          "http://result.election.gov.np/JSONFiles/CandidateNominationUH.txt"
        ]
      },
      {
        name: "निर्वाचित उम्मेदवार",
        urls: ["http://result.election.gov.np/JSONFiles/ElectedCandidateUH.txt"]
      }
    ]
  },
  {
    name: "प्रतिनिधि सभा",
    items: [
      {
        name: "पहिलो हुने निर्वाचित हुने उम्मेदवार",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectionResultCentral.txt"
        ]
      },
      {
        name: "दलगत समानुपातिक परिणाम",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectionResultCentralPR.txt"
        ]
      },
      {
        name: "समानुपातिक निर्वाचित उम्मेदवार ",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectedCandidatePRCentral.txt"
        ]
      }
    ]
  },
  {
    name: "प्रदेश सभा",
    items: [
      {
        name: "पहिलो हुने निर्वाचित हुने उम्मेदवार",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectionResultState.txt"
        ]
      },
      {
        name: "दलगत समानुपातिक परिणाम",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectionResultStatePR.txt"
        ]
      },
      {
        name: "समानुपातिक निर्वाचित उम्मेदवार ",
        urls: [
          "http://result.election.gov.np/JSONFiles/ElectedCandidatePRState.txt"
        ]
      }
    ]
  },
  {
    name: "स्थानीय तह",
    items: [
      {
        name: "निर्वाचन नतिजा सारांश",
        urls: []
      },
      {
        name: "दलगत मतगणनाको परिणाम",
        urls: []
      },
      {
        name: "मतगणनाको विस्तृत परिणाम",
        urls: []
      },
      {
        name: "कार्यपालिका निर्वाचन",
        urls: []
      },
      {
        name: "जिल्ला समन्वय समिति निर्वाचन",
        urls: []
      }
    ]
  }
];

module.exports = siteData;
