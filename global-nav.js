// 1. GLOBAL LOCALIZATION DICTIONARY
const globalLocalization = {
    en: {
        langBtn: "မြန်မာ",
        langBtnShort: "MY",
        brand: "Naypyitaw Directory",
        home: "Home",
        categories: "Categories",
        edu: "Education",
        scenic: "Scenic Spots",
        markets: "Markets",
        hotels: "Hotels",
        about: "About",
        trip: "Trip planning",
        contact: "Contact",
        searchPlaceholder: "Search...",
        footer: "© 2026 Naypyitaw. All Rights Reserved."
    },
    my: {
        langBtn: "English",
        langBtnShort: "EN",
        brand: "နေပြည်တော် လမ်းညွှန်",
        home: "ပင်မစာမျက်နှာ",
        categories: "ကဏ္ဍများ",
        edu: "ပညာရေး",
        scenic: "အပန်းဖြေနေရာများ",
        markets: "စျေးဝယ်ရန်နေရာများ",
        hotels: "ဟိုတယ်များ",
        about: "ကျွန်ုပ်တို့အကြောင်း",
        trip: "ခရီးစီစဉ်ခြင်း",
        contact: "ဆက်သွယ်ရန်",
        searchPlaceholder: "ရှာဖွေရန်...",
        footer: "© 2026 Naypyitaw. All Rights Reserved."
    }
};

let currentLang = localStorage.getItem('globalLanguage') || 'en';

