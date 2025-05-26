function showSubcategories(category) {
  document.getElementById('main-categories').classList.add('hidden');
  const container = document.getElementById('subcategories-container');
  container.classList.remove('hidden');

  const titleMap = {
    video: "Video Subcategories",
    website: "Website Subcategories",
    graphics: "Graphics Subcategories"
  };
  document.getElementById('subcategory-title').textContent = titleMap[category] || "Subcategories";

  // Hide all subcategory cards
  const allSubs = document.querySelectorAll('.subcategory-card');
  allSubs.forEach(el => el.classList.add('hidden'));

  // Show only selected category subcategories
  const selectedSubs = document.querySelectorAll(`.sub-${category}`);
  selectedSubs.forEach(el => el.classList.remove('hidden'));
}

function backToMain() {
  document.getElementById('subcategories-container').classList.add('hidden');
  document.getElementById('main-categories').classList.remove('hidden');
}

//Addition on workpage

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  if (category) {
    showSubcategories(category);
  }
});


// Homepage

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const subcategory = urlParams.get("subcategory");

  if (subcategory) {
    showSingleSubcategory(subcategory);
  }
});

function showSingleSubcategory(name) {
  // Show subcategories container
  document.getElementById('main-categories').classList.add('hidden');
  const container = document.getElementById('subcategories-container');
  container.classList.remove('hidden');

  // Find the matching subcategory card
  const allSubs = document.querySelectorAll('.subcategory-card');
  let matchedCategory = '';

  allSubs.forEach(card => {
    if (card.dataset.subcategory === name) {
      card.classList.remove('hidden');
      matchedCategory = getCategoryFromClass(card.classList); // e.g., sub-video
    } else {
      card.classList.add('hidden');
    }
  });

  // Set the title based on matched category
  const titleMap = {
    'video': "Video Subcategories",
    'website': "Website Subcategories",
    'graphics': "Graphics Subcategories"
  };

  const readableCategory = titleMap[matchedCategory] || "Subcategories";
  document.getElementById('subcategory-title').textContent = readableCategory;
}

function getCategoryFromClass(classList) {
  for (const cls of classList) {
    if (cls.startsWith("sub-")) {
      return cls.replace("sub-", "");
    }
  }
  return '';
}
