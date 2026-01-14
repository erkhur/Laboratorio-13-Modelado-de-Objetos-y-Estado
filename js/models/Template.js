export default class Template {
  constructor(title, message, hashtag, category, author) {
    this.title = title;
    this.message = message;
    this.hashtag = hashtag;
    this.category = category; // estado local
    this.author = author;     // estado local
  }

  render() {
    const div = document.createElement("div");
    div.className = "template-card";

    div.innerHTML = `
      <h3>${this.title}</h3>
      <p>${this.message}</p>
      <p><strong>${this.hashtag}</strong></p>
      <small>Categoría: ${this.category}</small><br/>
      <small>Autor: ${this.author}</small>
    `;

    return div;
  }
}
