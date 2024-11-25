export default class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  print() {
    console.log(`${this.title} --${this.content}`);
  }
}
