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
        footer: "© ၂၀၂၆ နေပြည်တော်။ မူပိုင်ခွင့်အားလုံး ရရှိပြီးဖြစ်သည်။"
    }
};

let currentLang = localStorage.getItem('globalLanguage') || 'en';

// 2. INJECT TEMPLATE HOOKS
function injectGlobalLayouts() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <button class="btn btn-outline-light d-lg-none me-2" id="sidebarToggle"><span style="font-size:24px;">☰</span></button>
            <a class="navbar-brand ms-auto pe-2" href="home.html" id="navBrand">Naypyitaw Directory</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link txt-home" href="home.html">Home</a></li>
                    <li class="nav-item dropdown">
                        <div class="btn-group">
                            <a class="nav-link txt-categories" href="categories.html">Categories</a>
                            <a class="nav-link dropdown-toggle dropdown-toggle-split" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item txt-edu" href="education.html">Education</a></li>
                                <li><a class="dropdown-item txt-scenic" href="senic-spot.html">Scenic Spots</a></li>
                                <li><a class="dropdown-item txt-markets" href="market.html">Markets</a></li>
                                <li><a class="dropdown-item txt-hotels" href="hotels.html">Hotels</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link txt-trip" href="trip planning.html">Trip planning</a></li>
                    <li class="nav-item"><a class="nav-link txt-about" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link txt-contact" href="contact.html">Contact</a></li>
                    <li class="nav-item"><button class="nav-lang-btn" id="langToggle">မြန်မာ</button></li>
                </ul>
            </div>
        </div>
    </nav>`;

    // Sidebar ထဲတွင် search-container နှင့် searchSuggestions box ကို ထည့်သွင်းထားသည်
    //
    const sidebarHTML = `
    <div class="sidebar-overlay" id="overlay"></div>
    <ul class="slidebar">
        <div class="search-box mb-3 px-2">
            <div class="search-container">
                <div class="input-group">
                    <span class="input-group-text bg-primary text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </span>
                    <input type="text" class="form-control" id="sidebarSearch" placeholder="Search..." autocomplete="off" />
                </div>
                <div id="searchSuggestions" class="suggestions-box hidden"></div>
            </div>
        </div>
        <li><a class="txt-home" href="home.html">Home</a></li>
        
        <!-- repair but still no equal slidebar -->
        <li class="nav-item dropdown">
            <div class="btn-group w-100">
                <a class="nav-link txt-categories text-white flex-grow-1" href="categories.html">Categories</a>
                <a class="nav-link dropdown-toggle dropdown-toggle-split text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item txt-edu" href="education.html">Education</a></li>
                    <li><a class="dropdown-item txt-scenic" href="senic-spot.html">Scenic Spots</a></li>
                    <li><a class="dropdown-item txt-markets" href="market.html">Markets</a></li>
                    <li><a class="dropdown-item txt-hotels" href="hotels.html">Hotels</a></li>
                </ul>
            </div>
        </li>


        <li><a class="txt-trip" href="trip planning.html">Trip planning</a></li>
        <li><a class="txt-about" href="about.html">About</a></li>
        <li><a class="txt-contact" href="contact.html">Contact</a></li>
        <li class="mt-4 px-3"><button class="btn w-100 btn-warning text-dark fw-bold btn-sm rounded-pill" id="langToggleMobile">မြန်မာ</button></li>
    </ul>`;

    const footerHTML = `<footer><p id="footerText">© 2026 Naypyitaw. All Rights Reserved.</p></footer>`;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML + sidebarHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// 3. CORE UTILITY TO TRANSLATE AND HIGHLIGHT ACTIVE WINDOWS
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

    // mmmmm //
    let currentFile = window.location.pathname.split("/").pop() || "home.html";

    // home1.html ဖြစ်နေလျှင်လည်း home.html လို့ သတ်မှတ်ပေးရန်
    if (currentFile === "home1.html" || currentFile === "") {
    currentFile = "home.html";
}

document.querySelectorAll(`nav a[href="${currentFile}"], .slidebar a[href="${currentFile}"]`).forEach(link => {
    if(link.classList.contains('nav-link')) {
        link.classList.add('active');
    } else {
        link.classList.add('actived');
    }
});
// mmmmm //

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

// 4. CORE DRAWER OVERLAY CONTROL BINDINGS
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

// 5. AUTOCOMPLETE SEARCH LOGIC
const searchData = [
    { title: "Yezin Agricultural University ", url: "test3.html" },
    { title: "ရေဆင်းစိုက်ပျိုးရေးတက္ကသိုလ်", url: "test3.html"},
    { title: "Yezin Forestry and Environmental Science University", url: "test8.html"},
    { title:"ရေဆင်းသစ်တောနှင့်ပတ်ဝန်းကျင်ဆိုင်ရာတက္ကသိုလ်", url: "test8.html"},
    { title: "NayPyiTaw State Academy", url: "test4.html"},
    { title: "University of Computer Studies", url: "education.html#ucsh" },
    { title: "Technological University", url: "education.html#tu" },
    { title: "Education Section", url: "education.html" },
    { title: "Scenic Spots", url: "senic-spot.html" },
    { title: "Markets", url: "market.html" },
    { title: "NayPyiTaw State Polytechnic University", url:"test5.html"},
    { title: "Yezin Veterinary Science University", url: "test9.html"},
    { title:"ရေဆင်းမွေးမြူဆေးတက္ကသိုလ်", url: "test9.html"},
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
    { title: "Naypyidaw Zoological Gardens" ,url : "Naypyitaw Zoological Gaeden.html"},
    { title: "နေပြည်တော် တိရစ္ဆာန်ဥယျာဉ် " ,url : "Naypyitaw Zoological Gaeden.html"},
    { title: "Thapyaygone Market", url : "thapyaygone.html"},
    { title: "သပြေကုန်းစျေး", url : "thapyaygone.html"},
    { title: "Ocean Super Center" ,url : "ocean supermarket.html"},
    { title: "Naypyitaw Myoma Market", url: "myoma.html"},
    { title: "မြို့မစျေး", url: "myoma.html"},
    { title: "Junction Centre Nay Pyi Taw" , url : "junction.html"},
    { title: "Hotels", url: "hotels.html" }
];

function initializeSearchAction() {
    const searchInput = document.getElementById('sidebarSearch');
    const suggestionsBox = document.getElementById('searchSuggestions');

    if (!searchInput || !suggestionsBox) return;

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
            suggestionsBox.innerHTML = '<div class="suggestion-item" style="color:#999;">Not found</div>';
            suggestionsBox.classList.remove('hidden');
        }
    });

    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.classList.add('hidden');
        }
    });
}

const toggleLanguageAction = () => {
    currentLang = currentLang === 'en' ? 'my' : 'en';
    localStorage.setItem('globalLanguage', currentLang);
    updateGlobalNavUI();
};

document.addEventListener('DOMContentLoaded', () => {
    injectGlobalLayouts();
    updateGlobalNavUI();
    initializeMenuInteractions();
    initializeSearchAction();
    
    if (document.getElementById('langToggle')) document.getElementById('langToggle').addEventListener('click', toggleLanguageAction);
    if (document.getElementById('langToggleMobile')) document.getElementById('langToggleMobile').addEventListener('click', toggleLanguageAction);
});

window.addEventListener('storage', (e) => {
    if (e.key === 'globalLanguage') {
        currentLang = e.newValue || 'en';
        updateGlobalNavUI();
    }
});