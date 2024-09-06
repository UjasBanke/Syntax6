function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function changeLanguage() {
  var selectedLanguage = document.getElementById("language").value;
  console.log("Language changed to: " + selectedLanguage);

  var elements = {
      title: document.getElementById("form-title"),
      nameLabel: document.getElementById("name-label"),
      languageLabel: document.getElementById("language-label"),
      dobLabel: document.getElementById("dob-label"),
      stateLabel: document.getElementById("state-label"),
      cityLabel: document.getElementById("city-label"),
      districtLabel: document.getElementById("district-label"),
      phoneLabel: document.getElementById("phone-label"),
      aadhaarLabel: document.getElementById("aadhaar-label"),
      nextButton: document.getElementById("next-button"),
  };

  switch (selectedLanguage) {
      case "English":
          elements.title.textContent = 'User details: *';
          elements.nameLabel.textContent = 'Name: *';
          elements.languageLabel.textContent = 'Language: *';
          elements.dobLabel.textContent = 'Date of birth: *';
          elements.stateLabel.textContent = 'State: *';
        //  elements.cityLabel.textContent = 'City: *';
          elements.districtLabel.textContent = 'District: *';
          elements.phoneLabel.textContent = 'Registered mobile number: *';
          elements.aadhaarLabel.textContent = 'Aadhaar number: *';
          elements.nextButton.textContent = 'Next page: *';
          break;

      case 'Hindi':
          elements.title.textContent = 'उपयोगकर्ता विवरण';
          elements.nameLabel.textContent = 'नाम: *';
          elements.languageLabel.textContent = 'भाषा: *';
          elements.dobLabel.textContent = 'जन्म तिथि: *';
          elements.stateLabel.textContent = 'राज्य: *';
        //   elements.cityLabel.textContent = 'शहर: *';
          elements.districtLabel.textContent = 'जिला: *';
          elements.phoneLabel.textContent = 'पंजीकृत फ़ोन नंबर: *';
          elements.aadhaarLabel.textContent = 'आधार नंबर: *';
          elements.nextButton.textContent = 'अगला पृष्ठ';
          break;

      case 'Tamil':
          elements.title.textContent = 'பயனர் விவரங்கள்';
          elements.nameLabel.textContent = 'பெயர்: *';
          elements.languageLabel.textContent = 'மொழி: *';
          elements.dobLabel.textContent = 'பிறந்த தேதி: *';
          elements.stateLabel.textContent = 'மாநிலம்: *';
        //   elements.cityLabel.textContent = 'நகரம்: *';
          elements.districtLabel.textContent = 'மாவட்டம்: *';
          elements.phoneLabel.textContent = 'பதிவுசெய்யப்பட்ட தொலைபேசி எண்: *';
          elements.aadhaarLabel.textContent = 'ஆதார் எண்: *';
          elements.nextButton.textContent = 'அடுத்த பக்கம்';
          break;

      case 'Kannada': 
          elements.title.textContent = 'ಬಳಕೆದಾರರ ವಿವರಗಳು';
          elements.nameLabel.textContent = 'ಹೆಸರು: *';
          elements.languageLabel.textContent = 'ಭಾಷೆ: *';
          elements.dobLabel.textContent = 'ಹುಟ್ಟಿದ ದಿನಾಂಕ: *';
          elements.stateLabel.textContent = 'ರಾಜ್ಯ: *';
      //    elements.cityLabel.textContent = 'ನಗರ: *';
          elements.districtLabel.textContent = 'ಜಿಲ್ಲೆ: *';
          elements.phoneLabel.textContent = 'ನೋಂದಾಯಿತ ದೂರವಾಣಿ ಸಂಖ್ಯೆ: *';
          elements.aadhaarLabel.textContent = 'ಆಧಾರ್ ಸಂಖ್ಯೆ: *';
          elements.nextButton.textContent = 'ಮುಂದಿನ ಪುಟ';
          break;

      case 'Marathi':
          elements.title.textContent = 'वापरकर्ता तपशील';
          elements.nameLabel.textContent = 'नाव: *';
          elements.languageLabel.textContent = 'भाषा: *';
          elements.dobLabel.textContent = 'जन्मतारीख: *';
          elements.stateLabel.textContent = 'राज्य: *';
        //  elements.cityLabel.textContent = 'शहर: *';
          elements.districtLabel.textContent = 'जिल्हा: *';
          elements.phoneLabel.textContent = 'नोंदणीकृत मोबाईल क्रमांक: *';
          elements.aadhaarLabel.textContent = 'आधार क्रमांक: *';
          elements.nextButton.textContent = 'पुढील पान';
          break;

      case 'Telugu':
          elements.title.textContent = 'వినియోగదారు వివరాలు';
          elements.nameLabel.textContent = 'పేరు: *';
          elements.languageLabel.textContent = 'భాష: *';
          elements.dobLabel.textContent = 'పుట్టిన తేదీ: *';
          elements.stateLabel.textContent = 'రాష్ట్రం: *';
    //      elements.cityLabel.textContent = 'నగరం: *';
          elements.districtLabel.textContent = 'జిల్లా: *';
          elements.phoneLabel.textContent = 'నమోదిత మొబైల్ నంబర్: *';
          elements.aadhaarLabel.textContent = 'ఆధార్ సంఖ్య: *';
          elements.nextButton.textContent = 'తదుపరి పేజీ';
          break;

      case 'Bengali':
          elements.title.textContent = 'ব্যবহারকারী বিবরণ';
          elements.nameLabel.textContent = 'নাম: *';
          elements.languageLabel.textContent = 'ভাষা: *';
          elements.dobLabel.textContent = 'জন্ম তারিখ: *';
          elements.stateLabel.textContent = 'রাজ্য: *';
       //   elements.cityLabel.textContent = 'শহর: *';
          elements.districtLabel.textContent = 'জেলা: *';
          elements.phoneLabel.textContent = 'নিবন্ধিত ফোন নম্বর: *';
          elements.aadhaarLabel.textContent = 'আধার নম্বর: *';
          elements.nextButton.textContent = 'পরবর্তী পৃষ্ঠা';
          break;

      case 'Gujarati': 
          elements.title.textContent = 'વપરાશકર્તા વિગતવાર';
          elements.nameLabel.textContent = 'નામ: *';
          elements.languageLabel.textContent = 'ભાષા: *';
          elements.dobLabel.textContent = 'જન્મ તારીખ: *';
          elements.stateLabel.textContent = 'રાજ્ય: *';
      //    elements.cityLabel.textContent = 'શહેર: *';
          elements.districtLabel.textContent = 'જિલ્લા: *';
          elements.phoneLabel.textContent = 'પહચાન નંબર: *';
          elements.aadhaarLabel.textContent = 'આધાર નંબર: *';
          elements.nextButton.textContent = 'આગળની પૃષ્ઠ';
          break;

      case 'Malayalam':      
          elements.title.textContent = 'ഉപയോക്തൃ വിശദാംശങ്ങൾ';
          elements.nameLabel.textContent = 'പേര്: *';
          elements.languageLabel.textContent = 'ഭാഷ: *';
          elements.dobLabel.textContent = 'ജനന തീയതി: *';
          elements.stateLabel.textContent = 'സംസ്ഥാനം: *';
      //    elements.cityLabel.textContent = 'നഗരം: *';
          elements.districtLabel.textContent = 'ജില്ല: *';
          elements.phoneLabel.textContent = 'പതിവിലായ ഫോൺ നമ്പർ: *';
          elements.aadhaarLabel.textContent = 'ആധാർ നമ്പർ: *';
          elements.nextButton.textContent = 'അടുത്ത പേജ്';
          break;

      case 'Odia':          
          elements.title.textContent = 'ଉପଭୋକ୍ତା ବିବରଣୀ';
          elements.nameLabel.textContent = 'ନାମ: *';
          elements.languageLabel.textContent = 'ଭାଷା: *';
          elements.dobLabel.textContent = 'ଜନ୍ମ ତାରିଖ: *';
          elements.stateLabel.textContent = 'ରାଜ୍ୟ: *';
    //      elements.cityLabel.textContent = 'ସହର: *';
          elements.districtLabel.textContent = 'ଜିଲ୍ଲା: *';
          elements.phoneLabel.textContent = 'ପଞ୍ଜିକୃତ ଫୋନ୍ ନମ୍ବର: *';
          elements.aadhaarLabel.textContent = 'ଆଧାର ନମ୍ବର: *';
          elements.nextButton.textContent = 'ପରବର୍ତ୍ତୀ ପୃଷ୍ଠା';
          break;

      case 'Punjabi': 
          elements.title.textContent = 'ਉਪਭੋਗਤਾ ਵੇਰਵੇ';
          elements.nameLabel.textContent = 'ਨਾਂ: *';
          elements.languageLabel.textContent = 'ਭਾਸ਼ਾ: *';
          elements.dobLabel.textContent = 'ਜਨਮ ਦੀ ਤਾਰੀਖ: *';
          elements.stateLabel.textContent = 'ਰਾਜ: *';
      //    elements.cityLabel.textContent = 'ਸ਼ਹਿਰ: *';
          elements.districtLabel.textContent = 'ਜ਼ਿਲ੍ਹਾ: *';
          elements.phoneLabel.textContent= 'ਰਜਿਸਟਰਡ ਫ਼ੋਨ ਨੰਬਰ: *';
          elements.aadhaarLabel.textContent = 'ਆਧਾਰ ਨੰਬਰ: *';
          elements.nextButton.textContent = 'ਅਗਲਾ ਪੰਨਾ';
          break;

      case 'Urdu':
          elements.title.textContent = 'صارف کی تفصیلات';
          elements.nameLabel.textContent = 'نام: *';
          elements.languageLabel.textContent = 'زبان: *';
          elements.dobLabel.textContent = 'تاریخ پیدائش: *';
          elements.stateLabel.textContent = 'صوبہ: *';
      //    elements.cityLabel.textContent = 'شہر: *';
          elements.districtLabel.textContent = 'علاقہ: *';
          elements.phoneLabel.textContent = 'رجسٹرڈ فون نمبر: *';
          elements.aadhaarLabel.textContent = 'آدھار نمبر: *';
          elements.nextButton.textContent = 'اگلا صفحہ';
          break;
  }
}