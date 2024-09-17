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
const stateDistricts = {
    "Andhra Pradesh": ["Anantapur", "Sri Sathya Sai", "Chittoor", "Tirupati", "East Godavari", "Kakinada", "Konaseema", "Guntur", "Palnadu", "Bapatla", "Krishna", "NTR", "Eluru", "West Godavari", "Kurnool", "Nandyal", "Sri Potti Sriramulu Nellore", "Prakasam", "SPSR Nellore", "Srikakulam", "Vizianagaram", "Visakhapatnam", "Alluri Sitharama Raju", "Parvathipuram Manyam", "Anakapalli", "YSR"],
    "Arunachal Pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Pakke Kessang", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Kamle", "Upper Subansiri", "West Siang", "Leparada", "Lower Siang", "Upper Siang", "Siang", "East Siang", "Dibang Valley", "Lower Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding"],
    "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
    "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
    "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
    "Goa": ["North Goa", "South Goa"],
    "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
    "Jammu and Kashmir": ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
    "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
    "Karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
    "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
    "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
    "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
    "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
    "Meghalaya":["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri-Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
    "Mizoram": ["Aizawl", "Champhai", "Hnahthial", "Kolasib", "Khawzawl", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip"],
    "Nagaland": ["Chumoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Noklak", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Malerkotla", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
    "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur" ],
    "Sikkim": [ "East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupattur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
    "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hanumakonda", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"],
    "Tripura" : ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura" ],
    "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Badaun", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddh Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
    "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
};

function populateDistricts() {
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");
    const selectedState = stateSelect.value;

    // Clear existing options in the district dropdown
    districtSelect.innerHTML = '<option value="" disabled selected>Select your district</option>';

    if (selectedState && stateDistricts[selectedState]) {
        const districts = stateDistricts[selectedState];

        // Populate district dropdown
        districts.forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}
