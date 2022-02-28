var englishQuoteBtn = document.getElementById("english");
var urduQuoteBtn = document.getElementById("urdu");

// English Quote Code
englishQuoteBtn.addEventListener("click", generateEnglishQuote);
function generateEnglishQuote() {
  // alert("aziz");
  englishQuoteBtn.style.backgroundColor = "tomato";
  englishQuoteBtn.style.color = "White";

  const generateQuote = function () {
    const quotes = [
      {
        quote: "Start before you’re ready",
        author: "Steven Pressfield",
        Imgs: '<img src="Images/TerryPratchett.jpg" />',
      },
      {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn",
        Imgs: '<img src="Images/HoraceSlughorn.jpg" />',
      },
      {
        quote:
          "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
        author: "Luna Lovegood",
        Imgs: '<img src="Images/LunaLovegood.jpeg" />',
      },
      {
        quote: " The first draft is just you telling yourself the story",
        author: "Terry Pratchett",
        Imgs: '<img src="Images/TerryPratchett.jpg" />',
      },
      {
        quote:
          "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley",
        Imgs: '<img src="Images/LunaLovegood.jpeg" />',
      },
      {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt",
        Imgs: '<img src="Images/KingsleyShacklebolt.jpg" />',
      },
      {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall",
        Imgs: '<img src="Images/LunaLovegood.jpeg" />',
      },
      {
        quote: "First, find out what your hero wants, then just follow him",
        author: "Ray Bradbury",
        Imgs: '<img src="Images/TerryPratchett.jpg" />',
      },
      {
        quote: "Half my life is an act of revision",
        author: "John Irving",
        Imgs: '<img src="Images/LunaLovegood.jpeg" />',
      },
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML =
      "Quote By : " + quotes[arrayIndex].author;

    document.getElementById("img").innerHTML = quotes[arrayIndex].Imgs;
  };
  document.getElementById("generate").addEventListener("click", generateQuote);
}

// Urdu Quote Quote
urduQuoteBtn.addEventListener("click", generateUrduQuote);
function generateUrduQuote() {
  // alert("aziz");
  urduQuoteBtn.style.backgroundColor = "tomato";
  urduQuoteBtn.style.color = "White";

  const generateQuote = function () {
    const quotes = [
      {
        quote: "مجبوری محبت سے زیادہ طاقتور ہمیں اہم تھا.یہی تو وہم تھاوتی ہے",
        author: "Ashfaq Ahmed",
        Imgs: '<img src="Images/ishfaqahmad.jpg" />',
      },
      {
        quote: "پیار اور مذاق ہر کسی کے ساتھ نہیں کیا جاتا",
        author: "Horace Slughorn",
        Imgs: '<img src="Images/HoraceSlughorn.jpg" />',
      },
      {
        quote: "بیشک میرا رب ہی ہے جو دلوں کو قرار دیتا ہے",
        author: "Luna Lovegood",
        Imgs: '<img src="Images/LunaLovegood.jpeg" />',
      },
      {
        quote: "بہت سکون ہے اس میں جسے لوگ نماز کہتے ہیں",
        author: "Terry Pratchett",
        Imgs: '<img src="Images/TerryPratchett.jpg" />',
      },
      {
        quote: "میں اہم تھا......یہی تو وہم تھا",
        author: "Arthur Weasley",
        Imgs: '<img src="Images/LunaLovegood.jpeg" />',
      },
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML =
      "Quote By : " + quotes[arrayIndex].author;

    document.getElementById("img").innerHTML = quotes[arrayIndex].Imgs;
  };
  document.getElementById("generate").addEventListener("click", generateQuote);
}