// 2. CORE UTILITY TO TRANSLATE AND HIGHLIGHT ACTIVE WINDOWS
function updateGlobalNavUI() {
    const data = globalLocalization[currentLang];
    
    if (document.getElementById('navBrand')) document.getElementById('navBrand').textContent = data.brand;
    if (document.getElementById('footerText')) document.getElementById('footerText').textContent = data.footer;
    if (document.getElementById('sidebarSearch')) document.getElementById('sidebarSearch').placeholder = data.searchPlaceholder;

    if (document.getElementById('langToggle')) document.getElementById('langToggle').textContent = data.langBtn;
    if (document.getElementById('langToggleMobile')) document.getElementById('langToggleMobile').textContent = data.langBtn;

    document.querySelectorAll('.txt-home').forEach(el => el.textContent = data.home);
    document.querySelectorAll('.txt-categories').forEach(el => el.textContent = data.categories);
    document.querySelectorAll('.txt-edu').forEach(el => el.textContent = data.edu);
    document.querySelectorAll('.txt-scenic').forEach(el => el.textContent = data.scenic);
    document.querySelectorAll('.txt-markets').forEach(el => el.textContent = data.markets);
    document.querySelectorAll('.txt-hotels').forEach(el => el.textContent = data.hotels);
    document.querySelectorAll('.txt-about').forEach(el => el.textContent = data.about);
    document.querySelectorAll('.txt-trip').forEach(el => el.textContent = data.trip);
    document.querySelectorAll('.txt-contact').forEach(el => el.textContent = data.contact);

    // Auto highlight active states matching file location names
    const currentFile = window.location.pathname.split("/").pop() || "home.html";
    document.querySelectorAll(`nav a[href="${currentFile}"], .slidebar a[href="${currentFile}"]`).forEach(link => {
        if(link.classList.contains('nav-link')) link.classList.add('active');
        else link.classList.add('actived');
    });

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

// 3. DRAWER OVERLAY CONTROL BINDINGS
function initializeMenuInteractions() {
    const sidebar = document.querySelector(".slidebar");
    const overlay = document.getElementById("overlay");
    const toggle = document.getElementById("sidebarToggle");

    if (toggle && sidebar && overlay) {
        toggle.onclick = () => { sidebar.classList.toggle("active"); overlay.classList.toggle("show"); };
        overlay.onclick = () => { sidebar.classList.remove("active"); overlay.classList.remove("show"); };
        document.querySelectorAll(".slidebar a").forEach(link => {
            link.onclick = () => { sidebar.classList.remove("active"); overlay.classList.remove("show"); };
        });
    }
}

// 4. SEARCH DATA & INITIALIZATION
const searchData = [
    { title: "Yezin Agricultural University", url: "test3.html" },
    { title: "ရေဆင်းစိုက်ပျိုးရေးတက္ကသိုလ်", url: "test3.html"},
    { title: "Yezin Forestry and Environmental Science University", url: "test8.html"},
    { title: "ရေဆင်းသစ်တောနှင့်ပတ်ဝန်းကျင်ဆိုင်ရာတက္ကသိုလ်", url: "test8.html"},
    { title: "NayPyiTaw State Academy", url: "test4.html"},
    {title: "NSA" ,url:"test4.html"},
    { title: "Education Section", url: "education.html" },
    { title: "Scenic Spots", url: "senic-spot.html" },
    { title: "Markets", url: "market.html" },
    { title: "NayPyiTaw State Polytechnic University", url:"test5.html"},
    {title:"NSPU",url:"test5.html"},
    { title: "Yezin Veterinary Science University", url: "test9.html"},
    { title: "ရေဆင်းမွေးမြူဆေးတက္ကသိုလ်", url: "test9.html"},
    { title: "Uppatasanti Pagoda", url: "Uppsanti.html"},
    { title: "ဥပ္ပါတသန္တိစေတီတော်", url: "Uppsanti.html"},
    { title: "Water Fountain Park", url: "waterfountain.html"},
    { title: "နေပြည်တော်ရေပန်းဥယျာဉ်" , url: "waterfountain.html"},
    { title: "Naypyitaw Safari Park", url : "Nay Pyi Taw Safari Park.html"},
    { title: "နေပြည်တော် ဆာဖာရီဥယျာဉ်", url : "Nay Pyi Taw Safari Park.html"},
    { title: "Maravijaya Buddha Statue", url: "Maravijaya.html"},
    { title: "မာရဝိဇယဗုဒ္ဓရုပ်ပွားတော်", url: "Maravijaya.html"},
    { title: "National Landmark Garden", url : "National Landmark Garden.html"},
    { title: "အမျိုးသားအထိမ်းအမှတ်ဥယျာဉ်", url : "National Landmark Garden.html"},
    { title: "Naypyidaw Zoological Gardens" ,url : "Naypyidaw Zoological Gardens.html"},
    { title: "နေပြည်တော် တိရစ္ဆာန်ဥယျာဉ် " ,url : "Naypyidaw Zoological Gardens.html"},
    { title: "Thapyaygone Market", url : "thapyaygone.html"},
    { title: "သပြေကုန်းစျေး", url : "thapyaygone.html"},
    { title: "Ocean Super Center" ,url : "ocean supermarket.html"},
    { title: "Naypyitaw Myoma Market", url: "myoma.html"},
    { title: "မြို့မစျေး", url: "myoma.html"},
    { title: "Junction Centre Nay Pyi Taw" , url : "junction.html"},
    { title: "Hotels", url: "hotels.html" },
    { title: "Pinlong Hot Spring Resort", url: "Hot Spring Resort.html" },
    {title:"ရေပူစမ်း အပန်းဖြေစခန်း",url:"Hot Spring Resort.html"},
    {title:"PNPT",url:"PNPT.html"},
    {title:"Buddhagaya Thatta Thattaha Maha Bawdi Pagoda",url:"Buddhagaya.html"},
     {title:"သတ္တသတ္တာဟ မဟာဗောဓိစေတီတော်",url:"Buddhagaya.html"},
     {title:"Hlay Khwe Taung Pagoda",url:"Hlay Khwe Taung.html"},
     {title:"လှေခွင်းတောင် စေတီတော်",url:"Hlay Khwe Taung.html"},
     {title:"Maha Sakkyaramsi Standing Buddha Image",url:"Maha Sakkyaramsi.html"},
     {title:"မဟာသကျရံသီ ရပ်တော်မူ ရုပ်ပွားတော်",url:"Maha Sakkyaramsi.html"},
     {title:"National Museum",url:"National Museum.html"},
     {title:"အမျိုးသားပြတိုက်",url:"National Museum.html"},
     {title:"Defense Services Museum",url:"defence service.html"},
     {title:"တပ်မတော်စစ်သမိုင်းပြတိုက်",url:"defence service.html"},
     {title:"Memorial to Fallen Heroes",url:"memorise to fallen.html"},
     {title:"သူရဲကောင်းဗိမာန်",url:"memorise to fallen.html"},
     {title:"Wunna Theikdi Stadium",url:"Wunna Theikdi Stadium.html"},
     {title:"ဝဏ္ဏသိဒ္ဓိ အားကစားကွင်း",url:"Wunna Theikdi Stadium.html"},
     {title:"Naypyitaw Ahara Thukha Market",url:"Ahara.html"},
     {title:"နေပြည်တော် အာဟာရသုခဈေး",url:"Ahara.html"},
     {title:"Pobba Thiri Market",url:"Pobbathiri-market.html"},
     {title:"ပုဗ္ဗသီရိဈေး",url:"Pobbathiri-market.html"},
     {title:"Mingular Market(Ywadaw)",url:"ywadaw.html"},
     {title:"မင်္ဂလာဈေး (ရွာတော်)",url:"ywadaw.html"},
     {title:"Hotel Max",url:"hotel-max.html"},
     {title:"M Gallery Hotel",url:"mgallery.html"},
     {title:"Nirvana Hotel and Resort",url:"nirvana.html"},
     {title:"PARKROYAL Nay Pyi Taw",url:"PARKROYAL.html"},
     {title:"Star World Hotel",url:"star-world.html"},
     {title:"The Golden Lake Hotel",url:"The Golden Lake.html"},
     {title:"Thingaha Hotel",url:"thingaha.html"},
     {title:"သင်္ဂဟ ဟိုတယ်",url:"thingaha.html"}


];

function initializeSearchAction() {
    const searchInput = document.getElementById('sidebarSearch') || document.getElementById('heroSearch');
    const suggestionsBox = document.getElementById('searchSuggestions');

    if (!searchInput) return;

    // Custom Alert ပြရန် Utility Function
    function showAlert(message) {
        const modal = document.getElementById('customAlertModal');
        const alertTitle = document.getElementById('alertTitle');
        const alertMsg = document.getElementById('alertMessage');
        const closeBtn = document.getElementById('closeAlertBtn');

        // ဘာသာစကားအလိုက် စာသားများ သတ်မှတ်ခြင်း
        const isMy = currentLang === 'my';
        const titleText = isMy ? 'ရှာဖွေမှု မတွေ့ရှိပါ' : 'Not Found';
        const btnText = isMy ? 'အတည်ပြုသည်' : 'OK';

        if (modal && alertMsg) {
            if (alertTitle) alertTitle.textContent = titleText;
            if (closeBtn) closeBtn.textContent = btnText;
            alertMsg.textContent = message;
            modal.classList.remove('hidden');

            const closeModal = () => {
                modal.classList.add('hidden');
                // OK နှိပ်လိုက်ပါက ရိုက်ထားသော စာသားကို ဖျက်ပြီး focus ပြန်ပေးမည်
                searchInput.value = '';
                searchInput.focus();
            };

            if (closeBtn) closeBtn.onclick = closeModal;
            modal.onclick = (e) => {
                if (e.target === modal) closeModal();
            };
        } else {
            // Modal HTML မရှိပါက Browser Alert သုံးမည်
            alert(message);
            searchInput.value = '';
            searchInput.focus();
        }
    }

    // Input ရိုက်နေစဉ် Suggestions List ပြပေးခြင်း
    if (suggestionsBox) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (!query) {
                suggestionsBox.innerHTML = '';
                suggestionsBox.classList.add('hidden');
                return;
            }

            const matches = searchData.filter(item => 
                item.title.toLowerCase().includes(query)
            );

            if (matches.length > 0) {
                suggestionsBox.innerHTML = matches.map(item => `
                    <a href="${item.url}" class="suggestion-item">
                        ${item.title}
                    </a>
                `).join('');
                suggestionsBox.classList.remove('hidden');
            } else {
                // မရှိတာရိုက်မိပါက Dropdown Box ကို ဖျောက်ထားမည် ("Not found" မပြပါ)
                suggestionsBox.innerHTML = '';
                suggestionsBox.classList.add('hidden');
            }
        });

        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
                suggestionsBox.classList.add('hidden');
            }
        });
    }

    // Enter ခေါက်သည့်အခါမှ စစ်ဆေးပေးမည့် Event Listener
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Form submit/refresh ဖြစ်မသွားစေရန်
            const query = this.value.toLowerCase().trim();

            if (!query) return;

            const matches = searchData.filter(item => 
                item.title.toLowerCase().includes(query)
            );

            if (matches.length > 0) {
                // တူတာရှိရင် သက်ဆိုင်ရာ link သို့ သွားမည်
                window.location.href = matches[0].url;
            } else {
                // မရှိသေးပါက Dropdown ဖုန်းပြီး အလယ် Alert Box ပြပေးမည်
                if (suggestionsBox) suggestionsBox.classList.add('hidden');
                
                const notFoundMsg = currentLang === 'my' 
                    ? `"${this.value}" နှင့် ပတ်သက်သော အချက်အလက် မရှိသေးပါ။` 
                    : `No results found for "${this.value}".`;
                
                showAlert(notFoundMsg);
            }
        }
    });
}
const toggleLanguageAction = () => {
    currentLang = currentLang === 'en' ? 'my' : 'en';
    localStorage.setItem('globalLanguage', currentLang);
    updateGlobalNavUI();
};

// 5. SINGLE DOM LOAD EVENT HANDLER
document.addEventListener('DOMContentLoaded', () => {
    updateGlobalNavUI();
    initializeMenuInteractions();
    initializeSearchAction();
    
    const langToggle = document.getElementById('langToggle');
    const langToggleMobile = document.getElementById('langToggleMobile');
    
    if (langToggle) langToggle.addEventListener('click', toggleLanguageAction);
    if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguageAction);
});

window.addEventListener('storage', (e) => {
    if (e.key === 'globalLanguage') {
        currentLang = e.newValue || 'en';
        updateGlobalNavUI();
    }
});