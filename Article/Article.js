// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    let newButton = document.createElement('button'); 
    this.domElement.appendChild(newButton);
    
    this.closeButton = this.domElement.querySelector('button');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    this.closeButton.textContent = "close";
    this.openClose = false;
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    this.closeButton.addEventListener('click', this.closeArticle.bind(this));
    
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    if (this.openClose) {
      this.expandButton.textContent = "expand";
      this.openClose = false;
    } else {
      this.expandButton.textContent = "hide";
      this.openClose = true;
    }
  }

  closeArticle() {
    this.domElement.style.display = "none";
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(article => {
  return new Article(article);
});

